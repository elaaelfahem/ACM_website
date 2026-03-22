import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { sendMessageToAI } from '../../utils/geminiApi';
import './AIAssistant.css';

const INITIAL_MSG = [{ role: 'ai', text: 'Hello! I am your ENSTAB AI Tutor. Ask me any question about your courses.' }];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('aiChatHistory');
      return saved ? JSON.parse(saved) : INITIAL_MSG;
    } catch { return INITIAL_MSG; }
  });
  const [input, setInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const location = useLocation();

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    try {
      // Keep only the last 50 messages to avoid hitting storage limits  
      const toSave = messages.slice(-50);
      localStorage.setItem('aiChatHistory', JSON.stringify(toSave));
    } catch { /* Storage full, ignore */ }
  }, [messages]);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() && !selectedFile) return;

    const userMsg = input.trim() || "Can you analyze this file for me?";
    setInput('');
    
    // Display file attachment in the chat UI
    let displayMsg = userMsg;
    if (selectedFile) {
      displayMsg += `\n📎 [Attached: ${selectedFile.name}]`;
    }

    setMessages(prev => [...prev, { role: 'user', text: displayMsg }]);
    setIsLoading(true);

    // Determine context based on the URL (e.g., /matiere/analyse)
    const context = location.pathname.includes('/matiere/') 
      ? `The subject course: ${location.pathname.split('/').pop()}`
      : 'General ENSTAB studies';

    const aiResponse = await sendMessageToAI(userMsg, context, selectedFile);
    
    setSelectedFile(null); // Clear file after sending
    if (fileInputRef.current) fileInputRef.current.value = ''; // Reset input visually
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  const clearHistory = () => {
    if (window.confirm("Clear all chat history?")) {
      setMessages(INITIAL_MSG);
      localStorage.removeItem('aiChatHistory');
    }
  };


  return (
    <div className="ai-assistant-wrapper">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-title">
              <h3>ACM AI Tutor</h3>
              <span className="powered-by">
                powered by <span className="llama-badge">Llama 3.3</span>
              </span>
            </div>
            <div className="chat-header-btns">
              <button onClick={clearHistory} className="clear-chat-btn" title="Clear History">🗑️</button>
              <button onClick={() => setIsOpen(false)} className="close-chat-btn">✖</button>
            </div>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                <div className="message-bubble">
                  {msg.role === 'ai' ? (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  ) : (
                    <span style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</span>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                <div className="message-bubble loading">Thinking</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {selectedFile && (
            <div className="file-preview-banner">
              📎 {selectedFile.name} 
              <button onClick={() => setSelectedFile(null)}>✖</button>
            </div>
          )}

          <form onSubmit={handleSend} className="chat-input-area">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
              accept="image/*,application/pdf,text/plain"
            />
            <button 
              type="button" 
              className="attach-btn" 
              onClick={() => fileInputRef.current.click()}
              disabled={isLoading}
            >
              📎
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
            />
            <button className="send-btn" type="submit" disabled={isLoading || (!input.trim() && !selectedFile)}>
              Send
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button className="chat-bubble-btn" onClick={() => setIsOpen(true)}>
          <span className="sparkle">✨</span> AI
        </button>
      )}
    </div>
  );
};

export default AIAssistant;

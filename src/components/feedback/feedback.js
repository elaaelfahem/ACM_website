import React, { useState } from 'react';
import './feedback.css';
import feedbackImage from '../../assets/feed.png'; 
const Feedback = () => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackText);
    alert('Thank you for your feedback!');
    setFeedbackText('');
  };

  return (
      <div className="feedback-container">
      <div className="image-section">
        <img src={feedbackImage} alt="We'd love to hear from you" />
      </div>
      
      <div className="form-section">
        <h1>ACM would love to hear from you</h1>
        <p className="subtitle"></p>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback" className="feedback-label">FEEDBACK</label>
          <textarea
            id="feedback"
            placeholder="Enter your feedback here..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          />
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
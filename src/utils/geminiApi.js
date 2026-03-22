import Groq from "groq-sdk";

/**
 * Sends a message to the Groq API (Llama 3) with context about the user's current course.
 * @param {string} message - The student's text message
 * @param {string} courseContext - The subject matter context
 * @param {File} file - Optional file uploaded by the student
 */
export const sendMessageToAI = async (message, courseContext = "", file = null) => {
  try {
    const API_KEY = process.env.REACT_APP_GROQ_API_KEY;
    if (!API_KEY) {
      throw new Error("REACT_APP_GROQ_API_KEY is not set in .env");
    }

    const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

    const systemPrompt = `You are an expert AI tutor for the SOS ACM student platform. 
You are helping an engineering student from ENSTAB.
The student is currently looking at: ${courseContext ? courseContext : "the general archives"}.
Keep your answers concise, encouraging, and educational. Use markdown formatting when helpful.`;

    let userContent = message;

    // If a text/JSON file is attached, append its content
    if (file) {
      if (file.type.startsWith("text/") || file.type === "application/json") {
        const textContent = await file.text();
        userContent += `\n\nAttached File Content:\n${textContent}`;
      }
      // Note: Groq vision is supported for images with llama-4 models
      // For PDFs we append a note since Groq doesn't support inline PDFs
      else if (file.type === "application/pdf") {
        userContent += `\n\n[Student attached a PDF: ${file.name}. Please let them know you can read text files but not PDFs directly.]`;
      }
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userContent },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return chatCompletion.choices[0]?.message?.content || "I could not generate a response.";
  } catch (error) {
    console.error("Groq API Error:", error);
    return "I'm having trouble connecting right now. Please make sure the API key is set up correctly!";
  }
};

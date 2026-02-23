import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES, EDUCATION } from "../constants";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Kadari Sravya's personal portfolio. 
Your goal is to answer questions about Sravya's background, skills, projects, and experience based on the provided context.
Be professional, helpful, and concise.

Context about Kadari Sravya:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- About: ${PERSONAL_INFO.about}
- Education: ${EDUCATION.degree} at ${EDUCATION.institution} (${EDUCATION.period}), ${EDUCATION.grade}
- Skills: ${SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('; ')}
- Projects: ${PROJECTS.map(p => `${p.title}: ${p.description} (Tech: ${p.tech.join(', ')})`).join('; ')}
- Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
- Contact: Email: ${PERSONAL_INFO.email}, LinkedIn: ${PERSONAL_INFO.linkedin}

If a user asks something not covered in the context, politely inform them that you can only answer questions related to Sravya's professional background and suggest they contact her directly via email.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
}

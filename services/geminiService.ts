import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash-latest';
    
    // Construct a prompt for Seol Hwi-young
    const systemPrompt = `
      Current Date: November 2010.
      Role: Seol Hwi-young (Age 22, Male).
      Identity: Successor to Seolhwa Group (formerly mistaken as Shinhwa), Rank 0 in social hierarchy. Director of Strategic Planning.
      Traits: Arrogant, wealthy, violent, but deeply protective of Yoon Ha-neul (who is pregnant with what he believes is his child).
      
      User Role: Shin Chae-ah (Age 21, Female). CEO of Cheona Development.
      Relationship:
      - Childhood enemies/ex-classmates.
      - Shin Chae-ah returned after 3 years of ruin, rebuilding her family with the help of Executive Director Kim Tae-jin.
      - She is now a business rival threatening Seolhwa Group's redevelopment projects.
      - Seol Hwi-young hates her but is subconsciously attracted to her newfound "venom" and elegance.
      
      Setting: A Cyworld Minimi Chatroom (1:1 Messenger) or Guestbook comment reply.
      Language: Korean (Informal/Banmal, aggressive, cynical, adult male tone).
      
      Key Context:
      - You are currently in a VIP Room or Office.
      - You are extremely wary of "Cheona Development".
      - You will threaten her if she mentions Yoon Ha-neul or the baby.
      - Use 2010 era slang/emoticons sparingly but maintain a dark, noir atmosphere (e.g., ㅡㅡ, 하..., ㅋ, 미친년이).
      
      Conversation History:
      ${history.join('\n')}
      
      Shin Chae-ah: ${message}
      Seol Hwi-young:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: systemPrompt,
    });

    return response.text || "...... (서버 상태가 좋지 않다)";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "..... (통신 오류)";
  }
};
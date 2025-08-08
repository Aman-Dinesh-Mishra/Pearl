import { GEMINI_API_KEY, GEMINI_API_URL } from "./constants";

// Generates the prompt to get code output
export const generateRunPrompt = (language, code) => {
  return `Run the following ${language} code and provide the output only:\n\n${code}`;
};

// Generates the prompt to analyze complexity
export const generateComplexityPrompt = (language, code) => {
  return `Analyze the time and space complexity of this ${language} code. Explain clearly:\n\n${code}`;
};

// Makes the API call to Gemini
export const fetchGeminiOutput = async (prompt) => {
  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return result?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No output.";
};

// ✅ Add these to match EditorPage usage
export const fetchOutput = async (language, code) => {
  const prompt = generateRunPrompt(language, code);
  return await fetchGeminiOutput(prompt);
};

export const fetchComplexity = async (language, code) => {
  const prompt = generateComplexityPrompt(language, code);
  return await fetchGeminiOutput(prompt);
};

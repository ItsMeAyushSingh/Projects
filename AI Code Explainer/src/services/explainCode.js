import { InferenceClient } from "@huggingface/inference";

// Use VITE_ prefix for Vite env variables
const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;

const client = new InferenceClient(HF_TOKEN);

function cleanExplanation(text) {
  // Remove <think> tags and anything before the first bullet point or markdown
  return text
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .split('\n')
    .filter(line => /^(\s*[-*]|\s*\d+\.)\s+/.test(line))
    .join('\n')
    .trim();
}

export async function explainCodeWithHF(code, language) {
  const prompt = `
Explain the following ${language} code in bullet points. 
- Only include the essential explanations and in natural language.
- Format the answer in markdown.
- Do not include unnecessary details, meta-thoughts, or <think> tags.

Code:
${code}
`;

  let explanation = "";
  const stream = client.chatCompletionStream({
    provider: "hf-inference",
    model: "HuggingFaceTB/SmolLM3-3B",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  for await (const chunk of stream) {
    explanation += chunk.choices?.[0]?.delta?.content || "";
  }

  return cleanExplanation(explanation);
}

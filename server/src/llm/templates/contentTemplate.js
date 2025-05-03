
import { PromptTemplate } from "@langchain/core/prompts"; // Updated import


const systemTemplate = `As an educational content creator,generate comprehensive material for: {chapter}. The content for the chapter should be informative and educational. Utilize clear and engaging language to convey concepts, principles, and practical applications. Present the content in a format suitable for educational materials, such as textbooks or online resources. Use a conversational tone to engage the reader.`;

export const contentPrompt = PromptTemplate.fromTemplate(systemTemplate);



import { mistralModel } from "../models/palm.js"; // Updated model import
import { contentPrompt } from "../templates/contentTemplate.js";
import { jsonParser ,parseMarkdownToJson} from "../utils/jsonParser.js";

/**
 * Generate chapter content using LCEL chaining
 * @param {string} chapter - Chapter title to generate content for
 * @returns {Promise<string>} Generated educational content
 */
export const generateContent = async (chapter) => {
    try {
        const llm = mistralModel(0.8); // Initialize Mistral model
        const chain = contentPrompt.pipe(llm); // LCEL pipe syntax
        
        const result = await chain.invoke({ chapter });
        console.log("content");
        // console.log(result);
        console.log("result type is ",typeof result); 
        // console.log("and result is ",parseMarkdownToJson(result));
         
        // return parseMarkdownToJson(result);
        return result;
    } catch (error) {
        console.error("❌ Content generation error:", error);
        throw new Error("Failed to generate chapter content");
    }
};

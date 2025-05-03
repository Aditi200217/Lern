
import { mistralModel } from "../models/palm.js"; // Updated import for MistralAI model
import { coursePrompt } from "../templates/courseTemplate.js"; // Import the updated coursePrompt

import { jsonParser } from "../utils/jsonParser.js";

/**
 * Generate a course syllabus using the MistralAI model.
 * 
 * @param {string} topic - The topic for which to generate a course syllabus.
 * @returns {Promise<string>} A Promise that resolves to an array of chapters.
 * @throws {Error} An error is thrown if the model fails to generate a course syllabus.
 */
export const generateCourse = async (topic) => {
    try {
        const llm = mistralModel(0.2); // Initialize the MistralAI model
        const chain = coursePrompt.pipe(llm); // Chain the prompt with the model
        const result = await chain.invoke({ topic }); // Invoke the chain with input parameters
        console.log("course");
        // console.log(result);
        // console.log(typeof result); // Outputs: "string", "object", etc.
        // console.log(`type of `,typeof result);
        // console.log(result.output); // Outputs the generated outputc        
        
        return jsonParser(result); // Parse and return the JSON response
    } catch (error) {
        console.error("❌ Error inside course generation:", error);
        throw new Error("Course generation failed!");
    }
};

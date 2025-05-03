


import { MistralAI } from "@langchain/mistralai";

/**
 * Generate a MistralAI model.
 * 
 * @param {number} temperature - The temperature to use for the model.
 * @returns {MistralAI} A MistralAI model.
 */

export const mistralModel = (temperature) => {
    const model = new MistralAI({
        apiKey: process.env.MISTRAL_API_KEY,
        model: "codestral-latest", 
        temperature: temperature,
        maxTokens: 1024,
        maxRetries: 2,
    });

    return model;
}



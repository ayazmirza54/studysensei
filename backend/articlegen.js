// articlegen.js
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
require('dotenv').config();

const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.API_KEY;

async function getArticleContent(topic) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 1,
        topK: 64,
        topP: 0.95,
        maxOutputTokens: 8192,
        responseMimeType: 'text/plain' // Corrected MIME type definition
    };

    const parts = [
        { text: `input: Write an informative article on the topic "${topic}"` },
        { text: "output: " },
    ];

    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
        });

        const response = result.response;
        return response.text();
    } catch (error) {
        console.error('Error fetching data from Gemini API:', error);
        throw error;
    }
}

module.exports = { getArticleContent };

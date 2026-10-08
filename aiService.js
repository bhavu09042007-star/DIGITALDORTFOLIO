const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateBlog = async (topic) => {
    const model = genAI.getGenerativeModel({
        model: "gemini-3.6-flash"
    });

    const prompt = `
Write a simple and informative blog about:
${topic}

Include:
1. Title
2. Introduction
3. Main content
4. Conclusion
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
};

module.exports = {
    generateBlog
};
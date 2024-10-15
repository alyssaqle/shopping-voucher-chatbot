// backend/services/openaiService.js

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is correctly set
});

const openai = new OpenAIApi(configuration);

async function generateResponse(prompt) {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const responseData = response.data.choices[0].message.content;

    return responseData; // Return the response content directly
  } catch (error) {
    console.error("Error generating response:", error); // Log any OpenAI errors
    throw new Error("Error generating response");
  }
}

module.exports = { generateResponse };

console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);

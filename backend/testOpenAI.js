// testOpenAI.js
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function testOpenAI() {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello!' }],
    });
    console.log(response.data.choices[0].message.content);
  } catch (error) {
    console.error("Error testing OpenAI:", error);
  }
}

testOpenAI();

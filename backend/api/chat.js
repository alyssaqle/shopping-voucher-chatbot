const express = require('express');
const router = express.Router();
const { generateResponse } = require('../services/openaiService');

router.post('/chat', async (req, res) => {
  const { messages } = req.body; // Get the array of messages from the request body

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ response: "Invalid input. Please provide an array of messages." });
  }

  try {
    const userMessage = messages[messages.length - 1].content; // Get the last user's message
    const response = await generateResponse(userMessage); // Call the OpenAI service with the user's message

    return res.status(200).json({ response });
  } catch (error) {
    console.error("Error generating response:", error);
    return res.status(500).json({ response: "An error occurred while processing your request." });
  }
});

module.exports = router;

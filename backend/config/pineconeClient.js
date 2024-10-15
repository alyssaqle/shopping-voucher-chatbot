// backend/config/pineconeClient.js

const { PineconeClient } = require('@pinecone-database/pinecone');

async function initPinecone() {
  const pinecone = new PineconeClient();
  try {
    await pinecone.init({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT,
    });
    console.log("Pinecone client initialized successfully.");
    return pinecone;
  } catch (error) {
    console.error("Error initializing Pinecone:", error);
    return null;
  }
}

module.exports = initPinecone;  // Export initPinecone as a module

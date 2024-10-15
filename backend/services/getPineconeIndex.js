// backend/services/getPineconeIndex.js

const initPinecone = require('../config/pineconeClient'); // Import initPinecone from pineconeClient.js

async function getPineconeIndex() {
  const pinecone = await initPinecone();
  if (!pinecone) {
    throw new Error("Pinecone client initialization failed.");
  }
  return pinecone.Index(process.env.PINECONE_INDEX_NAME); // Access the Pinecone index
}

module.exports = getPineconeIndex; // Export getPineconeIndex function

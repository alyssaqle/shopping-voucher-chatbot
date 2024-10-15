// backend/services/voucherService.js

const getPineconeIndex = require('./getPineconeIndex'); // Import getPineconeIndex

async function upsertVoucherVectors(vectors) {
  const index = await getPineconeIndex();
  // Perform the upsert operation with the vectors
  await index.upsert(vectors);
}

module.exports = { upsertVoucherVectors }; // Export upsertVoucherVectors function

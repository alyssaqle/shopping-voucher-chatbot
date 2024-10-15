require('dotenv').config();
const { upsertVoucherVectors, querySimilarVouchers } = require('./services/voucherService');

const testVouchers = [
  {
    vector: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
    metadata: { category: 'electronics', discount: '10%' }
  },
  {
    vector: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
    metadata: { category: 'clothing', discount: '15%' }
  }
];

async function testPineconeIntegration() {
  try {
    // Step 1: Upsert vectors
    await upsertVoucherVectors(testVouchers);
    console.log("Upsert successful!");

    // Step 2: Query vectors
    const sampleVector = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
    const result = await querySimilarVouchers(sampleVector);
    console.log("Query successful! Results:", result);
  } catch (error) {
    console.error("An error occurred during the test:", error);
  }
}

testPineconeIntegration();

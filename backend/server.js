require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const chatRoute = require("./api/chat");

const app = express();
const port = 5002;

app.use(cors());
app.use(bodyParser.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Use the chat route
app.use("/api", chatRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

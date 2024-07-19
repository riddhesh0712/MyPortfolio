// server/index.js
const express = require('express');

const connectDB = require('./db')

const app = express();

const mongoDBUri = "mongodb://localhost:27017/PortfolioDB"

app.use(express.json());

connectDB(mongoDBUri);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
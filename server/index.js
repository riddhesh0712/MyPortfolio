// server/index.js
const express = require('express');

const connectDB = require('./db')

const app = express();
const port = 5000;
const mongoDBUri = "mongodb://localhost:27017/PortfolioDB"

app.use(express.json());

connectDB(mongoDBUri);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
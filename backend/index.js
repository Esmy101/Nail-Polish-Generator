const express = require('express')
require('dotenv').config()
const routes = require("./routes");

const db = require("./config/connection");

const PORT = process.env.port || 3001;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
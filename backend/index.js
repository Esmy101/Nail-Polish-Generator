const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const routes = require("./routes");

const db = require("./config/connection");

const PORT = process.env.port || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(routes)

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}.`);
});

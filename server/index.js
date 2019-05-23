const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}.`);
});

const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const products_controller = require("./products_controller");

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.post("/api/products", products_controller.create);
app.get("/api/products", products_controller.getAll);
app.get("/api/products/:id", products_controller.getOne);
app.put("/api/products/:id", products_controller.update);
app.delete("/api/products/:id", products_controller.delete);

app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}.`);
});

const express = require("express");
const port = 8000;
const db = require("./config/mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, (req, res) => {
  console.log("Server listening/UP");
});

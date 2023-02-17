const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./Routes/route");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/watchlist")
  .then(console.log("connection made"))
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use("/api/watchList", router);
app.listen(3000, (req, res) => {
  console.log(" listening on port 3000");
});

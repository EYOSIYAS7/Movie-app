const express = require("express");
const { add, watchList, signUp } = require("../Controller/controller");
const route = express.Router();

route.get("/", add);
route.post("/", watchList);
route.post("/signUp", signUp);
module.exports = route;

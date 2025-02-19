const express = require("express");
const route = express.Router();
const controller = require("../controllers/api");

route.get("/", controller.GetLevels);

module.exports = route;

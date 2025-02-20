const express = require("express");
const route = express.Router();
const controller = require("../controllers/api");

route.get("/", controller.getLevels);
route.get("/:id", controller.getLevel);

module.exports = route;

const express = require("express");
const route = express.Router();
const controller = require("../controllers/api");

route.get("/", controller.getLevels);
route.get("/:id", controller.getLevel);
route.get("/leaderboard/:id", controller.getLeaderboard);
route.post("/leaderboard/:id", controller.addToLeaderboard);
module.exports = route;

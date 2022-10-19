const express = require("express");
const router = express.Router();
const tasksRoutes = require("./tasks");

router.get("/", (req, res, next) => {
  res.send("api its working");
});

router.use("/tasks", tasksRoutes);

module.exports = router;

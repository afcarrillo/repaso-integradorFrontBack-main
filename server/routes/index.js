const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("api its working");
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/1", (req, res) => {
  res.send({ title: "look at this cutie" });
});

router.get("/2", (req, res) => {
  res.send({ title: "other cutie" });
});

module.exports = router;

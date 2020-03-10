const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

// - GET (all, individual)
app.get("/api/students", (req, res) => {
  res.send({});
});
// - PUT (individual)
app.put("/api/students", (req, res) => {
  res.send({});
});
// - DELETE (individual)
app.delete("/api/students", (req, res) => {
  res.send({});
});
// - POST (individual)
app.post("/api/students", (req, res) => {
  res.send({});
});

module.exports = app;

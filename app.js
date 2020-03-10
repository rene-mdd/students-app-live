const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

const students = [
  {
    name: "Rupert",
    lastname: "Jalili",
    age: 30,
    class: "FBW101",
    location: "BER"
  }
];

// - GET (all, individual)
app.get("/api/students", (req, res) => {
  res.status(200).json(students);
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

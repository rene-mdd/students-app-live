var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res, next) {
  res.send({ title: "Express" });
});

module.exports = app;

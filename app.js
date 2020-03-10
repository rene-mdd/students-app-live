var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var app = express();

app.use((req, _, next) => {
  console.log(req.method, req.url);

  next();
});
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/cute-cat", (req, res) => {
  res.send({ title: "look at this cutie" });
});

app.post("/cute-cat", (req, res) => {
  res.send({ title: "posted cute cat" });
});

app.get("/", function(req, res, next) {
  res.send({ title: "Express" });
});

module.exports = app;

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

const cuteCatRouter = require("./routes/cuteCatRoutes");

var app = express();

app.use((req, _, next) => {
  console.log(req.method, req.url);

  next();
});
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/cute-cats", cuteCatRouter);

app.get("/", function(req, res) {
  res.send({ title: "Express" });
});

app.use("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;

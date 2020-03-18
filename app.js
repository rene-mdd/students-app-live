const express = require("express");

const app = express();

//middle ware imports
const logs = require("./middleware/logs");

// Routes
const studentRoutes = require("./routes/students");
// app.set('port', 2100);
app.use(express.json());
app.use('/api', logs);
app.use("/api/students", studentRoutes);

module.exports = app;

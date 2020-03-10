const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

let students = [
  {
    name: "Rupert",
    lastname: "Jalili",
    age: 30,
    class: "FBW101",
    location: "BER"
  }
];

app.use(express.json());

// - GET (all, individual)
app.get("/api/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/api/students/:name", (req, res) => {
  const student = students.find(
    ({ name }) => name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (student) {
    return res.status(200).json(student);
  }

  res.status(404).json({ error: "Student not found" });
});

// - PUT (individual)
app.put("/api/students/:name", (req, res) => {
  if (req.params.name && req.body) {
    students = students.map((student) => {
      if (student.name.toLowerCase() === req.params.name.toLowerCase()) {
        Object.assign(student, req.body);
      }

      return student;
    });
  }
  res.send(students);
});
// - DELETE (individual)
app.delete("/api/students/:name", (req, res) => {
  if (req.params.name) {
    students = students.filter(
      ({ name }) => name.toLowerCase() !== req.params.name.toLowerCase()
    );
  }

  res.send(students);
});
// - POST (individual)
app.post("/api/students", (req, res) => {
  if (req.body) {
    students.push(req.body);
    return res.send({
      status: "success",
      message: `student with name: ${req.body.name} added`
    });
  }

  res.send("NO!");
});

module.exports = app;

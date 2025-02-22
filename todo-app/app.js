const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const getTasks = () => JSON.parse(fs.readFileSync("tasks.json"));

app.get("/tasks", (req, res) => {
  res.render("tasks", { tasks: getTasks() });
});

app.get("/task", (req, res) => {
  const task = getTasks().find(t => t.id == req.query.id);
  res.render("task", { task });
});

app.post("/add-task", (req, res) => {
  const tasks = getTasks();
  const newTask = { id: tasks.length + 1, text: req.body.text, done: false };
  tasks.push(newTask);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
  res.redirect("/tasks");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

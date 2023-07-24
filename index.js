import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let todays = [];

let works = [];

app.get("/", (req, res) => {
  res.render("today.ejs", {
    DAY: day,
    MONTH: month,
    YEAR: year,
    tasks: todays,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    taskwork: works,
  });
});

app.get("/today", (req, res) => {
  res.render("/");
});

app.post("/add-today", (req, res) => {
  const newTask = req.body["task"];

  if (newTask) {
    let newTodo = { id: todays.length + 1, task: newTask };
    todays.push(newTodo);
  }

  res.render("today.ejs", {
    tasks: todays,
    DAY: day,
    MONTH: month,
    YEAR: year,
  });
});

app.post("/add-work", (req, res) => {
  const newTask1 = req.body["task1"];

  if (newTask1) {
    let newTodo1 = { id: works.length + 1, task1: newTask1 };
    works.push(newTodo1);
  }

  res.render("work.ejs", {
    taskwork: works,
  });
});

app.listen(port, (req, res) => {
  console.log(`Listening on PORT ${port}`);
});

const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let d = new Date().getDay();
let m = new Date().getMonth();

let day = weeks[d];
let month = months[m];
let year = new Date().getFullYear();

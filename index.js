// console.log("Hello world!!!.................");

// const fs = require("fs");
// const _ = require("lodash");
// const yargs = require("yargs");

// const notes = require("./notes.js");

// // console.log("process", process.argv);

// console.log("yargs", yargs.argv);

// var argv = yargs.argv;
// var command = argv._[0];

// if (command === "list") {
//   notes.getAllNotes();
//   console.log("Listed all notes");
// } else if (command === "read") {
//   notes.readNote(argv.title);
//   console.log("Readed all notes");
// } else if (command === "create") {
//   notes.createNote(argv.title, argv.body);
//   console.log("Note Created");
// } else if (command === "remove") {
//   notes.removeNote(argv.title);
//   console.log("Note Removed");
// } else {
//   console.log("Command Not Found");
// }

const express = require("express");
const app = express();

app.use(express.static("public")); // middleware
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/view", (req, res) => {
  res.render("viewPage"); // file adding
});

app.get("/api", (req, res) => {
  res.json({
    name: "Mr.Ash",
    degree: "BE-ECE",
  }); // file adding
});

app.listen(3000, console.log("server Started at port 3000"));

console.log("Hello world!!!.................");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

// console.log("process", process.argv);

console.log("yargs", yargs.argv);

var argv = yargs.argv;
var command = argv._[0];

if (command === "list") {
  notes.getAllNotes();
  console.log("Listed all notes");
} else if (command === "read") {
  notes.readNote(argv.title);
  console.log("Readed all notes");
} else if (command === "create") {
  notes.createNote(argv.title, argv.body);
  console.log("Note Created");
} else if (command === "remove") {
  notes.removeNote(argv.title);
  console.log("Note Removed");
} else {
  console.log("Command Not Found");
}

console.log("Hello world!!!");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

const res = notes.addNote(10, 5);
console.log("Res...", res);

// const userInfo = os.userInfo();

// fs.appendFile("message.txt", ` You are ${notes.age} `, (err) => {
//   if (err) {
//     console.log("error....", err);
//   }
// });

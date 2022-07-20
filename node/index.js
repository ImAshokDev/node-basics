console.log("Hello world!!!");

const fs = require("fs");

fs.appendFile("message.txt", "Hello Message!", (err) => {
  if (err) {
    console.log("error....", err);
  }
});

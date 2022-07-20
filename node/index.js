console.log("Hello world!!!");

const fs = require("fs");
const os = require("os");

const userInfo = os.userInfo();

fs.appendFile("message.txt", `userData: ${userInfo.username}`, (err) => {
  if (err) {
    console.log("error....", err);
  }
});

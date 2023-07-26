const fs = require("fs");

//Make some logic to create the diretory on if condition

if (fs.existsSync("./newData")) {
  //To make a new Directory
  fs.rmdir("./newData", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Directory Deleted");
    }
  });
}

//Remove the exist directory

if (!fs.existsSync("./newData")) {
  //To Remove the exist Directory
  fs.mkdir("./newData", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Directory Created");
    }
  });
}

process.on("uncaughtException", (err) => {
  console.error(`There is an caught Error: ${err}`);
  process.exit(1);
});

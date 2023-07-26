//import the file system and path for node
const fs = require("fs");
const path = require("path");

//Create the file for read and write in the file to new file
const rs = fs.createReadStream(path.join(__dirname, "file", "bigfile.txt"), {
  encoding: "utf-8",
});
const ws = fs.createWriteStream(path.join(__dirname, "file", "Newbigfile.txt"));

//Method 1
// function to read and copy to new file
rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});

//Method 2
//Efficient way to handle the big way
rs.pipe(ws);

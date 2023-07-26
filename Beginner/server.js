//import the core module in node js
const fs = require("fs").promises;
const path = require("path");

// The node has a structure to read,write and updated as steps its called the
//callbackhell of functions and functions overon
//so we use the promises and asyn to break that structure

//Declaring the asyn function

const fileCall = async () => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "file", "random.txt"),
      "utf-8"
    );
    console.log(data);
    await fs.writeFile(
      path.join(__dirname, "file", "write.txt"),
      "Content added"
    );
    console.log("write Completed");
    await fs.appendFile(
      path.join(__dirname, "file", "append.txt"),
      "Updated Value"
    );
    console.log("append completed");
    await fs.rename(
      path.join(__dirname, "file", "append.txt"),
      path.join(__dirname, "file", "appendUpdate.txt"),
      console.log("rename completed")
    );
    console.log("File name changed");
    await fs.unlink(path.join(__dirname, "file", "appendupdated.txt"));
    console.log("Deleted");
  } catch (err) {
    console.log(err);
  }
};

fileCall();

// //Create the text file and reading the file.
// fs.readFile(
//   path.join(__dirname, "file", "random.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log(data);
//     }
//   }
// );

// //Create the new text file in file directory and add the content in it.

// fs.writeFile(
//   path.join(__dirname, "file", "write.txt"),
//   "Content added",
//   (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Write Completed");
//     }
//   }
// );

// // Creating the new file and adding the content but the append is also write and update in same text file.
// fs.appendFile(
//   path.join(__dirname, "file", "append.txt"),
//   "Content added",
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("append Completed");
//     }
//   }
// );

// //Adding the extra content in the same file using append

// fs.writeFile(
//   path.join(__dirname, "file", "write.txt"),
//   "Content added ",
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Write Completed");
//       fs.appendFile(
//         path.join(__dirname, "file", "write.txt"),
//         "/n/n append updated",
//         (err) => {
//           if (err) {
//             throw err;
//           } else {
//             console.log("append Completed");
//           }
//         }
//       );
//     }
//   }
// );

// //Rename the file using rename in node

// fs.rename(
//   path.join(__dirname, "file", "append.txt"),
//   path.join(__dirname, "file", "appendupdated.txt"),
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("append file renamed Completed");
//     }
//   }
// );

//exit on uncaught error

process.on("uncaughtException", (err) => {
  console.error(`There is an caught Error: ${err}`);
  process.exit(1);
});

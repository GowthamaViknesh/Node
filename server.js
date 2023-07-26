//Create the port for server endpoint
const http = require("http");
const PORT = 5002;
const fs = require("fs");
//To create the port we want to use CreateServer()
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Page Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
  //  res.write("Server is Created");
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on" + PORT);
  }
});

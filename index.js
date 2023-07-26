const logEvents = require("./logevents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("log", () => {
  logEvents("Event Logged");
});

myEmitter.emit("log", "log event created");

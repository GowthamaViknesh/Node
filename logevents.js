const { format } = require("date-fns");

const fs = require("fs");
const fspromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "dd-MM-yyyy\tHH:MM:SS")}`;
  const logItem = `${dateTime}\t\n${message}\n\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logsfile"))) {
      await fspromises.mkdir(path.join(__dirname, "logsfile"));
    }
    await fspromises.appendFile(
      path.join(__dirname, "logsfile", "Eventfile.txt"),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;

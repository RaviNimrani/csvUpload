const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/CSV_Upload");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connneting the mongo db"));

db.once("open", function () {
  console.log(" Successfully connected to mongodb");
});

module.exports = db;

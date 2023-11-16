const express = require("express");

const port = 8000;
const app = express();

// const csvParser = require("csv-parser");
const path = require("path");
const bodyParser = require("body-parser");

const expressLayouts = require("express-ejs-layouts");

const db = require("./config/mongoose");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(__dirname + "/uploads"));

//setting up static assets
app.use(express.static("./assets"));

// setting layouts
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//setting up routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error while loading", err);
  }
  console.log("successFully Connected");
});

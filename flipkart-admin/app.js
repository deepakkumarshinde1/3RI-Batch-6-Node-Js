const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const AppRouting = require("./routes/AppRouting");

const app = express();
app.use(
  session({
    secret: "abcd",
    resave: true,
    saveUninitialized: true,
  })
);
// enable the post + file
app.use(express.json()); // enable raw data
app.use(express.urlencoded({ extended: false })); // form_data + x-www-from-urlencoded

// config ==> view
app.set("views", "./views");
app.set("view engine", "pug");

// config static
app.use(express.static("public"));

// add routing
app.use("/", AppRouting);

const MONGO_DB_URI = "mongodb://127.0.0.1:27017/batch28June";
const PORT = 3050;

mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("db is connected successfully");

    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });

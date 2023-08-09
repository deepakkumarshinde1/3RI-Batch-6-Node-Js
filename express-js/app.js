// import express
const express = require("express");
const AppRoutes = require("./routes/AppRoutes");

// create a server
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

// client ==> request ==> Server
// server ==> response ==> Client

// to use this route in application
app.use("/", AppRoutes);

// add port number
const PORT = 3040;
app.listen(PORT, () => {
  console.log("running on port ", PORT);
});

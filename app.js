const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.static(__dirname + "/views/home.html"));

// app.use((req, res, next) => {
//   //   console.log("In the middleware");
//   // next allows the client to proceed further and access all the routes defined afterwards
//   next();
// });

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(3000);

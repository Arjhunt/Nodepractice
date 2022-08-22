var express = require("express");
var app = express();

//creating a call back
app.get("/", (req, res) => {
  res.send("Hello world");
});


// routing
var PORT = app.listen(3000, () => {
  console.log("App opened successfully");
});

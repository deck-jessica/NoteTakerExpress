// set up requirements for server and to build out pages
var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();

var PORT = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
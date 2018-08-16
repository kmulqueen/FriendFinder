// Create dependencies: path, express, and body-parser
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Set up express server
var app = express();
const PORT = process.env.PORT || 3000;

// Set up express server to handle data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listen on server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

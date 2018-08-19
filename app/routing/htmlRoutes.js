// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page. 

// create dependency for path
const path = require("path");
const express = require("express");

// routing
module.exports = function(app) {
    // HTML GET requests
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
};

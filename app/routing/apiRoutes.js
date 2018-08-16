// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

// load data sources
var friendsData = require("../data/friends");

// routing
module.exports = function(app) {
    //api get requests
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // api POST requests
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(true);
    });
};

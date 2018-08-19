// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

// load data sources
var friendsData = require("../data/friends");

// routing
module.exports = function (app) {
    //api get requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // api POST requests
    app.post("/api/friends", function (req, res) {
        // create variable for new person
        var newPerson = req.body;

        // get access to their scores
        var newPersonScores = newPerson.scores;

        // Set up a variable to hold the total difference. I'm setting it high so that it can be replaced by a person's score.
        var totalDifference = 100;

        // Set up variables to hold the best match's name and photo
        var matchName = "";
        var matchPhoto = "";

        // loop through all people in friends array
        for (var i = 0; i < friendsData.length; i++) {
            // set up a variable to hold the difference between scores
            var difference = 0;
            // looping through the new pesron's answers and finding the difference between every other person's scores.
            for (var j = 0; j < newPersonScores.length; j++) {
                difference += Math.abs(friendsData[i].scores[j] - newPersonScores[j]);
            };
            // If a person's score is lower than the totalDifference, then replace the totalDifference with their score. This will eventually come up with the best match.
            if (difference < totalDifference) {
                totalDifference = difference;
                // Update the match
                matchName = friendsData[i].name;
                matchPhoto = friendsData[i].photo;
            };
        };
        // After all of those calculations are done, push the new person to the friends array. If you push them to the array beforehand, they will match themselves.
        friendsData.push(newPerson);
        console.log("==== New Person and Match info:")
        console.log(newPerson);
        console.log("Difference: " + totalDifference);       
        console.log("Match name: " + matchName);
        console.log("Match photo: " + matchPhoto);

        // Send result
        res.json({
            status: "OK",
            matchName: matchName,
            matchPhoto: matchPhoto
        });

    });
};
var friends = require("../data/friends.js")
// var app = require("../../server.js")
// var app = require("./htmlRoutes.js")


module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
	  return res.json(friends);
	});

	app.post("/api/friends", function(req, res) {

		console.log(req.body)

	    var userData = req.body;
	    var newUserName = req.body.name;
	    var newUserPhoto = req.body.photo;
	    var newUserScores = userData.scores;

		var bestMatch = {
			name: "",
			photo: "",
			bestDifference: 1000
		};
	    var scoreDifference;
	    for (var i = 0; i < friends.length; i++) {
			var checkFriend = friends[i];
			newDifference = 0;
			console.log(checkFriend);
			for (var j = 0; j < checkFriend.scores.length; j++) {
		        var checkFriendScore = checkFriend.scores[j];
		        var currentUserScore = newUserScores[j];
		        newDifference += Math.abs(parseInt(currentUserScore) - parseInt(checkFriendScore));
		        console.log(newDifference)
      		}
			if (newDifference <= bestMatch.bestDifference) {
				bestMatch.name = checkFriend.name;
				bestMatch.photo = checkFriend.photo;
				bestMatch.bestDifference = newDifference;
      		}
    	}
    	console.log(bestMatch)
	    friends.push(userData);   
	    res.json(bestMatch);
	});
}


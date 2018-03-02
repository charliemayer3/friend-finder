var possibleFriends = require("../data/friends.js")
var app = require("../../server.js")
var app = require("./htmlRoutes.js")


module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
	  return res.json(possibleFriends);
	});

	app.post("/api/friends", function(req, res) {

		console.log(req.body)

	    var userData = req.body;

	    // console.log(userData);

	    possibleFriends.push(userData);

	    res.json(userData);

	    console.log(possibleFriends)

	    var bestMatch = {}

	    for (var i = 0; i < possibleFriends.length; i++) {
	    	
	    }

	});
}
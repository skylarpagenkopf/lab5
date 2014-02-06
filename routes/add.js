var data = require("../data.json");

exports.addFriend = function(req, res) {
	var newFriend = {
		name: req.query.name,
		imageURL: "http://lorempixel.com/400/400/people",
		description: req.query.description
	}
	data["friends"].push(newFriend);
	res.render('add', { data: data });
}
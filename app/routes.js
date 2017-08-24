// app/routes.js

// grab the nerd model we just created
var List = new require('./models/list');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// get all lists
	app.get('/api/list/all', function(req, res) {
		// use mongoose to get all lists in the database
		List.find({}).exec( function(err, lists) {

			if (err)
			{
				res.status(400);
				res.send(err);
				return;
			}

			res.json(lists); // return all lists in JSON format
			return;
		});
	});


	// post new list
	app.post('/api/list', function(req, res) {
		console.log('post to db hit');
		if (req.body.what == null || req.body.what == '')
		{
			res.status(400);
			res.send('None shall pass!');
			return;
		}
		if (req.body.why == null || req.body.why == '')
		{
			res.status(400);
			res.send('None shall pass!');
			return;
		}

		console.log('passed empty set tests');
		
		//make a new list to save
		var tempList = new List({
			what: req.body.what,
			why: req.body.why,
			done: false
		});

		console.log('made the temp list');

		//save the new list
		tempList.save( function (err) {
			if (err)
			{
				res.status(400);
				res.send(err);
				return;
			}
			res.json({ message: 'List Created!' });
			return;
		})
	});


	// route to handle delete goes here (app.delete)
	app.delete("/api/list", function(req, res) {
		List.find({ done: true }).remove().exec( function(err, lists) {

			if (err)
			{
				res.status(400);
				res.send(err);
				return;
			}

			res.status(200);
			res.JSON("");
			return;
		});
	});

	// frontend routes =========================================================

};
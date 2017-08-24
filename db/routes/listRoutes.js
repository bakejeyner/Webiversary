// grab the nerd model we just created
var List = new require('../models/listModel');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// get all lists
	app.get('/api/list/all', function(req, res) {
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

	//route to handle put
	app.put("/api/list", function(req, res) {
		List.update({  _id: req.body.id }, { $set: {done: req.body.done }})
		.exec( function (err, list) {
			if (err)
			{
				res.status(400);
				res.send(err);
				return;
			}

			res.status(200);
			res.json("");
			return;
		});
	});


	// route to handle delete goes here (app.delete)
	app.delete("/api/list/done", function(req, res) {
		List.remove({ done: true }).exec(function (err, list) {
			if (err)
			{
				res.status(400);
				res.send(err);
				return;
			}

			res.status(200);
			res.json("");
			return;
		});
	});

	// frontend routes =========================================================

};
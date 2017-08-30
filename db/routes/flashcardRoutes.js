var Flashcard = require("../models/flashcardModel.js")

module.exports = function (app) {

	// get all flashcards
	app.get("/api/flashcard/all", function(req, res) {
		Flashcard.find({}).exec( function(err, flashcards) {

			if (err)
			{
				res.status(400);
				res.send(err);
				return;
			}

			res.json(flashcards);
			return;
		});
	});


	// create new flashcard
	app.post("/api/flashcard", function(req, res) {
		if (req.body.frontText == null || req.body.frontText == '')
		{
			res.status(400);
			res.send('None shall pass!');
			return;
		}
		if (req.body.backText == null || req.body.backText == '')
		{
			res.status(400);
			res.send('None shall pass!');
			return;
		}
		
		//make a new list to save
		var tempFlashcard = new Flashcard({
			frontText: req.body.frontText,
			backText: req.body.backText
		});

		//save the new list
		tempFlashcard.save( function (err) {
			if (err)
			{
				res.status(400);
				res.send(err);
				return;
			}
			res.json({ message: 'Flashcard Created!' });
			return;
		})
	});


	// update flashcard
	app.put("/api/flashcard", function(req, res) {
		Flashcard.update({  _id: req.body.id }, { $set: { frontText: req.body.frontText, backText: req.body.backText }})
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


	// delete flashcard
	app.delete("/api/list/done", function(req, res) {
		List.remove({ _id: req.body.id }).exec(function (err, list) {
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
}
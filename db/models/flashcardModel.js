var mongoose = require('mongoose');

module.exports = mongoose.model('Flashcard', {
	frontText : {type : String, default: ''},
	backText : {type : String, default: ''}
});
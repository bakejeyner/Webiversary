var mongoose = require('mongoose');

module.exports = mongoose.model('List', {
	what : {type : String, default: ''},
	why : {type : String, default: ''},
	done: {type: Boolean, default: false}
});
// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('List', {
	what : {type : String, default: ''},
	why : {type : String, default: ''},
	done: {type: Boolean, default: false}
});
var listRoutes = require("./listRoutes")
var flashcardRoutes = require("./flashcardRoutes")

module.exports = function (app) {
	listRoutes(app);
	flashcardRoutes(app);
}
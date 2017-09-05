angular.module("IndexFact", [])
.factory("IndexFactory", [ "$http", function ($http) {
	var factory = {};

	var songUrl = "mp3/"

	factory.getAllSongs = function () {
		return [
			{
				name: "Thrilla in Manilla",
				artist: "Chance Greyson",
				url: songUrl + "Thrilla_in_Manilla.mp3"
			},

			{
				name: "Hentai Superstar",
				artist: "Fusq X Hentai Dude",
				url: songUrl + "Hentai_Superstar.mp3"
			}
		];
	};

	return factory;
}])
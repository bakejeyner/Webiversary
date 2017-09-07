angular.module("IndexFact", [])
.factory("IndexFactory", [ "$http", function ($http) {
	var factory = {};

	var imgUrl = "img/";
	var songUrl = "mp3/";

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

	factory.getBackgroundImageUrls = function () {
		return [
			imgUrl + "wormz.png",
			imgUrl + "vintage-concrete.png",
			imgUrl + "doodles.png",
			imgUrl + "skyscraper.png",
			imgUrl + "memphis-colorful.png",
			imgUrl + "gaming-pattern.png",
			imgUrl + "organic-tiles.png",
			imgUrl + "vertical-waves.png"
		];
	}

	return factory;
}])
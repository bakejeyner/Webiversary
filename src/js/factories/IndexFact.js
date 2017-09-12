angular.module("IndexFact", [])
.factory("IndexFactory", [ "$http", function($http) {
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
			},

			{
				name: "Running in the 90's",
				artist: "Initial D",
				url: songUrl + "Running_in_the_90's.mp3"
			},

			{
				name: "Girls on Boys",
				artist: "Galantis & ROZES",
				url: songUrl + "Girls_on_Boys.mp3"
			},

			{
				name: "Lonely Together",
				artist: "Avicii & Rita Ora",
				url: songUrl + "Lonely_Together.mp3"
			},

			{
				name: "Learn To Let Go",
				artist: "Kesha",
				url: songUrl + "Learn_To_Let_Go.mp3"
			},

			{
				name: "Young",
				artist: "The Chainsmokers",
				url: songUrl + "Young.mp3"
			},

			{
				name: "Matches",
				artist: "Cash Cash & ROZES",
				url: songUrl + "Matches.mp3"
			},

			{
				name: "Into the Ocean",
				artist: "Blue October",
				url: songUrl + "Into_the_Ocean.mp3"
			},

			{
				name: "Miami 82",
				artist: "Syn Cole",
				url: songUrl + "Miami_82.mp3"
			},

			{
				name: "17",
				artist: "Cyrus",
				url: songUrl + "17.mp3"
			},

			{
				name: "Ricky Ricardo",
				artist: "KAPTN",
				url: songUrl + "Ricky_Ricardo.mp3"
			},

			{
				name: "Inside Out",
				artist: "The Chainsmokers",
				url: songUrl + "Inside_Out.mp3"
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
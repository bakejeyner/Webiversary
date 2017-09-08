angular.module("HomeFact", [])
.factory("HomeFactory", [ "$http", function($http) {
	var factory = {};

	var imgUrl = "img/";

	factory.getPictures = function() {
		return [
			{
				url: imgUrl + "beauty.jpg",
				comment: "I'm Dating This :|"
			},
			{
				url: imgUrl + "brahan.png",
				comment: "Answer The Question"
			},
			{
				url: imgUrl + "cassy.png",
				comment: "Clemenses"
			},
			{
				url: imgUrl + "ccpumpkin.jpg",
				comment: "Worst Pumpkin Ever"
			},
			{
				url: imgUrl + "chins.jpg",
				comment: "The Chins"
			},
			{
				url: imgUrl + "chubby-chekkey.jpeg",
				comment: "Ouch"
			},
			{
				url: imgUrl + "cop.jpg",
				comment: "Never Forget"
			},
			{
				url: imgUrl + "god.jpg",
				comment: "Greek God"
			},
			{
				url: imgUrl + "jelley-swap.jpg",
				comment: "Who Made Who Ugly?"
			},
			{
				url: imgUrl + "jovin.png",
				comment: "Jovan... Transcended"
			},
			{
				url: imgUrl + "kayak.jpg",
				comment: "Kanoe 4 2"
			},
			{
				url: imgUrl + "kyler-swap.jpg",
				comment: "Get Away From Me"
			},
			{
				url: imgUrl + "larry.jpg",
				comment: "I'm So Sorry"
			},
			{
				url: imgUrl + "no-nose.png",
				comment: "Nobody Nose"
			},
			{
				url: imgUrl + "nurse-joy.jpg",
				comment: "Striking"
			},
			{
				url: imgUrl + "nurse-legup.jpg",
				comment: "Fabulous"
			},
			{
				url: imgUrl + "nurse-plain.jpg",
				comment: "Boring"
			},
			{
				url: imgUrl + "ponder.jpg",
				comment: "Nice Emo Nail Polish"
			},
			{
				url: imgUrl + "rickkin.jpg",
				comment: "PUMPKIN RICK!!!"
			},
			{
				url: imgUrl + "sosilly.jpg",
				comment: "Sex Fire Monster"
			},
			{
				url: imgUrl + "tree-peen.png",
				comment: "Pre-Zoloft "
			},
			{
				url: imgUrl + "tyler.png",
				comment: "*Squeeze*"
			},
			{
				url: imgUrl + "unknowingly.jpg",
				comment: "Fuck Costco"
			},
			{
				url: imgUrl + "backleg.jpg",
				comment: "Xept Dat Costco Ass"
			},
			{
				url: imgUrl + "sexy.jpg",
				comment: "Lingerie Wish List"
			}
		];
	};

	return factory;

}]);
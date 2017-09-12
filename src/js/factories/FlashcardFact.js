angular.module("FlashcardFact", [])
.factory("FlashcardFactory", [ "$http", function ($http) {

	var factory = {};

	factory.getAllFlashcards = function () {
		return $http.get("/api/flashcard/all")
		.then( function (data) {
			return data;
		});
	};

	factory.createFlashcard = function (frontText, backText) {
		return $http({
			method: "POST",
			url: "/api/flashcard",
			data: {
				frontText: frontText,
				backText: backText
			}
		}).then( function successCallback (res) {
			console.log("Successful Post!");
		}, function errorCallback (res) {
			console.log("Unsuccessful Post.");
		});
	};

	factory.updateFlashcard = function (id, frontText, backText) {
		return $http({
			method: "PUT",
			url: "/api/flashcard",
			data: {
				id: id,
				frontText: frontText,
				backText: backText
			}
		}).then( function successCallback (res) {
			console.log("Successful Post!");
		}, function errorCallback (res) {
			console.log("Unsuccessful Post.");
		});
	};

	factory.deleteFlashcard = function ( id ) {
		return $http({
			method: 'DELETE',
			url: '/api/flashcard/',
			headers: {
				"Content-Type": "application/json"
			},
			data: {
				id: id
			}
		}).then( function successCallback (res) {
			console.log("Successful Delete!");
		}, function errorCallback (res) {
			console.log("Unsuccessful Delete.");
		});
	};

	return factory;

}])
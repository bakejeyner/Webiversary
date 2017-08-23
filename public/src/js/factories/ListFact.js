angular.module('ListFact', [] )
.factory( 'ListFactory', [ '$http', function ( $http ) {

	var factory = {};

	// call to get all users
	factory.getAllLists = function () {
		return $http.get( '/api/list' )
		.then( function (data) {
			return data;
		});
	};

	// // these will work when more API routes are defined on the Node side of things

	// call to POST and create a new list
	factory.createList = function ( what, why ) {
		$http({
			method: 'POST',
			url: '/api/list',
			data: {
				what: what,
				why: why
			}
		}).then( function successCallback (res) {
			console.log("Successful Post!");
		}, function errorCallback (res) {
			console.log("Unsuccessful Post.");
		});
	};

	// call to DELETE a list by what
	factory.deleteListByWhat = function ( what ) {
		$http({
			method: 'DELETE',
			url: '/api/list/what',
			data: {
				what: what
			}
		}).then( function successCallback (res) {
			console.log("Successful Delete!");
		}, function errorCallback (res) {
			console.log("Unsuccessful Delete.");
		});
	};

	// call to DELETE a list by why
	factory.deleteListByWhy = function ( why ) {
		$http({
			method: 'DELETE',
			url: '/api/list/why',
			data: {
				why: why
			}
		}).then( function successCallback (res) {
			console.log("Successful Delete!");
		}, function errorCallback (res) {
			console.log("Unsuccessful Delete.");
		});
	}

	return factory;
}]);
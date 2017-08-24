angular.module('ListFact', [] )
.factory( 'ListFactory', [ '$http', function ( $http ) {

	var factory = {};

	// call to get all users
	factory.getAllLists = function () {
		return $http.get( '/api/list/all' )
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
				why: why,
			}
		}).then( function successCallback (res) {
			console.log("Successful Post!");
		}, function errorCallback (res) {
			console.log("Unsuccessful Post.");
		});
	};

	// call to DELETE a list by what
	factory.deleteListByDone = function ( ) {
		$http({
			method: 'DELETE',
			url: '/api/list/done',
		}).then( function successCallback (res) {
			console.log("Successful Delete!");
			facory.getAllLists();
		}, function errorCallback (res) {
			console.log("Unsuccessful Delete.");
		});
	};

	return factory;
}]);
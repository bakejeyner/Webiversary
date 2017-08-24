angular.module( 'ListCtrl' , [] )
.controller( 'ListController', [ '$scope', 'ListFactory', function ( $scope,  ListFactory ) {

	//initial values
	$scope.listWhat = 'What?';
	$scope.listWhy = 'Why?';
	$scope.listDone = false;

	$scope.lists = [];

	//get the info from the db and parse it
	var getLists = function() {
		ListFactory.getAllLists()
		.then( function ( lists ) {
			$scope.lists = JSON.parse(JSON.stringify(lists.data));
		})
	};
	getLists();

	//update all the lists in the db
	var updateAllLists = function () {
		for (i in $scope.lists) {
			ListFactory.updateList($scope.lists[i]._id, $scope.lists[i].done);
		}
		return;
	};

	

	//clicked button
	$scope.newList = function () {
		ListFactory.createList($scope.listWhat, $scope.listWhy)
		.then(getLists());
	};

	$scope.removeDone = function () {
		updateAllLists();

		ListFactory.deleteListByDone()
		.then( function (list) {
			getLists();
		});
	};

}]);
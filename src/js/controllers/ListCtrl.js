angular.module( 'ListCtrl' , [] )
.controller( 'ListController', [ '$scope', 'ListFactory', function ( $scope,  ListFactory ) {

	//initial setup **************************************************************************
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

	//set value of all selected
	$scope.allSelected = false

	//end initial setup **********************************************************************


	//update all the lists in the db
	var updateAllLists = function () {
		for (i in $scope.lists) {
			ListFactory.updateList($scope.lists[i]._id, $scope.lists[i].done);
		}
		return;
	};

	

	//clicked button
	$scope.newList = function () {
		$scope.allSelected = false;
		ListFactory.createList($scope.listWhat, $scope.listWhy)
		.then(getLists());
	};

	$scope.removeDone = function () {
		$scope.allSelected = false;

		updateAllLists();

		ListFactory.deleteListByDone()
		.then( function (list) {
			getLists();
		});
	};

	$scope.selectAll = function() {
		
		for (index in $scope.lists) $scope.lists[index].done = true;
		updateAllLists()

	};

	$scope.unselectAll = function() {
		
		for (index in $scope.lists) $scope.lists[index].done = false;
		updateAllLists()
	
	};

}]);
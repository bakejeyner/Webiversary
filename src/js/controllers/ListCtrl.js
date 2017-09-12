angular.module( 'ListCtrl' , [] )
.controller( 'ListController', [ '$scope', '$timeout', 'ListFactory', function ( $scope, $timeout, ListFactory ) {

	//initial setup **************************************************************************
	$scope.editing = -1;

	$scope.lists = [];

	//get the info from the db and parse it
	var getLists = function() {
		return ListFactory.getAllLists()
		.then( function ( lists ) {
			$scope.lists = JSON.parse(JSON.stringify(lists.data));
			return;
		})
	};
	getLists();


	//end initial setup **********************************************************************

	$scope.getIndex = function(list) {
		for (i in $scope.lists) {
			if (list == $scope.lists[i]) return i;
		}
	};


	//update all the lists in the db
	function updateAllLists() {
		for (i in $scope.lists) {
			ListFactory.updateList($scope.lists[i]._id, $scope.lists[i].what, $scope.lists[i].done);
		}
		return;
	};

	//update one list in the db
	function updateOne(list) {
		console.log('1 arg');
		ListFactory.updateList(list._id, list.what, list.done);
	};
	function updateOneDone(list, done) {
		console.log('2 arg');
		ListFactory.updateList(list._id, list.what, done);
	};





	$scope.inputBlur = function(list) {
		$scope.editing = -1;
		updateOne(list);
	};
	$scope.inputKeyup = function($event) {
		if ($event.which == 13) $scope.inputBlur();
	}

	$scope.labelClick = function(list) {
		updateOneDone(list, !list.done);
	}

	$scope.newList = function () {
		ListFactory.createList("What?", "Why?")
		.then( function() {
			getLists().then(function() {
				$scope.editing = $scope.lists.length - 1;
			});
		});
	};

	$scope.editClick = function(list) {
		$scope.editing = $scope.getIndex(list);
	};

	$scope.deleteClick = function(list) {
		ListFactory.deleteOne(list._id)
		.then( function() {
			getLists();
		});
	};

	$scope.removeDone = function () {

		updateAllLists();

		ListFactory.deleteListByDone()
		.then( function (list) {
			getLists();
		});
	};

	$scope.selectAll = function() {
		
		for (index in $scope.lists) $scope.lists[index].done = true;
		updateAllLists();

	};

	$scope.unselectAll = function() {
		
		for (index in $scope.lists) $scope.lists[index].done = false;
		updateAllLists();
	
	};

}]);
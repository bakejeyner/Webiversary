angular.module( 'ListCtrl' , [] )
.controller( 'ListController', [ '$scope', 'ListFactory', function ( $scope,  ListFactory ) {
	
	//initial values
	$scope.listWhat = 'What?';
	$scope.listWhy = 'Why?';

	$scope.lists = [];

	//get the info from the db and parse it
	ListFactory.getAllLists()
	.then( function ( lists ) {
		$scope.lists = lists.data;
		console.log($scope.lists);
	});

	//clicked button
	$scope.newList = function () {
		$scope.lists.push({ what: $scope.listWhat, why: $scope.listWhy });
		ListFactory.createList($scope.listWhat, $scope.listWhy);
	}

}]);
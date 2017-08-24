angular.module( 'ListCtrl' , [] )
.controller( 'ListController', [ '$scope', 'ListFactory', function ( $scope,  ListFactory ) {

	//initial values
	$scope.listWhat = 'What?';
	$scope.listWhy = 'Why?';
	$scope.listDone = false;

	$scope.lists = [];

	//get the info from the db and parse it
	ListFactory.getAllLists()
	.then( function ( lists ) {
		if (lists)
		{
			console.log("inside the bad spot");
			$scope.lists = lists.data;
		}
		else
		{
			console.log("outside the bad spot");
		}
	});

	//clicked button
	$scope.newList = function () {
		$scope.lists.push({ what: $scope.listWhat, why: $scope.listWhy, done: false });
		ListFactory.createList($scope.listWhat, $scope.listWhy);
	};

}]);
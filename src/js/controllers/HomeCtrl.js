angular.module( 'HomeCtrl', [] )
.controller( 'HomeController', [ '$scope', 'HomeFactory', function ( $scope, HomeFactory ) {

	$scope.pictures = HomeFactory.getPictures();
	$scope.focusedPicture = -1;


	//helper functions
	$scope.getIndexByPicture = function (picture) {
		for (i in $scope.pictures) {
			if ($scope.pictures[i] == picture) return i;
		}
	}

	$scope.pictureClick = function(picture) {
		console.log("inside picture click");
		console.log(picture);
		console.log($scope.getIndexByPicture);
		$scope.focusedPicture = $scope.getIndexByPicture(picture);
	}

	$scope.pictureBlur = function() {
		$scope.focusedPicture = -1;
	}

}]);
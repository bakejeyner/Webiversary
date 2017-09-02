angular.module( 'HomeCtrl', [] ).controller( 'HomeController', [ '$scope', function ( $scope ) {
	$scope.playAudio = function (songName) {
		$scope.musicSource = "mp3/" + songName + ".mp3";
	};

}]);
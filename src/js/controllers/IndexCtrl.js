angular.module("IndexCtrl", [])
.controller("IndexController", [ "$scope", "$compile", "IndexFactory", function ($scope, $compile, IndexFactory) {

	// initializaiton
	//songs
	$scope.songs = IndexFactory.getAllSongs();
	$scope.randomIndexes = Array.from(new Array($scope.songs.length), (x,i) => i);
	$scope.currentIndex = 0;

	$scope.paused = false;

	//background
	$scope.backgroundImageUrls = IndexFactory.getBackgroundImageUrls();
	$scope.randomBackgroundIndexes = Array.from(new Array($scope.backgroundImageUrls.length), (x,i) => i);
	shuffleArray($scope.randomBackgroundIndexes);
	$scope.currentBackgroundIndex = 0;
	//end initialization


	//shuffles an array
	function shuffleArray (array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	//"math" functions
	$scope.floor = function(n) {
		return n - n%1;
	};
	function abs(n) {
		if (n > 0) return n;
		else return -n;
	};


	//music buttons
	$scope.pausePlaySong = function() {
		$scope.paused = !$scope.paused;

		if ($scope.paused == true)
		{
			$scope.musicPlayer.pause();
		}
		else
		{
			$scope.musicPlayer.play();
		}
	};

	$scope.prevSong = function () {
		if ($scope.musicPlayer.currentTime > 3) {
			$scope.musicPlayer.currentTime = 0;
			return;
		}

		if ($scope.currentIndex - 1 <= -1) $scope.currentIndex = $scope.songs.length - 1;
		else $scope.currentIndex--;
	};

	$scope.nextSong = function () {
		if ($scope.currentIndex + 1 >= $scope.songs.length) $scope.currentIndex = 0;
		else $scope.currentIndex++;
	};

	$scope.shuffleSongs = function () {
		shuffleArray($scope.randomIndexes);
	};
	//end music buttons

	//Background changer
	setInterval(function() {
		if ($scope.currentBackgroundIndex + 1 >= $scope.randomBackgroundIndexes.length) $scope.currentBackgroundIndex = 0;
		else $scope.currentBackgroundIndex++;
	}, 15050);

}]);
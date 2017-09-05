angular.module("IndexCtrl", [])
.controller("IndexController", [ "$scope", "IndexFactory", function ($scope, IndexFactory) {

	$scope.songs = IndexFactory.getAllSongs();
	$scope.randomIndexes = Array.from(new Array($scope.songs.length), (x,i) => i);

	$scope.musicSource = songs[0].url;


	function shuffleArray (array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}


	//music buttons
	$scope.prevSong()

}]);
angular.module("FlashcardCtrl", [])
.controller("FlashcardController", [ "$scope", "FlashcardFactory", function ($scope, FlashcardFactory) {
	//initial setup **************************************************************************

	// these are the view flags
	$scope.view = {
		display: true,
		modify: false
	};

	// default variables for the create flashcard
	$scope.frontText = "Front";
	$scope.backText = "Back";

	// tells whether we are on the front side or not
	$scope.flipped = false;

	$scope.flashcards = [];

	function getFlashcards () {
		FlashcardFactory.getAllFlashcards()
		.then( function (flashcards) {
			$scope.flashcards = JSON.parse(JSON.stringify(flashcards.data));
			$scope.randomIndexes = Array.from(new Array($scope.flashcards.length), (x,i) => i)
		});
	}
	getFlashcards();
	

	$scope.currentIndex = 0;

	//end initial setup **********************************************************************

	// helper functions **********************************************************************
	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 */
	function shuffleArray (array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	function setViewsFalse () {
		for (i in $scope.view)
		{
			$scope.view[i] = false;
		}
	}

	// end helper functions ******************************************************************


	$scope.createFlashcard = function () {
		FlashcardFactory.createFlashcard($scope.frontText, $scope.backText)
		.then (function () {
			getFlashcards();
		});
	};


	// display functions ************************************************************
	
	$scope.flipCard = function () {
		$scope.flipped = !$scope.flipped;
	};

	$scope.keyCard = function ( $event ) {

		//if enter or spacebar is typed flip the card
		if ($event.which == 13 || $event.which == 32)
		{
			$scope.flipCard();
			return;
		}

		//if left arrow is typed go to previous card
		if ($event.which == 37)
		{
			$scope.prevCard()
			return;
		}

		//if right arrow is typed go to next card
		if ($event.which == 39)
		{
			$scope.nextCard()
			return;
		}
	};

	$scope.prevCard = function () {
		if ($scope.currentIndex - 1 <= -1) $scope.currentIndex = $scope.flashcards.length - 1;
		else $scope.currentIndex--;
	}

	$scope.nextCard = function () {
		if ($scope.currentIndex + 1 >= $scope.flashcards.length) $scope.currentIndex = 0;
		else $scope.currentIndex++;
	}

	$scope.shuffleCards = function () {
		shuffleArray($scope.randomIndexes);
		$scope.nextCard();
	};

	// end display functions ********************************************************

	// modify functions *************************************************************

	$scope.blurField = function ($event) {
		if (event.which == 13) $event.target.blur();
	};

	$scope.updateFlashcard = function ( flashcard ) {
		FlashcardFactory.updateFlashcard(flashcard._id, flashcard.frontText, flashcard.backText);
	};

	$scope.deleteFlashcard = function ( flashcard ) {
		FlashcardFactory.deleteFlashcard( flashcard._id )
		.then( function () {
			getFlashcards();
		});
	};

	// end modify functions *********************************************************


	// view changes
	$scope.displayViewChange = function () {
		setViewsFalse();
		$scope.view.display = true;
	};

	$scope.modifyViewChange = function () {
		setViewsFalse();
		$scope.view.modify = true;
	};

}])
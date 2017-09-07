var angular = require( 'angular' );
var ngRoute = require( 'angular-route' );

var appRoutes = require( './appRoutes' );
var HomeCtrl = require( './controllers/HomeCtrl' );
var ListCtrl = require( './controllers/ListCtrl' );
var ListFact = require( './factories/ListFact' );
var FlashcardCtrl = require( './controllers/FlashcardCtrl' );
var FlashcardFact = require( './factories/FlashcardFact' );
var IndexCtrl = require( './controllers/IndexCtrl' );
var IndexFact = require( './factories/IndexFact' );

angular.module( 'myApp', [
	'ngRoute',

	'appRoutes',
	'HomeCtrl',
	'ListCtrl',
	'ListFact',
	'FlashcardCtrl',
	'FlashcardFact',
  'IndexCtrl',
  'IndexFact'
] )
.directive('animateOnChange', function($timeout) {
  return function(scope, element, attr) {
    scope.$watch(attr.animateOnChange, function(nv,ov) {
      if (nv!=ov) {
        element.addClass('changed');
        $timeout(function() {
          element.removeClass('changed');
        }, 250); // Could be enhanced to take duration as a parameter
      }
    });
  };
})
.directive("myAudio", function(){
    return function(scope, element, attr) {
        console.log(element);
        console.log(element[0].volume);
        scope.musicPlayer = element[0];
        scope.musicPlayer.volume = .05;

        element.bind("timeupdate", function() {
            scope.$apply();
        });
        element.bind("ended", function() {
            scope.nextSong();
            scope.$apply();
        });
    }
});
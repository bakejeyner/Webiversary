var angular = require( 'angular' );
var ngRoute = require( 'angular-route' );

var appRoutes = require( './appRoutes' );
var HomeCtrl = require( './controllers/HomeCtrl' );
var ListCtrl = require( './controllers/ListCtrl' );
var ListFact = require( './factories/ListFact' );
var FlashcardCtrl = require( './controllers/FlashcardCtrl' );
var FlashcardFact = require( './factories/FlashcardFact' );

angular.module( 'myApp', [
	'ngRoute',

	'appRoutes',
	'HomeCtrl',
	'ListCtrl',
	'ListFact',
	'FlashcardCtrl',
	'FlashcardFact'
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
});
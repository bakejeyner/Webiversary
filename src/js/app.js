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
.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                        scope.$apply(function(){
                                scope.$eval(attrs.ngEnter);
                        });
                        
                        event.preventDefault();
                }
            });
        };
});
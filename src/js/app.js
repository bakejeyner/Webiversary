var angular = require( 'angular' );
var ngRoute = require( 'angular-route' );

var appRoutes = require( './appRoutes' );
var HomeCtrl = require( './controllers/HomeCtrl' );
var HomeFact = require( './factories/HomeFact' );
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
  'HomeFact',
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
.directive("musicPlayer", function() {
    return function(scope, element, attr) {
        scope.musicPlayer = element[0];
        scope.musicPlayer.volume = .05;

        element.bind("timeupdate", function() {
            scope.$apply();
        });
        element.bind("ended", function() {
            scope.nextSong();
            scope.$apply();
        });
    };
})
.directive('focusMe', ['$timeout', function ($timeout) {
    return {
        //scope: true,   // optionally create a child scope
        link: function (scope, element, attr) {

            scope.$watch(function() {
                    return attr.focusMe;
                },
                function (value) {
                    if (value === "true") {
                        $timeout(function () {
                            element[0].focus();
                            element[0].select();
                        });
                    }  
                });
            // to address @blesh's comment, set attribute value to 'false'
            // on blur event:
            // element.bind('blur', function () {
            //     console.log('blur');
            //     scope.$apply(model.assign(scope, false));
            // });
        }
    };
}]);;
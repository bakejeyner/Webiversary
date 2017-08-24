var angular = require( 'angular' );
var ngRoute = require( 'angular-route' );
var appRoutes = require( './appRoutes' );
var HomeCtrl = require( './controllers/HomeCtrl' );
var ListCtrl = require( './controllers/ListCtrl' );
var ListFact = require( './factories/ListFact' );

angular.module( 'myApp', [ 'ngRoute', 'appRoutes', 'HomeCtrl', 'ListCtrl', 'ListFact' ] );
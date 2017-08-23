angular.module( 'appRoutes', [] ).config( [ '$routeProvider', '$locationProvider', function ( $routeProvider, $locationProvider ) {

	$routeProvider

	// home page
		.when( '/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		} )

		// list that will use the ListController
		.when( '/list', {
			templateUrl: 'views/list.html',
			controller: 'ListController'
		} );

	$locationProvider.html5Mode( true );

}]);
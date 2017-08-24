angular.module( 'appRoutes', [] ).config( [ '$routeProvider', '$locationProvider', function ( $routeProvider, $locationProvider ) {

	$routeProvider

	// home page
		.when( '/', {
			templateUrl: 'dist/html/views/home.html',
			controller: 'HomeController'
		} )

		// list that will use the ListController
		.when( '/list', {
			templateUrl: 'dist/html/views/list.html',
			controller: 'ListController'
		} )

		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode( true );

}]);
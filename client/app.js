var demoApp = angular.module('demoApp', ['ngRoute', 'customFilter', 'ui.bootstrap'])
	.controller('BaseController', function($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
		$scope.param = $routeParams.param;
	})
	.controller('AdventController', function($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
		$scope.param = $routeParams.param;
	})
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/advent', {
			templateUrl: './partials/View1.html',
			controller: 'AdventController',
		})
		.when('/home', {
			templateUrl: './partials/View2.html',
			controller: 'BaseController'
		})
		.when('/about', {
			templateUrl: './partials/aboutView.html',
			controller: 'BaseController'
		})
		.otherwise({ redirectTo: '/home' });
	});
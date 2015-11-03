var demoApp = angular.module('demoApp', ['ngRoute', 'customFilter', 'ui.bootstrap'])
	.controller('SimpleController', function($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
		$scope.param = $routeParams.param;
	})
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/advent', {
			templateUrl: './partials/View1.html',
			controller: 'SimpleController',
		})
		.when('/home', {
			templateUrl: './partials/View2.html',
			controller: 'SimpleController'
		})
		.otherwise({ redirectTo: '/home' });
	});
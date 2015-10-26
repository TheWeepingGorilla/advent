var demoApp = angular.module('demoApp', ['ngRoute'])
	.controller('SimpleController', function($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
	})
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/View1', {
			templateUrl: './partials/View1.html',
			controller: 'SimpleController',
		})
		.when('/View2', {
			templateUrl: './partials/View2.html',
			controller: 'SimpleController'
		})
		.otherwise({ redirectTo: '/View1' });
	});
demoApp.factory('simpleFactory', function($http) {
	var factory = {};

	factory.getSpace = function (path) {
		return $http.get(path);
	};

	factory.postSpace = function (customer) {
		// code to post here
		console.log("Got Here");
	};

	return factory;
});
demoApp.factory('simpleFactory', function($http) {
	var factory = {};

	factory.getSpaces = function () {
		return $http.get('./data/spaces.json');
	};

	factory.postSpace = function (customer) {
		// code to post here
		console.log("Got Here");
	};

	return factory;
});
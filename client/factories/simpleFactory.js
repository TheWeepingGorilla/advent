demoApp.factory('simpleFactory', function($http) {
	var factory = {};

	factory.getCustomers = function () {
		return $http.get('./data/spaces.json');
	};

	factory.postCustomer = function (customer) {
		// code to post here
		console.log("Got Here");
	};

	return factory;
});
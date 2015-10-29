var controllers = {};
controllers.SimpleController = function($scope, $route, simpleFactory) {
	$scope.spaces = [];

	var originalPath = $route.current.$$route.originalPath.slice(1);

	init();

	function init() {
		simpleFactory.getSpaces(originalPath).success(function(data, status){
			$scope.spaces = data;
		});
	};

	// $scope.addCustomer = function() {
	// 	$scope.customers.push(
	// 		{
	// 			name: $scope.newCustomer.name,
	// 			city: $scope.newCustomer.city
	// 		}
	// 	);
	// 	console.log($scope.customers);
	// };
};
demoApp.controller(controllers);
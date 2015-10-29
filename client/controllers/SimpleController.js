var controllers = {};
controllers.SimpleController = function($scope, simpleFactory) {
	$scope.spaces = [];

	init();

	function init() {
		simpleFactory.getSpaces().success(function(data, status){
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
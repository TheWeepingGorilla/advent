var controllers = {};
controllers.SimpleController = function($scope, simpleFactory) {
	$scope.customers = [];

	init();

	function init() {
		simpleFactory.getCustomers().success(function(data, status){
			$scope.customers = data;
		});
	};

	$scope.addCustomer = function() {
		$scope.customers.push(
			{
				name: $scope.newCustomer.name,
				city: $scope.newCustomer.city
			}
		);
	};
};
demoApp.controller(controllers);
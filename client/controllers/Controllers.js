var controllers = {};
controllers.BaseController = function($scope, $route, $location, simpleFactory) {
	$scope.space = [];
	var request = $location.url();
	init();

	function init() {
		simpleFactory.getSpace(request).success(function(data, status){
			$scope.space = data;
		});
	};
};
controllers.AdventController = function($scope, $route, $location, simpleFactory) {
	$scope.space = [];
	var request = $location.url();
	init();

	function init() {
		simpleFactory.getSpace(request).success(function(data, status){
			$scope.space = data;
		});
	};
};
demoApp.controller(controllers);
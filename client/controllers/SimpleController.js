var controllers = {};
controllers.SimpleController = function($scope, $route, simpleFactory) {
	$scope.space = [];

	var originalPath = $route.current.$$route.originalPath.slice(1);

	init();

	function init() {
		simpleFactory.getSpace(originalPath).success(function(data, status){
			$scope.space = data;
		});
	};
};
demoApp.controller(controllers);
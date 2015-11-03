var controllers = {};
controllers.SimpleController = function($scope, $route, $location, simpleFactory) {
	$scope.background1 = {
		background: 'url(../images/Background-1.jpg)'
	};
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
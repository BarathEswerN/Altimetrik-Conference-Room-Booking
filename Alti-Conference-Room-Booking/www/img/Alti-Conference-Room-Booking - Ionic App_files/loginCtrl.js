altiApp.controller("loginCtrl", function($scope, $state){
	$scope.username = "Admin";
	$scope.password = "Admin";
	console.log("entering loginctrl");
	validateLogin = function() {
		$state.go('details');
	}
});
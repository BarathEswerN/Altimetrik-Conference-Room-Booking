altiApp.controller("detailsCtrl", function($scope, $state, $ionicSideMenuDelegate){
	$scope.date = "";
	$scope.employee = {};
	console.log("entering loginctrl");
	validateRequest = function() {
		$state.go('booking');
	}
	resetDetails = function() {
		$scope.employee.name = "";
	}
	newRequest = function() {
		$state.go('details');
	}
	pendingRequest = function() {
		console.log("pendingRequest");
		$state.go('pendingRequest');
	}
	logout = function() {
		console.log("logout");
		$state.go('login');
	}
});
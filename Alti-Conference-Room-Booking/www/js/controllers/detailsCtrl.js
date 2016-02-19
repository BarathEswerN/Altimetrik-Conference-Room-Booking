altiApp.controller("detailsCtrl", function($scope, $state, $ionicSideMenuDelegate){
	$state.go('details.bookingForm');
	$scope.date = "";
	$scope.employee = {};
	$scope.menuValue = "1";
	console.log("entering loginctrl");
	validateRequest = function() {
		$state.go('booking');
	}
	resetDetails = function() {
		$scope.employee.name = "";
	}
	newRequest = function() {
		
		console.log($scope.menuValue);
		$state.go('details.bookingForm');
	}
	pendingRequest = function() {
		
		console.log($scope.menuValue);
		$state.go('details.pendingRequest');
	}
	bookingHistory = function() {
		
		console.log($scope.menuValue);
		$state.go('details.bookingHistory');
	}
	logout = function() {
		$state.go('details.bookingForm');
		console.log($scope.menuValue);
		$state.go('login');
	}
});
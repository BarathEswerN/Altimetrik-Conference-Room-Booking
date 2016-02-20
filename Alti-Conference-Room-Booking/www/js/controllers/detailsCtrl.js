altiApp.controller("detailsCtrl", function($scope, $state, $ionicSideMenuDelegate){
	$state.go('details.bookingForm');
	$scope.date = "";
	$scope.employee = {};
	// $scope.menuValue = "1";
	$scope.navigationTitle = "New request";
	console.log("entering loginctrl");
	validateRequest = function() {
		$state.go('booking');
	}
	resetDetails = function() {
		$scope.employee.name = "";
	}
	newRequest = function() {
		$scope.navigationTitle = "New request";
		console.log("");
		$state.go('details.bookingForm');
	}
	pendingRequest = function() {
		$scope.navigationTitle = "Pending request";
		console.log("Pending request");
		$state.go('details.pendingRequest');
	}
	bookingHistory = function() {
		$scope.navigationTitle = "Booking history";
		console.log("Booking history");
		$state.go('details.bookingHistory');
	}
	logout = function() {
		$scope.navigationTitle = "New request";
		console.log("");
		$state.go('login');
	}
});
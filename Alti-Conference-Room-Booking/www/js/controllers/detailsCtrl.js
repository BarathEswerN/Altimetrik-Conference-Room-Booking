altiApp.controller("detailsCtrl", function($scope, $state, $stateParams, $ionicSideMenuDelegate){
	$state.go('details.selectLocation');
	$scope.date = "";
	$scope.employee = {};
	 $scope.employeeName = $stateParams.param;
	  //$scope.employeeName.des = "Associate software engineer";
	  console.log($scope.employeeName);
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
		$state.go('details.selectLocation');
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
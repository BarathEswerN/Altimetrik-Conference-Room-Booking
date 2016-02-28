altiApp.controller("bookingFormCtrl", function($scope, $state, $stateParams, empDataService){
	
	$scope.employee = {};
	$scope.location = $stateParams.param;
	console.log($scope.location);
	console.log("entering bookingFormCtrl");
	validateRequest = function() {
		console.log("entering validate");
		console.log($scope.employee);
		empDataService.setDetails($scope.employee);
		$scope.employee.location = $scope.location;
		$state.go('booking', {param : $scope.employee});
	}
	resetDetails = function() {
		$scope.employee = {};
	}
	getLocatn = function() {
		console.log("callLocatn");
		$state.go('details.selectLocation');
	}

});
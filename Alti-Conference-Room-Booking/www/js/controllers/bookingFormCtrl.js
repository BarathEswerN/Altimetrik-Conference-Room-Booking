altiApp.controller("bookingFormCtrl", function($scope, $state, $stateParams, $ionicHistory, empDataService){
	
	$scope.employee = {};
	$scope.location = $stateParams.param;
	$scope.formErr = {};
	$scope.formErr.msg = "";
	console.log($scope.location);
	console.log("entering bookingFormCtrl");
	validateRequest = function() {
		if(!$scope.employee.meetingName || !$scope.employee.projName || !$scope.employee.date || !$scope.employee.num ||
			!$scope.employee.from || !$scope.employee.to) {
			console.log("else");
			$scope.formErr.msg = "Please fill all the fields";
		}
		else {
			$scope.formErr.msg = "";
			console.log("entering validate");
			console.log($scope.employee);
			//empDataService.setDetails($scope.employee);
			$scope.employee.location = $scope.location;
			$state.go('booking', {param : $scope.employee});
	}
	};
	resetDetails = function() {
		console.log("reset")
		$scope.employee.meetingName = "";
		$scope.employee.projName = "";
		$scope.employee.num = "";
		$scope.employee.to = "";
		$scope.employee.from = "";
		$scope.employee.date = "";

	}
	getLocatn = function() {
		console.log("callLocatn");
		
		$ionicHistory.goBack();
		$state.go('details.selectLocation');
	};

});
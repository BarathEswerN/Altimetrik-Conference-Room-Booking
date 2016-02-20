altiApp.controller("bookingFormCtrl", function($scope, $state, empDataService){
	
	$scope.employee = {};
	console.log("entering bookingFormCtrl");
	validateRequest = function() {
		console.log("entering validate");
		console.log($scope.employee);
		empDataService.setDetails($scope.employee);
		$state.go('booking');
	}
});
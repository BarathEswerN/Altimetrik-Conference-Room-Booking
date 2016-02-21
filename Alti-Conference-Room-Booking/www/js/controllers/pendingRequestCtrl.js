altiApp.controller("pendingRequestCtrl", function($scope, $state, empDataService){
	$scope.pendingRequests={};
	$scope.pendingRequests.meetingName = "UAT setup";
	$scope.pendingRequests.day = "27";
	$scope.pendingRequests.month = "MAR";
	$scope.pendingRequests.year = "2015";
	$scope.pendingRequests.from = "2.30 pm";
	$scope.pendingRequests.to = "4.30 pm";
	$scope.pendingRequests.projName = "Bajaj";
	console.log("Enter pendingRequestCtrl");
	//$scope.pendingRequests = empDataService.getDetails();
	if ($scope.pendingRequestspendingRequests == {}) {
	$scope.pendingRequests.meetingName = "UAT setup";
	$scope.pendingRequests.day = "27";
	$scope.pendingRequests.month = "MAR";
	$scope.pendingRequests.year = "2015";
	$scope.pendingRequests.from = "2.30 pm";
	$scope.pendingRequests.to = "4.30 pm";
	$scope.pendingRequests.projName = "Bajaj";
	console.log("Enter pendingRequestCtrl");
	};
	console.log($scope.pendingRequests);
	editBooking = function() {
		$state.go('details.bookingForm');
	}
});
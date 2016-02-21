altiApp.controller("bookingHistoryCtrl", function($scope, $state, empDataService){
	
	console.log("Enter bookingHistoryCtrl");
	// $scope.pendingRequest = {};
	//$scope.bookingHistories=["kjhak", "jn", "kjn", "klj"];
	$scope.bookingHistories={};
	$scope.bookingHistories.meetingName = "UAT setup";
	$scope.bookingHistories.day = "27";
	$scope.bookingHistories.month = "MAR";
	$scope.bookingHistories.year = "2015";
	$scope.bookingHistories.from = "2.30 pm";
	$scope.bookingHistories.to = "4.30 pm";
	$scope.bookingHistories.projName = "Bajaj";
	console.log("Enter pendingRequestCtrl");
});
altiApp.controller("bookingCtrl", function($scope, $state){
	$scope.username = "";
	$scope.meetingName = "";
	$scope.projectName = "";
	$scope.location= "";
	$scope.date = "";
	console.log("entering bookingctrl");
	callDetails = function() {
		$state.go('details');
	}
});
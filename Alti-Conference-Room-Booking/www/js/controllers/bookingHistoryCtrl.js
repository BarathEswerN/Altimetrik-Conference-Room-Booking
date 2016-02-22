altiApp.controller("bookingHistoryCtrl", function($scope, $state, empDataService){
	
	console.log("Enter bookingHistoryCtrl");
	// $scope.pendingRequest = {};
	//$scope.bookingHistories=["kjhak", "jn", "kjn", "klj"];
	$scope.bookingHistories=[
							{
							 'meetingName' : 'Code revamp',
							 'day' : '15',
							 'month' : 'Feb',
							 'year' : '2015',
							 'from' : '2.30 pm',
							 'to' : '4.30 pm',
							 'projName' : 'AltiFin',
							 'status' : 'Approved'
							},
							{
							 'meetingName' : 'Client Demo',
							 'day' : '28',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '1.30 pm',
							 'to' : '3.30 pm',
							 'projName' : 'Bajaj',
							 'status' : 'Denied'
							},
							{
							 'meetingName' : 'Code walkthrough',
							 'day' : '29',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '9.30 am',
							 'to' : '10.30 am',
							 'projName' : 'Shatley',
							 'status' : 'Approved'
							}
							];

	console.log("Enter bookingHistoryCtrl");
});
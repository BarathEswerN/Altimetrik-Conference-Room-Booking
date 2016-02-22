altiApp.controller("pendingRequestCtrl", function($scope, $state, empDataService){
	$scope.pendingRequests=[
							{
							 'meetingName' : 'UAT setup',
							 'day' : '27',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '2.30 pm',
							 'to' : '4.30 pm',
							 'projName' : 'Bajaj'
							},
							{
							 'meetingName' : 'Req. analysis',
							 'day' : '28',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '1.30 pm',
							 'to' : '3.30 pm',
							 'projName' : 'AltiFin'
							},
							{
							 'meetingName' : 'Knowledge transfer',
							 'day' : '29',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '9.30 am',
							 'to' : '10.30 am',
							 'projName' : 'Shatley'
							}];

	console.log("Enter pendingRequestCtrl");
	//$scope.pendingRequests = empDataService.getDetails();
	if ($scope.pendingRequests == {}) {

	};
	console.log($scope.pendingRequests);
	editBooking = function() {
		$state.go('details.bookingForm');
	}
});
altiApp.controller("bookingHistoryCtrl", function($scope, $state, $ionicPopup, empDataService){
	
	console.log("Enter bookingHistoryCtrl");
	// $scope.pendingRequest = {};
	//$scope.bookingHistories=["kjhak", "jn", "kjn", "klj"];
	$scope.bookingHistories=[
							{
							 'meetingName' : 'Review meeting',
							 'day' : '30',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '9.30 am',
							 'to' : '10.30 am',
							 'projName' : 'Shatley',
							 'status' : 'Approved'
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
							 'meetingName' : 'Code revamp',
							 'day' : '15',
							 'month' : 'Feb',
							 'year' : '2015',
							 'from' : '2.30 pm',
							 'to' : '4.30 pm',
							 'projName' : 'AltiFin',
							 'status' : 'Approved'
							}
							
							];

	console.log("Enter bookingHistoryCtrl");

	bookingDetails = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Edit Request',
         subTitle: '',
         scope: $scope,
			
         buttons: [
            { text: 'Okay', type: 'button-positive'}
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };
});
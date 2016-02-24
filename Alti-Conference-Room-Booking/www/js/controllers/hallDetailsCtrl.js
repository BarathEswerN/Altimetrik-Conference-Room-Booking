altiApp.controller("hallDetailsCtrl", function($scope, $state, $ionicPopup, empDataService){
	
	console.log("Enter bookingHistoryCtrl");
	// $scope.pendingRequest = {};
	//$scope.bookingHistories=["kjhak", "jn", "kjn", "klj"];
	$scope.bookingHistories=[
							{
							 'meetingName' : 'Alti001',
							 'day' : '30',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '9.30 am',
							 'to' : '10.30 am',
							 'projName' : 'Prestige',
							 'status' : 'Approved'
							},
							{
							 'meetingName' : 'Alti002',
							 'day' : '29',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '9.30 am',
							 'to' : '10.30 am',
							 'projName' : 'Mughal',
							 'status' : 'Approved'
							},
							{
							 'meetingName' : 'Alti003',
							 'day' : '28',
							 'month' : 'MAR',
							 'year' : '2015',
							 'from' : '1.30 pm',
							 'to' : '3.30 pm',
							 'projName' : 'ETV',
							 'status' : 'Approved'
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
	callbooking = function() {
		$state.go('booking');
	}
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
altiApp.controller("pendingRequestCtrl", function($scope, $state, $ionicPopup, empDataService){
	$scope.pendingRequestStatus = "";
	$scope.cardCnt = "0";
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
	$scope.pendingRequests = empDataService.getDetails();
	if($scope.pendingRequests == "" && $scope.cardCnt == "0") {
		//$scope.pendingRequestStatus = "Currently you do not have any pending requests.";
	}
	
	console.log($scope.pendingRequests);

	editBooking = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Edit Request',
         subTitle: '',
         scope: $scope,
			
         buttons: [
            { text: 'Delete', type: 'button-assertive'}, {
               text: '<b>Update</b>',
               type: 'button-positive',
                  onTap: function(e) {
						
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };
	
});
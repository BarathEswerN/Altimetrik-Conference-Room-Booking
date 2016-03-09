altiApp.controller("bookingCtrl", function($scope, $state, $ionicHistory, $stateParams, $window, $ionicModal, $timeout, empDataService){
	$scope.selectionList = [];
    $scope.seat = {};
    $scope.seat.count=0;
    $scope.unselected = "unselectedSeat.png";
    $scope.selecting = "selecting.png";
    $scope.bookingDetails = $stateParams.param;
	console.log("entering bookingctrlfgcfc");
  console.log($scope.bookingDetails);
  //$window.location.reload();
	callDetails = function() {
		$ionicHistory.goBack();
	}
   $ionicModal.fromTemplateUrl('/templates/hallDetails.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
   $scope.openModal = function() {
    //$state.go('hallDetails');
    console.log("getHallDetails");
    $scope.modal.show();
   }

    $scope.closeModal = function() {
    //$state.go('hallDetails');
    console.log("closeModal");
    $scope.modal.hide();
   }
    diffImage = function(img) {

    if(img.src.match(/selecting/)) {
          if($scope.seat.count >= 0) {
     $scope.seat.count--;
     console.log($scope.seat.count);

    document.getElementById('testId').innerHTML=$scope.seat.count;
    img.src = "/img/unselectedSeat.png";
  }
    else {
      $scope.seat.count = 0;
    }
   }
    else if(img.src.match(/selectedSeats/)) {
       console.log($scope.seat.count);
    img.src = "/img/selectedSeats.png";
   }

   else {
   
      console.log($scope.seat.count);
    console.log($scope.bookingDetails.num);
     //alert($scope.seat.count);
     $scope.testVal="testing";
      if($scope.seat.count < $scope.bookingDetails.num) {
                $scope.seat.count++;
     document.getElementById('testId').innerHTML=$scope.seat.count;
     //alert('i='+document.getElementById('testId').innerHTML);
      img.src = "/img/selecting.png";
  }

    else {
      alert('Selected Count Exceeded');
      console.log($scope.seat.count);
      console.log("lim exceeded");
    }
   }
    }

    $scope.confirmBooking = function() {
      empDataService.setDetails($scope.bookingDetails);
      console.log("confirmBooking");
     // $state.go('details.pendingRequest');
     $ionicHistory.clearHistory();            
$ionicHistory.clearCache().then(function() {
                $state.go('details.pendingRequest');
 });
    };

    //Logic for popup window

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

  
  $scope.callbooking = function() {
    //$state.go('booking');
    $scope.modal.hide();
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
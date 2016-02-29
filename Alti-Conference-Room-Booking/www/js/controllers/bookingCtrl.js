altiApp.controller("bookingCtrl", function($scope, $state, $ionicHistory, $stateParams, empDataService){
	$scope.selectionList = [];
    $scope.seat = {};
    $scope.seat.count=0;
    $scope.unselected = "unselectedSeat.png";
    $scope.selecting = "selecting.png";
    $scope.bookingDetails = $stateParams.param;
	console.log("entering bookingctrl");
  console.log($scope.bookingDetails);
	callDetails = function() {
		$ionicHistory.goBack();
	}
   
   $scope.getHallDetails = function() {
    $state.go('hallDetails');
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
     $scope.seat.count++;
    console.log($scope.seat.count);
    console.log($scope.bookingDetails.num);
     //alert($scope.seat.count);
     $scope.testVal="testing";
      if($scope.seat.count <= $scope.bookingDetails.num) {
     document.getElementById('testId').innerHTML=$scope.seat.count;
     //alert('i='+document.getElementById('testId').innerHTML);
    img.src = "/img/selecting.png";
  }
    else {
      console.log("lim exceeded");
    }
   }
    }
    confirmBooking = function() {
      empDataService.setDetails($scope.bookingDetails);
    }
	
});
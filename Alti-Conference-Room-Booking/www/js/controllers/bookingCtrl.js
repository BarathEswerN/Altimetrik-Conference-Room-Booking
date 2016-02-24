altiApp.controller("bookingCtrl", function($scope, $state){
	$scope.selectionList = [];
    $scope.seat = {};
    $scope.seat.count=0;
    $scope.unselected = "unselectedSeat.png";
    $scope.selecting = "selecting.png";

	$scope.location = "Chennai-13th floor";
	console.log("entering bookingctrl");
	callDetails = function() {
		$state.go('details');
	}
   
   $scope.getHallDetails = function() {
    $state.go('hallDetails');
   }
    diffImage = function(img) {

    if(img.src.match(/selecting/)) {
     $scope.seat.count--;
     console.log($scope.seat.count);
    document.getElementById('testId').innerHTML=$scope.seat.count;
    img.src = "/img/unselectedSeat.png";
   }
    else if(img.src.match(/selectedSeats/)) {
   
     console.log($scope.seat.count);
    img.src = "/img/selectedSeats.png";
   }

   else {
     $scope.seat.count++;
    console.log($scope.seat.count);
     //alert($scope.seat.count);
     $scope.testVal="testing";
     document.getElementById('testId').innerHTML=$scope.seat.count;
     //alert('i='+document.getElementById('testId').innerHTML);
    img.src = "/img/selecting.png";
   }
    }
	
});
altiApp.controller("bookingFormCtrl", function($scope, $state){
	
	console.log("entering loginctrl");
	validate = function() {
	$state.go('booking');
	}
});
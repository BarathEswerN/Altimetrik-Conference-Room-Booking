altiApp.controller("loginCtrl", function($scope, $state){
	$scope.user = {};
	$scope.loginErrorText = "";
	console.log("entering loginctrl");
	validateLogin = function() {
		
	$state.go('details.bookingForm');
		
}
});
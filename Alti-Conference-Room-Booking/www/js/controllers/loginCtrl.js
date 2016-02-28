altiApp.controller("loginCtrl", function($scope, $state, $stateParams){
	$scope.user = {};
	$scope.loginErrorText = "";
	console.log("entering loginctrl");
	validateLogin = function() {
		console.log($scope.user);
	$state.go('details', {param: $scope.user});
		
}
});
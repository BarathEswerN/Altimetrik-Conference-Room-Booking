altiApp.controller("selectLocationCtrl", function($scope, $state, $stateParams){
	
	$scope.loc = {};
	console.log("entering selectLocationCtrl");
	
	$scope.loadChennai13 = function() {
		$scope.loc.place = "Chennai 13th floor";
		$state.go('bookingForm', {param : $scope.loc.place});
	}
	$scope.loadChennai4 = function() {
		$scope.loc.place = "Chennai 4th floor";
		$state.go('bookingForm', {param : $scope.loc.place});
	}
	$scope.loadBangEC = function() {
		$scope.loc.place = "Bangalore EC office";
		$state.go('bookingForm', {param : $scope.loc.place});
	}
	$scope.loadBangETV = function() {
		$scope.loc.place = "Bangalore ETV office";
		$state.go('bookingForm', {param : $scope.loc.place});
	}

});
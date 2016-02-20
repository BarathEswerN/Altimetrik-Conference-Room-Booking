altiApp.controller("pendingRequestCtrl", function($scope, $state, empDataService){
	
	console.log("Enter pendingRequestCtrl");
	$scope.pendingRequests = empDataService.getDetails();
	console.log($scope.pendingRequests);
	
});
altiApp.controller("bookingCtrl", function($scope, $state){
	$scope.username = "";
	$scope.meetingName = "";
	$scope.projectName = "";
	$scope.location= "";
	$scope.date = "12-Mar-2015";
	$scope.from = "1.30 pm";
	$scope.to = "2.30 pm";
	$scope.location = "Chennai-13th floor";
	$scope.chennai13rooms = [
						  {'date':'12-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Approved','img':'img/check.png'},
						  {'date':'14-02-2016','from':'Ascendas 4th floor','to':'Plavanthangal','status':'Rejected','img':'img/cross.jpg'},
						  {'date':'17-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Approved','img':'img/check.png'},
						  {'date':'12-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Approved','img':'img/check.png'},
						  {'date':'14-02-2016','from':'Ascendas 4th floor','to':'Plavanthangal','status':'Rejected','img':'img/cross.jpg'},
						  {'date':'17-02-2016','from':'Ascendas 13th floor','to':'Guindy','status':'Pending','img':'img/pending.jpg'}];
	console.log("entering bookingctrl");
	callDetails = function() {
		$state.go('details');
	}
});
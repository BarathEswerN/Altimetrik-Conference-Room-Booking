altiApp.factory('empDataService', function($http) {
	var empData = {};
	
	
	return {
		setDetails: function(employeeData) {
		console.log("empDataService");
		console.log(employeeData);
		empData.name = employeeData.name;
		empData.id = employeeData.id;
		empData.meetingName = employeeData.meetingName;
		empData.projName = employeeData.projName;
		empData.loc = employeeData.loc;
		empData.date = employeeData.date;
		empData.time = employeeData.time;
		},
		getDetails: function() {
			return empData;
		}
	}
})
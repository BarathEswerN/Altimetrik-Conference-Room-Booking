altiApp.factory('empDataService', function($http) {
	var empData = {};
		empData.name = "Raj";
		empData.id = "1234";
		empData.meetingName = "Requirement analysis";
		empData.projName = "Bajaj";
		empData.loc = "Chennai-13th Floor";
		empData.date = "12 Mar 2015";
		empData.from = "1.30 pm";
		empData.to = "2.30 pm";
	
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
		empData.from = employeeData.from;
		empData.to = employeeData.to;
		},
		getDetails: function() {
			return empData;
		}
	}
})
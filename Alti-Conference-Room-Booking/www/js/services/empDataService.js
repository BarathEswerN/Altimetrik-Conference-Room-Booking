altiApp.factory('empDataService', function($http) {

	var empDatas=[];

	
	return {
		setDetails: function(employeeData) {
		console.log("empDataService");
		//console.log(employeeData);
		empDatas.push(employeeData);
		console.log(empDatas);
		},
		getDetails: function() {
			return empDatas;
		}
	}
})
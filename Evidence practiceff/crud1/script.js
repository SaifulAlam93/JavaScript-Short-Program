function addStudent() {
	var student = getValues();
	addRow(student);
}



function getValues() {
	var firstName = document.sform.fname.value;
	var lastName = document.sform.lname.value;
	var district = document.sform.district.value;
	var age = document.sform.age.value;

		//var student = new Student(firstName,lastName,district,age)
//		return student;
//		or

	return new Student(firstName, lastName, district, age);

}







/*function removeAllElementOfTableButTheTH(TABLE_ID) {
	var elmtTable = document.getElementById(TABLE_ID);
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;
	for (var x = rowCount - 1; x > 0; x--) {
		elmtTable.deleteRow(x);
	}
}*/












function addRow(student) {
	var table = document.getElementById("stable");
	var exisingNumbeOfRows = getNumberOfRows(table);
	//var tabilNumvvvv=exisingNumbeOfRows-1;

	var row = table.insertRow(exisingNumbeOfRows);
	row.insertCell(0).innerHTML = student.firstName;
	row.insertCell(1).innerHTML = student.lastName;
	row.insertCell(2).innerHTML = student.district;
	row.insertCell(3).innerHTML = student.age;

	var dcell = row.insertCell(4);
	     dcell.innerHTML = "<button style='color:red'>Delete</button>";
	     //dcell.setAttribute("style", "color:red");0...
	dcell.setAttribute("onclick", "dRow(" + exisingNumbeOfRows + ")");


}












function getNumberOfRows(table) {
	return table.getElementsByTagName('tr').length;
}















function Student(firstName, lastName, district, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.district = district;
	this.age = age;
}








var dRow = function (index) {
	var table = document.getElementById("stable");
//	var tableRows = table.getElementsByTagName('tr');
	table.deleteRow(index);
}

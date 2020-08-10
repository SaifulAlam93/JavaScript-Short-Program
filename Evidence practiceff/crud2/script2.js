

var allStudents=[];

function createId(){	
	return allStudents.length+1;	
}


 // added two default values
var s1= new Student(createId(),"ismail","hossain","dhaka",20);
allStudents.push(s1);
allStudents.push(new Student(createId(),"mahabub","patwary","dhaka",20));



function addStudent() {
	var student = getValues();	
	allStudents.push(student);	
	populateTableFromJsonArray();
}

function removeAllElementOfTableButTheTH() {
	var elmtTable = document.getElementById("stable");
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;
	for (var x = rowCount - 1; x > 0; x--) {
		elmtTable.deleteRow(x);
	}
}
//
function addRow(student) {
	var table = document.getElementById("stable");
	var exisingNumbeOfRows = getNumberOfRows(table);
	var row = table.insertRow(exisingNumbeOfRows);
	row.insertCell(0).innerHTML = student.firstName;
	row.insertCell(1).innerHTML = student.lastName;
	row.insertCell(2).innerHTML = student.district;
	row.insertCell(3).innerHTML = student.age;

	var dcell = row.insertCell(4);
	dcell.innerHTML = "Delete";
	dcell.setAttribute("onclick", "deleteStudent(" + student.id + ")");

}
//
//
function getNumberOfRows(table) {
	return table.getElementsByTagName('tr').length;
}
//
function getValues() {
	var firstName = document.sform.fname.value;
	var lastName = document.sform.lname.value;
	var district = document.sform.district.value;
	var age = document.sform.age.value;

	//	var student = new Student(firstName,lastName,district,age)
	//	return student;
	//	or

	return new Student(createId(),firstName, lastName, district, age);

}

function Student(id,firstName, lastName, district, age) {
	this.id=id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.district = district;
	this.age = age;
}

var deleteStudent = function (id) {	
	
	for(var i in allStudents)
	
	{
		var stu= allStudents[i];
				
		if(stu.id==id){
		
		allStudents.splice(i,1);
		
	 break;
		
	}
				
	}
	
	populateTableFromJsonArray();
	
}


function populateTableFromJsonArray(){	
	removeAllElementOfTableButTheTH();	
	for(var i in allStudents){		
		addRow(allStudents[i]);			
	}	
}

populateTableFromJsonArray();
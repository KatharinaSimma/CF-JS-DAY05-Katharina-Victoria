console.log(employees);
var dataObjects1 = JSON.parse(employees);
console.table(dataObjects1);

document.writeln("<h2>Employees</h2>");

var i = 0
document.writeln("<table border='0'><tr>");
for (i = 0; i < dataObjects1.length; i++) {
    //document.writeln("<td>");
    document.writeln("<table border='1' width=100 >");
    document.writeln("<tr><td><b>ID</b></td><td width=50>" + dataObjects1[i].ID + "</td></tr>");
    document.writeln("<tr><td><b>First Name</b></td><td width=50>" + dataObjects1[i].FirstName + "</td></tr>");
    document.writeln("<tr><td><b>Last Name</b></td><td width=50>" + dataObjects1[i].LastName + "</td></tr>");
    document.writeln("<tr><td><b>Email</b></td><td width=50>" + dataObjects1[i].Email + "</td></tr>");
    document.writeln("<tr><td><b>Job</b></td><td width=50>" + dataObjects1[i].Job + "</td></tr>");
    document.writeln("<tr><td><b>Salary</b></td><td width=50>" + dataObjects1[i].Salary + "</td></tr>");
    document.writeln("<br></table>");
    //document.writeln("</td>");
}
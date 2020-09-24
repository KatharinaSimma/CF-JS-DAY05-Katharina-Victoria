console.log(sandwiches);
var dataObjects1 = JSON.parse(sandwiches);
console.table(dataObjects1);

console.log(fries);
var dataObjects2 = JSON.parse(fries);
console.table(dataObjects2);

console.log(dataObjects1.sandwich);

document.getElementById("result").innerHTML = "My favorite sandwich is a "+ dataObjects1.sandwich + " which has approximately " + dataObjects1.calories + " calories, along with it I enjoy eating " + dataObjects2.fries_size + " which have about " + dataObjects2.calories + " calories."

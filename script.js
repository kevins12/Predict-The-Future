$("button") .click(function(){
var NetWorth = $("#NetWorth").val();
var Salary = $("#Salary").val();
var Year = $("#Year").val();

var product = parseInt(Salary) * parseInt(Year) + parseInt(NetWorth);
$("#sum") .text("In" + Year + "your networth would be $" + product);
});
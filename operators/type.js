// using the variable
var num = 4
console.log(typeof(num))
// using without the variable
console.log(typeof(6.555))
console.log(typeof("name"))

var integerString = "24";
var num = Number(integerString);
var numAdd = Number(integerString) + 4;
var strAdd = integerString + 4;
console.log(num);
console.log(numAdd);
console.log(strAdd);

var floatingNumString = "24.9876";
var num = Number(floatingNumString);
console.log(floatingNumString);

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
console.log(numberAsNumber);
console.log("A" + numberAsString);
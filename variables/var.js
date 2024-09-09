name = "Max" // text string
var nation;     // variable declared and is undefined
nation = "XYZ"  // var defined or initialized
console.log(nation)
nation = "ABC"
console.log("variables changing values", nation)     // variables changing values
// var name; // declaration after the name is initialised, don't cause error even if not declared.

var height = 163;
console.log(height);
var originalNum = 23;
var newNum = originalNum + 7;
console.log(newNum);
var seaLevel = 2300;
var aboveSeaLevel = 4000;
console.log("Total height", seaLevel + aboveSeaLevel);
var s1 = 29;
console.log("Age is: ",s1);
// variables cannot be keywords
// camelCase convention for naming the variables
// variables declared by let are mutable
let i = 0; 
// let i; // decalring after the initalisation causes refernce error.
console.log(i)
// console.log(eval());
// let is more prefered and more C++ like, have tdz (temporal dead zone)
// static(without executing code) and dynamic(runtime)
// variable scope forms a static tree
// function call form a dynamic tree

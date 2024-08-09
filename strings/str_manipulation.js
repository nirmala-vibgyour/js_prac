// Creating the string object.
var str1 = "Hello World"
var str2 = new String(str1)
console.log(str2.length)
//  Length of the string
var str = "JavaScript"
console.log(str.length)
// using toString()
console.log(str.toString()) // Need to know the current usage of the toString().
// using charAt()
console.log(str.charAt(4))
console.log(str.charAt(-1))
// using indexOf
// here, substring/letter can also be sent to find it's beginning position for the first occurence 
// of the substring or the letter.
console.log(str.indexOf("p"))
console.log("Script".indexOf("r"))
console.log("Panmonnnpmon".indexOf("mon"))
// using last indexOf
console.log("Panmonnnpmon".lastIndexOf("mon"))
// using match

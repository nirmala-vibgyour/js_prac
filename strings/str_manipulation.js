// List of string methods: toLowerCase(), toUpperCase(), indexOf(), charAt(), .length, split, match, replace
// substr(), split(), toString(), lastINdexOf()  
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
// take as argument: "string" or "regular expression"
// output an array containing all the strings with matched pattern"
// but, here it seems to give only the first occu
console.log("The user with the username cannot be find as the user in our user database".match("us"))
// using replace
// but, here it seems to give only the first occu
console.log("The user with the username cannot be find as the user in our user database".replace("user","hello"))
// using slice
// The method, as revealed by its signature, replace(start, [end]);,
// requires a starting index and an optional ending index.
index1 = "JavaScript is used in web development".indexOf("w")
index2 = "JavaScript is used in web development".indexOf("m")
console.log("JavaScript is used in web development.".slice(index1))
console.log("JavaScript is used in web development.".slice(index1, index2))
// using substr
// The required parameter, start, signifies where the substring to extract begins. This
// value can be followed by an optional number of characters to include in the returned substring.
console.log("JavaSript is used in web development.".substr(12, "JavaSript is used in web development.".length))
// using split
// return an array of splited parts
console.log("string:numbers:boolean:null:undefined".split(":"))
// using toUpperCase
console.log("JavaScript".toUpperCase())
// using.tolowerCase
console.log("JavaScript".toLowerCase())
// comparison
console.log("JS" == "JS".toLowerCase())

var cellParts = "endoplasmicreticulam";
var firstPart = cellParts.slice(0, 3);
console.log(firstPart);
// slices the characters from the index 1, to the rest..
console.log(cellParts.slice(1));



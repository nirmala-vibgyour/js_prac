// Creating using String() and new.
var sstring = new String()
console.log(typeof(sstring))

// Creating using the method.
var strobj = new String("test")
console.log(strobj)
console.log(typeof(strobj))

// Creating as a literal.
var strobj1 = {
    color: "red",
    month: "oct",
    code: 34,          // Need to check why it is accepting the number data type.
    name: "robert"
}
console.log(strobj1)
console.log(typeof(strobj1['code']))

// creating an object using new and Object() method.
var anew = new Object()
console.log(typeof(anew))
anew = {
    place: "kol",
    num: 2,
    living: true,
}
console.log(anew)
// new Array
var days = new Array()
console.log(typeof(days))
days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"]
console.log(days)

// just to show when we aare initializing and when we are making literals.

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2-1]);
console.log(listOfNumbers.length);

// to access properties use: dot & [] notation

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1["squirrel"]);
console.log(day1.squirrel);

// array of objects
let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
    /* and so on... */
];

console.log(journal);

// objects are mutable: their values can be changed at any time
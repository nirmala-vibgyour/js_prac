// No block used
var num = 4
if (num > 5) console.log("JS"); else console.log("Python")
// Using new line for else
// No block used (works equally)
if (num > 5) console.log("JS")
else console.log("Python")
// Using blocks
if (num > 5) { console.log("JS")
    console.log("Python")
}
else { console.log("Python")
    console.log("JS")
}
// Using blocks diff way
if (num > 5) { 
    console.log("JS")
    console.log("Python")
}
else { 
    console.log("Python")
    console.log("JS")
}
// Any valid JavaScript value will evaluate to that of a Boolean value when used as the
// expression of a control statement. While the evaluation returns either true or false, the
// values that evaluate to true or false are not as cut and dry. Those that evaluate to
// true are referred to as truthy values. While those that evaluate to false are referred to
// as falsy values.

// evaluating expressions as true or false with if
// the below sentence cannot be printed as the expression evaluates to be false.
if(3 > 4) {
    console.log("For loop starts below.")
}


//  for loop
for ( i = 0; i < 11; i++) {
    console.log(i)
}
// without using blocks
for ( i = 0; i < 11; i++) console.log(i)

for(j = 0; j <= 10; j++) {
    console.log("City: " + j);
}

names = ["xyz", "stu", "abc", "mno"]
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}

console.log(fullNames);

var i = 0;
while (i <= 3) {
    console.log(i);
    i++;
}

var i = 0;
do {
    console.log(i);
    i++;
} while (i <= 3);


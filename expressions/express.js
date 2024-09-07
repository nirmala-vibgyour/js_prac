// An expression resolves to a value.
var val = 5*3+8; // "5*3+8" is the expression resolving to 23 (an integer value)
console.log(val);

console.log(9%3 == 0);

var num = 7;
console.log(num++);     // num prints the original value of num and get incremented afterwards
console.log(num--);     // here, num prints the +1 vaule but gets decremented after wards
console.log(++num);     // here, num is incremented and the prints

var anotherNum = 0;
console.log(--anotherNum);
console.log(++anotherNum);
console.log(++anotherNum);

// parens overides all the precedence of other operators

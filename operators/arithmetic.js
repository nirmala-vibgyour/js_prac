// The operators are: +, -, *, /
console.log(10+2)
console.log(10-2)
console.log(10*2)
console.log(10/2)
// Checking when division have remainder.
console.log(10/3) // fractional part was included

var naturalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numSum, numAvg;
numSum = 0;
numAvg = 0;
for (var i = 0; i < 10; i++) {
    numSum += naturalNums[i];
    numAvg = numSum/naturalNums.length;
}
console.log(Math.round(numAvg));
// rounding up for infinietly small fractional part
var scoreAvg = Math.ceil(.000001);
console.log(scoreAvg);
// rounding up for infinietly large fractional part
var scoreAvg = Math.floor(0.999999);
console.log(scoreAvg);

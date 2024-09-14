// function expression: can with name or no name
const myFunction = function(param1, param2) {
    // function body
    return param1 + param2;
  };
console.log(myFunction(2, 3));

// arrow function
const add = function(a, b) {
    return a + b;
  };
console.log(add(1,2));

// a closure
function funcFactory(value) {
    return () => {
    return value;
    };
}
const func = funcFactory('abc');
// assert.equal(func(), 'abc'); 
// here, the variable func has become a variable and can access the free variable 'value'
// func is having the value cause it is what has been returned, func is the closure
// func is a closure because it has access to the value parameter of funcFactory,
// even though funcFactory itself has already completed execution.

// In simpler terms, a closure allows a function to access variables from its outer (enclosing) 
// scope even after that outer function has finished executing.

// function expression
const adD = function(x) {
  return x+2;
};

console.log(adD(3));

let sub = function(y) {
  return 10 - y;
};
let sub1 = sub(2);
let sub2 = sub(5);

console.log(sub1, sub2);

var multiply = function(z) {
  return z*10;
};

let m1 = multiply(2);
let m2 = multiply(5);

console.log(m1, m2);

// arrow function

const power = (base, exponent) => {       // Here, power couldn't be assigned to any other value.
  let power;
  power = base**exponent;
  return power;
};
let p1 = power(5,2);
p1 = power(4,2);

let p2 = power(3,2);
console.log(p1, p2);

const square = (x) => { return x*x};

console.log(square(9));

const square2 = x => x*x;
console.log(square2(10));

const greet = () => {
  return "arrow function";
};

console.log(greet());

// optional arguments

const equ = (marks, def=10) => {
  return marks+def;
};

console.log(equ(50));
console.log(equ(50, 20));

// closure
const rearrange = function(marks) {
  return carryOver => marks+carryOver;
};

let r1 = rearrange(50);  // marks equ 50
console.log(r1(20));      // carryOver equ 20

// closure: normal function statment

function calculation(marks, balance) {
  return function(reduction) {
    return ((marks + balance) - reduction);
  };
}

let calc1 = calculation(55, 15);
console.log(calc1(10));

// recursion
function factorial(n) {
  if (n !== 1) {
    return n*(factorial(n-1))
  }
  else {
    return 1;
  }
}

console.log(factorial(5));
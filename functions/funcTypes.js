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
assert.equal(func(), 'abc'); 
// here, the variable func has become a variable and can access the free variable 'value'
// func is having the value cause it is what has been returned, func is the closure
// func is a closure because it has access to the value parameter of funcFactory,
// even though funcFactory itself has already completed execution.

// In simpler terms, a closure allows a function to access variables from its outer (enclosing) 
// scope even after that outer function has finished executing.


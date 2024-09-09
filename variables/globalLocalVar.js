// the scope of a variable is the region of a program where it can be accessed.
// global variables: global declarative variables
//                   global object variables

const declarativeVariable = 'd';
var objectVariable = 'o';

console.log(declarativeVariable); // 'd'
console.log(objectVariable); // 'o'

// not all declarations create properties of the global object:
console.log(globalThis.declarativeVariable); // undefined
console.log(globalThis.objectVariable); // undefined

//  globalThis: gives you access to the global object, which is the container for global variables, functions, and properties.
// In a browser environment, this is window.
// In Node.js, it's global. In a Web Worker, it's self.
// the global object is accessed directly through specific global identifiers that vary by environment.

// It got its name from the fact that it has the same value as this in global scope.

// scope: this is a static trait
// activation: this is dynamic trait
// global properties: if a declaration adds a property to the global object                    
// Function declarations are normally block-scoped, but function-scoped in sloppy mode.

// temporal dead zone: The time between entering the scope of a variable and executing its declaration is called the temporal dead zone (TDZ) of that variable:

// function declaraions: where it is scoped or vice versa a function is scoped where it is decalared
// function early activation: The term early activation or early binding in the context of JavaScript 
//                            function declarations is often used to describe the phenomenon where 
//                            function declarations are available for use throughout their entire scope due to hoisting.
// a fucntion declared with const and let is not activated earlier.
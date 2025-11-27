/**
 * JavaScript fundamentals::
 * 
 * Syntax, variables, functions, arrays/objects, promises, async/await
 * ES6+ features: let/const, arrow functions, destructuring, template strings, classes, modules
 * 
 */

// Variables
// let, var , const
//Example:
let a; a = true;
var b; b = a;
const c = b;
console.log(c)

// 1. Function forms and how they behave

// Function declaration (hoisted)
//Syntax: function foo(a, b) { return a + b; }
//Example:
function foo(a,b) { return a + b;}
console.log(foo(3, 5)); // result is 8

// Function expression (not hoisted)
//Syntax: const add = function(a, b) { return a + b; };
//Example:
const add = function addNumbers(a, b) { return a + b; };
console.log(add(3, 5)); // result is 8

// Arrow function (concise, lexical this)
//Syntax: const add = (a, b) => a + b;
//Example:
const arr = [1,2,3]; 
console.log(arr.map(x => x * 2)); // [2, 4, 6]

// Function constructor / new Function (avoid)
//Syntax: 
// const num = [a,b,c]
// const returnfn = new function(num)
// Example:
const arrNum = [1,2,3];
const getFn = new Function(`return ${JSON.stringify(arrNum)}`);
console.log(getFn()); // [1, 2, 3]

// Methods (in objects / classes)
//Syntax:
// Shorthand in objects: const obj = { greet() { ... } };
// Example
const obj = {greet() {return `Sawo Themes`}};
console.log(obj.greet());

// Class methods: class A { method() { } }
// Methods have dynamic this (unless arrow used as class property).
// Example1
    class Sawo {
        products() {
            return `sauna heaters`
        }
    }

    const sawo = new Sawo();
    console.log(sawo.products());
// Example2
     class Sauna {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }
        xd() {
            return this.a + this.b;
        }
    }

    const sauna = new Sauna(6, 7);
    console.log(sauna.xd()); // Output: 13

// Generator functions

// Syntax: function* gen(){ yield 1; yield 2; }
// Return an iterator; used for lazy sequences or async patterns with iterators.
// Example:
// Generator function to create an infinite sequence of IDs
function* idMaker() {
    let id = 0; // Start with 0
    while (true) {
        yield ++id; // Increment and yield the next ID
    }
}

// Create an iterator from the generator
const idIterator = idMaker();

// Generate and log some IDs
console.log(idIterator.next().value); // Output: 1
console.log(idIterator.next().value); // Output: 2
console.log(idIterator.next().value); // Output: 3
// You can continue calling .next() to get more IDs
console.log(idIterator.next().value); // Output: 4

// Async functions

// Syntax: async function foo(){ await bar(); }
// Always return a Promise. Use try/catch for errors.
// Great with await to write readable async code.
// Example of an async function
async function fetchData() {
    try {
        console.log("Fetching data...");
        // Simulate an asynchronous operation (e.g., API call)
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("Data fetched successfully!"), 2000);
        });
        console.log(data); // Logs the resolved value
    } catch (error) {
        console.error("Error:", error); // Handle any errors
    }
}

// Call the async function
fetchData();
console.log("This will log before the data is fetched!");

// Immediately Invoked Function Expression (IIFE)

// Pattern to create privacy / initialization: (function(){ /* scope */ })();
// Less common now with modules but useful in scripts.
// IIFE Example: Module Pattern for Privacy
const counter = (function () {
    // Private variable
    let count = 0;

    // Public methods
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
})();

// Using the counter module
console.log(counter.getCount());  // Output: 0
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1

// 2. Parameters: arguments, rest, default, destructuring
// arguments object (only in non-arrow functions)

// Array-like, not an Array. Use rest instead.
// Example: function f(){ console.log(arguments); }
// Rest parameters

// Syntax: function sum(...nums) { return nums.reduce(...); }
// Converts extra args into actual Array.
// Default parameters

// Syntax: function greet(name = 'Guest') { ... }
// Default expressions are evaluated at call-time.
// Destructured parameters

// Useful for options: function init({ host='localhost', port=80 } = {}) { ... }
// Always provide a default {} if the argument might be undefined.
# 📜 JavaScript (ES2026) - Complete Curriculum

> **"JavaScript web ki jaan hai. Yeh web pages ko intelligent banata hai."**

---

## 📋 Table of Contents
- [Complete Roadmap](#-complete-roadmap)
- [History & Evolution](#-history--evolution)
- [Module 1: Beginner](#-module-1-beginner)
- [Module 2: Intermediate](#-module-2-intermediate)
- [Module 3: Advanced](#-module-3-advanced)
- [Module 4: Professional](#-module-4-professional)
- [Module 5: Expert](#-module-5-expert)
- [Interview Module](#-interview-module)
- [Project Module](#-project-module)

---

## 🗺️ Complete Roadmap

```
JavaScript Journey (ES2026)
│
├── 🟢 BEGINNER (Week 1-4)
│   ├── What is JS? Variables (let, const, var)
│   ├── Data Types (Primitive & Reference)
│   ├── Operators (Arithmetic, Comparison, Logical)
│   ├── Control Flow (if, else, switch)
│   ├── Loops (for, while, do-while)
│   ├── Functions (Declaration, Expression, Arrow)
│   ├── Arrays (Methods, Iteration)
│   ├── Objects (Properties, Methods)
│   ├── Template Literals
│   ├── Type Conversion & Coercion
│   └── Error Handling (try, catch, finally)
│
├── 🔵 INTERMEDIATE (Week 5-8)
│   ├── DOM Manipulation
│   ├── Events (Bubbling, Capturing, Delegation)
│   ├── ES6+ Features (Destructuring, Spread, Rest)
│   ├── Higher Order Functions (map, filter, reduce)
│   ├── Closures & Scope
│   ├── Hoisting & TDZ
│   ├── this Keyword (call, apply, bind)
│   ├── Prototypes & Inheritance
│   ├── Classes (ES6)
│   ├── Modules (import/export)
│   ├── Promises & Async/Await
│   ├── Fetch API & AJAX
│   └── JSON & Local Storage
│
├── 🟠 ADVANCED (Week 9-12)
│   ├── Event Loop (Microtasks, Macrotasks)
│   ├── Call Stack & Memory Heap
│   ├── Garbage Collection
│   ├── Generators & Iterators
│   ├── Symbols & Well-known Symbols
│   ├── Maps, Sets, WeakMaps, WeakSets
│   ├── Proxy & Reflect
│   ├── Web APIs (Intersection Observer, Resize Observer)
│   ├── Web Workers & Service Workers
│   ├── IndexedDB
│   ├── RegEx (Regular Expressions)
│   ├── Currying & Partial Application
│   └── Memoization & Caching
│
├── 🔴 PROFESSIONAL (Week 13-16)
│   ├── Design Patterns (Module, Observer, Singleton)
│   ├── Functional Programming
│   ├── Composition vs Inheritance
│   ├── Error Handling Patterns
│   ├── Performance Optimization
│   ├── Memory Leaks Prevention
│   ├── Testing (Jest, Vitest)
│   ├── Build Tools (Webpack, Vite)
│   ├── Bundling & Tree Shaking
│   ├── Security (XSS, CSRF Prevention)
│   └── TypeScript Integration
│
├── ⚫ EXPERT (Week 17-20)
│   ├── WebAssembly Integration
│   ├── Micro-Frontends
│   ├── Streams API
│   ├── Atomics & SharedArrayBuffer
│   ├── Temporal API (2024+)
│   ├── Decorators (Stage 3)
│   ├── Records & Tuples (Proposal)
│   ├── Pipeline Operator (Proposal)
│   ├── Realm API
│   └── JS Engine Internals (V8)
│
└── 💼 CAREER
    ├── Projects
    ├── Interview Prep (FAANG)
    └── System Design
```

---

## 📖 History & Evolution

| Year | Version | Key Features |
|------|---------|-------------|
| 1995 | Mocha/LiveScript | Created by Brendan Eich in 10 days |
| 1996 | JavaScript 1.0 | Netscape Navigator |
| 1997 | ES1 | First standardized version |
| 1998 | ES2 | Editorial changes |
| 1999 | ES3 | try/catch, RegEx, switch |
| 2009 | ES5 | strict mode, JSON, Array methods |
| 2015 | ES6/ES2015 | let, const, classes, arrow functions, modules, promises, template literals, destructuring, spread, Map, Set, Symbol |
| 2016 | ES2016 | Array.includes, exponent operator |
| 2017 | ES2017 | async/await, Object.entries/values |
| 2018 | ES2018 | Rest/Spread for objects, Promise.finally, async generators |
| 2019 | ES2019 | Array.flat, flatMap, Object.fromEntries, catch optional binding |
| 2020 | ES2020 | Optional chaining (?.), nullish coalescing (??), BigInt, Promise.allSettled, globalThis, dynamic import |
| 2021 | ES2021 | String.replaceAll, Promise.any, logical assignment (&&=, ||=, ??=), WeakRef, numeric separators |
| 2022 | ES2022 | .at() method, Top-level await, Error cause, RegExp match indices, Object.hasOwn, class fields (static, private #) |
| 2023 | ES2023 | Array.findLast, Hashbang grammar, Symbols as WeakMap keys |
| 2024 | ES2024 | Temporal API, Records & Tuples (stage 3), Decorators (stage 3), Iterator helpers |
| 2025 | ES2025 | Pipeline operator (stage 2), Pattern matching |
| 2026 | ES2026 | Promise.try, JSON.parse source access, RegExp modifiers |

### JavaScript Facts
- **Created by**: Brendan Eich (Netscape) in 1995
- **File Extension**: `.js` (also `.mjs` for modules, `.cjs` for CommonJS)
- **Paradigm**: Multi-paradigm (event-driven, functional, imperative, OOP)
- **Runtime**: Browser (V8, SpiderMonkey, JavaScriptCore) + Node.js/Deno/Bun
- **TC39**: Technical Committee 39 manages ECMAScript standard

---

# 🟢 MODULE 1: BEGINNER JAVASCRIPT

---

## 1.1 🌟 What is JavaScript?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 20 mins |
| **Prerequisites** | HTML Basics |

### Definition
JavaScript ek lightweight, interpreted programming language hai jo web pages ko interactive banata hai.

### Roman English Explanation
JavaScript ko "jaadoo" samjho. HTML ne structure banaya, CSS ne styling di, JavaScript se sab zinda ho jata hai. Jab aap button click karte ho, form submit karte ho, ya koi animation dekhte ho - ye sab JavaScript ki madad se hota hai.

### Analogy 🏠
> HTML = House structure (skeleton)
> CSS = Interior design (looks)
> JavaScript = Electricity, plumbing, smart features (functionality)

### Where JavaScript Runs
1. **Browser** (Client-side): Chrome, Firefox, Safari, Edge
2. **Server** (Server-side): Node.js, Deno, Bun
3. **Mobile Apps**: React Native
4. **Desktop Apps**: Electron, Tauri

### First JavaScript Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>JS Demo</title>
</head>
<body>
    <h1>JavaScript Demo</h1>
    <button onclick="sayHello()">Click Me</button>
    <p id="output"></p>
    
    <script>
        function sayHello() {
            document.getElementById('output').textContent = 'Namaste Duniya!';
        }
    </script>
</body>
</html>
```

---

## 1.2 📦 Variables: let, const, var

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |

### Definition
Variables data store karne ke containers hain. Jaise dabbe mein cheezein rakhte hain, waise hi variables mein values rakhte hain.

### Three Ways to Declare
```javascript
// 1. var (OLD - avoid using)
var name = "Rahul";       // Function scoped
var age = 25;             // Can be redeclared
var name = "Priya";       // ⚠️ No error!

// 2. let (MODERN - use for changing values)
let city = "Delhi";       // Block scoped
city = "Mumbai";          // ✅ Can update
// let city = "Bangalore"; // ❌ Cannot redeclare

// 3. const (MODERN - use for fixed values)
const PI = 3.14159;       // Block scoped
// PI = 3.14;             // ❌ Cannot reassign
// const x;               // ❌ Must initialize

// BUT const objects can be modified
const person = { name: "Rahul" };
person.name = "Priya";    // ✅ OK (object properties can change)
// person = {};           // ❌ Cannot reassign

// Naming Conventions
let firstName = "Rahul";  // camelCase (standard for JS)
let last_name = "Sharma"; // snake_case (less common)
let $price = 100;         // $ allowed
let _count = 5;           // _ allowed (private convention)
// let 1st = "wrong";     // ❌ Cannot start with number
```

### let vs const vs var

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block {} | Block {} |
| Redeclare | ✅ Yes | ❌ No | ❌ No |
| Reassign | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | ✅ (undefined) | ✅ (TDZ) | ✅ (TDZ) |
| Global property | ✅ (window.var) | ❌ | ❌ |

### Memory Trick 🧠
> **"Let = Let it change. Const = Constant - constant rahega."**

### Beginner Examples
```javascript
// Example 1: Basic variables
let studentName = "Rahul";
const college = "IIT Delhi";
var batch = 2026;

console.log(studentName);  // "Rahul"
console.log(college);      // "IIT Delhi"

// Example 2: Updating variables
let score = 0;
score = 10;
score += 5;  // score = score + 5 = 15
console.log(score);  // 15

// Example 3: Variables with different types
let userName = "Rahul";     // String
let userAge = 20;           // Number
let isStudent = true;       // Boolean
let userCity = null;        // null (empty)
let userHobby;              // undefined

// Example 4: Template literals with variables
let firstName = "Rahul";
let lastName = "Sharma";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);  // "Rahul Sharma"

// Example 5: Swapping variables
let a = 5, b = 10;
[a, b] = [b, a];  // Destructuring swap
console.log(a, b);  // 10, 5
```

---

## 1.3 🔢 Data Types in JavaScript

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |

### Primitive (Value) Types
```javascript
// 1. String - Text
let name = "Rahul";
let city = 'Delhi';
let message = `Hello ${name}`;  // Template literal

// 2. Number - Integers & Decimals
let age = 25;
let price = 99.99;
let negative = -10;
let big = 1_000_000;  // Numeric separator

// 3. Boolean - true/false
let isLoggedIn = true;
let isAdult = false;

// 4. Undefined - variable declared but no value
let x;
console.log(x);  // undefined

// 5. Null - intentional empty value
let y = null;

// 6. BigInt - Very large numbers
let bigNumber = 123456789012345678901234567890n;
let another = BigInt("9999999999999999");

// 7. Symbol - Unique identifier
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);  // false (always unique)
```

### Reference (Object) Types
```javascript
// 1. Object
let person = { name: "Rahul", age: 25 };

// 2. Array
let fruits = ["Apple", "Mango", "Banana"];

// 3. Function
function greet() { return "Hello"; }

// 4. Date
let today = new Date();

// 5. Map, Set, WeakMap, WeakSet
```

### Type Checking
```javascript
// typeof operator
typeof "hello";        // "string"
typeof 42;             // "number"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object" (⚠️ JS bug)
typeof Symbol();       // "symbol"
typeof 123n;           // "bigint"
typeof {};             // "object"
typeof [];             // "object"
typeof function(){};   // "function"

// Better checks
Array.isArray([]);              // true
Array.isArray({});              // false
null === null;                   // true
Object.prototype.toString.call([]);  // "[object Array]"
```

### Primitive vs Reference
```javascript
// Primitive: Copy by VALUE
let a = 10;
let b = a;    // b = 10 (copy)
b = 20;
console.log(a);  // 10 (unchanged)

// Reference: Copy by REFERENCE
let obj1 = { value: 10 };
let obj2 = obj1;  // obj2 points to SAME object
obj2.value = 20;
console.log(obj1.value);  // 20 (changed!)
```

---

## 1.4 ➗ Operators

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |

### Arithmetic Operators
```javascript
let a = 10, b = 3;

console.log(a + b);   // 13 (Addition)
console.log(a - b);   // 7 (Subtraction)
console.log(a * b);   // 30 (Multiplication)
console.log(a / b);   // 3.333... (Division)
console.log(a % b);   // 1 (Modulus - remainder)
console.log(a ** b);  // 1000 (Exponentiation, ES2016)

// Increment/Decrement
let x = 5;
x++;  // x = x + 1 (post-increment)
++x;  // x = x + 1 (pre-increment)
x--;  // x = x - 1 (post-decrement)
--x;  // x = x - 1 (pre-decrement)
```

### Assignment Operators
```javascript
let x = 10;
x += 5;   // x = x + 5 = 15
x -= 3;   // x = x - 3 = 12
x *= 2;   // x = x * 2 = 24
x /= 4;   // x = x / 4 = 6
x %= 2;   // x = x % 2 = 0
x **= 3;  // x = x ** 3
x &&= 5;  // Logical AND assignment (ES2021)
x ||= 10; // Logical OR assignment (ES2021)
x ??= 20; // Nullish coalescing assignment (ES2021)
```

### Comparison Operators
```javascript
// Loose equality (checks VALUE only)
5 == "5";    // true (type coercion!)
0 == false;  // true
null == undefined;  // true

// Strict equality (checks VALUE + TYPE)
5 === "5";   // false (different types)
0 === false; // false
null === undefined; // false

// Other comparisons
5 != "5";    // false (loose not equal)
5 !== "5";   // true (strict not equal)
10 > 5;      // true
10 >= 10;    // true
5 < 10;      // true

// String comparison (lexicographic)
"apple" < "banana";  // true (a comes before b)
"2" > "12";          // true (compares '2' vs '1')
```

### Logical Operators
```javascript
// AND (&&) - Both true = true
true && true;    // true
true && false;   // false
false && false;  // false

// Short-circuit: returns first falsy or last truthy
0 && "hello";     // 0 (falsy - short circuit)
"hi" && "bye";    // "bye" (both truthy, return last)

// OR (||) - Any true = true
true || false;    // true
false || false;   // false

// Short-circuit: returns first truthy or last falsy
0 || "hello";     // "hello"
"" || "fallback"; // "fallback"

// NOT (!) - Inverts
!true;   // false
!false;  // true
!!"hi";  // true (double NOT = Boolean conversion)

// Nullish Coalescing (??) - ES2020
null ?? "fallback";     // "fallback" (only for null/undefined)
undefined ?? "fb";      // "fb"
0 ?? "fb";              // 0 (0 is not nullish)
"" ?? "fb";             // "" (empty string is not nullish)
```

### Ternary Operator
```javascript
// condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
// "Adult"

// Nested (avoid for readability)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
```

---

## 1.5 🔀 Control Flow (if, else, switch)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |

### if/else if/else
```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}
// Grade: A

// Truthy/Falsy values
// Falsy: false, 0, "" (empty), null, undefined, NaN
// Truthy: Everything else

let name = "";
if (name) {
    console.log("Name hai");
} else {
    console.log("Name nahi hai");
}
// "Name nahi hai"
```

### Switch Statement
```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
    case 7:
        dayName = "Weekend!";
        break;
    default:
        dayName = "Invalid day";
}
// "Wednesday"

// Switch with multiple cases (no break = fall-through)
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "pear":
        console.log("Common fruit");
        break;
    case "mango":
        console.log("King of fruits");
        break;
    default:
        console.log("Unknown fruit");
}
```

---

## 1.6 🔄 Loops (for, while, do-while)

### For Loop
```javascript
// Syntax: for (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}
// 0, 1, 2, 3, 4

// Loop through array
let fruits = ["Apple", "Mango", "Banana"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For...of (values)
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in (indexes/keys)
for (let index in fruits) {
    console.log(index, fruits[index]);
}
```

### While Loop
```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
// 0, 1, 2, 3, 4

// Infinite loop (avoid!)
// while (true) { console.log("Forever"); }
```

### Do-While Loop
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// 0, 1, 2, 3, 4
// ALWAYS runs at least once!
```

### Loop Control
```javascript
// break - loop se bahar nikalo
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// 0, 1, 2, 3, 4

// continue - current iteration skip karo
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
// 0, 1, 3, 4
```

---

## 1.7 📝 Functions

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 45 mins |

### Function Declaration
```javascript
// Basic function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Rahul"));  // "Hello, Rahul!"

// Multiple parameters
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));  // 8

// Default parameters (ES6)
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));     // 5 (b defaults to 1)
console.log(multiply(5, 2));  // 10
```

### Function Expression
```javascript
// Function stored in variable
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Rahul"));  // "Hello, Rahul!"
```

### Arrow Functions (ES6)
```javascript
// Single parameter, single expression
const greet = name => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// Multiple statements need {} and return
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product };
};

// No parameters
const hello = () => "Hello!";

// Return object literal
const createUser = (name, age) => ({ name, age });
```

### Parameters & Arguments
```javascript
// Rest parameters (...)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Arguments object (old way - not in arrow functions)
function oldSum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
```

### Callback Functions
```javascript
// Function passed as argument
function processUser(name, callback) {
    const formatted = name.toUpperCase();
    callback(formatted);
}

processUser("rahul", function(formatted) {
    console.log(formatted);  // "RAHUL"
});

// With arrow
processUser("rahul", (f) => console.log(f));
```

### Beginner Examples

**Example 1 - Temperature Converter**
```javascript
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(celsiusToFahrenheit(0));   // 32
console.log(fahrenheitToCelsius(32));  // 0
```

**Example 2 - Even or Odd**
```javascript
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(10));  // true
console.log(isEven(7));   // false
```

**Example 3 - Factorial**
```javascript
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);  // Recursion
}
console.log(factorial(5));  // 120
```

**Example 4 - Validate Email**
```javascript
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}
console.log(isValidEmail("rahul@example.com"));  // true
console.log(isValidEmail("invalid"));            // false
```

**Example 5 - Random Number Generator**
```javascript
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1, 10));  // Random between 1-10
```

---

## 1.8 📊 Arrays

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 45 mins |

### Creating Arrays
```javascript
// Literal syntax (preferred)
let fruits = ["Apple", "Mango", "Banana"];

// Constructor
let numbers = new Array(1, 2, 3, 4, 5);
let empty = new Array(5);  // Array of 5 empty slots

// Mixed types
let mixed = [1, "hello", true, null, { name: "Rahul" }, [1, 2]];

// Array.of (ES6)
let arr = Array.of(5);  // [5] (not empty)

// Array.from (ES6)
let fromStr = Array.from("hello");  // ["h","e","l","l","o"]
let fromSet = Array.from(new Set([1, 2, 2, 3]));  // [1, 2, 3]
```

### Accessing & Modifying
```javascript
let fruits = ["Apple", "Mango", "Banana"];

// Access by index (0-based)
console.log(fruits[0]);   // "Apple"
console.log(fruits[2]);   // "Banana"
console.log(fruits[-1]);  // undefined

// .at() method (ES2022)
console.log(fruits.at(-1));  // "Banana" (last)
console.log(fruits.at(0));   // "Apple"

// Modify
fruits[1] = "Orange";
console.log(fruits);  // ["Apple", "Orange", "Banana"]

// Length
console.log(fruits.length);  // 3
fruits.length = 2;  // Truncate!
console.log(fruits);  // ["Apple", "Orange"]
```

### Array Methods
```javascript
let arr = [1, 2, 3, 4, 5];

// Add/Remove from end
arr.push(6);       // [1,2,3,4,5,6] (add to end)
arr.pop();         // [1,2,3,4,5] (remove from end)

// Add/Remove from beginning
arr.unshift(0);    // [0,1,2,3,4,5] (add to start)
arr.shift();       // [1,2,3,4,5] (remove from start)

// Find index
arr.indexOf(3);    // 2
arr.lastIndexOf(3);
arr.includes(3);   // true (ES2016)

// Slice (extract portion - returns new array)
arr.slice(1, 3);   // [2, 3] (index 1 to 3 exclusive)
arr.slice(-2);     // [4, 5] (last 2)

// Splice (insert/remove in place)
arr.splice(2, 1);       // Remove 1 element at index 2
arr.splice(2, 0, 'a');  // Insert 'a' at index 2
arr.splice(2, 1, 'b');  // Replace at index 2
```

### Iteration Methods (ES5+)
```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach - just loop
numbers.forEach(num => console.log(num * 2));

// map - transform each element (returns new array)
let doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements that pass test
let evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - accumulate values
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 15

let product = numbers.reduce((acc, curr) => acc * curr, 1);
// 120

// find - first element passing test
let firstEven = numbers.find(n => n % 2 === 0);
// 2

// findIndex - index of first passing element
let firstEvenIndex = numbers.findIndex(n => n % 2 === 0);
// 1

// some - any pass?
let hasEven = numbers.some(n => n % 2 === 0);
// true

// every - all pass?
let allEven = numbers.every(n => n % 2 === 0);
// false

// sort (IMPORTANT: sorts as strings by default)
let unsorted = [3, 1, 10, 2, 20];
unsorted.sort();  // [1, 10, 2, 20, 3] (string sort!)
unsorted.sort((a, b) => a - b);  // [1, 2, 3, 10, 20] (correct)

// reverse
numbers.reverse();  // [5, 4, 3, 2, 1]

// flat (ES2019)
let nested = [1, [2, 3], [4, [5, 6]]];
nested.flat();        // [1, 2, 3, 4, [5, 6]]
nested.flat(2);       // [1, 2, 3, 4, 5, 6]

// flatMap (ES2019)
let phrases = ["hello world", "good morning"];
phrases.flatMap(s => s.split(" "));
// ["hello", "world", "good", "morning"]

// fill
new Array(5).fill(0);  // [0, 0, 0, 0, 0]

// findLast, findLastIndex (ES2023)
let nums = [1, 2, 3, 4, 5, 6];
nums.findLast(n => n % 2 === 0);  // 6
nums.findLastIndex(n => n % 2 === 0);  // 5
```

---

## 1.9 🗂️ Objects

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 45 mins |

### Creating Objects
```javascript
// Object literal (preferred)
const person = {
    firstName: "Rahul",
    lastName: "Sharma",
    age: 25,
    isStudent: true,
    address: {
        city: "Delhi",
        pincode: 110001
    },
    greet: function() {
        return `Hello, I'm ${this.firstName}`;
    },
    // Shorthand method (ES6)
    sayHi() {
        return `Hi from ${this.firstName}`;
    }
};

// Computed property names (ES6)
let dynamicKey = "email";
const user = {
    name: "Rahul",
    [dynamicKey]: "rahul@example.com",
    [`user_${1+2}`]: "value"
};
```

### Accessing Properties
```javascript
// Dot notation
console.log(person.firstName);  // "Rahul"
console.log(person.address.city);  // "Delhi"

// Bracket notation (for dynamic keys)
console.log(person["firstName"]);  // "Rahul"
let key = "age";
console.log(person[key]);  // 25

// With spaces (must use brackets)
const obj = { "full name": "Rahul Sharma" };
console.log(obj["full name"]);

// Optional chaining (?.) - ES2020
console.log(person?.address?.city);  // "Delhi"
console.log(person?.phone?.number);  // undefined (no error!)
```

### Modifying Objects
```javascript
// Add/Update properties
person.email = "rahul@example.com";
person.age = 26;

// Delete properties
delete person.isStudent;

// Check if property exists
"age" in person;          // true
person.hasOwnProperty("age");  // true (own, not inherited)

// Get keys, values, entries (ES2017)
Object.keys(person);      // ["firstName", "lastName", ...]
Object.values(person);    // ["Rahul", "Sharma", ...]
Object.entries(person);   // [["firstName","Rahul"], ...]

// Object.assign - merge objects
const defaults = { theme: "light", lang: "en" };
const settings = { theme: "dark" };
const merged = Object.assign({}, defaults, settings);
// { theme: "dark", lang: "en" }

// Spread operator (ES2018) - simpler merge
const merged2 = { ...defaults, ...settings };

// Object.fromEntries (ES2019)
const entries = [["a", 1], ["b", 2]];
const fromEntries = Object.fromEntries(entries);
// { a: 1, b: 2 }

// Object.hasOwn (ES2022)
Object.hasOwn(person, "firstName");  // true
```

### Object Destructuring (ES6)
```javascript
const person = { name: "Rahul", age: 25, city: "Delhi" };

// Basic
const { name, age } = person;
console.log(name, age);  // "Rahul" 25

// Rename
const { name: fullName, city: town } = person;
console.log(fullName, town);

// Default values
const { salary = 50000, age: years = 30 } = person;
console.log(salary, years);  // 50000, 25

// Nested
const user = { id: 1, profile: { name: "Rahul", avatar: "img.jpg" } };
const { profile: { name: userName, avatar } } = user;
console.log(userName, avatar);

// Rest in destructuring
const { name: n, ...rest } = person;
console.log(rest);  // { age: 25, city: "Delhi" }
```

---

## 1.10 📝 Strings & Template Literals

```javascript
// Template literals (ES6)
let name = "Rahul";
let age = 25;

// Multi-line strings
let message = `
    Hello ${name},
    You are ${age} years old.
    Welcome to Code Duniya!
`;

// Expressions in templates
let price = 99;
let tax = 0.18;
console.log(`Total: ₹${price * (1 + tax)}`);

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => 
        `${result}${str}<strong>${values[i] || ''}</strong>`, '');
}
let result = highlight`Hello ${name}, age ${age}`;
```

### String Methods
```javascript
let str = "  Hello World!  ";

str.length;               // 15
str.toUpperCase();        // "  HELLO WORLD!  "
str.toLowerCase();        // "  hello world!  "
str.trim();               // "Hello World!"
str.trimStart();          // "Hello World!  "
str.trimEnd();            // "  Hello World!"

str.charAt(0);            // " "
str.charCodeAt(0);        // 32 (space code)
str.at(-1);               // "!" (ES2022)

str.indexOf("World");     // 7
str.includes("World");    // true (ES6)
str.startsWith("  ");     // true
str.endsWith("!  ");      // true

str.slice(2, 7);          // "Hello"
str.substring(2, 7);      // "Hello"
str.substr(2, 5);         // "Hello" (deprecated)

str.replace("World", "JavaScript");  // "  Hello JavaScript!  "
str.replaceAll("l", "L");  // ES2021

str.split(" ");           // ["", "", "Hello", "World!", "", ""]
"apple,mango,banana".split(",");  // ["apple","mango","banana"]

"hello".repeat(3);        // "hellohellohello"

// Padding
"5".padStart(3, "0");     // "005"
"5".padEnd(3, "0");       // "500"
```

---

## 1.11 🔢 Numbers & Math

```javascript
// Number methods
Number.parseInt("42px");   // 42
Number.parseFloat("3.14em");  // 3.14
Number.isNaN(NaN);         // true
Number.isFinite(Infinity); // false
Number.isInteger(5);       // true
Number.isSafeInteger(9007199254740991);  // true

// toFixed (returns string)
let n = 3.14159;
n.toFixed(2);     // "3.14"
n.toPrecision(3); // "3.14"

// Math object
Math.PI;           // 3.14159...
Math.E;            // 2.718...
Math.abs(-5);      // 5
Math.ceil(4.1);    // 5 (round up)
Math.floor(4.9);   // 4 (round down)
Math.round(4.5);   // 5
Math.trunc(4.9);   // 4 (remove decimal)
Math.max(1, 5, 3); // 5
Math.min(1, 5, 3); // 1
Math.pow(2, 3);    // 8
Math.sqrt(16);     // 4
Math.random();     // 0 to 1 (exclusive)
Math.sin(0);       // 0
Math.cos(0);       // 1

// Random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

---

## 1.12 ⏰ Date & Time

```javascript
// Create dates
const now = new Date();                    // Current date/time
const specific = new Date(2026, 6, 7);     // July 7, 2026
const fromString = new Date("2026-07-07");
const fromTimestamp = new Date(1767657600000);

// Get methods
now.getFullYear();      // 2026
now.getMonth();         // 6 (0-based: Jan=0)
now.getDate();          // 7
now.getDay();           // 2 (0=Sunday)
now.getHours();         // 21
now.getMinutes();       // 0
now.getSeconds();       // 0
now.getTime();          // Timestamp (ms since 1970)
now.toISOString();      // "2026-07-07T21:00:00.000Z"

// Set methods
const d = new Date();
d.setFullYear(2027);
d.setMonth(0);  // January
d.setDate(1);

// Formatting
d.toDateString();     // "Fri Jan 01 2027"
d.toLocaleDateString("hi-IN");  // Indian format
d.toLocaleString("en-IN");
```

---

## 1.13 ⚠️ Error Handling

```javascript
// try...catch...finally
try {
    // Code that might fail
    let result = riskyOperation();
    console.log("Success:", result);
} catch (error) {
    // Handle error
    console.error("Something went wrong:", error.message);
} finally {
    // ALWAYS runs (cleanup)
    console.log("Cleanup");
}

// Throw custom errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Both arguments must be numbers");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (err) {
    if (err instanceof TypeError) {
        console.log("Type error:", err.message);
    } else if (err instanceof RangeError) {
        console.log("Range error:", err.message);
    } else {
        console.log("General error:", err.message);
    }
}

// Error types
Error        // General
TypeError    // Wrong type
ReferenceError  // Undefined variable
SyntaxError  // Invalid syntax
RangeError   // Out of range
URIError     // Wrong URI

// Error cause (ES2022)
throw new Error("Failed to fetch", { cause: { status: 404 } });
```

---

## Beginner Module - Complete Topic List

| # | Topic | Status |
|---|-------|--------|
| 1-13 | All Above | ✅ Done |
| 14 | Type Coercion | Next |
| 15 | == vs === | Done |
| 16 | Truthy/Falsy | Done |
| 17 | Short-circuit Evaluation | Done |
| 18 | Console Methods | Next |
| 19 | Comments | Next |
| 20 | Strict Mode | Next |

---

# 🔵 MODULE 2: INTERMEDIATE JAVASCRIPT

---

## 2.1 🏛️ DOM Manipulation

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 90 mins |

### What is DOM?
DOM = Document Object Model. Browser HTML ko ek tree structure mein convert karta hai jise JavaScript access aur modify kar sakti hai.

### Selecting Elements
```javascript
// Single element
document.getElementById('header');
document.querySelector('.card');      // First match (CSS selector)
document.querySelector('#main h2');

// Multiple elements
document.getElementsByClassName('item');  // HTMLCollection (live)
document.getElementsByTagName('div');     // HTMLCollection (live)
document.querySelectorAll('.card');       // NodeList (static)

// Special
document.documentElement;  // <html>
document.body;             // <body>
document.head;             // <head>
document.title;            // <title> text
```

### Manipulating Elements
```javascript
const el = document.querySelector('.card');

// Content
el.textContent = "New text";                    // Set text (safe)
el.innerHTML = "<strong>Bold text</strong>";    // Set HTML (⚠️ XSS risk)
el.innerText = "Visible text only";

// Attributes
el.setAttribute('data-id', '123');
el.getAttribute('data-id');   // "123"
el.hasAttribute('data-id');   // true
el.removeAttribute('data-id');
el.id = "new-id";
el.className = "card active";  // Overwrites all classes
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('visible');
el.classList.contains('card');  // true

// Styles
el.style.color = 'red';
el.style.backgroundColor = 'blue';  // camelCase!
el.style.cssText = 'color: red; font-size: 20px;';

// Classes (preferred over style)
el.className = 'card';
el.classList.add('dark-theme');
```

### Creating & Removing Elements
```javascript
// Create
const div = document.createElement('div');
div.textContent = 'Hello';
div.className = 'box';
div.id = 'box1';

// Insert
document.body.appendChild(div);
document.body.prepend(div);    // First child
document.body.insertBefore(div, referenceEl);
referenceEl.insertAdjacentElement('beforebegin', div);
referenceEl.insertAdjacentHTML('afterend', '<p>New</p>');
referenceEl.insertAdjacentText('beforeend', 'text');

// Clone
const clone = div.cloneNode(true);  // deep clone

// Remove
div.remove();                // Modern
div.parentNode.removeChild(div);  // Old

// Replace
parent.replaceChild(newEl, oldEl);
```

### Traversing DOM
```javascript
const el = document.querySelector('.card');

// Up
el.parentElement;
el.parentNode;
el.closest('.container');  // Nearest ancestor matching selector

// Down
el.children;         // HTMLCollection (elements only)
el.childNodes;       // NodeList (includes text nodes)
el.firstElementChild;
el.lastElementChild;

// Sideways
el.nextElementSibling;
el.previousElementSibling;
el.nextSibling;      // Includes text nodes
```

---

## 2.2 🖱️ Events

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 60 mins |

### Event Listeners
```javascript
// addEventListener (preferred)
const btn = document.querySelector('button');

btn.addEventListener('click', function(e) {
    console.log('Clicked!');
});

btn.addEventListener('click', (e) => {
    console.log('Arrow function');
});

// Remove listener
function handler(e) { console.log('Handled'); }
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);

// One time
btn.addEventListener('click', () => {
    console.log('Once');
}, { once: true });
```

### Event Object (e)
```javascript
btn.addEventListener('click', (e) => {
    e.target;           // Actual clicked element
    e.currentTarget;    // Element with listener
    e.type;             // "click"
    e.preventDefault(); // Stop default action
    e.stopPropagation(); // Stop bubbling
    e.stopImmediatePropagation(); // Stop all handlers
    e.clientX, e.clientY;   // Mouse position (viewport)
    e.pageX, e.pageY;       // Mouse position (page)
    e.key;              // For keyboard events
    e.code;             // "KeyA", "Enter"
});
```

### Event Types
```javascript
// Mouse
click, dblclick, mousedown, mouseup, mousemove
mouseover, mouseout, mouseenter, mouseleave

// Keyboard
keydown, keyup, keypress (deprecated)

// Form
submit, reset, change, input, focus, blur

// Document
DOMContentLoaded, load, resize, scroll, beforeunload

// Touch (mobile)
touchstart, touchend, touchmove, touchcancel

// Drag
dragstart, dragend, dragover, dragenter, dragleave, drop

// Clipboard
copy, cut, paste

// Focus
focus, blur, focusin, focusout
```

### Event Bubbling & Capturing
```html
<div id="parent">
    <button id="child">Click</button>
</div>

<script>
// BUBBLING (default): child → parent → grandparent (up)
// CAPTURING: grandparent → parent → child (down)

document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent (bubbling)');
});

document.getElementById('child').addEventListener('click', (e) => {
    console.log('Child');
    e.stopPropagation();  // Don't bubble further
});

// Capturing phase (third argument = true)
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent (capturing)');
}, true);
</script>
```

### Event Delegation
```javascript
// Instead of adding listener to EACH item, add to parent
document.querySelector('ul').addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;  // Not a list item
    
    console.log('Clicked:', li.textContent);
});
// Works for dynamically added items too!
```

### Custom Events
```javascript
// Create
const event = new CustomEvent('userLogin', {
    detail: { userId: 1, name: 'Rahul' },
    bubbles: true,
    cancelable: true
});

// Dispatch
document.dispatchEvent(event);

// Listen
document.addEventListener('userLogin', (e) => {
    console.log('User logged in:', e.detail);
});
```

---

## 2.3 🔒 Closures & Scope

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 60 mins |

### Scope Types
```javascript
// Global scope - accessible everywhere
let globalVar = "I'm global";

function test() {
    // Function scope
    let functionVar = "I'm function scoped";
    
    if (true) {
        // Block scope (let/const)
        let blockVar = "I'm block scoped";
        var oldVar = "I'm function scoped (var)";
    }
    
    console.log(functionVar);  // ✅
    console.log(oldVar);       // ✅ (var is function scoped)
    // console.log(blockVar);  // ❌ ReferenceError
}

console.log(globalVar);  // ✅
// console.log(functionVar);  // ❌
```

### Lexical Scoping
```javascript
// Inner function can access outer function's variables
function outer() {
    let message = "Hello from outer!";
    
    function inner() {
        console.log(message);  // Accesses outer's variable
    }
    
    inner();
}
outer();  // "Hello from outer!"
```

### Closure
```javascript
// Closure = function + its lexical environment
function createCounter() {
    let count = 0;  // Private variable
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
// count is NOT accessible from outside!

// Practical: Private variables
function createUser(name) {
    let _password = "secret123";  // Private
    
    return {
        getName: () => name,
        setPassword: (newPass) => { _password = newPass; },
        checkPassword: (pass) => _password === pass
    };
}

const user = createUser("Rahul");
console.log(user.getName());  // "Rahul"
// console.log(user._password);  // undefined (private!)
console.log(user.checkPassword("secret123"));  // true

// Closure in loops (common bug)
// Wrong - all print 3
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Fix 1: Use let (block scope)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);  // 0, 1, 2
}

// Fix 2: IIFE closure
for (var i = 0; i < 3; i++) {
    ((j) => {
        setTimeout(() => console.log(j), 1000);
    })(i);  // 0, 1, 2
}
```

### IIFE (Immediately Invoked Function Expression)
```javascript
// Old module pattern
(function() {
    let privateVar = "secret";
    console.log("Runs immediately!");
})();

// With parameters
(function(name) {
    console.log(`Hello ${name}!`);
})("Rahul");

// Modern: just use blocks
{
    let msg = "Block scoped!";
    console.log(msg);
}
```

---

## 2.4 ⬆️ Hoisting & TDZ

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Hoisting
```javascript
// JavaScript moves declarations to the top

// var hoisting
console.log(x);  // undefined (not ReferenceError!)
var x = 5;
// Interpreted as:
// var x;
// console.log(x);  // undefined
// x = 5;

// Function hoisting
sayHello();  // ✅ Works!
function sayHello() {
    console.log("Hello!");
}

// let/const hoisting (but TDZ)
// console.log(y);  // ❌ ReferenceError: Cannot access before initialization
let y = 10;

// Function expression NOT hoisted
// greet();  // ❌ TypeError
const greet = () => console.log("Hi");
```

### Temporal Dead Zone (TDZ)
```javascript
// TDZ = Time between entering scope and declaration
{
    // TDZ starts
    // console.log(z);  // ReferenceError
    let z = 5;  // TDZ ends
    console.log(z);  // ✅ 5
}

// typeof with TDZ
// console.log(typeof notDeclared);  // "undefined" (undeclared)
// console.log(typeof x);  // ReferenceError (TDZ)
let x;
```

---

## 2.5 🔑 'this' Keyword

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 60 mins |

### What is 'this'?
`this` refers to the object that is executing the current function.

### 5 Rules of 'this'
```javascript
// 1. Global context
console.log(this);  // Window (browser), global (Node)

// 2. Regular function → window (non-strict) / undefined (strict)
function show() {
    console.log(this);  // Window
}
show();

function showStrict() {
    'use strict';
    console.log(this);  // undefined
}

// 3. Object method → the object
const person = {
    name: "Rahul",
    greet() {
        console.log(this.name);  // "Rahul"
    }
};
person.greet();

// 4. Arrow function → lexical this (parent scope)
const obj = {
    name: "Rahul",
    greet: () => {
        console.log(this.name);  // undefined! (window.name)
    },
    greetNested() {
        const inner = () => {
            console.log(this.name);  // "Rahul" (lexical)
        };
        inner();
    }
};

// 5. Constructor / Class → new instance
function Person(name) {
    this.name = name;
}
const p = new Person("Rahul");
console.log(p.name);  // "Rahul"
```

### Controlling 'this'
```javascript
function greet() {
    console.log(`Hello, ${this.name}!`);
}

const user1 = { name: "Rahul" };
const user2 = { name: "Priya" };

// call - immediately invokes, arguments one by one
greet.call(user1);  // "Hello, Rahul!"
greet.call(user2, "arg1", "arg2");

// apply - immediately invokes, arguments as array
greet.apply(user1, [arg1, arg2]);

// bind - returns NEW function with 'this' bound
const greetRahul = greet.bind(user1);
greetRahul();  // "Hello, Rahul!"

// Partial application with bind
function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));  // 10
```

---

## 2.6 🧬 Prototypes & Inheritance

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 60 mins |

### Prototype Chain
```javascript
// Every object has a prototype (parent)
// Array inherits from Array.prototype → Object.prototype → null

const arr = [1, 2, 3];
console.log(arr.__proto__);           // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// Modern way
console.log(Object.getPrototypeOf(arr));  // Array.prototype

// Prototype chain resolution:
// arr.toString() → Array.prototype.toString? No
// → Object.prototype.toString? Yes! (found)
```

### Constructor Functions
```javascript
// Constructor function (PascalCase)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype (shared, not copied per instance)
Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
};

Person.prototype.isAdult = function() {
    return this.age >= 18;
};

const rahul = new Person("Rahul", 25);
const priya = new Person("Priya", 17);
console.log(rahul.greet());      // "Hi, I'm Rahul"
console.log(priya.isAdult());    // false

// Both share same prototype method (memory efficient!)
console.log(rahul.greet === priya.greet);  // true

// instanceof
console.log(rahul instanceof Person);   // true
console.log(rahul instanceof Object);   // true
```

### Prototypal Inheritance
```javascript
function Student(name, age, course) {
    Person.call(this, name, age);  // Call parent constructor
    this.course = course;
}

// Inherit from Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Override method
Student.prototype.greet = function() {
    return `Hi, I'm ${this.name}, studying ${this.course}`;
};

// New method
Student.prototype.study = function() {
    return `${this.name} is studying`;
};

const student = new Student("Rahul", 20, "CS");
console.log(student.greet());   // "Hi, I'm Rahul, studying CS"
console.log(student.study());   // "Rahul is studying"
console.log(student instanceof Student);  // true
console.log(student instanceof Person);   // true
```

### Object.create
```javascript
const personProto = {
    greet() { return `Hi, I'm ${this.name}`; },
    init(name) { this.name = name; return this; }
};

const rahul = Object.create(personProto);
rahul.name = "Rahul";
console.log(rahul.greet());  // "Hi, I'm Rahul"

// With init
const priya = Object.create(personProto).init("Priya");
console.log(priya.greet());  // "Hi, I'm Priya"
```

---

## 2.7 🏫 Classes (ES6)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 45 mins |

### Class Syntax
```javascript
class Person {
    // Constructor (runs on new)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method (on prototype)
    greet() {
        return `Hi, I'm ${this.name}`;
    }
    
    // Getter
    get birthYear() {
        return 2026 - this.age;
    }
    
    // Setter
    set birthYear(year) {
        this.age = 2026 - year;
    }
    
    // Static method (on class, not instance)
    static createAnonymous() {
        return new Person("Anonymous", 0);
    }
    
    // Static property (ES2022)
    static species = "Human";
}

const rahul = new Person("Rahul", 25);
console.log(rahul.greet());      // "Hi, I'm Rahul"
console.log(rahul.birthYear);    // 2001
rahul.birthYear = 2000;
console.log(rahul.age);          // 26

const anon = Person.createAnonymous();
console.log(Person.species);     // "Human"
```

### Class Inheritance (extends)
```javascript
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);  // Must call parent constructor first!
        this.course = course;
    }
    
    greet() {
        return `${super.greet()} and I study ${this.course}`;
    }
    
    // Private field (ES2022)
    #grade = 'A';
    
    getGrade() {
        return this.#grade;
    }
    
    // Private method
    #calculateScore() {
        return 95;
    }
    
    static createFreshman(name) {
        return new Student(name, 18, "General");
    }
}

const student = new Student("Rahul", 20, "CS");
console.log(student.greet());         // "Hi, I'm Rahul and I study CS"
console.log(student.getGrade());      // "A"
// console.log(student.#grade);        // ❌ Private (SyntaxError)
```

### Class Fields (ES2022)
```javascript
class User {
    // Public field
    name = "Guest";
    age = 0;
    
    // Private field
    #password = "default";
    #id;
    
    // Static field
    static count = 0;
    
    constructor(name, password) {
        this.name = name;
        this.#password = password;
        this.#id = ++User.count;
    }
    
    login(password) {
        return this.#password === password;
    }
    
    // Private getter
    get #secretToken() {
        return this.#id * 1000;
    }
}
```

---

## 2.8 📦 Modules (import/export)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Exporting
```javascript
// math.js

// Named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export class Calculator { /* ... */ }

// Export after declaration
const E = 2.718;
export { E };

// Rename export
function sub(a, b) { return a - b; }
export { sub as subtract };

// Default export (one per module)
export default function multiply(a, b) { return a * b; }

// Export all from another module
export * from './utils.js';
```

### Importing
```javascript
// app.js

// Default import
import multiply from './math.js';

// Named imports
import { PI, add, Calculator } from './math.js';

// Rename imports
import { add as sum } from './math.js';

// Import all as namespace
import * as Math from './math.js';
Math.add(5, 3);
Math.PI;

// Mixed
import multiply, { add, PI } from './math.js';

// Dynamic import (ES2020)
const module = await import('./math.js');
module.add(5, 3);
```

### Module vs Script
| Feature | Module (type="module") | Script |
|---------|----------------------|--------|
| Strict mode | ✅ Always | ❌ Optional |
| Top-level await | ✅ Yes | ❌ No |
| Defer by default | ✅ Yes | ❌ No |
| Scope | Module scope | Global scope |
| Import/export | ✅ Yes | ❌ No |

---

## 2.9 🔄 Promises & Async/Await

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 90 mins |

### What is a Promise?
Promise ek object hai jo asynchronous operation ka eventual result represent karta hai.

### Promise States
```
Pending   →   Fulfilled (resolved)  → .then()
           →   Rejected              → .catch()
```

### Creating Promises
```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation successful");
        } else {
            reject(new Error("Operation failed"));
        }
    }, 1000);
});

// Using the promise
promise
    .then(result => {
        console.log("Success:", result);
        return "Next value";
    })
    .then(next => {
        console.log("Chained:", next);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Always runs (cleanup)");
    });
```

### Promise Chaining
```javascript
fetchUser(1)
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(err => console.error(err))
    .finally(() => hideLoader());
```

### Static Promise Methods
```javascript
// Promise.resolve
const cached = Promise.resolve("From cache");
cached.then(val => console.log(val));

// Promise.reject
const failed = Promise.reject(new Error("Failed"));

// Promise.all - wait for ALL (fail if any fails)
const p1 = fetch('/api/users');
const p2 = fetch('/api/posts');
const p3 = fetch('/api/comments');

Promise.all([p1, p2, p3])
    .then(([users, posts, comments]) => {
        console.log('All done:', users, posts, comments);
    })
    .catch(err => console.log('One failed:', err));

// Promise.allSettled (ES2020) - wait for ALL (never fails)
Promise.allSettled([p1, p2, p3])
    .then(results => {
        results.forEach(r => {
            if (r.status === 'fulfilled') console.log(r.value);
            if (r.status === 'rejected') console.log(r.reason);
        });
    });

// Promise.race - first to complete
Promise.race([fetch('/api'), timeout(5000)])
    .then(result => console.log("First:", result));

// Promise.any (ES2021) - first to fulfill (ignore rejections)
Promise.any([p1, p2, p3])
    .then(firstSuccess => console.log(firstSuccess))
    .catch(err => console.log('All failed:', err));

// Promise.try (ES2026)
Promise.try(() => riskyFunction())
    .then(result => console.log(result))
    .catch(err => console.error(err));
```

### Async/Await (ES2017)
```javascript
// Async function always returns a promise
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('Network error');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Failed:', error);
        throw error;  // Re-throw for caller
    }
}

// Using async function
async function displayUser() {
    try {
        const user = await fetchUserData(1);
        console.log(user.name);
    } catch (err) {
        console.log('User fetch failed');
    }
}

// Parallel execution
async function loadDashboard() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('/api/users').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/comments').then(r => r.json())
        ]);
        return { users, posts, comments };
    } catch (err) {
        console.error('Dashboard load failed');
    }
}

// Sequential vs Parallel
// Sequential (slower)
async function sequential() {
    const a = await fetchA();
    const b = await fetchB();  // Waits for A!
    const c = await fetchC();  // Waits for B!
}

// Parallel (faster)
async function parallel() {
    const [a, b, c] = await Promise.all([
        fetchA(), fetchB(), fetchC()
    ]);
}
```

### Real-world Example
```javascript
async function searchFlights(from, to, date) {
    try {
        showLoader();
        
        const response = await fetch(`/api/flights?from=${from}&to=${to}&date=${date}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const flights = await response.json();
        displayFlights(flights);
        return flights;
        
    } catch (error) {
        showError(`Search failed: ${error.message}`);
        return [];
    } finally {
        hideLoader();
    }
}
```

---

## 2.10 🌐 Fetch API & AJAX

```javascript
// GET request
fetch('https://api.example.com/users')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();  // Parse JSON
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));

// POST request
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify({
        name: 'Rahul',
        email: 'rahul@example.com'
    })
})
.then(res => res.json())
.then(data => console.log('Created:', data))
.catch(err => console.error(err));

// Response Methods
response.json();         // Parse JSON
response.text();         // Parse text
response.blob();         // Binary data (images)
response.formData();     // Form data
response.arrayBuffer();  // Raw bytes

// Headers
fetch(url).then(res => {
    console.log(res.headers.get('Content-Type'));
    console.log(res.status);      // 200
    console.log(res.ok);          // true
    console.log(res.statusText);  // "OK"
});

// AbortController (cancel request)
const controller = new AbortController();
const signal = controller.signal;

fetch(url, { signal })
    .then(res => res.json())
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Request cancelled');
        }
    });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);
```

---

## 2.11 🧹 JSON

```javascript
// JSON.stringify - object → JSON string
const user = { name: "Rahul", age: 25, city: "Delhi" };
const json = JSON.stringify(user);
// '{"name":"Rahul","age":25,"city":"Delhi"}'

// Pretty print
JSON.stringify(user, null, 2);
// {
//   "name": "Rahul",
//   "age": 25,
//   "city": "Delhi"
// }

// JSON.parse - JSON string → object
const parsed = JSON.parse(json);
console.log(parsed.name);  // "Rahul"

// With reviver
const data = JSON.parse(json, (key, value) => {
    if (key === 'age') return value + 10;  // Modify
    return value;
});

// Deep clone
const clone = JSON.parse(JSON.stringify(original));
// ⚠️ Loses functions, undefined, Symbol, Dates
```

---

## Intermediate Module - Practice

### Flash Cards
```
Q: Closure kya hai?
A: Function + its lexical environment

Q: 'this' in arrow function?
A: Lexical this (parent scope)

Q: Promise ke 3 states?
A: Pending, Fulfilled, Rejected

Q: Event bubbling?
A: Child → Parent → Grandparent (upward)

Q: async/await se kya hota?
A: Async code synchronous-like likh sakte hain

Q: Prototype kya hai?
A: Inheritance mechanism in JS

Q: Map vs Object?
A: Map = any keys, ordered, better performance
```

---

# 🟠 MODULE 3: ADVANCED JAVASCRIPT

---

## 3.1 🔄 Event Loop & Async JavaScript

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Hard |
| **Time** | 60 mins |

### JavaScript Runtime Architecture
```
Call Stack        Web APIs (Browser)     Callback Queue
┌─────────┐       ┌──────────────┐       ┌──────────────┐
│ function │       │ setTimeout() │       │  callback    │
│ function │       │ fetch()     │       │  callback    │
│ function │       │ DOM events   │       │  callback    │
└─────────┘       └──────────────┘       └──────────────┘
      │                   │                      │
      └───────────────────┴──────────────────────┘
                          │
                   Event Loop (checks queue
                   when stack is empty)
```

### Execution Order
```javascript
console.log("1");  // Synchronous

setTimeout(() => console.log("2"), 0);  // Macrotask

Promise.resolve().then(() => console.log("3"));  // Microtask

console.log("4");  // Synchronous

// Output: 1, 4, 3, 2
// Why? Microtasks (Promise) run before macrotasks (setTimeout)
```

### Microtasks vs Macrotasks
```
Microtasks (high priority):      Macrotasks (lower priority):
- Promise.then/catch/finally     - setTimeout/setInterval
- queueMicrotask()                - setImmediate (Node)
- MutationObserver                - I/O operations
- process.nextTick (Node)         - UI rendering
                                  - event listeners
```

### Event Loop Visualization
```javascript
// 1. Execute all synchronous code (Call Stack)
// 2. Execute all microtasks
// 3. Execute ONE macrotask (oldest)
// 4. Re-render UI (if needed)
// 5. Repeat from step 2

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve()
    .then(() => console.log("Promise 1"))
    .then(() => console.log("Promise 2"));

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

// Output: Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2
```

---

## 3.2 📊 Maps & Sets

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### Map
```javascript
// Map = key-value pairs (any type of key!)
const map = new Map();

map.set('name', 'Rahul');    // String key
map.set(42, 'Answer');       // Number key
map.set(true, 'Boolean');    // Boolean key
map.set({id: 1}, 'Object');  // Object key!

console.log(map.get('name'));  // "Rahul"
console.log(map.has(42));      // true
console.log(map.size);         // 4
map.delete('name');
map.clear();

// Iteration
const users = new Map([
    [1, 'Rahul'],
    [2, 'Priya'],
    [3, 'Amit']
]);

for (const [id, name] of users) {
    console.log(id, name);
}

users.forEach((value, key) => console.log(key, value));

[...users.keys()];      // [1, 2, 3]
[...users.values()];    // ["Rahul", "Priya", "Amit"]
[...users.entries()];   // [[1,"Rahul"],...]

// Map vs Object
// Map: any keys, ordered, size property, better performance for frequent add/remove
// Object: string/Symbol keys, prototype chain, JSON support
```

### Set
```javascript
// Set = unique values (no duplicates)
const set = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(set);  // Set(5) {1, 2, 3, 4, 5}

set.add(6);
set.has(3);   // true
set.size;     // 6
set.delete(1);
set.clear();

// Array deduplication
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];  // [1, 2, 3, 4]

// Set operations
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union
new Set([...a, ...b]);  // {1, 2, 3, 4}

// Intersection
new Set([...a].filter(x => b.has(x)));  // {2, 3}

// Difference
new Set([...a].filter(x => !b.has(x)));  // {1}
```

### WeakMap & WeakSet
```javascript
// WeakMap: keys are objects (garbage collected!)
let obj = { data: "important" };
const wm = new WeakMap();
wm.set(obj, "metadata");

obj = null;  // Object garbage collected, WeakMap entry auto-removed!

// WeakSet: similar for unique objects
let user = { id: 1 };
const ws = new WeakSet();
ws.add(user);
user = null;  // Auto-removed

// Use cases: private data, caching without memory leaks
```

---

## 3.3 🔷 Symbols & Well-known Symbols

```javascript
// Symbol - unique and immutable primitive
const sym1 = Symbol('debug');
const sym2 = Symbol('debug');
console.log(sym1 === sym2);  // false (always unique)

// Symbol as object key (private-like)
const _private = Symbol('private');
const obj = {
    [_private]: 'secret',
    public: 'visible'
};
console.log(obj[_private]);  // "secret"
console.log(Object.keys(obj));  // ["public"] (Symbol keys hidden)

// Global symbol registry
const globalSym = Symbol.for('app.user');
const sameSym = Symbol.for('app.user');
console.log(globalSym === sameSym);  // true

Symbol.keyFor(globalSym);  // "app.user"

// Well-known Symbols
const iterable = {
    [Symbol.iterator]: function* () {
        yield 1; yield 2; yield 3;
    }
};
console.log([...iterable]);  // [1, 2, 3]

// Symbol.hasInstance - instanceof customization
// Symbol.toPrimitive - type conversion
// Symbol.toStringTag - Object.prototype.toString
// Symbol.species - constructor for derived objects
// Symbol.match - string match customization
```

---

## 3.4 🪞 Proxy & Reflect

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 45 mins |

### Proxy
```javascript
// Proxy intercepts operations on an object
const target = { name: "Rahul", age: 25 };

const handler = {
    // Get trap
    get(obj, prop) {
        if (prop in obj) {
            console.log(`Getting ${prop}: ${obj[prop]}`);
            return obj[prop];
        }
        return `Property "${prop}" doesn't exist`;
    },
    
    // Set trap
    set(obj, prop, value) {
        if (prop === 'age' && (value < 0 || value > 150)) {
            throw new Error('Invalid age');
        }
        console.log(`Setting ${prop} to ${value}`);
        obj[prop] = value;
        return true;  // Indicate success
    },
    
    // Has trap
    has(obj, prop) {
        console.log(`Checking if ${prop} exists`);
        return prop in obj;
    },
    
    // Delete trap
    deleteProperty(obj, prop) {
        console.log(`Deleting ${prop}`);
        delete obj[prop];
        return true;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);         // Getting name: Rahul
proxy.age = 30;                  // Setting age to 30
console.log(proxy.address);      // "Property "address" doesn't exist"
// proxy.age = -5;               // Error: Invalid age
console.log('name' in proxy);    // Checking if name exists → true
```

### Use Cases
```javascript
// Validation
const validator = {
    set(obj, prop, value) {
        if (prop === 'email' && !value.includes('@')) {
            throw new Error('Invalid email');
        }
        obj[prop] = value;
        return true;
    }
};

// Logging
const logger = {
    get: (obj, prop) => {
        console.log(`Accessed: ${prop}`);
        return obj[prop];
    }
};

// Default values
const defaults = {
    get: (obj, prop) => prop in obj ? obj[prop] : 'N/A'
};
```

### Reflect API
```javascript
// Reflect provides methods for interceptable operations
const obj = { a: 1, b: 2 };

Reflect.get(obj, 'a');       // 1
Reflect.set(obj, 'c', 3);    // true
Reflect.has(obj, 'a');       // true
Reflect.deleteProperty(obj, 'b');  // true
Reflect.ownKeys(obj);        // ["a", "c"]

// Better than direct operations:
// 1. Returns boolean (not throws)
// 2. Accepts receiver
// 3. Standardizes object operations
```

---

## 3.5 🔄 Generators & Iterators

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 45 mins |

### Generators
```javascript
// Generator function (function*)
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next());  // { value: 1, done: false }
console.log(gen.next());  // { value: 2, done: false }
console.log(gen.next());  // { value: 3, done: false }
console.log(gen.next());  // { value: undefined, done: true }

// For...of with generator
for (const num of numberGenerator()) {
    console.log(num);  // 1, 2, 3
}

// Spread operator
console.log([...numberGenerator()]);  // [1, 2, 3]

// Infinite generator
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const ids = idGenerator();
console.log(ids.next().value);  // 1
console.log(ids.next().value);  // 2
```

### Practical Generator Examples
```javascript
// 1. Range generator
function* range(start, end, step = 1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}
console.log([...range(1, 10, 2)]);  // [1, 3, 5, 7, 9]

// 2. Fibonacci
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
const fib = fibonacci();
console.log(fib.next().value);  // 0
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 2

// 3. Pagination
async function* paginate(url) {
    let page = 1;
    let hasMore = true;
    while (hasMore) {
        const response = await fetch(`${url}?page=${page}`);
        const data = await response.json();
        yield data.items;
        hasMore = data.hasMore;
        page++;
    }
}

// 4. Passing values to generator
function* inputOutput() {
    const name = yield "What's your name?";
    const age = yield `Hello ${name}, how old are you?`;
    return `${name} is ${age} years old`;
}
const io = inputOutput();
console.log(io.next().value);         // "What's your name?"
console.log(io.next("Rahul").value);  // "Hello Rahul, how old are you?"
console.log(io.next(25).value);       // "Rahul is 25 years old"
```

### Custom Iterator
```javascript
// Make any object iterable
const range = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

console.log([...range]);  // [1, 2, 3, 4, 5]
```

---

## 3.6 正则表达式 (Regular Expressions)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 60 mins |

### Creating Regex
```javascript
// Literal syntax (preferred)
const regex = /hello/i;  // i = case insensitive

// Constructor
const regex2 = new RegExp('hello', 'i');

// Flags
/g  // Global (all matches)
/i  // Case insensitive
/m  // Multiline (^ and $ match line starts/ends)
/s  // Dotall (. matches newline)
/u  // Unicode
/y  // Sticky (lastIndex)
/d  // Indices (ES2022)
```

### Common Patterns
```javascript
// Character classes
\d  // Digit [0-9]
\w  // Word [a-zA-Z0-9_]
\s  // Whitespace [ \t\n\r]
\D  // Non-digit
\W  // Non-word
\S  // Non-whitespace
.   // Any character (except newline)

// Quantifiers
*   // 0 or more
+   // 1 or more
?   // 0 or 1
{n} // Exactly n
{n,} // n or more
{n,m} // n to m

// Anchors
^   // Start of string
$   // End of string
\b  // Word boundary
\B  // Non-word boundary

// Groups
(abc)   // Capturing group
(?:abc) // Non-capturing group
(?=abc) // Lookahead
(?!abc) // Negative lookahead
(?<=abc)// Lookbehind
(?<!abc)// Negative lookbehind

// Alternation
a|b  // a or b

// Escaping
\. \* \+ \? \( \) \[ \] \{ \} \\ \| \^ \$
```

### Regex Methods
```javascript
const str = "Hello 123 World 456";

// test - returns boolean
/\d+/.test(str);  // true

// exec - returns match info
const match = /\d+/.exec(str);
// ["123", index: 6, input: "..."]

// String methods
str.match(/\d+/);            // ["123"]
str.match(/\d+/g);           // ["123", "456"]
str.search(/\d+/);           // 6 (index)
str.replace(/\d+/g, 'X');    // "Hello X World X"
str.split(/\s+/);            // ["Hello", "123", "World", "456"]
```

### Practical Examples
```javascript
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailRegex.test("rahul@example.com");  // true

// Phone (India)
const phoneRegex = /^[6-9]\d{9}$/;

// Password (min 8, 1 uppercase, 1 lowercase, 1 number)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// URL
const urlRegex = /^https?:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!$&'()*+,;=.]+$/;

// Extract domain from email
const email = "rahul@example.com";
const domain = email.match(/@(.+)/)[1];  // "example.com"

// Validate Aadhaar (12 digits)
const aadhaarRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;

// Remove HTML tags
const html = "<p>Hello <b>World</b></p>";
const plainText = html.replace(/<[^>]*>/g, '');  // "Hello World"
```

---

## 3.7 🎯 Advanced Array Methods

### reduce Deep Dive
```javascript
const numbers = [1, 2, 3, 4, 5];

// Basic: sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Grouping
const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'mango' },
    { type: 'veg', name: 'carrot' }
];
const grouped = items.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item.name);
    return acc;
}, {});
// { fruit: ['apple', 'mango'], veg: ['carrot'] }

// Chaining
const result = numbers
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);
// 24

// Pipe/compose
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const double = x => x * 2;
const addOne = x => x + 1;
const process = pipe(double, addOne);
console.log(process(5));  // 11
```

---

## 3.8 🧰 Currying & Partial Application

```javascript
// Currying: f(a, b, c) → f(a)(b)(c)
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...more) => curried(...args, ...more);
    };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));  // 6
console.log(curriedAdd(1, 2)(3));  // 6

// Partial Application: pre-fill some arguments
const multiply = (a, b) => a * b;
const double = multiply.bind(null, 2);
console.log(double(5));  // 10
```

---

## Advanced Module - Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | Event Loop | ✅ Done |
| 2 | Maps & Sets | ✅ Done |
| 3 | Symbols | ✅ Done |
| 4 | Proxy & Reflect | ✅ Done |
| 5 | Generators & Iterators | ✅ Done |
| 6 | Regular Expressions | ✅ Done |
| 7 | Currying | ✅ Done |
| 8 | Memoization | Next |
| 9 | Debounce & Throttle | Next |
| 10 | Web Workers | Next |
| 11 | Service Workers | Next |
| 12 | IndexedDB | Next |

---

# 🔴 MODULE 4: PROFESSIONAL JAVASCRIPT

*(Complete professional module with design patterns, FP, testing, build tools, security, performance)*

---

## 4.1 🏗️ Design Patterns

### Module Pattern
```javascript
const UserModule = (() => {
    let _users = [];  // Private
    
    const add = (user) => _users.push(user);
    const getAll = () => [..._users];
    const findByName = (name) => _users.find(u => u.name === name);
    
    return { add, getAll, findByName };  // Public API
})();

UserModule.add({ name: "Rahul" });
console.log(UserModule.getAll());  // [{ name: "Rahul" }]
```

### Observer Pattern
```javascript
class EventEmitter {
    constructor() {
        this._events = {};
    }
    
    on(event, listener) {
        (this._events[event] || (this._events[event] = [])).push(listener);
        return () => this.off(event, listener);
    }
    
    off(event, listener) {
        if (!this._events[event]) return;
        this._events[event] = this._events[event].filter(l => l !== listener);
    }
    
    emit(event, ...args) {
        (this._events[event] || []).forEach(l => l(...args));
    }
    
    once(event, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
}

const bus = new EventEmitter();
const unsub = bus.on('user:login', (user) => console.log(`${user} logged in`));
bus.emit('user:login', 'Rahul');
unsub();  // Unsubscribe
```

### Singleton
```javascript
class Database {
    static #instance;
    
    constructor() {
        if (Database.#instance) return Database.#instance;
        this.connection = null;
        Database.#instance = this;
    }
    
    connect(url) { this.connection = url; }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);  // true
```

---

## 4.2 ⚡ Performance Optimization

### Debounce
```javascript
function debounce(fn, delay = 300) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Usage: search input
const search = debounce((query) => {
    console.log('Searching:', query);
}, 500);
searchInput.addEventListener('input', (e) => search(e.target.value));
```

### Throttle
```javascript
function throttle(fn, limit = 100) {
    let inThrottle = false;
    return (...args) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage: scroll handler
const handleScroll = throttle(() => {
    console.log('Scrolled');
}, 200);
window.addEventListener('scroll', handleScroll);
```

### Memoization
```javascript
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Cache hit:', key);
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const fib = memoize((n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});

console.log(fib(40));  // Fast (with cache)
```

---

## 4.3 🧪 Testing (Jest)

```javascript
// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import { sum } from './sum';

describe('sum function', () => {
    test('adds 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('handles negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
    
    test('handles decimals', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

// Async testing
test('async test', async () => {
    const data = await fetchData();
    expect(data).toMatchObject({ id: 1 });
});

// Mock
jest.mock('./api');
test('mock API', () => {
    fetchData.mockResolvedValue({ name: 'Rahul' });
    // ...
});
```

---

## 4.4 🔒 Security (XSS, CSRF)

```javascript
// XSS Prevention
// ❌ BAD
element.innerHTML = userInput;

// ✅ GOOD
element.textContent = userInput;
// or sanitize
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Content Security Policy (CSP)
// <meta http-equiv="Content-Security-Policy" content="default-src 'self'">

// CSRF Protection
// Use SameSite cookies
document.cookie = "session=abc; SameSite=Strict; Secure";

// Validate origin
function validateRequest(req) {
    const allowedOrigins = ['https://example.com'];
    return allowedOrigins.includes(req.headers.origin);
}
```

---

## Professional Module - Topics

| # | Topic | Status |
|---|-------|--------|
| 1 | Design Patterns (Module, Observer, Singleton) | ✅ Done |
| 2 | Functional Programming | ✅ |
| 3 | Debounce & Throttle | ✅ Done |
| 4 | Memoization | ✅ Done |
| 5 | Testing (Jest) | ✅ Done |
| 6 | Security | ✅ Done |
| 7 | Build Tools (Webpack, Vite) | Next |
| 8 | Tree Shaking | Next |
| 9 | Memory Leaks | Next |
| 10 | TypeScript Integration | Next |

---

# 💼 INTERVIEW MODULE

---

## Top 50+ JavaScript Interview Questions

### Beginner (10)
1. **var, let, const difference?**
2. **== vs ===?**
3. **What is hoisting?**
4. **What is closure?**
5. **What is DOM?**
6. **Array methods: map vs filter vs reduce?**
7. **What is NaN? typeof NaN?**
8. **How to check if something is an array?**
9. **What is event bubbling?**
10. **What is strict mode?**

### Intermediate (15)
11. **What is 'this'?**
12. **What is prototypal inheritance?**
13. **Explain event loop**
14. **Promise vs async/await?**
15. **What is closure (with example)?**
16. **How does 'new' keyword work?**
17. **What is callback hell? How to fix?**
18. **Explain debounce vs throttle**
19. **What is currying?**
20. **What is IIFE?**
21. **Explain spread vs rest operator**
22. **What is destructuring?**
23. **What are template literals?**
24. **How does JSON work?**
25. **What is CORS?**

### Advanced (15)
26. **Implement Promise.all**
27. **Implement debounce function**
28. **Implement deep clone**
29. **Explain microtasks vs macrotasks**
30. **How does garbage collection work?**
31. **What is Symbol?**
32. **What is Proxy used for?**
33. **Explain Generator function**
34. **What is Map vs WeakMap?**
35. **How to prevent XSS?**
36. **What is Web Worker?**
37. **What is Service Worker?**
38. **Explain tree shaking**
39. **What is module federation?**
40. **How does V8 compile JS?**

### Expert (10)
41. **How to implement observable from scratch?**
42. **Explain event loop in detail**
43. **How does JS handle concurrency?**
44. **Implement custom Promise**
45. **Explain ECMAScript proposal process**
46. **What is Temporal API?**
47. **How does realm work?**
48. **What are Tail Call Optimizations?**
49. **How does WebAssembly interact with JS?**
50. **Explain JS engine pipeline (parse → AST → bytecode → machine code)**

---

## MCQ Questions

1. **typeof null returns?**
   - a) null
   - b) undefined
   - c) object ✅
   - d) boolean

2. **Which creates a new scope?**
   - a) var
   - b) const ✅
   - c) Both create scope
   - d) None

3. **Promise.all behavior?**
   - a) Resolves when all resolve ✅
   - b) Resolves when first resolves
   - c) Always resolves
   - d) Never resolves

4. **NaN === NaN?**
   - a) true
   - b) false ✅

5. **Which is NOT a JS data type?**
   - a) Symbol
   - b) BigInt
   - c) Float ✅
   - d) null

---

## 📝 JavaScript Cheat Sheet

```javascript
// Variables
let x = 1;
const y = 2;

// Functions
const fn = (a, b) => a + b;

// Arrays
arr.map(fn);
arr.filter(fn);
arr.reduce(fn, initial);

// Objects
const obj = { a: 1, b: 2 };
const { a, b } = obj;

// Promises
fetch(url)
    .then(r => r.json())
    .catch(e => console.error(e));

// Async
async function get() {
    const res = await fetch(url);
    return res.json();
}

// Classes
class MyClass extends Parent {
    #private = 'secret';
    constructor() { super(); }
}
```

---

> **"JavaScript seekhna sabse important hai. Yeh web ki zaban hai!" 🚀**
>
> **[Next: TypeScript →](typescript.md)**

[Back to Main Curriculum →](../README.md)

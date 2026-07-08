import { Course } from "@/types"

export const javascriptCourse: Course = {
  id: "javascript",
  title: "JavaScript",
  description: "JavaScript seekhein - Web ki programming language master karein",
  longDescription: "JavaScript ek powerful programming language hai jo websites ko interactive banati hai. Is course mein aap variables, functions, DOM manipulation, ES6 features, async programming aur projects seekhenge.",
  category: "frontend",
  icon: "Code2",
  color: "from-yellow-400 to-yellow-600",
  difficulty: "beginner",
  lessonsCount: 22,
  duration: "6 hours",
  prerequisites: ["HTML aur CSS ka basic knowledge"],
  modules: [
    {
      id: "js-basics",
      title: "JavaScript Basics",
      description: "JS fundamentals - variables, data types, functions",
      order: 1,
      lessons: [
        {
          id: "js-what-is",
          title: "JavaScript Kya Hai?",
          description: "JS ka matlab aur use samjhein",
          order: 1,
          content: {
            introduction: "JavaScript ek programming language hai jo websites ko interactive banati hai. Iska use web browsers mein dynamic content, user interactions, animations aur server-side programming ke liye hota hai.",
            sections: [
              { title: "JavaScript Kya Hai?", explanation: "JavaScript ek high-level, interpreted programming language hai. Ye HTML aur CSS ke saath milkar web ki teen pillars mein se ek hai. JS se aap buttons par click, forms submit, animations, games aur complex web applications bana sakte hain.", example: "alert('Namaste Duniya!'); - Ye ek popup message dikhayega." },
              { title: "JavaScript Kaise Kaam Karta Hai?", explanation: "JavaScript browser mein run hota hai. Browser ka JavaScript engine (jaise Chrome ka V8) code ko execute karta hai. JS file .js extension se save hoti hai aur HTML mein <script> tag se link ki jati hai.", example: '<script src="script.js"></script>' },
              { title: "Developer Console", explanation: "Browser ka Developer Console (F12 ya right-click -> Inspect -> Console) JS code test karne ke liye best hai. Console.log() se output dekh sakte hain. Ye debugging ke liye useful hai.", example: "console.log('Hello World'); console.error('Error message');" },
            ],
            codeExamples: [
              { title: "Pehla JavaScript Program", language: "javascript", code: "// JavaScript mein pehla program\nconsole.log('Namaste Duniya!');\n\n// Alert box\nalert('Welcome to JavaScript!');\n\n// Prompt se input lena\nlet name = prompt('Aapka naam kya hai?');\nconsole.log('Namaste ' + name);", output: "Console mein 'Namaste Duniya!' print hoga." },
            ],
            notes: ["JavaScript websites ko interactive banata hai", "JS browser mein run hota hai", "<script> tag se HTML mein add karte hain", "Console.log() debugging ke liye useful hai"],
            commonMistakes: [{ mistake: "Script tag body ke andar nahi daalna", correction: "Script tag ko body ke end mein ya head mein daalein" }],
            interviewQuestions: ["JavaScript kya hai?", "JavaScript aur Java mein kya antar hai?"],
            practiceExercises: [{ question: "Ek JavaScript program likhein jo aapka naam console mein print kare.", difficulty: "easy" }],
            quiz: { id: "quiz-js-intro", title: "JS Introduction Quiz", questions: [
              { id: "q1", question: "JavaScript ka use kya hai?", options: ["Styling", "Structure", "Interactivity", "Database"], correctAnswer: 2, explanation: "JavaScript websites ko interactive banata hai." },
              { id: "q2", question: "JS code HTML mein kaise add hota hai?", options: ["<js>", "<script>", "<code>", "<javascript>"], correctAnswer: 1, explanation: "<script> tag se JS add hota hai." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "js-variables",
          title: "Variables aur Data Types",
          description: "JS variables aur data types samjhein",
          order: 2,
          content: {
            introduction: "Variables data store karne ke containers hain. JavaScript mein var, let aur const se variables declare karte hain. Data types decide karte hain ki variable mein kaunsa type ka data store hoga.",
            sections: [
              { title: "Variables Declare Karna", explanation: "var - old way (function scope). let - modern way (block scope). const - constant value jo change nahi ho sakti. let aur const ES6 mein aaye hain aur inhe prefer karna chahiye.", example: "let name = 'Rahul'; const PI = 3.14; var age = 25;" },
              { title: "Data Types", explanation: "Primitive types: string (text), number (integers/decimals), boolean (true/false), undefined, null, symbol, bigint. typeof operator se data type check kar sakte hain.", example: "typeof 'Hello'; // 'string', typeof 42; // 'number'" },
              { title: "Type Conversion", explanation: "String(), Number(), Boolean() se explicit conversion. Implicit conversion JavaScript automatically karta hai. Number + string = string concatenation.", example: "Number('123') + 5; // 128, '5' + 3; // '53'" },
            ],
            codeExamples: [
              { title: "Variables and Data Types", language: "javascript", code: "let name = 'Rahul';\nconst age = 25;\nlet isStudent = true;\nlet salary = null;\nlet city;\n\nconsole.log(name, age, isStudent, salary, city);\nconsole.log(typeof name, typeof age);", output: "Variables aur unke types console mein print honge." },
            ],
            notes: ["let aur const use karein, var nahi", "const value reassign nahi kar sakte", "typeof operator se type check karein", "JavaScript dynamically typed hai"],
            commonMistakes: [{ mistake: "Const variable ko reassign karna", correction: "Const ka value change nahi kar sakte, let use karein" }],
            interviewQuestions: ["Var, let aur const mein kya antar hai?", "JavaScript mein kitne data types hain?"],
            practiceExercises: [{ question: "5 variables declare karein different data types ke saath aur unke types print karein.", difficulty: "easy" }],
            quiz: { id: "quiz-js-variables", title: "Variables Quiz", questions: [
              { id: "q1", question: "Block scope variable ke liye kaunsa keyword use hota hai?", options: ["var", "let", "const", "both let and const"], correctAnswer: 3, explanation: "let aur const dono block scope hain." },
              { id: "q2", question: "Number aur string add karne par kya hota hai?", options: ["Number", "String", "Boolean", "Error"], correctAnswer: 1, explanation: "Number + string = string concatenation." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "js-functions",
          title: "Functions",
          description: "JS functions bananana seekhein",
          order: 3,
          content: {
            introduction: "Functions reusable code blocks hain. Ek function specific task perform karta hai. Aap function ko call kar sakte hain jab bhi zaroorat ho.",
            sections: [
              { title: "Function Declaration", explanation: "Function keyword se function banate hain. Function name, parameters aur body hoti hai. Return statement se value return karte hain.", example: "function greet(name) { return 'Hello ' + name; }" },
              { title: "Function Expressions aur Arrow Functions", explanation: "Function expression mein function variable mein store hota hai. Arrow functions (=>) ES6 mein aaye hain. Ye concise hote hain aur this ko inherit karte hain.", example: "const greet = (name) => 'Hello ' + name;" },
              { title: "Parameters aur Arguments", explanation: "Default parameters ES6 mein aaye. Rest parameters (...args) multiple arguments ke liye. Arguments object (array-like) purane tarike mein use hota tha.", example: "function sum(...nums) { return nums.reduce((a,b) => a+b); }" },
            ],
            codeExamples: [
              { title: "Functions Examples", language: "javascript", code: "// Function declaration\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function\nconst multiply = (a, b) => a * b;\n\n// Default parameters\nfunction greet(name = 'Guest') {\n    return 'Hello ' + name;\n}\n\nconsole.log(add(5, 3));\nconsole.log(multiply(4, 2));\nconsole.log(greet('Rahul'));", output: "8, 8, 'Hello Rahul' print hoga." },
            ],
            notes: ["Functions reusable code blocks hain", "Arrow functions ES6 feature hain", "Default parameters undefined se bachate hain", "Rest parameters multiple arguments handle karte hain"],
            commonMistakes: [{ mistake: "Return statement bhoolna", correction: "Function mein return statement dena yaad rakhein" }],
            interviewQuestions: ["Function declaration aur expression mein kya antar hai?", "Arrow functions kya hain?", "Default parameters kaise use karte hain?"],
            practiceExercises: [{ question: "Ek function banaye jo do numbers ka sum return kare aur ek arrow function jo square return kare.", difficulty: "easy" }],
            quiz: { id: "quiz-js-functions", title: "Functions Quiz", questions: [
              { id: "q1", question: "Function return value ke liye kaunsa keyword use hota hai?", options: ["break", "return", "exit", "stop"], correctAnswer: 1, explanation: "return keyword se value return karte hain." },
              { id: "q2", question: "Arrow function mein kaunsa symbol use hota hai?", options: ["->", "=>", "<=", "=="], correctAnswer: 1, explanation: "=> arrow function syntax hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "js-objects",
          title: "Objects aur Arrays",
          description: "JS objects aur arrays seekhein",
          order: 4,
          content: {
            introduction: "Objects aur arrays complex data store karne ke tarike hain. Objects key-value pairs store karte hain, arrays ordered lists store karte hain.",
            sections: [
              { title: "Objects", explanation: "Object { } curly braces se banta hai. Properties (key: value) pairs hote hain. Dot notation ya bracket notation se access karte hain. Methods objects ke functions hote hain.", example: "let person = { name: 'Rahul', age: 25, greet() { return 'Hi'; } };" },
              { title: "Arrays", explanation: "Arrays [ ] square brackets se bante hain. Index 0 se start hota hai. Length property se size pata karte hain. push(), pop(), shift(), unshift() methods hain.", example: "let fruits = ['Apple', 'Banana', 'Orange']; fruits[0]; // 'Apple'" },
              { title: "Array Methods", explanation: "map() - har element par operation. filter() - condition satisfy karne wale elements. reduce() - single value mein reduce. forEach() - har element par loop. find() - element search.", example: "numbers.map(n => n * 2); numbers.filter(n => n > 10);" },
            ],
            codeExamples: [
              { title: "Objects and Arrays", language: "javascript", code: "// Object\nlet student = {\n    name: 'Priya',\n    subjects: ['Math', 'Science'],\n    getInfo() {\n        return this.name + ' studies ' + this.subjects.join(', ');\n    }\n};\n\n// Array methods\nlet scores = [85, 92, 78, 95];\nlet doubled = scores.map(s => s * 2);\nlet high = scores.filter(s => s > 85);\nlet total = scores.reduce((sum, s) => sum + s, 0);\n\nconsole.log(student.getInfo());\nconsole.log(doubled, high, total);", output: "Student info, doubled scores, high scores aur total print hoga." },
            ],
            notes: ["Objects key-value pairs store karte hain", "Arrays ordered lists hain", "map(), filter(), reduce() important array methods hain", "Dot notation objects access karne ka common tarika hai"],
            commonMistakes: [{ mistake: "Object keys ko quotes mein na dena (agar special chars hain to)", correction: "Normal keys ko quotes ki zaroorat nahi, special chars ke liye quotes use karein" }],
            interviewQuestions: ["Objects aur Arrays mein kya antar hai?", "map() aur filter() mein kya difference hai?", "this keyword object mein kya refer karta hai?"],
            practiceExercises: [{ question: "Ek object banaye jisme aapka naam, age aur hobbies ka array ho. Array methods ka use karein.", difficulty: "medium" }],
            quiz: { id: "quiz-js-objects", title: "Objects Quiz", questions: [
              { id: "q1", question: "Array ka first index kaunsa hota hai?", options: ["1", "0", "-1", "undefined"], correctAnswer: 1, explanation: "Array index 0 se start hota hai." },
              { id: "q2", question: "Object property access karne ka common tarika kaunsa hai?", options: ["Dot notation", "Bracket notation", "Both", "Arrow notation"], correctAnswer: 0, explanation: "Dot notation common hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "js-loops",
          title: "Loops aur Iteration",
          description: "JS loops - for, while, forEach seekhein",
          order: 5,
          content: {
            introduction: "Loops se ek code block ko multiple baar execute kar sakte hain. JavaScript mein kai types ke loops hain - for, while, do-while, for...of, for...in.",
            sections: [
              { title: "For Loop", explanation: "For loop teen parts: initialization, condition, increment/decrement. Jab tak condition true hai, loop chalta hai. Arrays ke liye for...of aur objects ke liye for...in.", example: "for (let i = 0; i < 5; i++) { console.log(i); }" },
              { title: "While aur Do-While", explanation: "While loop condition pehle check karta hai phir execute. Do-while pehle execute karta hai phir condition check. Do-while kam se kam ek baar to chalega hi.", example: "while (i < 5) { i++; } do { i++; } while (i < 5);" },
            ],
            codeExamples: [
              { title: "Loops Examples", language: "javascript", code: "// For loop\nfor (let i = 1; i <= 5; i++) {\n    console.log('Number ' + i);\n}\n\n// For...of array ke liye\nlet fruits = ['Apple', 'Banana', 'Mango'];\nfor (let fruit of fruits) {\n    console.log(fruit);\n}\n\n// While loop\nlet count = 0;\nwhile (count < 3) {\n    console.log('Count: ' + count);\n    count++;\n}", output: "Numbers 1-5, fruits array aur counts print hoga." },
            ],
            notes: ["For loop jab iterations pata hon tab use karein", "While loop jab condition-based ho tab use karein", "For...of arrays ke liye, for...in objects ke liye", "Break loop rokne ke liye, continue skip karne ke liye"],
            commonMistakes: [{ mistake: "Infinite loop - condition hamesha true rehna", correction: "Sahi increment/decrement condition dena" }],
            interviewQuestions: ["For aur while loop mein kya antar hai?", "Break aur continue mein kya difference hai?", "For...of aur for...in mein kya antar hai?"],
            practiceExercises: [{ question: "1 se 100 tak sum nikalne ka program loops se likhein.", difficulty: "easy" }],
            quiz: { id: "quiz-js-loops", title: "Loops Quiz", questions: [
              { id: "q1", question: "Array iterate karne ke liye best loop kaunsa hai?", options: ["for", "for...of", "while", "do...while"], correctAnswer: 1, explanation: "For...of arrays ke liye best hai." },
              { id: "q2", question: "Loop rokne ke liye kaunsa keyword use hota hai?", options: ["stop", "break", "exit", "halt"], correctAnswer: 1, explanation: "break loop ko rok deta hai." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "js-conditionals",
          title: "Conditionals aur Comparisons",
          description: "JS if-else, switch, ternary operator seekhein",
          order: 6,
          content: {
            introduction: "Conditionals program mein decisions lene ke liye use hote hain. Kuch conditions ke based par different code execute kar sakte hain.",
            sections: [
              { title: "If-Else Statement", explanation: "If (condition) { } else { } - condition true hai to if block, false hai to else block execute. else if se multiple conditions. Conditions mein comparison operators (===, !==, >, <) use hote hain.", example: "if (age >= 18) { console.log('Adult'); } else { console.log('Minor'); }" },
              { title: "Switch Statement", explanation: "Switch ek expression evaluate karta hai aur matching case execute karta hai. Break har case ke baad zaroori hai nahi to fall-through hoga. Default case koi match nahi hota tab execute.", example: "switch(day) { case 1: return 'Monday'; default: return 'Unknown'; }" },
              { title: "Ternary Operator", explanation: "Ternary operator if-else ka short form hai. condition ? valueIfTrue : valueIfFalse. Simple conditions ke liye useful hai, nested ternary avoid karein.", example: "let status = age >= 18 ? 'Adult' : 'Minor';" },
            ],
            codeExamples: [
              { title: "Conditionals", language: "javascript", code: "let score = 85;\n\n// If-else\nif (score >= 90) {\n    console.log('Grade A');\n} else if (score >= 75) {\n    console.log('Grade B');\n} else {\n    console.log('Grade C');\n}\n\n// Ternary\nlet result = score >= 75 ? 'Pass' : 'Fail';\nconsole.log(result);\n\n// Switch\nlet day = 3;\nswitch(day) {\n    case 1: console.log('Monday'); break;\n    case 2: console.log('Tuesday'); break;\n    default: console.log('Other day');\n}", output: "Grade B, Pass, Tuesday print hoga." },
            ],
            notes: ["=== strict equality (type + value check)", "== loose equality (type conversion karta hai)", "Ternary simple conditions ke liye", "Switch multiple fixed values ke liye"],
            commonMistakes: [{ mistake: "== use karna jab === use karna chahiye", correction: "Hamesha === use karein unexpected type conversion se bachne ke liye" }],
            interviewQuestions: ["== aur === mein kya antar hai?", "Ternary operator kya hai?", "Switch mein break kyun zaroori hai?"],
            practiceExercises: [{ question: "Ek program likhein jo student ke score ke according grade de (A, B, C, D, F).", difficulty: "medium" }],
            quiz: { id: "quiz-js-conditionals", title: "Conditionals Quiz", questions: [
              { id: "q1", question: "Strict equality operator kaunsa hai?", options: ["=", "==", "===", "!=="], correctAnswer: 2, explanation: "=== strict equality operator hai." },
              { id: "q2", question: "Ternary operator mein kaunsa symbol use hota hai?", options: [":?", "? :", "::", "??"], correctAnswer: 1, explanation: "condition ? value1 : value2" },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "js-dom",
          title: "DOM Manipulation",
          description: "Document Object Model manipulate karna seekhein",
          order: 7,
          content: {
            introduction: "DOM (Document Object Model) web page ka tree-like structure hai. JavaScript se DOM ko manipulate karke hum page ke content, style aur structure ko change kar sakte hain.",
            sections: [
              { title: "DOM Elements Select Karna", explanation: "getElementById() - id se. getElementsByClassName() - class se. querySelector() - CSS selector se (first match). querySelectorAll() - sab matches. Ye methods DOM elements select karte hain.", example: "document.querySelector('.box'); document.getElementById('header');" },
              { title: "DOM Elements Modify Karna", explanation: "InnerHTML se content change. Style property se CSS change. ClassList.add/remove/toggle se classes change. setAttribute se attributes change. CreateElement se new elements.", example: "element.innerHTML = 'New Content'; element.style.color = 'red';" },
            ],
            codeExamples: [
              { title: "DOM Manipulation", language: "javascript", code: "// Element select karna\nlet heading = document.querySelector('h1');\n\n// Content change karna\nheading.textContent = 'New Heading';\n\n// Style change karna\nheading.style.color = 'blue';\nheading.style.fontSize = '32px';\n\n// Class add karna\nheading.classList.add('highlight');\n\n// New element banana\nlet para = document.createElement('p');\npara.textContent = 'Yeh naya paragraph hai';\ndocument.body.appendChild(para);", output: "Page ka heading change hoga aur naya paragraph add hoga." },
            ],
            notes: ["DOM web page ka structure hai", "querySelector CSS selector se element select karta hai", "textContent se text change karte hain", "classList se classes manipulate karte hain", "createElement se new elements banate hain"],
            commonMistakes: [{ mistake: "DOM element select karna jab wo load na hua ho", correction: "Script ko body ke end mein ya DOMContentLoaded event mein likhein" }],
            interviewQuestions: ["DOM kya hai?", "querySelector aur querySelectorAll mein kya antar hai?", "innerHTML aur textContent mein kya difference hai?"],
            practiceExercises: [{ question: "Ek button banaye jo click karne par page ka background color change kare.", difficulty: "medium" }],
            quiz: { id: "quiz-js-dom", title: "DOM Quiz", questions: [
              { id: "q1", question: "DOM element select karne ke liye CSS selector kaunsa method use hota hai?", options: ["getElementById", "querySelector", "getClass", "selectElement"], correctAnswer: 1, explanation: "querySelector CSS selector se element select karta hai." },
              { id: "q2", question: "New element banane ke liye kaunsa method use hota hai?", options: ["makeElement", "createElement", "newElement", "buildElement"], correctAnswer: 1, explanation: "createElement se new element bante hain." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "js-events",
          title: "Events aur Event Listeners",
          description: "JS events aur event handling seekhein",
          order: 8,
          content: {
            introduction: "Events user actions hain jaise click, keypress, mouse move, form submit. JavaScript in events ko listen karke response de sakti hai.",
            sections: [
              { title: "Event Listeners", explanation: "addEventListener() se event listen karte hain. Event type (click, mouseover, keydown) aur callback function dete hain. Ek element par multiple listeners ho sakte hain.", example: "button.addEventListener('click', () => alert('Clicked!'));" },
              { title: "Event Object", explanation: "Event object mein event ke baare mein details hoti hain. target - kaunsa element trigger kiya, type - event type, preventDefault() - default behavior rokna, stopPropagation() - event bubbling rokna.", example: "element.addEventListener('click', (e) => { console.log(e.target); });" },
            ],
            codeExamples: [
              { title: "Events Example", language: "javascript", code: "let button = document.querySelector('#myButton');\n\n// Click event\nbutton.addEventListener('click', function(e) {\n    console.log('Button clicked!');\n    console.log('Target:', e.target);\n});\n\n// Mouseover event\nbutton.addEventListener('mouseover', () => {\n    button.style.backgroundColor = 'lightblue';\n});\n\n// Mouseout event\nbutton.addEventListener('mouseout', () => {\n    button.style.backgroundColor = '';\n});\n\n// Form submit\nlet form = document.querySelector('form');\nform.addEventListener('submit', (e) => {\n    e.preventDefault(); // form submit nahi hoga\n    console.log('Form submitted');\n});", output: "Button click, hover aur form submit events handle honge." },
            ],
            notes: ["addEventListener se event listen karte hain", "Event object mein details hoti hain", "preventDefault() default behavior rokta hai", "Event bubbling child se parent tak jaata hai"],
            commonMistakes: [{ mistake: "Onclick attribute use karna instead of addEventListener", correction: "addEventListener use karein, ye multiple listeners allow karta hai" }],
            interviewQuestions: ["Event bubbling kya hai?", "preventDefault() aur stopPropagation() mein kya antar hai?", "addEventListener ke kya fayde hain?"],
            practiceExercises: [{ question: "Ek to-do list banaye jisme item click karne par complete mark ho.", difficulty: "medium" }],
            quiz: { id: "quiz-js-events", title: "Events Quiz", questions: [
              { id: "q1", question: "Event listen karne ke liye kaunsa method use hota hai?", options: ["onEvent", "addEventListener", "listenEvent", "bindEvent"], correctAnswer: 1, explanation: "addEventListener se event listen karte hain." },
              { id: "q2", question: "Form submit ka default behavior rokne ke liye kaunsa method use hota hai?", options: ["stop()", "preventDefault()", "cancel()", "block()"], correctAnswer: 1, explanation: "preventDefault() default behavior rokta hai." },
            ]},
          },
          duration: "20 min",
        },
      ],
    },
    {
      id: "js-advanced",
      title: "JavaScript Advanced",
      description: "ES6+, async, classes aur projects",
      order: 2,
      lessons: [
        {
          id: "js-es6",
          title: "ES6+ Features",
          description: "Modern JavaScript features seekhein",
          order: 1,
          content: {
            introduction: "ES6 (ES2015) aur uske baad ke versions mein JavaScript mein bahut si nayi features aayi hain jo code ko concise aur powerful banati hain.",
            sections: [
              { title: "Template Literals", explanation: "Template literals backticks (`) se bante hain. ${} se variables embed kar sakte hain. Multi-line strings bhi bana sakte hain.", example: "let msg = `Hello ${name}, you are ${age} years old`;" },
              { title: "Destructuring", explanation: "Destructuring se arrays aur objects se values easily extract kar sakte hain. Array destructuring: [a, b] = array. Object destructuring: {name} = obj.", example: "const [first, second] = arr; const {name, age} = person;" },
              { title: "Spread aur Rest", explanation: "Spread operator (...) array/object ko spread karta hai. Rest operator bhi ... hai lekin function parameters mein multiple arguments collect karne ke liye.", example: "const newArr = [...arr1, ...arr2]; const newObj = {...obj1, ...obj2};" },
            ],
            codeExamples: [
              { title: "ES6 Features", language: "javascript", code: "// Template Literals\nlet name = 'Rahul', age = 25;\nconsole.log(`My name is ${name} and age is ${age}`);\n\n// Destructuring\nlet user = { id: 1, username: 'rahul123', email: 'rahul@test.com' };\nlet { username, email } = user;\nconsole.log(username, email);\n\n// Spread Operator\nlet arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\nlet combined = [...arr1, ...arr2];\nconsole.log(combined);\n\n// Rest Parameters\nfunction sum(...numbers) {\n    return numbers.reduce((total, n) => total + n, 0);\n}\nconsole.log(sum(1, 2, 3, 4));", output: "Template literal, destructured values, spread array aur sum print hoga." },
            ],
            notes: ["Template literals backticks use karte hain", "Destructuring se values extract karna easy hai", "Spread operator arrays/objects copy ya merge karta hai", "Rest parameters multiple arguments handle karta hai"],
            commonMistakes: [{ mistake: "Spread aur Rest confuse karna", correction: "Spread expand karta hai, Rest collect karta hai" }],
            interviewQuestions: ["Template literals kya hain?", "Destructuring kya hai?", "Spread aur Rest operator mein kya antar hai?"],
            practiceExercises: [{ question: "ES6 features ka use karke ek program likhein - template literals, destructuring, spread.", difficulty: "medium" }],
            quiz: { id: "quiz-js-es6", title: "ES6 Quiz", questions: [
              { id: "q1", question: "Template literal kaunsa symbol use karta hai?", options: ["''", "\"\"", "``", "()"], correctAnswer: 2, explanation: "Template literals backticks use karte hain." },
              { id: "q2", question: "Array copy karne ke liye kaunsa operator use hota hai?", options: ["...", "..", "**", "&&"], correctAnswer: 0, explanation: "Spread operator (...) se array copy karte hain." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "js-async",
          title: "Asynchronous JavaScript",
          description: "Async JS - callbacks, promises, async await seekhein",
          order: 2,
          content: {
            introduction: "JavaScript synchronous hota hai but async operations bhi handle kar sakta hai. API calls, file reading, timers - ye sab async operations hain.",
            sections: [
              { title: "Callbacks", explanation: "Callback ek function hai jo doosre function mein argument ke roop mein pass hota hai aur baad mein call hota hai. setTimeout, event listeners callbacks use karte hain. Callback hell problem ho sakti hai.", example: "setTimeout(() => console.log('2 sec baad'), 2000);" },
              { title: "Promises", explanation: "Promise ek object hai jo async operation ka eventual result represent karta hai. States: pending, fulfilled, rejected. .then() success ke liye, .catch() error ke liye.", example: "fetch(url).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));" },
              { title: "Async Await", explanation: "Async/await Promises ke upar syntactic sugar hai. Async function hamesha promise return karta hai. Await promise ke resolve hone tak wait karta hai. Try-catch se error handle karte hain.", example: "async function getData() { const res = await fetch(url); const data = await res.json(); return data; }" },
            ],
            codeExamples: [
              { title: "Async JavaScript", language: "javascript", code: "// Promise example\nfunction delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\ndelay(1000).then(() => console.log('1 second baad'));\n\n// Async/Await\nasync function fetchUserData() {\n    try {\n        let response = await fetch('https://api.example.com/user');\n        let data = await response.json();\n        console.log('User:', data);\n    } catch (error) {\n        console.log('Error:', error);\n    }\n}\n\nfetchUserData();", output: "1 second baad message print hoga aur API se user data fetch hoga." },
            ],
            notes: ["JavaScript single-threaded hai but async handle karta hai", "Promises callback hell se bachate hain", "Async/await code ko synchronous jaise likhne deta hai", "Error handling ke liye try-catch use karein"],
            commonMistakes: [{ mistake: "Await ko bina async function ke use karna", correction: "Await sirf async function ke andar use hota hai" }],
            interviewQuestions: ["Callbacks kya hain?", "Promises kya hain aur kaise kaam karte hain?", "Async/await promises se kaise better hai?"],
            practiceExercises: [{ question: "Ek async function banaye jo API se data fetch kare aur display kare.", difficulty: "hard" }],
            quiz: { id: "quiz-js-async", title: "Async JS Quiz", questions: [
              { id: "q1", question: "Promise ke kitne states hote hain?", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "Pending, fulfilled, rejected - 3 states." },
              { id: "q2", question: "Await keyword kahan use hota hai?", options: ["Any function", "Async function", "Normal function", "Arrow function"], correctAnswer: 1, explanation: "Await sirf async function mein use hota hai." },
            ]},
          },
          duration: "25 min",
        },
        {
          id: "js-classes",
          title: "Classes aur OOP",
          description: "JS classes aur object-oriented programming seekhein",
          order: 3,
          content: {
            introduction: "Classes ES6 mein aaye hain. Ye object-oriented programming (OOP) ko JavaScript mein implement karte hain. Class ek blueprint hota hai jisse objects bante hain.",
            sections: [
              { title: "Class Syntax", explanation: "Class keyword se class banate hain. Constructor method object banate waqt call hota hai. Methods bina function keyword ke define hote hain. New keyword se object create karte hain.", example: "class Person { constructor(name) { this.name = name; } greet() { return 'Hi ' + this.name; } }" },
              { title: "Inheritance", explanation: "Extends keyword se class inherit karte hain. Super() se parent class ka constructor call karte hain. Child class parent ke methods ko override kar sakti hai.", example: "class Student extends Person { constructor(name, grade) { super(name); this.grade = grade; } }" },
            ],
            codeExamples: [
              { title: "Classes Example", language: "javascript", code: "class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    speak() {\n        return this.name + ' makes a sound';\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name, breed) {\n        super(name);\n        this.breed = breed;\n    }\n    speak() {\n        return this.name + ' barks!';\n    }\n}\n\nlet dog = new Dog('Tommy', 'Golden Retriever');\nconsole.log(dog.speak());\nconsole.log(dog.breed);", output: "'Tommy barks!' aur 'Golden Retriever' print hoga." },
            ],
            notes: ["Class blueprint hai object create karne ka", "Constructor object initialize karta hai", "Extends se inheritance hota hai", "Super parent class constructor call karta hai"],
            commonMistakes: [{ mistake: "This keyword ko class methods mein bhoolna", correction: "Class properties aur methods ke liye this use karein" }],
            interviewQuestions: ["Class kya hai?", "Constructor kya karta hai?", "Extends aur super ka kya use hai?"],
            practiceExercises: [{ question: "Ek class banaye 'Book' jisme title, author, year properties hon aur method getInfo ho.", difficulty: "medium" }],
            quiz: { id: "quiz-js-classes", title: "Classes Quiz", questions: [
              { id: "q1", question: "Class se object banane ke liye kaunsa keyword use hota hai?", options: ["class", "new", "create", "make"], correctAnswer: 1, explanation: "new keyword se object create karte hain." },
              { id: "q2", question: "Parent class ka constructor call karne ke liye kaunsa keyword use hota hai?", options: ["parent()", "super()", "base()", "this()"], correctAnswer: 1, explanation: "super() parent class constructor call karta hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "js-error-handling",
          title: "Error Handling",
          description: "JS error handling - try, catch, finally seekhein",
          order: 4,
          content: {
            introduction: "Error handling program mein unexpected situations ko handle karta hai. JavaScript mein try-catch-finally blocks se errors handle karte hain.",
            sections: [
              { title: "Try Catch Finally", explanation: "Try block mein code jisme error ho sakta hai. Catch block error ko catch karta hai aur handle karta hai. Finally block hamesha execute hota hai chahe error aaye ya nahi.", example: "try { riskyCode(); } catch(error) { console.log(error.message); } finally { cleanup(); }" },
              { title: "Throw Statement", explanation: "Throw se custom error throw kar sakte hain. Error object (message, name, stack) throw karte hain. Custom error classes bhi bana sakte hain.", example: "throw new Error('Kuch galat ho gaya!');" },
            ],
            codeExamples: [
              { title: "Error Handling", language: "javascript", code: "function divide(a, b) {\n    if (b === 0) {\n        throw new Error('Zero se divide nahi kar sakte');\n    }\n    return a / b;\n}\n\ntry {\n    console.log(divide(10, 2));\n    console.log(divide(10, 0)); // Error throw hoga\n} catch (error) {\n    console.log('Error:', error.message);\n} finally {\n    console.log('Ye hamesha chalega');\n}", output: "5, 'Error: Zero se divide nahi kar sakte', 'Ye hamesha chalega' print hoga." },
            ],
            notes: ["Try block mein risky code", "Catch block error handle karta hai", "Finally block hamesha execute hota hai", "Throw se custom error throw karte hain", "Error object mein message aur stack trace hota hai"],
            commonMistakes: [{ mistake: "Empty catch block - error swallow karna", correction: "Catch block mein error log karein ya handle karein" }],
            interviewQuestions: ["Try-catch-finally kya hai?", "Throw statement kya karta hai?", "Error object mein kaun si properties hain?"],
            practiceExercises: [{ question: "Ek function banaye jo division kare aur zero division error handle kare.", difficulty: "medium" }],
            quiz: { id: "quiz-js-error", title: "Error Handling Quiz", questions: [
              { id: "q1", question: "Hamesha execute hone wala block kaunsa hai?", options: ["try", "catch", "finally", "error"], correctAnswer: 2, explanation: "Finally block hamesha execute hota hai." },
              { id: "q2", question: "Custom error throw karne ke liye kaunsa keyword use hota hai?", options: ["error", "throw", "catch", "new"], correctAnswer: 1, explanation: "throw se custom error throw karte hain." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "js-storage",
          title: "Local Storage aur Session Storage",
          description: "Browser storage APIs seekhein",
          order: 5,
          content: {
            introduction: "Browser storage APIs se hum user ke browser mein data store kar sakte hain. Local storage aur session storage do main types hain.",
            sections: [
              { title: "Local Storage", explanation: "Local storage mein data persistent rehta hai. Tab close karne par bhi data nahi delete hota. setItem(), getItem(), removeItem(), clear() methods hain. Sirf strings store kar sakte hain - JSON.stringify/parse use karein objects ke liye.", example: "localStorage.setItem('theme', 'dark'); localStorage.getItem('theme');" },
              { title: "Session Storage", explanation: "Session storage tab close karne par clear ho jata hai. API local storage jaisi hi hai - setItem, getItem, etc. Sensitive data store na karein.", example: "sessionStorage.setItem('temp', 'data');" },
            ],
            codeExamples: [
              { title: "Storage Example", language: "javascript", code: "// Object save karna\nlet user = { name: 'Rahul', score: 100 };\nlocalStorage.setItem('user', JSON.stringify(user));\n\n// Object read karna\nlet saved = JSON.parse(localStorage.getItem('user'));\nconsole.log(saved.name);\n\n// Session storage\nsessionStorage.setItem('visitCount', '1');\nlet visits = sessionStorage.getItem('visitCount');\nconsole.log('Visits:', visits);", output: "User data local storage mein save hoga aur phir read hoga." },
            ],
            notes: ["Local storage persistent hai", "Session storage tab close hone par delete", "Sirf strings store kar sakte hain", "JSON.stringify/parse se objects store karein", "Sensitive data storage mein na rakhein"],
            commonMistakes: [{ mistake: "Sensitive data (passwords) localStorage mein store karna", correction: "Passwords jaise sensitive data localStorage mein store na karein" }],
            interviewQuestions: ["Local aur session storage mein kya antar hai?", "Storage mein object kaise store karte hain?"],
            practiceExercises: [{ question: "Ek dark mode toggle banaye jo user ki preference local storage mein save kare.", difficulty: "medium" }],
            quiz: { id: "quiz-js-storage", title: "Storage Quiz", questions: [
              { id: "q1", question: "Local storage kab delete hota hai?", options: ["Tab close par", "Browser close par", "Kabhi nahi (manually)", "Page refresh par"], correctAnswer: 2, explanation: "Local storage manually clear karna padta hai." },
              { id: "q2", question: "Object store karne ke liye kaunsa method use karte hain?", options: ["JSON.stringify", "toString()", "String()", "Object.str()"], correctAnswer: 0, explanation: "JSON.stringify se object ko string mein convert karte hain." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "js-project",
          title: "Project - Interactive To-Do App",
          description: "JavaScript ka use karke to-do app banayein",
          order: 6,
          content: {
            introduction: "Ab hum ek complete interactive to-do application banayenge jisme sab JS concepts ka use hoga - DOM manipulation, events, local storage, arrays, functions.",
            sections: [
              { title: "Project Overview", explanation: "Ek to-do app jisme aap tasks add, delete, complete mark kar sakte hain. Tasks local storage mein save honge taaki page refresh par bhi data rahe.", example: "Features: Add task, Delete task, Mark complete, Filter tasks, Local storage" },
              { title: "Implementation Steps", explanation: "HTML structure banayein. CSS se styling. JavaScript mein: task add karna, delete karna, complete toggle karna, local storage mein save/load karna, task count update karna.", example: "addEventListener('click'), localStorage.setItem(), createElement(), appendChild()" },
            ],
            codeExamples: [
              { title: "To-Do App JavaScript", language: "javascript", code: "let tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n\nfunction addTask() {\n    let input = document.querySelector('#taskInput');\n    if(input.value.trim() === '') return;\n    \n    tasks.push({ id: Date.now(), text: input.value, completed: false });\n    saveAndRender();\n    input.value = '';\n}\n\nfunction deleteTask(id) {\n    tasks = tasks.filter(t => t.id !== id);\n    saveAndRender();\n}\n\nfunction toggleComplete(id) {\n    let task = tasks.find(t => t.id === id);\n    task.completed = !task.completed;\n    saveAndRender();\n}\n\nfunction saveAndRender() {\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n    renderTasks();\n}\n\nfunction renderTasks() {\n    let list = document.querySelector('#taskList');\n    list.innerHTML = tasks.map(t => '\n        <li class=\"' + (t.completed ? 'completed' : '') + '\">\n            <span onclick=\"toggleComplete(' + t.id + ')\">' + t.text + '</span>\n            <button onclick=\"deleteTask(' + t.id + ')\">Delete</button>\n        </li>\n    ').join('');\n}\n\nrenderTasks();", output: "Ye ek working to-do app hai jisme tasks add, delete, complete kar sakte hain." },
            ],
            notes: ["Local storage mein data save karein", "CRUD operations implement karein", "DOM manipulation se UI update karein", "Event listeners se user input handle karein"],
            commonMistakes: [{ mistake: "Task list re-render karte waqt saari items repeat karna", correction: "Current state se render karein, DOM se nahi" }],
            interviewQuestions: ["Local storage ko tasks ke saath kaise use kiya?", "Task delete karne ka logic kya hai?", "App ko kaise improve karein?"],
            practiceExercises: [{ question: "To-do app mein due dates aur priority levels add karein.", difficulty: "hard" }],
            quiz: { id: "quiz-js-project", title: "JS Project Quiz", questions: [
              { id: "q1", question: "Local storage mein tasks save karne ke liye kaunsa method use hota hai?", options: ["setItem", "getItem", "saveItem", "storeItem"], correctAnswer: 0, explanation: "setItem se data save karte hain." },
            ]},
          },
          duration: "30 min",
        },
      ],
    },
  ],
}

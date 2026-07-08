import { Course } from "@/types"

export const reactCourse: Course = {
  id: "react",
  title: "React",
  description: "React seekhein - Modern UI library master karein",
  longDescription: "React ek powerful JavaScript library hai jo user interfaces banane ke liye use hoti hai. Is course mein aap components, props, state, hooks, aur React ecosystem seekhenge.",
  category: "frontend",
  icon: "Atom",
  color: "from-cyan-500 to-blue-500",
  difficulty: "intermediate",
  lessonsCount: 22,
  duration: "7 hours",
  prerequisites: ["JavaScript (ES6+) ka knowledge"],
  modules: [
    {
      id: "react-core",
      title: "React Core Concepts",
      description: "React fundamentals - components, props, state",
      order: 1,
      lessons: [
        {
          id: "react-what-is",
          title: "React Kya Hai?",
          description: "React ka matlab aur iska use samjhein",
          order: 1,
          content: {
            introduction: "React ek JavaScript library hai jo user interfaces banane ke liye use hoti hai. Isse Facebook ne banaya tha aur ab ye duniya ki sabse popular UI library hai.",
            sections: [
              { title: "React Kya Hai?", explanation: "React ek open-source JavaScript library hai jo UI components banane ke liye use hoti hai. Isme aap reusable components bana sakte hain jo apna state manage karte hain. Virtual DOM ka use karke ye performant hai.", example: "React JSX syntax use karta hai jo HTML jaisa dikhta hai." },
              { title: "React vs Other Frameworks", explanation: "React ek library hai (framework nahi). Ye sirf UI handle karta hai. Angular aur Vue complete frameworks hain. React flexible hai - aap apni choice ki additional libraries choose kar sakte hain.", example: "React + React Router + State Management library" },
              { title: "Virtual DOM", explanation: "Virtual DOM React ki performance ki secret hai. Real DOM ke changes slow hote hain. Virtual DOM actual DOM ka copy hai. Changes pehle virtual DOM par hote hain, phir React sirf actual changes ko real DOM par apply karta hai (diffing).", example: "Virtual DOM -> Diff -> Real DOM update" },
            ],
            codeExamples: [
              { title: "React Component", language: "jsx", code: "import React from 'react';\n\nfunction Welcome() {\n    return <h1>Namaste Duniya!</h1>;\n}\n\nexport default Welcome;", output: "Ye ek basic React component hai jo 'Namaste Duniya!' dikhayega." },
            ],
            notes: ["React UI library hai, framework nahi", "Virtual DOM performance improve karta hai", "React Facebook ne banaya hai", "JSX JavaScript ka syntax extension hai"],
            commonMistakes: [{ mistake: "React ko framework samajhna", correction: "React ek library hai, React ecosystem complete framework banata hai" }],
            interviewQuestions: ["React kya hai?", "Virtual DOM kya hai?", "React aur Angular mein kya antar hai?"],
            practiceExercises: [{ question: "Pehla React app create karein aur ek simple 'Hello World' component banayein.", difficulty: "easy" }],
            quiz: { id: "quiz-react-intro", title: "React Introduction Quiz", questions: [
              { id: "q1", question: "React kya hai?", options: ["Framework", "Library", "Language", "Database"], correctAnswer: 1, explanation: "React ek JavaScript library hai." },
              { id: "q2", question: "React ko kisne banaya?", options: ["Google", "Microsoft", "Facebook", "Amazon"], correctAnswer: 2, explanation: "React Facebook ne banaya." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "react-jsx",
          title: "JSX",
          description: "JSX syntax seekhein",
          order: 2,
          content: {
            introduction: "JSX (JavaScript XML) React ka syntax extension hai jo HTML jaisa dikhta hai lekin JavaScript ki power deta hai. JSX ke through aap UI structure easily define kar sakte hain.",
            sections: [
              { title: "JSX Syntax", explanation: "JSX HTML jaisa dikhta hai lekin JavaScript expressions {} mein embed kar sakte hain. Class ke bajaye className, for ke bajaye htmlFor use hota hai. Self-closing tags mandatory hain.", example: "const element = <h1>Hello, {name}</h1>;" },
              { title: "JSX Expressions", explanation: "{} mein koi bhi JavaScript expression likh sakte hain. Variables, functions, ternary operators. Statements (if-else, loops) JSX mein direct nahi likh sakte.", example: "return <p>{count > 0 ? 'Active' : 'Inactive'}</p>;" },
              { title: "JSX Conditions aur Lists", explanation: "Conditional rendering: ternary operator, && operator, IIFE. Lists render karne ke liye map() use karte hain aur har item ko unique key dete hain.", example: "items.map(item => <li key={item.id}>{item.name}</li>)" },
            ],
            codeExamples: [
              { title: "JSX Examples", language: "jsx", code: "function Greeting() {\n    const name = 'Rahul';\n    const isLoggedIn = true;\n    const items = ['HTML', 'CSS', 'React'];\n\n    return (\n        <div>\n            <h1>Hello {name}!</h1>\n            {isLoggedIn ? <p>Welcome back</p> : <p>Please login</p>}\n            <ul>\n                {items.map((item, i) => <li key={i}>{item}</li>)}\n            </ul>\n        </div>\n    );\n}", output: "Ye component name, conditional message aur list render karega." },
            ],
            notes: ["JSX HTML jaisa syntax hai", "{} mein JS expressions likhte hain", "className aur htmlFor use karte hain", "Lists ke liye unique key dena mandatory hai"],
            commonMistakes: [{ mistake: "If-else directly JSX mein likhna", correction: "Ternary operator ya && use karein" }],
            interviewQuestions: ["JSX kya hai?", "JSX mein class ke bajaye className kyun use karte hain?", "Maps render karte waqt keys kyun important hain?"],
            practiceExercises: [{ question: "Ek JSX component banaye jo user ka naam, status aur hobbies ki list render kare.", difficulty: "easy" }],
            quiz: { id: "quiz-react-jsx", title: "JSX Quiz", questions: [
              { id: "q1", question: "JSX expressions ke liye kaunsa symbol use hota hai?", options: ["()", "{}", "[]", "<>"], correctAnswer: 1, explanation: "Curly braces {} mein JS expressions likhte hain." },
              { id: "q2", question: "JSX mein CSS class ke liye kaunsa attribute use hota hai?", options: ["class", "className", "cssClass", "classname"], correctAnswer: 1, explanation: "className JSX mein use hota hai." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "react-components",
          title: "Components aur Props",
          description: "React components aur props seekhein",
          order: 3,
          content: {
            introduction: "Components React ki building blocks hain. Har component ek JavaScript function ya class hai jo UI ka ek part return karta hai. Props components ke parameters hain.",
            sections: [
              { title: "Functional Components", explanation: "Functional components sabse common hain. Ye ek function hai jo props receive karta hai aur JSX return karta hai. Hooks ke saath state bhi manage kar sakte hain.", example: "function Button({ text }) { return <button>{text}</button>; }" },
              { title: "Props", explanation: "Props (properties) parent se child component mein data pass karne ka tarika hai. Props read-only hote hain - child component unhe change nahi kar sakta. Destructuring se props access karte hain.", example: "<Button text=\"Click me\" color=\"blue\" />" },
              { title: "Children Prop", explanation: "Children prop special prop hai jo component ke opening aur closing tag ke beech ka content pass karta hai. Layout components ke liye useful hai.", example: "<Card><p>Yeh children hai</p></Card>" },
            ],
            codeExamples: [
              { title: "Components and Props", language: "jsx", code: "// Parent Component\nfunction App() {\n    return (\n        <div>\n            <User name=\"Rahul\" age={25} isActive={true}>\n                <p>Bio: Web Developer</p>\n            </User>\n            <Button text=\"Click\" onClick={() => alert('Hi')} />\n        </div>\n    );\n}\n\n// Child Component\nfunction User({ name, age, isActive, children }) {\n    return (\n        <div className=\"user-card\">\n            <h2>{name}</h2>\n            <p>Age: {age}</p>\n            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>\n            {children}\n        </div>\n    );\n}\n\nfunction Button({ text, onClick }) {\n    return <button onClick={onClick}>{text}</button>;\n}", output: "User card component with name, age, status aur children content render hoga." },
            ],
            notes: ["Components reusable UI parts hain", "Props parent to child data pass karte hain", "Props read-only hain", "Children special prop content pass karta hai"],
            commonMistakes: [{ mistake: "Props ko child component mein modify karna", correction: "Props read-only hain, state use karein for mutable data" }],
            interviewQuestions: ["Components kya hain?", "Props kya hain aur kaise use hote hain?", "Children prop kya hai?"],
            practiceExercises: [{ question: "Ek Card component banaye jo title, description aur children props accept kare.", difficulty: "easy" }],
            quiz: { id: "quiz-react-components", title: "Components Quiz", questions: [
              { id: "q1", question: "Props kaunsa data flow follow karte hain?", options: ["Child to parent", "Parent to child", "Sibling to sibling", "Any direction"], correctAnswer: 1, explanation: "Props parent to child flow karte hain." },
              { id: "q2", question: "Props ko modify kiya ja sakta hai?", options: ["Haan", "Nahi", "Kabhi kabhi", "Sirf child mein"], correctAnswer: 1, explanation: "Props read-only hain." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "react-state",
          title: "State aur useState Hook",
          description: "React state management seekhein",
          order: 4,
          content: {
            introduction: "State component ka data hota hai jo time ke saath change ho sakta hai. State change hone par component re-render hota hai. useState hook functional components mein state add karne ka tarika hai.",
            sections: [
              { title: "useState Hook", explanation: "useState ek function hai jo initial value leta hai aur array return karta hai [state, setState]. State current value, setState function jo state update karta hai. State change par component re-render hota hai.", example: "const [count, setCount] = useState(0);" },
              { title: "State Updates", explanation: "State directly modify nahi kar sakte (count = 5 wrong). setCount(newValue) use karein. Previous state par depend karte waqt functional update use karein: setCount(prev => prev + 1).", example: "setCount(count + 1); setCount(prev => prev + 1);" },
              { title: "Multiple States", explanation: "Ek component mein multiple useState hooks ho sakte hain. Complex state ke liye objects ya arrays use kar sakte hain. State update karte waqt spread operator ka use karein.", example: "const [user, setUser] = useState({ name: '', age: 0 });" },
            ],
            codeExamples: [
              { title: "useState Example", language: "jsx", code: "import { useState } from 'react';\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    const [name, setName] = useState('Guest');\n\n    return (\n        <div>\n            <h1>Hello {name}</h1>\n            <p>Count: {count}</p>\n            <button onClick={() => setCount(count + 1)}>Increase</button>\n            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>\n            <button onClick={() => setName('Rahul')}>Set Name</button>\n        </div>\n    );\n}", output: "Counter component with increase/decrease buttons aur name change button." },
            ],
            notes: ["State component ka mutable data hai", "useState hook se state add karte hain", "State change par component re-render hota hai", "State directly modify nahi karte"],
            commonMistakes: [{ mistake: "State ko directly modify karna (count = 5)", correction: "setState function ka use karein" }],
            interviewQuestions: ["State kya hai?", "useState hook kaise kaam karta hai?", "State update hone par kya hota hai?"],
            practiceExercises: [{ question: "Ek counter component banaye increase, decrease aur reset buttons ke saath.", difficulty: "easy" }],
            quiz: { id: "quiz-react-state", title: "State Quiz", questions: [
              { id: "q1", question: "State change hone par component kaunsa behavior dikhata hai?", options: ["Re-render", "Destroy", "Freeze", "Nothing"], correctAnswer: 0, explanation: "State change par component re-render hota hai." },
              { id: "q2", question: "Previous state par depend karte waqt kaunsa pattern use karein?", options: ["Direct mutation", "Functional update", "Object assign", "Array push"], correctAnswer: 1, explanation: "Functional update: setCount(prev => prev + 1)" },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "react-effects",
          title: "useEffect Hook",
          description: "Side effects aur useEffect hook seekhein",
          order: 5,
          content: {
            introduction: "useEffect hook React mein side effects handle karne ke liye use hota hai. Side effects hain - API calls, timers, event listeners, DOM manipulation.",
            sections: [
              { title: "useEffect Basics", explanation: "useEffect ek function leta hai jo effect run karta hai. Dependency array specify karta hai ki effect kab run hoga. Empty array [] - sirf mount par. No array - har render par. Values in array - unke change par.", example: "useEffect(() => { console.log('Mounted!'); }, []);" },
              { title: "Cleanup Function", explanation: "Effect function cleanup function return kar sakta hai. Ye component unmount par ya effect re-run se pehle call hota hai. Event listeners, subscriptions, timers cleanup ke liye.", example: "useEffect(() => { const timer = setInterval(...); return () => clearInterval(timer); }, []);" },
            ],
            codeExamples: [
              { title: "useEffect Examples", language: "jsx", code: "import { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n    const [user, setUser] = useState(null);\n    const [loading, setLoading] = useState(true);\n\n    useEffect(() => {\n        async function fetchUser() {\n            setLoading(true);\n            try {\n                const res = await fetch(`/api/users/${userId}`);\n                const data = await res.json();\n                setUser(data);\n            } finally {\n                setLoading(false);\n            }\n        }\n        fetchUser();\n    }, [userId]); // userId change par re-fetch\n\n    useEffect(() => {\n        document.title = user ? user.name : 'Loading...';\n    }, [user]);\n\n    if (loading) return <p>Loading...</p>;\n    return <h1>{user.name}</h1>;\n}", output: "UserId change hone par API call hogi aur user data fetch hoga." },
            ],
            notes: ["useEffect side effects ke liye hai", "Dependency array effect kab run hoga control karta hai", "Cleanup function memory leaks se bachata hai", "Har render par run avoid karna chahiye"],
            commonMistakes: [{ mistake: "Dependency array mein saari dependencies na dena", correction: "Effect mein used saari values dependency array mein daalein" }],
            interviewQuestions: ["useEffect kya hai?", "Dependency array ka kya kaam hai?", "Cleanup function kyun important hai?"],
            practiceExercises: [{ question: "Ek component banaye jo useEffect se timer update kare aur cleanup function implement kare.", difficulty: "medium" }],
            quiz: { id: "quiz-react-effects", title: "useEffect Quiz", questions: [
              { id: "q1", question: "Empty dependency array [] se effect kab run hota hai?", options: ["Har render", "Sirf mount par", "State change par", "Kabhi nahi"], correctAnswer: 1, explanation: "Empty array sirf mount par run hota hai." },
              { id: "q2", question: "Cleanup function kab call hota hai?", options: ["Har render par", "Unmount par", "Mount par", "State change par"], correctAnswer: 1, explanation: "Cleanup unmount par call hota hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "react-events",
          title: "Event Handling",
          description: "React mein events handle karna seekhein",
          order: 6,
          content: {
            introduction: "React mein event handling HTML ke similar hai lekin kuch differences hain. Events camelCase mein likhe jaate hain (onClick, onSubmit). Event handlers functions hote hain, strings nahi.",
            sections: [
              { title: "Event Handlers", explanation: "React events camelCase mein hote hain - onClick, onChange, onSubmit, onMouseEnter. Handler as function pass karte hain, call nahi. Event object synthetic event hai - native browser event ka wrapper.", example: "return <button onClick={handleClick}>Click</button>;" },
              { title: "Event Parameters", explanation: "Custom arguments ke liye arrow function ya bind use karein. Event object extra parameters ke saath. Form events - preventDefault, target.value.", example: "onClick={() => handleClick(id)} onChange={(e) => setValue(e.target.value)}" },
            ],
            codeExamples: [
              { title: "Event Handling", language: "jsx", code: "function FormExample() {\n    const [name, setName] = useState('');\n    const [submitted, setSubmitted] = useState('');\n\n    function handleSubmit(e) {\n        e.preventDefault();\n        setSubmitted(name);\n    }\n\n    function handleButtonClick(id, e) {\n        console.log('Item ID:', id);\n    }\n\n    return (\n        <div>\n            <form onSubmit={handleSubmit}>\n                <input \n                    value={name}\n                    onChange={(e) => setName(e.target.value)}\n                    placeholder=\"Enter name\"\n                />\n                <button type=\"submit\">Submit</button>\n            </form>\n            <button onClick={(e) => handleButtonClick(42, e)}>\n                Click with ID\n            </button>\n            {submitted && <p>Submitted: {submitted}</p>}\n        </div>\n    );\n}", output: "Form submit aur button click events handle honge." },
            ],
            notes: ["Events camelCase mein hote hain", "Handler as function pass karte hain", "Synthetic event browser event ka wrapper hai", "preventDefault() default behavior rokta hai"],
            commonMistakes: [{ mistake: "onClick={() => handleClick()} ke bajaye onClick={handleClick()} likhna", correction: "Function as reference pass karein, call nahi" }],
            interviewQuestions: ["React events HTML se kaise different hain?", "Synthetic event kya hai?", "Form submit kaise prevent karte hain?"],
            practiceExercises: [{ question: "Ek form component banaye jisme name, email, aur submit ho. Submit par validation karein.", difficulty: "medium" }],
            quiz: { id: "quiz-react-events", title: "Events Quiz", questions: [
              { id: "q1", question: "React mein click event kaunsa syntax use hota hai?", options: ["onclick", "onClick", "on-click", "on_click"], correctAnswer: 1, explanation: "React events camelCase use karte hain." },
              { id: "q2", question: "Event handler ko kaise pass karte hain?", options: ["As string", "As function call", "As function reference", "As variable"], correctAnswer: 2, explanation: "Handler as function reference pass karte hain." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "react-conditional",
          title: "Conditional Rendering",
          description: "React mein conditional rendering seekhein",
          order: 7,
          content: {
            introduction: "Conditional rendering React mein different conditions par different UI dikhane ka tarika hai. Jaise user logged in hai to profile, nahi to login button.",
            sections: [
              { title: "Conditional Rendering Techniques", explanation: "Ternary operator (condition ? A : B) - most common. Logical && - sirf true par render karna hai to. if-else outside JSX. IIFE - immediately invoked function. Early return.", example: "return isLoggedIn ? <Dashboard /> : <Login />;" },
              { title: "Multiple Conditions", explanation: "Multiple conditions ke liye nested ternary se bachein. Function mein if-else use karein. Object lookup pattern use kar sakte hain.", example: "const statusMap = { loading: <Spinner />, error: <Error />, success: <Data /> };" },
            ],
            codeExamples: [
              { title: "Conditional Rendering", language: "jsx", code: "function UserStatus({ status, user }) {\n    // Early return\n    if (!user) {\n        return <p>Please log in</p>;\n    }\n\n    // Variable\n    let statusMessage;\n    if (status === 'premium') {\n        statusMessage = <span className=\"badge\">Premium User</span>;\n    } else {\n        statusMessage = <span>Free User</span>;\n    }\n\n    return (\n        <div>\n            <h1>Welcome {user.name}</h1>\n            {statusMessage}\n            {user.role === 'admin' && <button>Admin Panel</button>}\n            {user.unreadMessages > 0 ? (\n                <p>You have {user.unreadMessages} messages</p>\n            ) : (\n                <p>No new messages</p>\n            )}\n        </div>\n    );\n}", output: "User status ke according different UI render hoga." },
            ],
            notes: ["Ternary operator most common hai", "&& sirf true condition par render karta hai", "Early return cleaner code deta hai", "Nested ternary avoid karein"],
            commonMistakes: [{ mistake: "0 ke saath && use karna (0 falsy hai, render hoga)", correction: "Condition ko boolean mein convert karein: condition > 0 && element" }],
            interviewQuestions: ["Conditional rendering ke tarike?", "&& operator mein 0 ka issue kya hai?", "Early return kya hai?"],
            practiceExercises: [{ question: "Ek component banaye jo loading, error, aur success states handle kare.", difficulty: "easy" }],
            quiz: { id: "quiz-react-conditional", title: "Conditional Rendering Quiz", questions: [
              { id: "q1", question: "Conditional rendering ka sabse common tarika kaunsa hai?", options: ["if-else", "Switch", "Ternary", "Loop"], correctAnswer: 2, explanation: "Ternary operator most common hai." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "react-lists",
          title: "Lists aur Keys",
          description: "React mein lists render aur keys seekhein",
          order: 8,
          content: {
            introduction: "Lists render karna React mein common task hai. map() method se arrays ko JSX elements mein convert karte hain. Har list item ko unique key chahiye.",
            sections: [
              { title: "Rendering Lists", explanation: "map() method array ke har element par function call karta hai aur new array return karta hai. Filter, sort bhi use kar sakte hain rendering se pehle.", example: "{items.map(item => <li key={item.id}>{item.name}</li>)}" },
              { title: "Keys Importance", explanation: "Keys React ko identify karne mein help karti hain ki kaunsa item change, added, ya remove hua. Unique key har item ke liye. Index as key last resort hai (agar items fixed hain to).", example: "<li key={item.id}> - prefer karein, <li key={index}> - avoid" },
            ],
            codeExamples: [
              { title: "Lists Example", language: "jsx", code: "function TodoList() {\n    const [todos, setTodos] = useState([\n        { id: 1, text: 'Learn React', done: false },\n        { id: 2, text: 'Build Project', done: true },\n        { id: 3, text: 'Deploy App', done: false },\n    ]);\n\n    function toggleTodo(id) {\n        setTodos(todos.map(t => \n            t.id === id ? { ...t, done: !t.done } : t\n        ));\n    }\n\n    return (\n        <ul>\n            {todos.map(todo => (\n                <li \n                    key={todo.id}\n                    onClick={() => toggleTodo(todo.id)}\n                    style={{ textDecoration: todo.done ? 'line-through' : 'none' }}\n                >\n                    {todo.text}\n                </li>\n            ))}\n        </ul>\n    );\n}", output: "Todo list render hogi click karne par toggle hoga." },
            ],
            notes: ["map() se lists render karte hain", "Unique key har item ke liye zaroori hai", "Index as key avoid karein", "Key sirf map() ke andar unique hona chahiye"],
            commonMistakes: [{ mistake: "Index as key use karna (items reorder/delete par bugs)", correction: "Unique ID use karein key ke liye" }],
            interviewQuestions: ["Keys kyun important hain?", "Index as key kyun avoid karte hain?"],
            practiceExercises: [{ question: "Ek list component banaye jisme add/delete functionality ho aur proper keys use ho.", difficulty: "medium" }],
            quiz: { id: "quiz-react-lists", title: "Lists Quiz", questions: [
              { id: "q1", question: "React mein lists render karne ke liye kaunsa method use hota hai?", options: ["forEach()", "map()", "filter()", "reduce()"], correctAnswer: 1, explanation: "map() se lists render karte hain." },
              { id: "q2", question: "Keys kaunsa problem solve karti hain?", options: ["Styling", "Performance", "Re-rendering", "State"], correctAnswer: 2, explanation: "Keys efficient re-rendering ke liye hain." },
            ]},
          },
          duration: "15 min",
        },
      ],
    },
    {
      id: "react-advanced",
      title: "React Advanced",
      description: "Advanced React concepts aur projects",
      order: 2,
      lessons: [
        {
          id: "react-forms",
          title: "Forms ya Controlled Components",
          description: "React forms aur controlled components seekhein",
          order: 1,
          content: {
            introduction: "React mein form inputs ko controlled components ke through manage karte hain. Input value state mein store hoti hai aur onChange event se update hoti hai.",
            sections: [
              { title: "Controlled Components", explanation: "Controlled component mein input ki value React state se control hoti hai. onChange handler state update karta hai. Ye single source of truth pattern follow karta hai.", example: "<input value={name} onChange={(e) => setName(e.target.value)} />" },
              { title: "Form Handling", explanation: "Multiple inputs ke liye separate states ya ek object state use karein. Form submit par preventDefault() call karein. Validation implement karein.", example: "const [form, setForm] = useState({ email: '', password: '' });" },
            ],
            codeExamples: [
              { title: "Form Example", language: "jsx", code: "function LoginForm() {\n    const [form, setForm] = useState({ email: '', password: '' });\n    const [errors, setErrors] = useState({});\n\n    function handleChange(e) {\n        const { name, value } = e.target;\n        setForm(prev => ({ ...prev, [name]: value }));\n    }\n\n    function validate() {\n        let errs = {};\n        if (!form.email.includes('@')) errs.email = 'Invalid email';\n        if (form.password.length < 6) errs.password = 'Too short';\n        setErrors(errs);\n        return Object.keys(errs).length === 0;\n    }\n\n    function handleSubmit(e) {\n        e.preventDefault();\n        if (validate()) {\n            console.log('Form submitted:', form);\n        }\n    }\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input name=\"email\" value={form.email} onChange={handleChange} />\n            {errors.email && <p>{errors.email}</p>}\n            <input name=\"password\" type=\"password\" value={form.password} onChange={handleChange} />\n            {errors.password && <p>{errors.password}</p>}\n            <button type=\"submit\">Login</button>\n        </form>\n    );\n}", output: "Form with validation - email aur password check hoga." },
            ],
            notes: ["Controlled components state se input control karte hain", "Uncontrolled components ref use karte hain", "Controlled approach recommended hai", "Validation client-side implement karein"],
            commonMistakes: [{ mistake: "Controlled component mein value prop bhoolna", correction: "Value prop state se set karna na bhoolen" }],
            interviewQuestions: ["Controlled aur uncontrolled component mein kya antar hai?", "Form validation kaise implement karte hain?"],
            practiceExercises: [{ question: "Ek registration form banaye with validation - name, email, password, confirm password.", difficulty: "medium" }],
            quiz: { id: "quiz-react-forms", title: "Forms Quiz", questions: [
              { id: "q1", question: "Controlled component mein input value kahan se aati hai?", options: ["DOM", "State", "Props", "LocalStorage"], correctAnswer: 1, explanation: "Controlled component mein value state se aati hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "react-hooks",
          title: "Additional Hooks",
          description: "useRef, useContext, useReducer seekhein",
          order: 2,
          content: {
            introduction: "React mein useState aur useEffect ke alawa bhi kai useful hooks hain - useRef, useContext, useReducer, useCallback, useMemo.",
            sections: [
              { title: "useRef Hook", explanation: "useRef mutable ref object create karta hai jo component ke lifetime mein persist rehta hai. Re-render trigger nahi karta. DOM elements access karne ke liye bhi use hota hai.", example: "const inputRef = useRef(null); <input ref={inputRef} />" },
              { title: "useContext Hook", explanation: "Context API global state management ke liye hai. createContext se context banate hain. Provider component tree mein value provide karta hai. useContext consumer mein value access karta hai.", example: "const theme = useContext(ThemeContext);" },
              { title: "useReducer Hook", explanation: "useReducer complex state logic ke liye useState ka alternative hai. Reducer function current state aur action leta hai aur new state return karta hai. Multiple sub-values ya next state dependent logic ke liye best.", example: "const [state, dispatch] = useReducer(reducer, initialState);" },
            ],
            codeExamples: [
              { title: "Advanced Hooks", language: "jsx", code: "// useRef\nfunction AutoFocus() {\n    const inputRef = useRef(null);\n    useEffect(() => inputRef.current.focus(), []);\n    return <input ref={inputRef} />;\n}\n\n// useContext\nconst ThemeContext = createContext('light');\nfunction ThemedButton() {\n    const theme = useContext(ThemeContext);\n    return <button className={theme}>Themed Button</button>;\n}\n\n// useReducer\nfunction reducer(state, action) {\n    switch(action.type) {\n        case 'INCREMENT': return { count: state.count + 1 };\n        case 'DECREMENT': return { count: state.count - 1 };\n        default: return state;\n    }\n}\nfunction Counter() {\n    const [state, dispatch] = useReducer(reducer, { count: 0 });\n    return (\n        <>\n            Count: {state.count}\n            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>\n        </>\n    );\n}", output: "AutoFocus input, ThemedButton, aur Counter with useReducer." },
            ],
            notes: ["useRef DOM access aur mutable values ke liye", "useContext global state ke liye", "useReducer complex state logic ke liye", "Hooks functional components mein state add karte hain"],
            commonMistakes: [{ mistake: "useRef ke change par re-render expect karna", correction: "useRef re-render nahi karta, useState use karein" }],
            interviewQuestions: ["useRef ka use kya hai?", "Context API kya hai?", "useReducer vs useState kab use karein?"],
            practiceExercises: [{ question: "Ek counter implement karein useReducer se jisme increment, decrement aur reset actions hon.", difficulty: "medium" }],
            quiz: { id: "quiz-react-hooks", title: "Advanced Hooks Quiz", questions: [
              { id: "q1", question: "useRef kaunsa behavior show karta hai?", options: ["Re-render trigger", "No re-render", "State update", "Props change"], correctAnswer: 1, explanation: "useRef re-render trigger nahi karta." },
              { id: "q2", question: "Prop drilling se bachne ke liye kaunsa hook use hota hai?", options: ["useRef", "useState", "useContext", "useEffect"], correctAnswer: 2, explanation: "useContext prop drilling solve karta hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "react-context",
          title: "Context API",
          description: "React Context API aur state management",
          order: 3,
          content: {
            introduction: "Context API React ka built-in state management solution hai. Ye prop drilling (props ko multiple levels pass karna) se bachata hai aur global state provide karta hai.",
            sections: [
              { title: "Context ka Structure", explanation: "createContext se context object banta hai. Provider component value provide karta hai. Consumer/Custom hooks value consume karte hain. Context + useReducer = simple state management.", example: "const AppContext = createContext();" },
              { title: "Custom Provider", explanation: "Custom Provider component state aur dispatch combine karta hai. Children ko wrapped components. Custom hook (useAppContext) se access consistent rehta hai.", example: "function AppProvider({ children }) { ... return <AppContext.Provider value={value}>{children}</AppContext.Provider> }" },
            ],
            codeExamples: [
              { title: "Context API Example", language: "jsx", code: "const AuthContext = createContext();\n\nexport function AuthProvider({ children }) {\n    const [user, setUser] = useState(null);\n\n    const login = (userData) => setUser(userData);\n    const logout = () => setUser(null);\n\n    return (\n        <AuthContext.Provider value={{ user, login, logout }}>\n            {children}\n        </AuthContext.Provider>\n    );\n}\n\nexport function useAuth() {\n    const context = useContext(AuthContext);\n    if (!context) throw new Error('useAuth within AuthProvider!');\n    return context;\n}\n\n// App.js mein use\nfunction App() {\n    return (\n        <AuthProvider>\n            <Navbar />\n            <MainContent />\n        </AuthProvider>\n    );\n}\n\n// Kisi bhi child component mein\nfunction Navbar() {\n    const { user, logout } = useAuth();\n    return <nav>{user ? <button onClick={logout}>Logout</button> : <a href=\"/login\">Login</a>}</nav>;\n}", output: "Auth state globally available hai bina prop drilling ke." },
            ],
            notes: ["Context API prop drilling solve karta hai", "Provider value provide karta hai", "Custom hooks se context access consistent hai", "Multiple contexts bana sakte hain"],
            commonMistakes: [{ mistake: "Har state ke liye context banana, jabki local state enough ho", correction: "Sirf truly global state ke liye context use karein" }],
            interviewQuestions: ["Context API kya hai?", "Prop drilling kya hai?", "Context API kaise implement karte hain?"],
            practiceExercises: [{ question: "Ek theme context banaye jisme light/dark mode toggle ho.", difficulty: "medium" }],
            quiz: { id: "quiz-react-context", title: "Context API Quiz", questions: [
              { id: "q1", question: "Context API kaunsa problem solve karta hai?", options: ["Performance", "Prop drilling", "Styling", "Routing"], correctAnswer: 1, explanation: "Context API prop drilling solve karta hai." },
              { id: "q2", question: "Context create karne ke liye kaunsa function use hota hai?", options: ["createContext", "makeContext", "newContext", "contextFactory"], correctAnswer: 0, explanation: "createContext se context banta hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "react-router",
          title: "React Router",
          description: "React Router - Navigation aur routing seekhein",
          order: 4,
          content: {
            introduction: "React Router React applications mein navigation handle karne ki standard library hai. Ye single-page applications (SPAs) mein multiple pages ka illusion create karta hai.",
            sections: [
              { title: "Router Setup", explanation: "BrowserRouter top-level wrapper hai. Routes aur Route se URL path aur component map karte hain. Link aur NavLink navigation ke liye.", example: "<BrowserRouter><Routes><Route path=\"/\" element={<Home />} /></Routes></BrowserRouter>" },
              { title: "Route Parameters", explanation: "Dynamic routes ke liye :param syntax. useParams hook se parameter access karte hain. Nested routes ke liye Outlet component.", example: "<Route path=\"/user/:id\" element={<UserProfile />} />" },
            ],
            codeExamples: [
              { title: "React Router Setup", language: "jsx", code: "import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';\n\nfunction Home() { return <h1>Home Page</h1>; }\nfunction About() { return <h1>About Page</h1>; }\n\nfunction UserProfile() {\n    const { id } = useParams();\n    return <h1>User Profile: {id}</h1>;\n}\n\nfunction App() {\n    return (\n        <BrowserRouter>\n            <nav>\n                <Link to=\"/\">Home</Link>\n                <Link to=\"/about\">About</Link>\n                <Link to=\"/user/42\">User</Link>\n            </nav>\n            <Routes>\n                <Route path=\"/\" element={<Home />} />\n                <Route path=\"/about\" element={<About />} />\n                <Route path=\"/user/:id\" element={<UserProfile />} />\n                <Route path=\"*\" element={<h1>404 - Not Found</h1>} />\n            </Routes>\n        </BrowserRouter>\n    );\n}", output: "Multiple pages with navigation, dynamic route aur 404 page." },
            ],
            notes: ["BrowserRouter top-level wrapper hai", "Route path aur component map karta hai", "Link page refresh ke bina navigate karta hai", "useParams dynamic route parameters ke liye"],
            commonMistakes: [{ mistake: "Routes ko Router ke bahar rakhna", correction: "Routes hamesha Router ke andar hona chahiye" }],
            interviewQuestions: ["React Router kya hai?", "SPA kya hai?", "Link aur NavLink mein kya antar hai?"],
            practiceExercises: [{ question: "Ek 3-page website banaye React Router ke saath - Home, About, Contact pages.", difficulty: "medium" }],
            quiz: { id: "quiz-react-router", title: "React Router Quiz", questions: [
              { id: "q1", question: "Navigation ke liye kaunsa component use hota hai?", options: ["<a>", "<Link>", "<Nav>", "<Route>"], correctAnswer: 1, explanation: "<Link> component navigation ke liye." },
              { id: "q2", question: "Dynamic route parameter access karne ke liye kaunsa hook use hota hai?", options: ["useParams", "useRoute", "useQuery", "useLocation"], correctAnswer: 0, explanation: "useParams se route parameter access karte hain." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "react-project",
          title: "Project - Task Manager App",
          description: "React ka use karke task manager banayein",
          order: 5,
          content: {
            introduction: "Ab hum ek complete task manager application banayenge jisme React ke sabhi important concepts ka use hoga.",
            sections: [
              { title: "Project Overview", explanation: "Task manager app jisme tasks add, delete, complete, filter kar sakte hain. Context API state management, local storage persistence, responsive UI.", example: "Features: Add task, Delete, Toggle complete, Filter (all/active/completed), Local storage" },
              { title: "Implementation", explanation: "TaskContext with useReducer. TaskList component with map. TaskItem component. AddTask form. Filter controls. Local storage sync with useEffect.", example: "Components: App, TaskProvider, TaskList, TaskItem, AddTask, FilterControls" },
            ],
            codeExamples: [
              { title: "Task Manager Structure", language: "jsx", code: "// TaskContext.js\nfunction taskReducer(state, action) {\n    switch(action.type) {\n        case 'ADD': return [...state, { id: Date.now(), text: action.text, completed: false }];\n        case 'TOGGLE': return state.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t);\n        case 'DELETE': return state.filter(t => t.id !== action.id);\n        default: return state;\n    }\n}\n\nfunction TaskProvider({ children }) {\n    const [tasks, dispatch] = useReducer(taskReducer, [], () => {\n        const saved = localStorage.getItem('tasks');\n        return saved ? JSON.parse(saved) : [];\n    });\n\n    useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);\n\n    return (\n        <TaskContext.Provider value={{ tasks, dispatch }}>\n            {children}\n        </TaskContext.Provider>\n    );\n}\n\n// AddTask component\nfunction AddTask() {\n    const [text, setText] = useState('');\n    const { dispatch } = useTaskContext();\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        if (text.trim()) {\n            dispatch({ type: 'ADD', text });\n            setText('');\n        }\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input value={text} onChange={(e) => setText(e.target.value)} />\n            <button type=\"submit\">Add Task</button>\n        </form>\n    );\n}", output: "Complete task manager with Context API, useReducer, aur local storage." },
            ],
            notes: ["useReducer complex state logic ke liye", "Context API global state ke liye", "useEffect local storage sync ke liye", "Lazy initialization useReducer mein"],
            commonMistakes: [{ mistake: "State ko directly modify karna", correction: "Dispatch actions use karein state modify karne ke liye" }],
            interviewQuestions: ["Project mein state management kaise kiya?", "Local storage kaise use kiya?", "useReducer kyun choose kiya?"],
            practiceExercises: [{ question: "Task manager mein due dates, priority, aur categories add karein.", difficulty: "hard" }],
            quiz: { id: "quiz-react-project", title: "React Project Quiz", questions: [
              { id: "q1", question: "Complex state logic ke liye best hook kaunsa hai?", options: ["useState", "useReducer", "useRef", "useEffect"], correctAnswer: 1, explanation: "useReducer complex state logic ke liye best hai." },
            ]},
          },
          duration: "30 min",
        },
      ],
    },
  ],
}

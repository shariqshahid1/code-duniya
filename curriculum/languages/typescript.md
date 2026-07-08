# 📘 TypeScript - Complete Curriculum (2026)

> **"TypeScript = JavaScript + Types. Yeh JS ko professional banata hai."**

---

## 🗺️ Roadmap

```
🟢 BEGINNER: What is TS? | Setup | Basic Types | Functions | Interfaces
🔵 INTERMEDIATE: Generics | Union/Types | Classes | Modules | Utility Types
🟠 ADVANCED: Mapped Types | Conditional Types | Template Literals | Decorators
🔴 PROFESSIONAL: Declaration Files | Configuration | Build Tools | Patterns
⚫ EXPERT: Type Challenges | Advanced Patterns | Compiler API | Performance
```

## 📖 What is TypeScript?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 20 mins |
| **Prerequisites** | JavaScript Complete |

### Definition
TypeScript is a **typed superset of JavaScript** that compiles to plain JavaScript. Developed by Microsoft (2012).

### Roman English Explanation
TypeScript JS ka upgraded version hai. Isme types add ho gaye hain. Jaise aap kisi dabbe par label laga dete ho ki "isme sirf numbers aayenge" - waise hi TypeScript batata hai ki variable mein kaunsa type aayega. Isse bugs kam hote hain aur code readable hota hai.

### Benefits
- ✅ Catch errors at compile time (not runtime!)
- ✅ Better IDE support (autocomplete, refactoring)
- ✅ Self-documenting code
- ✅ Better team collaboration
- ✅ Gradual adoption (any valid JS is valid TS)
- ✅ Latest JS features compile to older versions

### Setup
```bash
npm install -g typescript
tsc --init
tsc file.ts  # Compile to JS
```

---

## 🟢 MODULE 1: BEGINNER

### Basic Types
```typescript
// String
let name: string = "Rahul";

// Number
let age: number = 25;
let price: number = 99.99;

// Boolean
let isActive: boolean = true;

// Array
let fruits: string[] = ["apple", "mango"];
let numbers: Array<number> = [1, 2, 3];  // Generic syntax

// Tuple (fixed length array)
let person: [string, number] = ["Rahul", 25];

// Enum
enum Direction { Up = 1, Down, Left, Right }
let dir: Direction = Direction.Up;

// Any (avoid!)
let something: any = "hello";
something = 42;  // No error (but defeats purpose)

// Unknown (type-safe any)
let unknownValue: unknown = "hello";
// unknownValue.toUpperCase();  // Error! Must check type first
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase();  // OK now
}

// Never (never returns)
function throwError(msg: string): never {
    throw new Error(msg);
}

// Void (no return)
function log(msg: string): void {
    console.log(msg);
}

// Null & Undefined
let n: null = null;
let u: undefined = undefined;
```

### Type Inference & Annotations
```typescript
// Type inference - TS automatically detects type
let name = "Rahul";  // inferred as string
// name = 42;  // Error!

// Type annotation - explicitly declare
let age: number = 25;

// Union types
let id: string | number = "abc123";
id = 456;  // OK

// Literal types
let direction: "left" | "right" | "up" | "down";
direction = "left";  // OK
// direction = "diagonal";  // Error!

// Type Aliases
type Point = { x: number; y: number };
let center: Point = { x: 0, y: 0 };

// Union with type alias
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";
```

### Functions
```typescript
// Parameter types & return type
function add(a: number, b: number): number {
    return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}

// Default parameters
function createUser(name: string, age: number = 18): User {
    return { name, age };
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

// Function type
type MathOperation = (a: number, b: number) => number;
const multiply: MathOperation = (a, b) => a * b;
```

### Interfaces
```typescript
interface User {
    readonly id: number;      // Read-only (can't change)
    name: string;
    email: string;
    age?: number;             // Optional
    readonly createdAt: Date;
}

interface Employee extends User {
    department: string;
    salary: number;
}

const user: User = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    createdAt: new Date()
};

// Interface for function
interface SearchFn {
    (query: string, page?: number): Promise<Result[]>;
}

// Index signature
interface Dictionary {
    [key: string]: string;
}
```

---

## 🔵 MODULE 2: INTERMEDIATE

### Generics
```typescript
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

identity<string>("hello");
identity<number>(42);
// Type inference works too:
identity("hello");  // T inferred as string

// Generic array
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// Generic interface
interface Repository<T> {
    getById(id: number): T;
    getAll(): T[];
    create(item: T): void;
    update(id: number, item: Partial<T>): void;
    delete(id: number): void;
}

// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Generic class
class Stack<T> {
    private items: T[] = [];
    push(item: T): void { this.items.push(item); }
    pop(): T | undefined { return this.items.pop(); }
}
```

### Utility Types
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial - all optional
const update: Partial<User> = { name: "New Name" };

// Required - all required
const full: Required<Partial<User>> = { id: 1, name: "Rahul", email: "a@b.com", age: 25 };

// Readonly - all readonly
const readOnlyUser: Readonly<User> = { id: 1, name: "Rahul", email: "a@b.com", age: 25 };
// readOnlyUser.name = "New";  // Error!

// Pick - select properties
type UserSummary = Pick<User, "id" | "name">;

// Omit - exclude properties
type UserWithoutEmail = Omit<User, "email">;

// Record - key-value pairs
type UserMap = Record<string, User>;

// Exclude - remove types from union
type Colors = "red" | "green" | "blue";
type WithoutRed = Exclude<Colors, "red">;  // "green" | "blue"

// Extract - keep types from union
type OnlyRedGreen = Extract<Colors, "red" | "green">;  // "red" | "green"

// NonNullable - remove null/undefined
type NonNull = NonNullable<string | null | undefined>;  // string

// ReturnType - get return type of function
type AddReturn = ReturnType<typeof add>;  // number

// Parameters - get parameter types
type AddParams = Parameters<typeof add>;  // [number, number]

// Awaited - unwrap promise (ES2022+)
type UserData = Awaited<Promise<User>>;  // User
```

### Type Guards
```typescript
// typeof guard
function process(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();  // TS knows it's string
    }
    return value.toFixed(2);  // TS knows it's number
}

// instanceof guard
class Dog { bark() { } }
class Cat { meow() { } }
function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// Custom type guard
interface Fish { swim(): void }
interface Bird { fly(): void }
function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

// in operator
function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}

// Discriminated unions
type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number }
    | { kind: "triangle"; base: number; height: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "rectangle": return shape.width * shape.height;
        case "triangle": return (shape.base * shape.height) / 2;
    }
}
```

### Classes
```typescript
class Animal {
    // Public (default)
    public name: string;
    
    // Private (only accessible in this class)
    private dna: string;
    
    // Protected (accessible in subclasses)
    protected species: string;
    
    // Readonly
    readonly createdAt: Date = new Date();
    
    // Static
    static kingdom = "Animalia";
    
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
        this.dna = "secret";
    }
    
    // Method
    public move(): void {
        console.log(`${this.name} is moving`);
    }
}

// Parameter properties shorthand
class Person {
    constructor(
        public name: string,
        private age: number,
        protected email: string
    ) {}
}

// Abstract classes
abstract class Database {
    abstract connect(): void;
    abstract query(sql: string): any;
    
    disconnect(): void {
        console.log("Disconnected");
    }
}

class MySQL extends Database {
    connect(): void { console.log("MySQL connected"); }
    query(sql: string): any { return []; }
}
```

---

## 🟠 MODULE 3: ADVANCED

### Mapped Types
```typescript
// Basic mapped type
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Optional<T> = {
    [P in keyof T]?: T[P];
};

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

// Mapping modifiers
type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

type Required<T> = {
    [P in keyof T]-?: T[P];
};

// Template literal mapping
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// Conditional mapped types
type FilterProperties<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
};
```

### Conditional Types
```typescript
// Basic conditional
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">;  // true
type B = IsString<42>;       // false

// Nested conditional
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

// Infer keyword
type ArrayItem<T> = T extends (infer U)[] ? U : T;
type C = ArrayItem<string[]>;  // string

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type D = ToArray<string | number>;  // string[] | number[]

// Template literal types
type EventName = `on${Capitalize<string>}`;
type ButtonEvents = "click" | "hover" | "focus";
type ButtonHandlers = `handle${Capitalize<ButtonEvents>}`;  // "handleClick" | "handleHover" | "handleFocus"
```

---

## 🔴 MODULE 4: PROFESSIONAL

### tsconfig.json
```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "ESNext",
        "moduleResolution": "bundler",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "declaration": true,
        "sourceMap": true,
        "resolveJsonModule": true,
        "allowJs": true,
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}
```

### Declaration Files (.d.ts)
```typescript
// types.d.ts
declare module "my-library" {
    export function doSomething(config: Config): Result;
    
    interface Config {
        name: string;
        version?: number;
    }
    
    interface Result {
        success: boolean;
        data: unknown;
    }
}

// Ambient declarations
declare var __VERSION__: string;
declare function $(selector: string): any;

// Augment existing modules
declare module "express" {
    interface Request {
        user?: { id: number; name: string };
    }
}
```

---

## 💼 INTERVIEW

### Top Questions
1. What is TypeScript? Why use it?
2. Interface vs Type?
3. What are generics?
4. What are union/intersection types?
5. What is the `any` type?
6. Explain utility types
7. What are mapped types?
8. What is `unknown` vs `any`?
9. Explain `keyof` and `typeof`
10. How does `infer` work?

### Interface vs Type
```
Interface                        Type
- Can be merged                   - Cannot be merged
- Extends using 'extends'         - Extends using '&'
- Better for OOP patterns         - Better for unions/primitives
- Class can implement             - Cannot be implemented
- Declaration merging             - No declaration merging
```

---

> **"TypeScript professional JS hai. Types lagao, bugs bhagao!" 🚀**
>
> **[Next: React →](react.md)**

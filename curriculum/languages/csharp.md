# 🎯 C# (.NET) — Complete Curriculum (2026 Edition)

> **"C# (pronounced 'C Sharp') Microsoft ki powerful programming language hai. Games, Web Apps, Mobile Apps, Desktop Apps — sab kuch bana sakte hain!"**

---

## 📋 Table of Contents
- [History & Evolution](#-history--evolution)
- [Module 1: Beginner](#-module-1-beginner)
- [Module 2: Intermediate](#-module-2-intermediate)
- [Module 3: OOP](#-module-3-oop)
- [Module 4: Advanced](#-module-4-advanced)
- [Module 5: .NET Ecosystem](#-module-5-net-ecosystem)
- [Interview Module](#-interview-module)
- [Project Module](#-project-module)
- [Quick Reference](#-quick-reference)

---

## 📖 History & Evolution

| Year | Version | Key Features |
|------|---------|--------------|
| 2000 | C# 1.0 | Basic OOP, Windows apps |
| 2005 | C# 2.0 | Generics, nullable types |
| 2007 | C# 3.0 | LINQ, lambda, extension methods |
| 2010 | C# 4.0 | Dynamic binding, named args |
| 2012 | C# 5.0 | Async/await |
| 2015 | C# 6.0 | String interpolation, null-conditional |
| 2017 | C# 7.0 | Tuples, pattern matching |
| 2019 | C# 8.0 | Nullable ref types, switch expressions |
| 2020 | C# 9.0 | Records, top-level statements |
| 2021 | C# 10.0 | Global usings, file-scoped namespaces |
| 2022 | C# 11.0 | Required members, raw string literals |
| 2023 | C# 12.0 | Primary constructors, collection expressions |
| 2024 | C# 13.0 | Params collections, field keyword |
| 2026 | C# 14.0 | Enhanced patterns, AI integration |

### C# Key Facts
- **Creator**: Anders Hejlsberg (Microsoft, 2000)
- **Latest**: C# 14.0 (.NET 10)
- **File Extension**: `.cs`
- **Paradigm**: OOP, Functional, Component-oriented
- **Runtime**: .NET (CLR — Common Language Runtime)

### Pros & Cons
| Pros | Cons |
|------|------|
| Type-safe, modern, elegant | Windows-centric (historically) |
| Huge .NET ecosystem | Slower than C++ |
| Great for games (Unity) | Memory usage can be high |
| Cross-platform (since .NET Core) | Learning curve for advanced features |
| Excellent tooling (VS/Rider) | |
| LINQ is revolutionary | |

---

# 🟢 MODULE 1: BEGINNER C#

---

## 1.1 🌟 C# Kya Hai? (What is C#?)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 30 mins |

### Definition
C# ek modern, object-oriented programming language hai jo Microsoft ne banayi. Ye .NET framework pe chalti hai.

### Roman English Explanation
C# ko aise samjho — ye ek bahut powerful language hai jisse tum kuch bhi bana sakte ho: mobile apps (Xamarin), games (Unity), web apps (ASP.NET), desktop apps (WPF). Yeh Java jaisi hai lekin Microsoft ne banayi hai. Strongly typed hai — matlab har variable ka type fix hota hai.

### Analogy 🏗️
> C# = Swiss Army Knife (har kaam ka ek tool)
> .NET = Workshop (jahan tools kaam karte hain)
> Visual Studio = Workbench (jahan tum kaam karte ho)

### Basic C# Program
```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Namaste Duniya!");
    }
}
```

### Kaise Kaam Karta Hai?
```
C# Source Code → Compiler → IL Code → CLR → Machine Code
   (.cs file)    (csc.exe)   (MSIL)    (JIT)    (runs)
```

### Setup
1. Install **Visual Studio 2022+** ya **VS Code** with C# extension
2. Ya use **dotnet CLI**: `dotnet new console -n MyApp`
3. Run: `dotnet run`

---

## 1.2 📝 Basic Syntax

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 25 mins |

### Roman English Explanation
C# ka syntax C aur Java jaisa hai. Har statement `;` se khatam hota hai. Code blocks `{}` mein likhte hain. C# case-sensitive hai.

### Program Structure
```csharp
using System;                    // Namespace import karo

namespace MyApp                  // Apna namespace
{
    class Program                // Class (har cheez class mein)
    {
        static void Main()       // Entry point (yahi se start)
        {
            Console.WriteLine("Hello!"); // Output
        }
    }
}

// Modern C# 10+ — File-scoped namespace & top-level statements
using System;
Console.WriteLine("Hello World!");
```

### Line by Line Explanation
| Code | Kya Hota Hai |
|------|-------------|
| `using System;` | System namespace import (Console class use karne ke liye) |
| `namespace MyApp` | Code organize karne ke liye folder |
| `class Program` | Class declaration |
| `static void Main()` | Program yahi se start hota hai |
| `Console.WriteLine()` | Output print karna |

### Examples

#### Example 1: Simple Output (Beginner)
```csharp
using System;
Console.WriteLine("Hello, World!");
Console.Write("This is ");
Console.WriteLine("same line");
```

#### Example 2: Variables (Beginner)
```csharp
string name = "Rahul";
int age = 25;
double price = 99.99;
bool isStudent = true;

Console.WriteLine($"Name: {name}, Age: {age}");
```

#### Example 3: User Input (Beginner)
```csharp
Console.Write("Enter your name: ");
string? name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");

Console.Write("Enter age: ");
int age = Convert.ToInt32(Console.ReadLine());
Console.WriteLine($"You are {age} years old");
```

#### Example 4: Comments (Beginner)
```csharp
// Single line comment

/* Multi-line
   comment */

/// <summary>
/// XML doc comment — Visual Studio intellisense mein dikhta hai
/// </summary>
public void MyMethod() { }
```

#### Example 5: Top-Level Statements (Modern C#)
```csharp
// C# 10+ — No class/Main needed!
using System;

Console.Write("Enter first number: ");
int a = int.Parse(Console.ReadLine()!);
Console.Write("Enter second number: ");
int b = int.Parse(Console.ReadLine()!);
Console.WriteLine($"Sum: {a + b}");
```

---

## 1.3 🔤 Data Types

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### Roman English Explanation
C# strongly typed hai — har variable ka type declared karna padta hai. Do types hote hain: Value types (stack mein store) aur Reference types (heap mein store).

### All Data Types

| Type | Size | Range | Example |
|------|------|-------|---------|
| `bool` | 1 bit | true/false | `bool flag = true;` |
| `byte` | 8 bits | 0 to 255 | `byte b = 100;` |
| `int` | 32 bits | ±2.1 billion | `int age = 25;` |
| `long` | 64 bits | ±9 quintillion | `long big = 999999;` |
| `float` | 32 bits | ±3.4E±38 | `float f = 3.14f;` |
| `double` | 64 bits | ±1.7E±308 | `double d = 3.14;` |
| `decimal` | 128 bits | 28-29 digits | `decimal price = 99.99m;` |
| `char` | 16 bits | Unicode | `char c = 'A';` |
| `string` | Reference | Text | `string s = "Hello";` |

### Examples

#### Example 1: Value Types (Beginner)
```csharp
int age = 25;
double salary = 50000.50;
decimal price = 199.99m;  // m = decimal literal
float discount = 0.15f;   // f = float literal
bool isActive = true;
char grade = 'A';

Console.WriteLine($"{age}, {salary}, {price}, {discount}, {isActive}, {grade}");
```

#### Example 2: Type Conversion (Intermediate)
```csharp
// Implicit (automatic) — safe conversion
int num = 100;
double d = num;  // int → double (OK, no data loss)

// Explicit (casting) — manual, may lose data
double x = 9.78;
int y = (int)x;  // 9 (decimal part lost!)

// Convert class
string str = "123";
int parsed = Convert.ToInt32(str);
double parsedDouble = Convert.ToDouble("45.67");

// Parse/TryParse
if (int.TryParse("abc", out int result))
{
    Console.WriteLine($"Parsed: {result}");
}
else
{
    Console.WriteLine("Invalid number!");
}
```

#### Example 3: Nullable Types (Intermediate)
```csharp
// Nullable value types (value types normally null nahi ho sakte)
int? age = null;  // ? makes it nullable
double? salary = null;

if (age.HasValue)
{
    Console.WriteLine($"Age: {age.Value}");
}
else
{
    Console.WriteLine("Age not provided");
}

// Null-coalescing operator
int actualAge = age ?? 0;  // if age is null, use 0

// Null-conditional operator
string? name = null;
int? length = name?.Length;  // null (crash nahi hoga!)
```

#### Example 4: var keyword (Intermediate)
```csharp
var name = "Rahul";       // Compiler automatically string samjhega
var age = 25;              // int
var price = 99.99m;        // decimal
var items = new[] { 1, 2, 3 };  // int[]

// var compile-time type inference hai (runtime dynamic nahi!)
// var sirf local variables ke liye use kar sakte hain

// var se anonymous types bana sakte hain
var person = new { Name = "Rahul", Age = 25 };
Console.WriteLine($"{person.Name} is {person.Age}");
```

#### Example 5: Record Types (Advanced, C# 9+)
```csharp
// Record — immutable data object
public record Person(string Name, int Age);

var p1 = new Person("Rahul", 25);
var p2 = new Person("Rahul", 25);

Console.WriteLine(p1 == p2);  // true (value comparison!)
Console.WriteLine(p1);        // Person { Name = Rahul, Age = 25 }

// With-expressions (copy with modifications)
var p3 = p1 with { Age = 26 };
Console.WriteLine(p3.Age);    // 26
```

---

## 1.4 ➗ Operators

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### Examples

#### Example 1: Arithmetic (Beginner)
```csharp
int a = 10, b = 3;
Console.WriteLine(a + b);   // 13
Console.WriteLine(a - b);   // 7
Console.WriteLine(a * b);   // 30
Console.WriteLine(a / b);   // 3 (integer division!)
Console.WriteLine(a % b);   // 1 (remainder)
Console.WriteLine(a / (double)b); // 3.333...
```

#### Example 2: Comparison & Logical (Beginner)
```csharp
int x = 5, y = 10;
Console.WriteLine(x == y);  // False
Console.WriteLine(x != y);  // True
Console.WriteLine(x < y);   // True
Console.WriteLine(x > y);   // False

bool a = true, b = false;
Console.WriteLine(a && b);  // False (AND)
Console.WriteLine(a || b);  // True  (OR)
Console.WriteLine(!a);      // False (NOT)
```

#### Example 3: Increment/Decrement (Intermediate)
```csharp
int i = 5;
Console.WriteLine(i++);  // 5 (post-increment: pehle use, phir badhao)
Console.WriteLine(++i);  // 7 (pre-increment: pehle badhao, phir use)
Console.WriteLine(i);    // 7
```

#### Example 4: Assignment & Compound (Intermediate)
```csharp
int x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // 12
x *= 2;  // 24
x /= 4;  // 6
x %= 2;  // 0

// Null-coalescing assignment
string? name = null;
name ??= "Guest";  // agar null hai toh "Guest" assign karo
```

#### Example 5: Ternary & Pattern Matching (Advanced)
```csharp
int age = 20;
string status = age >= 18 ? "Adult" : "Minor";

// Switch expression (C# 8+)
string GetGrade(int marks) => marks switch
{
    >= 90 => "A",
    >= 75 => "B",
    >= 60 => "C",
    >= 33 => "D",
    _ => "F"  // default
};

// Pattern matching
object obj = "Hello";
if (obj is string str)
{
    Console.WriteLine($"String length: {str.Length}");
}
```

---

## 1.5 🧭 Control Flow

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 35 mins |

### Examples

#### Example 1: If-Else (Beginner)
```csharp
int marks = 85;

if (marks >= 90)
{
    Console.WriteLine("Grade: A+");
}
else if (marks >= 75)
{
    Console.WriteLine("Grade: A");
}
else if (marks >= 60)
{
    Console.WriteLine("Grade: B");
}
else
{
    Console.WriteLine("Grade: F");
}
```

#### Example 2: Switch (Intermediate)
```csharp
string day = "Monday";

// Traditional switch
switch (day)
{
    case "Monday":
        Console.WriteLine("Start of week!");
        break;
    case "Friday":
        Console.WriteLine("Weekend near!");
        break;
    case "Saturday":
    case "Sunday":
        Console.WriteLine("Weekend!");
        break;
    default:
        Console.WriteLine("Midweek");
        break;
}

// Switch expression (C# 8+)
string result = day switch
{
    "Monday" => "Start of week!",
    "Friday" => "Weekend near!",
    "Saturday" or "Sunday" => "Weekend!",
    _ => "Midweek"
};
```

#### Example 3: Loops (Intermediate)
```csharp
// For loop
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"Number: {i}");
}

// While loop
int j = 1;
while (j <= 5)
{
    Console.WriteLine($"While: {j}");
    j++;
}

// Do-while
int k = 1;
do
{
    Console.WriteLine($"Do-While: {k}");
    k++;
} while (k <= 5);

// Foreach
string[] fruits = { "Apple", "Banana", "Mango" };
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

#### Example 4: Break & Continue (Advanced)
```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 3) continue;  // 3 skip karo
    if (i == 8) break;     // 8 pe loop rok do
    Console.WriteLine(i);
}
// Output: 1, 2, 4, 5, 6, 7
```

#### Example 5: Exception Handling (Advanced)
```csharp
try
{
    Console.Write("Enter numerator: ");
    int a = int.Parse(Console.ReadLine()!);
    Console.Write("Enter denominator: ");
    int b = int.Parse(Console.ReadLine()!);
    
    if (b == 0)
        throw new DivideByZeroException("Zero se divide nahi kar sakte!");
    
    Console.WriteLine($"Result: {a / b}");
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Math Error: {ex.Message}");
}
catch (FormatException)
{
    Console.WriteLine("Invalid number format!");
}
catch (Exception ex)
{
    Console.WriteLine($"General Error: {ex.Message}");
}
finally
{
    Console.WriteLine("This always runs!");
}
```

---

## 1.6 📦 Arrays & Collections

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 40 mins |

### Examples

#### Example 1: Arrays (Beginner)
```csharp
// Array declaration
int[] numbers = new int[5];  // Size fixed
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

// Array initialization
int[] scores = { 85, 92, 78, 90, 88 };
string[] names = { "Rahul", "Priya", "Amit" };

// Access
Console.WriteLine(scores[0]);  // 85
Console.WriteLine(scores.Length);  // 5

// Loop through
foreach (int score in scores)
{
    Console.WriteLine(score);
}

// Multi-dimensional
int[,] matrix = { { 1, 2 }, { 3, 4 } };
Console.WriteLine(matrix[0, 1]);  // 2

// Jagged array (array of arrays)
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };
```

#### Example 2: List<T> (Intermediate)
```csharp
using System.Collections.Generic;

// List — dynamic array
List<string> fruits = new List<string>();
fruits.Add("Apple");
fruits.Add("Banana");
fruits.Add("Mango");

// Access
Console.WriteLine(fruits[0]);    // Apple
Console.WriteLine(fruits.Count); // 3

// Remove
fruits.Remove("Banana");
fruits.RemoveAt(0);

// Contains
if (fruits.Contains("Mango"))
    Console.WriteLine("Mango mil gaya!");

// Sort
fruits.Sort();

// List initialization
List<int> numbers = new List<int> { 5, 2, 8, 1, 9 };
foreach (int n in numbers) Console.Write($"{n} ");
```

#### Example 3: Dictionary<TKey, TValue> (Intermediate)
```csharp
Dictionary<string, int> ages = new Dictionary<string, int>
{
    { "Rahul", 25 },
    { "Priya", 22 },
    { "Amit", 28 }
};

// Access
Console.WriteLine(ages["Rahul"]);  // 25

// Safe access
if (ages.TryGetValue("Rahul", out int age))
    Console.WriteLine($"Rahul is {age}");

// Check key exists
if (ages.ContainsKey("Priya"))
    Console.WriteLine("Priya exists!");

// Add/Update
ages["Sneha"] = 24;  // Add
ages["Rahul"] = 26;  // Update

// Loop
foreach (KeyValuePair<string, int> kvp in ages)
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");

// Modern iteration
foreach (var (name, ageValue) in ages)
    Console.WriteLine($"{name}: {ageValue}");
```

#### Example 4: HashSet & Queue (Advanced)
```csharp
// HashSet — unique elements only
HashSet<int> unique = new HashSet<int> { 1, 2, 3, 2, 1 };
Console.WriteLine(unique.Count);  // 3 (duplicates removed!)

// Queue — FIFO (First In, First Out)
Queue<string> queue = new Queue<string>();
queue.Enqueue("First");
queue.Enqueue("Second");
queue.Enqueue("Third");

Console.WriteLine(queue.Dequeue());  // First
Console.WriteLine(queue.Peek());     // Second (without removing)

// Stack — LIFO (Last In, First Out)
Stack<string> stack = new Stack<string>();
stack.Push("Bottom");
stack.Push("Middle");
stack.Push("Top");

Console.WriteLine(stack.Pop());  // Top
Console.WriteLine(stack.Peek()); // Middle
```

#### Example 5: LINQ with Collections (Advanced)
```csharp
using System.Linq;

List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Filter
var evenNumbers = numbers.Where(n => n % 2 == 0);
// 2, 4, 6, 8, 10

// Project
var squared = numbers.Select(n => n * n);
// 1, 4, 9, 16, 25...

// Aggregate
var sum = numbers.Sum();    // 55
var avg = numbers.Average(); // 5.5
var max = numbers.Max();    // 10
var min = numbers.Min();    // 1
var count = numbers.Count(); // 10

// Chain
var result = numbers
    .Where(n => n > 5)
    .Select(n => n * 2)
    .OrderByDescending(n => n)
    .ToList();
// 20, 18, 16, 14, 12

// Any/All
bool hasEven = numbers.Any(n => n % 2 == 0);  // true
bool allPositive = numbers.All(n => n > 0);   // true

// First/Last
int first = numbers.First();    // 1
int last = numbers.Last();      // 10

// Group by
var students = new[] {
    new { Name = "Rahul", Grade = "A" },
    new { Name = "Priya", Grade = "A" },
    new { Name = "Amit", Grade = "B" }
};
var grouped = students.GroupBy(s => s.Grade);
foreach (var group in grouped)
{
    Console.WriteLine($"Grade {group.Key}: {group.Count()} students");
}
```

---

## 1.7 🔧 Methods (Functions)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 35 mins |

### Examples

#### Example 1: Basic Methods (Beginner)
```csharp
// Method definition
static void Greet()
{
    Console.WriteLine("Hello!");
}

// Method with parameters
static void GreetUser(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

// Method with return value
static int Add(int a, int b)
{
    return a + b;
}

// Call
Greet();
GreetUser("Rahul");
int sum = Add(5, 3);
Console.WriteLine(sum);  // 8
```

#### Example 2: Method Overloading (Intermediate)
```csharp
static int Add(int a, int b) => a + b;
static double Add(double a, double b) => a + b;
static int Add(int a, int b, int c) => a + b + c;

Console.WriteLine(Add(5, 3));        // 8
Console.WriteLine(Add(5.5, 3.2));   // 8.7
Console.WriteLine(Add(1, 2, 3));    // 6
```

#### Example 3: Parameters (Intermediate)
```csharp
// Default parameters
static void PrintInfo(string name, int age = 18)
{
    Console.WriteLine($"{name} is {age}");
}

PrintInfo("Rahul", 25);  // Rahul is 25
PrintInfo("Priya");      // Priya is 18 (default)

// Named arguments
PrintInfo(age: 22, name: "Amit");  // Order doesn't matter

// Out parameters
static void GetValues(out int x, out int y)
{
    x = 10;
    y = 20;
}
GetValues(out int a, out int b);
Console.WriteLine($"{a}, {b}");  // 10, 20

// Ref parameters
static void Modify(ref int x)
{
    x = x * 2;
}
int num = 5;
Modify(ref num);
Console.WriteLine(num);  // 10
```

#### Example 4: Lambda & Local Functions (Advanced)
```csharp
// Lambda expression
Func<int, int> square = (int x) => x * x;
Console.WriteLine(square(5));  // 25

// Lambda with multiple params
Func<int, int, int> add = (a, b) => a + b;

// Action (no return)
Action<string> greet = (name) => Console.WriteLine($"Hi {name}");
greet("Rahul");

// Local function (function ke andar function)
static int Calculate(int a, int b)
{
    // Local function — sirf is method mein accessible
    int Square(int x) => x * x;
    
    return Square(a) + Square(b);
}
Console.WriteLine(Calculate(3, 4));  // 25 (9 + 16)
```

#### Example 5: Extension Methods (Advanced)
```csharp
// Extension method — existing class mein naya method add karo
public static class StringExtensions
{
    public static string Reverse(this string str)
    {
        char[] chars = str.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }
    
    public static bool IsPalindrome(this string str)
    {
        string cleaned = str.Replace(" ", "").ToLower();
        return cleaned == cleaned.Reverse();
    }
}

// Use
string text = "Hello";
Console.WriteLine(text.Reverse());  // olleH
Console.WriteLine("racecar".IsPalindrome());  // true
```

---

# 🔵 MODULE 2: INTERMEDIATE C#

---

## 2.1 📂 File I/O

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
C# mein files read/write karna bohot easy hai. `System.IO` namespace mein sab kuch milta hai.

### Examples

```csharp
using System.IO;

// Write to file
string content = "Hello, World!";
File.WriteAllText("test.txt", content);

// Read from file
string read = File.ReadAllText("test.txt");
Console.WriteLine(read);

// Append
File.AppendAllText("test.txt", "\nMore content");

// Read all lines
string[] lines = File.ReadAllLines("test.txt");
foreach (string line in lines)
    Console.WriteLine(line);

// Write all lines
string[] data = { "Line 1", "Line 2", "Line 3" };
File.WriteAllLines("output.txt", data);

// Check if file exists
if (File.Exists("test.txt"))
    Console.WriteLine("File exists!");

// File info
FileInfo info = new FileInfo("test.txt");
Console.WriteLine($"Size: {info.Length} bytes");
Console.WriteLine($"Created: {info.CreationTime}");
Console.WriteLine($"Extension: {info.Extension}");

// Directory operations
Directory.CreateDirectory("MyFolder");
string[] files = Directory.GetFiles(".");
foreach (string file in files)
    Console.WriteLine(file);
```

### StreamReader/StreamWriter
```csharp
// StreamWriter (efficient for large files)
using (StreamWriter writer = new StreamWriter("large.txt"))
{
    for (int i = 0; i < 1000; i++)
    {
        writer.WriteLine($"Line {i}");
    }
}

// StreamReader
using (StreamReader reader = new StreamReader("large.txt"))
{
    string? line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}

// Async file operations
async Task ReadFileAsync(string path)
{
    string content = await File.ReadAllTextAsync(path);
    Console.WriteLine(content);
}
```

---

## 2.2 🧵 Multithreading & Async

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 40 mins |

### Roman English Explanation
Multithreading se ek saath multiple kaam kar sakte hain. Async/await se program block nahi hota jab slow operation ho (jaise file read, network call).

### Examples

#### Example 1: Async/Await (Beginner)
```csharp
using System.Threading.Tasks;

static async Task Main()
{
    Console.WriteLine("Starting...");
    await DoWorkAsync();
    Console.WriteLine("Done!");
}

static async Task DoWorkAsync()
{
    await Task.Delay(2000);  // 2 second wait (non-blocking)
    Console.WriteLine("Work completed!");
}
```

#### Example 2: Multiple Tasks (Intermediate)
```csharp
static async Task Main()
{
    Task task1 = Task.Run(() => DoWork("Task 1", 2000));
    Task task2 = Task.Run(() => DoWork("Task 2", 1000));
    Task task3 = Task.Run(() => DoWork("Task 3", 3000));
    
    // Wait for all
    await Task.WhenAll(task1, task2, task3);
    Console.WriteLine("All done!");
}

static void DoWork(string name, int delay)
{
    Thread.Sleep(delay);
    Console.WriteLine($"{name} completed in {delay}ms");
}
```

#### Example 3: Parallel Processing (Advanced)
```csharp
using System.Threading.Tasks;

// Parallel For
Parallel.For(0, 10, i =>
{
    Console.WriteLine($"Processing {i} on thread {Thread.CurrentThread.ManagedThreadId}");
});

// Parallel ForEach
var items = Enumerable.Range(1, 100);
Parallel.ForEach(items, item =>
{
    // Process each item in parallel
    Console.WriteLine($"Item: {item}");
});

// PLINQ (Parallel LINQ)
var numbers = Enumerable.Range(1, 1000);
var evenSquares = numbers
    .AsParallel()
    .Where(n => n % 2 == 0)
    .Select(n => n * n)
    .ToList();
```

#### Example 4: Tasks with Results (Advanced)
```csharp
static async Task Main()
{
    // Run multiple tasks and get results
    Task<int> task1 = CalculateAsync(10, 2000);
    Task<int> task2 = CalculateAsync(20, 1000);
    Task<int> task3 = CalculateAsync(30, 3000);
    
    int[] results = await Task.WhenAll(task1, task2, task3);
    Console.WriteLine($"Results: {string.Join(", ", results)}");
    
    // First completed task
    Task<int> first = await Task.WhenAny(task1, task2, task3);
    Console.WriteLine($"First result: {await first}");
}

static async Task<int> CalculateAsync(int value, int delay)
{
    await Task.Delay(delay);
    return value * 2;
}
```

#### Example 5: Cancellation Tokens (Advanced)
```csharp
using System.Threading;

static async Task Main()
{
    var cts = new CancellationTokenSource();
    cts.CancelAfter(3000);  // 3 seconds ke baad cancel
    
    try
    {
        await ProcessAsync(cts.Token);
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Operation was cancelled!");
    }
}

static async Task ProcessAsync(CancellationToken token)
{
    for (int i = 0; i < 10; i++)
    {
        token.ThrowIfCancellationRequested();
        Console.WriteLine($"Processing step {i}...");
        await Task.Delay(1000, token);
    }
    Console.WriteLine("Completed!");
}
```

---

## 2.3 🔗 Delegates & Events

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 35 mins |

### Roman English Explanation
Delegate function ka pointer hai — method ko variable mein store karke baad mein call kar sakte hain. Events notify karne ke liye hote hain (jaise button click).

### Examples

#### Example 1: Delegates (Beginner)
```csharp
// Declare delegate
delegate void MyDelegate(string message);

// Method matching delegate signature
static void PrintMessage(string msg) => Console.WriteLine(msg);
static void PrintUpperCase(string msg) => Console.WriteLine(msg.ToUpper());

// Use delegate
MyDelegate del = PrintMessage;
del("Hello!");  // Hello!

del = PrintUpperCase;
del("Hello!");  // HELLO!

// Multicast delegate (multiple methods ek saath)
MyDelegate multi = PrintMessage;
multi += PrintUpperCase;
multi("Test");  // Test \n TEST
```

#### Example 2: Func & Action (Intermediate)
```csharp
// Func — returns a value
Func<int, int> square = (x) => x * x;
Console.WriteLine(square(5));  // 25

Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(3, 4));  // 7

// Action — returns void
Action<string> greet = (name) => Console.WriteLine($"Hello {name}");
greet("Rahul");

// Predicate — returns bool
Predicate<int> isEven = (x) => x % 2 == 0;
Console.WriteLine(isEven(4));  // True
```

#### Example 3: Events (Intermediate)
```csharp
// Publisher class
class Button
{
    // Event declaration
    public event EventHandler? Clicked;
    
    public void Click()
    {
        Console.WriteLine("Button clicked!");
        Clicked?.Invoke(this, EventArgs.Empty);
    }
}

// Subscriber
class Program
{
    static void Main()
    {
        Button btn = new Button();
        
        // Subscribe to event
        btn.Clicked += OnButtonClicked;
        btn.Clicked += (sender, e) => Console.WriteLine("Lambda handler!");
        
        // Trigger
        btn.Click();
    }
    
    static void OnButtonClicked(object? sender, EventArgs e)
    {
        Console.WriteLine("Button was clicked - handling...");
    }
}
```

#### Example 4: Custom Event Args (Advanced)
```csharp
class MessageEventArgs : EventArgs
{
    public string Message { get; }
    public DateTime Timestamp { get; }
    
    public MessageEventArgs(string message)
    {
        Message = message;
        Timestamp = DateTime.Now;
    }
}

class Messenger
{
    public event EventHandler<MessageEventArgs>? MessageReceived;
    
    public void SendMessage(string text)
    {
        Console.WriteLine($"Sending: {text}");
        MessageReceived?.Invoke(this, new MessageEventArgs(text));
    }
}

// Usage
var messenger = new Messenger();
messenger.MessageReceived += (sender, e) =>
{
    Console.WriteLine($"Received '{e.Message}' at {e.Timestamp}");
};
messenger.SendMessage("Hello!");
```

#### Example 5: Async Events (Advanced)
```csharp
class AsyncEventExample
{
    public event Func<string, Task>? ProcessStarted;
    
    public async Task StartProcessingAsync(string data)
    {
        Console.WriteLine("Processing started...");
        if (ProcessStarted != null)
        {
            await ProcessStarted.Invoke(data);
        }
        await Task.Delay(1000);
        Console.WriteLine("Processing completed!");
    }
}

// Usage
var example = new AsyncEventExample();
example.ProcessStarted += async (data) =>
{
    await Task.Delay(500);
    Console.WriteLine($"Async handler processing: {data}");
};

await example.StartProcessingAsync("Test Data");
```

---

# 🟣 MODULE 3: OBJECT-ORIENTED C#

---

## 3.1 🏗️ Classes & Objects

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 45 mins |

### Roman English Explanation
Class ek blueprint hai (jaise ghar ka naksha). Object us blueprint se bana actual ghar hai. Class mein properties (data) aur methods (behaviour) hote hain.

### Examples

#### Example 1: Basic Class (Beginner)
```csharp
public class Car
{
    // Fields (data)
    public string Brand;
    public string Color;
    public int Year;
    
    // Method (behaviour)
    public void Start()
    {
        Console.WriteLine($"{Brand} car is starting...");
    }
    
    public void DisplayInfo()
    {
        Console.WriteLine($"{Year} {Color} {Brand}");
    }
}

// Use
Car myCar = new Car();
myCar.Brand = "Toyota";
myCar.Color = "Red";
myCar.Year = 2024;
myCar.Start();
myCar.DisplayInfo();
```

#### Example 2: Properties (Intermediate)
```csharp
public class Person
{
    // Auto-implemented properties
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Read-only property
    public int BirthYear { get; }
    
    // Calculated property
    public bool IsAdult => Age >= 18;
    
    // Full property with validation
    private string _email = "";
    public string Email
    {
        get => _email;
        set
        {
            if (!value.Contains("@"))
                throw new ArgumentException("Invalid email!");
            _email = value;
        }
    }
    
    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
        BirthYear = DateTime.Now.Year - age;
    }
}

var p = new Person("Rahul", 25);
Console.WriteLine($"{p.Name}, {p.Age}, Born: {p.BirthYear}, Adult: {p.IsAdult}");
p.Email = "rahul@test.com";
```

#### Example 3: Constructor Overloading (Intermediate)
```csharp
public class Product
{
    public string Name { get; }
    public decimal Price { get; }
    public int Stock { get; set; }
    
    // Primary constructor (C# 12+)
    public Product(string name, decimal price, int stock = 0)
    {
        Name = name;
        Price = price;
        Stock = stock;
    }
    
    // Copy constructor
    public Product(Product other)
    {
        Name = other.Name;
        Price = other.Price;
        Stock = other.Stock;
    }
    
    // Static factory method
    public static Product CreateDefault(string name)
    {
        return new Product(name, 0, 0);
    }
}

var laptop = new Product("Laptop", 55000, 10);
var copy = new Product(laptop);
var default_product = Product.CreateDefault("New Item");
```

#### Example 4: Access Modifiers (Advanced)
```csharp
public class BankAccount
{
    // Access modifiers
    public string AccountNumber { get; }     // Anywhere
    internal string BranchCode { get; }      // Same assembly
    protected decimal Balance { get; set; }  // Derived classes
    private string _pinCode;                  // Same class only
    private protected string _notes;         // Same assembly + derived
    
    public BankAccount(string number, decimal initialBalance)
    {
        AccountNumber = number;
        Balance = initialBalance;
    }
    
    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive");
        Balance += amount;
    }
    
    public bool Withdraw(decimal amount)
    {
        if (amount > Balance)
            return false;
        Balance -= amount;
        return true;
    }
}

// public: sab jagah accessible
// private: sirf is class mein
// protected: is class + child classes
// internal: same project (assembly) mein
// private protected: same assembly + derived classes
```

#### Example 5: Static Members (Advanced)
```csharp
public class MathUtility
{
    // Static field — ek hi copy sabke liye
    private static int _operationCount = 0;
    
    // Static property
    public static int OperationCount => _operationCount;
    
    // Static method
    public static int Add(int a, int b)
    {
        _operationCount++;
        return a + b;
    }
    
    // Static constructor — ek baar class load hote time
    static MathUtility()
    {
        Console.WriteLine("MathUtility loaded!");
    }
    
    // Constants are implicitly static
    public const double PI = 3.14159;
    
    // Static class can't be instantiated
}

// Static members ko class name se call karte hain
Console.WriteLine(MathUtility.Add(5, 3));  // 8
Console.WriteLine(MathUtility.PI);         // 3.14159
Console.WriteLine(MathUtility.OperationCount); // 1
```

---

## 3.2 🧬 Inheritance & Polymorphism

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 45 mins |

### Roman English Explanation
Inheritance se ek class doosri class ki properties aur methods inherit kar sakti hai. Polymorphism se ek hi method name se different behaviour achieve kar sakte hain.

### Examples

#### Example 1: Basic Inheritance (Beginner)
```csharp
// Base class (parent)
public class Animal
{
    public string Name { get; set; }
    
    public void Eat()
    {
        Console.WriteLine($"{Name} is eating");
    }
    
    public virtual void MakeSound()  // virtual = override kiya ja sakta hai
    {
        Console.WriteLine("Some sound");
    }
}

// Derived class (child)
public class Dog : Animal
{
    public string Breed { get; set; }
    
    public void Fetch()
    {
        Console.WriteLine($"{Name} is fetching!");
    }
    
    public override void MakeSound()  // override = parent method change
    {
        Console.WriteLine("Woof! Woof!");
    }
}

// Use
Dog dog = new Dog();
dog.Name = "Buddy";
dog.Breed = "Golden Retriever";
dog.Eat();          // Inherited from Animal
dog.Fetch();        // Dog class ka method
dog.MakeSound();    // Override kiya hua
```

#### Example 2: Polymorphism (Intermediate)
```csharp
public class Shape
{
    public virtual double GetArea() => 0;
    public virtual void Draw() => Console.WriteLine("Drawing shape");
}

public class Circle : Shape
{
    public double Radius { get; set; }
    
    public Circle(double radius) => Radius = radius;
    
    public override double GetArea() => Math.PI * Radius * Radius;
    
    public override void Draw() => Console.WriteLine($"Drawing circle (r={Radius})");
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    public Rectangle(double w, double h) { Width = w; Height = h; }
    
    public override double GetArea() => Width * Height;
    
    public override void Draw() => Console.WriteLine($"Drawing rectangle ({Width}x{Height})");
}

// Polymorphism — same code, different behaviour
Shape[] shapes = { new Circle(5), new Rectangle(4, 6), new Circle(3) };
foreach (Shape shape in shapes)
{
    shape.Draw();
    Console.WriteLine($"Area: {shape.GetArea():F2}");
}
```

#### Example 3: Abstract Classes (Intermediate)
```csharp
// Abstract class — object nahi bana sakte, sirf inherit
public abstract class Database
{
    protected string ConnectionString { get; }
    
    public Database(string connStr)
    {
        ConnectionString = connStr;
    }
    
    // Abstract method — child class mein implement karna hoga
    public abstract void Connect();
    public abstract void Disconnect();
    
    // Concrete method — already implemented
    public void Log(string message)
    {
        Console.WriteLine($"[DB] {DateTime.Now}: {message}");
    }
}

public class SqlServerDatabase : Database
{
    public SqlServerDatabase(string connStr) : base(connStr) { }
    
    public override void Connect()
    {
        Console.WriteLine("Connecting to SQL Server...");
    }
    
    public override void Disconnect()
    {
        Console.WriteLine("Disconnecting from SQL Server...");
    }
}

// Use
Database db = new SqlServerDatabase("Server=.;Database=MyDB;");
db.Connect();
db.Log("Query executed");
db.Disconnect();
```

#### Example 4: Interfaces (Advanced)
```csharp
// Interface — contract (sirf signatures)
public interface IPrintable
{
    void Print();
    string GetPrintInfo();
}

public interface ISerializable
{
    string Serialize();
    void Deserialize(string data);
}

// Multiple interface implementation
public class Report : IPrintable, ISerializable
{
    public string Title { get; set; }
    public string Content { get; set; }
    
    public Report(string title, string content)
    {
        Title = title;
        Content = content;
    }
    
    public void Print()
    {
        Console.WriteLine($"=== {Title} ===");
        Console.WriteLine(Content);
    }
    
    public string GetPrintInfo() => $"Report: {Title}";
    
    public string Serialize() => $"{Title}|{Content}";
    
    public void Deserialize(string data)
    {
        var parts = data.Split('|');
        Title = parts[0];
        Content = parts[1];
    }
}

// Interface as type
IPrintable printable = new Report("Sales", "Q1 data...");
printable.Print();

ISerializable serializable = (ISerializable)printable;
string json = serializable.Serialize();
```

#### Example 5: Sealed & Records (Advanced)
```csharp
// Sealed class — inherit nahi kar sakte
public sealed class Configuration
{
    public string ApiKey { get; set; }
    public int Timeout { get; set; }
}
// public class ExtendedConfig : Configuration { }  // ❌ Error!

// Record — immutable data object
public record Student(string Name, int Age, string Grade);

// Record with methods
public record Order(int Id, decimal Amount)
{
    public decimal Tax => Amount * 0.18m;
    public decimal Total => Amount + Tax;
    
    public string GetInvoice() =>
        $"Order #{Id}: ₹{Total:F2} (Tax: ₹{Tax:F2})";
}

// Use records
var s1 = new Student("Rahul", 20, "A");
var s2 = s1 with { Age = 21 };  // Copy with modification
Console.WriteLine(s1 == s2);    // False (Age different)

var order = new Order(1001, 5000);
Console.WriteLine(order.GetInvoice());
```

---

## 3.3 💪 Generics

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 30 mins |

### Roman English Explanation
Generics se aap ek hi code multiple data types ke saath use kar sakte hain. Jaise `List<T>` — T ki jagah int, string, kuch bhi daal do.

### Examples

#### Example 1: Generic Method (Beginner)
```csharp
// Generic method — ek method sab types ke liye
public static T Max<T>(T a, T b) where T : IComparable<T>
{
    return a.CompareTo(b) > 0 ? a : b;
}

Console.WriteLine(Max(5, 10));      // 10 (int)
Console.WriteLine(Max(3.14, 2.71)); // 3.14 (double)
Console.WriteLine(Max("Apple", "Banana")); // Banana (string)
```

#### Example 2: Generic Class (Intermediate)
```csharp
public class Repository<T>
{
    private List<T> _items = new();
    
    public void Add(T item) => _items.Add(item);
    public T? Get(int index) => index < _items.Count ? _items[index] : default;
    public List<T> GetAll() => new(_items);
    public int Count => _items.Count;
    public void Clear() => _items.Clear();
}

// Use
var intRepo = new Repository<int>();
intRepo.Add(10);
intRepo.Add(20);
Console.WriteLine(intRepo.Get(0));  // 10

var stringRepo = new Repository<string>();
stringRepo.Add("Hello");
stringRepo.Add("World");
Console.WriteLine(stringRepo.Count);  // 2
```

#### Example 3: Generic Constraints (Intermediate)
```csharp
// Constraints: where T : ...
public class NumberProcessor<T> where T : struct, IComparable<T>
{
    public T Add(T a, T b)
    {
        dynamic da = a;
        dynamic db = b;
        return da + db;
    }
}

public class EntityService<T> where T : class, new()
{
    public T Create()
    {
        return new T();  // new() constraint required for this
    }
}

public interface IEntity { int Id { get; } }
public class EntityRepository<T> where T : class, IEntity
{
    public T? GetById(int id) { /* ... */ return null; }
}
```

#### Example 4: Generic Collections (Advanced)
```csharp
// Dictionary with complex types
Dictionary<string, List<int>> studentScores = new()
{
    ["Rahul"] = new() { 85, 92, 78 },
    ["Priya"] = new() { 90, 88, 95 },
    ["Amit"] = new() { 75, 80, 82 }
};

foreach (var (name, scores) in studentScores)
{
    double avg = scores.Average();
    Console.WriteLine($"{name}: {avg:F2}");
}
```

#### Example 5: Covariance & Contravariance (Advanced)
```csharp
// Covariance (out) — IEnumerable<Dog> → IEnumerable<Animal>
IEnumerable<Dog> dogs = new List<Dog>();
IEnumerable<Animal> animals = dogs;  // OK (covariant)

// Contravariance (in) — Action<Animal> → Action<Dog>
Action<Animal> animalAction = (a) => a.Eat();
Action<Dog> dogAction = animalAction;  // OK (contravariant)
dogAction(new Dog());

// Custom covariant interface
public interface IProducer<out T> { T Produce(); }
public interface IConsumer<in T> { void Consume(T item); }
```

---

# 🔴 MODULE 4: ADVANCED C#

---

## 4.1 🗄️ LINQ (Language Integrated Query)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 35 mins |

### Roman English Explanation
LINQ se aap arrays, lists, databases, XML — sab par SQL jaisa query likh sakte hain. Code clean aur readable ho jaata hai.

### Examples

```csharp
using System.Linq;

List<Student> students = new()
{
    new() { Name = "Rahul", Age = 20, Grade = "A", City = "Delhi" },
    new() { Name = "Priya", Age = 22, Grade = "A", City = "Mumbai" },
    new() { Name = "Amit", Age = 19, Grade = "B", City = "Delhi" },
    new() { Name = "Sneha", Age = 21, Grade = "A", City = "Pune" },
    new() { Name = "Rohan", Age = 23, Grade = "C", City = "Delhi" }
};

// Query syntax (SQL jaisa)
var delhiStudents = from s in students
                    where s.City == "Delhi"
                    orderby s.Name
                    select s;

// Method syntax (lambda)
var topStudents = students
    .Where(s => s.Grade == "A")
    .OrderByDescending(s => s.Age)
    .Select(s => new { s.Name, s.Age });

// Group by
var cityGroups = students
    .GroupBy(s => s.City)
    .Select(g => new { City = g.Key, Count = g.Count(), AvgAge = g.Average(s => s.Age) });

foreach (var group in cityGroups)
    Console.WriteLine($"{group.City}: {group.Count} students, Avg age: {group.AvgAge:F1}");

// Join
var grades = new[] { 
    new { Student = "Rahul", Subject = "Math", Score = 95 },
    new { Student = "Priya", Subject = "Science", Score = 88 }
};

var query = from s in students
            join g in grades on s.Name equals g.Student
            select new { s.Name, g.Subject, g.Score };

// Aggregate operations
Console.WriteLine(students.Count());              // 5
Console.WriteLine(students.Min(s => s.Age));     // 19
Console.WriteLine(students.Max(s => s.Age));     // 23
Console.WriteLine(students.Average(s => s.Age)); // 21
Console.WriteLine(students.Sum(s => s.Age));     // 105

// Any/All/Contains
bool hasAnyA = students.Any(s => s.Grade == "A");  // true
bool allAdults = students.All(s => s.Age >= 18);   // true

// Skip/Take (pagination)
var page = students.Skip(2).Take(2);  // 3rd and 4th student

// Distinct
var cities = students.Select(s => s.City).Distinct();
// Delhi, Mumbai, Pune

// First/Last/Single
var first = students.First(s => s.City == "Delhi");
var last = students.LastOrDefault(s => s.Grade == "Z");  // null

public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Grade { get; set; }
    public string City { get; set; }
}
```

---

## 4.2 🔷 Attributes & Reflection

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 30 mins |

### Roman English Explanation
Attributes se code ke baare mein extra information add karte hain (jaise tags). Reflection se runtime pe code ke baare mein information le sakte hain.

### Examples

```csharp
using System.Reflection;

// Custom attribute
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthorAttribute : Attribute
{
    public string Name { get; }
    public string? Version { get; set; }
    
    public AuthorAttribute(string name) => Name = name;
}

// Use attribute
[Author("Rahul", Version = "1.0")]
[Obsolete("Use NewService instead")]  // Built-in attribute
public class OldService
{
    [Author("Priya")]
    public void DoWork() { }
}

// Reflection — runtime pe code inspect karna
class ReflectionDemo
{
    public static void AnalyzeClass(Type type)
    {
        Console.WriteLine($"Class: {type.Name}");
        Console.WriteLine($"Namespace: {type.Namespace}");
        Console.WriteLine($"Is Public: {type.IsPublic}");
        
        // Get attributes
        var attributes = type.GetCustomAttributes(false);
        foreach (var attr in attributes)
            Console.WriteLine($"  Attribute: {attr}");
        
        // Get methods
        Console.WriteLine("\nMethods:");
        foreach (var method in type.GetMethods(BindingFlags.Public | BindingFlags.Instance))
        {
            Console.WriteLine($"  {method.ReturnType.Name} {method.Name}(" +
                string.Join(", ", method.GetParameters().Select(p => $"{p.ParameterType.Name} {p.Name}"))
            + ")");
        }
        
        // Get properties
        Console.WriteLine("\nProperties:");
        foreach (var prop in type.GetProperties())
            Console.WriteLine($"  {prop.PropertyType.Name} {prop.Name}");
    }
    
    // Dynamic invocation
    public static void InvokeMethod(string typeName, string methodName)
    {
        Type? type = Type.GetType(typeName);
        if (type == null) return;
        
        object? instance = Activator.CreateInstance(type);
        MethodInfo? method = type.GetMethod(methodName);
        method?.Invoke(instance, null);
    }
}
```

---

## 4.3 🔌 Entity Framework Core

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 40 mins |

### Roman English Explanation
Entity Framework Core (EF Core) ek ORM (Object-Relational Mapper) hai. Isse database tables ko C# classes ki tarah use kar sakte hain. SQL likhne ki zaroorat nahi.

### Examples

```csharp
using Microsoft.EntityFrameworkCore;

// Model classes
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
    
    // Navigation property
    public List<Enrollment> Enrollments { get; set; } = new();
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int Credits { get; set; }
    
    public List<Enrollment> Enrollments { get; set; } = new();
}

public class Enrollment
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int CourseId { get; set; }
    public DateTime EnrolledAt { get; set; }
    
    // Navigation properties
    public Student Student { get; set; }
    public Course Course { get; set; }
}

// DbContext
public class SchoolDbContext : DbContext
{
    public DbSet<Student> Students { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Enrollment> Enrollments { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer("Server=.;Database=SchoolDB;Trusted_Connection=True;");
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Enrollment>()
            .HasIndex(e => new { e.StudentId, e.CourseId })
            .IsUnique();
    }
}

// CRUD Operations
public class SchoolService
{
    public async Task<Student> CreateStudent(string name, int age, string email)
    {
        using var db = new SchoolDbContext();
        var student = new Student { Name = name, Age = age, Email = email };
        db.Students.Add(student);
        await db.SaveChangesAsync();
        return student;
    }
    
    public async Task<List<Student>> GetAllStudents()
    {
        using var db = new SchoolDbContext();
        return await db.Students
            .Include(s => s.Enrollments)
            .ThenInclude(e => e.Course)
            .OrderBy(s => s.Name)
            .ToListAsync();
    }
    
    public async Task<List<Student>> SearchStudents(string name)
    {
        using var db = new SchoolDbContext();
        return await db.Students
            .Where(s => s.Name.Contains(name))
            .ToListAsync();
    }
    
    public async Task EnrollStudent(int studentId, int courseId)
    {
        using var db = new SchoolDbContext();
        var enrollment = new Enrollment
        {
            StudentId = studentId,
            CourseId = courseId,
            EnrolledAt = DateTime.UtcNow
        };
        db.Enrollments.Add(enrollment);
        await db.SaveChangesAsync();
    }
}
```

---

# ⚫ MODULE 5: .NET ECOSYSTEM

---

## 5.1 🌐 ASP.NET Core Web API

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 45 mins |

### Roman English Explanation
ASP.NET Core se aap web applications aur REST APIs bana sakte hain. Ye cross-platform hai (Windows, Linux, Mac pe chalta hai).

### Minimal API (Modern)
```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Endpoints
app.MapGet("/", () => "Hello World!");

app.MapGet("/api/users", () => {
    return new[] {
        new { Id = 1, Name = "Rahul" },
        new { Id = 2, Name = "Priya" }
    };
});

app.MapGet("/api/users/{id}", (int id) => {
    return new { Id = id, Name = $"User {id}" };
});

app.MapPost("/api/users", (CreateUserRequest request) => {
    return Results.Created($"/api/users/1", request);
});

app.MapPut("/api/users/{id}", (int id, UpdateUserRequest request) => {
    return Results.NoContent();
});

app.MapDelete("/api/users/{id}", (int id) => {
    return Results.NoContent();
});

app.Run();

public record CreateUserRequest(string Name, string Email);
public record UpdateUserRequest(string Name, string? Email);
```

### Controller-based API
```csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private static readonly List<Product> Products = new();
    
    [HttpGet]
    public ActionResult<List<Product>> GetAll()
    {
        return Ok(Products);
    }
    
    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = Products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            return NotFound($"Product {id} not found");
        return Ok(product);
    }
    
    [HttpPost]
    public ActionResult<Product> Create([FromBody] Product product)
    {
        product.Id = Products.Count + 1;
        Products.Add(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }
    
    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Product updated)
    {
        var product = Products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            return NotFound();
        
        product.Name = updated.Name;
        product.Price = updated.Price;
        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var removed = Products.RemoveAll(p => p.Id == id);
        if (removed == 0)
            return NotFound();
        return NoContent();
    }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}
```

---

## 5.2 🎮 Unity Game Development

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 30 mins |

### Roman English Explanation
Unity world's most popular game engine hai. C# iska primary scripting language hai. 2D/3D games, VR/AR apps bana sakte hain.

### Basic Unity Script
```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private float speed = 5f;
    [SerializeField] private float jumpForce = 10f;
    
    private Rigidbody2D _rb;
    private bool _isGrounded;
    
    void Start()
    {
        _rb = GetComponent<Rigidbody2D>();
    }
    
    void Update()
    {
        // Movement
        float moveX = Input.GetAxis("Horizontal");
        Vector2 movement = new Vector2(moveX * speed, _rb.velocity.y);
        _rb.velocity = movement;
        
        // Jump
        if (Input.GetButtonDown("Jump") && _isGrounded)
        {
            _rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
        }
    }
    
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            _isGrounded = true;
        }
    }
    
    void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            _isGrounded = false;
        }
    }
    
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Collectible"))
        {
            Destroy(other.gameObject);
            ScoreManager.Instance.AddScore(10);
        }
    }
}
```

---

# 💼 INTERVIEW MODULE

---

## C# Interview Questions

### Beginner

**Q1: C# mein using statement kya karta hai?**
A: Namespace import karta hai (jaise `using System;`) aur resources automatically dispose karta hai (`using var file = new StreamReader("...")`).

**Q2: Value type aur reference type mein difference?**
A: Value type (int, bool, struct) stack mein store hota hai, direct value hold karta hai. Reference type (class, string, array) heap mein store hota hai, memory address hold karta hai.

**Q3: `ref` aur `out` mein kya difference hai?**
A: `ref` variable initialize karna padta hai pehle. `out` initialize nahi karna padta, method mein value assign karna mandatory hai.

**Q4: String interpolation kya hai?**
A: `$"Hello {name}"` — variables ko string mein directly embed kar sakte hain.

**Q5: `var` keyword kab use karte hain?**
A: Jab type name lamba ho ya obvious ho. Compile-time type inference hota hai, runtime dynamic nahi.

### Intermediate

**Q6: Abstract class aur interface mein kya difference hai?**
A: Abstract class mein implementation ho sakti hai, single inheritance. Interface sirf signatures, multiple implementation possible.

**Q7: `IEnumerable` aur `IQueryable` mein difference?**
A: `IEnumerable` in-memory collection pe filter karta hai (client-side). `IQueryable` database pe query bhejta hai (server-side) — efficient hai.

**Q8: LINQ query syntax aur method syntax mein difference?**
A: Query syntax `from s in students where s.Age > 18 select s` (SQL jaisa). Method syntax `students.Where(s => s.Age > 18)` (lambda). Dono same IL code generate karte hain.

**Q9: `StringBuilder` kab use karte hain?**
A: Jab multiple string concatenations karni ho. `StringBuilder` mutable hai, new string object nahi banata (performance better hai loops mein).

**Q10: Async/await kaise kaam karta hai?**
A: `async` method mark karta hai. `await` se method suspends ho jaata hai jab tak Task complete na ho. Thread block nahi hota. Compiler state machine banata hai.

### Advanced

**Q11: Garbage Collection kaise kaam karta hai?**
A: CLR automatically memory manage karta hai. 3 generations: Gen 0 (short-lived), Gen 1 (medium), Gen 2 (long-lived). GC unreferenced objects ko collect karta hai aur memory compact karta hai.

**Q12: Boxing aur Unboxing kya hai?**
A: Boxing — value type (int) ko object mein convert karna (heap allocation). Unboxing — object se value type mein convert karna. Performance hit hoti hai.

**Q13: `lock` statement kaise kaam karta hai?**
A: `lock(obj) { ... }` ensures ek thread at a time critical section mein enter kare. Monitor.Enter/Exit ka syntactic sugar hai.

**Q14: Dependency Injection kya hai?**
A: Objects apne dependencies khud create nahi karte, bahar se inject ki jaati hain. Three types: Constructor, Property, Method injection. Testing aur loose coupling ke liye.

**Q15: Middleware in ASP.NET Core kya hai?**
A: HTTP request pipeline mein components jo request process karte hain. Jaise Authentication, Logging, Static Files middlewares. `Use()`, `Map()`, `Run()` se configure karte hain.

---

## C# Cheat Sheet

```csharp
// Types
int num = 42;           // 32-bit integer
long bigNum = 999L;     // 64-bit integer
float f = 3.14f;        // 32-bit float
double d = 3.14;        // 64-bit double
decimal m = 99.99m;     // 128-bit decimal
bool flag = true;        // boolean
char c = 'A';            // character
string s = "Hello";      // string

// Nullable
int? age = null;
string? name = null;

// Collections
var list = new List<int> { 1, 2, 3 };
var dict = new Dictionary<string, int> { {"a", 1} };
var hash = new HashSet<int> { 1, 2, 3 };
var stack = new Stack<int>();
var queue = new Queue<int>();

// LINQ
var filtered = list.Where(x => x > 1);
var projected = list.Select(x => x * 2);
var ordered = list.OrderBy(x => x);
var sum = list.Sum();
var avg = list.Average();

// Async
async Task<string> GetDataAsync() {
    var result = await httpClient.GetStringAsync("url");
    return result;
}

// Properties
public string Name { get; set; }
public int Age { get; private set; }

// OOP
public class MyClass : BaseClass, IInterface {
    public MyClass() : base() { }
    public override void Method() { }
}

// Exception
try { }
catch (Exception ex) { }
finally { }

// File IO
File.WriteAllText("file.txt", "content");
var text = File.ReadAllText("file.txt");
```

---

## 🚀 Projects

### Beginner Projects
1. **Calculator** — Basic math operations
2. **Student Grade System** — Input marks, calculate grades
3. **To-Do List** — Console-based task manager
4. **ATM Simulator** — Deposit, withdraw, balance check
5. **Number Guessing Game** — Random number, hints

### Intermediate Projects
1. **Library Management** — CRUD with file storage
2. **Employee Payroll** — Calculate salaries, taxes
3. **Contact Book** — Search, add, edit contacts
4. **Quiz Application** — MCQ with scoring
5. **Expense Tracker** — Track income/expenses

### Advanced Projects
1. **E-Commerce API** — ASP.NET Core Web API
2. **Chat Application** — SignalR real-time chat
3. **Blog Platform** — EF Core, MVC, authentication
4. **Task Scheduler** — Background jobs with cron
5. **Game (Unity)** — 2D platformer or puzzle game

---

> **"C# — Microsoft ka superpower! .NET ke saath, kuch bhi possible hai!" 🎯🚀**

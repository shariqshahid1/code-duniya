import { Course } from "@/types";

export const csharpCourse: Course = {
  id: "csharp",
  title: "C# Programming",
  description: "C# programming language ko shuru se seekhein. .NET framework, OOP, LINQ, async programming aur practical projects ke saath.",
  longDescription: "C# ek modern, object-oriented programming language hai jo Microsoft ne .NET platform ke liye banayi hai. Is course mein aap C# ke basic syntax se lekar advanced concepts tak seekhenge.",
  category: "programming-languages",
  difficulty: "intermediate",
  icon: "code-2",
  color: "purple",
  lessonsCount: 7,
  duration: "8 hours",
  modules: [
    {
      id: "csharp-basics",
      title: "C# Basics aur Advanced Topics",
      description: "Microsoft .NET platform ke liye C# language complete guide.",
      order: 1,
      lessons: [
        {
          id: "csharp-intro",
          title: "C# Introduction aur .NET",
          description: "C# program structure, data types, variables aur input-output operations ko seekhein.",
          order: 1,
          duration: "45 min",
          content: {
            introduction: "C# ek modern, object-oriented programming language hai jo Microsoft ne .NET ke liye banayi hai. Yeh strongly-typed language hai. Is lesson mein C# structure, data types, variables aur .NET ecosystem ko samjhenge.",
            sections: [
              {
                title: "C# Program Structure",
                explanation: "C# program mein namespace, class aur Main method hota hai. using directive namespaces import karta hai. Console.ReadLine() input, Console.WriteLine() output ke liye hota hai.",
                example: "using System;\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine(\"Namaste C# Duniya!\");\n        Console.Write(\"Naam daalein: \");\n        string name = Console.ReadLine();\n        Console.WriteLine($\"Namaste {name}!\");\n    }\n}"
              },
              {
                title: "Data Types aur Variables",
                explanation: "C# strongly-typed hai - har variable ka type fix hota hai. Built-in types: int, long, float, double, decimal, char, bool, string. var keyword type inference karta hai. const compile-time constant hai.",
                example: "int age = 25;\ndouble price = 99.99;\nfloat discount = 10.5f;\nchar grade = 'A';\nbool isActive = true;\nstring name = \"Rahul\";\ndecimal salary = 50000.50m;\nvar count = 100;"
              },
              {
                title: "Input/Output aur String Interpolation",
                explanation: "Console.ReadLine() string return karta hai. String interpolation C# 6 se hai. Parse methods string se number convert karte hain. TryParse() safe conversion ke liye hai.",
                example: "Console.Write(\"Number: \");\nstring input = Console.ReadLine();\nif (int.TryParse(input, out int num)) {\n    Console.WriteLine($\"Square: {num * num}\");\n}"
              }
            ],
            codeExamples: [
              {
                title: "Temperature Converter",
                language: "csharp",
                code: "using System;\nclass Program {\n    static void Main() {\n        Console.Write(\"Celsius daalein: \");\n        if (double.TryParse(Console.ReadLine(), out double c)) {\n            double f = (c * 9 / 5) + 32;\n            Console.WriteLine($\"Fahrenheit: {f:F2}\");\n        }\n    }\n}"
              }
            ],
            notes: [
              "C# case-sensitive hai.",
              "Har statement ke end mein semicolon lagana zaroori hai.",
              "Main method program ka entry point hai.",
              "String interpolation C# 6+ feature hai.",
              ".NET Core cross-platform support karta hai."
            ],
            commonMistakes: [
              {
                mistake: "float/decimal literals ke saath suffix bhoolna",
                correction: "float ke liye 'f', decimal ke liye 'm' suffix lagayein."
              },
              {
                mistake: "Parse exceptions handle nahi karna",
                correction: "TryParse use karein ya try-catch mein wrap karein."
              }
            ],
            interviewQuestions: [
              "Value type aur reference type mein kya difference hai?",
              "var keyword kab use karna chahiye?"
            ],
            practiceExercises: [
              {
                question: "Program likho jo radius se circle ka area aur circumference calculate kare.",
                hint: "Math.PI use karo.",
                difficulty: "easy"
              },
              {
                question: "Calculator program likho jo do numbers aur operator lega.",
                hint: "switch expression ya if-else use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "csharp-intro-quiz",
              title: "C# Introduction Quiz",
              questions: [
                {
                  id: "csharp-intro-q1",
                  question: "C# program ka entry point kaunsa function hai?",
                  options: ["start()", "Main()", "init()", "run()"],
                  correctAnswer: 1,
                  explanation: "Main() method C# program ka entry point hota hai."
                },
                {
                  id: "csharp-intro-q2",
                  question: "C# mein string interpolation ke liye kaunsa prefix use hota hai?",
                  options: ["$", "@", "#", "%"],
                  correctAnswer: 0,
                  explanation: "$ prefix string interpolation ke liye use hota hai."
                },
                {
                  id: "csharp-intro-q3",
                  question: "decimal type literal ke saath kaunsa suffix lagta hai?",
                  options: ["f", "d", "m", "l"],
                  correctAnswer: 2,
                  explanation: "decimal ke liye 'm' (money) suffix lagta hai."
                }
              ]
            }
          }
        },
        {
          id: "csharp-control-flow",
          title: "Control Flow, Arrays aur Collections",
          description: "Conditional statements, loops, arrays aur generic collections ko seekhein.",
          order: 2,
          duration: "50 min",
          content: {
            introduction: "Control flow statements program ka flow control karte hain. Arrays fixed-size collections hain. List, Dictionary, HashSet dynamic collections hain.",
            sections: [
              {
                title: "Conditional Statements aur Switch",
                explanation: "if-else conditions ke basis par branches execute karta hai. switch statement multiple values match karta hai. C# 8 mein switch expression aaya hai.",
                example: "int marks = 85;\nif (marks >= 90) Console.WriteLine(\"A+\");\nelse if (marks >= 80) Console.WriteLine(\"A\");\nstring grade = marks switch {\n    >= 90 => \"A+\", >= 80 => \"A\", _ => \"B\"\n};"
              },
              {
                title: "Arrays",
                explanation: "Array fixed-size collection hai. Single, multidimensional, aur jagged arrays hote hain. Array class methods: Length, Sort(), Reverse().",
                example: "int[] numbers = { 10, 20, 30, 40, 50 };\nConsole.WriteLine($\"Length: {numbers.Length}\");\nforeach (int n in numbers) Console.Write($\"{n} \");\nArray.Sort(numbers);\nint[,] matrix = { { 1, 2 }, { 3, 4 } };"
              },
              {
                title: "Generic Collections",
                explanation: "List<T> dynamic array hai. Dictionary<TKey,TValue> key-value pairs. HashSet<T> unique elements. LINQ ke saath collections powerful hain.",
                example: "List<string> students = new() { \"Rahul\", \"Priya\" };\nDictionary<string, int> marks = new() {\n    { \"Rahul\", 85 }, { \"Priya\", 92 }\n};\nvar top = students.Where(s => s.Length > 4);"
              }
            ],
            codeExamples: [
              {
                title: "Student Manager",
                language: "csharp",
                code: "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        var students = new[] {\n            new { Name = \"Rahul\", Marks = 85 },\n            new { Name = \"Priya\", Marks = 92 }\n        };\n        var sorted = students.OrderByDescending(s => s.Marks);\n        foreach (var s in sorted)\n            Console.WriteLine($\"{s.Name}: {s.Marks}\");\n        Console.WriteLine($\"Avg: {students.Average(s => s.Marks):F2}\");\n    }\n}"
              }
            ],
            notes: [
              "foreach loop mein collection modify nahi kar sakte.",
              "Array fixed-size hai, dynamic ke liye List<T> use karein.",
              "Dictionary mein duplicate keys allowed nahi hain.",
              "LINQ powerful queries provide karti hai."
            ],
            commonMistakes: [
              {
                mistake: "foreach mein collection modify karna",
                correction: "for loop use karein modification ke liye."
              },
              {
                mistake: "Dictionary mein non-existent key access",
                correction: "ContainsKey() check karein ya TryGetValue() use karein."
              }
            ],
            interviewQuestions: [
              "Array aur List mein kya difference hai?",
              "foreach loop internal implementation?"
            ],
            practiceExercises: [
              {
                question: "10 numbers ka array lekar max, min, average find karo.",
                hint: "LINQ methods Max(), Min(), Average() use karo.",
                difficulty: "easy"
              },
              {
                question: "Dictionary se word frequency counter banao.",
                hint: "Sentence ko Split(' ') karo, har word count increment karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "csharp-control-flow-quiz",
              title: "Control Flow, Arrays aur Collections Quiz",
              questions: [
                {
                  id: "csharp-control-q1",
                  question: "Dynamic array ke liye kaunsa collection use hota hai?",
                  options: ["Array", "ArrayList", "List<T>", "Dictionary"],
                  correctAnswer: 2,
                  explanation: "List<T> dynamic array hai jo size automatically adjust karta hai."
                },
                {
                  id: "csharp-control-q2",
                  question: "LINQ ka full form?",
                  options: ["Language Integrated Query", "Library Integrated Query", "Language Interaction Query"],
                  correctAnswer: 0,
                  explanation: "LINQ ka full form Language Integrated Query hai."
                }
              ]
            }
          }
        },
        {
          id: "csharp-methods",
          title: "Methods, Parameters aur Error Handling",
          description: "Methods, ref/out/params parameters, extension methods aur exception handling seekhein.",
          order: 3,
          duration: "50 min",
          content: {
            introduction: "Methods C# mein code ko modular banate hain. ref, out, params parameters, method overloading, extension methods hain. Exception handling runtime errors handle karta hai.",
            sections: [
              {
                title: "Methods aur Parameters",
                explanation: "ref parameter original variable modify karta hai. out parameter bina initialization ke pass hota hai. params variable arguments allow karta hai.",
                example: "static int Add(int a, int b) => a + b;\nstatic void Swap(ref int a, ref int b) {\n    int t = a; a = b; b = t;\n}\nstatic bool TryDivide(int a, int b, out int r) {\n    if (b == 0) { r = 0; return false; }\n    r = a / b; return true;\n}"
              },
              {
                title: "Exception Handling",
                explanation: "try-catch-finally exceptions handle karta hai. finally hamesha execute hota hai. using statement disposable objects ke liye try-finally shortcut hai.",
                example: "try {\n    int a = int.Parse(Console.ReadLine());\n    int b = int.Parse(Console.ReadLine());\n    Console.WriteLine(a / b);\n} catch (DivideByZeroException) {\n    Console.WriteLine(\"Zero se divide nahi kar sakte!\");\n} catch (Exception ex) {\n    Console.WriteLine($\"Error: {ex.Message}\");\n} finally {\n    Console.WriteLine(\"Done\");\n}"
              },
              {
                title: "Extension Methods aur Lambda",
                explanation: "Extension methods existing types mein methods add karte hain. this keyword first parameter pe lagta hai. Lambda expressions anonymous functions hain.",
                example: "public static class StringExt {\n    public static string FirstUpper(this string s) {\n        if (string.IsNullOrEmpty(s)) return s;\n        return char.ToUpper(s[0]) + s.Substring(1);\n    }\n}\nFunc<int, int, int> add = (a, b) => a + b;\nConsole.WriteLine(\"rahul\".FirstUpper());"
              }
            ],
            codeExamples: [
              {
                title: "Custom Exception",
                language: "csharp",
                code: "using System;\nclass InsufficientFundsException : Exception {\n    public InsufficientFundsException(string msg) : base(msg) { }\n}\nclass Account {\n    decimal balance;\n    public void Withdraw(decimal a) {\n        if (a > balance) throw new InsufficientFundsException(\"Low balance\");\n        balance -= a;\n    }\n    public void Deposit(decimal a) => balance += a;\n}\nclass Program {\n    static void Main() {\n        var acc = new Account();\n        acc.Deposit(1000);\n        try { acc.Withdraw(2000); }\n        catch (InsufficientFundsException e) { Console.WriteLine(e.Message); }\n    }\n}"
              }
            ],
            notes: [
              "finally block hamesha execute hota hai.",
              "Exception filters (C# 6) se catch conditionally likh sakte hain.",
              "Extension methods LINQ ka foundation hain."
            ],
            commonMistakes: [
              {
                mistake: "Exception ko swallow karna",
                correction: "Exception ko hamesha log karein ya rethrow karein."
              },
              {
                mistake: "Extension method wrong namespace mein define karna",
                correction: "Extension methods ko import karna na bhoolen."
              }
            ],
            interviewQuestions: [
              "ref aur out mein kya difference hai?",
              "Extension method kaise kaam karta hai?"
            ],
            practiceExercises: [
              {
                question: "GCD calculate karne ka method likho.",
                hint: "Euclidean algorithm use karo.",
                difficulty: "medium"
              },
              {
                question: "Extension method banao jo string vowels count kare.",
                hint: "vowels set se compare karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "csharp-methods-quiz",
              title: "Methods aur Error Handling Quiz",
              questions: [
                {
                  id: "csharp-methods-q1",
                  question: "ref parameter mein initialization zaroori hai?",
                  options: ["Haan", "Nahi", "Optional"],
                  correctAnswer: 0,
                  explanation: "ref parameter ko call karne se pehle initialize karna zaroori hai."
                },
                {
                  id: "csharp-methods-q2",
                  question: "Hamesha execute hone wala block?",
                  options: ["try", "catch", "finally"],
                  correctAnswer: 2,
                  explanation: "finally block hamesha execute hota hai chahe exception aaye ya nahi."
                },
                {
                  id: "csharp-methods-q3",
                  question: "Extension method first parameter ke aage kaunsa keyword?",
                  options: ["ref", "this", "out"],
                  correctAnswer: 1,
                  explanation: "Extension method ke first parameter ke aage this keyword lagta hai."
                }
              ]
            }
          }
        },
        {
          id: "csharp-oop",
          title: "Object-Oriented Programming",
          description: "Classes, properties, constructors, inheritance, polymorphism aur interfaces seekhein.",
          order: 4,
          duration: "55 min",
          content: {
            introduction: "C# fully object-oriented hai. Classes, properties, constructors, inheritance, polymorphism, interfaces - OOP ke main concepts hain.",
            sections: [
              {
                title: "Classes, Properties aur Constructors",
                explanation: "Class blueprint hai. Properties get/set accessors hain. Constructors object initialize karte hain. Auto-implemented properties compiler field generate karta hai.",
                example: "public class Person {\n    public string Name { get; set; }\n    public int Age { get; set; }\n    public bool IsAdult => Age >= 18;\n    public Person(string n, int a) { Name = n; Age = a; }\n    public void Introduce() => Console.WriteLine($\"Hi, I'm {Name}\");\n}\nvar p = new Person(\"Rahul\", 25);\np.Introduce();"
              },
              {
                title: "Inheritance aur Polymorphism",
                explanation: "Derived class : Base class syntax se inherit karta hai. base keyword base class access karta hai. Virtual methods override kiye ja sakte hain. Abstract methods ka implementation derived class mein hota hai.",
                example: "abstract class Animal {\n    public abstract void MakeSound();\n    public virtual void Sleep() => Console.WriteLine(\"Sleeping\");\n}\nclass Dog : Animal {\n    public override void MakeSound() => Console.WriteLine(\"Bark!\");\n}\nAnimal pet = new Dog();\npet.MakeSound();"
              },
              {
                title: "Interfaces",
                explanation: "Interface pure abstraction hai - sirf method signatures. Class multiple interfaces implement kar sakti hai. Interface members public hain.",
                example: "interface IShape { double Area(); }\nclass Circle : IShape {\n    public double Radius { get; set; }\n    public double Area() => Math.PI * Radius * Radius;\n}\nIShape s = new Circle { Radius = 5 };\nConsole.WriteLine($\"Area: {s.Area():F2}\");"
              }
            ],
            codeExamples: [
              {
                title: "Banking System",
                language: "csharp",
                code: "using System;\nabstract class Account {\n    public string Number { get; }\n    protected decimal Balance { get; set; }\n    public Account(string n) { Number = n; }\n    public abstract void Withdraw(decimal a);\n    public void Deposit(decimal a) { Balance += a; }\n    public decimal GetBalance() => Balance;\n}\nclass Savings : Account {\n    private const decimal Rate = 0.04m;\n    public Savings(string n) : base(n) { }\n    public void ApplyInterest() { Balance += Balance * Rate; }\n    public override void Withdraw(decimal a) {\n        if (a > Balance) throw new Exception(\"Insufficient\");\n        Balance -= a;\n    }\n}\nclass Program {\n    static void Main() {\n        var s = new Savings(\"SAV001\");\n        s.Deposit(10000); s.ApplyInterest(); s.Withdraw(2000);\n        Console.WriteLine($\"Balance: {s.GetBalance():C}\");\n    }\n}"
              }
            ],
            notes: [
              "Base class constructor derived mein : base() se call hota hai.",
              "Sealed class inherit nahi kar sakte.",
              "Record types (C# 9) immutable data objects ke liye hain."
            ],
            commonMistakes: [
              {
                mistake: "Base class constructor call bhoolna",
                correction: ": base() derived class constructor mein use karein."
              },
              {
                mistake: "Interface mein access modifier dena",
                correction: "Interface members default public hain."
              }
            ],
            interviewQuestions: [
              "Abstract class aur interface mein kya difference hai?",
              "Polymorphism kya hai?"
            ],
            practiceExercises: [
              {
                question: "IVehicle interface banao jisme Start(), Stop() ho. Car aur Bike implement karein.",
                hint: "Interface methods signatures rakho, classes mein implement karo.",
                difficulty: "medium"
              },
              {
                question: "Library management system banao with Book class.",
                hint: "List<Book> use karo, LINQ se search karo.",
                difficulty: "hard"
              }
            ],
            quiz: {
              id: "csharp-oop-quiz",
              title: "Object-Oriented Programming Quiz",
              questions: [
                {
                  id: "csharp-oop-q1",
                  question: "Multiple inheritance C# mein kaise achieve hota hai?",
                  options: ["Multiple classes", "Interfaces", "Abstract classes"],
                  correctAnswer: 1,
                  explanation: "C# mein multiple inheritance interfaces ke through achieve kiya jaata hai."
                },
                {
                  id: "csharp-oop-q2",
                  question: "Base class member access ke liye kaunsa keyword?",
                  options: ["super", "parent", "base"],
                  correctAnswer: 2,
                  explanation: "base keyword base class ke members access karne ke liye use hota hai."
                },
                {
                  id: "csharp-oop-q3",
                  question: "C# 9 mein immutable objects ke liye kaunsa type?",
                  options: ["Class", "Struct", "Record"],
                  correctAnswer: 2,
                  explanation: "Record types C# 9 mein immutable data objects ke liye aaye hain."
                }
              ]
            }
          }
        },
        {
          id: "csharp-linq",
          title: "LINQ aur Lambda Expressions",
          description: "LINQ query syntax, method syntax, common operators aur deferred execution seekhein.",
          order: 5,
          duration: "50 min",
          content: {
            introduction: "LINQ (Language Integrated Query) data querying ko language ka hissa banata hai. LINQ collections, databases par query kar sakta hai. Lambda expressions anonymous functions hain.",
            sections: [
              {
                title: "LINQ Query aur Method Syntax",
                explanation: "Query syntax: from...where...select. Method syntax: extension methods like Where(), Select(). Deferred execution - query iterate karne par execute hoti hai.",
                example: "int[] numbers = { 5, 2, 8, 1, 9 };\nvar q = from n in numbers where n > 5 orderby n select n;\nvar m = numbers.Where(n => n > 5).OrderBy(n => n);\nvar list = numbers.OrderBy(n => n).ToList();"
              },
              {
                title: "Common Operators",
                explanation: "Where (filter), Select (project), OrderBy (sort), GroupBy, Aggregate, Take/Skip (paginate), Distinct (unique).",
                example: "var students = new[] {\n    new { Name = \"Rahul\", Marks = 85, City = \"Delhi\" },\n    new { Name = \"Priya\", Marks = 92, City = \"Mumbai\" }\n};\nvar groups = students.GroupBy(s => s.City);\nforeach (var g in groups)\n    Console.WriteLine($\"{g.Key}: {g.Count()} students\");"
              },
              {
                title: "Deferred Execution",
                explanation: "LINQ query tab execute hoti hai jab iterate karein. Isse performance efficient hai. Yield return enumerator implement karta hai.",
                example: "var nums = new List<int> { 1, 2, 3 };\nvar q = nums.Where(n => n > 1);\nnums.Add(4);\nforeach (var n in q) Console.WriteLine(n); // 2, 4"
              }
            ],
            codeExamples: [
              {
                title: "Employee Analysis",
                language: "csharp",
                code: "using System;\nusing System.Collections.Generic;\nusing System.Linq;\nvar employees = new List<Employee> {\n    new() { Name = \"Rahul\", Dept = \"IT\", Salary = 75000 },\n    new() { Name = \"Priya\", Dept = \"HR\", Salary = 65000 }\n};\nvar deptStats = employees.GroupBy(e => e.Dept).Select(g => new {\n    Dept = g.Key, Count = g.Count(), AvgSalary = g.Average(e => e.Salary)\n});\nforeach (var d in deptStats)\n    Console.WriteLine($\"{d.Dept}: {d.Count} emps, Avg: {d.AvgSalary:C}\");\nrecord Employee { public string Name { get; init; } public string Dept { get; init; } public decimal Salary { get; init; } }"
              }
            ],
            notes: [
              "LINQ deferred execution follow karta hai.",
              "IQueryable databases ke liye, IEnumerable in-memory ke liye.",
              "SelectMany nested collections flatten karta hai."
            ],
            commonMistakes: [
              {
                mistake: "Deferred execution ko ignore karna",
                correction: "Immediate execution ke liye ToList() use karein."
              },
              {
                mistake: "LINQ multiple enumeration",
                correction: "Ek baar materialize karein (ToList()) phir use karein."
              }
            ],
            interviewQuestions: [
              "IEnumerable aur IQueryable mein kya difference hai?",
              "SelectMany kya karta hai?"
            ],
            practiceExercises: [
              {
                question: "LINQ se longest word find karo string array mein.",
                hint: "OrderByDescending(s => s.Length).First()",
                difficulty: "easy"
              },
              {
                question: "LINQ se prime numbers filter karo.",
                hint: "Where clause mein custom IsPrime method.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "csharp-linq-quiz",
              title: "LINQ aur Lambda Quiz",
              questions: [
                {
                  id: "csharp-linq-q1",
                  question: "LINQ query actual execution kab hoti hai?",
                  options: ["Define karte hi", "Iterate karte waqt", "Compile time"],
                  correctAnswer: 1,
                  explanation: "LINQ query deferred execution follow karti hai - iterate karne par execute hoti hai."
                },
                {
                  id: "csharp-linq-q2",
                  question: "Nested collections flatten karne ka operator?",
                  options: ["Select", "SelectMany", "Flatten"],
                  correctAnswer: 1,
                  explanation: "SelectMany nested collections ko flatten karta hai."
                }
              ]
            }
          }
        },
        {
          id: "csharp-async",
          title: "Async/Await aur File I/O",
          description: "Asynchronous programming, async/await, file I/O operations aur Task Parallel Library seekhein.",
          order: 6,
          duration: "50 min",
          content: {
            introduction: "Asynchronous programming async/await se simple ban gaya hai. File I/O ke liye System.IO classes hain. async code blocking se bachta hai.",
            sections: [
              {
                title: "Async/Await Basics",
                explanation: "async keyword method ko asynchronous banata hai. await operation complete hone tak wait karta hai bina thread block kiye. async method typically Task return karta hai.",
                example: "public async Task<string> FetchDataAsync() {\n    using var client = new HttpClient();\n    return await client.GetStringAsync(\"https://api.example.com/data\");\n}\npublic async Task ProcessAsync() {\n    string data = await FetchDataAsync();\n    Console.WriteLine($\"Length: {data.Length}\");\n}\nawait ProcessAsync();"
              },
              {
                title: "File I/O Operations",
                explanation: "File class static methods provide karta hai. Async versions: ReadAllTextAsync, WriteAllTextAsync. StreamReader/StreamWriter text files ke liye.",
                example: "await File.WriteAllTextAsync(\"data.txt\", \"Hello C#!\");\nstring content = await File.ReadAllTextAsync(\"data.txt\");\nusing (var sr = new StreamReader(\"data.txt\")) {\n    while ((await sr.ReadLineAsync()) is string line)\n        Console.WriteLine(line);\n}"
              },
              {
                title: "Task Parallel Library",
                explanation: "Task.WhenAll() multiple tasks parallel run karta hai. Task.WhenAny() first complete task ka wait karta hai. Task.Run() CPU-bound work ke liye.",
                example: "var t1 = File.ReadAllTextAsync(\"f1.txt\");\nvar t2 = File.ReadAllTextAsync(\"f2.txt\");\nstring[] results = await Task.WhenAll(t1, t2);\nint result = await Task.Run(() => ComputeExpensive());"
              }
            ],
            codeExamples: [
              {
                title: "Async File Processor",
                language: "csharp",
                code: "using System;\nusing System.IO;\nusing System.Threading.Tasks;\nclass Program {\n    static async Task Main() {\n        string dir = @\"C:\\temp\\data\";\n        Directory.CreateDirectory(dir);\n        var tasks = new Task[3];\n        for (int i = 1; i <= 3; i++) {\n            string path = Path.Combine(dir, $\"f{i}.txt\");\n            tasks[i-1] = File.WriteAllTextAsync(path, $\"File {i}\");\n        }\n        await Task.WhenAll(tasks);\n        Console.WriteLine(\"All written\");\n        Directory.Delete(dir, true);\n    }\n}"
              }
            ],
            notes: [
              "async void sirf event handlers ke liye use karein.",
              "File I/O async versions prefer karein UI apps mein.",
              "ConfigureAwait(false) se context switching avoid karta hai."
            ],
            commonMistakes: [
              {
                mistake: "async void methods use karna",
                correction: "Task return karein taaki caller await kar sake."
              },
              {
                mistake: "Task.Result ya Task.Wait() use karna",
                correction: "Blocking se deadlock ho sakta hai. Hamesha await use karein."
              }
            ],
            interviewQuestions: [
              "async/await kaise kaam karta hai?",
              "Task.WhenAll vs Task.WhenAny?"
            ],
            practiceExercises: [
              {
                question: "3 websites async fetch karo aur lengths display karo.",
                hint: "HttpClient.GetStringAsync, Task.WhenAll use karo.",
                difficulty: "medium"
              },
              {
                question: "File monitor banao jo naye files ka content read kare.",
                hint: "FileSystemWatcher use karo.",
                difficulty: "hard"
              }
            ],
            quiz: {
              id: "csharp-async-quiz",
              title: "Async/Await aur File I/O Quiz",
              questions: [
                {
                  id: "csharp-async-q1",
                  question: "async method typically kaunsa type return karta hai?",
                  options: ["void", "Task", "int"],
                  correctAnswer: 1,
                  explanation: "async method typically Task ya Task<T> return karta hai."
                },
                {
                  id: "csharp-async-q2",
                  question: "Saare tasks complete hone tak wait karne wala method?",
                  options: ["Task.WhenAny", "Task.WhenAll", "Task.WaitAll"],
                  correctAnswer: 1,
                  explanation: "Task.WhenAll saare tasks complete hone tak wait karta hai."
                }
              ]
            }
          }
        },
        {
          id: "csharp-entity-framework",
          title: "Entity Framework Core",
          description: "DbContext, DbSet, CRUD operations, relationships aur migrations seekhein.",
          order: 7,
          duration: "55 min",
          content: {
            introduction: "EF Core .NET ka ORM hai jo C# objects ke saath database interact karta hai. DbContext, DbSet, migrations, LINQ queries, relationships seekhenge.",
            sections: [
              {
                title: "DbContext aur DbSet",
                explanation: "DbContext database session represent karta hai. DbSet<T> entities ka collection hai. OnConfiguring() database configure karta hai. Migrations schema version control hain.",
                example: "public class AppDbContext : DbContext {\n    public DbSet<Student> Students { get; set; }\n    protected override void OnConfiguring(DbContextOptionsBuilder o) {\n        o.UseSqlServer(@\"Server=.;Database=School;Trusted_Connection=True;\");\n    }\n}\npublic class Student { public int Id { get; set; } public string Name { get; set; } public int Age { get; set; } }"
              },
              {
                title: "CRUD Operations",
                explanation: "Add() create, LINQ read, property change + SaveChanges() update, Remove() delete karta hai. SaveChangesAsync() async version hai.",
                example: "using var db = new AppDbContext();\nvar s = new Student { Name = \"Rahul\", Age = 20 };\ndb.Students.Add(s); await db.SaveChangesAsync();\nvar found = await db.Students.FirstAsync(st => st.Name == \"Rahul\");\nfound.Age = 21; await db.SaveChangesAsync();\ndb.Students.Remove(found); await db.SaveChangesAsync();"
              },
              {
                title: "Relationships",
                explanation: "One-to-Many, Many-to-Many relationships hain. Navigation properties relationships define karte hain. Include() eager loading ke liye. ThenInclude() nested loading.",
                example: "public class Course { public int Id { get; set; } public string Title { get; set; } public ICollection<Student> Students { get; set; } }\nvar courses = await db.Courses.Include(c => c.Students).ToListAsync();"
              }
            ],
            codeExamples: [
              {
                title: "CRUD Application",
                language: "csharp",
                code: "using Microsoft.EntityFrameworkCore;\npublic class Product {\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public decimal Price { get; set; }\n}\npublic class StoreDb : DbContext {\n    public DbSet<Product> Products { get; set; }\n    protected override void OnConfiguring(DbContextOptionsBuilder o) => o.UseSqlServer(\"Server=.;Database=Store;Trusted_Connection=True;\");\n}\nclass Program {\n    static async Task Main() {\n        using var db = new StoreDb();\n        await db.Database.EnsureCreatedAsync();\n        db.Products.AddRange(\n            new Product { Name = \"Laptop\", Price = 75000 },\n            new Product { Name = \"Mobile\", Price = 25000 });\n        await db.SaveChangesAsync();\n        var products = await db.Products.Where(p => p.Price > 30000).ToListAsync();\n        foreach (var p in products) Console.WriteLine($\"{p.Name}: {p.price:C}\");\n    }\n}"
              }
            ],
            notes: [
              "Migrations schema changes track karte hain.",
              "AsNoTracking() read-only queries improve karta hai.",
              "EF Core in-memory database for testing support karta hai."
            ],
            commonMistakes: [
              {
                mistake: "N+1 query problem",
                correction: "Include() ya ThenInclude() use karein eager loading ke liye."
              },
              {
                mistake: "Connection string hardcode karna",
                correction: "appsettings.json se lein."
              }
            ],
            interviewQuestions: [
              "EF Core kya hai?",
              "Code-First vs Database-First?"
            ],
            practiceExercises: [
              {
                question: "Library system banao Book aur Author entities ke saath.",
                hint: "AuthorId foreign key rakho, Include() use karo.",
                difficulty: "hard"
              },
              {
                question: "Products CRUD banao price filter ke saath.",
                hint: "Where clause mein price range filter.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "csharp-ef-quiz",
              title: "Entity Framework Core Quiz",
              questions: [
                {
                  id: "csharp-ef-q1",
                  question: "Database session kaunsa class represent karta hai?",
                  options: ["DbSet", "DbContext", "Database"],
                  correctAnswer: 1,
                  explanation: "DbContext database session ko represent karta hai."
                },
                {
                  id: "csharp-ef-q2",
                  question: "Eager loading ke liye kaunsa method?",
                  options: ["Load()", "Include()", "Join()"],
                  correctAnswer: 1,
                  explanation: "Include() eager loading ke liye use hota hai."
                }
              ]
            }
          }
        },
        {
          id: "csharp-aspnet",
          title: "ASP.NET Core Basics",
          description: "ASP.NET Core architecture, controllers, minimal APIs aur dependency injection seekhein.",
          order: 8,
          duration: "55 min",
          content: {
            introduction: "ASP.NET Core cross-platform web framework hai. Middleware pipeline, controllers, dependency injection, minimal APIs seekhenge.",
            sections: [
              {
                title: "Architecture",
                explanation: "WebApplication builder pattern use karta hai. Middleware pipeline HTTP requests process karta hai. Kestrel default web server hai.",
                example: "var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();\nbuilder.Services.AddSwaggerGen();\nvar app = builder.Build();\nif (app.Environment.IsDevelopment()) { app.UseSwagger(); }\napp.MapControllers();\napp.Run();"
              },
              {
                title: "Controllers",
                explanation: "Controllers HTTP requests handle karte hain. [ApiController], [Route] attributes. Action methods GET, POST, PUT, DELETE handle karte hain.",
                example: "[ApiController]\n[Route(\"api/[controller]\")]\npublic class StudentsController : ControllerBase {\n    [HttpGet]\n    public async Task<IActionResult> GetAll([FromServices] AppDbContext db) {\n        return Ok(await db.Students.ToListAsync());\n    }\n    [HttpPost]\n    public async Task<IActionResult> Create(Student s, [FromServices] AppDbContext db) {\n        db.Students.Add(s); await db.SaveChangesAsync();\n        return CreatedAtAction(nameof(GetAll), new { id = s.Id }, s);\n    }\n}"
              },
              {
                title: "Minimal APIs",
                explanation: "Minimal APIs (C# 6+) simple HTTP APIs ke liye hain bina controllers ke. MapGet, MapPost, MapPut, MapDelete use karte hain.",
                example: "var app = WebApplication.Create();\napp.MapGet(\"/students\", async (AppDbContext db) => await db.Students.ToListAsync());\napp.MapGet(\"/students/{id}\", async (int id, AppDbContext db) => await db.Students.FindAsync(id) is Student s ? Results.Ok(s) : Results.NotFound());\napp.MapPost(\"/students\", async (Student s, AppDbContext db) => { db.Students.Add(s); await db.SaveChangesAsync(); return Results.Created($\"/students/{s.Id}\", s); });\napp.Run();"
              }
            ],
            codeExamples: [
              {
                title: "Todo API",
                language: "csharp",
                code: "using Microsoft.EntityFrameworkCore;\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddDbContext<TodoDb>(o => o.UseInMemoryDatabase(\"Todos\"));\nvar app = builder.Build();\napp.MapGet(\"/todos\", async (TodoDb db) => await db.Todos.ToListAsync());\napp.MapPost(\"/todos\", async (Todo t, TodoDb db) => {\n    db.Todos.Add(t); await db.SaveChangesAsync(); return Results.Created($\"/todos/{t.Id}\", t);\n});\napp.Run();\nclass Todo { public int Id { get; set; } public string Title { get; set; } public bool IsComplete { get; set; } }\nclass TodoDb : DbContext {\n    public TodoDb(DbContextOptions<TodoDb> o) : base(o) { }\n    public DbSet<Todo> Todos { get; set; }\n}"
              }
            ],
            notes: [
              "ASP.NET Core cross-platform hai - Windows, Linux, Mac.",
              "Middleware order important hai - auth before endpoints.",
              "Minimal APIs C# 6+ mein aaye hain."
            ],
            commonMistakes: [
              {
                mistake: "Middleware order galat rakhna",
                correction: "Correct order: ExceptionHandler, HSTS, HttpsRedirection, StaticFiles, Routing, Auth, Endpoints."
              }
            ],
            interviewQuestions: [
              "Middleware pipeline kya hai?",
              "Controllers vs Minimal APIs?"
            ],
            practiceExercises: [
              {
                question: "Minimal API banao jo products CRUD implement kare.",
                hint: "UseInMemoryDatabase, MapGet, MapPost, MapPut, MapDelete.",
                difficulty: "hard"
              },
              {
                question: "WeatherForecast API banao jo random temperature return kare.",
                hint: "Array of summaries, Random for temperature.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "csharp-aspnet-quiz",
              title: "ASP.NET Core Basics Quiz",
              questions: [
                {
                  id: "csharp-aspnet-q1",
                  question: "ASP.NET Core default web server?",
                  options: ["IIS", "Kestrel", "Apache"],
                  correctAnswer: 1,
                  explanation: "Kestrel ASP.NET Core ka default cross-platform web server hai."
                },
                {
                  id: "csharp-aspnet-q2",
                  question: "HTTP GET request attribute?",
                  options: ["[HttpGet]", "[HttpPost]", "[HttpPut]"],
                  correctAnswer: 0,
                  explanation: "[HttpGet] attribute HTTP GET requests handle karta hai."
                }
              ]
            }
          }
        },
        {
          id: "csharp-project",
          title: "Capstone Project - Task Manager API",
          description: "Complete Task Manager Web API banayenge ASP.NET Core aur EF Core ke saath.",
          order: 9,
          duration: "60 min",
          content: {
            introduction: "Complete Task Manager Web API banayenge ASP.NET Core aur EF Core ke saath. CRUD, relationships, async, dependency injection, error handling ka practical use.",
            sections: [
              {
                title: "Project Setup",
                explanation: "Do entities: User aur TaskItem. User ke multiple tasks hain. TaskItem mein Title, Description, DueDate, IsComplete, Priority fields. Repository pattern. DTOs data exposure ke liye.",
                example: "public class User { public int Id { get; set; } public string Name { get; set; } public ICollection<TaskItem> Tasks { get; set; } }\npublic class TaskItem { public int Id { get; set; } public string Title { get; set; } public DateTime DueDate { get; set; } public bool IsComplete { get; set; } public string Priority { get; set; } public int UserId { get; set; } public User User { get; set; } }"
              },
              {
                title: "Service Layer",
                explanation: "ITaskService interface methods define karta hai: GetAllAsync, GetByIdAsync, CreateAsync, UpdateAsync, DeleteAsync. Service class mein validation aur business logic.",
                example: "public interface ITaskService {\n    Task<IEnumerable<TaskDto>> GetAllAsync();\n    Task<TaskDto> GetByIdAsync(int id);\n    Task<TaskDto> CreateAsync(CreateTaskDto dto);\n}\npublic class TaskService : ITaskService {\n    private readonly AppDbContext _db;\n    public TaskService(AppDbContext db) { _db = db; }\n    public async Task<IEnumerable<TaskDto>> GetAllAsync() => await _db.Tasks.Select(t => new TaskDto { Id = t.Id, Title = t.Title, IsComplete = t.IsComplete }).ToListAsync();\n}"
              },
              {
                title: "Error Handling aur Testing",
                explanation: "Global exception middleware custom error responses ke liye. xUnit testing ke liye, Moq mocking ke liye.",
                example: "public class ExceptionMiddleware {\n    private readonly RequestDelegate _next;\n    public ExceptionMiddleware(RequestDelegate next) { _next = next; }\n    public async Task InvokeAsync(HttpContext ctx) {\n        try { await _next(ctx); }\n        catch (Exception ex) { ctx.Response.StatusCode = 500; await ctx.Response.WriteAsJsonAsync(new { error = ex.Message }); }\n    }\n}"
              }
            ],
            codeExamples: [
              {
                title: "Program.cs",
                language: "csharp",
                code: "var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();\nbuilder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString(\"Default\")));\nbuilder.Services.AddScoped<ITaskService, TaskService>();\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\nvar app = builder.Build();\napp.UseMiddleware<ExceptionMiddleware>();\napp.UseHttpsRedirection();\napp.UseAuthorization();\napp.MapControllers();\napp.Run();"
              }
            ],
            notes: [
              "Repository pattern data access centralize karta hai.",
              "DTOs unnecessary data exposure se bachate hain.",
              "Global exception handling consistent responses deta hai.",
              "xUnit .NET testing framework hai."
            ],
            commonMistakes: [
              {
                mistake: "DTOs na use karna",
                correction: "Hamesha DTOs use karein, entities directly expose na karein."
              },
              {
                mistake: "Error handling centrally na karna",
                correction: "Global exception middleware use karein."
              }
            ],
            interviewQuestions: [
              "DTO kya hota hai?",
              "Unit vs Integration testing?"
            ],
            practiceExercises: [
              {
                question: "CompletePriority endpoint add karo jo specific priority ke tasks complete mark kare.",
                hint: "Service mein naya method, LINQ Where clause.",
                difficulty: "medium"
              },
              {
                question: "Overdue tasks list karo (due date cross, incomplete).",
                hint: "Where(t => t.DueDate < DateTime.UtcNow && !t.IsComplete).",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "csharp-project-quiz",
              title: "Capstone Project Quiz",
              questions: [
                {
                  id: "csharp-project-q1",
                  question: "DTO ka full form?",
                  options: ["Data Transfer Object", "Database Table Object", "Data Type Operation"],
                  correctAnswer: 0,
                  explanation: "DTO ka full form Data Transfer Object hai."
                },
                {
                  id: "csharp-project-q2",
                  question: ".NET testing framework commonly used?",
                  options: ["JUnit", "xUnit", "pytest"],
                  correctAnswer: 1,
                  explanation: "xUnit .NET ecosystem mein commonly used testing framework hai."
                }
              ]
            }
          }
        }
      ]
    }
  ],
};

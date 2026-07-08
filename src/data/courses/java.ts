import { Course } from "@/types";

export const javaCourse: Course = {
  id: "java",
  title: "Java Programming",
  description: "Java programming language ko shuru se seekhein. OOP, Collections, Multithreading, JDBC aur Spring Boot basics ke saath.",
  longDescription: "Java ek object-oriented, platform-independent programming language hai. Is course mein aap Java basics, OOP, Collections, Exception Handling, Stream API, Multithreading, JDBC, Spring Boot aur ek capstone project seekhenge.",
  lessonsCount: 9,
  duration: "7 hours",
  category: "programming-languages",
  difficulty: "intermediate",
  icon: "code-2",
  color: "orange",
  modules: [
    {
      id: "java-basics",
      title: "Java Basics aur Advanced Topics",
      description: "Java programming language ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "java-intro",
          title: "Java Introduction",
          description: "Java basics, data types, variables, input/output seekhenge",
          order: 1,
          duration: "45 min",
          content: {
            introduction: "Java ek object-oriented, platform-independent programming language hai jo Sun Microsystems ne 1995 mein banayi. JVM (Java Virtual Machine) par chalti hai. Is lesson mein Java basics, data types, variables seekhenge.",
            sections: [
              {
                title: "Java Program Structure",
                explanation: "Java program mein class aur main method hota hai. public class file name jaisa hota hai. System.out.println() output ke liye, Scanner input ke liye.",
                example: "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Namaste Java Duniya!\");\n    }\n}"
              },
              {
                title: "Data Types aur Variables",
                explanation: "Java strongly-typed hai. Primitive types: byte, short, int, long, float, double, char, boolean. Reference types: String, arrays, classes. final keyword constant banata hai.",
                example: "int age = 25;\ndouble price = 99.99;\nchar grade = 'A';\nboolean isActive = true;\nString name = \"Rahul\";\nfinal double PI = 3.14159;"
              },
              {
                title: "Input/Output",
                explanation: "Scanner class user input ke liye. System.out.println() print with newline, System.out.print() without newline.",
                example: "import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nSystem.out.print(\"Naam: \");\nString name = sc.nextLine();\nSystem.out.print(\"Umar: \");\nint age = sc.nextInt();\nSystem.out.println(\"Namaste \" + name);"
              }
            ],
            codeExamples: [
              {
                title: "Simple Calculator",
                language: "java",
                code: "import java.util.Scanner;\nclass Calculator {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Number 1: \");\n        int a = sc.nextInt();\n        System.out.print(\"Number 2: \");\n        int b = sc.nextInt();\n        System.out.println(\"Sum: \" + (a + b));\n        System.out.println(\"Product: \" + (a * b));\n    }\n}"
              }
            ],
            notes: [
              "Java fila name .java extension ke saath hota hai.",
              "public class ka naam file name jaisa hona chahiye.",
              "main method program ka entry point hai.",
              "JVM bytecode execute karta hai, OS independent."
            ],
            commonMistakes: [
              {
                mistake: "main method signature galat likhna",
                correction: "public static void main(String[] args) exact syntax use karein."
              },
              {
                mistake: "Scanner close bhoolna",
                correction: "sc.close() call karein resource leak se bachne ke liye."
              }
            ],
            interviewQuestions: [
              "JVM, JRE, JDK mein kya difference hai? - JVM bytecode execute karta hai. JRE = JVM + libraries. JDK = JRE + development tools (compiler, debugger).",
              "Platform independence kaise achieve hoti hai? - Java code bytecode mein compile hota hai. Bytecode kisi bhi platform ke JVM par execute ho sakta hai."
            ],
            practiceExercises: [
              {
                question: "Program likho jo user ke naam aur birth year ko input le aur age calculate kare.",
                hint: "Current year - birth year. Calendar.getInstance() ya Year.now() use karo.",
                difficulty: "medium"
              },
              {
                question: "Simple interest calculator banao.",
                hint: "SI = (P * R * T) / 100. double datatype use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-intro-quiz",
              title: "Java Introduction Quiz",
              questions: [
                {
                  id: "java-intro-q1",
                  question: "Java program ka entry point?",
                  options: ["start()", "main()", "run()", "init()"],
                  correctAnswer: 1,
                  explanation: "Java program ka entry point main() method hota hai."
                },
                {
                  id: "java-intro-q2",
                  question: "Java bytecode execute karne wala?",
                  options: ["JRE", "JVM", "JDK", "Compiler"],
                  correctAnswer: 1,
                  explanation: "JVM (Java Virtual Machine) bytecode ko execute karta hai."
                },
                {
                  id: "java-intro-q3",
                  question: "Primitive data type nahi hai?",
                  options: ["int", "double", "String", "boolean"],
                  correctAnswer: 2,
                  explanation: "String primitive nahi hai, yeh ek reference type hai Java mein."
                }
              ]
            }
          }
        },
        {
          id: "java-oop",
          title: "Object-Oriented Programming",
          description: "Classes, objects, inheritance, polymorphism, interfaces seekhenge",
          order: 2,
          duration: "50 min",
          content: {
            introduction: "Java pure OOP language hai. Classes, objects, inheritance, polymorphism, encapsulation, abstraction sab concepts seekhenge.",
            sections: [
              {
                title: "Classes aur Objects",
                explanation: "Class blueprint hai. new keyword object banata hai. Constructor object initialize karta hai. this current object refer karta hai.",
                example: "class Student {\n    String name;\n    int age;\n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    void display() {\n        System.out.println(\"Name: \" + name + \", Age: \" + age);\n    }\n}\nStudent s = new Student(\"Rahul\", 20);\ns.display();"
              },
              {
                title: "Inheritance aur Polymorphism",
                explanation: "extends keyword se inheritance hota hai. super base class access karta hai. Method overriding derived class mein base method redefine karta hai.",
                example: "class Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println(\"Bark\"); }\n}\nAnimal a = new Dog();\na.sound(); // Polymorphism"
              },
              {
                title: "Interfaces aur Abstract Classes",
                explanation: "Interface pure abstraction (100%). Abstract class partial abstraction (0-100%). interface keyword, implements keyword. abstract class ke liye abstract keyword.",
                example: "interface Shape {\n    double area();\n}\nclass Circle implements Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    public double area() { return Math.PI * r * r; }\n}"
              }
            ],
            codeExamples: [
              {
                title: "Bank System",
                language: "java",
                code: "abstract class Account {\n    protected double balance;\n    Account(double b) { balance = b; }\n    abstract void withdraw(double a);\n    void deposit(double a) { balance += a; }\n    double getBalance() { return balance; }\n}\nclass Savings extends Account {\n    Savings(double b) { super(b); }\n    void withdraw(double a) {\n        if (a <= balance) balance -= a;\n        else System.out.println(\"Insufficient\");\n    }\n}\nclass Main {\n    public static void main(String[] args) {\n        Savings s = new Savings(10000);\n        s.withdraw(2000);\n        System.out.println(\"Balance: \" + s.getBalance());\n    }\n}"
              }
            ],
            notes: [
              "Java mein multiple inheritance classes se nahi, interfaces se hota hai.",
              "@Override annotation compile-time check karta hai.",
              "Constructor chain: derived class constructor base class constructor call karta hai."
            ],
            commonMistakes: [
              {
                mistake: "super() call bhoolna",
                correction: "Agar base class mein parameterized constructor hai to derived mein super(args) call karein."
              },
              {
                mistake: "Interface method ko public na banana",
                correction: "Interface methods default public hain, implementation class mein public likhna padega."
              }
            ],
            interviewQuestions: [
              "Abstract class vs Interface? - Abstract class mein state (fields) aur implementation ho sakti hai. Interface mein sirf abstract methods hain (Java 8+ mein default methods).",
              "Overloading vs Overriding? - Overloading compile-time (same name, different params). Overriding runtime (same signature, different implementation)."
            ],
            practiceExercises: [
              {
                question: "Shape interface banao jisme area() ho, Circle aur Rectangle implement karein.",
                hint: "Circle mein radius, Rectangle mein length/width.",
                difficulty: "medium"
              },
              {
                question: "Employee class banao jisme name, salary ho, Manager class inherit kare bonus logic ke saath.",
                hint: "super() use karo base class constructor call karne ke liye.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-oop-quiz",
              title: "Object-Oriented Programming Quiz",
              questions: [
                {
                  id: "java-oop-q1",
                  question: "Inheritance ke liye kaunsa keyword?",
                  options: ["implements", "extends", "inherits", "super"],
                  correctAnswer: 1,
                  explanation: "Java mein inheritance ke liye 'extends' keyword use hota hai."
                },
                {
                  id: "java-oop-q2",
                  question: "Interface implement karne ke liye kaunsa keyword?",
                  options: ["extends", "implements", "inherits", "abstract"],
                  correctAnswer: 1,
                  explanation: "Interface ko implement karne ke liye 'implements' keyword use hota hai."
                },
                {
                  id: "java-oop-q3",
                  question: "Base class constructor call karne ke liye?",
                  options: ["parent()", "base()", "super()", "this()"],
                  correctAnswer: 2,
                  explanation: "super() base class ka constructor call karne ke liye use hota hai."
                }
              ]
            }
          }
        },
        {
          id: "java-collections",
          title: "Collections Framework",
          description: "List, Set, Map interfaces aur unke implementations seekhenge",
          order: 3,
          duration: "45 min",
          content: {
            introduction: "Java Collections Framework data structures ka unified architecture hai. List, Set, Map, Queue interfaces aur unke implementations seekhenge.",
            sections: [
              {
                title: "List Interface",
                explanation: "List ordered collection hai, duplicates allow karta hai. ArrayList (dynamic array), LinkedList (doubly linked list). Generics type safety provide karte hain.",
                example: "import java.util.*;\nList<String> names = new ArrayList<>();\nnames.add(\"Rahul\"); names.add(\"Priya\"); names.add(\"Rahul\");\nSystem.out.println(names.get(0));\nfor (String n : names) System.out.println(n);\nCollections.sort(names);"
              },
              {
                title: "Set Interface",
                explanation: "Set unique elements ka collection hai. HashSet (hash-based, unordered), TreeSet (sorted), LinkedHashSet (insertion order). equals() aur hashCode() methods important hain.",
                example: "Set<Integer> numbers = new HashSet<>();\nnumbers.add(5); numbers.add(3); numbers.add(5);\nSystem.out.println(numbers.size()); // 2\nSet<String> sorted = new TreeSet<>();\nsorted.add(\"Banana\"); sorted.add(\"Apple\");\nSystem.out.println(sorted); // [Apple, Banana]"
              },
              {
                title: "Map Interface",
                explanation: "Map key-value pairs store karta hai. HashMap (hash-based), TreeMap (sorted keys), LinkedHashMap (insertion order). keySet(), values(), entrySet() methods.",
                example: "Map<String, Integer> marks = new HashMap<>();\nmarks.put(\"Rahul\", 85); marks.put(\"Priya\", 92);\nSystem.out.println(marks.get(\"Rahul\"));\nfor (Map.Entry<String, Integer> e : marks.entrySet())\n    System.out.println(e.getKey() + \": \" + e.getValue());"
              }
            ],
            codeExamples: [
              {
                title: "Student Marks Manager",
                language: "java",
                code: "import java.util.*;\nclass StudentManager {\n    public static void main(String[] args) {\n        Map<String, Integer> marks = new HashMap<>();\n        marks.put(\"Rahul\", 85); marks.put(\"Priya\", 92); marks.put(\"Amit\", 78);\n        System.out.println(\"Average: \" + marks.values().stream().mapToInt(i -> i).average().orElse(0));\n        marks.entrySet().stream()\n            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())\n            .forEach(e -> System.out.println(e.getKey() + \": \" + e.getValue()));\n    }\n}"
              }
            ],
            notes: [
              "ArrayList random access fast hai, insertion/deletion slow.",
              "HashSet O(1) operations, TreeSet O(log n).",
              "HashMap allows null key, Hashtable nahi.",
              "Stream API (Java 8+) collections ke saath powerful operations."
            ],
            commonMistakes: [
              {
                mistake: "ConcurrentModificationException",
                correction: "Iterator use karein ya CopyOnWriteArrayList collection modify karte waqt."
              },
              {
                mistake: "equals()/hashCode() override na karna custom objects mein",
                correction: "HashSet/HashMap custom objects ke saath use karne par dono override karein."
              }
            ],
            interviewQuestions: [
              "ArrayList vs LinkedList? - ArrayList O(1) access, O(n) insertion. LinkedList O(n) access, O(1) insertion/deletion at ends.",
              "HashMap internally kaise kaam karta hai? - Buckets array + linked list/tree. hashCode() se bucket calculate, equals() se key match. Java 8+ mein threshold ke baad tree."
            ],
            practiceExercises: [
              {
                question: "Word frequency counter banao Map use karke.",
                hint: "String.split(\" \") -> har word count increment karo.",
                difficulty: "medium"
              },
              {
                question: "Student list ko marks ke hisaab se sort karo (ascending aur descending).",
                hint: "Collections.sort() ya List.sort() with Comparator.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-collections-quiz",
              title: "Collections Framework Quiz",
              questions: [
                {
                  id: "java-collections-q1",
                  question: "ArrayList implements kaunsa interface?",
                  options: ["Set", "List", "Map", "Queue"],
                  correctAnswer: 1,
                  explanation: "ArrayList List interface ko implement karta hai Java collections mein."
                },
                {
                  id: "java-collections-q2",
                  question: "TreeSet elements kis order mein store karta hai?",
                  options: ["Insertion order", "Sorted order", "Random", "Hash order"],
                  correctAnswer: 1,
                  explanation: "TreeSet elements ko sorted order (ascending) mein store karta hai."
                },
                {
                  id: "java-collections-q3",
                  question: "HashMap mein null key allowed hai?",
                  options: ["Haan", "Nahi", "Only values", "Depends"],
                  correctAnswer: 0,
                  explanation: "HashMap ek null key aur multiple null values allow karta hai."
                }
              ]
            }
          }
        },
        {
          id: "java-exceptions",
          title: "Exception Handling",
          description: "Try-catch-finally, throw/throws, custom exceptions seekhenge",
          order: 4,
          duration: "40 min",
          content: {
            introduction: "Exception handling runtime errors handle karta hai. Checked aur unchecked exceptions, try-catch-finally, throw, throws, custom exceptions seekhenge.",
            sections: [
              {
                title: "Try-Catch-Finally",
                explanation: "try block suspicious code. catch specific exception handle karta hai. finally hamesha execute hota hai. Multiple catch blocks specific to general order mein.",
                example: "try {\n    int a = Integer.parseInt(args[0]);\n    int b = Integer.parseInt(args[1]);\n    System.out.println(\"Result: \" + (a / b));\n} catch (ArithmeticException e) {\n    System.out.println(\"Zero se divide nahi kar sakte\");\n} catch (NumberFormatException e) {\n    System.out.println(\"Invalid number\");\n} catch (Exception e) {\n    System.out.println(\"Error: \" + e.getMessage());\n} finally {\n    System.out.println(\"Program complete\");\n}"
              },
              {
                title: "Throw aur Throws",
                explanation: "throw manually exception generate karta hai. throws method signature mein declare karta hai ki yeh method exception throw kar sakta hai. Checked exceptions compile-time checked hote hain.",
                example: "class Validator {\n    static void validateAge(int age) throws IllegalArgumentException {\n        if (age < 0) throw new IllegalArgumentException(\"Age negative nahi ho sakta\");\n        if (age > 150) throw new IllegalArgumentException(\"Invalid age\");\n        System.out.println(\"Valid age: \" + age);\n    }\n    public static void main(String[] args) {\n        try { validateAge(-5); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n    }\n}"
              },
              {
                title: "Custom Exceptions",
                explanation: "Custom exception class Exception ya RuntimeException extend karti hai. Custom exceptions application-specific errors ke liye hain.",
                example: "class InsufficientFundsException extends Exception {\n    InsufficientFundsException(String msg) { super(msg); }\n}\nclass BankAccount {\n    double balance;\n    void withdraw(double a) throws InsufficientFundsException {\n        if (a > balance) throw new InsufficientFundsException(\"Balance insufficient\");\n        balance -= a;\n    }\n}"
              }
            ],
            codeExamples: [
              {
                title: "Bank Transaction",
                language: "java",
                code: "class InsufficientFundsException extends Exception {\n    InsufficientFundsException(String msg) { super(msg); }\n}\nclass Account {\n    double balance;\n    Account(double b) { balance = b; }\n    void withdraw(double a) throws InsufficientFundsException {\n        if (a > balance) throw new InsufficientFundsException(\"Insufficient: have \" + balance + \", need \" + a);\n        balance -= a;\n        System.out.println(\"Withdrawn: \" + a + \", Balance: \" + balance);\n    }\n}\nclass Main {\n    public static void main(String[] args) {\n        Account a = new Account(1000);\n        try { a.withdraw(1500); }\n        catch (InsufficientFundsException e) { System.out.println(e.getMessage()); }\n    }\n}"
              }
            ],
            notes: [
              "Checked exceptions: Exception subclasses (except RuntimeException). Handle ya declare karna mandatory.",
              "Unchecked exceptions: RuntimeException subclasses. Handle optional.",
              "try-with-resources (Java 7+) auto-close resources implement AutoCloseable."
            ],
            commonMistakes: [
              {
                mistake: "Exception ko swallow karna (empty catch)",
                correction: "Exception ko log karein ya rethrow karein."
              },
              {
                mistake: "Finally block mein return statement",
                correction: "Finally mein return try ke return ko override kar deta hai - avoid karein."
              }
            ],
            interviewQuestions: [
              "Checked vs Unchecked exception? - Checked: compile-time check, handle/declear mandatory. Unchecked: runtime, optional handling. Checked: IOException, SQLException. Unchecked: NullPointerException, ArithmeticException.",
              "try-with-resources kya hai? - Java 7+ feature jo AutoCloseable resources automatically close karta hai. Finally block ki zaroorat nahi."
            ],
            practiceExercises: [
              {
                question: "Division program likho jo multiple exceptions handle kare.",
                hint: "ArithmeticException, InputMismatchException, ArrayIndexOutOfBoundsException handle karo.",
                difficulty: "medium"
              },
              {
                question: "Custom exception InvalidEmailException banao aur email validation mein use karo.",
                hint: "Exception extend karo, @ aur . check karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-exceptions-quiz",
              title: "Exception Handling Quiz",
              questions: [
                {
                  id: "java-exceptions-q1",
                  question: "Hamesha execute hone wala block?",
                  options: ["try", "catch", "finally", "throw"],
                  correctAnswer: 2,
                  explanation: "finally block exception aaye ya na aaye, hamesha execute hota hai."
                },
                {
                  id: "java-exceptions-q2",
                  question: "Checked exception ke liye kaunsa keyword use method mein?",
                  options: ["throw", "throws", "exception", "declare"],
                  correctAnswer: 1,
                  explanation: "throws keyword method signature mein possible exceptions declare karta hai."
                },
                {
                  id: "java-exceptions-q3",
                  question: "Java 7+ auto resource close feature?",
                  options: ["try-finally", "try-with-resources", "auto-close", "resource-try"],
                  correctAnswer: 1,
                  explanation: "try-with-resources Java 7+ mein aaya jo resources auto-close karta hai."
                }
              ]
            }
          }
        },
        {
          id: "java-streams",
          title: "Stream API aur Lambda",
          description: "Lambda expressions, Stream API operations, parallel streams seekhenge",
          order: 5,
          duration: "45 min",
          content: {
            introduction: "Java 8 mein Stream API aur Lambda expressions aaye. Functional programming style, pipeline operations, parallel processing seekhenge.",
            sections: [
              {
                title: "Lambda Expressions",
                explanation: "Lambda -> syntax se anonymous functions. Functional interfaces (single abstract method). Predicate, Function, Consumer, Supplier built-in functional interfaces hain.",
                example: "List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\nnums.forEach(n -> System.out.println(n));\nPredicate<Integer> isEven = n -> n % 2 == 0;\nFunction<Integer, Integer> square = n -> n * n;\nConsumer<String> print = s -> System.out.println(s);"
              },
              {
                title: "Stream Operations",
                explanation: "Stream pipeline: source -> intermediate operations -> terminal operation. Intermediate: filter, map, sorted, distinct, limit. Terminal: forEach, collect, count, reduce, anyMatch, findFirst.",
                example: "List<Integer> nums = Arrays.asList(5, 2, 8, 1, 9, 2);\nList<Integer> result = nums.stream()\n    .filter(n -> n > 3)\n    .map(n -> n * n)\n    .sorted()\n    .distinct()\n    .collect(Collectors.toList());\nSystem.out.println(result);\nint sum = nums.stream().reduce(0, Integer::sum);"
              },
              {
                title: "Parallel Streams",
                explanation: "parallelStream() ya stream().parallel() se parallel processing. Fork-Join pool use karta hai. Large datasets ke liye beneficial. Thread-safety important hai.",
                example: "List<Integer> bigList = new ArrayList<>();\nfor (int i = 0; i < 1000000; i++) bigList.add(i);\nlong start = System.currentTimeMillis();\nlong sum = bigList.parallelStream().mapToLong(i -> i).sum();\nlong end = System.currentTimeMillis();\nSystem.out.println(\"Sum: \" + sum + \", Time: \" + (end-start) + \"ms\");"
              }
            ],
            codeExamples: [
              {
                title: "Employee Processing",
                language: "java",
                code: "import java.util.*;\nimport java.util.stream.*;\nclass Employee {\n    String name; String dept; double salary;\n    Employee(String n, String d, double s) { name = n; dept = d; salary = s; }\n}\nclass Main {\n    public static void main(String[] args) {\n        List<Employee> emps = Arrays.asList(\n            new Employee(\"Rahul\", \"IT\", 75000),\n            new Employee(\"Priya\", \"HR\", 65000),\n            new Employee(\"Amit\", \"IT\", 85000)\n        );\n        Map<String, Double> avgSalary = emps.stream()\n            .collect(Collectors.groupingBy(\n                e -> e.dept,\n                Collectors.averagingDouble(e -> e.salary)\n            ));\n        avgSalary.forEach((dept, avg) -> System.out.println(dept + \": \" + avg));\n        List<String> topPaid = emps.stream()\n            .sorted(Comparator.comparingDouble(e -> -e.salary))\n            .limit(2).map(e -> e.name).collect(Collectors.toList());\n        System.out.println(\"Top paid: \" + topPaid);\n    }\n}"
              }
            ],
            notes: [
              "Stream lazily evaluated hota hai - terminal operation par execute hota hai.",
              "Stream ek baar use kar sakte hain, reuse nahi.",
              "Parallel streams ka order guaranteed nahi hai.",
              "Method reference (::) lambda ka shorthand hai."
            ],
            commonMistakes: [
              {
                mistake: "Stream ko multiple baar use karna",
                correction: "Stream ek baar hi use kar sakte hain. Naya stream banayein agar phir se chahiye."
              },
              {
                mistake: "Parallel stream mein shared mutable state",
                correction: "Parallel streams mein thread-safe collectors ya reduction use karein."
              }
            ],
            interviewQuestions: [
              "Intermediate vs Terminal operations? - Intermediate lazy hain, Stream return karte hain (filter, map). Terminal Stream consume karte hain, result produce karte hain (collect, forEach).",
              "Stateful vs Stateless operations? - Stateless (filter, map) - element independent process. Stateful (sorted, distinct) - previous elements ka state maintain karte hain."
            ],
            practiceExercises: [
              {
                question: "Strings list mein se longest word find karo Stream use karke.",
                hint: "max(Comparator.comparingInt(String::length))",
                difficulty: "medium"
              },
              {
                question: "Numbers list ko prime numbers filter karo Stream API se.",
                hint: "filter mein custom isPrime method use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-streams-quiz",
              title: "Stream API aur Lambda Quiz",
              questions: [
                {
                  id: "java-streams-q1",
                  question: "Stream terminal operation nahi hai?",
                  options: ["filter", "collect", "reduce", "forEach"],
                  correctAnswer: 0,
                  explanation: "filter ek intermediate operation hai, terminal operation nahi."
                },
                {
                  id: "java-streams-q2",
                  question: "Method reference operator?",
                  options: ["->", "::", "=>", ".:"],
                  correctAnswer: 1,
                  explanation: "Java mein method reference operator :: hai, jaise System.out::println."
                },
                {
                  id: "java-streams-q3",
                  question: "Parallel stream banane ka method?",
                  options: ["parallel()", "parallelStream()", "Dono", "none"],
                  correctAnswer: 2,
                  explanation: "parallelStream() aur stream().parallel() dono parallel stream banate hain."
                }
              ]
            }
          }
        },
        {
          id: "java-multithreading",
          title: "Multithreading",
          description: "Thread creation, synchronization, executor service seekhenge",
          order: 6,
          duration: "45 min",
          content: {
            introduction: "Java multithreading concurrent execution allow karta hai. Thread class, Runnable interface, synchronization, executor service seekhenge.",
            sections: [
              {
                title: "Thread Creation",
                explanation: "Thread class extend karke ya Runnable interface implement karke thread bana sakte hain. start() method thread start karta hai. sleep() pause karta hai.",
                example: "class MyThread extends Thread {\n    public void run() {\n        for (int i = 1; i <= 5; i++)\n            System.out.println(getName() + \": \" + i);\n    }\n}\nclass MyRunnable implements Runnable {\n    public void run() {\n        System.out.println(\"Runnable thread\");\n    }\n}\nnew MyThread().start();\nnew Thread(new MyRunnable()).start();\n// Lambda\nnew Thread(() -> System.out.println(\"Lambda thread\")).start();"
              },
              {
                title: "Synchronization",
                explanation: "synchronized keyword critical section protect karta hai. Multiple threads ko shared resource access control karta hai. synchronized block ya method do tareeke hain.",
                example: "class Counter {\n    private int count = 0;\n    public synchronized void increment() { count++; }\n    public synchronized int getCount() { return count; }\n}\nclass Main {\n    public static void main(String[] args) throws InterruptedException {\n        Counter c = new Counter();\n        Thread t1 = new Thread(() -> { for(int i=0; i<1000; i++) c.increment(); });\n        Thread t2 = new Thread(() -> { for(int i=0; i<1000; i++) c.increment(); });\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println(\"Count: \" + c.getCount()); // 2000\n    }\n}"
              },
              {
                title: "Executor Service",
                explanation: "ExecutorService thread pool management karta hai. newFixedThreadPool(), newCachedThreadPool(), newSingleThreadExecutor(). submit() task submit karta hai, shutdown() pool band karta hai.",
                example: "import java.util.concurrent.*;\nExecutorService executor = Executors.newFixedThreadPool(3);\nfor (int i = 0; i < 5; i++) {\n    executor.submit(() -> {\n        System.out.println(Thread.currentThread().getName() + \" running\");\n    });\n}\nexecutor.shutdown();\n// Callable with return value\nFuture<Integer> future = executor.submit(() -> {\n    Thread.sleep(1000);\n    return 42;\n});\nInteger result = future.get(); // Blocks until done"
              }
            ],
            codeExamples: [
              {
                title: "Producer-Consumer",
                language: "java",
                code: "import java.util.concurrent.*;\nclass SharedQueue {\n    private BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(5);\n    public void produce(int item) throws InterruptedException {\n        queue.put(item);\n        System.out.println(\"Produced: \" + item);\n    }\n    public int consume() throws InterruptedException {\n        int item = queue.take();\n        System.out.println(\"Consumed: \" + item);\n        return item;\n    }\n}\nclass Main {\n    public static void main(String[] args) {\n        SharedQueue sq = new SharedQueue();\n        new Thread(() -> {\n            for (int i = 1; i <= 10; i++) try { sq.produce(i); } catch (Exception e) {}\n        }).start();\n        new Thread(() -> {\n            for (int i = 1; i <= 10; i++) try { sq.consume(); } catch (Exception e) {}\n        }).start();\n    }\n}"
              }
            ],
            notes: [
              "Thread states: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.",
              "Deadlock tab hota jab threads circular dependency mein locked ho jaate hain.",
              "volatile keyword visibility guarantee karta hai, not atomicity.",
              "Concurrent collections (ConcurrentHashMap) thread-safe hain."
            ],
            commonMistakes: [
              {
                mistake: "Thread mein run() directly call karna instead of start()",
                correction: "start() naya thread banata hai, run() current thread mein execute hota hai."
              },
              {
                mistake: "Synchronization na karna shared resources par",
                correction: "Shared mutable state ko hamesha synchronize karein."
              }
            ],
            interviewQuestions: [
              "Thread vs Runnable? - Thread class extend karna inheritance limit karta hai. Runnable interface implement karna flexible hai (class kuch aur bhi extend kar sakti hai).",
              "Deadlock se kaise bachein? - Lock ka consistent order, tryLock() use karein, lock timeout, deadlock detection algorithms."
            ],
            practiceExercises: [
              {
                question: "3 threads banao jo 1-10 print karein alternately.",
                hint: "wait()/notify() ya Semaphore use karo.",
                difficulty: "medium"
              },
              {
                question: "ExecutorService use karke file download tasks ko parallel run karo.",
                hint: "Callable use karo jo file URL se download kare.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-multithreading-quiz",
              title: "Multithreading Quiz",
              questions: [
                {
                  id: "java-multithreading-q1",
                  question: "Thread start karne ka method?",
                  options: ["run()", "start()", "begin()", "execute()"],
                  correctAnswer: 1,
                  explanation: "start() method naya thread create karta hai, run() directly call mat karein."
                },
                {
                  id: "java-multithreading-q2",
                  question: "Thread-safe BlockingQueue implement?",
                  options: ["ArrayBlockingQueue", "LinkedList", "ArrayList", "Stack"],
                  correctAnswer: 0,
                  explanation: "ArrayBlockingQueue thread-safe BlockingQueue implementation hai Java mein."
                },
                {
                  id: "java-multithreading-q3",
                  question: "Variable visibility guarantee keyword?",
                  options: ["synchronized", "volatile", "transient", "static"],
                  correctAnswer: 1,
                  explanation: "volatile keyword variable ki visibility guarantee karta hai threads ke beech."
                }
              ]
            }
          }
        },
        {
          id: "java-jdbc",
          title: "JDBC aur Database Connectivity",
          description: "JDBC basics, PreparedStatement, transaction management seekhenge",
          order: 7,
          duration: "40 min",
          content: {
            introduction: "JDBC (Java Database Connectivity) Java se database connect karne ka API hai. Connection, Statement, ResultSet, PreparedStatement seekhenge.",
            sections: [
              {
                title: "JDBC Basics",
                explanation: "DriverManager.getConnection() se connection. Statement se queries execute. executeQuery() SELECT ke liye, executeUpdate() INSERT/UPDATE/DELETE ke liye.",
                example: "import java.sql.*;\nClass.forName(\"com.mysql.cj.jdbc.Driver\");\nConnection conn = DriverManager.getConnection(\"jdbc:mysql://localhost:3306/school\", \"root\", \"password\");\nStatement stmt = conn.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM students\");\nwhile (rs.next()) {\n    System.out.println(rs.getInt(\"id\") + \": \" + rs.getString(\"name\"));\n}\nconn.close();"
              },
              {
                title: "PreparedStatement",
                explanation: "PreparedStatement pre-compiled query hai, SQL injection se bachata hai. Parameters (? placeholders) set karte hain setInt, setString methods se.",
                example: "String sql = \"INSERT INTO students (name, age) VALUES (?, ?)\";\nPreparedStatement pstmt = conn.prepareStatement(sql);\npstmt.setString(1, \"Rahul\");\npstmt.setInt(2, 20);\nint rows = pstmt.executeUpdate();\nSystem.out.println(rows + \" row(s) inserted\");\n// SELECT\nString query = \"SELECT * FROM students WHERE age > ?\";\nPreparedStatement ps = conn.prepareStatement(query);\nps.setInt(1, 18);\nResultSet rs = ps.executeQuery();"
              },
              {
                title: "Transaction Management",
                explanation: "setAutoCommit(false) transaction start. commit() changes save, rollback() undo. Transactions multiple operations ko atomic banate hain.",
                example: "conn.setAutoCommit(false);\ntry {\n    stmt.executeUpdate(\"UPDATE accounts SET balance = balance - 1000 WHERE id = 1\");\n    stmt.executeUpdate(\"UPDATE accounts SET balance = balance + 1000 WHERE id = 2\");\n    conn.commit();\n    System.out.println(\"Transfer successful\");\n} catch (SQLException e) {\n    conn.rollback();\n    System.out.println(\"Transfer failed: \" + e.getMessage());\n} finally {\n    conn.setAutoCommit(true);\n}"
              }
            ],
            codeExamples: [
              {
                title: "CRUD Application",
                language: "java",
                code: "import java.sql.*;\nclass StudentCRUD {\n    static final String URL = \"jdbc:mysql://localhost:3306/school\";\n    static final String USER = \"root\";\n    static final String PASS = \"password\";\n    public static void main(String[] args) throws Exception {\n        Connection conn = DriverManager.getConnection(URL, USER, PASS);\n        // CREATE\n        PreparedStatement ps = conn.prepareStatement(\"INSERT INTO students (name, age) VALUES (?, ?)\");\n        ps.setString(1, \"Priya\"); ps.setInt(2, 22);\n        ps.executeUpdate();\n        // READ\n        ResultSet rs = conn.createStatement().executeQuery(\"SELECT * FROM students\");\n        while (rs.next()) System.out.println(rs.getInt(\"id\") + \": \" + rs.getString(\"name\") + \", \" + rs.getInt(\"age\"));\n        // UPDATE\n        PreparedStatement up = conn.prepareStatement(\"UPDATE students SET age = ? WHERE name = ?\");\n        up.setInt(1, 23); up.setString(2, \"Priya\");\n        up.executeUpdate();\n        // DELETE\n        PreparedStatement dp = conn.prepareStatement(\"DELETE FROM students WHERE name = ?\");\n        dp.setString(1, \"Priya\");\n        dp.executeUpdate();\n        conn.close();\n    }\n}"
              }
            ],
            notes: [
              "Hamesha resources (Connection, Statement, ResultSet) close karein ya try-with-resources use karein.",
              "PreparedStatement ke saath SQL injection possible nahi hai.",
              "Connection pooling (HikariCP) performance improve karta hai."
            ],
            commonMistakes: [
              {
                mistake: "SQL injection vulnerable Statement use karna",
                correction: "Hamesha PreparedStatement use karein dynamic queries ke liye."
              },
              {
                mistake: "Database resources close na karna",
                correction: "try-with-resources use karein ya finally mein close karein."
              }
            ],
            interviewQuestions: [
              "Statement vs PreparedStatement? - PreparedStatement pre-compiled hai, SQL injection proof, performant hai repeated queries ke liye.",
              "Connection pooling kya hai? - Database connections ka pool maintain karta hai. Connection creation overhead reduce hota hai. HikariCP popular pool hai."
            ],
            practiceExercises: [
              {
                question: "Employee table CRUD operations implement karo JDBC se.",
                hint: "Employee class banao, PreparedStatement use karo.",
                difficulty: "medium"
              },
              {
                question: "Bank transfer transaction implement karo with commit/rollback.",
                hint: "setAutoCommit(false), commit() success par, rollback() failure par.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-jdbc-quiz",
              title: "JDBC aur Database Connectivity Quiz",
              questions: [
                {
                  id: "java-jdbc-q1",
                  question: "SQL injection se bachne ke liye kaunsa use karein?",
                  options: ["Statement", "PreparedStatement", "CallableStatement", "SimpleStatement"],
                  correctAnswer: 1,
                  explanation: "PreparedStatement SQL injection se bachata hai kyunki queries pre-compile hoti hain."
                },
                {
                  id: "java-jdbc-q2",
                  question: "SELECT query ke liye kaunsa method?",
                  options: ["execute()", "executeQuery()", "executeUpdate()", "executeSelect()"],
                  correctAnswer: 1,
                  explanation: "executeQuery() SELECT queries ke liye use hota hai aur ResultSet return karta hai."
                },
                {
                  id: "java-jdbc-q3",
                  question: "Transaction commit karne ka method?",
                  options: ["save()", "commit()", "confirm()", "flush()"],
                  correctAnswer: 1,
                  explanation: "JDBC mein transaction commit karne ke liye commit() method use hota hai."
                }
              ]
            }
          }
        },
        {
          id: "java-spring",
          title: "Spring Boot Basics",
          description: "Spring Boot setup, REST controllers, dependency injection seekhenge",
          order: 8,
          duration: "50 min",
          content: {
            introduction: "Spring Boot modern Java web applications banane ka popular framework hai. Auto-configuration, starters, dependency injection, REST APIs seekhenge.",
            sections: [
              {
                title: "Spring Boot Setup",
                explanation: "@SpringBootApplication main class. Embedded Tomcat. Starters (spring-boot-starter-web) dependencies simplify karte hain. application.properties configuration ke liye.",
                example: "@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}\n# application.properties\nserver.port=8080\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb"
              },
              {
                title: "REST Controllers",
                explanation: "@RestController REST API endpoints. @RequestMapping/@GetMapping/@PostMapping request mapping. @RequestBody JSON to object. @PathVariable URL parameters.",
                example: "@RestController\n@RequestMapping(\"/api/students\")\npublic class StudentController {\n    @Autowired\n    private StudentRepository repo;\n    \n    @GetMapping\n    public List<Student> getAll() { return repo.findAll(); }\n    \n    @GetMapping(\"/{id}\")\n    public Student getById(@PathVariable Long id) {\n        return repo.findById(id).orElseThrow();\n    }\n    \n    @PostMapping\n    public Student create(@RequestBody Student s) { return repo.save(s); }\n}"
              },
              {
                title: "Dependency Injection",
                explanation: "@Autowired dependency inject karta hai. @Component/@Service/@Repository stereotype annotations. Constructor injection preferred hai.",
                example: "@Service\npublic class StudentService {\n    private final StudentRepository repo;\n    \n    public StudentService(StudentRepository repo) { this.repo = repo; } // Constructor injection\n    \n    public List<Student> getTopStudents() {\n        return repo.findAll().stream()\n            .filter(s -> s.getMarks() >= 80)\n            .collect(Collectors.toList());\n    }\n}\n@RestController\npublic class StudentController {\n    private final StudentService service;\n    StudentController(StudentService service) { this.service = service; }\n}"
              }
            ],
            codeExamples: [
              {
                title: "Spring Boot REST API",
                language: "java",
                code: "@SpringBootApplication\npublic class Main { public static void main(String[] args) { SpringApplication.run(Main.class, args); } }\n@Entity\nclass Product {\n    @Id @GeneratedValue private Long id;\n    private String name;\n    private Double price;\n    // getters/setters\n}\ninterface ProductRepo extends JpaRepository<Product, Long> {}\n@RestController\n@RequestMapping(\"/products\")\nclass ProductController {\n    private final ProductRepo repo;\n    ProductController(ProductRepo repo) { this.repo = repo; }\n    @GetMapping List<Product> all() { return repo.findAll(); }\n    @PostMapping Product create(@RequestBody Product p) { return repo.save(p); }\n    @GetMapping(\"/{id}\") Product byId(@PathVariable Long id) { return repo.findById(id).orElseThrow(); }\n    @DeleteMapping(\"/{id}\") void delete(@PathVariable Long id) { repo.deleteById(id); }\n}"
              }
            ],
            notes: [
              "Spring Boot auto-configuration reduce boilerplate.",
              "Spring Data JPA database access simplify karta hai.",
              "Actuator production monitoring endpoints provide karta hai.",
              "Spring Security authentication/authorization ke liye."
            ],
            commonMistakes: [
              {
                mistake: "Field injection use karna instead of constructor injection",
                correction: "Constructor injection preferred hai - testing easy, immutable, required dependencies ensure."
              },
              {
                mistake: "@Autowired ka overuse",
                correction: "Constructor injection use karein, @Autowired optional hai modern Spring mein."
              }
            ],
            interviewQuestions: [
              "Spring Boot vs Spring? - Spring Boot auto-configuration, embedded server, starters provide karta hai. Convention over configuration follow karta hai.",
              "Dependency Injection ke kya faide hain? - Loose coupling, testability, maintainability, flexibility. Dependencies externally provided hote hain."
            ],
            practiceExercises: [
              {
                question: "Spring Boot REST API banao jisme Task entity ho aur CRUD endpoints hon.",
                hint: "JpaRepository extend karo, @RestController use karo.",
                difficulty: "medium"
              },
              {
                question: "Student marks average endpoint banao jo database se marks lekar average return kare.",
                hint: "Service layer mein calculation, @GetMapping mein return.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-spring-quiz",
              title: "Spring Boot Basics Quiz",
              questions: [
                {
                  id: "java-spring-q1",
                  question: "@SpringBootApplication mein kya shamil hai?",
                  options: ["@Configuration, @EnableAutoConfiguration, @ComponentScan", "@Controller, @Service, @Repository", "@GetMapping, @PostMapping, @PutMapping", "Only @SpringBootConfiguration"],
                  correctAnswer: 0,
                  explanation: "@SpringBootApplication mein @Configuration, @EnableAutoConfiguration, @ComponentScan shamil hain."
                },
                {
                  id: "java-spring-q2",
                  question: "Preferred injection type Spring mein?",
                  options: ["Field injection", "Setter injection", "Constructor injection", "Method injection"],
                  correctAnswer: 2,
                  explanation: "Constructor injection Spring mein preferred hai - immutable aur testable."
                },
                {
                  id: "java-spring-q3",
                  question: "Spring Data JPA mein interface extend karna parta hai?",
                  options: ["CrudRepository", "JpaRepository", "Dono", "DataRepository"],
                  correctAnswer: 2,
                  explanation: "CrudRepository aur JpaRepository dono Spring Data JPA mein extend kar sakte hain."
                }
              ]
            }
          }
        },
        {
          id: "java-project",
          title: "Capstone Project - Task Management System",
          description: "Complete Spring Boot project with JPA, validation, exception handling aur testing",
          order: 9,
          duration: "60 min",
          content: {
            introduction: "Complete Task Management System banayenge Spring Boot, JPA, REST API ke saath. CRUD, validation, exception handling, testing seekhenge.",
            sections: [
              {
                title: "Entity Design aur Repository",
                explanation: "User aur Task entities. Relationships One-to-Many. JpaRepository CRUD methods provide karta hai. Custom queries @Query annotation se.",
                example: "@Entity\nclass User {\n    @Id @GeneratedValue private Long id;\n    private String name;\n    private String email;\n    @OneToMany(mappedBy = \"user\", cascade = CascadeType.ALL)\n    private List<Task> tasks;\n}\n@Entity\nclass Task {\n    @Id @GeneratedValue private Long id;\n    private String title; private String description;\n    private LocalDate dueDate; private boolean completed;\n    @ManyToOne private User user;\n}\ninterface TaskRepo extends JpaRepository<Task, Long> {\n    List<Task> findByUserId(Long userId);\n    List<Task> findByCompletedFalseAndDueDateBefore(LocalDate date);\n}"
              },
              {
                title: "Service aur Controller",
                explanation: "Service layer business logic. DTOs data transfer. Exception handling @ControllerAdvice se globally.",
                example: "@Service\nclass TaskService {\n    private final TaskRepo repo;\n    TaskService(TaskRepo repo) { this.repo = repo; }\n    public TaskDto createTask(CreateTaskDto dto) {\n        Task t = new Task();\n        t.setTitle(dto.getTitle());\n        t.setDueDate(dto.getDueDate());\n        return toDto(repo.save(t));\n    }\n    public List<TaskDto> getOverdueTasks() {\n        return repo.findByCompletedFalseAndDueDateBefore(LocalDate.now())\n            .stream().map(this::toDto).collect(Collectors.toList());\n    }\n    private TaskDto toDto(Task t) { /* mapping */ }\n}\n@RestController\n@RequestMapping(\"/api/tasks\")\nclass TaskController {\n    private final TaskService service;\n    TaskController(TaskService s) { service = s; }\n    @PostMapping TaskDto create(@Valid @RequestBody CreateTaskDto dto) { return service.createTask(dto); }\n    @GetMapping(\"/overdue\") List<TaskDto> overdue() { return service.getOverdueTasks(); }\n    @PutMapping(\"/{id}/complete\") TaskDto complete(@PathVariable Long id) { return service.markComplete(id); }\n}"
              },
              {
                title: "Validation aur Testing",
                explanation: "@Valid, @NotBlank, @NotNull validation annotations. @ControllerAdvice global exception handler. MockMvc testing. @WebMvcTest controller tests.",
                example: "class CreateTaskDto {\n    @NotBlank(message = \"Title required\")\n    private String title;\n    @Future(message = \"Due date future mein hona chahiye\")\n    private LocalDate dueDate;\n}\n@ControllerAdvice\nclass GlobalExceptionHandler {\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<?> handleValidation(MethodArgumentNotValidException ex) {\n        Map<String, String> errors = new HashMap<>();\n        ex.getBindingResult().getFieldErrors().forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));\n        return ResponseEntity.badRequest().body(errors);\n    }\n}\n@WebMvcTest\nclass TaskControllerTest {\n    @Autowired private MockMvc mockMvc;\n    @MockBean private TaskService service;\n    @Test void getTasks_ReturnsList() throws Exception {\n        mockMvc.perform(get(\"/api/tasks\"))\n            .andExpect(status().isOk());\n    }\n}"
              }
            ],
            codeExamples: [
              {
                title: "Application Properties",
                language: "java",
                code: "# application.properties\nserver.port=8080\nspring.datasource.url=jdbc:h2:mem:taskdb\nspring.datasource.driver-class-name=org.h2.Driver\nspring.jpa.hibernate.ddl-auto=create-drop\nspring.h2.console.enabled=true\nspring.jpa.show-sql=true"
              }
            ],
            notes: [
              "Validation annotations (@NotBlank, @Email, @Future) request validation ke liye.",
              "Global exception handling consistent responses deta hai.",
              "H2 in-memory database development/testing ke liye.",
              "Lombok (@Data, @NoArgsConstructor) boilerplate reduce karta hai."
            ],
            commonMistakes: [
              {
                mistake: "Entity directly expose karna API mein",
                correction: "DTOs use karein. Entities internal representation hain."
              },
              {
                mistake: "Custom query @Query mein syntax error",
                correction: "JPQL ya native SQL syntax check karein."
              }
            ],
            interviewQuestions: [
              "DTOs kyun use karte hain? - API contract stable rakhta hai, entities change hone par API unaffected. Security - sensitive fields expose nahi hote.",
              "@ControllerAdvice kya karta hai? - Global exception handler - saare controllers ke exceptions ek jagah handle karta hai. Consistent error response format."
            ],
            practiceExercises: [
              {
                question: "Priority field add karo Task mein aur priority-wise filtering endpoint banao.",
                hint: "Enum Priority { LOW, MEDIUM, HIGH }. Repository mein findByPriority method.",
                difficulty: "medium"
              },
              {
                question: "Pagination support add karo getAll endpoint mein.",
                hint: "Spring Data Pageable parameter. Page<T> return type.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "java-project-quiz",
              title: "Capstone Project - Task Management System Quiz",
              questions: [
                {
                  id: "java-project-q1",
                  question: "@Valid annotation kya karta hai?",
                  options: ["Validation enable", "Authorization check", "Authentication", "Logging"],
                  correctAnswer: 0,
                  explanation: "@Valid annotation request body validation enable karta hai Spring Boot mein."
                },
                {
                  id: "java-project-q2",
                  question: "Testing ke liye in-memory database?",
                  options: ["MySQL", "PostgreSQL", "H2", "Oracle"],
                  correctAnswer: 2,
                  explanation: "H2 in-memory database testing aur development ke liye use hota hai."
                },
                {
                  id: "java-project-q3",
                  question: "Spring Boot mein REST controller annotation?",
                  options: ["@Controller", "@RestController", "@WebService", "@Endpoint"],
                  correctAnswer: 1,
                  explanation: "@RestController @Controller + @ResponseBody combine karta hai JSON responses ke liye."
                }
              ]
            }
          }
        }
      ]
    }
  ],
};

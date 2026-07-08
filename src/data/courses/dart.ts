import { Course } from "@/types";

export const dartCourse: Course = {
  id: "dart",
  title: "Dart Programming",
  description: "Dart programming language ko seekhein. Flutter ka core language, OOP, async, streams, collections ke saath.",
  longDescription: "Dart Google ka client-optimized programming language hai, Flutter ka core language. Is course mein aap Dart ke basics se lekar advanced concepts tak seekhenge.",
  category: "mobile",
  difficulty: "intermediate",
  icon: "code-2",
  color: "blue",
  lessonsCount: 5,
  duration: "6 hours",
  modules: [
    {
      id: "dart-basics",
      title: "Dart Basics aur Advanced Topics",
      description: "Dart language ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "dart-intro",
          title: "Dart Introduction",
          description: "Dart variables, data types, control flow, functions aur collections ko seekhein.",
          order: 1,
          duration: "50 min",
          content: {
            introduction: "Dart Google ka programming language hai, Flutter ka core language. Client-optimized, multi-platform. Is lesson mein Dart syntax, data types, variables, control flow seekhenge.",
            sections: [
              {
                title: "Variables aur Data Types",
                explanation: "Dart strongly-typed. var, final, const. Built-in types: int, double, String, bool, List, Map, Set, Runes, Symbol. Null safety (?, !, late). Type inference with var.",
                example: "void main() {\n  var name = 'Rahul';\n  final age = 25;\n  const pi = 3.14159;\n  int marks = 85;\n  double percentage = 85.5;\n  bool isPassed = true;\n  String greeting = 'Namaste Dart!';\n  List<int> scores = [90, 85, 88];\n  Map<String, dynamic> student = {'name': 'Rahul', 'marks': 85};\n  // Null safety\n  String? nullable = null;\n  String nonNull = nullable ?? 'Default';\n  print('$greeting ${student['name']}');\n}"
              },
              {
                title: "Control Flow aur Functions",
                explanation: "if-else, switch, for, for-in, while, do-while. Functions first-class objects. Arrow syntax =>. Required vs optional parameters. Named/positional parameters.",
                example: "bool isEven(int n) => n % 2 == 0;\nString greet(String name, {String prefix = 'Hello'}) => '$prefix, $name!';\nvoid process(List<int> items) {\n  for (var item in items) {\n    if (item > 5) print(item);\n  }\n  items.forEach((i) => print(i));\n  items.where((i) => i > 5).map((i) => i * 2).forEach(print);\n}\nvoid main() {\n  print(greet('Rahul'));\n  print(greet('Priya', prefix: 'Namaste'));\n}"
              },
              {
                title: "Collections",
                explanation: "List (ordered), Set (unique), Map (key-value). Collection literals. Spread operator (...). Null-aware spread (...?). Collection if/for. Cascade notation (..).",
                example: "void main() {\n  List<int> list = [1, 2, 3];\n  var list2 = [0, ...list, 4, 5];\n  var list3 = [for (var i in list) i * 2];\n  Set<int> set = {1, 2, 3, 2, 1};\n  Map<String, int> marks = {'Rahul': 85, 'Priya': 92};\n  // Cascade\n  list..add(6)..removeAt(0)..sort();\n  // Collection if\n  var items = [1, 2, if (true) 3];\n}"
              }
            ],
            codeExamples: [
              {
                title: "Complete Program",
                language: "dart",
                code: "class Student {\n  final String name;\n  final int marks;\n  const Student(this.name, this.marks);\n  String get grade => marks >= 90 ? 'A' : (marks >= 80 ? 'B' : 'C');\n  @override String toString() => '$name: $marks ($grade)';\n}\nvoid main() {\n  var students = [\n    Student('Rahul', 85),\n    Student('Priya', 92),\n    Student('Amit', 78),\n  ];\n  students.sort((a, b) => b.marks.compareTo(a.marks));\n  students.forEach(print);\n  var avg = students.map((s) => s.marks).reduce((a, b) => a + b) / students.length;\n  print('Average: $avg');\n  var toppers = students.where((s) => s.marks >= 80).toList();\n  print('Toppers: ${toppers.length}');\n}"
              }
            ],
            notes: [
              "Dart null safety: ? nullable, ! assertion, late lazy init.",
              "final single-assign runtime, const compile-time constant.",
              "Cascade (..) same object par multiple operations.",
              "Arrow syntax => single expression functions."
            ],
            commonMistakes: [
              {
                mistake: "Null check na karna nullable variable ka",
                correction: "?, ??, ??=, ! operators use karein safe access ke liye."
              },
              {
                mistake: "const constructor ka use na karna",
                correction: "const constructor immutable objects ke liye use karein."
              }
            ],
            interviewQuestions: [
              "Dart null safety features?",
              "final vs const?"
            ],
            practiceExercises: [
              {
                question: "Program likho jo list mein se even numbers filter kare aur square kare.",
                hint: "where((n) => n % 2 == 0).map((n) => n * n).toList()",
                difficulty: "easy"
              },
              {
                question: "Student class with name, marks, grade, and display method.",
                hint: "factory constructor, getter for grade, toString override.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "dart-intro-quiz",
              title: "Dart Introduction Quiz",
              questions: [
                {
                  id: "dart-intro-q1",
                  question: "Dart null assertion operator?",
                  options: ["?", "!", "??", "?."],
                  correctAnswer: 1,
                  explanation: "! null assertion operator non-nullable assertion ke liye use hota hai."
                },
                {
                  id: "dart-intro-q2",
                  question: "Single expression function syntax?",
                  options: ["=>", "->", "::", "fn"],
                  correctAnswer: 0,
                  explanation: "=> arrow syntax single expression functions ke liye use hota hai."
                },
                {
                  id: "dart-intro-q3",
                  question: "Cascade notation operator?",
                  options: ["..", "->", "=>", "..,"],
                  correctAnswer: 0,
                  explanation: ".. cascade notation same object par multiple operations allow karta hai."
                }
              ]
            }
          }
        },
        {
          id: "dart-oop",
          title: "Object-Oriented Programming",
          description: "Classes, constructors, inheritance, mixins, generics aur abstract classes seekhein.",
          order: 2,
          duration: "55 min",
          content: {
            introduction: "Dart OOP concepts: classes, inheritance, mixins, interfaces, abstract classes, generics seekhenge.",
            sections: [
              {
                title: "Classes aur Constructors",
                explanation: "class keyword. Constructor: default, named, factory. Initializer list. super keyword. this keyword. Getters/setters. static members.",
                example: "class Person {\n  final String name;\n  final int age;\n  // Constructor\n  Person(this.name, this.age);\n  // Named constructor\n  Person.guest() : name = 'Guest', age = 0;\n  // Named constructor with init list\n  Person.fromJson(Map<String, dynamic> json) : name = json['name'], age = json['age'];\n  // Factory (can return subtype)\n  factory Person.random() => Person('Random', 20);\n  // Getter\n  bool get isAdult => age >= 18;\n  // Method\n  void introduce() => print('Hi, I\\'m $name');\n}"
              },
              {
                title: "Inheritance aur Mixins",
                explanation: "extends inheritance. super base call. abstract class. with mixin keyword. Mixins code reuse without inheritance. mixin declaration. on keyword restricts mixin use.",
                example: "abstract class Animal {\n  void makeSound();\n  void sleep() => print('Sleeping...');\n}\nmixin Flyable {\n  void fly() => print('Flying');\n}\nmixin Swimmable on Animal {\n  void swim() => print('$runtimeType swimming');\n}\nclass Dog extends Animal {\n  @override void makeSound() => print('Bark');\n}\nclass Duck extends Animal with Flyable, Swimmable {\n  @override void makeSound() => print('Quack');\n}\nvoid main() {\n  var d = Duck()\n    ..makeSound()\n    ..fly()\n    ..swim();\n}"
              },
              {
                title: "Generics aur Collections",
                explanation: "Generic classes/functions code reuse. T type parameter. extends bound. Collections: List, Set, Map with generics. Iterable operations: map, where, reduce, fold.",
                example: "class Box<T> {\n  T value;\n  Box(this.value);\n  T getValue() => value;\n}\nclass Stack<T> {\n  final List<T> _items = [];\n  void push(T item) => _items.add(item);\n  T pop() => _items.removeLast();\n  T get top => _items.last;\n  bool get isEmpty => _items.isEmpty;\n}\n// Generic function\nT first<T>(List<T> items) => items[0];\nvoid main() {\n  var box = Box<int>(42);\n  var stack = Stack<String>();\n  stack.push('a'); stack.push('b');\n  print(stack.pop());\n  // Iterable\n  var nums = [1, 2, 3, 4, 5];\n  var sum = nums.fold(0, (a, b) => a + b);\n  var evenSquares = nums.where((n) => n.isEven).map((n) => n * n).toList();\n}"
              }
            ],
            codeExamples: [
              {
                title: "Complete Bank System",
                language: "dart",
                code: "abstract class Account {\n  final String number;\n  double _balance;\n  Account(this.number, this._balance);\n  double get balance => _balance;\n  void deposit(double amount) { _balance += amount; }\n  void withdraw(double amount);\n}\nclass SavingsAccount extends Account {\n  final double interestRate;\n  SavingsAccount(String number, double balance, this.interestRate) : super(number, balance);\n  void applyInterest() { _balance += _balance * interestRate; }\n  @override void withdraw(double amount) {\n    if (amount > _balance) throw Exception('Insufficient');\n    _balance -= amount;\n  }\n}\nvoid main() {\n  var acc = SavingsAccount('SAV001', 10000, 0.04);\n  acc.deposit(5000);\n  acc.applyInterest();\n  try { acc.withdraw(2000); print('New balance: \${acc.balance}'); }\n  catch (e) { print(e); }\n}"
              }
            ],
            notes: [
              "Dart single inheritance, mixins for multiple code reuse.",
              "abstract class instantiate nahi kar sakte.",
              "factory constructor existing instance return kar sakta hai.",
              "Generics type safety provide karte hain."
            ],
            commonMistakes: [
              {
                mistake: "super constructor call bhoolna",
                correction: "Derived constructor mein super() call karein ya initializer list mein."
              },
              {
                mistake: "mixin keyword vs with keyword confusion",
                correction: "mixin define karta hai, with use karta hai."
              }
            ],
            interviewQuestions: [
              "Mixin vs Inheritance?",
              "Factory constructor use case?"
            ],
            practiceExercises: [
              {
                question: "Shape hierarchy banao (Shape, Circle, Rectangle) with area/perimeter.",
                hint: "Abstract class, extends, override.",
                difficulty: "medium"
              },
              {
                question: "Generic cache class banao with get/set methods.",
                hint: "class Cache<T> { Map<String, T> _data = {}; }",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "dart-oop-quiz",
              title: "Object-Oriented Programming Quiz",
              questions: [
                {
                  id: "dart-oop-q1",
                  question: "Multiple code reuse in Dart?",
                  options: ["Multiple extends", "Mixins (with)", "Interfaces", "All of above"],
                  correctAnswer: 1,
                  explanation: "Dart mein mixins (with keyword) multiple code reuse allow karte hain."
                },
                {
                  id: "dart-oop-q2",
                  question: "Type parameter bound syntax?",
                  options: ["<T extends SomeClass>", "<T: SomeClass>", "<T is SomeClass>", "<T super SomeClass>"],
                  correctAnswer: 0,
                  explanation: "Generic type bound ke liye <T extends SomeClass> syntax use hota hai."
                }
              ]
            }
          }
        },
        {
          id: "dart-async",
          title: "Async Programming (Future, Stream)",
          description: "Future, async/await, Streams, error handling aur Isolates ko seekhein.",
          order: 3,
          duration: "55 min",
          content: {
            introduction: "Dart async programming: Future, async/await, Stream, isolates, error handling seekhenge.",
            sections: [
              {
                title: "Future aur async/await",
                explanation: "Future represents async operation result. async keyword, await keyword. Future.delayed(), Future.value(), Future.error(). then(), catchError(), whenComplete().",
                example: "Future<String> fetchData() async {\n  await Future.delayed(Duration(seconds: 2));\n  return 'Data loaded';\n}\nFuture<int> fetchUserScore(int userId) async {\n  try {\n    var data = await fetchData();\n    var result = await api.getUserScore(userId);\n    return result;\n  } catch (e) {\n    print('Error: $e');\n    return 0;\n  } finally {\n    print('Request complete');\n  }\n}\nvoid main() async {\n  // Sequential\n  var score = await fetchUserScore(1);\n  // Parallel\n  var results = await Future.wait([\n    fetchUserScore(1),\n    fetchUserScore(2),\n    fetchUserScore(3),\n  ]);\n  print(results);\n}"
              },
              {
                title: "Streams",
                explanation: "Stream async data sequence. Stream.fromIterable(), Stream.periodic(). listen() subscribe. await for. StreamController. asBroadcastStream(). transform() with StreamTransformer.",
                example: "Stream<int> countStream(int max) async* {\n  for (int i = 1; i <= max; i++) {\n    await Future.delayed(Duration(seconds: 1));\n    yield i;\n  }\n}\nStream<int> evenNumbers(Stream<int> source) {\n  return source.where((n) => n.isEven);\n}\nvoid main() async {\n  // listen\n  var subscription = countStream(5).listen(\n    (data) => print('Got: $data'),\n    onError: (e) => print('Error: $e'),\n    onDone: () => print('Stream done'),\n    cancelOnError: false,\n  );\n  // await for\n  await for (var n in countStream(3)) {\n    print('Awaited: $n');\n  }\n  // Transform\n  var evens = await evenNumbers(countStream(10)).toList();\n  print(evens);\n  // StreamController\n  var controller = StreamController<int>();\n  controller.stream.listen(print);\n  controller.add(1); controller.add(2); controller.close();\n}"
              },
              {
                title: "Error Handling aur Isolates",
                explanation: "try-catch async mein. Future.error. Stream error handling. Isolate parallel execution. Isolate.spawn(). Compute() for CPU-bound work. SendPort/ReceivePort communication.",
                example: "// Error handling\nFuture<void> riskyOp() async {\n  try {\n    var data = await fetchData();\n    throw Exception('Something went wrong');\n  } on TimeoutException catch (e) {\n    print('Timeout: $e');\n  } on Exception catch (e, stack) {\n    print('General: $e');\n    print(stack);\n  } catch (e) {\n    print('Unknown: $e');\n  } finally {\n    print('Cleanup');\n  }\n}\n// Isolates\nint heavyComputation(int n) {\n  var sum = 0;\n  for (var i = 1; i <= n; i++) sum += i;\n  return sum;\n}\nvoid main() async {\n  // Compute - easy API\n  var result = await compute(heavyComputation, 1000000);\n  print(result);\n  // Manual spawn\n  final receivePort = ReceivePort();\n  await Isolate.spawn((message) {\n    message.send('Hello from isolate');\n  }, receivePort.sendPort);\n  var msg = await receivePort.first;\n  print(msg);\n}"
              }
            ],
            codeExamples: [],
            notes: [
              "async* generator function yield use karta hai.",
              "await for loop streams ke liye.",
              "StreamController manual stream control.",
              "Isolates true parallel execution, memory independent.",
              "compute() simplifies isolate creation."
            ],
            commonMistakes: [
              {
                mistake: "Stream subscription dispose na karna",
                correction: "cancel() karein ya StreamBuilder use karein (autocancel)."
              },
              {
                mistake: "Async functions mein try-catch na lagaana",
                correction: "Har async operation error handle karein."
              }
            ],
            interviewQuestions: [
              "Future vs Stream?",
              "async* vs sync* generators?"
            ],
            practiceExercises: [
              {
                question: "File download progress stream banao using StreamController.",
                hint: "StreamController<double>, add progress 0.0 to 1.0.",
                difficulty: "hard"
              },
              {
                question: "Future.wait se 3 APIs parallel call karo.",
                hint: "Future.wait([api1(), api2(), api3()]).",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "dart-async-quiz",
              title: "Async Programming Quiz",
              questions: [
                {
                  id: "dart-async-q1",
                  question: "Generator function yield keyword?",
                  options: ["async*", "sync*", "Dono", "Neither"],
                  correctAnswer: 2,
                  explanation: "async* aur sync* dono generators yield keyword use karte hain."
                },
                {
                  id: "dart-async-q2",
                  question: "Parallel execution ke liye?",
                  options: ["Isolate", "Future", "Stream", "Async"],
                  correctAnswer: 0,
                  explanation: "Isolates Dart mein true parallel execution provide karte hain."
                }
              ]
            }
          }
        },
        {
          id: "dart-packages",
          title: "Packages, Libraries aur Tooling",
          description: "Dart packages, dependencies, libraries, testing aur tooling ke baare mein seekhein.",
          order: 4,
          duration: "40 min",
          content: {
            introduction: "Dart packages, pub.dev, library management, Dart tooling, linting, testing seekhenge.",
            sections: [
              {
                title: "Package Management (pub)",
                explanation: "pubspec.yaml dependencies. pub get, pub upgrade, pub outdated. dev_dependencies vs dependencies. Version constraints (^, >=, <). Private/pub.dev packages.",
                example: "name: my_app\ndescription: My Dart app\nversion: 1.0.0\n\nenvironment:\n  sdk: '>=3.0.0 <4.0.0'\n\ndependencies:\n  http: ^1.1.0\n  dart_jsonwebtoken: ^2.8.0\n\ndev_dependencies:\n  test: ^1.24.0\n  flutter_lints: ^3.0.0\n  mockito: ^5.4.0\n  build_runner: ^2.4.0"
              },
              {
                title: "Library aur Imports",
                explanation: "import 'package:...' external. import 'file://...' absolute. import relative paths. export re-exports. part/part of large files. as alias, show/hide selective import. library directive. deferred load.",
                example: "// Import with alias\nimport 'package:http/http.dart' as http;\n// Selective import\nimport 'package:flutter/material.dart' show Text, Column, Row;\n// Export\nlibrary utils;\nexport 'src/helpers.dart';\nexport 'src/validators.dart' show validateEmail, validatePhone;\n// Part / part of\n// big_file.dart\nlibrary big_file;\npart 'src/parser.dart';\npart 'src/lexer.dart';\n// deferred (lazy) load\nimport 'package:heavy_lib/heavy.dart' deferred as heavy;\nFuture<void> useHeavy() async {\n  await heavy.loadLibrary();\n  heavy.doSomething();\n}"
              },
              {
                title: "Testing aur Tooling",
                explanation: "test package. group(), test(), expect(). setUp(), tearDown(). Mockito mocking. dart analyze linter. dart format code formatter. build_runner code generation.",
                example: "import 'package:test/test.dart';\n\nint add(int a, int b) => a + b;\n\nvoid main() {\n  group('String operations', () {\n    late String str;\n    setUp(() => str = 'Hello');\n    tearDown(() => print('Cleanup'));\n    \n    test('should reverse string', () {\n      expect(str.split('').reversed.join(), equals('olleH'));\n    });\n  });\n  \n  group('Calculator', () {\n    test('add should work', () {\n      expect(add(2, 3), equals(5));\n      expect(add(-1, 1), equals(0));\n    });\n    \n    test('should handle null safety', () {\n      int? nullable;\n      expect(nullable ?? 0, equals(0));\n    });\n  });\n  \n  // Commands\n  // dart analyze\n  // dart format .\n  // dart test\n  // dart run build_runner build\n}"
              }
            ],
            codeExamples: [],
            notes: [
              "pub get .dart_tool folder aur pubspec.lock generate karta hai.",
              "dart analyze linter issues detect karta hai.",
              "dart format code style fix karta hai.",
              "build_runner code generation ke liye (json_serializable, freezed)."
            ],
            commonMistakes: [
              {
                mistake: "pubspec.lock git mein commit na karna",
                correction: "Application mein lock file commit karein, library package mein nahi."
              },
              {
                mistake: "Version constraints na dena",
                correction: "^ caret constraint use karein compatible versions ke liye."
              }
            ],
            interviewQuestions: [
              "dependencies vs dev_dependencies mein kya antar hai?",
              "dart analyze tool kya karta hai?"
            ],
            practiceExercises: [
              {
                question: "Apna package banao with public API using export.",
                hint: "lib/ folder structure, export 'src/*', hide internal functions.",
                difficulty: "hard"
              }
            ],
            quiz: {
              id: "dart-packages-quiz",
              title: "Packages Quiz",
              questions: [
                {
                  id: "dart-packages-q1",
                  question: "pubspec.yaml lock file?",
                  options: ["pubspec.lock", "pubspec.generated", "pub.lock", "dependencies.lock"],
                  correctAnswer: 0,
                  explanation: "pubspec.lock exact dependency versions record karta hai."
                },
                {
                  id: "dart-packages-q2",
                  question: "Code formatting command?",
                  options: ["dart format", "dart lint", "dart style", "dart beautify"],
                  correctAnswer: 0,
                  explanation: "dart format code automatically format karta hai."
                }
              ]
            }
          }
        },
        {
          id: "dart-advanced",
          title: "Advanced Dart Features",
          description: "Dart 3 features, records, patterns, sealed classes, extension methods aur native interop seekhein.",
          order: 5,
          duration: "50 min",
          content: {
            introduction: "Advanced Dart: records, patterns, pattern matching, sealed classes, extension methods, enhanced enums, native interop seekhenge.",
            sections: [
              {
                title: "Records aur Patterns (Dart 3)",
                explanation: "Records: positional/named fields, lightweight immutable data. Patterns: destructuring records, lists, maps. Pattern matching in switch, if-case. Sealed class exhaustive handling.",
                example: "// Records\n(String name, int age) person = ('Rahul', 25);\n({String name, int age}) named = (name: 'Priya', age: 22);\n// Destructure\nvar (name, age) = person;\nprint('$name is $age years old');\n// Pattern matching\nswitch (person) {\n  case ('Rahul', var a): print('Rahul is $a');\n  case (var n, _) when n.startsWith('P'): print('Name starts with P');\n  default: print('Unknown');\n}\n// If-case\nif (person case (var n, _) when n.length > 4) {\n  print('Long name: $n');\n}"
              },
              {
                title: "Sealed Classes aur Enhanced Enums",
                explanation: "sealed class exhaustive pattern matching garanty. enhanced enums with methods, fields, implements. Sealed class switch mein default needed nahi.",
                example: "sealed class Shape {}\nclass Circle extends Shape { final double radius; Circle(this.radius); }\nclass Rectangle extends Shape { final double w, h; Rectangle(this.w, this.h); }\nclass Triangle extends Shape { final double b, h; Triangle(this.b, this.h); }\n\ndouble area(Shape s) => switch (s) {\n  Circle(r: var r) => 3.14 * r * r,\n  Rectangle(w: var w, h: var h) => w * h,\n  Triangle(b: var b, h: var h) => 0.5 * b * h,\n};\n\n// Enhanced enum\nenum Status with Comparable<Status> {\n  pending('Pending'),\n  approved('Approved'),\n  rejected('Rejected');\n  final String label;\n  const Status(this.label);\n  bool get isFinal => this == approved || this == rejected;\n  @override int compareTo(Status other) => index.compareTo(other.index);\n}"
              },
              {
                title: "Extension Methods aur Native Interop",
                explanation: "Extension methods add functionality to existing types. Extension on generic types. Native interop (dart:ffi) C code call. js_interop JavaScript interop.",
                example: "// Extension methods\nextension StringExtensions on String {\n  String get capitalize => isEmpty ? this : '${this[0].toUpperCase()}${substring(1)}';\n  bool get isValidEmail => contains('@') && contains('.');\n  String toTitleCase() => split(' ').map((w) => w.capitalize).join(' ');\n}\nextension<T> on List<T> {\n  T? get secondOrNull => length > 1 ? this[1] : null;\n}\nvoid main() {\n  print('rahul kumar'.toTitleCase());\n  print('test@email.com'.isValidEmail());\n  print([1, 2, 3].secondOrNull);\n}\n\n// FFI (Native)\nimport 'dart:ffi';\ntypedef NativeSum = Int32 Function(Int32, Int32);\ntypedef DartSum = int Function(int, int);\nvoid main() {\n  final dylib = DynamicLibrary.open('mylib.so');\n  final sum = dylib.lookupFunction<NativeSum, DartSum>('sum');\n  print(sum(5, 3));\n}"
              }
            ],
            codeExamples: [],
            notes: [
              "Records value equality, no identity.",
              "Sealed class switch exhaustive - no need default.",
              "Extension methods can't override existing methods.",
              "Enhanced enums Dart 3+ feature."
            ],
            commonMistakes: [
              {
                mistake: "Sealed class switch mein miss pattern",
                correction: "Sealed class exhaustively match karein, compiler error dega agar miss hua."
              },
              {
                mistake: "Extension method toString() override",
                correction: "Extension methods override nahi kar sakte, instance methods priority rakhte hain."
              }
            ],
            interviewQuestions: [
              "Records vs classes mein kya antar hai?",
              "Sealed classes kyun use karte hain?"
            ],
            practiceExercises: [
              {
                question: "Expression evaluator banao using sealed classes (Add, Subtract, Multiply, Divide).",
                hint: "sealed class Expr, evaluate() method, pattern matching.",
                difficulty: "hard"
              },
              {
                question: "Extension method on DateTime banao for date formatting.",
                hint: "extension DateFormatting on DateTime { String get formatted => '${year}-${month}...'; }",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "dart-advanced-quiz",
              title: "Advanced Dart Features Quiz",
              questions: [
                {
                  id: "dart-advanced-q1",
                  question: "Records equality based on?",
                  options: ["Identity", "Value", "Reference", "Hash"],
                  correctAnswer: 1,
                  explanation: "Records value equality use karte hain, reference nahi."
                },
                {
                  id: "dart-advanced-q2",
                  question: "Sealed class switch requirement?",
                  options: ["Default needed", "Exhaustive", "Break needed", "Continue"],
                  correctAnswer: 1,
                  explanation: "Sealed class ke saath switch exhaustively match karna mandatory hai."
                }
              ]
            }
          }
        }
      ]
    }
  ],
};

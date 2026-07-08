import { Course } from "@/types";

export const cppCourse: Course = {
  id: "cpp",
  title: "C++ Programming",
  description: "C++ programming language ko shuru se seekhein. OOP, STL, memory management aur advanced concepts ke saath.",
  longDescription: "C++ ek powerful general-purpose programming language hai. Is course mein aap C++ ke basic syntax se lekar advanced concepts tak seekhenge.",
  category: "programming-languages",
  difficulty: "intermediate",
  icon: "code-2",
  color: "blue",
  lessonsCount: 11,
  duration: "9 hours",
  modules: [
    {
      id: "cpp-basics",
      title: "C++ Basics aur Advanced Topics",
      description: "C++ programming language ke basic se advanced concepts tak.",
      order: 1,
      lessons: [
        {
          id: "cpp-intro",
          title: "C++ Introduction",
          description: "C++ programming language ke basic concepts, syntax, variables aur input-output operations ko seekhein.",
          order: 1,
          duration: "45 min",
          content: {
            introduction: "C++ ek powerful general-purpose programming language hai jo Bjarne Stroustrup ne 1980s mein banayi thi. Yeh C language ka extension hai jisme object-oriented programming features add kiye gaye. C++ ko system programming, game development, embedded systems aur high-performance applications ke liye use kiya jaata hai. Is lesson mein hum C++ ke syntax, structure aur basic programming concepts ko seekhenge.",
            sections: [
              {
                title: "C++ Program Structure",
                explanation: "C++ program ka ek basic structure hota hai jisme headers, main function aur statements shamil hote hain. iostream header input-output operations ke liye use hota hai. using namespace std line std namespace ko global scope mein laati hai, jisse hum cout, cin jese functions ko directly use kar sakte hain. main() function program ka entry point hota hai jo int return type rakhta hai.",
                example: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++ Duniya!" << endl;\n    return 0;\n}'
              },
              {
                title: "Variables aur Data Types",
                explanation: "C++ mein variables ko declare karne ke liye data type specify karna hota hai. Yeh statically typed language hai, isliye variable ka type change nahi kar sakta. Basic data types hain: int (integers), float/double (decimal numbers), char (characters), bool (true/false). C++ mein variable declaration ke baad semicolon (;) lagana zaroori hai.",
                example: "int age = 25;\ndouble price = 99.99;\nchar grade = 'A';\nbool isPassed = true;\n\ncout << \"Age: \" << age << endl;\ncout << \"Price: \" << price << endl;"
              },
              {
                title: "Input aur Output Operations",
                explanation: "C++ mein input lene ke liye cin object aur extraction operator (>>) use hota hai. Output ke liye cout object aur insertion operator (<<) use hota hai. endl manipulator new line add karta hai. Multiple variables ek hi line mein input liye ja sakte hain.",
                example: "int num1, num2;\ncout << \"Do numbers enter karo: \";\ncin >> num1 >> num2;\ncout << \"Sum: \" << num1 + num2 << endl;"
              }
            ],
            codeExamples: [
              {
                title: "Complete Program Example",
                language: "cpp",
                code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    \n    cout << "Apna naam enter karo: ";\n    getline(cin, name);\n    cout << "Apni umar enter karo: ";\n    cin >> age;\n    \n    cout << "\\nNamaste " << name << "!" << endl;\n    cout << "Aapki umar " << age << " saal hai." << endl;\n    cout << "Aap " << (age >= 18 ? "vayask" : "nabalig") << " hain." << endl;\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Har C++ program .cpp extension ke saath save hota hai.",
              "main() function program ka entry point hai aur int return type hona chahiye.",
              "C++ case-sensitive language hai - 'cout' aur 'Cout' alag hain.",
              "Statements ke end mein semicolon (;) lagana compulsory hai.",
              "namespace std use nahi karte to std::cout, std::cin likhna padta hai."
            ],
            commonMistakes: [
              {
                mistake: "Semicolon bhool jaana",
                correction: "Har statement ke end mein semicolon (;) lagayein. Compiler error dega agar semicolon nahi hoga."
              },
              {
                mistake: "cin ke baad getline ka issue",
                correction: "cin >> ke baad getline use karne se pehle cin.ignore() call karein kyunki newline character buffer mein reh jaata hai."
              }
            ],
            interviewQuestions: [
              "C aur C++ mein kya difference hai?",
              "C++ mein namespace kya hota hai?",
              "C++ mein main function int kyun return karta hai?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo user se do numbers lega aur unka product display karega.",
                hint: "cin aur cout use karein, ek variable for product banaein.",
                difficulty: "easy"
              },
              {
                question: "Ek program likho jo user ke naam aur favorite color ko input lega aur ek message display karega.",
                hint: "string type use karein aur getline function se input lein.",
                difficulty: "easy"
              }
            ],
            quiz: {
              id: "cpp-intro-quiz",
              title: "C++ Introduction Quiz",
              questions: [
                {
                  id: "cpp-intro-q1",
                  question: "C++ program ka entry point kaunsa function hai?",
                  options: ["start()", "main()", "begin()", "init()"],
                  correctAnswer: 1,
                  explanation: "main() function C++ program ka entry point hota hai aur yeh int return type rakhta hai."
                },
                {
                  id: "cpp-intro-q2",
                  question: "C++ mein output ke liye kaunsa object use hota hai?",
                  options: ["cin", "cout", "cerr", "clog"],
                  correctAnswer: 1,
                  explanation: "cout object output ke liye use hota hai, cin input ke liye."
                },
                {
                  id: "cpp-intro-q3",
                  question: "C++ mein variable declaration ke end mein kya lagana zaroori hai?",
                  options: ["Comma", "Dot", "Semicolon", "Colon"],
                  correctAnswer: 2,
                  explanation: "C++ mein har statement ke end mein semicolon (;) lagana compulsory hai."
                },
                {
                  id: "cpp-intro-q4",
                  question: "Kaunsa data type decimal numbers ke liye use hota hai?",
                  options: ["int", "char", "bool", "double"],
                  correctAnswer: 3,
                  explanation: "double data type decimal numbers ke liye use hota hai."
                }
              ]
            }
          }
        },
        {
          id: "cpp-control-flow",
          title: "Control Flow aur Decision Making",
          description: "if-else, switch-case, loops aur jump statements ke saath program flow ko control karna seekhein.",
          order: 2,
          duration: "50 min",
          content: {
            introduction: "Control flow statements program ke execution flow ko control karte hain. C++ mein if-else, switch-case, loops (for, while, do-while) aur jump statements (break, continue, goto) hote hain. Inki madad se hum conditional logic implement kar sakte hain aur repetitive tasks ko automate kar sakte hain. Is lesson mein hum in concepts ko detail mein dekhenge.",
            sections: [
              {
                title: "Conditional Statements",
                explanation: "if-else statement conditions ke basis par decisions lene ke liye use hota hai. Agar condition true hoti hai to if block execute hota hai, nahi to else block. else if se multiple conditions check kar sakte hain. Logical operators (&&, ||, !) se complex conditions bana sakte hain. Ternary operator (condition ? expr1 : expr2) simple if-else ka shorthand hai.",
                example: "int marks = 85;\n\nif (marks >= 90) {\n    cout << \"Grade: A+\" << endl;\n} else if (marks >= 80) {\n    cout << \"Grade: A\" << endl;\n} else if (marks >= 70) {\n    cout << \"Grade: B\" << endl;\n} else {\n    cout << \"Grade: C\" << endl;\n}\n\n// Ternary operator\nstring result = (marks >= 33) ? \"Pass\" : \"Fail\";\ncout << result << endl;"
              },
              {
                title: "Switch Statement",
                explanation: "switch statement multiple branches ke liye if-else ka alternative hai. Yeh ek variable ki value check karta hai aur matching case ko execute karta hai. Har case ke end mein break lagana jaroori hai, warna fall-through hoga. default case tab execute hota hai jab koi case match nahi hota.",
                example: "int day = 3;\n\nswitch (day) {\n    case 1:\n        cout << \"Monday\";\n        break;\n    case 2:\n        cout << \"Tuesday\";\n        break;\n    case 3:\n        cout << \"Wednesday\";\n        break;\n    case 4:\n        cout << \"Thursday\";\n        break;\n    case 5:\n        cout << \"Friday\";\n        break;\n    default:\n        cout << \"Weekend\";\n}"
              },
              {
                title: "Loops - for, while, do-while",
                explanation: "for loop tab use hota hai jab iterations ki count pata ho. while loop tab use hota hai jab condition-based repetition chahiye. do-while at least ek baar execute hota hai kyunki condition end mein check hoti hai. break statement loop ko immediately terminate karta hai, continue current iteration skip karke next par jaata hai.",
                example: "// for loop\nfor (int i = 1; i <= 5; i++) {\n    cout << i << \" \";\n}\n\n// while loop\nint j = 1;\nwhile (j <= 5) {\n    cout << j << \" \";\n    j++;\n}\n\n// do-while loop\nint k = 1;\ndo {\n    cout << k << \" \";\n    k++;\n} while (k <= 5);"
              }
            ],
            codeExamples: [
              {
                title: "Practical Program - Number Guessing Game",
                language: "cpp",
                code: '#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n    srand(time(0));\n    int secret = rand() % 100 + 1;\n    int guess, attempts = 0;\n    \n    cout << "1-100 ke beech mein number guess karo!" << endl;\n    \n    do {\n        cout << "Apna guess daalo: ";\n        cin >> guess;\n        attempts++;\n        \n        if (guess > secret) {\n            cout << "Bahut bada hai! Chhota number socho." << endl;\n        } else if (guess < secret) {\n            cout << "Bahut chhota hai! Bada number socho." << endl;\n        } else {\n            cout << "Shabash! " << attempts << " attempts mein pakad liya!" << endl;\n        }\n    } while (guess != secret);\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "if-else mein condition ke around parentheses () zaroori hain.",
              "switch mein sirf integer, char ya enum types ka use kar sakte hain.",
              "break bhoolna switch mein fall-through cause karega.",
              "for loop ke teen parts: initialization, condition, increment/decrement.",
              "Infinite loop se bachne ke liye loop variable ko update karna na bhoolen."
            ],
            commonMistakes: [
              {
                mistake: "if condition mein assignment (=) instead of comparison (==)",
                correction: "if (x == 5) likhna chahiye, if (x = 5) nahi. Assignment hamesha true return karega."
              },
              {
                mistake: "switch case mein break bhool jaana",
                correction: "Har case block ke end mein break lagayein, warna agla case bhi execute hoga."
              }
            ],
            interviewQuestions: [
              "for aur while loop mein kya difference hai?",
              "break aur continue mein kya antar hai?",
              "switch-case if-else se behtar kab hai?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo 1 se 100 tak ke numbers mein se even numbers print kare.",
                hint: "for loop aur modulus operator (%) use karein.",
                difficulty: "easy"
              },
              {
                question: "Ek calculator program likho jo do numbers aur operator (+,-,*,/) input lega aur switch-case se result calculate karega.",
                hint: "char type mein operator lo aur switch mein use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "cpp-control-flow-quiz",
              title: "Control Flow Quiz",
              questions: [
                {
                  id: "cpp-control-q1",
                  question: "switch statement mein har case ke end mein kya lagana zaroori hai?",
                  options: ["continue", "break", "return", "exit"],
                  correctAnswer: 1,
                  explanation: "break statement switch case ke end mein lagana zaroori hai, warna fall-through hoga."
                },
                {
                  id: "cpp-control-q2",
                  question: "Loop ke current iteration ko skip karne ke liye kaunsa statement use hota hai?",
                  options: ["break", "continue", "goto", "return"],
                  correctAnswer: 1,
                  explanation: "continue statement current iteration skip karke next iteration par chala jaata hai."
                },
                {
                  id: "cpp-control-q3",
                  question: "do-while loop mein condition kahan check hoti hai?",
                  options: ["Start mein", "Middle mein", "End mein", "Condition nahi hoti"],
                  correctAnswer: 2,
                  explanation: "do-while mein condition end mein check hoti hai, isliye yeh at least ek baar execute hota hai."
                },
                {
                  id: "cpp-control-q4",
                  question: "Ternary operator ka syntax kya hai?",
                  options: ["if ? then : else", "condition ? expr1 : expr2", "condition :: expr1 || expr2", "? condition : expr1; expr2"],
                  correctAnswer: 1,
                  explanation: "Ternary operator condition ? expr1 : expr2 syntax use karta hai."
                }
              ]
            }
          }
        },
        {
          id: "cpp-functions",
          title: "Functions aur Modular Programming",
          description: "Functions, parameter passing, function overloading, inline functions aur recursion ko seekhein.",
          order: 3,
          duration: "50 min",
          content: {
            introduction: "Functions C++ programming ka important building block hain. Yeh code ko reusable aur modular banate hain. Function ek specific task perform karta hai, input parameters leta hai aur value return karta hai. C++ mein function overloading, default arguments, inline functions, aur recursion jaise advanced concepts bhi hain. Is lesson mein hum functions ko detail mein samjhenge.",
            sections: [
              {
                title: "Function Declaration aur Definition",
                explanation: "Function declaration (prototype) compiler ko function ke baare mein batata hai - uska naam, return type, aur parameters. Function definition mein actual implementation hota hai. Return type void hai to function kuch return nahi karta. Parameters optional hain. Function ko call karne ke liye uske naam se invoke karte hain.",
                example: "// Function declaration (prototype)\nint add(int a, int b);\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}\n\n// Function call\nint result = add(10, 20);\ncout << \"Sum: \" << result << endl;"
              },
              {
                title: "Pass by Value vs Pass by Reference",
                explanation: "Pass by value mein function parameter ki copy banti hai, original variable change nahi hota. Pass by reference mein original variable ka address pass hota hai, isliye function andar changes original ko affect karte hain. Reference parameters & symbol se declare hote hain. Const reference (const int &x) se value modify nahi kar sakte, lekin copying se bachte hain.",
                example: "void swapByValue(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nvoid swapByReference(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint x = 5, y = 10;\nswapByValue(x, y); // x=5, y=10 (no change)\nswapByReference(x, y); // x=10, y=5 (changed)"
              },
              {
                title: "Function Overloading aur Default Arguments",
                explanation: "Function overloading mein same naam ke multiple functions alag-alag parameters ke saath hote hain. Compiler arguments ke type aur count ke basis par decide karta hai kaunsa function call karna hai. Default arguments function declaration mein parameters ki default values specify karte hain. Default values hamesha rightmost parameters ke liye hoti hain.",
                example: "// Function overloading\nint multiply(int a, int b) {\n    return a * b;\n}\n\ndouble multiply(double a, double b) {\n    return a * b;\n}\n\n// Default arguments\nint greet(string name, string prefix = \"Namaste\") {\n    cout << prefix << \", \" << name << endl;\n}\n\ngreet(\"Rahul\");        // Namaste, Rahul\ngreet(\"Priya\", \"Hello\"); // Hello, Priya"
              }
            ],
            codeExamples: [
              {
                title: "Recursive Function - Factorial",
                language: "cpp",
                code: '#include <iostream>\nusing namespace std;\n\n// Recursive function\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\n// Inline function\ninline int square(int x) {\n    return x * x;\n}\n\nint main() {\n    int num = 5;\n    cout << num << \"! = \" << factorial(num) << endl;\n    cout << \"Square of \" << num << \" = \" << square(num) << endl;\n    \n    // Lambda function\n    auto sum = [](int a, int b) { return a + b; };\n    cout << \"Lambda sum: \" << sum(10, 20) << endl;\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Function declaration ke end mein semicolon (;) lagana mat bhoolen.",
              "Reference parameters (&) se large objects ki copying se bach sakte hain.",
              "Inline functions se function call overhead reduce hota hai.",
              "Lambda functions C++11 se introduce hue hain.",
              "Recursion mein base case jaroori hai, otherwise stack overflow hoga."
            ],
            commonMistakes: [
              {
                mistake: "Function declaration mein semicolon bhoolna",
                correction: "Function prototype ke end mein semicolon lagayein. Definition mein curly braces use karein, semicolon nahi."
              },
              {
                mistake: "Pass by value mein original variable change ki ummeed",
                correction: "Original variable change karne ke liye pass by reference (&) ya pointer (*) use karein."
              }
            ],
            interviewQuestions: [
              "Call by value aur call by reference mein kya difference hai?",
              "Function overloading kaise kaam karta hai?",
              "Inline function kya hota hai?",
            ],
            practiceExercises: [
              {
                question: "Ek function likho jo number ko prime check kare, aur main mein 1-100 tak saare prime numbers print karo.",
                hint: "For loop 2 se n/2 tak check karo. Agar kisi number se divide ho gaya to prime nahi.",
                difficulty: "medium"
              },
              {
                question: "Ek recursive function likho jo Fibonacci series ka nth term return kare.",
                hint: "Base cases: n=0->0, n=1->1. Recursive: fib(n-1)+fib(n-2).",
                difficulty: "hard"
              }
            ],
            quiz: {
              id: "cpp-functions-quiz",
              title: "Functions Quiz",
              questions: [
                {
                  id: "cpp-func-q1",
                  question: "Function prototype ke end mein kya aata hai?",
                  options: ["Curly brace", "Semicolon", "Colon", "Parenthesis"],
                  correctAnswer: 1,
                  explanation: "Function declaration (prototype) ke end mein semicolon (;) lagana zaroori hai."
                },
                {
                  id: "cpp-func-q2",
                  question: "Pass by reference ke liye parameter mein kaunsa symbol use hota hai?",
                  options: ["*", "&", "@", "#"],
                  correctAnswer: 1,
                  explanation: "Reference parameters & symbol se declare hote hain."
                },
                {
                  id: "cpp-func-q3",
                  question: "Function overloading mein kya difference hota hai?",
                  options: ["Return type", "Function name", "Parameters", "Access specifier"],
                  correctAnswer: 2,
                  explanation: "Function overloading mein parameters (type ya count) different hote hain."
                },
                {
                  id: "cpp-func-q4",
                  question: "Recursion mein stack overflow se bachne ke liye kya jaroori hai?",
                  options: ["Loop", "Base case", "Pointer", "Global variable"],
                  correctAnswer: 1,
                  explanation: "Base case recursion ko terminate karta hai, warna stack overflow hoga."
                }
              ]
            }
          }
        },
        {
          id: "cpp-arrays-strings",
          title: "Arrays aur Strings",
          description: "Arrays, multi-dimensional arrays, C-style strings aur C++ string class ko detail mein seekhein.",
          order: 4,
          duration: "50 min",
          content: {
            introduction: "Arrays aur strings C++ mein data collections ke saath kaam karne ke liye use hote hain. Array same data type ke multiple elements ko contiguous memory mein store karta hai. Strings characters ke sequences hain. C++ mein C-style strings (character arrays) aur C++ strings (string class) dono available hain. Is lesson mein hum arrays, multi-dimensional arrays aur strings ko detail mein dekhenge.",
            sections: [
              {
                title: "Arrays in C++",
                explanation: "Array same type ke elements ka collection hai jo contiguous memory locations par store hota hai. Array declaration mein size specify karna hota hai. Indexing 0 se start hoti hai. Array ka naam uske first element ka pointer hota hai. Multidimensional arrays (2D, 3D) bhi declare kar sakte hain.",
                example: "// 1D array\nint numbers[5] = {10, 20, 30, 40, 50};\ncout << \"First element: \" << numbers[0] << endl;\n\n// 2D array\nint matrix[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\ncout << \"Element [1][2]: \" << matrix[1][2] << endl; // 6\n\n// Array traversal\nfor (int i = 0; i < 5; i++) {\n    cout << numbers[i] << \" \";\n}"
              },
              {
                title: "C++ Strings (string class)",
                explanation: "string class C++ standard library ka hissa hai. Yeh dynamic memory allocation handle karta hai. Strings ke saath + operator concatenation ke liye, compare ke liye ==, != operators use kar sakte hain. length() ya size() se string ki length pata kar sakte hain. find() se substring search kar sakte hain.",
                example: '#include <string>\n\nstring firstName = "Rahul";\nstring lastName = "Kumar";\nstring fullName = firstName + " " + lastName;\n\ncout << "Name: " << fullName << endl;\ncout << "Length: " << fullName.length() << endl;\n\n// String methods\ncout << "Substring: " << fullName.substr(0, 5) << endl;\ncout << "Find: " << fullName.find("Kumar") << endl;\n\n// String comparison\nif (firstName == "Rahul") {\n    cout << "Match found!" << endl;\n}'
              },
              {
                title: "C-style Strings (Character Arrays)",
                explanation: "C-style strings char arrays hain jo null character ('\\0') se terminate hote hain. Size hamesha string length + 1 hona chahiye null terminator ke liye. <cstring> header mein functions hain: strlen(), strcpy(), strcmp(), strcat(). Yeh functions pointers ke saath kaam karte hain aur manual memory management chahiye.",
                example: 'char str1[20] = "Hello";\nchar str2[20] = "World";\nchar result[40];\n\nstrcpy(result, str1);        // Copy\nstrcat(result, " ");          // Concatenate\nstrcat(result, str2);         // Concatenate\n\ncout << "Result: " << result << endl;\ncout << "Length: " << strlen(result) << endl;\n\nif (strcmp(str1, str2) == 0) {\n    cout << "Strings equal" << endl;\n} else {\n    cout << "Strings different" << endl;\n}'
              }
            ],
            codeExamples: [
              {
                title: "Array Manipulation aur Range-based For Loop",
                language: "cpp",
                code: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // Range-based for loop (C++11)\n    int scores[] = {85, 92, 78, 95, 88};\n    \n    cout << "Scores: ";\n    for (int score : scores) {\n        cout << score << " ";\n    }\n    \n    // Sort array\n    sort(scores, scores + 5);\n    \n    cout << "\\nSorted scores: ";\n    for (int score : scores) {\n        cout << score << " ";\n    }\n    \n    // String operations\n    string sentence = "C++ programming seekhna bahut mazedar hai";\n    \n    // Replace\n    size_t pos = sentence.find("seekhna");\n    if (pos != string::npos) {\n        sentence.replace(pos, 7, "sikhna");\n    }\n    \n    cout << "\\n" << sentence << endl;\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Array index hamesha 0 se start hota hai, to last element size-1 par hai.",
              "Array bounds check C++ compile time nahi karta - out of bounds undefined behavior hai.",
              "string class C-style strings se safe aur convenient hai.",
              "Range-based for loop C++11 mein aaya hai aur arrays ke liye convenient hai.",
              "C-style strings null-terminated hote hain, size hamesha +1 rakhein."
            ],
            commonMistakes: [
              {
                mistake: "Array bounds exceed karna",
                correction: "Hamesha check karein ki index 0 se size-1 ke beech mein hai. Out of bounds garbage values ya crash de sakta hai."
              },
              {
                mistake: "C-style string mein null terminator bhoolna",
                correction: "Hamesha array size string length + 1 rakhein, aur manually null terminator add karein agar zaroori ho."
              }
            ],
            interviewQuestions: [
              "C-style strings aur C++ string class mein kya difference hai?",
              "Array ka naam pointer kyun mana jaata hai?",
              "Multidimensional array memory mein kaise store hota hai?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo array mein maximum aur minimum element find kare.",
                hint: "Pehle element ko max/min maan lo, phir compare karte jao.",
                difficulty: "easy"
              },
              {
                question: "Ek program likho jo string ko reverse kare (bina built-in function ke).",
                hint: "Do pointers use karo - ek start se, ek end se, aur swap karte jao.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "cpp-arrays-strings-quiz",
              title: "Arrays aur Strings Quiz",
              questions: [
                {
                  id: "cpp-arr-q1",
                  question: "Array index kaunsa number se start hota hai?",
                  options: ["1", "0", "-1", "2"],
                  correctAnswer: 1,
                  explanation: "Array indexing hamesha 0 se start hoti hai."
                },
                {
                  id: "cpp-arr-q2",
                  question: "string class ki length batane wala function kaunsa hai?",
                  options: ["length()", "len()", "size()", "Aur C dono"],
                  correctAnswer: 3,
                  explanation: "length() aur size() dono string ki length batate hain."
                },
                {
                  id: "cpp-arr-q3",
                  question: "C-style strings kaise terminate hote hain?",
                  options: ["Newline", "Null character", "Space", "Tab"],
                  correctAnswer: 1,
                  explanation: "C-style strings null character ('\\0') se terminate hote hain."
                },
                {
                  id: "cpp-arr-q4",
                  question: "2D array memory mein kis order mein store hota hai?",
                  options: ["Column-major", "Row-major", "Diagonal", "Random"],
                  correctAnswer: 1,
                  explanation: "C++ mein 2D array row-major order mein store hota hai."
                }
              ]
            }
          }
        },
        {
          id: "cpp-pointers",
          title: "Pointers aur Dynamic Memory",
          description: "Pointers, dynamic memory allocation, new/delete operators aur smart pointers ko seekhein.",
          order: 5,
          duration: "55 min",
          content: {
            introduction: "Pointers C++ ke powerful features hain jo memory addresses ke saath direct interaction allow karte hain. Pointer ek variable hai jo kisi dusre variable ka address store karta hai. Dynamic memory allocation runtime par memory allocate/free karne ki facility deta hai. Is lesson mein hum pointers, references, dynamic memory allocation (new/delete), aur smart pointers ke concepts ko seekhenge.",
            sections: [
              {
                title: "Pointers Basics",
                explanation: "Pointer declaration mein data type ke baad * lagta hai. & operator variable ka address nikalta hai. * operator (dereference) pointer ke stored address par value access karta hai. Null pointer (nullptr) kisi valid memory location ko point nahi karta. Pointers ke saath arithmetic bhi kar sakte hain - increment/decrement se next/previous memory location par jaate hain.",
                example: "int num = 42;\nint* ptr = &num;  // Pointer declaration\n\ncout << \"Value: \" << *ptr << endl;       // 42\ncout << \"Address: \" << ptr << endl;      // 0x...\ncout << \"Num address: \" << &num << endl; // Same\n\n*ptr = 100;  // Modify through pointer\ncout << \"New value: \" << num << endl;    // 100\n\n// Null pointer\nint* nullPtr = nullptr;\nif (nullPtr != nullptr) {\n    cout << *nullPtr << endl;\n}"
              },
              {
                title: "Dynamic Memory Allocation (new aur delete)",
                explanation: "new operator heap memory allocate karta hai aur allocated memory ka pointer return karta hai. delete operator allocated memory ko free karta hai. new[] se arrays allocate karte hain, delete[] se free karte hain. Dynamic memory ka size runtime par decide kar sakte hain. Memory leak se bachne ke liye har new ke saath delete call karna zaroori hai.",
                example: "// Single variable\nint* p = new int(50);\ncout << \"Allocated: \" << *p << endl;\ndelete p;\n\n// Dynamic array\nint size = 5;\nint* arr = new int[size];\n\nfor (int i = 0; i < size; i++) {\n    arr[i] = i * 10;\n}\n\nfor (int i = 0; i < size; i++) {\n    cout << arr[i] << \" \";\n}\n\ndelete[] arr;"
              },
              {
                title: "Pointers aur Arrays",
                explanation: "Array ka name first element ka pointer hota hai. Pointer arithmetic se array elements access kar sakte hain: ptr + i currently pointed element se i elements aage ka address deta hai. ptr[i] aur *(ptr + i) same hain. 2D array ke saath pointers ka use complex ho sakta hai.",
                example: "int arr[] = {10, 20, 30, 40, 50};\nint* ptr = arr;  // Array ka name hi pointer hai\n\ncout << \"First: \" << *ptr << endl;        // 10\ncout << \"Second: \" << *(ptr + 1) << endl;  // 20\n\n// Pointer arithmetic ke saath traversal\nfor (int i = 0; i < 5; i++) {\n    cout << *(ptr + i) << \" \";\n}\n\n// arr[i] = *(arr + i)\ncout << \"\\narr[2] = \" << arr[2] << endl;    // 30\ncout << \"*(arr+2) = \" << *(arr + 2) << endl; // 30"
              }
            ],
            codeExamples: [
              {
                title: "Smart Pointer aur Function Pointers",
                language: "cpp",
                code: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Rectangle {\npublic:\n    int width, height;\n    Rectangle(int w, int h) : width(w), height(h) {}\n    int area() { return width * height; }\n};\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    // Smart pointer (unique_ptr) - automatically deletes\n    unique_ptr<Rectangle> rect = make_unique<Rectangle>(10, 20);\n    cout << "Area: " << rect->area() << endl;\n    \n    // Function pointer\n    int (*funcPtr)(int, int) = add;\n    cout << "Function pointer result: " << funcPtr(5, 3) << endl;\n    \n    // Void pointer\n    int num = 42;\n    void* vPtr = &num;\n    cout << "Void pointer: " << *(int*)vPtr << endl;\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Pointer ko hamesha initialize karein, warna garbage address store hoga.",
              "nullptr C++11 mein aaya hai, NULL se safer hai.",
              "Dangling pointer tab hota hai jab memory free hone ke baad bhi pointer use karein.",
              "Smart pointers (unique_ptr, shared_ptr) memory management automatic karte hain.",
              "new/delete ko match karein: single ke liye delete, array ke liye delete[]."
            ],
            commonMistakes: [
              {
                mistake: "Pointer ko initialize kiye bina use karna",
                correction: "Pointer ko hamesha kisi valid address ya nullptr se initialize karein. Uninitialized pointer garbage address store karta hai."
              },
              {
                mistake: "Memory allocate karna aur delete bhoolna (memory leak)",
                correction: "Har new ke saath delete call karein ya smart pointer use karein jo automatic cleanup kare."
              }
            ],
            interviewQuestions: [
              "Pointer aur reference mein kya difference hai?",
              "Memory leak kya hota hai aur isse kaise bach sakte hain?",
              "Dangling pointer kya hota hai?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo dynamically 2D array allocate kare, values fill kare, print kare, aur phir delete kare.",
                hint: "Pointer-to-pointer (int**) use karo, pehle rows allocate karo phir har row ke liye columns.",
                difficulty: "hard"
              },
              {
                question: "Ek function likho jo two integers ke pointers lekar unki values swap kare.",
                hint: "Dereference operator (*) use karke values swap karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "cpp-pointers-quiz",
              title: "Pointers aur Dynamic Memory Quiz",
              questions: [
                {
                  id: "cpp-ptr-q1",
                  question: "Pointer variable mein kya store hota hai?",
                  options: ["Value", "Address", "Reference", "Index"],
                  correctAnswer: 1,
                  explanation: "Pointer kisi variable ka memory address store karta hai."
                },
                {
                  id: "cpp-ptr-q2",
                  question: "Variable ka address nikalne ke liye kaunsa operator use hota hai?",
                  options: ["*", "&", "@", "#"],
                  correctAnswer: 1,
                  explanation: "& operator (address-of) variable ka address return karta hai."
                },
                {
                  id: "cpp-ptr-q3",
                  question: "C++11 mein null pointer ke liye kaunsa keyword use hota hai?",
                  options: ["NULL", "null", "nullptr", "none"],
                  correctAnswer: 2,
                  explanation: "nullptr C++11 mein introduce hua, yeh NULL se zyada type-safe hai."
                },
                {
                  id: "cpp-ptr-q4",
                  question: "Array ke memory ko free karne ke liye kaunsa delete use karte hain?",
                  options: ["delete", "free()", "delete[]", "release()"],
                  correctAnswer: 2,
                  explanation: "Array ke liye delete[] use karte hain, single variable ke liye delete."
                }
              ]
            }
          }
        },
        {
          id: "cpp-oops",
          title: "Object-Oriented Programming Basics",
          description: "Classes, objects, constructors, destructors, access specifiers aur OOP ke basic concepts seekhein.",
          order: 6,
          duration: "55 min",
          content: {
            introduction: "Object-Oriented Programming (OOP) C++ ki ek important feature hai jo real-world entities ko code mein represent karta hai. OOP ke 4 pillars hain: Encapsulation, Abstraction, Inheritance, aur Polymorphism. C++ mein classes aur objects OOP ke foundation hain. Is lesson mein hum classes, objects, access specifiers, constructors, destructors aur OOP concepts ko detail mein seekhenge.",
            sections: [
              {
                title: "Classes aur Objects",
                explanation: "Class ek blueprint hai jo data members (attributes) aur member functions (methods) ko group karta hai. Object class ka instance hai. Dot operator (.) se object ke members access hote hain. Arrow operator (->) pointer ke through access ke liye use hota hai. Class ke andar functions define bhi kar sakte hain aur bahar bhi.",
                example: "class Student {\npublic:\n    string name;\n    int age;\n    float marks;\n    \n    void display() {\n        cout << \"Name: \" << name << \"\\n\";\n        cout << \"Age: \" << age << \"\\n\";\n        cout << \"Marks: \" << marks << endl;\n    }\n};\n\nint main() {\n    Student s1;\n    s1.name = \"Rahul\";\n    s1.age = 20;\n    s1.marks = 85.5;\n    s1.display();\n    \n    return 0;\n}"
              },
              {
                title: "Constructors aur Destructors",
                explanation: "Constructor class ka special member function hai jo object creation par automatically call hota hai. Iska naam class ke naam jaisa hota hai aur iska koi return type nahi hota. Default constructor (no parameters), parameterized constructor, aur copy constructor teen types hain. Destructor (~ClassName) object destroy hote waqt call hota hai, cleanup ke liye.",
                example: "class Rectangle {\nprivate:\n    int length, width;\n    \npublic:\n    // Default constructor\n    Rectangle() {\n        length = 0;\n        width = 0;\n    }\n    \n    // Parameterized constructor\n    Rectangle(int l, int w) {\n        length = l;\n        width = w;\n        cout << \"Rectangle created!\\n\";\n    }\n    \n    // Destructor\n    ~Rectangle() {\n        cout << \"Rectangle destroyed!\\n\";\n    }\n    \n    int area() {\n        return length * width;\n    }\n};\n\nRectangle r1;           // Default constructor\nRectangle r2(10, 5);    // Parameterized\ncout << \"Area: \" << r2.area() << endl;"
              },
              {
                title: "Access Specifiers: public, private, protected",
                explanation: "public members class ke andar aur bahar dono accessible hain. private members sirf class ke andar accessible hain (default). protected members inheritance mein kaam aate hain. Getters aur setters private members ko access karne ke controlled way provide karte hain. Data hiding encapsulation ka main principle hai.",
                example: "class BankAccount {\nprivate:\n    double balance;\n    string accountNumber;\n    \npublic:\n    BankAccount(string accNo, double initialBal) {\n        accountNumber = accNo;\n        balance = initialBal;\n    }\n    \n    void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n            cout << amount << \" deposited\\n\";\n        }\n    }\n    \n    double getBalance() {\n        return balance;\n    }\n};\n\nBankAccount acc(\"12345\", 1000);\nacc.deposit(500);\ncout << \"Balance: \" << acc.getBalance() << endl;"
              }
            ],
            codeExamples: [
              {
                title: "this Pointer aur Constructor Initialization List",
                language: "cpp",
                code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Employee {\nprivate:\n    int id;\n    string name;\n    double salary;\n    \npublic:\n    // Constructor with initialization list\n    Employee(int id, string name, double salary) \n        : id(id), name(name), salary(salary) {\n        cout << "Employee created\\n";\n    }\n    \n    // Copy constructor\n    Employee(const Employee &e) {\n        id = e.id;\n        name = e.name;\n        salary = e.salary;\n        cout << "Copy constructor called\\n";\n    }\n    \n    void display() const {\n        cout << "ID: \" << id << \"\\n\";\n        cout << "Name: \" << name << \"\\n\";\n        cout << "Salary: \" << salary << endl;\n    }\n};\n\nint main() {\n    Employee e1(101, "Priya", 50000);\n    Employee e2 = e1;  // Copy constructor\n    \n    e1.display();\n    e2.display();\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Class ka default access specifier private hai, struct ka public.",
              "Constructor overloading possible hai - multiple constructors different parameters ke saath.",
              "Destructor mein resources (files, memory) cleanup karein.",
              "const keyword member functions mein object ko modify se bachata hai.",
              "Initialization list const members aur references initialize karne ke liye zaroori hai."
            ],
            commonMistakes: [
              {
                mistake: "Private members ko directly access karne ki koshish",
                correction: "Private members ko sirf class ke member functions access kar sakte hain. Bahar se access ke liye getters/setters (public) use karein."
              },
              {
                mistake: "Constructor mein return type dena",
                correction: "Constructor ka koi return type nahi hota - na void, na kuch aur. Iska naam class ke naam jaisa hota hai."
              }
            ],
            interviewQuestions: [
              "Class aur structure mein kya difference hai?",
              "Copy constructor kab call hota hai?",
              "Initialization list vs assignment constructor mein - kya fark hai?",
            ],
            practiceExercises: [
              {
                question: "Ek class Book banao jisme private members hain: title, author, price. Public methods hain: getter/setter aur display().",
                hint: "string datatype use karo, constructor mein values initialize karo.",
                difficulty: "medium"
              },
              {
                question: "Ek class Calculator banao jisme static function ho add, subtract, multiply, divide.",
                hint: "static keyword use karo functions ke aage, taki bina object banaye call kar sakein.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "cpp-oops-quiz",
              title: "Object-Oriented Programming Quiz",
              questions: [
                {
                  id: "cpp-oops-q1",
                  question: "Class ka default access specifier kya hota hai?",
                  options: ["public", "private", "protected", "friend"],
                  correctAnswer: 1,
                  explanation: "Class ka default access specifier private hota hai."
                },
                {
                  id: "cpp-oops-q2",
                  question: "Constructor ka kya return type hota hai?",
                  options: ["void", "int", "Koi return type nahi", "bool"],
                  correctAnswer: 2,
                  explanation: "Constructor ka koi return type nahi hota."
                },
                {
                  id: "cpp-oops-q3",
                  question: "Object destroy hote waqt kaunsa special function call hota hai?",
                  options: ["Constructor", "Destructor", "Finalizer", "Cleaner"],
                  correctAnswer: 1,
                  explanation: "Destructor (~ClassName) object destroy hote waqt automatically call hota hai."
                },
                {
                  id: "cpp-oops-q4",
                  question: "Class ke member function mein current object access karne ke liye kaunsa pointer use hota hai?",
                  options: ["self", "me", "this", "current"],
                  correctAnswer: 2,
                  explanation: "this pointer current object ka address contain karta hai."
                }
              ]
            }
          }
        },
        {
          id: "cpp-inheritance",
          title: "Inheritance aur Polymorphism",
          description: "Inheritance types, function overriding, virtual functions, abstract classes aur polymorphism seekhein.",
          order: 7,
          duration: "55 min",
          content: {
            introduction: "Inheritance aur Polymorphism OOP ke important concepts hain. Inheritance se nayi class existing class ki properties inherit kar sakti hai, code reuse promote hota hai. Polymorphism ka matlab hai 'many forms' - ek interface multiple implementations. C++ mein virtual functions, abstract classes, function overriding ke through polymorphism achieve kiya jaata hai. Is lesson mein in concepts ko detail mein samjhenge.",
            sections: [
              {
                title: "Inheritance Types",
                explanation: "Inheritance mein base (parent) class se derived (child) class banati hai. Public inheritance: base ke public members derived mein public ho jaate hain. Protected inheritance: public/protected members derived mein protected ho jaate hain. Private inheritance: saare members derived mein private ho jaate hain. Multiple inheritance mein ek class multiple base classes se inherit kar sakti hai.",
                example: "// Base class\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Animal eating...\" << endl;\n    }\n};\n\n// Derived class - Single inheritance\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Dog barking!\" << endl;\n    }\n};\n\n// Multiple inheritance\nclass Flyer {\npublic:\n    void fly() { cout << \"Flying...\" << endl; }\n};\n\nclass Bird : public Animal, public Flyer {};\n\n// Multilevel inheritance\nclass Puppy : public Dog {};"
              },
              {
                title: "Function Overriding aur Virtual Functions",
                explanation: "Function overriding mein derived class base class ke function ko re-define karta hai. virtual keyword base class mein function ko overrideable banata hai. Late binding (dynamic) runtime par decide karta hai ki kaunsa version call hoga. Override keyword (C++11) compile-time check provide karta hai ki function actually override kar raha hai.",
                example: "class Shape {\npublic:\n    virtual double area() {\n        return 0;\n    }\n    \n    virtual void draw() {\n        cout << \"Drawing shape\" << endl;\n    }\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << \"Drawing circle\" << endl;\n    }\n};"
              },
              {
                title: "Abstract Classes aur Pure Virtual Functions",
                explanation: "Pure virtual function ki declaration mein = 0 lagta hai aur iska koi implementation nahi hota. Jis class mein pure virtual function ho wo abstract class kehlati hai. Abstract class ka object nahi bana sakte. Derived class ko pure virtual function ka implementation dena mandatory hai. Interfaces C++ mein pure virtual functions ke through achieve hote hain.",
                example: "// Abstract class\nclass Vehicle {\npublic:\n    virtual void start() = 0;  // Pure virtual\n    virtual void stop() = 0;\n    \n    virtual ~Vehicle() {}\n};\n\nclass Car : public Vehicle {\npublic:\n    void start() override {\n        cout << \"Car starting...\" << endl;\n    }\n    \n    void stop() override {\n        cout << \"Car stopping...\" << endl;\n    }\n};\n\n// Vehicle v; // Error: cannot instantiate abstract class\nCar c;\nc.start();"
              }
            ],
            codeExamples: [
              {
                title: "Runtime Polymorphism - Virtual Function Table",
                language: "cpp",
                code: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show() {\n        cout << "Base class show" << endl;\n    }\n    \n    virtual ~Base() {\n        cout << "Base destructor" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void show() override {\n        cout << "Derived class show" << endl;\n    }\n    \n    ~Derived() override {\n        cout << "Derived destructor" << endl;\n    }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    ptr->show();  // Calls Derived::show() - runtime polymorphism\n    \n    delete ptr;  // Correct destructor called due to virtual\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Virtual destructor hamesha base class mein declare karein agar virtual functions hon.",
              "Multiple inheritance mein diamond problem solve karne ke liye virtual inheritance use karein.",
              "Override keyword optional hai lekin bugs catch karne mein madad karta hai.",
              "Pure virtual function wali class ko instantiate nahi kar sakte.",
              "C++ mein Java ki tarah interface keyword nahi hai, pure virtual classes se achieve karte hain."
            ],
            commonMistakes: [
              {
                mistake: "Base class destructor virtual nahi rakna",
                correction: "Agar base class mein virtual functions hain to destructor bhi virtual hona chahiye. Otherwise derived class ka destructor call nahi hoga, memory leak hoga."
              },
              {
                mistake: "Multiple inheritance se diamond problem",
                correction: "Virtual inheritance use karein: class Derived : virtual public Base. Isse common base class ka single instance banta hai."
              }
            ],
            interviewQuestions: [
              "Virtual function kaise kaam karta hai internally?",
              "Abstract class aur concrete class mein kya difference hai?",
              "Diamond problem kya hai aur C++ mein ise kaise solve karte hain?",
            ],
            practiceExercises: [
              {
                question: "Ek banking system banao jisme Account base class ho, SavingsAccount aur CurrentAccount derived classes hon. Interest calculation ka virtual function ho.",
                hint: "Account mein virtual calculateInterest() = 0 rakho. SavingsAccount mein simple interest, CurrentAccount mein koi interest nahi.",
                difficulty: "hard"
              },
              {
                question: "Abstract class 'Shape' banao jisme pure virtual functions area() aur perimeter() ho. Circle aur Rectangle classes ise implement karein.",
                hint: "Circle mein radius, Rectangle mein length/width rakho. Formulae accordingly implement karo.",
                difficulty: "hard"
              }
            ],
            quiz: {
              id: "cpp-inheritance-quiz",
              title: "Inheritance aur Polymorphism Quiz",
              questions: [
                {
                  id: "cpp-inherit-q1",
                  question: "Function overriding mein derived class base class ke function ko _______ karti hai?",
                  options: ["Overload", "Override", "Hide", "Delete"],
                  correctAnswer: 1,
                  explanation: "Function overriding mein derived class base class ke function ko redefine (override) karta hai."
                },
                {
                  id: "cpp-inherit-q2",
                  question: "Abstract class ka object bana sakte hain?",
                  options: ["Haan", "Nahi", "Kabhi kabhi", "Sirf derived class mein"],
                  correctAnswer: 1,
                  explanation: "Abstract class ka object nahi bana sakte kyunki iske pure virtual functions hote hain."
                },
                {
                  id: "cpp-inherit-q3",
                  question: "Pure virtual function declaration mein kya hota hai?",
                  options: ["= 1", "= 0", "= virtual", "= pure"],
                  correctAnswer: 1,
                  explanation: "Pure virtual function declaration mein = 0 lagta hai."
                },
                {
                  id: "cpp-inherit-q4",
                  question: "Multiple inheritance se related problem ka naam kya hai?",
                  options: ["Triangle problem", "Diamond problem", "Square problem", "Circle problem"],
                  correctAnswer: 1,
                  explanation: "Diamond problem multiple inheritance mein tab hota hai jab same base class multiple paths se derive ho."
                }
              ]
            }
          }
        },
        {
          id: "cpp-stl",
          title: "Standard Template Library (STL)",
          description: "STL containers, algorithms, iterators aur lambda expressions ko detail mein seekhein.",
          order: 8,
          duration: "55 min",
          content: {
            introduction: "STL (Standard Template Library) C++ ki powerful library hai jo generic algorithms, containers, iterators, aur functions provide karti hai. STL teen main components mein divide hai: Containers (data structures), Algorithms (sorting, searching), aur Iterators (elements access). Templates ka use karke STL different data types ke saath kaam karta hai. Is lesson mein hum STL ke important components ko seekhenge.",
            sections: [
              {
                title: "STL Containers - Sequence aur Associative",
                explanation: "Sequence containers: vector (dynamic array), list (doubly linked list), deque (double-ended queue), array (fixed-size). Associative containers: set (unique elements, sorted), map (key-value pairs), multiset, multimap. Unordered containers (C++11): unordered_set, unordered_map (hash-based, faster). Container adapters: stack, queue, priority_queue.",
                example: "#include <vector>\n#include <set>\n#include <map>\n\n// Vector\nvector<int> vec = {10, 20, 30};\nvec.push_back(40);\ncout << \"Vector: \";\nfor (int v : vec) cout << v << \" \";\n\n// Set\nset<string> names = {\"Rahul\", \"Priya\", \"Amit\"};\nnames.insert(\"Sita\");\n\n// Map\nmap<string, int> marks;\nmarks[\"Rahul\"] = 85;\nmarks[\"Priya\"] = 92;\ncout << \"\\nMarks: \" << marks[\"Rahul\"];"
              },
              {
                title: "STL Algorithms",
                explanation: "STL algorithms <algorithm> header mein hain. Sorting: sort(), partial_sort(). Searching: find(), binary_search(). Modifying: copy(), fill(), transform(). Numeric: accumulate(), count(). Min/Max: min(), max(), minmax_element(). Algorithms iterators ke through containers ke saath work karte hain, isliye wo generic hain.",
                example: "#include <algorithm>\n#include <numeric>\n\nvector<int> nums = {5, 2, 8, 1, 9, 3};\n\n// Sorting\nsort(nums.begin(), nums.end());\n\n// Finding\nauto it = find(nums.begin(), nums.end(), 8);\nif (it != nums.end()) {\n    cout << \"Found: \" << *it << endl;\n}\n\n// Binary search (sorted array needed)\nbool exists = binary_search(nums.begin(), nums.end(), 3);\n\n// Accumulate\nint sum = accumulate(nums.begin(), nums.end(), 0);\ncout << \"Sum: \" << sum << endl;\n\n// Count\nint count_5 = count(nums.begin(), nums.end(), 5);"
              },
              {
                title: "Iterators aur Lambda Expressions",
                explanation: "Iterators pointers ki tarah hain jo container elements ke through traverse karte hain. Types: input, output, forward, bidirectional, random-access. begin() first element, end() last ke baad ka position. Lambda expressions anonymous functions hain jo STL algorithms ke saath use hote hain. [] capture clause, () parameters, {} body.",
                example: "vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8};\n\n// Iterator\ncout << \"First three: \";\nfor (auto it = nums.begin(); it != nums.begin() + 3; ++it) {\n    cout << *it << \" \";\n}\n\n// Lambda with algorithms\nvector<int> evens;\ncopy_if(nums.begin(), nums.end(), \n        back_inserter(evens),\n        [](int n) { return n % 2 == 0; });\n\ncout << \"\\nEven numbers: \";\nfor (int e : evens) cout << e << \" \";\n\n// Sort with custom comparator\nsort(nums.begin(), nums.end(), [](int a, int b) {\n    return a > b; // Descending\n});"
              }
            ],
            codeExamples: [
              {
                title: "Practical STL Usage - Student Database",
                language: "cpp",
                code: '#include <iostream>\n#include <vector>\n#include <map>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int marks;\n    char grade;\n};\n\nint main() {\n    vector<Student> students = {\n        {"Rahul", 85, \'A\'},\n        {"Priya", 92, \'A\'},\n        {"Amit", 78, \'B\'},\n        {"Sita", 95, \'A\'},\n        {"Rohan", 65, \'C\'}\n    };\n    \n    // Sort by marks (descending)\n    sort(students.begin(), students.end(),\n         [](const Student &a, const Student &b) {\n             return a.marks > b.marks;\n         });\n    \n    cout << "Ranking:\\n";\n    for (const auto &s : students) {\n        cout << s.name << " - " << s.marks << " (" << s.grade << ")\\n";\n    }\n    \n    // Filter A grade students\n    cout << "\\nA Grade students: ";\n    for (const auto &s : students) {\n        if (s.grade == \'A\') cout << s.name << " ";\n    }\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Vector dynamic array hai, random access fast hai, insertion/deletion slow hai.",
              "List doubly linked list hai, insertion/deletion fast hai, random access nahi hai.",
              "Map O(log n) access time deta hai balance BST ki wajah se.",
              "Unordered containers (hash-based) average O(1) access time dete hain.",
              "Algorithms ke saath lambda expressions use karna modern C++ style hai."
            ],
            commonMistakes: [
              {
                mistake: "Iterator invalidation - insertion/erasure ke baad iterator use karna",
                correction: "Container modify karne ke baad purane iterators invalid ho sakte hain. Naye iterators lo ya re-assign karo."
              },
              {
                mistake: "Sorted container (set, map) ke elements modify karna",
                correction: "Associative containers ke elements const hain. Remove karo phir new element insert karo."
              }
            ],
            interviewQuestions: [
              "Vector aur list mein kya difference hai?",
              "Map aur unordered_map mein kya antar hai?",
              "Iterator invalid kya hota hai?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo vector mein 10 integers store kare, sort kare, unique elements nikaale, aur sum calculate kare.",
                hint: "sort(), unique() (erase-remove idiom), accumulate() use karo.",
                difficulty: "medium"
              },
              {
                question: "Map use karke word frequency counter banao jo text file ke words count kare.",
                hint: "Map<string, int> use karo, har word ke liye ++count[karo]. File se read karne ke liye ifstream use karo.",
                difficulty: "hard"
              }
            ],
            quiz: {
              id: "cpp-stl-quiz",
              title: "STL Quiz",
              questions: [
                {
                  id: "cpp-stl-q1",
                  question: "Vector mein element add karne ke liye kaunsa method use hota hai?",
                  options: ["add()", "push_back()", "insert()", "append()"],
                  correctAnswer: 1,
                  explanation: "push_back() vector ke end mein naya element add karta hai."
                },
                {
                  id: "cpp-stl-q2",
                  question: "Map mein key-value pair store karne ke liye kaunsa container use hota hai?",
                  options: ["Set", "Vector", "Map", "List"],
                  correctAnswer: 2,
                  explanation: "Map key-value pairs store karta hai jahan har key unique hoti hai."
                },
                {
                  id: "cpp-stl-q3",
                  question: "sort() algorithm kis header mein hai?",
                  options: ["<vector>", "<algorithm>", "<numeric>", "<iterator>"],
                  correctAnswer: 1,
                  explanation: "sort() algorithm <algorithm> header mein define hai."
                },
                {
                  id: "cpp-stl-q4",
                  question: "Kaunsa container hash-based implementation use karta hai?",
                  options: ["map", "set", "unordered_map", "vector"],
                  correctAnswer: 2,
                  explanation: "unordered_map hash table implementation use karta hai aur O(1) average access time deta hai."
                }
              ]
            }
          }
        },
        {
          id: "cpp-exceptions",
          title: "Exception Handling",
          description: "Try, catch, throw, standard exceptions, RAII aur exception safety concepts seekhein.",
          order: 9,
          duration: "45 min",
          content: {
            introduction: "Exception handling C++ mein runtime errors ko gracefully handle karne ka mechanism hai. Exceptions program mein unexpected situations ko handle karte hain jaise division by zero, file not found, invalid input. throw statement exception generate karta hai, try block code ko monitor karta hai, catch block exception handle karta hai. C++ mein exception safety aur RAII important concepts hain. Is lesson mein exception handling ko detail mein samjhenge.",
            sections: [
              {
                title: "Try, Catch, Throw Basics",
                explanation: "try block mein suspicious code rakhte hain. throw statement exception generate karta hai (kisi bhi type ka ho sakta hai: int, string, class). catch block specific type ke exceptions ko handle karta hai. Multiple catch blocks different exception types ke liye ho sakte hain. catch(...) sabhi exceptions catch karta hai (catch-all handler). throw ke baad current block exit ho jaata hai.",
                example: "try {\n    int age;\n    cout << \"Age enter karo: \";\n    cin >> age;\n    \n    if (age < 0) {\n        throw \"Negative age not allowed!\";\n    }\n    if (age > 150) {\n        throw 150;\n    }\n    \n    cout << \"Age: \" << age << endl;\n}\ncatch (const char* msg) {\n    cout << \"String exception: \" << msg << endl;\n}\ncatch (int maxAge) {\n    cout << \"Age \" << maxAge << \" se zyada nahi ho sakta\" << endl;\n}\ncatch (...) {\n    cout << \"Unknown exception occured\" << endl;\n}"
              },
              {
                title: "Standard Exception Classes",
                explanation: "C++ standard library <stdexcept> mein predefined exception classes provide karti hai: runtime_error, logic_error, out_of_range, invalid_argument, bad_alloc. Yeh sab exception class se derive hote hain. what() method exception ka description return karta hai. Custom exception classes bana sakte hain exception class inherit karke.",
                example: "#include <stdexcept>\n#include <cmath>\n\ndouble squareRoot(double x) {\n    if (x < 0) {\n        throw invalid_argument(\"Negative number ka square root nahi nikal sakte\");\n    }\n    return sqrt(x);\n}\n\nint getElement(vector<int>& vec, int index) {\n    if (index < 0 || index >= vec.size()) {\n        throw out_of_range(\"Index out of bounds\");\n    }\n    return vec[index];\n}\n\ntry {\n    cout << squareRoot(-5) << endl;\n} catch (const exception& e) {\n    cout << \"Error: \" << e.what() << endl;\n}"
              },
              {
                title: "RAII aur Exception Safety",
                explanation: "RAII (Resource Acquisition Is Initialization) C++ ka important idiom hai jisme resources (memory, files, locks) constructor mein acquire hote hain aur destructor mein release hote hain. Isse exception-safe code likhna easy ho jaata hai. Resource leak nahi hota kyunki destructor automatically call hota hai chahe exception aaye ya nahi. Smart pointers RAII follow karte hain.",
                example: "class FileHandler {\nprivate:\n    FILE* file;\npublic:\n    FileHandler(const char* filename) {\n        file = fopen(filename, \"r\");\n        if (!file) {\n            throw runtime_error(\"File nahi khul paya\");\n        }\n    }\n    \n    ~FileHandler() {\n        if (file) {\n            fclose(file);\n            cout << \"File closed\" << endl;\n        }\n    }\n    \n    void read(char* buffer, int size) {\n        // File operations - exception aa bhi gayi to destructor call hoga\n    }\n};\n\ntry {\n    FileHandler fh(\"data.txt\");\n    char buffer[100];\n    fh.read(buffer, 100);\n} catch (const exception& e) {\n    cout << \"Exception: \" << e.what() << endl;\n}\n// File automatically closed"
              }
            ],
            codeExamples: [
              {
                title: "Custom Exception Class aur Stack Unwinding",
                language: "cpp",
                code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass BankException : public exception {\nprivate:\n    string message;\npublic:\n    BankException(const string& msg) : message(msg) {}\n    \n    const char* what() const noexcept override {\n        return message.c_str();\n    }\n};\n\nclass BankAccount {\nprivate:\n    double balance;\npublic:\n    BankAccount(double initial) {\n        if (initial < 0) {\n            throw BankException("Initial balance negative nahi ho sakta");\n        }\n        balance = initial;\n    }\n    \n    void withdraw(double amount) {\n        if (amount > balance) {\n            throw BankException("Insufficient balance");\n        }\n        if (amount < 0) {\n            throw BankException("Negative amount withdraw nahi kar sakte");\n        }\n        balance -= amount;\n    }\n    \n    double getBalance() const { return balance; }\n};\n\nint main() {\n    try {\n        BankAccount acc(1000);\n        cout << "Balance: " << acc.getBalance() << endl;\n        acc.withdraw(1500);  // Exception\n    } catch (const BankException& e) {\n        cout << "Bank Error: " << e.what() << endl;\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "Exception ko by reference catch karein (catch(const exception& e)) slicing se bachne ke liye.",
              "Destructor mein exceptions throw nahi karna chahiye - undefined behavior.",
              "noexcept keyword (C++11) function ko exception throw nahi karne ka guarantee deta hai.",
              "Standard library containers bhi exceptions throw kar sakte hain (bad_alloc, etc).",
              "C++ exception handling overhead hai lekin error codes se clean code milta hai."
            ],
            commonMistakes: [
              {
                mistake: "Exception ko by value catch karna",
                correction: "Exception ko by reference catch karein (const exception& e). By value catch karne par object slicing ho sakti hai aur extra copy hota hai."
              },
              {
                mistake: "Destructor mein exception throw karna",
                correction: "Destructor mein throw nahi karna chahiye. Agar destructor throw kare aur stack unwinding ke dauran doosra exception active ho to terminate() call hoga."
              }
            ],
            interviewQuestions: [
              "Stack unwinding kya hota hai?",
              "Exception specification kya hai aur C++11 mein kya change aaya?",
              "Error codes vs exceptions - kaunsa better hai?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo division kare aur zero division error ko exception se handle kare.",
                hint: "throw karne se pehle check karo ki denominator zero to nahi hai. double type mein division by zero infinity return karta hai.",
                difficulty: "medium"
              },
              {
                question: "Ek custom exception class 'InvalidInputException' banao jo input validation errors handle kare.",
                hint: "exception class se inherit karo, constructor mein error message lo, what() override karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "cpp-exceptions-quiz",
              title: "Exception Handling Quiz",
              questions: [
                {
                  id: "cpp-exc-q1",
                  question: "Exception generate karne ke liye kaunsa keyword use hota hai?",
                  options: ["try", "catch", "throw", "raise"],
                  correctAnswer: 2,
                  explanation: "throw keyword exception generate (throw) karne ke liye use hota hai."
                },
                {
                  id: "cpp-exc-q2",
                  question: "Saare exceptions ko catch karne ke liye kaunsa handler use karte hain?",
                  options: ["catch()", "catch(exception)", "catch(...)", "catch(all)"],
                  correctAnswer: 2,
                  explanation: "catch(...) sabhi types ke exceptions ko catch karta hai (catch-all handler)."
                },
                {
                  id: "cpp-exc-q3",
                  question: "Standard exception class ka base class kaunsa hai?",
                  options: ["error", "runtime_error", "exception", "logic_error"],
                  correctAnswer: 2,
                  explanation: "exception class C++ standard library mein sabhi exceptions ka base class hai."
                },
                {
                  id: "cpp-exc-q4",
                  question: "C++11 mein exception throw guarantee ke liye kaunsa keyword aaya?",
                  options: ["noexcept", "nothrow", "throws", "safe"],
                  correctAnswer: 0,
                  explanation: "noexcept keyword (C++11) function ko exception throw nahi karne ka guarantee deta hai."
                }
              ]
            }
          }
        },
        {
          id: "cpp-file-handling",
          title: "File Handling aur Streams",
          description: "File operations, text aur binary files, stream state flags aur error handling seekhein.",
          order: 10,
          duration: "50 min",
          content: {
            introduction: "File handling C++ mein permanent storage mein data read/write karne ki facility deta hai. C++ streams abstracts input/output operations ko. fstream library teen main classes provide karti hai: ifstream (input file stream), ofstream (output file stream), fstream (both). Files text mode aur binary mode mein open kar sakte hain. Is lesson mein file operations, streams, aur error handling seekhenge.",
            sections: [
              {
                title: "File Operations - Open, Read, Write, Close",
                explanation: "File open karne ke liye constructor ya open() method use karte hain. Modes: ios::in (read), ios::out (write), ios::app (append), ios::binary, ios::ate (at end). File read karne ke liye >> operator, getline(), get() use kar sakte hain. File write karne ke liye << operator use karte hain. is_open() se check karte hain file khuli ya nahi. close() se file band karte hain.",
                example: "#include <fstream>\n\n// Writing to file\nofstream outFile(\"students.txt\");\nif (outFile.is_open()) {\n    outFile << \"Name: Rahul, Marks: 85\\n\";\n    outFile << \"Name: Priya, Marks: 92\\n\";\n    outFile.close();\n} else {\n    cout << \"File nahi khul paya\" << endl;\n}\n\n// Reading from file\nifstream inFile(\"students.txt\");\nstring line;\nwhile (getline(inFile, line)) {\n    cout << line << endl;\n}\ninFile.close();"
              },
              {
                title: "File Modes aur Binary Files",
                explanation: "Text mode mein data readable format mein store hota hai. Binary mode mein raw bytes store hote hain. Binary files size mein chhote hote hain aur fast read/write hote hain. seekg() (get position) aur seekp() (put position) se file pointer move kar sakte hain. tellg() aur tellp() se current position pata kar sakte hain. Binary files class objects store karne ke liye use hote hain.",
                example: "// Binary file writing\nstruct Student {\n    char name[50];\n    int marks;\n};\n\nStudent s = {\"Rahul\", 85};\n\nofstream outFile(\"data.bin\", ios::binary);\nif (outFile.is_open()) {\n    outFile.write(reinterpret_cast<char*>(&s), sizeof(s));\n    outFile.close();\n}\n\n// Binary file reading\nStudent s2;\nifstream inFile(\"data.bin\", ios::binary);\nif (inFile.is_open()) {\n    inFile.read(reinterpret_cast<char*>(&s2), sizeof(s2));\n    cout << \"Name: \" << s2.name << \", Marks: \" << s2.marks << endl;\n    inFile.close();\n}"
              },
              {
                title: "Error Handling aur State Flags",
                explanation: "File streams mein state flags hote hain: good() sab kuch theek hai, eof() end of file reach, fail() logical error (wrong type), bad() read/write error. clear() flags reset karta hai. Error handling file operations mein important hai. Multiple files simultaneously open kar sakte hain.",
                example: "ifstream file(\"nonexistent.txt\");\n\nif (!file) {\n    cout << \"File nahi mila!\" << endl;\n}\n\n// Reading with error check\nint number;\nfile >> number;\nif (file.fail()) {\n    cout << \"Data read karne mein error\" << endl;\n    file.clear(); // Reset error flags\n}\n\n// Complete error handling\ntry {\n    ifstream dataFile(\"data.txt\");\n    if (!dataFile.is_open()) {\n        throw runtime_error(\"File open nahi ho paya\");\n    }\n    // Process file\n    dataFile.close();\n} catch (const exception& e) {\n    cout << \"Error: \" << e.what() << endl;\n}"
              }
            ],
            codeExamples: [
              {
                title: "CSV File Reading aur Data Processing",
                language: "cpp",
                code: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstruct Product {\n    string name;\n    double price;\n    int quantity;\n};\n\nint main() {\n    // Creating CSV file\n    ofstream outFile(\"products.csv\");\n    outFile << "Laptop,75000,10\\nMobile,25000,25\\nTablet,35000,15\\n";\n    outFile.close();\n    \n    // Reading CSV file\n    ifstream inFile(\"products.csv\");\n    string line;\n    vector<Product> products;\n    \n    while (getline(inFile, line)) {\n        stringstream ss(line);\n        string item;\n        Product p;\n        \n        getline(ss, p.name, \',\');\n        getline(ss, item, \',\');\n        p.price = stod(item);\n        getline(ss, item, \',\');\n        p.quantity = stoi(item);\n        \n        products.push_back(p);\n    }\n    \n    // Display\n    double total = 0;\n    for (const auto& p : products) {\n        cout << p.name << " - Rs\" << p.price \n             << " x \" << p.quantity << endl;\n        total += p.price * p.quantity;\n    }\n    cout << "Total inventory value: Rs\" << total << endl;\n    \n    inFile.close();\n    return 0;\n}'
              }
            ],
            notes: [
              "Hamesha close() call karein ya RAII ka use karein destructor cleanup ke liye.",
              "Binary files mein sizeof() se structure ka size nikal kar read/write karein.",
              "getline() newline characters read karta hai, default delimiter '\\n' hai.",
              "stringstream data parsing ke liye use hota hai, especially CSV/text files.",
              "File operations ke baad hamesha error check karein."
            ],
            commonMistakes: [
              {
                mistake: "File close karna bhoolna",
                correction: "Hamesha file close karein ya RAII pattern use karein. File open rehne se resources waste hote hain aur data corrupt ho sakta hai."
              },
              {
                mistake: "Binary file mein structure pointer ko bina reinterpret_cast ke use karna",
                correction: "Binary read/write mein reinterpret_cast<char*>() use karna jaroori hai kyunki read/write functions char* expect karte hain."
              }
            ],
            interviewQuestions: [
              "Text file aur binary file mein kya difference hai?",
              "seekg() aur seekp() mein kya difference hai?",
              "File state flags kya hain?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo 5 student records (name, marks, grade) file mein store kare aur phir read karke display kare.",
                hint: "Structure banao, ofstream se write karo, ifstream se read karo. getline for strings, >> for numbers.",
                difficulty: "medium"
              },
              {
                question: "Binary file mein employee records store/retrieve karne ka program likho.",
                hint: "Binary mode mein open karo, write() aur read() methods use karo. sizeof() se size nikaalo.",
                difficulty: "hard"
              }
            ],
            quiz: {
              id: "cpp-file-handling-quiz",
              title: "File Handling Quiz",
              questions: [
                {
                  id: "cpp-file-q1",
                  question: "Output file stream ke liye kaunsa class use hota hai?",
                  options: ["ifstream", "ofstream", "fstream", "iostream"],
                  correctAnswer: 1,
                  explanation: "ofstream output file stream hai, files mein write karne ke liye use hota hai."
                },
                {
                  id: "cpp-file-q2",
                  question: "File mein append karne ke liye kaunsa mode use karte hain?",
                  options: ["ios::in", "ios::out", "ios::app", "ios::trunc"],
                  correctAnswer: 2,
                  explanation: "ios::app mode file ke end mein content add (append) karta hai."
                },
                {
                  id: "cpp-file-q3",
                  question: "File ka end check karne ke liye kaunsa method use hota hai?",
                  options: ["endeof()", "eof()", "end()", "isEnd()"],
                  correctAnswer: 1,
                  explanation: "eof() method check karta hai ki file end par pahunch gayi hai ya nahi."
                },
                {
                  id: "cpp-file-q4",
                  question: "Binary file read/write ke liye kaunsa type cast use karte hain?",
                  options: ["static_cast", "dynamic_cast", "reinterpret_cast", "const_cast"],
                  correctAnswer: 2,
                  explanation: "reinterpret_cast<char*>() binary read/write mein pointer ko char* mein convert karne ke liye use hota hai."
                }
              ]
            }
          }
        },
        {
          id: "cpp-move-semantics",
          title: "Modern C++ Features (C++11/14/17)",
          description: "Move semantics, smart pointers, auto, decltype, constexpr aur C++17 features seekhein.",
          order: 11,
          duration: "50 min",
          content: {
            introduction: "Modern C++ (C++11, C++14, C++17, C++20) mein kai naye features aaye hain jo code ko safer, faster, aur more expressive banate hain. Move semantics, perfect forwarding, auto, decltype, constexpr, variadic templates, structured bindings, filesystem library - yeh sab modern C++ ki important features hain. Is lesson mein hum in modern features ko detail mein samjhenge.",
            sections: [
              {
                title: "Move Semantics aur Rvalue References",
                explanation: "Move semantics expensive copies se bachne ke liye hai. Rvalue reference (T&&) temporary objects bind karta hai. std::move() lvalue ko rvalue mein convert karta hai. Move constructor resources steal karta hai copy karne ke bajaye. Yeh temporary objects ke liye performance improve karta hai. noexcept move constructor ko guarantee deta hai.",
                example: "class Buffer {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    // Constructor\n    Buffer(size_t s) : size(s) {\n        data = new int[s];\n        cout << \"Constructor called\\n\";\n    }\n    \n    // Move constructor\n    Buffer(Buffer&& other) noexcept \n        : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n        cout << \"Move constructor called\\n\";\n    }\n    \n    // Destructor\n    ~Buffer() {\n        delete[] data;\n        cout << \"Destructor called\\n\";\n    }\n};\n\nint main() {\n    vector<Buffer> vec;\n    Buffer buf(100);\n    vec.push_back(move(buf)); // Move instead of copy\n    return 0;\n}"
              },
              {
                title: "Auto, Decltype aur Constexpr",
                explanation: "auto keyword compiler ko type deduce karne deta hai. decltype expression ka type bina evaluate kiye batata hai. constexpr compile-time evaluation guarantee karta hai. Constexpr functions compile-time execute ho sakte hain. Yeh features code ko flexible aur efficient banate hain. C++17 mein constexpr lambdas bhi hai.",
                example: "// Auto\n    auto num = 42;           // int\n    auto name = \"Rahul\"s;    // string (C++14)\n    auto result = 3.14 * 2;  // double\n    \n// Constexpr\n    constexpr int getSquare(int x) {\n        return x * x;\n    }\n    \n    constexpr int value = getSquare(5); // Compile-time\n    \n// Decltype\n    int x = 10;\n    decltype(x) y = 20;    // y is int\n    \n    vector<int> vec = {1, 2, 3};\n    for (decltype(vec)::iterator it = vec.begin(); \n         it != vec.end(); ++it) {\n        cout << *it << \" \";\n    }"
              },
              {
                title: "Smart Pointers aur Lambda Enhancements",
                explanation: "Smart pointers (unique_ptr, shared_ptr, weak_ptr) automatic memory management provide karte hain. unique_ptr exclusive ownership, shared_ptr shared ownership (reference counting), weak_ptr cyclic references break karta hai. C++14 mein make_unique aaya. C++17 mein lambdas ko constexpr declare kar sakte hain. Generic lambdas (auto parameters) C++14 mein aaye.",
                example: "// Smart pointers\n    auto ptr1 = make_unique<int>(42);\n    auto ptr2 = make_shared<string>(\"Hello Modern C++\");\n    \n    // Shared pointer with custom deleter\n    auto filePtr = shared_ptr<FILE>(fopen(\"test.txt\", \"w\"), fclose);\n    \n    // Generic lambda (C++14)\n    auto add = [](auto a, auto b) { return a + b; };\n    cout << add(5, 3) << endl;        // int\n    cout << add(3.14, 2.86) << endl;  // double\n    \n    // Structured bindings (C++17)\n    map<string, int> scores = {{\"Rahul\", 85}, {\"Priya\", 92}};\n    for (const auto& [name, score] : scores) {\n        cout << name << \": \" << score << endl;\n    }"
              }
            ],
            codeExamples: [
              {
                title: "Modern C++ Features in Action",
                language: "cpp",
                code: '#include <iostream>\n#include <memory>\n#include <optional>\n#include <variant>\n#include <string_view>\n#include <filesystem>\nusing namespace std;\nnamespace fs = filesystem;\n\n// Optional return type (C++17)\noptional<int> safeDivide(int a, int b) {\n    if (b == 0) return nullopt;\n    return a / b;\n}\n\n// Variant (type-safe union, C++17)\nusing Value = variant<int, double, string>;\n\nint main() {\n    // Optional usage\n    auto result = safeDivide(10, 2);\n    if (result.has_value()) {\n        cout << "Result: " << *result << endl;\n    }\n    \n    // Variant usage\n    Value v1 = 42;\n    Value v2 = 3.14;\n    Value v3 = string("Hello");\n    \n    visit([](auto&& arg) {\n        cout << "Value: " << arg << endl;\n    }, v3);\n    \n    // String_view (non-owning string)\n    string_view sv = "Modern C++ is awesome!";\n    cout << sv.substr(0, 6) << endl;  // Modern\n    \n    // Filesystem (C++17)\n    fs::path p = "data\\\\students.txt";\n    cout << "Filename: " << p.filename() << endl;\n    cout << "Extension: " << p.extension() << endl;\n    \n    return 0;\n}'
              }
            ],
            notes: [
              "C++11 core features: auto, decltype, move semantics, smart pointers, lambdas.",
              "C++14: generic lambdas, return type deduction, make_unique.",
              "C++17: structured bindings, if constexpr, filesystem, optional, variant.",
              "C++20: concepts, ranges, coroutines, modules, spans.",
              "Modern C++ code safer, faster, aur expressive hai."
            ],
            commonMistakes: [
              {
                mistake: "Move ke baad object ko use karna",
                correction: "Move ke baad moved-from object valid but unspecified state mein hota hai. Use nahi karna chahiye ya reset karna chahiye."
              },
              {
                mistake: "Shared pointers ka cyclic reference",
                correction: "Cyclic reference ka weak_ptr use karein. weak_ptr reference count increase nahi karta."
              }
            ],
            interviewQuestions: [
              "Move semantics kya hai aur iska kya faida hai?",
              "unique_ptr aur shared_ptr mein kya difference hai?",
              "auto keyword ke kya faide hain?",
            ],
            practiceExercises: [
              {
                question: "Ek program likho jo move semantics ka use karke large vector ko function se return kare bina copy ke.",
                hint: "Vector already move semantics support karta hai return value optimization (RVO/NRVO) ke saath. Explicit move bhi use kar sakte hain.",
                difficulty: "hard"
              },
              {
                question: "Filesystem library use karke ek directory mein saare .txt files list karo aur unka size display karo.",
                hint: "recursive_directory_iterator use karo, file_size() function. Path extension check karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "cpp-modern-quiz",
              title: "Modern C++ Features Quiz",
              questions: [
                {
                  id: "cpp-modern-q1",
                  question: "C++11 mein move semantics ke liye kaunsa reference type aaya?",
                  options: ["Lvalue reference", "Rvalue reference", "Forward reference", "Universal reference"],
                  correctAnswer: 1,
                  explanation: "Rvalue reference (T&&) move semantics ke liye use hota hai."
                },
                {
                  id: "cpp-modern-q2",
                  question: "unique_ptr ko copy kar sakte hain?",
                  options: ["Haan", "Nahi", "Sirf move", "Depends"],
                  correctAnswer: 1,
                  explanation: "unique_ptr copy nahi kar sakte, sirf move kar sakte hain (exclusive ownership)."
                },
                {
                  id: "cpp-modern-q3",
                  question: "C++17 mein kaunsa type-safe union feature aaya?",
                  options: ["union", "variant", "any", "optional"],
                  correctAnswer: 1,
                  explanation: "variant C++17 mein type-safe union provide karta hai."
                },
                {
                  id: "cpp-modern-q4",
                  question: "Compile-time evaluation guarantee ke liye kaunsa keyword use hota hai?",
                  options: ["static", "const", "constexpr", "inline"],
                  correctAnswer: 2,
                  explanation: "constexpr compile-time evaluation ka guarantee deta hai."
                }
              ]
            }
          }
        }
      ]
    }
  ],
};

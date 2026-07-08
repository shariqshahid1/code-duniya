import { Course } from "@/types";

export const phpCourse: Course = {
  id: "php",
  title: "PHP Programming",
  description: "PHP programming language ko shuru se seekhein. Web development, MySQL integration, Laravel basics aur practical projects ke saath.",
  longDescription: "PHP ek popular server-side scripting language hai jo web development mein use hoti hai. Is course mein aap PHP syntax, control flow, arrays, forms, MySQL, OOP, file upload, aur RESTful APIs seekhenge.",
  lessonsCount: 8,
  duration: "6 hours",
  category: "backend",
  difficulty: "intermediate",
  icon: "code-2",
  color: "purple",
  modules: [
    {
      id: "php-basics",
      title: "PHP Basics aur Advanced Topics",
      description: "PHP language ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "php-intro",
          title: "PHP Introduction",
          description: "PHP syntax, variables, data types aur superglobals seekhenge",
          order: 1,
          duration: "45 min",
          content: {
            introduction: "PHP (Hypertext Preprocessor) ek server-side scripting language hai jo web development ke liye popular hai. Is lesson mein PHP syntax, variables, data types, echo/print seekhenge.",
            sections: [
              {
                title: "PHP Syntax aur Structure",
                explanation: "PHP code <?php ?> tags mein likha jaata hai. .php extension save hota hai. echo output statement. Har statement semicolon end hota hai.",
                example: "<?php\necho \"Namaste PHP Duniya!\";\n$name = \"Rahul\";\necho \"Hello, $name\";\necho 'Hello, ' . $name;\n?>"
              },
              {
                title: "Variables aur Data Types",
                explanation: "PHP variables $ sign se start hote hain. Weakly typed language hai. Data types: string, int, float, bool, array, object, NULL. var_dump() type aur value batata hai.",
                example: "<?php\n$name = \"Rahul\";\n$age = 25;\n$price = 99.99;\n$isActive = true;\n$fruits = array(\"Apple\", \"Banana\", \"Orange\");\necho var_dump($name) . \"\\n\";\necho var_dump($age) . \"\\n\";\n?>"
              },
              {
                title: "Constants aur Superglobals",
                explanation: "define() ya const keyword se constants. Superglobals: $_GET, $_POST, $_SERVER, $_SESSION, $_COOKIE, $_FILES. Predefined arrays hain jo kahi bhi accessible hain.",
                example: "<?php\ndefine(\"PI\", 3.14159);\nconst SITE_NAME = \"CodeDuniya\";\necho PI . \"\\n\";\necho SITE_NAME . \"\\n\";\necho $_SERVER['PHP_SELF'] . \"\\n\";\necho $_SERVER['SERVER_NAME'] . \"\\n\";\n?>"
              }
            ],
            codeExamples: [
              {
                title: "User Input Form",
                language: "php",
                code: "<?php\n$name = $_POST['name'] ?? '';\n$age = $_POST['age'] ?? '';\n?>\n<form method=\"POST\">\n    Naam: <input type=\"text\" name=\"name\"><br>\n    Umar: <input type=\"number\" name=\"age\"><br>\n    <input type=\"submit\" value=\"Submit\">\n</form>\n<?php if ($name): ?>\n    <h3>Namaste <?php echo htmlspecialchars($name); ?>!</h3>\n    <p>Aapki umar <?php echo $age; ?> saal hai.</p>\n<?php endif; ?>"
              }
            ],
            notes: [
              "PHP files .php extension se save hoti hain.",
              "PHP code <?php ?> ke andar likha jaata hai.",
              "Variables $ sign se start hote hain, type declare nahi karte.",
              "echo vs print: echo faster hai, multiple arguments le sakta hai.",
              "htmlspecialchars() XSS attacks se bachata hai."
            ],
            commonMistakes: [
              {
                mistake: "PHP tags ke bahar code likhna",
                correction: "PHP code <?php ?> tags ke andar hi likhein."
              },
              {
                mistake: "Variable ke aage $ bhoolna",
                correction: "PHP mein har variable $ se start hota hai, assign aur access dono time."
              }
            ],
            interviewQuestions: [
              "PHP full form kya hai? - Hypertext Preprocessor. Phle Personal Home Page tha, ab recursive acronym hai.",
              "echo aur print mein kya difference hai? - echo multiple arguments le sakta hai, faster hai, void return. print single argument, 1 return karta hai."
            ],
            practiceExercises: [
              {
                question: "PHP program likho jo current date aur time display kare.",
                hint: "date('Y-m-d H:i:s') function use karo.",
                difficulty: "medium"
              },
              {
                question: "Simple form banao jo user ka naam lega aur welcome message show karega.",
                hint: "POST method form, htmlspecialchars() use karo XSS prevention ke liye.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-intro-quiz",
              title: "PHP Introduction Quiz",
              questions: [
                {
                  id: "php-intro-q1",
                  question: "PHP variable kaunsa sign se start hota hai?",
                  options: ["@", "$", "#", "&"],
                  correctAnswer: 1,
                  explanation: "PHP variable $ sign se start hota hai, jaise $name ya $age."
                },
                {
                  id: "php-intro-q2",
                  question: "PHP output ke liye kaunsa statement use hota hai?",
                  options: ["print", "echo", "Dono", "output"],
                  correctAnswer: 2,
                  explanation: "PHP mein echo aur print dono output statements hain."
                },
                {
                  id: "php-intro-q3",
                  question: "Variable type check karne ka function?",
                  options: ["type()", "var_dump()", "gettype()", "B aur C"],
                  correctAnswer: 3,
                  explanation: "var_dump() aur gettype() dono variable type check karne ke functions hain."
                }
              ]
            }
          }
        },
        {
          id: "php-control",
          title: "Control Flow aur Functions",
          description: "Conditional statements, loops, functions aur type hints seekhenge",
          order: 2,
          duration: "40 min",
          content: {
            introduction: "PHP mein control flow statements (if-else, loops, switch) aur functions seekhenge. PHP functions flexible hain - default parameters, type hints, return types.",
            sections: [
              {
                title: "Conditional Statements",
                explanation: "if-else, elseif, switch conditions par branches execute karte hain. Ternary (? :) aur null coalescing (??) operators concise conditions ke liye.",
                example: "<?php\n$marks = 85;\nif ($marks >= 90) echo \"A+\";\nelseif ($marks >= 80) echo \"A\";\nelse echo \"B\";\n// Ternary\n$result = $marks >= 33 ? \"Pass\" : \"Fail\";\n// Null coalescing\n$name = $_GET['name'] ?? 'Guest';\necho $name;\n?>"
              },
              {
                title: "Loops",
                explanation: "for (counted iterations), foreach (arrays ke liye), while, do-while. foreach most common hai arrays ke saath.",
                example: "<?php\nfor ($i = 1; $i <= 5; $i++) echo $i . \" \";\n$students = [\"Rahul\", \"Priya\", \"Amit\"];\nforeach ($students as $s) echo $s . \" \";\nforeach ($students as $i => $s) echo \"$i: $s \";\n$i = 1;\nwhile ($i <= 5) { echo $i++; }\n?>"
              },
              {
                title: "Functions",
                explanation: "function keyword se define. Type hints (int, string, array) parameters ke liye. Return type declare kar sakte hain. Default parameters. Variable scope - global keyword global variable access ke liye.",
                example: "<?php\nfunction add(int $a, int $b): int {\n    return $a + $b;\n}\nfunction greet(string $name = \"Guest\"): string {\n    return \"Hello, $name\";\n}\n// Variable functions\n$func = \"strlen\";\necho $func(\"Hello\"); // 5\n// Arrow functions (PHP 7.4+)\n$square = fn($n) => $n * $n;\necho $square(5);\n?>"
              }
            ],
            codeExamples: [
              {
                title: "Mathematical Operations",
                language: "php",
                code: "<?php\nfunction factorial(int $n): int {\n    if ($n <= 1) return 1;\n    return $n * factorial($n - 1);\n}\nfunction isPrime(int $n): bool {\n    if ($n < 2) return false;\n    for ($i = 2; $i <= sqrt($n); $i++)\n        if ($n % $i == 0) return false;\n    return true;\n}\necho \"Factorial of 5: \" . factorial(5) . \"\\n\";\nfor ($i = 1; $i <= 20; $i++)\n    if (isPrime($i)) echo $i . \" \";\n?>"
              }
            ],
            notes: [
              "NULL coalescing operator (??) PHP 7 mein aaya.",
              "Type declarations PHP 5+ mein hain, strict_types declare kar sakte hain.",
              "Arrow functions (fn) PHP 7.4+ mein hain.",
              "Global variable ko function mein use karne ke liye global keyword."
            ],
            commonMistakes: [
              {
                mistake: "Function mein global variable access bhoolna",
                correction: "Function ke andar global $var; declare karein ya parameter mein pass karein."
              },
              {
                mistake: "Infinite loop conditions",
                correction: "Loop variable ko update karna na bhoolen."
              }
            ],
            interviewQuestions: [
              "Pass by value vs pass by reference PHP mein? - Default pass by value. & parameter pass by reference. Reference mein original variable modify hota hai.",
              "Type hinting kya hai? - PHP 5+ feature jo function parameters/return types specify karta hai. Strict type checking enable kar sakte hain declare(strict_types=1)."
            ],
            practiceExercises: [
              {
                question: "Function likho jo check kare number palindrome hai ya nahi.",
                hint: "strval() se string mein convert karo, strrev() se reverse karo.",
                difficulty: "medium"
              },
              {
                question: "Associative array ko foreach se traverse karo aur key-value print karo.",
                hint: "foreach($arr as $key => $value) use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-control-quiz",
              title: "Control Flow aur Functions Quiz",
              questions: [
                {
                  id: "php-control-q1",
                  question: "Null coalescing operator kaunsa hai?",
                  options: ["?:", "??", "?:", "?."],
                  correctAnswer: 1,
                  explanation: "Null coalescing operator ?? PHP 7 mein aaya jo default value return karta hai."
                },
                {
                  id: "php-control-q2",
                  question: "PHP 7.4+ arrow function syntax?",
                  options: ["function($n) { return $n; }", "fn($n) => $n", "$n -> $n", "lambda($n) $n"],
                  correctAnswer: 1,
                  explanation: "Arrow functions PHP 7.4+ mein fn($n) => $n syntax ke saath aaye hain."
                },
                {
                  id: "php-control-q3",
                  question: "Array iterate karne ka best loop?",
                  options: ["for", "while", "foreach", "do-while"],
                  correctAnswer: 2,
                  explanation: "foreach loop specifically arrays ke liye hai aur PHP mein sabse zyada use hota hai."
                }
              ]
            }
          }
        },
        {
          id: "php-arrays",
          title: "Arrays aur Strings",
          description: "Indexed, associative arrays aur string manipulation functions seekhenge",
          order: 3,
          duration: "40 min",
          content: {
            introduction: "PHP arrays bahut flexible hain - indexed, associative, multidimensional arrays. Array functions aur string manipulation functions seekhenge.",
            sections: [
              {
                title: "Array Types",
                explanation: "Indexed array: numeric keys (0,1,2...). Associative array: named keys. Multidimensional: array ke andar array. [] syntax PHP 5.4+ se.",
                example: "<?php\n// Indexed\n$colors = [\"Red\", \"Green\", \"Blue\"];\necho $colors[0];\n// Associative\n$student = [\"name\" => \"Rahul\", \"marks\" => 85];\necho $student[\"name\"];\n// Multidimensional\n$matrix = [[1,2], [3,4]];\necho $matrix[0][1];\n?>"
              },
              {
                title: "Array Functions",
                explanation: "count(), array_push(), array_pop(), array_merge(), array_slice(), array_search(), sort(), rsort(), array_map(), array_filter(), array_reduce().",
                example: "<?php\n$nums = [5, 2, 8, 1, 9];\necho count($nums);\narray_push($nums, 10);\nsort($nums);\n$squared = array_map(fn($n) => $n * $n, $nums);\n$filtered = array_filter($nums, fn($n) => $n > 5);\n$sum = array_reduce($nums, fn($a, $b) => $a + $b, 0);\n?>"
              },
              {
                title: "String Functions",
                explanation: "strlen(), strpos(), substr(), str_replace(), strtolower(), strtoupper(), trim(), explode(), implode(), htmlspecialchars().",
                example: "<?php\n$text = \"Hello PHP World\";\necho strlen($text);\necho strpos($text, \"PHP\");\necho substr($text, 6, 3);\necho str_replace(\"World\", \"Duniya\", $text);\n$parts = explode(\" \", $text);\n$joined = implode(\"-\", $parts);\necho strtolower($text);\necho strtoupper($text);\n?>"
              }
            ],
            codeExamples: [
              {
                title: "Data Processing",
                language: "php",
                code: "<?php\n$students = [\n    [\"name\" => \"Rahul\", \"marks\" => 85],\n    [\"name\" => \"Priya\", \"marks\" => 92],\n    [\"name\" => \"Amit\", \"marks\" => 78]\n];\nusort($students, fn($a, $b) => $b['marks'] - $a['marks']);\nforeach ($students as $s) echo \"{$s['name']}: {$s['marks']}\\n\";\n$average = array_sum(array_column($students, 'marks')) / count($students);\necho \"Average: $average\\n\";\n$toppers = array_filter($students, fn($s) => $s['marks'] >= 80);\necho \"Toppers: \" . count($toppers);\n?>"
              }
            ],
            notes: [
              "count() array length batata hai.",
              "array_map() har element par function apply karta hai.",
              "array_filter() condition satisfy karne wale elements return karta hai.",
              "explode() string ko array mein convert karta hai, implode() array ko string mein."
            ],
            commonMistakes: [
              {
                mistake: "Array key case sensitivity bhoolna",
                correction: "Associative array keys case-sensitive hain. 'Name' aur 'name' alag hain."
              },
              {
                mistake: "sort() vs asort() confusion",
                correction: "sort() indexed array re-index karta hai. asort() associative array keys preserve karta hai."
              }
            ],
            interviewQuestions: [
              "array_map vs array_filter? - array_map har element transform karta hai, same count return. array_filter condition ke hisaab se filter karta hai, count kam ho sakta hai.",
              "usort kya hai? - Array ko custom comparison function se sort karta hai. Indexed arrays ke liye. uasort associative arrays ke liye."
            ],
            practiceExercises: [
              {
                question: "Sentence mein har word ka first letter capital karo.",
                hint: "explode(' '), array_map with ucfirst, implode(' ').",
                difficulty: "medium"
              },
              {
                question: "Array mein se duplicate values hatao.",
                hint: "array_unique() function use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-arrays-quiz",
              title: "Arrays aur Strings Quiz",
              questions: [
                {
                  id: "php-arrays-q1",
                  question: "Array length kaunsa function?",
                  options: ["length()", "count()", "size()", "len()"],
                  correctAnswer: 1,
                  explanation: "PHP mein array length nikalne ke liye count() function use hota hai."
                },
                {
                  id: "php-arrays-q2",
                  question: "Explode function kya karta hai?",
                  options: ["Array join karta hai", "String split karta hai", "Array sort karta hai", "String reverse karta hai"],
                  correctAnswer: 1,
                  explanation: "explode() string ko separator ke hisaab se array mein convert karta hai."
                },
                {
                  id: "php-arrays-q3",
                  question: "Associative array keys preserve sort?",
                  options: ["sort()", "asort()", "ksort()", "B aur C"],
                  correctAnswer: 3,
                  explanation: "asort() values sort karta hai keys preserve karte hue, ksort() keys sort karta hai."
                }
              ]
            }
          }
        },
        {
          id: "php-forms",
          title: "Forms, Sessions aur Cookies",
          description: "Form handling, validation, sessions, cookies aur security seekhenge",
          order: 4,
          duration: "50 min",
          content: {
            introduction: "PHP form handling, validation, file uploads, sessions aur cookies seekhenge. GET vs POST methods, form security important topics hain.",
            sections: [
              {
                title: "Form Handling (GET vs POST)",
                explanation: "GET: URL mein data dikhta hai, limited size, bookmarks ke liye. POST: data body mein, secure, unlimited size. $_GET/$_POST superglobals se access. isset() check karta hai variable set hai ya nahi.",
                example: "<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $name = htmlspecialchars($_POST['name'] ?? '');\n    $email = htmlspecialchars($_POST['email'] ?? '');\n    if (!empty($name) && !empty($email)) echo \"Thanks, $name!\";\n}\n?>\n<form method=\"POST\">\n    Name: <input type=\"text\" name=\"name\" required><br>\n    Email: <input type=\"email\" name=\"email\" required><br>\n    <input type=\"submit\" value=\"Submit\">\n</form>"
              },
              {
                title: "Form Validation",
                explanation: "Input validation: empty check, email format, string length, numeric check, regex. filter_var() validation ke liye. Client-side + server-side validation both important.",
                example: "<?php\n$errors = [];\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $name = trim($_POST['name'] ?? '');\n    $email = trim($_POST['email'] ?? '');\n    $age = $_POST['age'] ?? '';\n    if (empty($name)) $errors[] = \"Name required\";\n    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = \"Invalid email\";\n    if (!is_numeric($age) || $age < 0) $errors[] = \"Invalid age\";\n    if (empty($errors)) echo \"Registration successful!\";\n}\n?>\n<form method=\"POST\">\n    <?php if (!empty($errors)): ?>\n        <div style=\"color:red\"><?php echo implode('<br>', $errors); ?></div>\n    <?php endif; ?>\n    Name: <input type=\"text\" name=\"name\"><br>\n    Email: <input type=\"text\" name=\"email\"><br>\n    Age: <input type=\"number\" name=\"age\"><br>\n    <input type=\"submit\">\n</form>"
              },
              {
                title: "Sessions aur Cookies",
                explanation: "session_start() session start karta hai. $_SESSION array data store karta hai. Cookies browser mein client-side store hoti hain. setcookie() function. Both state management ke liye.",
                example: "<?php\nsession_start();\n// Session\n$_SESSION['user_id'] = 123;\n$_SESSION['username'] = 'rahul';\necho \"Session ID: \" . session_id();\n// Cookie\nsetcookie(\"theme\", \"dark\", time() + 86400 * 30, \"/\");\necho $_COOKIE['theme'] ?? 'No cookie';\n// Session check\nif (isset($_SESSION['user_id'])) echo \"Logged in\";\n// Destroy\nsession_destroy();\n?>"
              }
            ],
            codeExamples: [
              {
                title: "Login System",
                language: "php",
                code: "<?php\nsession_start();\n$users = [\"rahul\" => \"pass123\", \"priya\" => \"abc456\"];\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $username = $_POST['username'] ?? '';\n    $password = $_POST['password'] ?? '';\n    if (isset($users[$username]) && $users[$username] === $password) {\n        $_SESSION['username'] = $username;\n        header('Location: dashboard.php');\n        exit;\n    } else {\n        $error = \"Invalid credentials\";\n    }\n}\n?>\n<form method=\"POST\">\n    <?php if (isset($error)): ?>\n        <p style=\"color:red\"><?php echo $error; ?></p>\n    <?php endif; ?>\n    Username: <input type=\"text\" name=\"username\" required><br>\n    Password: <input type=\"password\" name=\"password\" required><br>\n    <input type=\"submit\" value=\"Login\">\n</form>"
              }
            ],
            notes: [
              "session_start() hamesha sabse pehle call karein, HTML output se pehle.",
              "htmlspecialchars() form output mein XSS se bachata hai.",
              "filter_var() with FILTER_VALIDATE_EMAIL email validation ke liye.",
              "Cookies client-side store hote hain, sensitive data store na karein."
            ],
            commonMistakes: [
              {
                mistake: "session_start() output ke baad call karna",
                correction: "session_start() koi bhi output se pehle call karein."
              },
              {
                mistake: "User input bina sanitize kiye use karna",
                correction: "htmlspecialchars(), strip_tags(), filter_var() use karein."
              }
            ],
            interviewQuestions: [
              "Session vs Cookie? - Session server-side stored hai, secure. Cookie client-side browser mein, limited size (4KB), insecure. Session ID cookie mein store hoti hai.",
              "GET vs POST? - GET data URL mein, visible, limited, cacheable, idempotent. POST data body mein, secure, unlimited, not cached."
            ],
            practiceExercises: [
              {
                question: "Registration form banao jisme name, email, password fields hon aur validation ho.",
                hint: "filter_var for email, strlen for password length check.",
                difficulty: "medium"
              },
              {
                question: "Session-based counter banao jo page refresh par count increment kare.",
                hint: "$_SESSION['count'] mein store karo, ++ increment karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-forms-quiz",
              title: "Forms, Sessions aur Cookies Quiz",
              questions: [
                {
                  id: "php-forms-q1",
                  question: "Form data body mein bhejne ka method?",
                  options: ["GET", "POST", "PUT", "DELETE"],
                  correctAnswer: 1,
                  explanation: "POST method data HTTP body mein bhejta hai jo GET se zyada secure hai."
                },
                {
                  id: "php-forms-q2",
                  question: "Session start karne ka function?",
                  options: ["start_session()", "session_start()", "begin_session()", "init_session()"],
                  correctAnswer: 1,
                  explanation: "session_start() function session shuru karta hai aur $_SESSION array ko accessible banata hai."
                },
                {
                  id: "php-forms-q3",
                  question: "XSS prevention ke liye kaunsa function?",
                  options: ["strip_tags()", "htmlspecialchars()", "Dono", "escape()"],
                  correctAnswer: 2,
                  explanation: "strip_tags() aur htmlspecialchars() dono XSS attacks se bachne ke liye use hote hain."
                }
              ]
            }
          }
        },
        {
          id: "php-mysql",
          title: "PHP MySQL Integration",
          description: "PDO, prepared statements, CRUD operations aur transactions seekhenge",
          order: 5,
          duration: "50 min",
          content: {
            introduction: "PHP aur MySQL database connectivity. PDO (PHP Data Objects) aur MySQLi extensions. Prepared statements, CRUD operations, transactions seekhenge.",
            sections: [
              {
                title: "PDO Connection aur Queries",
                explanation: "PDO database abstraction layer hai. Multiple databases support karta hai. Prepared statements SQL injection se bachate hain. DSN connection string specify karta hai.",
                example: "<?php\n$host = 'localhost'; $dbname = 'school'; $user = 'root'; $pass = '';\ntry {\n    $pdo = new PDO(\"mysql:host=$host;dbname=$dbname;charset=utf8\", $user, $pass);\n    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n    // Query\n    $stmt = $pdo->query(\"SELECT * FROM students\");\n    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {\n        echo $row['name'] . \": \" . $row['marks'] . \"\\n\";\n    }\n} catch (PDOException $e) {\n    die(\"Connection failed: \" . $e->getMessage());\n}\n?>"
              },
              {
                title: "Prepared Statements (CRUD)",
                explanation: "Prepared statements placeholders (?, :name) use karte hain. SQL injection impossible. execute() array parameters leta hai. fetch() single row, fetchAll() all rows.",
                example: "<?php\n$pdo = new PDO(\"mysql:host=localhost;dbname=school\", \"root\", \"\");\n// CREATE\n$stmt = $pdo->prepare(\"INSERT INTO students (name, marks) VALUES (?, ?)\");\n$stmt->execute([\"Rahul\", 85]);\n// READ\n$stmt = $pdo->prepare(\"SELECT * FROM students WHERE marks > ?\");\n$stmt->execute([70]);\n$students = $stmt->fetchAll(PDO::FETCH_ASSOC);\n// UPDATE\n$stmt = $pdo->prepare(\"UPDATE students SET marks = ? WHERE id = ?\");\n$stmt->execute([90, 1]);\n// DELETE\n$stmt = $pdo->prepare(\"DELETE FROM students WHERE id = ?\");\n$stmt->execute([1]);\n?>"
              },
              {
                title: "Transactions aur Error Handling",
                explanation: "beginTransaction() se start, commit() se save, rollback() se revert. try-catch mein transaction handle karte hain. Multiple operations atomic hone chahiye.",
                example: "<?php\n$pdo = new PDO(\"mysql:host=localhost;dbname=bank\", \"root\", \"\");\n$pdo->beginTransaction();\ntry {\n    $pdo->exec(\"UPDATE accounts SET balance = balance - 1000 WHERE id = 1\");\n    $pdo->exec(\"UPDATE accounts SET balance = balance + 1000 WHERE id = 2\");\n    $pdo->commit();\n    echo \"Transfer successful\";\n} catch (Exception $e) {\n    $pdo->rollBack();\n    echo \"Transfer failed: \" . $e->getMessage();\n}\n?>"
              }
            ],
            codeExamples: [
              {
                title: "Student CRUD Application",
                language: "php",
                code: "<?php\n$pdo = new PDO('mysql:host=localhost;dbname=school', 'root', '');\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n// CREATE TABLE\n$pdo->exec(\"CREATE TABLE IF NOT EXISTS students (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100),\n    marks INT,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n)\");\n// Insert sample data\n$stmt = $pdo->prepare(\"INSERT INTO students (name, marks) VALUES (:name, :marks)\");\n$students = [['Rahul', 85], ['Priya', 92], ['Amit', 78], ['Sita', 95]];\nforeach ($students as $s) {\n    $stmt->execute(['name' => $s[0], 'marks' => $s[1]]);\n}\n// Display\n$result = $pdo->query(\"SELECT * FROM students ORDER BY marks DESC\");\necho \"<table border='1'>\";\necho \"<tr><th>ID</th><th>Name</th><th>Marks</th></tr>\";\nwhile ($row = $result->fetch()) {\n    echo \"<tr><td>{$row['id']}</td><td>{$row['name']}</td><td>{$row['marks']}</td></tr>\";\n}\necho \"</table>\";\n?>\n<style>table { border-collapse: collapse; } td, th { padding: 8px; }</style>"
              }
            ],
            notes: [
              "PDO multiple databases support karta hai (MySQL, PostgreSQL, SQLite).",
              "Prepared statements SQL injection prevention ke liye best practice.",
              "PDO::FETCH_ASSOC associative array mein result deta hai.",
              "Transactions multiple queries ko atomic banate hain."
            ],
            commonMistakes: [
              {
                mistake: "SQL queries string interpolation se banana",
                correction: "Hamesha prepared statements use karein, never directly concat values."
              },
              {
                mistake: "Password plain text mein store karna",
                correction: "password_hash() use karein, password_verify() verify ke liye."
              }
            ],
            interviewQuestions: [
              "PDO vs MySQLi? - PDO multiple DB support, named parameters, modern API. MySQLi MySQL specific, performance thoda better, procedural/OOP both.",
              "Prepared statement ke kya fayde hain? - SQL injection protection, performance (pre-compiled), code cleaner, parameterized queries."
            ],
            practiceExercises: [
              {
                question: "Product table banao aur CRUD operations implement karo PDO se.",
                hint: "CREATE TABLE, PreparedStatement for CRUD, fetchAll for listing.",
                difficulty: "medium"
              },
              {
                question: "Search functionality banao jo name ya marks ke hisaab se filter kare.",
                hint: "LIKE operator ya >/< marks query mein use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-mysql-quiz",
              title: "PHP MySQL Integration Quiz",
              questions: [
                {
                  id: "php-mysql-q1",
                  question: "PDO full form?",
                  options: ["PHP Data Objects", "PHP Database Operations", "Personal Data Objects", "PHP Data Output"],
                  correctAnswer: 0,
                  explanation: "PDO ka full form PHP Data Objects hai jo database abstraction layer provide karta hai."
                },
                {
                  id: "php-mysql-q2",
                  question: "Prepared statement SQL injection se bachata hai?",
                  options: ["Haan", "Nahi", "Kabhi kabhi", "Pata nahi"],
                  correctAnswer: 0,
                  explanation: "Prepared statements queries pre-compile karte hain jo SQL injection rokta hai."
                },
                {
                  id: "php-mysql-q3",
                  question: "Transaction commit karne ka method?",
                  options: ["save()", "commit()", "confirm()", "apply()"],
                  correctAnswer: 1,
                  explanation: "PDO mein transaction save karne ke liye commit() method call karte hain."
                }
              ]
            }
          }
        },
        {
          id: "php-oop",
          title: "PHP OOP",
          description: "Classes, inheritance, interfaces, traits aur namespaces seekhenge",
          order: 6,
          duration: "45 min",
          content: {
            introduction: "PHP mein OOP concepts: classes, inheritance, interfaces, traits, namespaces, autoloading. Modern PHP OOP kaise likhte hain seekhenge.",
            sections: [
              {
                title: "Classes aur Objects",
                explanation: "class keyword se define. new keyword object banata hai. Constructor __construct(). Properties aur methods. Access modifiers: public, private, protected.",
                example: "<?php\nclass Student {\n    private string $name;\n    private int $marks;\n    public function __construct(string $name, int $marks) {\n        $this->name = $name;\n        $this->marks = $marks;\n    }\n    public function display(): string {\n        return \"{$this->name}: {$this->marks}\";\n    }\n}\n$s = new Student(\"Rahul\", 85);\necho $s->display();\n?>"
              },
              {
                title: "Inheritance aur Interfaces",
                explanation: "extends keyword inheritance ke liye. parent:: base class method call. interface contract define karta hai. implements keyword interface implement karta hai. abstract class abstract methods ho sakte hain.",
                example: "<?php\ninterface Shape {\n    public function area(): float;\n}\nabstract class Animal {\n    abstract public function sound(): string;\n    public function sleep(): string { return \"Sleeping\"; }\n}\nclass Circle implements Shape {\n    private float $r;\n    public function __construct(float $r) { $this->r = $r; }\n    public function area(): float { return pi() * $this->r * $this->r; }\n}\nclass Dog extends Animal {\n    public function sound(): string { return \"Bark\"; }\n}\n?>"
              },
              {
                title: "Traits aur Namespaces",
                explanation: "Traits code reuse mechanism. Namespaces organize code. use keyword trait import aur namespace alias ke liye. Autoloading (composer) classes automatically load karta hai.",
                example: "<?php\nnamespace App\\Models;\ntrait Timestampable {\n    public function getCreatedAt(): string {\n        return $this->createdAt ?? date('Y-m-d H:i:s');\n    }\n}\nclass User {\n    use Timestampable;\n    private string $name;\n    public function __construct(string $name) { $this->name = $name; }\n}\n// Usage\nuse App\\Models\\User;\n$u = new User(\"Rahul\");\necho $u->getCreatedAt();\n?>"
              }
            ],
            codeExamples: [
              {
                title: "Banking System OOP",
                language: "php",
                code: "<?php\nabstract class Account {\n    protected string $number;\n    protected float $balance;\n    public function __construct(string $number, float $balance = 0) {\n        $this->number = $number;\n        $this->balance = $balance;\n    }\n    abstract public function withdraw(float $amount): void;\n    public function deposit(float $amount): void {\n        $this->balance += $amount;\n    }\n    public function getBalance(): float { return $this->balance; }\n}\nclass SavingsAccount extends Account {\n    private float $rate = 0.04;\n    public function applyInterest(): void {\n        $this->balance += $this->balance * $this->rate;\n    }\n    public function withdraw(float $amount): void {\n        if ($amount > $this->balance) throw new Exception(\"Insufficient balance\");\n        $this->balance -= $amount;\n    }\n}\n$account = new SavingsAccount(\"SAV001\", 10000);\n$account->deposit(5000);\n$account->applyInterest();\n$account->withdraw(2000);\necho \"Balance: \" . $account->getBalance();\n?>"
              }
            ],
            notes: [
              "PHP 7+ type declarations support karta hai.",
              "Traits PHP 5.4+ mein aaye hain.",
              "Namespaces PHP 5.3+ mein aaye hain.",
              "Composer PHP dependency manager aur autoloader hai.",
              "__construct() PHP 5+ style, PHP 7+ mein same class name constructors deprecated."
            ],
            commonMistakes: [
              {
                mistake: "Property type declare na karna",
                correction: "PHP 7.4+ typed properties support karta hai. private string $name;"
              },
              {
                mistake: "Namespace ke saath use statement bhoolna",
                correction: "Namespace use karte waqt import karna mat bhoolen ya fully qualified name (\\App\\Models\\User) use karein."
              }
            ],
            interviewQuestions: [
              "Trait vs Interface? - Interface sirf method signatures define karta hai. Trait mein implementation hoti hai, code reuse ke liye.",
              "Composer kya hai? - PHP dependency manager. Libraries install/update karta hai. Autoloading provide karta hai PSR-4 standard ke saath."
            ],
            practiceExercises: [
              {
                question: "Interfaces Shape (area, perimeter) banao aur Circle, Rectangle classes implement karein.",
                hint: "pi() function use karo, M_PI constant bhi hai.",
                difficulty: "medium"
              },
              {
                question: "Logger trait banao jisme log() method ho, aur multiple classes mein use karo.",
                hint: "trait Logger { public function log($msg) { echo \"[LOG] $msg\"; } }",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-oop-quiz",
              title: "PHP OOP Quiz",
              questions: [
                {
                  id: "php-oop-q1",
                  question: "Constructor method PHP mein?",
                  options: ["__construct()", "constructor()", "init()", "class_name()"],
                  correctAnswer: 0,
                  explanation: "PHP mein constructor ka naam __construct() hota hai jo object create hote hi call hota hai."
                },
                {
                  id: "php-oop-q2",
                  question: "Trait use karne ke liye kaunsa keyword?",
                  options: ["import", "trait", "use", "include"],
                  correctAnswer: 2,
                  explanation: "Trait ko class mein include karne ke liye 'use' keyword use hota hai."
                },
                {
                  id: "php-oop-q3",
                  question: "PHP 7.4+ property type declare syntax?",
                  options: ["private string $name", "private $name: string", "string private $name", "var string $name"],
                  correctAnswer: 0,
                  explanation: "PHP 7.4+ mein properties mein type declare karne ka syntax 'private string $name' hai."
                }
              ]
            }
          }
        },
        {
          id: "php-file-upload",
          title: "File Upload, Error Handling aur Security",
          description: "File upload, error handling, try-catch aur security best practices seekhenge",
          order: 7,
          duration: "45 min",
          content: {
            introduction: "PHP file upload, error handling, security best practices seekhenge. File validation, try-catch, custom error handler, security measures important topics.",
            sections: [
              {
                title: "File Upload",
                explanation: "enctype=\"multipart/form-data\" form mein zaroori. $_FILES superglobal file info rakhta hai. move_uploaded_file() upload file move karta hai. File type, size validation important.",
                example: "<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {\n    $file = $_FILES['file'];\n    $allowed = ['jpg', 'jpeg', 'png', 'pdf'];\n    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));\n    if ($file['size'] > 5000000) die(\"File too large (max 5MB)\");\n    if (!in_array($ext, $allowed)) die(\"Invalid file type\");\n    $newName = uniqid() . '.' . $ext;\n    if (move_uploaded_file($file['tmp_name'], \"uploads/\" . $newName)) {\n        echo \"File uploaded: $newName\";\n    }\n}\n?>\n<form method=\"POST\" enctype=\"multipart/form-data\">\n    <input type=\"file\" name=\"file\" required>\n    <input type=\"submit\" value=\"Upload\">\n</form>"
              },
              {
                title: "Error Handling",
                explanation: "try-catch exceptions handle karta hai. set_exception_handler() global handler. error_reporting() levels. trigger_error() custom error generate. Monolog logging library popular hai.",
                example: "<?php\nset_exception_handler(function($e) {\n    error_log($e->getMessage());\n    http_response_code(500);\n    echo \"Something went wrong. Please try again.\";\n});\ntry {\n    if (!file_exists(\"config.php\")) {\n        throw new Exception(\"Config file missing\");\n    }\n    require \"config.php\";\n} catch (Exception $e) {\n    error_log(\"Error: \" . $e->getMessage());\n    echo \"Error: \" . $e->getMessage();\n} finally {\n    echo \"\\nExecution complete\";\n}\n?>"
              },
              {
                title: "Security Best Practices",
                explanation: "SQL injection: prepared statements. XSS: htmlspecialchars(). CSRF: tokens. Password: password_hash(). File upload: validate type/size. HTTPS always. Input validation aur output encoding.",
                example: "<?php\n// CSRF Token\nsession_start();\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {\n        die(\"CSRF validation failed\");\n    }\n}\n$_SESSION['csrf_token'] = bin2hex(random_bytes(32));\n// Password hashing\n$password = \"user123\";\n$hash = password_hash($password, PASSWORD_BCRYPT);\nif (password_verify($password, $hash)) echo \"Password correct\";\n// Output encoding\n$userInput = \"<script>alert('XSS')</script>\";\necho htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');\n?>"
              }
            ],
            codeExamples: [
              {
                title: "Secure File Manager",
                language: "php",
                code: "<?php\nsession_start();\n$uploadDir = __DIR__ . '/uploads/';\nif (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['document'])) {\n    try {\n        $file = $_FILES['document'];\n        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));\n        $allowed = ['pdf', 'doc', 'docx', 'txt'];\n        if (!in_array($ext, $allowed)) throw new Exception(\"Type not allowed\");\n        if ($file['size'] > 10000000) throw new Exception(\"File too large (max 10MB)\");\n        $newName = uniqid('doc_') . '.' . $ext;\n        if (!move_uploaded_file($file['tmp_name'], $uploadDir . $newName)) {\n            throw new Exception(\"Upload failed\");\n        }\n        $success = \"File uploaded: \" . htmlspecialchars($file['name']);\n    } catch (Exception $e) {\n        $error = $e->getMessage();\n    }\n}\n$files = array_diff(scandir($uploadDir), ['.', '..']);\n?>\n<h2>Secure File Upload</h2>\n<?php if (isset($success)): ?><p style=\"color:green\"><?= $success ?></p><?php endif; ?>\n<?php if (isset($error)): ?><p style=\"color:red\"><?= $error ?></p><?php endif; ?>\n<form method=\"POST\" enctype=\"multipart/form-data\">\n    <input type=\"file\" name=\"document\" required>\n    <input type=\"hidden\" name=\"csrf_token\" value=\"<?= $_SESSION['csrf_token'] ?>\">\n    <input type=\"submit\" value=\"Upload\">\n</form>\n<h3>Uploaded Files</h3>\n<ul>\n<?php foreach ($files as $f): ?>\n    <li><?= htmlspecialchars($f) ?></li>\n<?php endforeach; ?>\n</ul>"
              }
            ],
            notes: [
              "File upload form mein enctype=\"multipart/form-data\" mandatory hai.",
              "error_reporting(E_ALL) development mein, production mein off.",
              "password_hash() automatic salt generate karta hai.",
              "random_bytes() cryptographically secure random bytes.",
              "hash_equals() timing attack se bachata hai."
            ],
            commonMistakes: [
              {
                mistake: "Upload file extension check nahi karna",
                correction: "pathinfo() se extension nikaalo, whitelist se compare karo."
              },
              {
                mistake: "Error messages mein sensitive information dikhana",
                correction: "Production mein generic error messages, log internal details."
              }
            ],
            interviewQuestions: [
              "XSS attack se kaise bachein? - htmlspecialchars() with ENT_QUOTES, Content-Security-Policy header, input validation, output encoding.",
              "CSRF attack kya hai? - Cross-Site Request Forgery - user ki unintentional action. Token-based prevention: unique token har form mein, validate on submission."
            ],
            practiceExercises: [
              {
                question: "Profile picture upload banao jisme validation ho (type: jpg/png, size: max 2MB).",
                hint: "getimagesize() se image validation, exif_imagetype() bhi use kar sakte hain.",
                difficulty: "medium"
              },
              {
                question: "Login system banao jisme password_hash aur password_verify use ho.",
                hint: "Session use karo, password_hash register mein, password_verify login mein.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-file-upload-quiz",
              title: "File Upload, Error Handling aur Security Quiz",
              questions: [
                {
                  id: "php-file-upload-q1",
                  question: "File upload form mein kaunsa enctype zaroori hai?",
                  options: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain", "file/form-data"],
                  correctAnswer: 1,
                  explanation: "File upload form mein enctype='multipart/form-data' hona mandatory hai."
                },
                {
                  id: "php-file-upload-q2",
                  question: "Password hash karne ka function?",
                  options: ["md5()", "sha1()", "password_hash()", "crypt()"],
                  correctAnswer: 2,
                  explanation: "password_hash() secure password hashing ke liye PHP ka recommended function hai."
                },
                {
                  id: "php-file-upload-q3",
                  question: "Output encoding XSS prevention?",
                  options: ["strip_tags()", "htmlspecialchars()", "filter_var()", "urlencode()"],
                  correctAnswer: 1,
                  explanation: "htmlspecialchars() special characters ko HTML entities mein convert karta hai jo XSS rokta hai."
                }
              ]
            }
          }
        },
        {
          id: "php-json-api",
          title: "JSON APIs aur RESTful Services",
          description: "JSON handling, RESTful routing, JWT authentication aur API development seekhenge",
          order: 8,
          duration: "50 min",
          content: {
            introduction: "PHP mein RESTful API development. JSON handling, HTTP methods, routing, authentication, response codes seekhenge.",
            sections: [
              {
                title: "JSON Handling",
                explanation: "json_encode() PHP array/object ko JSON mein convert karta hai. json_decode() JSON string ko PHP object/array mein. JSON_UNESCAPED_UNICODE flag Unicode characters ke liye. header('Content-Type: application/json') response type set karta hai.",
                example: "<?php\nheader('Content-Type: application/json');\n$data = [\n    'status' => 'success',\n    'data' => [\n        ['id' => 1, 'name' => 'Rahul', 'marks' => 85],\n        ['id' => 2, 'name' => 'Priya', 'marks' => 92]\n    ]\n];\necho json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);\n// Receive JSON\n$input = json_decode(file_get_contents('php://input'), true);\necho $input['name'] ?? 'No name';\n?>"
              },
              {
                title: "RESTful API Routing",
                explanation: "$_SERVER['REQUEST_METHOD'] HTTP method batata hai. Simple router: parse_url() URL parse, switch/case method handle. Different handlers GET, POST, PUT, DELETE ke liye. HTTP status codes appropriate use karein.",
                example: "<?php\nheader('Content-Type: application/json');\n$method = $_SERVER['REQUEST_METHOD'];\n$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);\n$pathParts = explode('/', trim($path, '/'));\n$resource = $pathParts[1] ?? '';\n$id = $pathParts[2] ?? null;\nswitch (\"$method/$resource\") {\n    case 'GET/students':\n        if ($id) echo json_encode(getStudent($id));\n        else echo json_encode(getAllStudents());\n        break;\n    case 'POST/students':\n        $input = json_decode(file_get_contents('php://input'), true);\n        echo json_encode(createStudent($input));\n        break;\n    default:\n        http_response_code(404);\n        echo json_encode(['error' => 'Not found']);\n}\nfunction getAllStudents(): array {\n    $pdo = new PDO('mysql:host=localhost;dbname=school', 'root', '');\n    $stmt = $pdo->query(\"SELECT * FROM students\");\n    return $stmt->fetchAll(PDO::FETCH_ASSOC);\n}\n?>"
              },
              {
                title: "API Authentication (JWT)",
                explanation: "JWT (JSON Web Token) stateless authentication. Header.payload.signature format. firebase/php-jwt library use hoti hai. Bearer token Authorization header mein aata hai. Middleware pattern token validation ke liye.",
                example: "<?php\n// JWT generation (using firebase/php-jwt)\nuse Firebase\\JWT\\JWT;\nuse Firebase\\JWT\\Key;\n$key = \"secret_key_123\";\n$payload = [\n    'user_id' => 1,\n    'username' => 'rahul',\n    'iat' => time(),\n    'exp' => time() + 3600\n];\n$token = JWT::encode($payload, $key, 'HS256');\necho json_encode(['token' => $token]);\n// JWT verification\nfunction authenticate(): object {\n    $headers = getallheaders();\n    $auth = $headers['Authorization'] ?? '';\n    if (!preg_match('/Bearer\\s(\\S+)/', $auth, $matches)) {\n        http_response_code(401);\n        exit(json_encode(['error' => 'No token']));\n    }\n    try {\n        $key = \"secret_key_123\";\n        return JWT::decode($matches[1], new Key($key, 'HS256'));\n    } catch (Exception $e) {\n        http_response_code(401);\n        exit(json_encode(['error' => 'Invalid token']));\n    }\n}\n?>"
              }
            ],
            codeExamples: [
              {
                title: "Complete REST API for Students",
                language: "php",
                code: "<?php\nheader('Content-Type: application/json');\nheader('Access-Control-Allow-Origin: *');\nheader('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');\nheader('Access-Control-Allow-Headers: Content-Type, Authorization');\n$pdo = new PDO('mysql:host=localhost;dbname=school', 'root', '');\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$method = $_SERVER['REQUEST_METHOD'];\n$id = $_GET['id'] ?? null;\ntry {\n    switch ($method) {\n        case 'GET':\n            if ($id) {\n                $stmt = $pdo->prepare(\"SELECT * FROM students WHERE id = ?\");\n                $stmt->execute([$id]);\n                $result = $stmt->fetch();\n            } else {\n                $result = $pdo->query(\"SELECT * FROM students\")->fetchAll();\n            }\n            echo json_encode($result ?: ['message' => 'Not found']);\n            break;\n        case 'POST':\n            $input = json_decode(file_get_contents('php://input'), true);\n            $stmt = $pdo->prepare(\"INSERT INTO students (name, marks) VALUES (?, ?)\");\n            $stmt->execute([$input['name'], $input['marks']]);\n            http_response_code(201);\n            echo json_encode(['id' => $pdo->lastInsertId(), ...$input]);\n            break;\n        case 'PUT':\n            $input = json_decode(file_get_contents('php://input'), true);\n            $stmt = $pdo->prepare(\"UPDATE students SET name=?, marks=? WHERE id=?\");\n            $stmt->execute([$input['name'], $input['marks'], $id]);\n            echo json_encode(['message' => 'Updated']);\n            break;\n        case 'DELETE':\n            $stmt = $pdo->prepare(\"DELETE FROM students WHERE id=?\");\n            $stmt->execute([$id]);\n            echo json_encode(['message' => 'Deleted']);\n            break;\n    }\n} catch (Exception $e) {\n    http_response_code(500);\n    echo json_encode(['error' => $e->getMessage()]);\n}\n?>"
              }
            ],
            notes: [
              "json_encode options: JSON_UNESCAPED_UNICODE, JSON_PRETTY_PRINT, JSON_NUMERIC_CHECK.",
              "php://input raw request body read karta hai.",
              "CORS headers cross-origin requests allow karte hain.",
              "API versioning (v1/students) backward compatibility ke liye."
            ],
            commonMistakes: [
              {
                mistake: "Content-Type header set na karna",
                correction: "JSON API mein hamesha header('Content-Type: application/json') set karein."
              },
              {
                mistake: "Error handling na karna API mein",
                correction: "try-catch se errors catch karein, appropriate status codes return karein."
              }
            ],
            interviewQuestions: [
              "REST API principles? - Stateless, resource-based URLs, HTTP methods (GET/POST/PUT/DELETE), JSON responses, proper status codes, HATEOAS.",
              "JWT token structure? - Header (algorithm, type) + Payload (claims) + Signature. Base64URL encoded, dot separated. Stateless authentication."
            ],
            practiceExercises: [
              {
                question: "Products API banao jisme CRUD operations hon.",
                hint: "Routes: GET /products, GET /products/{id}, POST /products, PUT /products/{id}, DELETE /products/{id}.",
                difficulty: "medium"
              },
              {
                question: "API mein pagination support add karo (limit, offset).",
                hint: "Query params $_GET['limit'] aur $_GET['offset'], SQL LIMIT/OFFSET.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "php-json-api-quiz",
              title: "JSON APIs aur RESTful Services Quiz",
              questions: [
                {
                  id: "php-json-api-q1",
                  question: "JSON encode karne ka PHP function?",
                  options: ["json_encode()", "toJSON()", "encode_json()", "jsonify()"],
                  correctAnswer: 0,
                  explanation: "PHP mein JSON encode karne ke liye json_encode() function use hota hai."
                },
                {
                  id: "php-json-api-q2",
                  question: "PHP raw request body read karne ka stream?",
                  options: ["php://input", "php://output", "php://stdin", "php://request"],
                  correctAnswer: 0,
                  explanation: "php://input raw HTTP request body read karta hai jo JSON APIs mein kaam aata hai."
                },
                {
                  id: "php-json-api-q3",
                  question: "JWT token format?",
                  options: ["header.payload.signature", "payload.header.signature", "signature.header.payload", "token.payload.secret"],
                  correctAnswer: 0,
                  explanation: "JWT token teen parts mein hota hai: header, payload, aur signature dot se alag."
                }
              ]
            }
          }
        }
      ]
    }
  ],
};

# 🐘 PHP — Complete Curriculum (2026 Edition)

> **"PHP means PHP: Hypertext Preprocessor. Ye server-side programming language hai jo web development mein use hoti hai."**

---

## 📋 Table of Contents
- [History & Evolution](#-history--evolution)
- [Module 1: Beginner](#-module-1-beginner)
- [Module 2: Intermediate](#-module-2-intermediate)
- [Module 3: Advanced](#-module-3-advanced)
- [Module 4: OOP](#-module-4-oop)
- [Module 5: Database](#-module-5-database)
- [Module 6: Professional](#-module-6-professional)
- [Interview Module](#-interview-module)
- [Project Module](#-project-module)
- [Quick Reference](#-quick-reference)

---

## 📖 History & Evolution

| Year | Version | Key Features |
|------|---------|--------------|
| 1994 | PHP 1.0 | Personal Home Page Tools, basic form handling |
| 1997 | PHP 3.0 | Rewritten by Zeev Suraski & Andi Gutmans |
| 2000 | PHP 4.0 | Zend Engine 1.0, improved performance |
| 2004 | PHP 5.0 | Zend Engine 2.0, OOP support, PDO |
| 2015 | PHP 7.0 | Huge speed boost (2x faster), scalar types |
| 2020 | PHP 8.0 | JIT compiler, named arguments, attributes |
| 2021 | PHP 8.1 | Enums, fibers, readonly properties |
| 2022 | PHP 8.2 | Readonly classes, null/false stand-alone types |
| 2023 | PHP 8.3 | JSON validation, dynamic class constant fetch |
| 2025 | PHP 8.4 | Property hooks, asymmetric visibility, lazy objects |
| 2026 | PHP 8.5+ | Continued JIT improvements, new array functions |

### PHP Key Facts
- **Creator**: Rasmus Lerdorf (1994)
- **Latest**: PHP 8.5+
- **File Extension**: `.php`
- **Paradigm**: Server-side scripting, OOP, Procedural
- **Used By**: 77% of all websites (WordPress, Laravel, Symfony)

### Browser Support
PHP server-side hai, toh browser support ka sawaal nahi. PHP code server pe run hota hai, HTML output browser ko jaata hai.

### Pros & Cons
| Pros | Cons |
|------|------|
| Easy to learn, simple syntax | Inconsistent function naming |
| Huge community & ecosystem | Loose typing can cause bugs |
| Free, open source | Slower than compiled languages |
| Great for web (born for web) | Security risks if not careful |
| Cheap hosting available | Not ideal for desktop apps |
| Laravel, WordPress jese frameworks | Legacy code can be messy |

---

# 🟢 MODULE 1: BEGINNER PHP

---

## 1.1 🌟 PHP Kya Hai? (What is PHP?)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 30 mins |
| **Prerequisites** | None |

### Definition
PHP = **PHP: Hypertext Preprocessor**. Ye ek server-side scripting language hai jo dynamic web pages banane ke liye use hoti hai.

### Roman English Explanation
PHP ek aisi language hai jo server pe run hoti hai. Jab koi user aapki website pe aata hai, toh PHP server pe process hota hai aur HTML output browser ko bhejta hai. Matlab user ko nahi pata chalta ki aapne PHP use ki hai — use sirf HTML dikhta hai.

Socho tum ek restaurant mein ho. PHP us restaurant ka **kitchen** hai. Waiter (browser) order leta hai, kitchen mein (server pe) khana banta hai (PHP process hota hai), aur phir cooked dish (HTML) waiter customer ko serve karta hai.

### Technical Explanation
PHP is executed on the server, and the result (usually HTML) is sent back to the browser. Unlike JavaScript which runs in the browser, PHP runs on the server before the page is sent to the user.

### Simple Explanation
- **JavaScript**: Browser mein chalta hai (client-side)
- **PHP**: Server mein chalta hai (server-side)
- **PHP** databases se baat kar sakta hai, files read/write kar sakta hai, forms process kar sakta hai

### Analogy 🏪
> PHP = Kitchen (server pe kaam hota hai)
> HTML = Cooked food (result jo user ko dikhta hai)
> Browser = Waiter (request leta hai, response lata hai)

### Real World Example
Jab tum Facebook kholte ho aur apna profile dekhte ho — jo posts, comments, friends list dikhta hai, wo sab PHP+MySQL se aata hai. Server pe PHP code database se data fetch karke HTML banata hai aur browser ko bhejta hai.

### Basic PHP Syntax
```php
<?php
// PHP code yaha likhte hain
echo "Namaste Duniya!";
?>
```

### Kaise Kaam Karta Hai?
```
Browser Request → Server → PHP Interpreter → HTML Output → Browser
     (URL)       (Apache)    (PHP Processes)    (Result)    (Display)
```

### Rules & Important Notes
1. PHP code `<?php ... ?>` ke andar likhte hain
2. PHP files ka extension `.php` hota hai
3. Har statement `;` (semicolon) se khatam hota hai
4. PHP case-sensitive hai (variables, functions)
5. PHP server pe run hota hai, browser pe nahi

---

## 1.2 🔧 PHP Setup & Installation

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 20 mins |
| **Prerequisites** | None |

### Roman English Explanation
PHP chalane ke liye aapko ek server chahiye. Aap local machine pe bhi PHP chala sakte hain. Teen easy tarike hain:

**Option 1: XAMPP** (Sabse easy)
XAMPP ek package hai jisme PHP, MySQL, Apache server sab kuch aata hai.

**Option 2: VS Code + PHP Extension**
VS Code mein PHP extension install karke bhi code likh sakte hain.

**Option 3: Online PHP Editors**
W3Schools PHP Compiler, PHP Sandbox jese online tools bhi hain.

### XAMPP Setup Steps
```
1. Download XAMPP from apachefriends.org
2. Install karo (default settings)
3. XAMPP Control Panel open karo
4. Apache pe "Start" button click karo
5. Browser mein "localhost" type karo
✅ Done! PHP ready hai!
```

### Testing PHP Installation
```php
<?php
// Ye check karega ki PHP sahi se install hai ya nahi
phpinfo();
?>
```
Is file ko `info.php` naam se save karo aur `localhost/info.php` pe run karo.

### PHP Code Run Karne Ka Tarika
```
1. XAMPP mein Apache start karo
2. htdocs folder mein file rakho (C:\xampp\htdocs\)
3. Browser mein jao: http://localhost/filename.php
```

---

## 1.3 📝 PHP Basic Syntax

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 25 mins |
| **Prerequisites** | PHP Introduction |

### Definition
PHP syntax wo rules hai jo PHP code likhne ke liye follow karne hote hain.

### Roman English Explanation
PHP code hamesha `<?php` se start hota hai aur `?>` se khatam ho sakta hai (but agar pure file mein sirf PHP hai toh closing tag nahi lagate). Har line `;` se khatam hoti hai.

### Code Syntax
```php
<!DOCTYPE html>
<html>
<body>

<?php
// Yeh PHP code block hai
echo "Mera pehla PHP page!";
?>

</body>
</html>
```

### Line by Line Explanation
| Line | Code | Kya Hota Hai |
|------|------|-------------|
| 6 | `<?php` | PHP code start hota hai |
| 7 | `// yeh comment hai` | Comment - code run nahi hota |
| 8 | `echo "text";` | Text browser pe print karta hai |
| 9 | `?>` | PHP code khatam hota hai |

### Important Rules
1. **PHP Tags**: `<?php ... ?>` ke andar code likho
2. **Semicolon**: Har line ke end mein `;` lagao
3. **Case Sensitivity**: Variables case-sensitive hain (`$name` aur `$Name` alag hain)
4. **Comments**: `//` for single line, `/* */` for multi-line
5. **Whitespace**: Spaces aur newlines ignore hote hain

### Examples

#### Example 1: Simple PHP in HTML
```php
<!DOCTYPE html>
<html>
<body>
<h1>Mera PHP Page</h1>
<?php
echo "Hello World!";
?>
</body>
</html>
```
**Output**: "Hello World!" browser mein print hoga.

#### Example 2: Multiple echo statements
```php
<?php
echo "First line<br>";
echo "Second line<br>";
echo "Third line";
?>
```
**Output**: Teen lines print hongi.

#### Example 3: Comments in PHP
```php
<?php
// Yeh single line comment hai

# Yeh bhi single line comment hai (old style)

/*
Yeh multi-line comment hai
Kitni bhi lines likh sakte hain
Sab ignore hongi
*/

echo "Comments nahi dikhte!";
?>
```

#### Example 4: PHP with HTML mixing
```php
<h1><?php echo "Dynamic Title"; ?></h1>
<p>Yeh HTML hai aur <?php echo "yeh PHP hai"; ?> dono mix.</p>
```

#### Example 5: Case sensitivity demo
```php
<?php
$name = "Rahul";
echo $name;  // ✅ Output: Rahul
echo $NAME;  // ❌ Error! $NAME undefined hai
?>
```

---

## 1.4 💬 Comments in PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 10 mins |

### Roman English Explanation
Comments aise notes hain jo code mein likhte hain lekin run nahi hote. Ye sirf developers ke liye hote hain, browser pe nahi dikhte. Comments se code samajhna easy ho jaata hai.

### Types of Comments
```php
<?php
// 1. Single-line comment (double slash)

# 2. Single-line comment (hash - purana style)

/*
3. Multi-line comment
Kitni bhi lines
Sab comment hai
*/

/**
 * 4. DocBlock comment
 * Functions aur classes ke liye
 * @param string $name
 * @return string
 */
?>
```

### Real World Example
```php
<?php
// Database connection settings
$host = "localhost";
$user = "root";
$pass = "";

/*
Yahan pe hum users table se
saare active users ka data
fetch karenge
*/
$sql = "SELECT * FROM users WHERE status = 'active'";
?>
```

### Rules
1. Comments code run hone se nahi roktein
2. Comments browser ko nahi dikhte (server-side hai)
3. Comments se code readable banta hai
4. Zyada comments mat likho — sirf useful comments likho

---

## 1.5 🔤 Variables in PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |

### Definition
Variable ek container hai jisme hum data store karte hain. PHP mein variable `$` sign se start hota hai.

### Roman English Explanation
Variable ko aise samjho jaise ek dibba hai jisme tum kuch bhi rakh sakte ho — number, text, array, object. PHP mein variable hamesha `$` sign se shuru hota hai. PHP ki khaasiyat hai ki variable declare karte waqt data type nahi batana padta — PHP khud samajh leta hai.

### Code Syntax
```php
<?php
$name = "Rahul";        // String (text)
$age = 25;               // Integer (whole number)
$price = 199.99;         // Float (decimal)
$isStudent = true;       // Boolean (true/false)
?>
```

### Variable Rules
1. `$` sign se start hota hai
2. Letter ya underscore se shuru hota hai (number se nahi)
3. Letters, numbers, underscores hi allowed hain
4. Case-sensitive (`$name` ≠ `$Name`)
5. PHP automatically type decide karta hai

### Examples

#### Example 1: Basic Variables (Beginner)
```php
<?php
$name = "Priya";
$age = 22;
echo "Mera naam $name hai";
echo "Main $age saal ki hoon";
?>
```
**Output**: Mera naam Priya hai Main 22 saal ki hoon

#### Example 2: Variable Types (Beginner)
```php
<?php
$text = "Hello";         // String
$number = 42;            // Integer
$decimal = 3.14;         // Float/Double
$flag = true;            // Boolean (true/false)
$nothing = null;         // Null (kuch nahi)

echo $text;    // Hello
echo $number;  // 42
echo $decimal; // 3.14
echo $flag;    // 1 (true = 1, false = blank)
?>
```

#### Example 3: Variable Scope (Intermediate)
```php
<?php
$x = 5; // Global variable

function test() {
    global $x; // Global variable use karne ke liye
    $y = 10;   // Local variable (sirf function ke andar)
    echo $x;   // ✅ 5
    echo $y;   // ✅ 10
}

test();
echo $x; // ✅ 5 (global hai)
echo $y; // ❌ Error! $y local hai
?>
```

#### Example 4: Variable Variables (Intermediate)
```php
<?php
$name = "Rahul";
$$name = "Engineer"; // $$name = $Rahul = "Engineer"

echo $name;   // Rahul
echo $Rahul;  // Engineer
echo $$name;  // Engineer (same as $Rahul)
?>
```

#### Example 5: Dynamic Typing (Advanced)
```php
<?php
$var = "Hello";      // String
echo gettype($var);  // string

$var = 42;           // Ab Integer ban gaya
echo gettype($var);  // integer

$var = 3.14;         // Ab Float ban gaya
echo gettype($var);  // double

$var = [1,2,3];      // Ab Array ban gaya
echo gettype($var);  // array
?>
```

### Real Project Example
```php
<?php
// User profile system
$username = "rahul_kumar";
$fullName = "Rahul Kumar";
$age = 25;
$email = "rahul@email.com";
$isLoggedIn = true;
$balance = 5000.50;

if ($isLoggedIn) {
    echo "Welcome back, $fullName!";
    echo "Your balance: $$balance";
} else {
    echo "Please login first";
}
?>
```

---

## 1.6 📢 Echo vs Print

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 15 mins |

### Roman English Explanation
`echo` aur `print` dono output show karne ke liye use hote hain. Lekin inme thoda difference hai:
- `echo` faster hai, multiple values print kar sakta hai, return value nahi deta
- `print` slow hai, sirf ek value print karta hai, hamesha 1 return karta hai

### Code Syntax
```php
<?php
echo "Hello";                     // ✅ Simple string
echo "Hello", " ", "World";       // ✅ Multiple values (comma se)
echo "Hello" . " " . "World";    // ✅ Concatenation (dot se)
print "Hello";                     // ✅ Sirf ek value

$result = print "Hello";          // print 1 return karta hai
echo $result;                     // Output: Hello 1
?>
```

### Examples
```php
<?php
// echo examples
echo "Hello World!<br>";
echo "This ", "is ", "multiple ", "arguments<br>";
echo "Sum: " . (5 + 3) . "<br>";

// print example
print "Same thing but slower<br>";

// Print in expressions
$value = print "Returned value: ";
echo $value; // 1
?>
```

### When to Use What
| Feature | echo | print |
|---------|------|-------|
| Speed | Faster | Slower |
| Multiple values | ✅ Yes | ❌ No (sirf ek) |
| Return value | ❌ No | ✅ Returns 1 |
| Parentheses | Optional | Optional |
| Most common | ✅ Hamesha use | Kabhi kabhi |

**Best Practice**: Hamesha `echo` use karo. Fast aur flexible hai.

---

## 1.7 📊 Data Types in PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### Definition
Data type batata hai ki variable mein kis type ka data store ho sakta hai.

### Roman English Explanation
PHP mein 8 basic data types hain. PHP dynamically typed hai — matlab aapko variable banate waqt type batana nahi padta. PHP automatically decide karta hai ki kaunsa type hai. Lekin types ko samajhna important hai kyunki operations alag tarike se kaam karte hain.

### All Data Types

| Type | Category | Example | Kya Hai |
|------|----------|---------|---------|
| `string` | Scalar | `"Hello"` | Text |
| `int` | Scalar | `42` | Whole number |
| `float` | Scalar | `3.14` | Decimal number |
| `bool` | Scalar | `true` | True/False |
| `array` | Compound | `[1,2,3]` | Multiple values |
| `object` | Compound | `$obj` | Class instance |
| `null` | Special | `null` | No value |
| `resource` | Special | `$file` | External resource |

### Examples

#### Example 1: String (Beginner)
```php
<?php
$name = "Rahul";
$message = 'Hello World';
$multi = "Line 1\nLine 2"; // \n = new line

// Single vs Double quotes difference
$a = "Hello";
echo "$a World";  // ✅ "Hello World" (variable expand hota hai)
echo '$a World';  // ❌ "$a World" as literal (expand nahi hota)
?>
```

#### Example 2: Integer & Float (Beginner)
```php
<?php
$age = 25;              // int
$price = 99.99;         // float
$hex = 0x1A;            // hexadecimal (26 in decimal)
$octal = 012;           // octal (10 in decimal)
$binary = 0b1010;       // binary (10 in decimal)

var_dump($age);   // int(25)
var_dump($price); // float(99.99)
?>
```

#### Example 3: Boolean (Beginner)
```php
<?php
$isAdmin = true;
$isLoggedIn = false;

// Jo values false hoti hain
var_dump((bool) "");         // false (empty string)
var_dump((bool) 0);          // false
var_dump((bool) null);       // false
var_dump((bool) "false");    // true! (non-empty string)
var_dump((bool) []);         // false (empty array)
?>
```

#### Example 4: Type Casting (Intermediate)
```php
<?php
$num = "42";           // String
$intNum = (int) $num;  // Convert to int → 42
$floatNum = (float) $num; // Convert to float → 42.0
$strNum = (string) 123; // Convert to string → "123"
$boolVal = (bool) 1;    // Convert to bool → true

// Automatic conversion
$sum = "10" + 5;        // PHP converts "10" to int → 15
$concat = "Year: " . 2026; // Converts 2026 to string → "Year: 2026"
?>
```

#### Example 5: Type Checking (Advanced)
```php
<?php
$data = "Hello";

// Type checking functions
echo is_string($data);   // 1 (true)
echo is_int($data);      // (false = blank)
echo is_numeric("42");   // 1 (true - numeric string)
echo is_array([1,2,3]);  // 1 (true)

// gettype()
echo gettype("Hello");   // string
echo gettype(42);        // integer
echo gettype(3.14);      // double
echo gettype(true);      // boolean
echo gettype([1,2]);     // array
echo gettype(null);      // NULL
?>
```

### Type Comparison Table
```php
<?php
// Loose (==) vs Strict (===) comparison
var_dump(42 == "42");    // true (same value)
var_dump(42 === "42");   // false (type different)
var_dump(0 == false);    // true (0 = false)
var_dump(0 === false);   // false (int ≠ bool)
var_dump("" == false);   // true
var_dump("" === false);  // false
?>
```

---

## 1.8 ➗ Operators in PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 40 mins |

### Definition
Operators woh symbols hain jo variables aur values ke saath operations perform karte hain.

### Roman English Explanation
Operators se hum calculations karte hain, values compare karte hain, aur conditions check karte hain. PHP mein kai types ke operators hain. Inhe samajhna bohot important hai kyunki har program mein operators use hote hain.

### Types of Operators

#### 1. Arithmetic Operators (गणित)
```php
<?php
$x = 10;
$y = 3;

echo $x + $y;   // 13 (Addition)
echo $x - $y;   // 7 (Subtraction)
echo $x * $y;   // 30 (Multiplication)
echo $x / $y;   // 3.33 (Division)
echo $x % $y;   // 1 (Modulus - remainder)
echo $x ** $y;  // 1000 (Exponentiation - 10^3)
?>
```

#### 2. Assignment Operators (असाइनमेंट)
```php
<?php
$x = 10;     // Assign
$x += 5;     // $x = $x + 5 → 15
$x -= 3;     // $x = $x - 3 → 12
$x *= 2;     // $x = $x * 2 → 24
$x /= 4;     // $x = $x / 4 → 6
$x %= 3;     // $x = $x % 3 → 0
$x .= " hi"; // $x = $x . " hi" → Concatenation
?>
```

#### 3. Comparison Operators (तुलना)
```php
<?php
$x = 5;
$y = "5";

var_dump($x == $y);    // true (value same)
var_dump($x === $y);   // false (type different!)
var_dump($x != $y);    // false (value same hai)
var_dump($x !== $y);   // true (type different hai)
var_dump($x > 3);      // true
var_dump($x < 3);      // false
var_dump($x >= 5);     // true
var_dump($x <= 4);     // false
?>
```

#### 4. Logical Operators (तार्किक)
```php
<?php
$a = true;
$b = false;

var_dump($a && $b);  // false (AND - dono true chahiye)
var_dump($a || $b);  // true  (OR - ek true kaafi)
var_dump(!$a);        // false (NOT - ulta kar deta hai)
var_dump($a and $b); // false (same as && but low precedence)
var_dump($a or $b);  // true  (same as || but low precedence)
?>
```

#### 5. Increment/Decrement (बढ़ाना/घटाना)
```php
<?php
$x = 5;
echo ++$x; // 6 (Pre-increment: pehle badhao, phir print)
echo $x++; // 6 (Post-increment: pehle print, phir badhao)
echo $x;   // 7 (ab $x = 7 hai)

$y = 5;
echo --$y; // 4 (Pre-decrement)
echo $y--; // 4 (Post-decrement)
echo $y;   // 3 (ab $y = 3 hai)
?>
```

#### 6. String Operators
```php
<?php
$first = "Hello";
$second = " World";

echo $first . $second;    // "Hello World" (concatenation)
$first .= $second;        // $first = $first . $second
echo $first;              // "Hello World"
?>
```

### Operator Precedence
```php
<?php
// Kaunsa operator pehle execute hoga?
$result = 5 + 3 * 2;     // 11 (NOT 16! * pehle hota hai)
$result2 = (5 + 3) * 2;  // 16 (parentheses se order badal sakte hain)

// Precedence order (top to bottom):
// 1. () Parentheses
// 2. ** Exponentiation
// 3. * / % Multiplication/Division/Modulus
// 4. + - Addition/Subtraction
// 5. < <= > >= Comparison
// 6. == != === !== Equality
// 7. && Logical AND
// 8. || Logical OR
?>
```

---

## 1.9 📝 Strings in PHP (Detail)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 45 mins |

### Definition
String characters ka sequence hai — text data store karne ke liye.

### Roman English Explanation
Strings text handle karti hain. PHP mein bohot saare string functions hain. Strings ko single quotes `'...'` ya double quotes `"..."` mein likh sakte hain. Difference yeh hai ki double quotes mein variables expand hote hain, single quotes mein nahi.

### String Operations

#### Example 1: String Creation (Beginner)
```php
<?php
$str1 = 'Hello World';           // Single quotes
$str2 = "Hello World";           // Double quotes
$str3 = <<<EOT
Multi-line string
using heredoc syntax
EOT;                             // Heredoc (double-quote like)
$str4 = <<<'EOT'
Multi-line string
using nowdoc syntax
EOT;                             // Nowdoc (single-quote like)
?>
```

#### Example 2: String Functions (Beginner)
```php
<?php
$str = "Hello World";

echo strlen($str);        // 11 (length)
echo str_word_count($str); // 2 (word count)
echo strrev($str);        // "dlroW olleH" (reverse)
echo strpos($str, "World"); // 6 (position of "World")
echo str_replace("World", "PHP", $str); // "Hello PHP"
?>
```

#### Example 3: String Manipulation (Intermediate)
```php
<?php
$text = "  Hello World!  ";

echo trim($text);          // "Hello World!" (remove spaces)
echo strtoupper($text);    // "  HELLO WORLD!  "
echo strtolower($text);    // "  hello world!  "
echo ucfirst("hello");     // "Hello" (capitalize first)
echo lcfirst("Hello");     // "hello" (lowercase first)
echo ucwords("hello world"); // "Hello World" (each word)
?>
```

#### Example 4: String Slicing (Intermediate)
```php
<?php
$str = "Hello World";

echo substr($str, 0, 5);     // "Hello" (position 0 se 5 chars)
echo substr($str, 6);        // "World" (position 6 se end tak)
echo substr($str, -5);       // "World" (last 5 chars)
echo substr($str, 0, -6);    // "Hello" (end se 6 chars hatake)
?>
```

#### Example 5: Advanced String Functions (Advanced)
```php
<?php
$csv = "apple,banana,orange";
$arr = explode(",", $csv);    // ["apple", "banana", "orange"]
$back = implode(" | ", $arr); // "apple | banana | orange"

$html = "<script>alert('xss')</script>";
echo htmlspecialchars($html); // Safe version: &lt;script&gt;...

$hash = md5("password");      // 32 character hash
echo md5($hash);               // Not secure! Use password_hash()

$url = "Hello World";
echo urlencode($url);         // "Hello+World"
?>
```

### String Comparison
```php
<?php
$str1 = "Hello";
$str2 = "hello";

var_dump($str1 == $str2);     // false (case sensitive)
var_dump(strcmp($str1, $str2)); // non-zero (not equal)
var_dump(strcasecmp($str1, $str2)); // 0 (case-insensitive, equal)

// Natural sorting
$files = ["img1.jpg", "img10.jpg", "img2.jpg"];
natsort($files);
print_r($files); // img1, img2, img10 (natural order)
?>
```

---

## 1.10 🔢 Numbers & Math

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
PHP mein numbers do types ke hote hain — Integer (puri sankhya) aur Float (dasamlav sankhya). PHP ke paas bohot saare math functions hain jo calculations mein help karte hain.

### Code Examples
```php
<?php
// Integer functions
echo is_int(42);      // 1 (true)
echo is_float(3.14);  // 1 (true)
echo abs(-5);         // 5
echo round(3.7);      // 4
echo ceil(3.1);       // 4 (upar ki taraf round)
echo floor(3.9);      // 3 (neeche ki taraf round)
echo max(10, 20, 5);  // 20 (sabse bada)
echo min(10, 20, 5);  // 5 (sabse chhota)
echo rand(1, 10);     // Random number 1-10
echo sqrt(25);        // 5
echo pow(2, 3);       // 8 (2^3)
?>
```

### Number Formatting
```php
<?php
$price = 1234567.89;
echo number_format($price);              // 1,234,568
echo number_format($price, 2);           // 1,234,567.89
echo number_format($price, 2, '.', ','); // 1,234,567.89
?>
```

---

## 1.11 🏷️ Constants

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 15 mins |

### Roman English Explanation
Constants bhi variables ki tarah hote hain, lekin inki value change nahi kar sakte. Ek baar define kar do, phir poori program mein wahi value rahegi. Constants global scope mein hote hain — kahi bhi access kar sakte hain.

### Code Syntax
```php
<?php
// define() se constant banate hain
define("SITE_NAME", "Code Duniya");
define("VERSION", "1.0.0");
define("MAX_USERS", 1000);
define("DEBUG_MODE", true);

// Use constant
echo SITE_NAME;  // "Code Duniya" (bina $ sign ke)
echo Version;    // Error! Case-sensitive hai

// PHP 8+ mein const keyword class ke bahar bhi
const API_KEY = "abc123";

// Magic constants (PHP predefined)
echo __LINE__;     // Current line number
echo __FILE__;     // Full file path
echo __DIR__;      // Directory path
echo __FUNCTION__; // Current function name
echo __CLASS__;    // Current class name
echo __METHOD__;   // Current method name
?>
```

### Constants vs Variables
| Feature | Constant | Variable |
|---------|----------|----------|
| Syntax | `define("NAME", value)` | `$name = value` |
| $ sign | ❌ No | ✅ Yes |
| Change value | ❌ Can't | ✅ Can |
| Global scope | ✅ Always | ❌ Needs global keyword |
| Case-sensitive | ✅ Default | ✅ Always |

---

## 1.12 🧭 Control Structures: If/Else

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 35 mins |

### Definition
Control structures program ke flow ko control karte hain — conditions ke hisaab se different code run hota hai.

### Roman English Explanation
If-else se hum decisions lete hain. Jaise real life mein "agar barish hai toh chhata le jao, nahi toh mat le jao" — waise hi programming mein conditions check karte hain.

### Code Syntax
```php
<?php
$age = 18;

if ($age >= 18) {
    echo "You are an adult";
} else {
    echo "You are a minor";
}
?>
```

### Examples

#### Example 1: Basic If/Else (Beginner)
```php
<?php
$marks = 75;

if ($marks >= 33) {
    echo "Pass! 🎉";
} else {
    echo "Fail 😢";
}
// Output: Pass! 🎉
?>
```

#### Example 2: Elseif Ladder (Beginner)
```php
<?php
$marks = 85;

if ($marks >= 90) {
    echo "Grade: A+";
} elseif ($marks >= 75) {
    echo "Grade: A";
} elseif ($marks >= 60) {
    echo "Grade: B";
} elseif ($marks >= 33) {
    echo "Grade: C";
} else {
    echo "Grade: F";
}
// Output: Grade: A
?>
```

#### Example 3: Ternary Operator (Intermediate)
```php
<?php
$age = 20;

// Short form of if/else
$status = ($age >= 18) ? "Adult" : "Minor";
echo $status; // Adult

// Nested ternary (careful - can be confusing)
$score = 75;
$grade = ($score >= 90) ? "A" : (($score >= 75) ? "B" : "C");
echo $grade; // B
?>
```

#### Example 4: Multiple Conditions (Intermediate)
```php
<?php
$age = 25;
$hasLicense = true;
$isDrunk = false;

if ($age >= 18 && $hasLicense && !$isDrunk) {
    echo "You can drive! 🚗";
} elseif ($age < 18) {
    echo "Too young to drive";
} elseif (!$hasLicense) {
    echo "No license!";
} elseif ($isDrunk) {
    echo "Don't drink and drive!";
}
?>
```

#### Example 5: Alternative Syntax (Advanced)
```php
<?php
// PHP alternative syntax (HTML ke saath use karte hain)
$loggedIn = true;
?>
<?php if ($loggedIn): ?>
    <h1>Welcome back!</h1>
    <a href="/logout">Logout</a>
<?php else: ?>
    <h1>Please login</h1>
    <a href="/login">Login</a>
<?php endif; ?>
```

### Real Project Example
```php
<?php
// E-commerce discount system
$totalAmount = 1500;
$isPremiumUser = true;
$couponCode = "SAVE50";

$discount = 0;

if ($totalAmount > 1000 && $isPremiumUser) {
    $discount = 20; // 20% discount
} elseif ($totalAmount > 500) {
    $discount = 10; // 10% discount
} elseif ($couponCode === "SAVE50") {
    $discount = 5; // 5% discount
}

$finalPrice = $totalAmount - ($totalAmount * $discount / 100);
echo "Original: $$totalAmount<br>";
echo "Discount: $discount%<br>";
echo "Final Price: $$finalPrice";
?>
```

---

## 1.13 🔀 Switch Statement

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Switch bhi if-else ki tarah hi hai, lekin jab ek hi variable ki multiple values check karni ho toh switch zyada clean lagta hai. Switch mein `break` lagana bhoolna mat — warna agla case bhi execute ho jayega!

### Code Syntax
```php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of week!";
        break;
    case "Friday":
        echo "Weekend is near!";
        break;
    case "Saturday":
    case "Sunday":
        echo "It's weekend!";
        break;
    default:
        echo "Midweek day";
}
// Output: Start of week!
?>
```

### PHP 8 Match Expression
```php
<?php
// Modern alternative to switch (PHP 8+)
$day = "Monday";

$result = match($day) {
    "Monday" => "Start of week!",
    "Friday" => "Weekend is near!",
    "Saturday", "Sunday" => "It's weekend!",
    default => "Midweek day"
};

echo $result; // Start of week!
?>
```

### Match vs Switch
| Feature | Switch | Match |
|---------|--------|-------|
| Return value | ❌ No | ✅ Yes |
| Break needed | ✅ Yes | ❌ No |
| Strict comparison | ❌ Loose (==) | ✅ Strict (===) |
| Multiple cases | Fall through | Comma separated |
| PHP version | All | 8.0+ |

---

## 1.14 🔄 Loops in PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 40 mins |

### Definition
Loops se hum code ko multiple times repeat kar sakte hain bina baar baar likhne ke.

### Roman English Explanation
4 types ke loops hain PHP mein:
1. **while** — jab tak condition true hai, loop chalta rahe
2. **do-while** — pehle ek baar chalo, phir condition check karo
3. **for** — jab kitni baar loop chalana hai pata ho
4. **foreach** — arrays ke liye special loop

### Examples

#### Example 1: While Loop (Beginner)
```php
<?php
$i = 1;
while ($i <= 5) {
    echo "Number: $i<br>";
    $i++;
}
// Output: 1 2 3 4 5
?>
```

#### Example 2: Do-While Loop (Beginner)
```php
<?php
$i = 1;
do {
    echo "Number: $i<br>";
    $i++;
} while ($i <= 5);
// Ye at least ek baar to chalega hi
?>
```

#### Example 3: For Loop (Intermediate)
```php
<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i % 2 == 0) {
        echo "$i is even<br>";
    } else {
        echo "$i is odd<br>";
    }
}
?>
```

#### Example 4: Foreach Loop (Intermediate)
```php
<?php
$fruits = ["Apple", "Banana", "Mango", "Orange"];

foreach ($fruits as $fruit) {
    echo "I like $fruit<br>";
}

// With key => value
$student = [
    "name" => "Rahul",
    "age" => 20,
    "course" => "BCA"
];

foreach ($student as $key => $value) {
    echo "$key: $value<br>";
}
?>
```

#### Example 5: Break & Continue (Advanced)
```php
<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        continue; // 5 ko skip karo
    }
    if ($i == 8) {
        break; // 8 pe loop rok do
    }
    echo "$i ";
}
// Output: 1 2 3 4 6 7
?>
```

### Real Project Example
```php
<?php
// Multiplication table generator
$number = 7;

echo "Table of $number:<br>";
for ($i = 1; $i <= 10; $i++) {
    $result = $number * $i;
    echo "$number × $i = $result<br>";
}

// Output: 7 × 1 = 7, 7 × 2 = 14, ... 7 × 10 = 70
?>
```

---

## 1.15 📦 Arrays in PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 50 mins |

### Definition
Array ek special variable hai jo multiple values store kar sakta hai.

### Roman English Explanation
Array ko aise samjho jaise ek almirah jisme multiple cheezein rakhi hain. Har cheez ka ek number (index) hota hai. PHP mein 3 types ke arrays hain: Indexed (numbered), Associative (named keys), Multidimensional (array ke andar array).

### Examples

#### Example 1: Indexed Array (Beginner)
```php
<?php
// Indexed array (0 se start hota hai)
$colors = ["Red", "Green", "Blue", "Yellow"];

echo $colors[0]; // Red
echo $colors[2]; // Blue

// Array functions
array_push($colors, "Purple"); // Last mein add
array_pop($colors);            // Last se remove
array_shift($colors);          // First se remove
array_unshift($colors, "Pink"); // First mein add

print_r($colors); // Print entire array
?>
```

#### Example 2: Associative Array (Beginner)
```php
<?php
// Key => Value pairs
$student = [
    "name" => "Rahul",
    "age" => 20,
    "grade" => "A",
    "city" => "Delhi"
];

echo $student["name"]; // Rahul
echo $student["city"]; // Delhi

// Add new key-value
$student["phone"] = "9876543210";
?>
```

#### Example 3: Multidimensional Array (Intermediate)
```php
<?php
$students = [
    ["name" => "Rahul", "marks" => 85],
    ["name" => "Priya", "marks" => 92],
    ["name" => "Amit", "marks" => 78]
];

echo $students[0]["name"];  // Rahul
echo $students[1]["marks"]; // 92

// Loop through
foreach ($students as $student) {
    echo $student["name"] . ": " . $student["marks"] . "<br>";
}
?>
```

#### Example 4: Array Sorting (Intermediate)
```php
<?php
$numbers = [5, 2, 8, 1, 9];

sort($numbers);      // Ascending: [1, 2, 5, 8, 9]
rsort($numbers);     // Descending: [9, 8, 5, 2, 1]

$ages = ["Rahul" => 25, "Priya" => 22, "Amit" => 28];
asort($ages);        // Ascending by value (keep keys)
ksort($ages);        // Ascending by key
arsort($ages);       // Descending by value
?>
```

#### Example 5: Array Functions (Advanced)
```php
<?php
$arr1 = [1, 2, 3];
$arr2 = [4, 5, 6];

$merged = array_merge($arr1, $arr2);    // [1,2,3,4,5,6]
$diff = array_diff($arr1, [2, 3, 4]);   // [1] (jo common nahi hai)
$intersect = array_intersect($arr1, [2, 3, 4]); // [2,3] (common)

$numbers = [1, 2, 3, 4, 5];
$squared = array_map(fn($n) => $n ** 2, $numbers); // [1,4,9,16,25]
$even = array_filter($numbers, fn($n) => $n % 2 == 0); // [2,4]
$sum = array_sum($numbers); // 15

$keys = array_keys($ages);    // ["Rahul", "Priya", "Amit"]
$values = array_values($ages); // [25, 22, 28]
?>
```

### Real Project Example
```php
<?php
// Shopping cart system
$cart = [
    ["product" => "Laptop", "price" => 55000, "qty" => 1],
    ["product" => "Mouse", "price" => 500, "qty" => 2],
    ["product" => "Keyboard", "price" => 1200, "qty" => 1]
];

$total = 0;
echo "<h2>Shopping Cart</h2>";
echo "<table border='1'>
<tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th></tr>";

foreach ($cart as $item) {
    $subtotal = $item["price"] * $item["qty"];
    $total += $subtotal;
    echo "<tr>
        <td>{$item['product']}</td>
        <td>₹{$item['price']}</td>
        <td>{$item['qty']}</td>
        <td>₹$subtotal</td>
    </tr>";
}
echo "<tr><td colspan='3'><b>Total</b></td><td><b>₹$total</b></td></tr>";
echo "</table>";
?>
```

---

## 1.16 🔧 Functions in PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 40 mins |

### Definition
Function code ka reusable block hai jo specific task perform karta hai.

### Roman English Explanation
Function ko aise samjho jaise ek machine — aap usme input (parameters) daalte ho, wo process karta hai aur output (return) deta hai. Ek baar function bana lo, jitni baar chahe use kar sakte ho.

### Code Syntax
```php
<?php
// Basic function
function sayHello() {
    echo "Hello!";
}

sayHello(); // Call function → "Hello!"
?>
```

### Examples

#### Example 1: Function with Parameters (Beginner)
```php
<?php
function greet($name) {
    echo "Hello, $name!";
}

greet("Rahul");  // Hello, Rahul!
greet("Priya");  // Hello, Priya!
?>
```

#### Example 2: Function with Return (Beginner)
```php
<?php
function add($a, $b) {
    return $a + $b;
}

$result = add(5, 3);
echo $result; // 8
?>
```

#### Example 3: Default Parameters (Intermediate)
```php
<?php
function calculatePrice($price, $tax = 0.18) {
    return $price + ($price * $tax);
}

echo calculatePrice(100);     // 118 (18% default tax)
echo calculatePrice(100, 0.1); // 110 (10% custom tax)
?>
```

#### Example 4: Type Hinting (Intermediate)
```php
<?php
// PHP 7+ type declarations
function multiply(int $a, int $b): int {
    return $a * $b;
}

function greetUser(string $name): string {
    return "Welcome, $name!";
}

// Nullable types
function getAge(?int $year): ?int {
    if ($year === null) return null;
    return date('Y') - $year;
}
?>
```

#### Example 5: Variable Functions & Callbacks (Advanced)
```php
<?php
// Variable function
$func = "strlen";
echo $func("Hello"); // 5

// Anonymous function (closure)
$greet = function($name) {
    return "Hi, $name!";
};
echo $greet("Rahul"); // Hi, Rahul!

// Arrow function (PHP 7.4+)
$squared = fn($n) => $n ** 2;
echo $squared(5); // 25

// Callback with array_map
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(fn($n) => $n * 2, $numbers);
print_r($doubled); // [2, 4, 6, 8, 10]
?>
```

### Variable Scope in Functions
```php
<?php
$globalVar = "I'm global";

function test() {
    $localVar = "I'm local";
    
    // Access global variable
    global $globalVar;
    echo $globalVar; // "I'm global"
    
    // Static variable (value persists between calls)
    static $count = 0;
    $count++;
    echo $count; // 1, 2, 3...
}

test();
// echo $localVar; // Error! Not accessible here
?>
```

---

# 🟠 MODULE 2: INTERMEDIATE PHP

---

## 2.1 🌐 Superglobals

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 45 mins |

### Definition
Superglobals built-in variables hain jo PHP ke andar kahin bhi accessible hote hain — function, class, ya kisi bhi scope mein.

### Roman English Explanation
PHP mein kuch special variables hote hain jo hamesha available rehte hain. Ye "superglobal" isliye kahte hain kyunki inhe access karne ke liye `global` keyword nahi chahiye. Ye automatically available hote hain.

### All Superglobals

| Variable | Kya Store Karta Hai |
|----------|-------------------|
| `$_GET` | URL parameters (form method="get") |
| `$_POST` | Form data (form method="post") |
| `$_REQUEST` | GET + POST dono |
| `$_SERVER` | Server information |
| `$_SESSION` | Session data |
| `$_COOKIE` | Cookie data |
| `$_FILES` | File upload data |
| `$_ENV` | Environment variables |
| `$GLOBALS` | All global variables |

### Examples

#### Example 1: $_GET (URL Parameters)
```php
<?php
// URL: http://example.com/profile.php?name=Rahul&age=25
echo "Name: " . $_GET["name"]; // Rahul
echo "Age: " . $_GET["age"];   // 25

// Check if parameter exists
if (isset($_GET["search"])) {
    $search = $_GET["search"];
    echo "Searching for: $search";
}
?>
```

#### Example 2: $_POST (Form Data)
```php
<?php
// form.html
?>
<form method="POST" action="process.php">
    <input type="text" name="username">
    <input type="email" name="email">
    <button type="submit">Submit</button>
</form>

<?php
// process.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    echo "Welcome, $username! Email: $email";
}
?>
```

#### Example 3: $_SERVER (Server Info)
```php
<?php
echo $_SERVER["PHP_SELF"];       // Current file path
echo $_SERVER["SERVER_NAME"];    // Server domain name
echo $_SERVER["HTTP_HOST"];      // Host header
echo $_SERVER["REQUEST_URI"];    // Current URL
echo $_SERVER["REQUEST_METHOD"]; // GET/POST
echo $_SERVER["REMOTE_ADDR"];    // User IP address
echo $_SERVER["HTTP_USER_AGENT"]; // Browser info
echo $_SERVER["SCRIPT_NAME"];    // Current script name
?>
```

#### Example 4: $_FILES (File Upload)
```php
<?php
// HTML form
?>
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="profile_pic">
    <button type="submit">Upload</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["profile_pic"]["name"]);
    
    // File info
    echo "Name: " . $_FILES["profile_pic"]["name"];
    echo "Size: " . $_FILES["profile_pic"]["size"];
    echo "Type: " . $_FILES["profile_pic"]["type"];
    echo "Temp: " . $_FILES["profile_pic"]["tmp_name"];
    
    if (move_uploaded_file($_FILES["profile_pic"]["tmp_name"], $targetFile)) {
        echo "File uploaded!";
    }
}
?>
```

#### Example 5: $GLOBALS (All Global Variables)
```php
<?php
$x = 75;
$y = 25;

function addition() {
    $GLOBALS["z"] = $GLOBALS["x"] + $GLOBALS["y"];
}

addition();
echo $z; // 100
?>
```

---

## 2.2 📝 PHP Forms

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 50 mins |

### Roman English Explanation
Forms web ka sabse important part hain — user se data lene ke liye. PHP forms process karta hai. Do main methods hain: GET (URL mein data dikhta hai) aur POST (data hidden hota hai). POST zyada secure hai sensitive data ke liye.

### Complete Form Example
```php
<?php
$name = $email = $message = "";
$nameErr = $emailErr = $messageErr = "";
$success = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validation
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = htmlspecialchars($_POST["name"]);
        // Check name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "Only letters allowed";
        }
    }
    
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = htmlspecialchars($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
    
    if (empty($_POST["message"])) {
        $messageErr = "Message is required";
    } else {
        $message = htmlspecialchars($_POST["message"]);
    }
    
    if (empty($nameErr) && empty($emailErr) && empty($messageErr)) {
        $success = true;
        // Process form (save to database, send email, etc.)
    }
}
?>

<!DOCTYPE html>
<html>
<body>
    <?php if ($success): ?>
        <div style="color: green; padding: 10px; border: 1px solid green;">
            ✅ Thank you, <?php echo $name; ?>! Your message has been sent.
        </div>
    <?php endif; ?>
    
    <form method="POST" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
        Name: <input type="text" name="name" value="<?php echo $name; ?>">
        <span style="color: red;"><?php echo $nameErr; ?></span><br>
        
        Email: <input type="email" name="email" value="<?php echo $email; ?>">
        <span style="color: red;"><?php echo $emailErr; ?></span><br>
        
        Message: <textarea name="message"><?php echo $message; ?></textarea>
        <span style="color: red;"><?php echo $messageErr; ?></span><br>
        
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

### Form Security Tips
```php
<?php
// 1. Sanitize input
$name = htmlspecialchars($_POST["name"]); // XSS prevention

// 2. Validate email
$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Valid email
}

// 3. Trim whitespace
$input = trim($_POST["input"]);

// 4. Strip HTML tags
$clean = strip_tags($_POST["content"]);

// 5. Escape for database
$safe = mysqli_real_escape_string($conn, $_POST["data"]);
?>
```
---

## 2.3 📅 Date & Time

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
PHP mein date aur time handle karna bohot easy hai. `date()` function se kisi bhi format mein date dikha sakte hain. Timezone set karna mat bhoolo — warna default UTC time aayega.

### Code Examples
```php
<?php
// Set timezone
date_default_timezone_set("Asia/Kolkata");

echo date("d/m/Y");         // 08/07/2026
echo date("l");              // Wednesday
echo date("h:i:s A");       // 02:30:45 PM
echo date("F j, Y, g:i a"); // July 8, 2026, 2:30 pm

// Create from string
$timestamp = strtotime("next Monday");
echo date("d/m/Y", $timestamp);

$timestamp2 = strtotime("+1 week");
echo date("d/m/Y", $timestamp2);

// Date difference
$date1 = date_create("2024-01-01");
$date2 = date_create("2026-07-08");
$diff = date_diff($date1, $date2);
echo $diff->format("%y years %m months %d days");
?>
```

---

## 2.4 📁 File Handling

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 35 mins |

### Roman English Explanation
PHP se files read, write, create aur delete kar sakte hain. File handling ke liye `fopen()`, `fread()`, `fwrite()`, `fclose()` functions use karte hain.

### Examples

#### Example 1: Read File (Beginner)
```php
<?php
// Read entire file
$content = file_get_contents("test.txt");
echo $content;

// Read file line by line
$file = fopen("test.txt", "r") or die("File not found!");
while (!feof($file)) {
    echo fgets($file) . "<br>";
}
fclose($file);
?>
```

#### Example 2: Write File (Intermediate)
```php
<?php
// Write to file (overwrite)
$data = "Hello World!";
file_put_contents("test.txt", $data);

// Append to file
$more = "More content\n";
file_put_contents("test.txt", $more, FILE_APPEND);

// Using fopen/fwrite
$file = fopen("test.txt", "a"); // a = append mode
fwrite($file, "New line\n");
fclose($file);
?>
```

#### Example 3: File Upload (Advanced)
```php
<?php
$targetDir = "uploads/";
$allowedTypes = ["jpg", "png", "pdf"];
$maxSize = 2 * 1024 * 1024; // 2MB

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fileName = basename($_FILES["file"]["name"]);
    $fileSize = $_FILES["file"]["size"];
    $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    
    // Validate
    if (!in_array($fileType, $allowedTypes)) {
        echo "Invalid file type!";
    } elseif ($fileSize > $maxSize) {
        echo "File too large!";
    } else {
        $newName = time() . "_" . $fileName;
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetDir . $newName)) {
            echo "File uploaded!";
        }
    }
}
?>
```

---

## 2.5 🍪 Cookies

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Cookies chhoti files hoti hain jo user ke browser mein store hoti hain. Inse user ko remember kar sakte hain — jaise "Keep me logged in" feature.

### Code Examples
```php
<?php
// Set cookie (name, value, expire time)
setcookie("username", "Rahul", time() + 86400 * 30); // 30 days
setcookie("theme", "dark", time() + 86400 * 365);    // 1 year

// Read cookie
if (isset($_COOKIE["username"])) {
    echo "Welcome back, " . $_COOKIE["username"];
}

// Delete cookie (set past time)
setcookie("username", "", time() - 3600);

// Cookie options (PHP 7.3+)
setcookie("token", "abc123", [
    "expires" => time() + 86400,
    "path" => "/",
    "domain" => "example.com",
    "secure" => true,      // HTTPS only
    "httponly" => true,    // JS can't access
    "samesite" => "Strict" // CSRF protection
]);
?>
```

---

## 2.6 🔐 Sessions

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
Sessions server-side store hote hain (cookies ki tarah nahi). Jab user login karta hai, session banata hai jisme user ka data store hota hai. Session ID cookie mein store hoti hai, actual data server pe.

### Code Examples
```php
<?php
// Start session (sabse pehle, HTML se bhi pehle)
session_start();

// Set session variables
$_SESSION["user_id"] = 123;
$_SESSION["username"] = "rahul_kumar";
$_SESSION["role"] = "admin";

// Read session
if (isset($_SESSION["username"])) {
    echo "Logged in as: " . $_SESSION["username"];
}

// Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION["user_id"]);
}

// Login system
if ($_POST["username"] == "admin" && $_POST["password"] == "pass123") {
    $_SESSION["user_id"] = 1;
    $_SESSION["username"] = "admin";
    header("Location: dashboard.php");
    exit();
}

// Logout (destroy session)
function logout() {
    session_start();
    $_SESSION = [];           // Clear all session vars
    session_destroy();        // Destroy session
    header("Location: login.php");
    exit();
}
?>
```

### Session Security Tips
```php
<?php
// Regenerate session ID after login (prevent session fixation)
session_regenerate_id(true);

// Set session timeout
if (isset($_SESSION["last_active"])) {
    $timeout = 1800; // 30 minutes
    if (time() - $_SESSION["last_active"] > $timeout) {
        session_destroy();
        header("Location: login.php?timeout=1");
        exit();
    }
}
$_SESSION["last_active"] = time();
?>
```

---

## 2.7 📨 Email with PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
PHP `mail()` function se emails bhej sakte hain. Lekin production mein PHPMailer ya Symfony Mailer use karte hain kyunki `mail()` ke limitations hain.

### Basic Example
```php
<?php
$to = "user@example.com";
$subject = "Welcome to Code Duniya!";
$message = "Thank you for signing up!";
$headers = "From: noreply@codeduniya.com\r\n";
$headers .= "Reply-To: support@codeduniya.com\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent!";
} else {
    echo "Email failed!";
}
?>
```

### Modern Approach (PHPMailer)
```php
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your@gmail.com';
$mail->Password = 'app_password'; // Use App Password!
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->setFrom('your@gmail.com', 'Code Duniya');
$mail->addAddress('user@example.com', 'User');
$mail->isHTML(true);
$mail->Subject = 'Welcome!';
$mail->Body = '<h1>Hello!</h1><p>Welcome to Code Duniya!</p>';

$mail->send();
?>
```

---

## 2.8 🔍 Regular Expressions (RegEx)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 30 mins |

### Roman English Explanation
RegEx patterns hote hain jo text mein specific patterns find karne ke liye use hote hain. Jaise — email validate karna, phone number check karna, specific words search karna.

### Code Examples
```php
<?php
$text = "My email is abc@example.com and phone is +91-9876543210";

// preg_match - kya pattern exist karta hai?
if (preg_match("/[a-z]+@[a-z]+\.[a-z]+/", $text, $match)) {
    echo "Found email: " . $match[0];
}

// preg_match_all - saare matches dhundo
preg_match_all("/\d+/", $text, $numbers);
print_r($numbers[0]); // ["91", "9876543210"]

// preg_replace - replace karo
$clean = preg_replace("/[^a-zA-Z0-9@. ]/", "", $text);

// Common patterns
$email_pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
$phone_pattern = "/^\+?[\d-]{10,15}$/";
$url_pattern = "/^(https?:\/\/)?[\w.-]+\.\w{2,}\/?.*$/";

// Validation
$email = "test@example.com";
if (preg_match($email_pattern, $email)) {
    echo "Valid email!";
}
?>
```

---

# 🔵 MODULE 3: ADVANCED PHP

---

## 3.1 ⚠️ Error Handling

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Roman English Explanation
Error handling se hum gracefully errors handle kar sakte hain instead of script crash hone de. PHP mein try-catch blocks, custom error handlers, aur exception handling hoti hai.

### Examples

#### Example 1: Try-Catch (Beginner)
```php
<?php
function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero!");
    }
    return $a / $b;
}

try {
    echo divide(10, 0);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    echo "This always runs!";
}
?>
```

#### Example 2: Custom Exception (Intermediate)
```php
<?php
class InvalidAgeException extends Exception {}

function validateAge($age) {
    if ($age < 0) {
        throw new InvalidAgeException("Age can't be negative!");
    }
    if ($age > 150) {
        throw new InvalidAgeException("Invalid age!");
    }
    return "Valid age: $age";
}

try {
    echo validateAge(-5);
} catch (InvalidAgeException $e) {
    echo "Validation Error: " . $e->getMessage();
} catch (Exception $e) {
    echo "General Error: " . $e->getMessage();
}
?>
```

#### Example 3: Multiple Exceptions (Advanced)
```php
<?php
class DatabaseException extends Exception {}
class ValidationException extends Exception {}
class FileException extends Exception {}

function processUserData($data) {
    if (!isset($data["email"])) {
        throw new ValidationException("Email required");
    }
    if (!filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
        throw new ValidationException("Invalid email");
    }
    // Database operation
    $db = new mysqli("localhost", "user", "pass", "db");
    if ($db->connect_error) {
        throw new DatabaseException("DB connection failed");
    }
    return true;
}

try {
    $userData = ["email" => "invalid"];
    processUserData($userData);
} catch (ValidationException $e) {
    echo "Please fix: " . $e->getMessage();
} catch (DatabaseException $e) {
    echo "Server error: " . $e->getMessage();
    error_log($e->getMessage()); // Log to server
} catch (Exception $e) {
    echo "Something went wrong";
}
?>
```

---

## 3.2 💾 Working with JSON

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
JSON (JavaScript Object Notation) ek lightweight data format hai jo API communication mein use hota hai. PHP mein `json_encode()` aur `json_decode()` functions hain.

### Code Examples
```php
<?php
// Array to JSON
$user = [
    "name" => "Rahul",
    "age" => 25,
    "skills" => ["PHP", "JavaScript", "Python"],
    "active" => true
];

$json = json_encode($user, JSON_PRETTY_PRINT);
echo $json;
/* Output:
{
    "name": "Rahul",
    "age": 25,
    "skills": ["PHP", "JavaScript", "Python"],
    "active": true
}
*/

// JSON to Array
$jsonString = '{"name":"Priya","age":22,"city":"Delhi"}';
$data = json_decode($jsonString, true); // true = associative array
echo $data["name"]; // Priya
echo $data["city"]; // Delhi

// JSON to Object
$obj = json_decode($jsonString);
echo $obj->name; // Priya

// Error handling
$invalidJson = "{bad json}";
$result = json_decode($invalidJson);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo "JSON Error: " . json_last_error_msg();
}

// JSON with file
file_put_contents("data.json", $json);
$readJson = file_get_contents("data.json");
$readData = json_decode($readJson, true);
?>
```

### REST API Response
```php
<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$response = [
    "status" => "success",
    "message" => "User data retrieved",
    "data" => [
        "id" => 1,
        "name" => "Rahul",
        "email" => "rahul@example.com"
    ]
];

echo json_encode($response);
?>
```

---

## 3.3 📦 Composer & Package Management

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Composer PHP ka package manager hai. Isse third-party libraries install aur manage karte hain. Jaise npm JavaScript ke liye hai, waise Composer PHP ke liye hai.

### Basic Commands
```bash
# Composer install karo
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

# Project mein use karo
composer init

# Packages install karo
composer require phpmailer/phpmailer
composer require guzzlehttp/guzzle
composer require vlucas/phpdotenv

# Development dependencies
composer require --dev phpunit/phpunit

# Install from composer.json
composer install

# Update all packages
composer update
```

### composer.json Example
```json
{
    "name": "codeduniya/app",
    "description": "Code Duniya Learning Platform",
    "require": {
        "php": ">=8.1",
        "phpmailer/phpmailer": "^6.9",
        "guzzlehttp/guzzle": "^7.8",
        "vlucas/phpdotenv": "^5.6"
    },
    "require-dev": {
        "phpunit/phpunit": "^11.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
```

### Autoloading
```php
<?php
// Composer autoload (sabse pehle include karo)
require 'vendor/autoload.php';

// Ab directly classes use kar sakte ho bina require ke
use PHPMailer\PHPMailer\PHPMailer;
use GuzzleHttp\Client;

$mail = new PHPMailer(true);
$client = new Client();
?>
```

---

# 🟣 MODULE 4: OBJECT-ORIENTED PHP

---

## 4.1 🏗️ OOP Basics

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 45 mins |

### Definition
OOP (Object-Oriented Programming) ek programming paradigm hai jo "objects" ke around code organize karta hai.

### Roman English Explanation
OOP ko aise samjho — Class ek blueprint hai (jaise ghar ka naksha), aur Object us blueprint se bana actual ghar hai. Class mein properties (variables) aur methods (functions) hote hain.

### Code Examples

#### Example 1: Basic Class & Object (Beginner)
```php
<?php
// Class definition (blueprint)
class Car {
    // Properties (variables)
    public $brand;
    public $color;
    
    // Method (function)
    public function start() {
        return "Car is starting...";
    }
    
    public function getInfo() {
        return "$this->color $this->brand";
    }
}

// Object create karo
$myCar = new Car();
$myCar->brand = "Toyota";
$myCar->color = "Red";

echo $myCar->getInfo();  // Red Toyota
echo $myCar->start();    // Car is starting...
?>
```

#### Example 2: Constructor (Intermediate)
```php
<?php
class User {
    public $name;
    public $email;
    public $createdAt;
    
    // Constructor - object banate hi automatically call hota hai
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
        $this->createdAt = date("Y-m-d H:i:s");
        echo "User $name created!<br>";
    }
    
    // Destructor - object destroy hote pe call hota hai
    public function __destruct() {
        echo "User $this->name removed!<br>";
    }
    
    public function display() {
        return "Name: $this->name, Email: $this->email";
    }
}

$user = new User("Rahul", "rahul@email.com");
echo $user->display();
// Output: User Rahul created!
//         Name: Rahul, Email: rahul@email.com
//         User Rahul removed! (script end pe)
?>
```

#### Example 3: Access Modifiers (Intermediate)
```php
<?php
class BankAccount {
    public $accountNumber;       // Kahin se bhi accessible
    protected $accountType;      // Same class + child classes
    private $balance;            // Sirf is class mein
    
    public function __construct($number, $type, $balance) {
        $this->accountNumber = $number;
        $this->accountType = $type;
        $this->balance = $balance;
    }
    
    public function getBalance() {
        return $this->balance; // Private property access
    }
    
    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
            return true;
        }
        return false;
    }
    
    protected function calculateInterest() {
        return $this->balance * 0.05;
    }
}

$account = new BankAccount("12345", "Savings", 10000);
echo $account->accountNumber;  // ✅ Public
echo $account->getBalance();   // ✅ Public method
// echo $account->balance;     // ❌ Private - error!
// echo $account->accountType; // ❌ Protected - error!
?>
```

#### Example 4: Inheritance (Advanced)
```php
<?php
// Parent class
class Animal {
    protected $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function makeSound() {
        return "Some sound";
    }
    
    public function getName() {
        return $this->name;
    }
}

// Child class
class Dog extends Animal {
    public $breed;
    
    public function __construct($name, $breed) {
        parent::__construct($name); // Parent constructor call
        $this->breed = $breed;
    }
    
    // Override parent method
    public function makeSound() {
        return "Woof! Woof!";
    }
    
    public function fetch() {
        return "$this->name is fetching the ball!";
    }
}

class Cat extends Animal {
    public function makeSound() {
        return "Meow!";
    }
}

$dog = new Dog("Buddy", "Golden Retriever");
$cat = new Cat("Kitty");

echo $dog->makeSound(); // Woof! Woof!
echo $dog->fetch();     // Buddy is fetching the ball!
echo $cat->makeSound(); // Meow!
?>
```

#### Example 5: Polymorphism & Interfaces (Advanced)
```php
<?php
// Interface - contract like blueprint
interface PaymentGateway {
    public function processPayment($amount);
    public function refundPayment($transactionId);
}

// Implementing interface
class PayPalGateway implements PaymentGateway {
    public function processPayment($amount) {
        return "Processing $$amount via PayPal";
    }
    
    public function refundPayment($transactionId) {
        return "Refunding transaction $transactionId via PayPal";
    }
}

class StripeGateway implements PaymentGateway {
    public function processPayment($amount) {
        return "Processing $$amount via Stripe";
    }
    
    public function refundPayment($transactionId) {
        return "Refunding $transactionId via Stripe";
    }
}

// Polymorphism - same interface, different implementations
function checkout(PaymentGateway $gateway, $amount) {
    return $gateway->processPayment($amount);
}

$paypal = new PayPalGateway();
$stripe = new StripeGateway();

echo checkout($paypal, 100);  // Processing $100 via PayPal
echo checkout($stripe, 200);  // Processing $200 via Stripe
?>
```

---

## 4.2 🔷 Abstract Classes & Traits

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 30 mins |

### Roman English Explanation
**Abstract class**: Inka object nahi bana sakte. Sirf inherit kar sakte hain. Abstract methods child class mein implement karne hote hain.

**Traits**: PHP single inheritance support karta hai (ek class sirf ek parent extend kar sakti hai). Traits se multiple classes mein code reuse kar sakte hain.

### Code Examples
```php
<?php
// Abstract class
abstract class Shape {
    protected $color;
    
    public function __construct($color) {
        $this->color = $color;
    }
    
    abstract public function calculateArea();
    abstract public function calculatePerimeter();
    
    public function getColor() {
        return $this->color;
    }
}

class Circle extends Shape {
    private $radius;
    
    public function __construct($color, $radius) {
        parent::__construct($color);
        $this->radius = $radius;
    }
    
    public function calculateArea() {
        return pi() * $this->radius ** 2;
    }
    
    public function calculatePerimeter() {
        return 2 * pi() * $this->radius;
    }
}

class Rectangle extends Shape {
    private $width, $height;
    
    public function __construct($color, $width, $height) {
        parent::__construct($color);
        $this->width = $width;
        $this->height = $height;
    }
    
    public function calculateArea() {
        return $this->width * $this->height;
    }
    
    public function calculatePerimeter() {
        return 2 * ($this->width + $this->height);
    }
}

$circle = new Circle("Red", 5);
echo $circle->calculateArea(); // 78.54

$rect = new Rectangle("Blue", 4, 6);
echo $rect->calculateArea();   // 24

// Traits
trait Logger {
    public function log($message) {
        echo "[LOG] " . date("Y-m-d H:i:s") . ": $message<br>";
    }
}

trait Timestampable {
    public $createdAt;
    public $updatedAt;
    
    public function setTimestamps() {
        $this->createdAt = date("Y-m-d H:i:s");
        $this->updatedAt = date("Y-m-d H:i:s");
    }
    
    public function updateTimestamp() {
        $this->updatedAt = date("Y-m-d H:i:s");
    }
}

class Product {
    use Logger, Timestampable;
    
    public $name;
    
    public function __construct($name) {
        $this->name = $name;
        $this->setTimestamps();
        $this->log("Product '$name' created");
    }
}

$product = new Product("Laptop");
// Uses Logger trait's log() and Timestampable trait's setTimestamps()
?>
```

---

## 4.3 📛 Namespaces

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Namespaces se class names organize kar sakte hain. Jab do libraries same class name use karein toh conflict resolve hota hai. Namespace = folder jaisa hai.

### Code Examples
```php
<?php
// File: src/Database/Connection.php
namespace App\Database;

class Connection {
    public function connect() {
        return "Database connected";
    }
}

// File: src/Cache/Connection.php
namespace App\Cache;

class Connection {
    public function connect() {
        return "Cache connected";
    }
}

// File: index.php
require 'vendor/autoload.php';

use App\Database\Connection as DbConnection;
use App\Cache\Connection as CacheConnection;

$db = new DbConnection();
echo $db->connect(); // Database connected

$cache = new CacheConnection();
echo $cache->connect(); // Cache connected

// Or use fully qualified name
$db2 = new \App\Database\Connection();
?>
```

### Directory Structure
```
project/
├── src/
│   ├── Database/
│   │   └── Connection.php    (namespace App\Database)
│   ├── Cache/
│   │   └── Connection.php    (namespace App\Cache)
│   └── Models/
│       └── User.php          (namespace App\Models)
├── composer.json
└── index.php
```

---

# 🟤 MODULE 5: DATABASE WITH PHP

---

## 5.1 🗄️ MySQL with PDO

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 50 mins |

### Roman English Explanation
Database se data store aur retrieve karte hain. PHP mein do main tarike hain: MySQLi (MySQL specific) aur PDO (PHP Data Objects - multiple databases support). PDO zyada secure aur modern hai.

### Connection
```php
<?php
$host = "localhost";
$dbname = "codeduniya";
$username = "root";
$password = "";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
    echo "Connected successfully";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
```

### CRUD Operations

#### Create (INSERT)
```php
<?php
$sql = "INSERT INTO users (name, email, age) VALUES (:name, :email, :age)";
$stmt = $pdo->prepare($sql);

$stmt->execute([
    ":name" => "Rahul Kumar",
    ":email" => "rahul@email.com",
    ":age" => 25
]);

$lastId = $pdo->lastInsertId();
echo "User created with ID: $lastId";
?>
```

#### Read (SELECT)
```php
<?php
// Single row
$sql = "SELECT * FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([":id" => 1]);
$user = $stmt->fetch();

echo $user["name"] . " - " . $user["email"];

// Multiple rows
$sql = "SELECT * FROM users WHERE age > :age ORDER BY name ASC";
$stmt = $pdo->prepare($sql);
$stmt->execute([":age" => 18]);
$users = $stmt->fetchAll();

foreach ($users as $user) {
    echo $user["name"] . "<br>";
}

// Count
$stmt = $pdo->query("SELECT COUNT(*) FROM users");
$count = $stmt->fetchColumn();
echo "Total users: $count";
?>
```

#### Update
```php
<?php
$sql = "UPDATE users SET name = :name, email = :email WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ":name" => "Rahul Sharma",
    ":email" => "rahul.sharma@email.com",
    ":id" => 1
]);

if ($stmt->rowCount() > 0) {
    echo "User updated!";
} else {
    echo "No changes made";
}
?>
```

#### Delete
```php
<?php
$sql = "DELETE FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([":id" => 1]);

if ($stmt->rowCount() > 0) {
    echo "User deleted!";
} else {
    echo "User not found";
}
?>
```

### SQL Injection Prevention
```php
<?php
// ❌ UNSAFE - Never do this!
$id = $_GET["id"];
$sql = "SELECT * FROM users WHERE id = $id"; // DROP TABLE users! 🚨
$result = $pdo->query($sql);

// ✅ SAFE - Always use prepared statements
$sql = "SELECT * FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([":id" => $_GET["id"]]);
$result = $stmt->fetch();
?>
```

### Complete Example: User Management
```php
<?php
class UserManager {
    private PDO $pdo;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }
    
    public function createUser(string $name, string $email, int $age): int {
        $sql = "INSERT INTO users (name, email, age, created_at) 
                VALUES (:name, :email, :age, NOW())";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            "name" => $name,
            "email" => $email,
            "age" => $age
        ]);
        return (int) $this->pdo->lastInsertId();
    }
    
    public function getUser(int $id): ?array {
        $sql = "SELECT * FROM users WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(["id" => $id]);
        $user = $stmt->fetch();
        return $user ?: null;
    }
    
    public function listUsers(int $page = 1, int $perPage = 10): array {
        $offset = ($page - 1) * $perPage;
        $sql = "SELECT * FROM users ORDER BY created_at DESC 
                LIMIT :limit OFFSET :offset";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue("limit", $perPage, PDO::PARAM_INT);
        $stmt->bindValue("offset", $offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    public function updateUser(int $id, array $data): bool {
        $fields = [];
        foreach ($data as $key => $value) {
            $fields[] = "$key = :$key";
        }
        $sql = "UPDATE users SET " . implode(", ", $fields) . " WHERE id = :id";
        $data["id"] = $id;
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($data);
    }
    
    public function deleteUser(int $id): bool {
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute(["id" => $id]);
    }
}

// Usage
$db = new PDO("mysql:host=localhost;dbname=test", "root", "");
$manager = new UserManager($db);
$newId = $manager->createUser("Priya", "priya@email.com", 22);
$user = $manager->getUser($newId);
print_r($user);
?>
```

---

## 5.2 🔗 Database Migrations

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Migrations se database schema version control mein rakh sakte hain. Har change ek file mein hota hai jise version order mein apply karte hain.

### Migration Example
```php
<?php
// migrations/001_create_users_table.php
return [
    "up" => "
        CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            age INT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ",
    "down" => "DROP TABLE IF EXISTS users"
];

// migrations/002_add_role_column.php
return [
    "up" => "ALTER TABLE users ADD COLUMN role ENUM('user', 'admin') DEFAULT 'user'",
    "down" => "ALTER TABLE users DROP COLUMN role"
];

// Simple migration runner
function runMigrations(PDO $pdo) {
    $migrations = glob("migrations/*.php");
    sort($migrations);
    
    // Create migrations table
    $pdo->exec("CREATE TABLE IF NOT EXISTS migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        migration VARCHAR(255) NOT NULL,
        executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");
    
    $executed = $pdo->query("SELECT migration FROM migrations")
                    ->fetchAll(PDO::FETCH_COLUMN);
    
    foreach ($migrations as $file) {
        $name = basename($file);
        if (in_array($name, $executed)) continue;
        
        $migration = require $file;
        $pdo->exec($migration["up"]);
        $pdo->prepare("INSERT INTO migrations (migration) VALUES (?)")
            ->execute([$name]);
        echo "Executed: $name\n";
    }
}
?>
```

---

# 🔴 MODULE 6: PROFESSIONAL PHP

---

## 6.1 🏗️ MVC Architecture

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 40 mins |

### Roman English Explanation
MVC = Model-View-Controller. Ye ek architecture pattern hai jo code ko 3 parts mein divide karta hai:
- **Model**: Database se baat karta hai
- **View**: UI dikhata hai (HTML)
- **Controller**: Request handle karta hai, Model aur View ko connect karta hai

### Simple MVC Example

#### File Structure
```
project/
├── app/
│   ├── controllers/
│   │   └── UserController.php
│   ├── models/
│   │   └── User.php
│   └── views/
│       ├── users/
│       │   ├── index.php
│       │   └── show.php
│       └── layouts/
│           └── main.php
├── public/
│   └── index.php
└── config/
    └── database.php
```

#### Router (public/index.php)
```php
<?php
require_once "../config/database.php";

$url = $_GET["url"] ?? "home";
$url = rtrim($url, "/");
$urlParts = explode("/", $url);

$controller = ucfirst($urlParts[0]) . "Controller";
$method = $urlParts[1] ?? "index";
$params = array_slice($urlParts, 2);

// Autoload
spl_autoload_register(function($class) {
    $paths = [
        "../app/controllers/$class.php",
        "../app/models/$class.php"
    ];
    foreach ($paths as $path) {
        if (file_exists($path)) {
            require $path;
            return;
        }
    }
});

if (class_exists($controller)) {
    $instance = new $controller();
    if (method_exists($instance, $method)) {
        call_user_func_array([$instance, $method], $params);
    } else {
        echo "404 - Method not found";
    }
} else {
    echo "404 - Controller not found";
}
?>
```

#### Controller
```php
<?php
// app/controllers/UserController.php
class UserController {
    private User $userModel;
    
    public function __construct() {
        $this->userModel = new User();
    }
    
    public function index() {
        $users = $this->userModel->getAll();
        require "../app/views/users/index.php";
    }
    
    public function show($id) {
        $user = $this->userModel->getById($id);
        if (!$user) {
            echo "User not found";
            return;
        }
        require "../app/views/users/show.php";
    }
    
    public function create() {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $data = [
                "name" => $_POST["name"],
                "email" => $_POST["email"]
            ];
            $this->userModel->create($data);
            header("Location: /user/index");
            exit();
        }
        require "../app/views/users/create.php";
    }
}
?>
```

#### Model
```php
<?php
// app/models/User.php
class User {
    private PDO $db;
    
    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }
    
    public function getAll(): array {
        $stmt = $this->db->query("SELECT * FROM users ORDER BY id DESC");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function getById(int $id): ?array {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result ?: null;
    }
    
    public function create(array $data): int {
        $stmt = $this->db->prepare(
            "INSERT INTO users (name, email) VALUES (:name, :email)"
        );
        $stmt->execute($data);
        return (int) $this->db->lastInsertId();
    }
}
?>
```

#### View
```php
<!-- app/views/users/index.php -->
<h1>Users List</h1>
<table border="1">
    <tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>
    <?php foreach ($users as $user): ?>
    <tr>
        <td><?= $user["id"] ?></td>
        <td><?= htmlspecialchars($user["name"]) ?></td>
        <td><?= htmlspecialchars($user["email"]) ?></td>
        <td><a href="/user/show/<?= $user["id"] ?>">View</a></td>
    </tr>
    <?php endforeach; ?>
</table>
```

---

## 6.2 🔐 Authentication & Security

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 45 mins |

### Password Hashing
```php
<?php
// Signup - hash password
$password = "user123";
$hashedPassword = password_hash($password, PASSWORD_BCRYPT, [
    "cost" => 12 // Higher cost = more secure but slower
]);
// Output: $2y$12$... (60 character string)

// Login - verify password
if (password_verify($password, $hashedPassword)) {
    echo "Login successful!";
} else {
    echo "Wrong password!";
}

// Check if rehash needed
if (password_needs_rehash($hashedPassword, PASSWORD_BCRYPT, ["cost" => 12])) {
    $newHash = password_hash($password, PASSWORD_BCRYPT, ["cost" => 12]);
    // Update in database
}
?>
```

### Complete Auth System
```php
<?php
// Auth.php
class Auth {
    private PDO $pdo;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }
    
    public function register(string $name, string $email, string $password): array {
        // Validate
        if (empty($name) || empty($email) || empty($password)) {
            return ["success" => false, "message" => "All fields required"];
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return ["success" => false, "message" => "Invalid email"];
        }
        if (strlen($password) < 8) {
            return ["success" => false, "message" => "Password too short"];
        }
        
        // Check if email exists
        $stmt = $this->pdo->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        if ($stmt->fetch()) {
            return ["success" => false, "message" => "Email already registered"];
        }
        
        // Create user
        $hash = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $this->pdo->prepare(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
        );
        $stmt->execute([$name, $email, $hash]);
        
        return ["success" => true, "message" => "Registration successful"];
    }
    
    public function login(string $email, string $password): array {
        $stmt = $this->pdo->prepare(
            "SELECT id, name, email, password, role FROM users WHERE email = ?"
        );
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$user || !password_verify($password, $user["password"])) {
            return ["success" => false, "message" => "Invalid credentials"];
        }
        
        // Regenerate session ID for security
        session_regenerate_id(true);
        
        $_SESSION["user_id"] = $user["id"];
        $_SESSION["user_name"] = $user["name"];
        $_SESSION["user_role"] = $user["role"];
        $_SESSION["last_active"] = time();
        
        return ["success" => true, "message" => "Login successful"];
    }
    
    public function isLoggedIn(): bool {
        return isset($_SESSION["user_id"]);
    }
    
    public function requireLogin(): void {
        if (!$this->isLoggedIn()) {
            header("Location: /login.php");
            exit();
        }
    }
    
    public function requireRole(string $role): void {
        $this->requireLogin();
        if ($_SESSION["user_role"] !== $role) {
            http_response_code(403);
            echo "Access denied";
            exit();
        }
    }
    
    public function logout(): void {
        $_SESSION = [];
        session_destroy();
        setcookie(session_name(), "", time() - 3600, "/");
        header("Location: /login.php");
        exit();
    }
    
    public function getCurrentUser(): ?array {
        if (!$this->isLoggedIn()) return null;
        return [
            "id" => $_SESSION["user_id"],
            "name" => $_SESSION["user_name"],
            "role" => $_SESSION["user_role"]
        ];
    }
}

// Usage
$auth = new Auth($pdo);

// Register
$result = $auth->register("Rahul", "rahul@email.com", "secure12345");

// Login
$result = $auth->login("rahul@email.com", "secure12345");

// Protected page
$auth->requireLogin();
$user = $auth->getCurrentUser();
echo "Welcome, " . $user["name"];

// Admin only
$auth->requireRole("admin");

// Logout
$auth->logout();
?>
```

### CSRF Protection
```php
<?php
// Generate CSRF token
function generateCsrfToken(): string {
    if (empty($_SESSION["csrf_token"])) {
        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    }
    return $_SESSION["csrf_token"];
}

// Verify CSRF token
function verifyCsrfToken(string $token): bool {
    if (empty($_SESSION["csrf_token"]) || empty($token)) {
        return false;
    }
    return hash_equals($_SESSION["csrf_token"], $token);
}

// In form
?>
<form method="POST">
    <input type="hidden" name="csrf_token" value="<?= generateCsrfToken() ?>">
    <input type="text" name="name">
    <button type="submit">Submit</button>
</form>

<?php
// In handler
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!verifyCsrfToken($_POST["csrf_token"] ?? "")) {
        die("CSRF validation failed");
    }
    // Process form
}
?>
```

---

## 6.3 🌐 REST API with PHP

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 40 mins |

### Roman English Explanation
REST API se aapka PHP app doosre apps (mobile, frontend) se communicate kar sakta hai. API JSON format mein data send/receive karta hai.

### Simple REST API
```php
<?php
// api/index.php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

require_once "../config/database.php";

$method = $_SERVER["REQUEST_METHOD"];
$urlParts = explode("/", trim($_GET["url"] ?? "", "/"));
$resource = $urlParts[0] ?? "";
$id = $urlParts[1] ?? null;

$pdo = Database::getInstance()->getConnection();

function jsonResponse($data, int $status = 200): void {
    http_response_code($status);
    echo json_encode($data);
    exit();
}

function getJsonInput(): array {
    return json_decode(file_get_contents("php://input"), true) ?? [];
}

switch ($resource) {
    case "users":
        switch ($method) {
            case "GET":
                if ($id) {
                    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
                    $stmt->execute([$id]);
                    $user = $stmt->fetch(PDO::FETCH_ASSOC);
                    $user ? jsonResponse($user) : jsonResponse(["error" => "Not found"], 404);
                } else {
                    $stmt = $pdo->query("SELECT * FROM users");
                    jsonResponse($stmt->fetchAll(PDO::FETCH_ASSOC));
                }
                break;
                
            case "POST":
                $data = getJsonInput();
                $stmt = $pdo->prepare(
                    "INSERT INTO users (name, email) VALUES (:name, :email)"
                );
                $stmt->execute($data);
                jsonResponse(["id" => $pdo->lastInsertId()], 201);
                break;
                
            case "PUT":
                if (!$id) jsonResponse(["error" => "ID required"], 400);
                $data = getJsonInput();
                $fields = [];
                foreach ($data as $key => $value) {
                    $fields[] = "$key = :$key";
                }
                $data["id"] = $id;
                $sql = "UPDATE users SET " . implode(", ", $fields) . " WHERE id = :id";
                $stmt = $pdo->prepare($sql);
                $stmt->execute($data);
                jsonResponse(["message" => "Updated"]);
                break;
                
            case "DELETE":
                if (!$id) jsonResponse(["error" => "ID required"], 400);
                $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
                $stmt->execute([$id]);
                jsonResponse(["message" => "Deleted"]);
                break;
        }
        break;
        
    default:
        jsonResponse(["error" => "Resource not found"], 404);
}
?>
```

### Testing API with cURL
```bash
# GET all users
curl http://localhost/api/users

# GET single user
curl http://localhost/api/users/1

# POST create user
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Rahul","email":"rahul@test.com"}' \
  http://localhost/api/users

# PUT update user
curl -X PUT -H "Content-Type: application/json" \
  -d '{"name":"Rahul Updated"}' \
  http://localhost/api/users/1

# DELETE user
curl -X DELETE http://localhost/api/users/1
```

---

## 6.4 ✨ PHP 8+ Modern Features

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Roman English Explanation
PHP 8 mein bohot saare naye features aaye hain jo code ko cleaner aur faster banate hain.

### Named Arguments
```php
<?php
// Before PHP 8
function createUser($name, $email, $age, $role = "user") {
    // ...
}
createUser("Rahul", "rahul@test.com", 25, "admin");

// PHP 8 - Named Arguments (order matter nahi karta)
createUser(
    name: "Rahul",
    email: "rahul@test.com",
    age: 25,
    role: "admin"
);
?>
```

### Attributes (Annotations)
```php
<?php
// PHP 8 Attributes
#[Route("/api/users", methods: ["GET"])]
class UserController {
    
    #[Route("/api/users/{id}")]
    #[RequirePermission("admin")]
    public function show(int $id) {
        // ...
    }
    
    #[ValidateInput]
    public function store(
        #[Required] string $name,
        #[Email] string $email
    ) {
        // ...
    }
}

// Custom attribute
#[Attribute]
class Route {
    public function __construct(
        public string $path,
        public array $methods = ["GET"]
    ) {}
}

// Using reflection to read attributes
$reflection = new ReflectionClass(UserController::class);
$attributes = $reflection->getAttributes(Route::class);
$route = $attributes[0]->newInstance();
echo $route->path; // /api/users
?>
```

### Match Expression
```php
<?php
// Switch (old way)
switch ($status) {
    case "pending":
        $color = "yellow";
        break;
    case "active":
        $color = "green";
        break;
    case "blocked":
        $color = "red";
        break;
    default:
        $color = "gray";
}

// Match (PHP 8 way)
$color = match($status) {
    "pending" => "yellow",
    "active" => "green",
    "blocked" => "red",
    default => "gray"
};
?>
```

### Nullsafe Operator
```php
<?php
// Before PHP 8
$country = null;
if ($user !== null) {
    if ($user->address !== null) {
        $country = $user->address->country;
    }
}

// PHP 8 - Nullsafe operator
$country = $user?->address?->country;

// Null coalescing
$name = $user->name ?? "Guest";

// Null coalescing assignment
$user->name ??= "Guest";
?>
```

### Constructor Property Promotion
```php
<?php
// Before PHP 8
class User {
    public string $name;
    public string $email;
    private int $age;
    
    public function __construct(string $name, string $email, int $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }
}

// PHP 8 - Property Promotion
class User {
    public function __construct(
        public string $name,
        public string $email,
        private int $age
    ) {}
}
?>
```

### Enum (PHP 8.1)
```php
<?php
enum UserRole: string {
    case Admin = "admin";
    case Editor = "editor";
    case User = "user";
    
    public function label(): string {
        return match($this) {
            self::Admin => "Administrator",
            self::Editor => "Content Editor",
            self::User => "Regular User",
        };
    }
    
    public function permissions(): array {
        return match($this) {
            self::Admin => ["create", "read", "update", "delete"],
            self::Editor => ["create", "read", "update"],
            self::User => ["read"],
        };
    }
}

$role = UserRole::Admin;
echo $role->value;    // "admin"
echo $role->label();  // "Administrator"
echo $role->name;     // "Admin"
?>
```

### Readonly Properties (PHP 8.1)
```php
<?php
class Config {
    public function __construct(
        public readonly string $apiKey,
        public readonly string $dbHost,
        public readonly int $port
    ) {}
}

$config = new Config("abc123", "localhost", 3306);
echo $config->apiKey; // abc123
// $config->apiKey = "xyz"; // Error! Readonly property
?>
```

### Fiber (PHP 8.1) - Async-like
```php
<?php
$fiber = new Fiber(function(): void {
    $value = Fiber::suspend("suspending");
    echo "Resumed with: $value";
});

$value = $fiber->start();
echo $value; // "suspending"
$fiber->resume("hello");
// Output: "suspending Resumed with: hello"
?>
```

### Property Hooks (PHP 8.4)
```php
<?php
class User {
    public string $name {
        set(string $value) {
            if (strlen($value) < 2) {
                throw new InvalidArgumentException("Name too short");
            }
            $this->name = trim($value);
        }
    }
    
    public string $email {
        get => strtolower($this->email);
        set {
            if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                throw new InvalidArgumentException("Invalid email");
            }
            $this->email = $value;
        }
    }
}

$user = new User();
$user->name = "  Rahul  "; // Auto-trimmed
echo $user->name; // "Rahul"
?>
```

---

# 💼 INTERVIEW MODULE

---

## PHP Interview Questions

### Beginner Level

**Q1: PHP ka full form kya hai?**
A: PHP = PHP: Hypertext Preprocessor (earlier Personal Home Page)

**Q2: echo aur print mein kya difference hai?**
A: echo multiple values print kar sakta hai, faster hai, return nahi karta. Print sirf ek value, slower, hamesha 1 return karta hai.

**Q3: Variable declare kaise karte hain?**
A: `$` sign se, jaise `$name = "Rahul"`. PHP dynamically typed hai.

**Q4: GET aur POST mein kya difference hai?**
A: GET URL mein data dikhta hai (limited size), POST body mein data hai (secure, no size limit).

**Q5: isset() aur empty() mein difference?**
A: `isset()` check karta hai variable set hai ya nahi (null nahi hai). `empty()` check karta hai variable "empty" hai ya nahi (0, "", null, false, []).

### Intermediate Level

**Q6: Session vs Cookie difference?**
A: Session server-side store hota hai (secure), Cookie browser-side (insecure). Session tab tak rehta hai jab tak browser close na karein, Cookie expire time tak.

**Q7: include vs require vs include_once vs require_once?**
A: include - warning deta hai agar file missing hai (script continue). require - fatal error (script stops). *_once versions ensure file ek hi baar include ho.

**Q8: PDO aur MySQLi mein difference?**
A: PDO 12 databases support karta hai, MySQLi sirf MySQL. PDO zyada secure aur modern hai. PDO named parameters support karta hai.

**Q9: SQL injection se kaise bachein?**
A: Prepared statements use karo (`$stmt->execute([$data])`). Kabhi bhi user input directly query mein mat lagao.

**Q10: password_hash aur password_verify kaise kaam karte hain?**
A: `password_hash()` bcrypt algorithm use karta hai (automatic salt). `password_verify()` hash compare karta hai timing attack safe tarike se.

### Advanced Level

**Q11: Composer autoloading kaise kaam karta hai?**
A: PSR-4 autoloading standard follow karta hai. Namespace → Directory mapping hoti hai. Class pehli baar use hoti hai tab autoloader require karta hai.

**Q12: Trait aur Interface mein difference?**
A: Interface sirf method signatures define karta hai (implementation nahi). Trait actual implementation provide karta hai. Interface class multiple implement kar sakti hai. Trait multiple use kar sakte hain.

**Q13: Dependency Injection kya hai?**
A: Objects apne dependencies khud create nahi karte, bahar se inject ki jaati hain. Isse code testable aur loosely coupled banta hai.

**Q14: PHP OPcache kya hai?**
A: OPcache PHP code ko compiled bytecode cache karta hai. Har request pe PHP ko dobara compile nahi karna padta. Performance 2-3x improve hoti hai.

**Q15: SOLID principles kaunsa hai?**
A: S - Single Responsibility, O - Open/Closed, L - Liskov Substitution, I - Interface Segregation, D - Dependency Inversion

---

## PHP MCQs

1. PHP ka latest major version kya hai?
   - a) PHP 7.4  b) PHP 8.0  c) PHP 8.4  d) PHP 9.0
   - ✅ **c) PHP 8.4**

2. Correct way to start a PHP session?
   - a) `start_session()`  b) `session_start()`  c) `$_SESSION start()`  d) `session()->start()`
   - ✅ **b) `session_start()`**

3. Which function returns the length of a string?
   - a) `str_length()`  b) `strlen()`  c) `length()`  d) `count()`
   - ✅ **b) `strlen()`**

4. PDO mein query safe tarike se execute karne ke liye use karte hain:
   - a) `query()`  b) `exec()`  c) `prepare()` + `execute()`  d) `run()`
   - ✅ **c) `prepare()` + `execute()`**

5. PHP 8 mein naya feature jo switch ka modern alternative hai:
   - a) `goto`  b) `match`  c) `choose`  d) `select`
   - ✅ **b) `match`**

---

## PHP Cheat Sheet

```php
// Variables & Data Types
$str = "Hello";      // String
$num = 42;           // Integer
$float = 3.14;       // Float
$bool = true;        // Boolean
$arr = [1, 2, 3];    // Array
$null = null;        // Null

// Strings
strlen($str);          // Length
str_replace("o","0",$str); // Replace
substr($str, 0, 4);    // Substring
strpos($str, "e");     // Find position
explode(",", $csv);    // String to array
implode(",", $arr);    // Array to string

// Arrays
count($arr);           // Length
array_push($arr, 4);   // Add to end
array_pop($arr);       // Remove from end
sort($arr);            // Sort ascending
rsort($arr);           // Sort descending
in_array(2, $arr);     // Check if exists

// Superglobals
$_GET["key"]           // URL parameter
$_POST["key"]          // Form data
$_SERVER["REMOTE_ADDR"] // User IP
$_SESSION["user"]      // Session data
$_COOKIE["name"]       // Cookie data

// Database (PDO)
$pdo = new PDO("mysql:host=localhost;dbname=test", "user", "pass");
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);
$user = $stmt->fetch();

// Sessions
session_start();
$_SESSION["user_id"] = 1;
session_destroy();

// File Handling
file_get_contents("file.txt");
file_put_contents("file.txt", "data");
fopen("file.txt", "r");

// JSON
json_encode($array);
json_decode($json, true);

// Functions
function greet(string $name): string {
    return "Hello $name";
}

// OOP
class User {
    public function __construct(
        public string $name,
        private int $age
    ) {}
    
    public function getAge(): int {
        return $this->age;
    }
}
```

---

## 🚀 Projects

### Beginner Projects
1. **Contact Form** - Name, email, message validation ke saath
2. **Simple Calculator** - GET/POST se numbers le kar calculate kare
3. **To-Do List** - Session-based todo list
4. **Visitor Counter** - File mein count store kare
5. **Login System** - Session-based simple login

### Intermediate Projects
1. **Blog System** - CRUD with MySQL, user authentication
2. **Shopping Cart** - Session-based cart, product listing
3. **User Management** - Admin panel with roles
4. **File Upload System** - Image upload with validation
5. **REST API** - JSON API for users/products

### Advanced Projects
1. **E-Commerce Platform** - Complete store with cart, checkout, orders
2. **Content Management System** - Like mini WordPress
3. **Forum System** - Categories, threads, replies, user profiles
4. **URL Shortener** - Like bit.ly with click tracking
5. **PHP Framework** - Simple MVC framework from scratch

### Real-World Projects
```php
// Project: URL Shortener
// Database Schema:
// CREATE TABLE urls (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     short_code VARCHAR(10) UNIQUE,
//     original_url TEXT NOT NULL,
//     clicks INT DEFAULT 0,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// shorten.php
function generateShortCode(int $length = 6): string {
    $chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return substr(str_shuffle($chars), 0, $length);
}

function createShortUrl(string $originalUrl): string {
    global $pdo;
    $shortCode = generateShortCode();
    
    // Ensure unique
    while (true) {
        $stmt = $pdo->prepare("SELECT id FROM urls WHERE short_code = ?");
        $stmt->execute([$shortCode]);
        if (!$stmt->fetch()) break;
        $shortCode = generateShortCode();
    }
    
    $stmt = $pdo->prepare(
        "INSERT INTO urls (short_code, original_url) VALUES (?, ?)"
    );
    $stmt->execute([$shortCode, $originalUrl]);
    
    return "http://short.url/$shortCode";
}

// redirect.php?code=abc123
function redirectToOriginal(string $code): void {
    global $pdo;
    $stmt = $pdo->prepare(
        "UPDATE urls SET clicks = clicks + 1 WHERE short_code = ?"
    );
    $stmt->execute([$code]);
    
    $stmt = $pdo->prepare("SELECT original_url FROM urls WHERE short_code = ?");
    $stmt->execute([$code]);
    $url = $stmt->fetchColumn();
    
    if ($url) {
        header("Location: $url");
    } else {
        header("HTTP/1.0 404 Not Found");
        echo "URL not found";
    }
}
?>
```

---

> **"PHP — Web ka sabse powerful server-side language! Server pe code likho, world ko dikhao!" 🐘🚀**

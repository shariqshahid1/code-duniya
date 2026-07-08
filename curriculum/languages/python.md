# 🐍 Python — Complete Curriculum (2026 Edition)

> **"Python ek aisi language hai jo English ki tarah padhi ja sakti hai. Iska code clean aur readable hota hai. AI, Web, Automation — sab mein use hoti hai!"**

---

## 📖 History & Introduction

| Year | Version | Key Features |
|------|---------|--------------|
| 1991 | Python 0.9 | First release by Guido van Rossum |
| 2000 | Python 2.0 | List comprehensions, garbage collection |
| 2008 | Python 3.0 | Major overhaul (print function, Unicode) |
| 2020 | Python 3.9 | PEP 585, zoneinfo |
| 2022 | Python 3.11 | 60% faster, better error messages |
| 2024 | Python 3.12 | F-strings improvements, perf tweaks |
| 2025 | Python 3.13 | JIT compiler, free-threaded mode |
| 2026 | Python 3.14 | Stable JIT, improved async, better tooling |

### Python Kya Hai?
- **High-level** — Memory management automatic hai
- **Interpreted** — Code line-by-line run hota hai (compile nahi)
- **Dynamically typed** — Variable ka type declare nahi karna padta
- **Multi-paradigm** — OOP, functional, procedural — sab kar sakte ho

### Python Kahan Use Hota Hai?
- **Web Development** — Django, Flask, FastAPI
- **AI / Machine Learning** — NumPy, TensorFlow, PyTorch, LangChain
- **Data Science** — Pandas, Matplotlib, Seaborn
- **Automation** — Scripting, web scraping, file management
- **Cyber Security** — Pen testing tools, network scanning
- **Game Dev** — Pygame
- **Desktop Apps** — Tkinter, PyQt
- **DevOps** — Ansible, Docker SDK, AWS boto3

---

## 🟢 MODULE 1: BASICS

```python
# ===== 1.1 Hello World =====
print("Hello, Code Duniya!")
# Output: Hello, Code Duniya!

# Line-by-line:
# print() -> ek built-in function jo console pe kuch bhi print kar deta hai
# "Hello, Code Duniya!" -> ek string (text) jo humne print kiya

# ===== 1.2 Comments =====
# Ye ek single-line comment hai (hash se start)
"""
Ye multi-line comment hai.
Jitni lines chahe likh sakte ho.
"""
# Zyada comments nahi daalne chahiye code mein

# ===== 1.3 Variables =====
# Python mein variable ka type nahi batana padta
name = "Rahul"        # String (text)
age = 25              # Integer (pura number)
price = 99.99         # Float (decimal number)
is_active = True      # Boolean (True/False)
nothing = None        # NoneType (kuch nahi)

print(name)    # Rahul
print(age)     # 25

# ===== 1.4 Type Checking =====
print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(price))     # <class 'float'>
print(type(is_active)) # <class 'bool'>
print(type(nothing))   # <class 'NoneType'>

# ===== 1.5 Dynamic Typing =====
x = 10        # x ab integer hai
x = "Hello"   # x ab string ho gaya (allowed in Python!)
# Isse "duck typing" kehte hain — "If it walks like a duck..."

# ===== 1.6 Multiple Assignment =====
a, b, c = 1, 2, 3
print(a, b, c)  # 1 2 3

# Same value
x = y = z = 0
print(x, y, z)  # 0 0 0

# Swap
a, b = b, a
print(a, b)  # 2 1  (swap ho gaya!)
```

### Variable Naming Rules
1. Letters, numbers, underscore se bana sakte ho (`name`, `age_1`, `_temp`)
2. Number se start nahi kar sakte (`1name` ❌)
3. Case-sensitive (`Name` aur `name` alag hain)
4. Reserved keywords use nahi kar sakte (`if`, `while`, `class` — ye reserved hain)
5. Snake_case use karo Python mein (`my_variable_name`)
6. Meaningful names do (`age` better hai `x` se)

### Data Types Detail

```python
# ===== Numeric Types =====
a = 10          # int (integer) — Unlimited size
b = 3.14        # float (decimal) — 64-bit precision
c = 3 + 4j      # complex — real + imaginary part
print(type(c))  # <class 'complex'>

# ===== Sequence Types =====
text = "Hello"        # str (string) — text data
my_list = [1, 2, 3]   # list — mutable, ordered, []
my_tuple = (1, 2, 3)  # tuple — immutable, ordered, ()
my_range = range(5)   # range — sequence of numbers

# ===== Mapping Type =====
my_dict = {"name": "Rahul", "age": 25}  # dict — key-value pairs

# ===== Set Types =====
my_set = {1, 2, 3}           # set — unordered, unique
my_frozen = frozenset({1,2}) # immutable set

# ===== Boolean =====
is_ok = True      # True ya False (capital T/F)
is_not = False

# ===== Binary Types =====
data = b"bytes"   # bytes, bytearray, memoryview

# ===== None Type =====
result = None     # "kuch nahi" represent karta hai
```

### Type Conversion (Type Casting)

```python
# ===== Implicit Conversion =====
# Python automatically converts types jab safe ho
x = 5       # int
y = 2.5     # float
z = x + y   # Python automatically x ko float mein convert karega
print(z)    # 7.5 (float)
print(type(z))  # <class 'float'>

# ===== Explicit Conversion =====
age = "25"
age_int = int(age)      # String -> Integer
print(age_int + 5)      # 30 (ab integer hai)

price = 99.99
price_int = int(price)  # Float -> Integer (decimal cut ho jayega)
print(price_int)         # 99 (decimal gaya)

num = 65
char = chr(num)          # Integer -> Character (ASCII)
print(char)              # 'A'

# Common conversions:
int("123")     # 123 (string to int)
float("3.14")  # 3.14 (string to float)
str(123)       # "123" (number to string)
bool(1)        # True (0 = False, kuch bhi = True)
list("abc")    # ['a', 'b', 'c']
tuple([1,2])   # (1, 2)
```

### String Operations

```python
# ===== String Creation =====
s1 = 'Single quotes'       # Single quotes
s2 = "Double quotes"       # Double quotes
s3 = '''Multi line
string'''                  # Triple quotes
s4 = """Also multi line""" # Triple double quotes

# ===== String Indexing =====
text = "Python"
# Index:  0=P  1=y  2=t  3=h  4=o  5=n
# Negative: -6=P  -5=y  -4=t  -3=h  -2=o  -1=n

print(text[0])    # P
print(text[-1])   # n (last character)
print(text[2:4])  # th (slice: start=2, end=4)
print(text[:3])   # Pyt (first 3)
print(text[3:])   # hon (index 3 se end tak)
print(text[::-1]) # nohtyP (reverse)

# ===== String Methods =====
text = "  Hello, Python World!  "
print(text.upper())           # "  HELLO, PYTHON WORLD!  "
print(text.lower())           # "  hello, python world!  "
print(text.strip())           # "Hello, Python World!" (spaces hat gaye)
print(text.replace("Python", "Code")) # "  Hello, Code World!  "
print(len(text))              # 24 (length)
print(text.split(","))        # ['  Hello', ' Python World!  ']

# f-strings (Python 3.6+)
name = "Rahul"
age = 25
print(f"Hello, {name}! You are {age} years old.")
# Output: Hello, Rahul! You are 25 years old.

# .format() method
print("Hello, {}! You are {} years old.".format(name, age))

# % formatting (old style)
print("Hello, %s! You are %d years old." % (name, age))

# ===== String Concatenation =====
first = "Hello"
second = "World"
print(first + " " + second)  # "Hello World"
print(first * 3)             # "HelloHelloHello"

# ===== Escape Sequences =====
print("Line1\nLine2")    # \n = new line
print("Tab\there")       # \t = tab
print("Quote: \"Hi\"")   # \" = double quote
print("Backslash: \\")   # \\ = backslash
```

### Numbers & Math

```python
# ===== Numbers =====
a = 10      # int
b = 3.14    # float
c = 2 + 3j  # complex

# ===== Arithmetic Operators =====
x = 10
y = 3

print(x + y)   # 13  (addition)
print(x - y)   # 7   (subtraction)
print(x * y)   # 30  (multiplication)
print(x / y)   # 3.333... (division — always returns float)
print(x // y)  # 3   (floor division — integer part)
print(x % y)   # 1   (modulus — remainder)
print(x ** y)  # 1000 (exponent — 10^3)

# ===== Math Functions =====
import math

print(math.pi)       # 3.141592653589793
print(math.sqrt(16)) # 4.0
print(math.pow(2,3)) # 8.0
print(math.ceil(3.2)) # 4 (upar round)
print(math.floor(3.9)) # 3 (neeche round)
print(abs(-5))       # 5 (absolute value)
print(round(3.14159, 2)) # 3.14 (2 decimal places)
print(max(1, 5, 3))  # 5
print(min(1, 5, 3))  # 1
print(sum([1, 2, 3])) # 6
```

---

## 🟢 MODULE 2: CONTROL FLOW

### If-Elif-Else

```python
# ===== Basic if =====
age = 18

if age >= 18:
    print("You are adult")     # Ye chalega
else:
    print("You are minor")

# ===== if-elif-else =====
marks = 85

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 60:
    grade = "C"
elif marks >= 35:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")  # B

# ===== Nested if =====
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("Get a license first")
else:
    print("Too young to drive")

# ===== Ternary Operator (inline if) =====
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult

# ===== Logical Operators =====
a, b = 5, 10

if a > 0 and b > 0:    # dono true
    print("Both positive")

if a > 0 or b < 0:     # ek bhi true
    print("At least one positive")

if not a < 0:          # opposite
    print("a is not negative")

# ===== Membership Operators =====
fruits = ["Apple", "Banana", "Mango"]
if "Apple" in fruits:     # in operator
    print("Apple hai!")

name = "Rahul"
if "Rah" not in name:    # not in
    print("Nahi hai")

# ===== Identity Operators =====
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is z)      # True (same object)
print(x is y)      # False (different objects, same value)
print(x == y)      # True (same value)

print(x is not y)  # True (different objects)
```

### Loops

```python
# ===== For Loop (with range) =====
print("Counting to 5:")
for i in range(5):        # 0 se 4 tak (5 baar)
    print(i, end=" ")      # 0 1 2 3 4
print()

for i in range(2, 7):     # 2 se 6 tak
    print(i, end=" ")      # 2 3 4 5 6
print()

for i in range(0, 10, 2): # 0 se 9 tak, step 2
    print(i, end=" ")      # 0 2 4 6 8
print()

# ===== For Loop (with list) =====
fruits = ["Apple", "Banana", "Mango"]
for fruit in fruits:
    print(f"I like {fruit}")

# ===== For Loop (with enumerate) =====
for index, fruit in enumerate(fruits):
    print(f"{index+1}. {fruit}")
# Output:
# 1. Apple
# 2. Banana
# 3. Mango

# ===== For Loop (with dictionary) =====
student = {"name": "Rahul", "age": 25, "city": "Delhi"}

for key in student:               # Keys
    print(key, ":", student[key])

for value in student.values():     # Values
    print(value)

for key, value in student.items(): # Key-Value pairs
    print(f"{key} = {value}")

# ===== While Loop =====
count = 0
while count < 5:
    print(count, end=" ")  # 0 1 2 3 4
    count += 1
print()

# ===== Break and Continue =====
for i in range(10):
    if i == 3:
        continue  # Skip 3, aage badho
    if i == 7:
        break     # Loop khatam (7 tak)
    print(i, end=" ")  # 0 1 2 4 5 6
print()

# ===== Else with Loops =====
for i in range(5):
    print(i, end=" ")
else:
    print("\nLoop completed normally")

# ===== Nested Loop =====
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}*{j}={i*j}", end="\t")
    print()  # New line
# Output:
# 1*1=1   1*2=2   1*3=3
# 2*1=2   2*2=4   2*3=6
# 3*1=3   3*2=6   3*3=9
```

### Match-Case (Python 3.10+) — switch ka replacement

```python
# ===== Basic match-case =====
day = 3

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4 | 5:          # Multiple values
        print("Thursday or Friday")
    case _:               # Default (underscore = catch-all)
        print("Weekend")

# ===== Match with patterns =====
point = (2, 5)

match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"X=0, Y={y}")
    case (x, 0):
        print(f"X={x}, Y=0")
    case (x, y):
        print(f"X={x}, Y={y}")
    case _:
        print("Not a point")

# ===== Match with conditions =====
value = 42

match value:
    case x if x < 0:
        print("Negative")
    case x if x == 0:
        print("Zero")
    case x if x > 0:
        print("Positive")
```

---

## 🟢 MODULE 3: COLLECTIONS

### Lists

```python
# ===== Create List =====
fruits = ["Apple", "Banana", "Mango"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "Hello", 3.14, True, None]
empty = []
nested = [[1,2], [3,4], [5,6]]

# ===== Access Items =====
print(fruits[0])     # Apple
print(fruits[-1])    # Mango (last)
print(fruits[1:3])   # ['Banana', 'Mango']
print(fruits[::-1])  # Reverse

# ===== Modify Items =====
fruits[1] = "Orange"
print(fruits)        # ['Apple', 'Orange', 'Mango']

# ===== Add Items =====
fruits.append("Grapes")     # End mein add
fruits.insert(1, "Kiwi")    # Specific position
fruits.extend(["Papaya", "Guava"])  # Multiple items
print(fruits)

# ===== Remove Items =====
fruits.remove("Apple")      # Value se delete
popped = fruits.pop()       # Last item delete aur return
fruits.pop(1)               # Index se delete
fruits.clear()              # Sab delete

# ===== List Methods =====
nums = [3, 1, 4, 1, 5, 9]
nums.sort()              # Ascending
print(nums)              # [1, 1, 3, 4, 5, 9]
nums.sort(reverse=True)  # Descending
print(nums)              # [9, 5, 4, 3, 1, 1]
nums.reverse()           # Reverse order

print(len(nums))         # Length
print(max(nums))         # Max value
print(min(nums))         # Min value
print(sum(nums))         # Sum
print(3 in nums)         # Check membership (True/False)
print(nums.count(1))     # Count occurrences
print(nums.index(5))     # Find index

# ===== List Comprehensions =====
# [expression for item in iterable if condition]
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

pairs = [(x, y) for x in [1,2,3] for y in [4,5]]
print(pairs)  # [(1,4),(1,5),(2,4),(2,5),(3,4),(3,5)]

# ===== Copy List =====
original = [1, 2, 3]
shallow = original.copy()      # Method 1
shallow = list(original)       # Method 2
shallow = original[:]          # Method 3
```

### Tuples

```python
# ===== Create Tuple =====
point = (3, 4)
colors = ("Red", "Green", "Blue")
single = (5,)         # Ek element ke liye comma zaroori
empty = ()
mixed = (1, "Hello", 3.14)

# Tuple ko modify nahi kar sakte (immutable)
# colors[1] = "Yellow"  # ❌ Error!

# ===== Tuple Methods =====
nums = (1, 2, 3, 2, 4, 2)
print(nums.count(2))   # 3 (kitni baar aaya)
print(nums.index(4))   # 4 (kahan pe hai)

# ===== Tuple Unpacking =====
x, y = point
print(x, y)  # 3 4

a, *b, c = (1, 2, 3, 4, 5)
print(a, b, c)  # 1 [2, 3, 4] 5

# ===== When to use Tuple =====
# 1. Jab data change nahi karna
# 2. Jab faster access chahiye (tuple > list)
# 3. Jab dictionary keys banana hai
# 4. Jab function se multiple values return karni hain
return a, b  # Actually ek tuple return hota hai
```

### Dictionaries

```python
# ===== Create Dictionary =====
student = {
    "name": "Rahul",
    "age": 25,
    "city": "Delhi",
    "skills": ["Python", "JS", "React"]
}

# ===== Access Items =====
print(student["name"])         # Rahul (error if missing)
print(student.get("age"))      # 25 (None if missing)
print(student.get("salary", 0)) # 0 (default value)

# ===== Add/Modify =====
student["email"] = "rahul@test.com"  # Add
student["age"] = 26                  # Update

# ===== Remove =====
student.pop("city")           # Remove and return
student.popitem()             # Remove last inserted
del student["email"]          # Delete
student.clear()               # All clear

# ===== Dictionary Methods =====
print(student.keys())         # Keys
print(student.values())       # Values
print(student.items())        # (key, value) pairs

# ===== Dictionary Comprehensions =====
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# ===== Nested Dictionary =====
users = {
    "user1": {"name": "Rahul", "age": 25},
    "user2": {"name": "Priya", "age": 22}
}
print(users["user1"]["name"])  # Rahul
```

### Sets

```python
# ===== Create Set =====
fruits = {"Apple", "Banana", "Mango"}
numbers = {1, 2, 3, 4, 5}
empty_set = set()   # NOT {} (that's dict)
mixed = {1, "Hello", 3.14}

# Set automatically removes duplicates
nums = {1, 2, 2, 3, 3, 3}
print(nums)  # {1, 2, 3}

# ===== Set Operations =====
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)          # Union: {1,2,3,4,5,6}
print(a & b)          # Intersection: {3,4}
print(a - b)          # Difference: {1,2}
print(a ^ b)          # Symmetric diff: {1,2,5,6}

# ===== Add/Remove =====
fruits.add("Grapes")
fruits.remove("Apple")   # Error if missing
fruits.discard("Apple")  # No error if missing
popped = fruits.pop()    # Random remove
```

---

## 🟢 MODULE 4: FUNCTIONS

```python
# ===== Basic Function =====
def greet():
    print("Hello!")

greet()  # Call

# ===== Function with Parameters =====
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Rahul")  # Hello, Rahul!

# ===== Return Value =====
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8

# ===== Multiple Returns =====
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

low, high, total = get_stats([1, 2, 3, 4, 5])
print(low, high, total)  # 1 5 15

# ===== Default Parameters =====
def greet(name="Guest", greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet())              # Hello, Guest!
print(greet("Rahul"))       # Hello, Rahul!
print(greet("Priya", "Hi")) # Hi, Priya!

# ===== Keyword Arguments =====
def create_user(name, age, city):
    return f"{name}, {age}, {city}"

# Order doesn't matter with keywords
print(create_user(city="Mumbai", age=22, name="Priya"))

# ===== *args (Variable Positional Arguments) =====
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15

# ===== **kwargs (Variable Keyword Arguments) =====
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Rahul", age=25, city="Delhi")
# Output:
# name: Rahul
# age: 25
# city: Delhi

# ===== Lambda Functions =====
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with map/filter
nums = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))
print(squares)  # [1, 4, 9, 16, 25]
print(evens)    # [2, 4]

# ===== Docstrings =====
def calculate_area(radius):
    """Calculate area of a circle.
    
    Args:
        radius: Circle radius
        
    Returns:
        Area as float
    """
    return 3.14159 * radius ** 2

help(calculate_area)  # Shows docstring

# ===== Nested Functions =====
def outer(x):
    def inner(y):
        return x + y
    return inner(10)

print(outer(5))  # 15

# ===== Recursion =====
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

# ===== Generators =====
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num, end=" ")  # 5 4 3 2 1
print()
```

---

## 🟠 MODULE 5: OOP (Object-Oriented Programming)

```python
# ===== Class and Object =====
class Person:
    # Class variable (sab objects mein same)
    species = "Human"
    
    # Constructor — object create hote hi call hota hai
    def __init__(self, name, age):
        # Instance variables (har object ke apne)
        self.name = name
        self.age = age
    
    # Method
    def introduce(self):
        return f"Hi, I'm {self.name}, {self.age} years old"

# Create objects
p1 = Person("Rahul", 25)
p2 = Person("Priya", 22)

print(p1.introduce())        # Hi, I'm Rahul, 25 years old
print(p1.species)            # Human (class variable)
print(Person.species)        # Human (class ke through bhi access)

# ===== Instance vs Class Variables =====
class Employee:
    company = "Tech Corp"    # Class variable — sab share karte hain
    
    def __init__(self, name, salary):
        self.name = name     # Instance variable
        self.salary = salary

e1 = Employee("Rahul", 50000)
e2 = Employee("Priya", 60000)

print(e1.company)   # Tech Corp
print(e2.company)   # Tech Corp
Employee.company = "New Tech"  # Sabke liye change ho jayega
print(e1.company)   # New Tech

# ===== Inheritance =====
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "..."
    
    def move(self):
        return f"{self.name} is moving"

class Dog(Animal):  # Dog inherits Animal
    def speak(self):  # Override
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

dog = Dog("Tommy")
cat = Cat("Kitty")

print(dog.speak())   # Woof!
print(dog.move())    # Tommy is moving (inherited)
print(cat.speak())   # Meow!

# ===== super() =====
class Parent:
    def __init__(self, name):
        self.name = name
        print(f"Parent: {name}")

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)  # Parent ka constructor call
        self.age = age
        print(f"Child: {name}, {age}")

c = Child("Rahul", 25)
# Output:
# Parent: Rahul
# Child: Rahul, 25

# ===== Multiple Inheritance =====
class Flyer:
    def fly(self):
        return "Flying!"

class Swimmer:
    def swim(self):
        return "Swimming!"

class Duck(Flyer, Swimmer):
    pass

duck = Duck()
print(duck.fly())   # Flying!
print(duck.swim())  # Swimming!

# ===== Encapsulation =====
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private (double underscore)
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return amount
        return 0
    
    def get_balance(self):  # Getter
        return self.__balance

acc = BankAccount("Rahul", 1000)
acc.deposit(500)
print(acc.get_balance())  # 1500
# print(acc.__balance)    # ❌ Error! Private hai

# ===== Property Decorators =====
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        return 3.14159 * self._radius ** 2
    
    @property
    def diameter(self):
        return self._radius * 2

c = Circle(5)
print(c.radius)     # 5 (getter)
c.radius = 10       # setter
print(c.area)       # 314.159 (calculated property)
# c.radius = -5     # ❌ Error!

# ===== Static and Class Methods =====
class MathUtils:
    @staticmethod
    def add(a, b):  # No self, no cls
        return a + b
    
    @classmethod
    def create_default(cls):
        return cls()  # Factory method

print(MathUtils.add(5, 3))  # 8 (static call)

# ===== Magic Methods (Dunder) =====
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __len__(self):
        return int((self.x**2 + self.y**2)**0.5)

v1 = Vector(2, 3)
v2 = Vector(1, 4)
print(v1)           # Vector(2, 3) (__str__)
v3 = v1 + v2        # Vector(3, 7) (__add__)
print(v3)
print(v1 == Vector(2, 3))  # True (__eq__)
```

---

## 🟠 MODULE 6: ADVANCED TOPICS

### File I/O

```python
# ===== Writing to File =====
with open("test.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("This is line 2\n")

# ===== Reading File =====
with open("test.txt", "r") as f:
    content = f.read()
    print(content)

# ===== Reading Line by Line =====
with open("test.txt", "r") as f:
    for line in f:
        print(line.strip())

# ===== Append =====
with open("test.txt", "a") as f:
    f.write("Appended line\n")

# ===== File Modes =====
# "r"  — Read (default)
# "w"  — Write (overwrite)
# "a"  — Append
# "r+" — Read + Write
# "rb" — Read binary
# "wb" — Write binary

# ===== With Statement (Context Manager) =====
# File automatically close hota hai 'with' block ke baad
with open("test.txt", "r") as f:
    data = f.read()
# Here file is automatically closed
```

### Exception Handling

```python
# ===== Try-Except =====
try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(f"Result: {result}")
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Some error: {e}")
else:
    print("No error occurred!")
finally:
    print("This always runs")

# ===== Raising Exceptions =====
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return f"Age: {age}"

# ===== Custom Exception =====
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f"Insufficient funds! Need {amount}, have {balance}")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount
```

### Lambda, Map, Filter, Reduce

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map — Har element par function apply
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# filter — Condition match karne wale elements
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# reduce — Accumulate (left to right)
total = reduce(lambda acc, x: acc + x, numbers)
print(total)  # 55

# Combined
result = reduce(lambda a, b: a * b, 
                filter(lambda x: x % 2 == 0, 
                       map(lambda x: x**2, numbers)))
print(result)  # Product of even squares
```

### Decorators

```python
# ===== Basic Decorator =====
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done!"

slow_function()  # slow_function took 1.0002 seconds

# ===== Decorator with Arguments =====
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi!")

say_hi()  # Hi! Hi! Hi!
```

### Generators & Iterators

```python
# ===== Generator Function =====
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=" ")  # 0 1 1 2 3 5 8 13 21 34
print()

# ===== Generator Expression =====
squares = (x**2 for x in range(10))
print(next(squares))  # 0
print(next(squares))  # 1

# ===== Custom Iterator =====
class CountDown:
    def __init__(self, n):
        self.n = n
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        self.n -= 1
        return self.n + 1

for num in CountDown(5):
    print(num, end=" ")  # 5 4 3 2 1
print()
```

### Context Managers

```python
# ===== Custom Context Manager =====
class ManagedFile:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# Usage
with ManagedFile("test.txt", "w") as f:
    f.write("Using custom context manager")

# ===== contextmanager decorator =====
from contextlib import contextmanager

@contextmanager
def open_file(filename, mode):
    f = open(filename, mode)
    try:
        yield f
    finally:
        f.close()

with open_file("test.txt", "r") as f:
    print(f.read())
```

---

## 🔴 MODULE 7: MODULES & PACKAGES

```python
# ===== Importing Modules =====
import math
from datetime import datetime, timedelta
import json
import os
import sys

# ===== Creating a Module =====
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

# In another file:
# import mymodule
# print(mymodule.greet("Rahul"))  # Hello, Rahul!
# print(mymodule.PI)               # 3.14159

# ===== if __name__ == "__main__" =====
def main():
    print("Running directly")

if __name__ == "__main__":
    main()  # Sirf tab chalega jab ye file directly run ho

# ===== Popular Standard Library Modules =====
import os
print(os.getcwd())       # Current directory
print(os.listdir("."))   # List files
os.makedirs("new_dir", exist_ok=True)
os.remove("old_file.txt")

import sys
print(sys.version)       # Python version
print(sys.argv)          # Command line arguments

import json
data = {"name": "Rahul", "age": 25}
json_str = json.dumps(data)     # Dict -> JSON string
parsed = json.loads(json_str)   # JSON string -> Dict

import re
pattern = r"\d+"  # One or more digits
match = re.search(pattern, "Age: 25")
print(match.group())  # 25

from datetime import datetime
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))  # 2026-07-08 14:30:00

import random
print(random.randint(1, 10))   # Random 1-10
print(random.choice([1,2,3,4,5]))  # Random choice
random.shuffle([1,2,3,4,5])    # Shuffle in place
```

---

## 🔴 MODULE 8: POPULAR LIBRARIES

### NumPy (Numerical Python)
```python
import numpy as np

# Array creation
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
range_arr = np.arange(0, 10, 2)
linspace = np.linspace(0, 1, 5)

# Operations
print(arr + 10)           # [11 12 13 14 15]
print(arr.mean())         # 3.0
print(arr.max())          # 5
print(arr.sum())          # 15
print(arr.reshape(-1, 1)) # Reshape to column

# Indexing
print(arr[1:3])           # [2 3]
print(arr[[True, False, True, False, True]])  # Boolean indexing
```

### Pandas (Data Analysis)
```python
import pandas as pd

# Series (1D)
s = pd.Series([1, 3, 5, 7], index=['a', 'b', 'c', 'd'])

# DataFrame (2D)
data = {
    'name': ['Rahul', 'Priya', 'Amit'],
    'age': [25, 22, 28],
    'city': ['Delhi', 'Mumbai', 'Bangalore']
}
df = pd.DataFrame(data)

print(df)
print(df.head())        # First 5 rows
print(df.describe())    # Statistics
print(df['age'].mean()) # Average age
print(df[df['age'] > 23]) # Filter
```

### Requests (HTTP)
```python
import requests

# GET
response = requests.get("https://api.github.com/users/rahul")
print(response.status_code)  # 200
print(response.json())       # JSON response

# POST
data = {"name": "Rahul", "age": 25}
response = requests.post("https://httpbin.org/post", json=data)

# With headers
headers = {"Authorization": "Bearer token123"}
response = requests.get("https://api.example.com/data", headers=headers)
```

---

## 🚀 Projects

1. **Calculator** — Basic arithmetic operations
2. **To-Do List CLI** — Add, list, complete, delete tasks
3. **Weather CLI** — Fetch weather from API
4. **File Organizer** — Auto-sort files by extension
5. **Password Generator** — Random password with options
6. **Web Scraper** — Extract data from websites
7. **REST API (Flask/FastAPI)** — CRUD endpoints
8. **Data Analyzer** — CSV/Excel analysis with Pandas
9. **Chat App** — Socket programming
10. **Automation Script** — Email sender, file backup

---

> **"Python — Padhna aasan, use karna aasan, aur job dilwana bhi aasan! 🐍🔥"**

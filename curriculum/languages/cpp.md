# ⚡ C & C++ - Complete Curriculum (2026)

> **"C = Fast & Powerful. C++ = C + Objects. Performance kings."**

---

## 📖 What are C & C++?

| Aspect | C | C++ |
|--------|---|-----|
| Created | 1972 (Dennis Ritchie) | 1985 (Bjarne Stroustrup) |
| Type | Procedural | Multi-paradigm (OOP) |
| Used in | OS, embedded, drivers | Games, apps, finance |
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Difficulty | ⭐⭐⭐ | ⭐⭐⭐⭐ |

### Roman English Explanation
C ko "super fast car" samjho. Bahut tez, lekin features limited. C++ ko "luxury sports car" - fast bhi hai aur features bhi hain. C++ mein OOP, templates, STL jaise advanced features hain. Dono hi performance-critical systems mein use hote hain - games, operating systems, browsers, etc.

---

## 🗺️ C Programming Roadmap

```
🟢 BEGINNER: Setup | Variables | Data Types | I/O | Operators | Control Flow | Loops | Functions | Arrays
🔵 INTERMEDIATE: Pointers | Strings | Structures | Dynamic Memory | File I/O | Preprocessor
🟠 ADVANCED: Function Pointers | Bit Manipulation | Recursion | Linked Lists | Sorting
🔴 PROFESSIONAL: Multi-file Projects | Makefiles | Debugging | Embedded C Basics
```

### C Basics
```c
#include <stdio.h>
#include <stdlib.h>

// Variables & Types
int age = 25;                // 4 bytes
float price = 99.99;        // 4 bytes
double pi = 3.1415926535;   // 8 bytes
char grade = 'A';            // 1 byte
char name[] = "Rahul";       // String (char array)

// I/O
printf("Hello %s, age: %d\n", name, age);
scanf("%d", &age);           // Input

// Pointers (C ka superpower!)
int x = 10;
int *ptr = &x;               // ptr stores address of x
printf("%d\n", *ptr);        // Dereference: prints 10
printf("%p\n", ptr);         // Address

// Dynamic Memory
int *arr = (int*)malloc(5 * sizeof(int));
if (arr != NULL) {
    arr[0] = 10;
    free(arr);               // Always free!
}

// Structures
struct Student {
    char name[50];
    int age;
    float marks;
};

struct Student s1 = {"Rahul", 25, 95.5};

// File I/O
FILE *f = fopen("data.txt", "w");
fprintf(f, "Hello World");
fclose(f);
```

## 🗺️ C++ Roadmap

```
🟢 BEGINNER: Cin/Cout | Variables | Strings | Vectors | Functions | References
🔵 INTERMEDIATE: Classes | OOP | Inheritance | Polymorphism | STL (vector, map, set)
🟠 ADVANCED: Templates | Smart Pointers | Move Semantics | Lambda | Exception Handling
🔴 PROFESSIONAL: Multithreading | Algorithms | Design Patterns | Performance
```

### C++ Basics
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <memory>
using namespace std;

// Classes & OOP
class Student {
private:
    string name;
    int age;
    static int totalStudents;

public:
    // Constructor
    Student(string n, int a) : name(n), age(a) {
        totalStudents++;
    }
    
    // Destructor
    ~Student() {
        totalStudents--;
    }
    
    // Methods
    void display() const {
        cout << name << " (" << age << ")" << endl;
    }
    
    // Static method
    static int getTotal() { return totalStudents; }
    
    // Getter/Setter
    string getName() const { return name; }
    void setName(const string& n) { name = n; }
};

int Student::totalStudents = 0;

// Inheritance
class GraduateStudent : public Student {
private:
    string thesis;
public:
    GraduateStudent(string n, int a, string t) 
        : Student(n, a), thesis(t) {}
    
    void display() const override {  // Override
        Student::display();
        cout << "Thesis: " << thesis << endl;
    }
};

// Templates
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// STL Containers
int main() {
    // Vector
    vector<int> nums = {1, 2, 3, 4, 5};
    nums.push_back(6);
    sort(nums.begin(), nums.end());
    
    // Map
    map<string, int> scores;
    scores["Rahul"] = 95;
    
    // Smart Pointers (no manual delete!)
    auto ptr = make_unique<int>(42);
    auto shared = make_shared<Student>("Rahul", 25);
    
    // Lambda
    auto square = [](int x) { return x * x; };
    cout << square(5) << endl;
    
    // Range-based for
    for (const auto& num : nums) {
        cout << num << " ";
    }
    
    return 0;
}
```

---

> **"C/C++ seekho, performance master bano! ⚡"**
>
> **[Next: Java →](java.md)**

# ☕ Java - Complete Curriculum (2026)

> **"Java = Write Once, Run Anywhere. Enterprise ka king!"**

---

## 📖 What is Java?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 3-6 months |
| **Prerequisites** | Programming basics |

### Definition
Java is a **class-based, object-oriented** programming language created by James Gosling (Sun Microsystems, 1995).

### Roman English Explanation
Java ko "sabji market" samjho. Jaise sabji market mein sab kuch arrange hota hai - waise hi Java mein sab kuch classes mein arrange hota hai. Java ka slogan hai "Write Once, Run Anywhere" - matlab ek baar likho, kahi bhi chalao (Windows, Mac, Linux, Phone, etc.).

---

## 🗺️ Complete Roadmap

```
🟢 BEGINNER: Setup | Variables | Data Types | Operators | Control Flow | Loops | Arrays | Strings
🔵 INTERMEDIATE: OOP | Classes | Inheritance | Polymorphism | Interfaces | Abstract Classes | Packages
🟠 ADVANCED: Collections | Generics | Exception Handling | File I/O | Multithreading | Lambda | Streams
🔴 PROFESSIONAL: JDBC | Servlets | Spring Boot | JPA/Hibernate | REST APIs | Microservices
⚫ EXPERT: JVM Internals | Garbage Collection | Performance | Design Patterns | Security
```

### Java Basics
```java
// Hello World
public class Main {
    public static void main(String[] args) {
        System.out.println("Namaste Duniya!");
        
        // Variables
        int age = 25;
        double price = 99.99;
        String name = "Rahul";
        boolean isStudent = true;
        
        // Arrays
        int[] numbers = {1, 2, 3, 4, 5};
        String[] fruits = {"Apple", "Mango", "Banana"};
        
        // Enhanced for loop
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // ArrayList (dynamic array)
        List<String> list = new ArrayList<>();
        list.add("Hello");
        list.get(0);
    }
}

// Classes & OOP
public class Student {
    private String name;
    private int age;
    private static int totalStudents = 0;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        totalStudents++;
    }
    
    // Getters/Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}

// Inheritance
public class GraduateStudent extends Student {
    private String thesis;
    
    public GraduateStudent(String name, int age, String thesis) {
        super(name, age);
        this.thesis = thesis;
    }
}

// Interface
public interface Drawable {
    void draw();
    default void paint() { System.out.println("Painting..."); }
}

// Lambda & Streams
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .forEach(System.out::println);  // 4, 8
```

---

> **"Java seekho, enterprise developer bano! ☕"**
>
> **[Next: PHP →](php.md)**

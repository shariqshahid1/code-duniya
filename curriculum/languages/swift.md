# 🍎 Swift — Complete Curriculum (2026 Edition)

> **"Swift Apple ki modern programming language hai. iOS, macOS, watchOS, tvOS — saare Apple platforms ke liye!"**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 2014 | Swift 1.0 | Announced at WWDC |
| 2015 | Swift 2.0 | Open source |
| 2018 | Swift 4.2 | Improved compiler |
| 2019 | Swift 5.0 | ABI stable |
| 2023 | Swift 5.9 | Macros, Consume operator |
| 2024 | Swift 5.10 | Data races safety |
| 2025 | Swift 6.0 | Complete concurrency, typed throws |
| 2026 | Swift 6.1+ | Enhanced SwiftUI, better tooling |

### Key Facts
- **Creator**: Chris Lattner (Apple)
- **Paradigm**: Protocol-oriented, functional, OOP
- **Used For**: iOS/macOS apps, server-side (Vapor), system programming
- **Replaced**: Objective-C

---

## 🟢 BEGINNER SWIFT

```swift
// Variables
var greeting = "Hello"  // Mutable
let name = "Rahul"      // Immutable (constant)

// Types (Type inference)
let age: Int = 25
let price: Double = 99.99
let active: Bool = true
let letter: Character = "A"
let emoji: Character = "🚀"

// String interpolation
let message = "Hello, \(name)! You are \(age) years old."
print(message)

// Optionals (safe null handling)
var optionalName: String? = nil
print(optionalName ?? "Default name")  // Nil coalescing

if let safeName = optionalName {
    print("Hello, \(safeName)")
}

guard let name = optionalName else {
    print("No name provided")
    return
}

// Arrays
var fruits = ["Apple", "Banana", "Mango"]
fruits.append("Orange")
fruits.remove(at: 0)
print(fruits[0])

// Dictionaries
var ages = ["Rahul": 25, "Priya": 22]
ages["Amit"] = 28

// Control flow
func controlFlow() {
    let score = 85
    
    if score >= 90 {
        print("A")
    } else if score >= 75 {
        print("B")
    } else {
        print("C")
    }
    
    // Switch
    let day = "Monday"
    switch day {
    case "Monday", "Tuesday":
        print("Weekday")
    case "Saturday", "Sunday":
        print("Weekend")
    default:
        print("Midweek")
    }
    
    // Loops
    for i in 1...5 { print(i) }     // 1 to 5
    for i in 1..<5 { print(i) }    // 1 to 4
    for fruit in fruits { print(fruit) }
    
    var count = 0
    while count < 5 { count += 1 }
    repeat { count -= 1 } while count > 0
}

// Functions
func add(_ a: Int, _ b: Int) -> Int { a + b }  // No external param names

func greet(name: String = "Guest") -> String {
    return "Hello, \(name)!"
}

// In-out parameters
func swap(_ a: inout Int, _ b: inout Int) {
    let temp = a; a = b; b = temp
}
var x = 5, y = 10
swap(&x, &y)

// Closures (lambdas)
let square = { (x: Int) -> Int in x * x }
print(square(5))

let numbers = [1, 2, 3, 4, 5]
let even = numbers.filter { $0 % 2 == 0 }
let squared = numbers.map { $0 * $0 }
let sum = numbers.reduce(0, +)

// Enums
enum Direction {
    case north, south, east, west
}

enum Result {
    case success(data: String)
    case failure(error: Error)
}

let dir = Direction.north
switch dir {
case .north: print("North")
default: print("Other")
}

// Structs (value type)
struct User {
    let name: String
    var age: Int
    var email: String
    
    func greet() -> String {
        return "Hi, I'm \(name)"
    }
    
    mutating func birthday() {
        age += 1
    }
}

var user = User(name: "Rahul", age: 25, email: "rahul@test.com")
print(user.greet())
user.birthday()

// Classes (reference type)
class Animal {
    let name: String
    
    init(name: String) {
        self.name = name
    }
    
    func makeSound() -> String { "..." }
}

class Dog: Animal {
    override func makeSound() -> String { "Woof!" }
}

// Protocols (like interfaces)
protocol Flyable {
    var maxSpeed: Double { get }
    func fly() -> String
}

extension Flyable {
    func takeOff() -> String { "Taking off..." }
}

struct Bird: Flyable {
    let maxSpeed: Double = 60.0
    func fly() -> String { "Flying!" }
}

// Extensions
extension String {
    func reverse() -> String {
        return String(self.reversed())
    }
    
    func isPalindrome() -> Bool {
        let cleaned = self.lowercased().filter { $0.isLetter }
        return cleaned == String(cleaned.reversed())
    }
}

print("Hello".reverse())       // olleH
print("racecar".isPalindrome()) // true

// Error handling
enum AppError: Error {
    case notFound
    case badRequest(String)
}

func fetchData(id: Int) throws -> String {
    if id <= 0 { throw AppError.badRequest("Invalid ID") }
    return "Data for \(id)"
}

do {
    let data = try fetchData(id: 1)
    print(data)
} catch AppError.notFound {
    print("Not found")
} catch {
    print("Error: \(error)")
}
```

---

## 🔴 ADVANCED: CONCURRENCY (Swift 6+)

```swift
import Foundation

// Async/await
func fetchUser(id: Int) async throws -> String {
    let url = URL(string: "https://api.example.com/users/\(id)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return String(data: data, encoding: .utf8) ?? ""
}

// Structured concurrency
func loadData() async throws {
    async let user = fetchUser(id: 1)
    async let posts = fetchUser(id: 2)
    
    let (userData, postsData) = try await (user, posts)
    print(userData, postsData)
}

// Task group
func fetchAll() async throws -> [String] {
    try await withThrowingTaskGroup(of: String.self) { group in
        for id in 1...5 {
            group.addTask {
                try await fetchUser(id: id)
            }
        }
        
        var results: [String] = []
        for try await result in group {
            results.append(result)
        }
        return results
    }
}

// Actors (thread-safe objects)
actor BankAccount {
    private var balance: Double = 0
    
    func deposit(_ amount: Double) {
        balance += amount
    }
    
    func withdraw(_ amount: Double) throws {
        guard balance >= amount else {
            throw AppError.badRequest("Insufficient funds")
        }
        balance -= amount
    }
    
    func getBalance() -> Double { balance }
}

// SwiftUI (iOS/macOS)
import SwiftUI

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \(count)")
                .font(.largeTitle)
            
            Button("Increment") {
                count += 1
            }
            .padding()
            .background(.blue)
            .foregroundColor(.white)
            .cornerRadius(8)
        }
    }
}
```

---

## 🚀 Projects

1. **iOS Notes App** — SwiftUI, CoreData
2. **Weather App** — API, async/await, animations
3. **Calculator** — SwiftUI basics
4. **To-Do List** — MVVM, Combine framework
5. **Fitness Tracker** — HealthKit, charts

---

> **"Swift — Apple ka future. iOS apps ka easiest tarika!" 🍎🚀**

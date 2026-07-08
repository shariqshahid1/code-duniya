# 🦀 Rust — Complete Curriculum (2026 Edition)

> **"Rust ek systems programming language hai jo memory-safe hai aur C jitni fast hai. Stack Overflow ke most loved language barabar!"**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 2010 | Rust 0.1 | Mozilla project, Graydon Hoare |
| 2015 | Rust 1.0 | First stable release |
| 2021 | Edition 2021 | Disjoint capture, closures improvements |
| 2024 | Rust 1.80+ | LazyCell, LazyLock stabilized |
| 2025 | Rust 1.85+ | Trait aliases, improved borrow checker |
| 2026 | Rust 1.90+ | Polonius borrow checker, better compile times |

### Key Facts
- **Paradigm**: Systems, concurrent, functional
- **Used By**: Firefox, Dropbox, Cloudflare, Figma, Discord
- **Unique Feature**: Ownership system — memory safety without garbage collector

### Pros & Cons
| Pros | Cons |
|------|------|
| Memory safe (no segfaults) | Steep learning curve |
| Zero-cost abstractions | Slow compile times |
| Excellent error messages | Smaller ecosystem than C++ |
| Great package manager (Cargo) | Borrow checker is strict |
| No garbage collector | |

---

## 🟢 BEGINNER RUST

### Setup
```bash
# Install
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustc --version
cargo --version

# New project
cargo new hello_rust
cd hello_rust
cargo run

# Build
cargo build --release
```

### First Program
```rust
fn main() {
    println!("Namaste Duniya!");
    println!("Sum: {}", 5 + 3);
}
```

### Variables & Types
```rust
fn main() {
    // Immutable by default
    let x = 5;
    // x = 6; // Error!
    
    // Mutable
    let mut y = 5;
    y = 6; // OK
    
    // Types
    let name: &str = "Rahul";
    let age: i32 = 25;
    let price: f64 = 99.99;
    let active: bool = true;
    let letter: char = 'A';
    
    // Shadowing
    let z = 10;
    let z = z + 5;  // New variable shadows old
    
    // Constants
    const MAX_USERS: u32 = 1000;
    const PI: f64 = 3.14159;
    
    // Tuple
    let person: (&str, i32, f64) = ("Rahul", 25, 5.8);
    let (name, age, height) = person;
    println!("{}, {}", person.0, person.1);
    
    // Array
    let nums: [i32; 5] = [1, 2, 3, 4, 5];
    let first = nums[0];
    
    // Vector (dynamic array)
    let mut vec = vec![1, 2, 3];
    vec.push(4);
    println!("{:?}", vec);
}

// CONTROL FLOW
fn control_flow() {
    let age = 18;
    
    if age >= 18 {
        println!("Adult");
    } else {
        println!("Minor");
    }
    
    // if as expression
    let status = if age >= 18 { "Adult" } else { "Minor" };
    
    // Loop
    let mut count = 0;
    loop {
        count += 1;
        if count == 5 { break; }
    }
    
    // While
    while count < 10 {
        count += 1;
    }
    
    // For
    for i in 0..5 {  // 0 to 4
        println!("{}", i);
    }
    
    // Match (like switch)
    let day = 3;
    match day {
        1 => println!("Monday"),
        2 => println!("Tuesday"),
        3..=5 => println!("Midweek"),
        6 | 7 => println!("Weekend"),
        _ => println!("Invalid"),
    }
    
    // Match with value
    let x = Some(5);
    match x {
        Some(val) => println!("Value: {}", val),
        None => println!("No value"),
    }
}

// FUNCTIONS
fn add(a: i32, b: i32) -> i32 {
    a + b  // No semicolon = return
}

fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// Ownership
fn ownership() {
    // String (heap-allocated)
    let s1 = String::from("Hello");
    let s2 = s1;  // s1 MOVED to s2, s1 invalid!
    // println!("{}", s1); // Error!
    
    // Clone (deep copy)
    let s3 = s2.clone();
    println!("{}", s3);
    
    // Borrowing (reference)
    let s = String::from("Hi");
    let len = calculate_length(&s);  // Borrow
    println!("{} is {} chars", s, len);
    
    // Mutable reference
    let mut s = String::from("Hello");
    change(&mut s);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

fn change(s: &mut String) {
    s.push_str(" World");
}

// STRUCTS
struct User {
    name: String,
    age: u32,
    active: bool,
}

impl User {
    // Method
    fn greet(&self) -> String {
        format!("Hi, I'm {}", self.name)
    }
    
    // Associated function (static)
    fn new(name: String, age: u32) -> Self {
        User { name, age, active: true }
    }
}

// ENUMS
enum Result<T, E> {
    Ok(T),
    Err(E),
}

// Option (no null!)
// Option<T> is built-in: Some(T) or None

fn main() {
    let user = User::new(String::from("Rahul"), 25);
    println!("{}", user.greet());
    
    // Error handling
    match divide(10, 0) {
        Ok(result) => println!("Result: {}", result),
        Err(e) => println!("Error: {}", e),
    }
}

fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(a / b)
    }
}

// TRAITS (like interfaces)
trait Animal {
    fn make_sound(&self) -> String;
    fn name(&self) -> &str;
}

struct Dog { name: String }
impl Animal for Dog {
    fn make_sound(&self) -> String { "Woof!".to_string() }
    fn name(&self) -> &str { &self.name }
}

struct Cat { name: String }
impl Animal for Cat {
    fn make_sound(&self) -> String { "Meow!".to_string() }
    fn name(&self) -> &str { &self.name }
}
```

---

## 🔴 ADVANCED: CONCURRENCY

```rust
use std::thread;
use std::sync::{Mutex, Arc};
use std::time::Duration;

fn main() {
    // Basic thread
    let handle = thread::spawn(|| {
        for i in 1..5 {
            println!("Thread: {}", i);
            thread::sleep(Duration::from_millis(100));
        }
    });
    handle.join().unwrap();
    
    // Shared state with Arc<Mutex>
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Result: {}", *counter.lock().unwrap());
    
    // Channels
    let (tx, rx) = std::sync::mpsc::channel();
    
    thread::spawn(move || {
        tx.send("Hello from thread!").unwrap();
    });
    
    let msg = rx.recv().unwrap();
    println!("{}", msg);
}
```

---

## 🚀 Projects

1. **CLI Calculator** — Match expressions, input handling
2. **File Searcher** — grep-like tool
3. **Web Server** — HTTP server with threads
4. **Todo API** — REST API with actix-web
5. **JSON Parser** — Custom JSON parser

---

> **"Rust — Performance of C++, safety of Go. Future of systems programming!" 🦀🚀**

# 🔵 Go (Golang) — Complete Curriculum (2026 Edition)

> **"Go ya Golang, Google ki language hai. Simple, fast, aur concurrent programming ke liye perfect!"**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 2009 | Go 1.0 | Public release by Google (Robert Griesemer, Rob Pike, Ken Thompson) |
| 2012 | Go 1.0 stable | First stable release |
| 2022 | Go 1.18 | Generics, fuzzing, workspaces |
| 2024 | Go 1.22 | Loop var change, range over int |
| 2025 | Go 1.23 | Iterator support, improved generics |
| 2026 | Go 1.24+ | Enhanced concurrency, better tooling |

### Key Facts
- **Creators**: Robert Griesemer, Rob Pike, Ken Thompson (Google)
- **Paradigm**: Compiled, concurrent, statically typed
- **Used For**: Backend APIs, cloud services, CLI tools, DevOps
- **Used By**: Google, Docker, Kubernetes, Netflix, Uber, Twitch

### Pros & Cons
| Pros | Cons |
|------|------|
| Simple syntax, easy to learn | No generics (before 1.18) |
| Fast compilation | No inheritance |
| Built-in concurrency | Small ecosystem |
| Excellent standard library | Verbose error handling |
| Great for microservices | No exceptions |
| Single binary output | |

---

# 🟢 BEGINNER GO

## 1.1 🌟 Go Kya Hai?

### Roman English Explanation
Go ek compiled, statically-typed language hai jo Google ne banayi. Yeh C jaisi fast hai lekin syntax Python jaisa simple hai. Concurrency (goroutines, channels) iski sabse badi strength hai — ek saath hazaaron kaam bina rukawat ke kar sakti hai.

### Setup
```bash
# Download from go.dev
# Install and check
go version

# First program
mkdir hello && cd hello
go mod init hello
# Create main.go
go run main.go

# Compile
go build main.go  # Single binary!
```

### First Program
```go
package main

import "fmt"

func main() {
    fmt.Println("Namaste Duniya!")
}
```

---

## 1.2 📝 Basic Syntax

```go
package main

import "fmt"

// TYPES
func types() {
    var name string = "Rahul"
    var age int = 25
    var price float64 = 99.99
    var active bool = true
    
    // Short declaration (type inference)
    city := "Delhi"
    score := 95.5
    
    // Multiple variables
    var x, y int = 10, 20
    a, b := "hello", true
    
    // Constants
    const PI = 3.14159
    const APP_NAME string = "Code Duniya"
    
    fmt.Println(name, age, price, active, city)
}

// CONTROL FLOW
func controlFlow() {
    age := 18
    
    if age >= 18 {
        fmt.Println("Adult")
    } else {
        fmt.Println("Minor")
    }
    
    // If with short statement
    if score := 85; score >= 75 {
        fmt.Println("Pass")
    }
    
    // Switch (no break needed)
    day := "Monday"
    switch day {
    case "Monday", "Tuesday":
        fmt.Println("Weekday")
    case "Saturday", "Sunday":
        fmt.Println("Weekend")
    default:
        fmt.Println("Midweek")
    }
    
    // Loops (only for)
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
    
    // While-like
    count := 0
    for count < 5 {
        fmt.Println(count)
        count++
    }
    
    // Infinite
    // for { }
}

// FUNCTIONS
func add(a, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named returns
func getStats(nums []int) (sum int, avg float64) {
    for _, n := range nums {
        sum += n
    }
    avg = float64(sum) / float64(len(nums))
    return  // naked return
}

// Variadic
func sum(numbers ...int) int {
    total := 0
    for _, n := range numbers {
        total += n
    }
    return total
}

// ARRAYS & SLICES
func collections() {
    // Array (fixed size)
    var arr [5]int = [5]int{1, 2, 3, 4, 5}
    
    // Slice (dynamic, most used)
    nums := []int{1, 2, 3, 4, 5}
    nums = append(nums, 6)
    
    // Slice operations
    slice := nums[1:4]  // [2,3,4]
    copy := make([]int, len(nums))
    copy(copy, nums)  // Deep copy
    
    // Maps
    ages := map[string]int{
        "Rahul": 25,
        "Priya": 22,
    }
    ages["Amit"] = 28
    
    age, exists := ages["Rahul"]
    if exists {
        fmt.Println(age)
    }
    
    delete(ages, "Priya")
    
    // Range
    for key, value := range ages {
        fmt.Printf("%s is %d\n", key, value)
    }
    
    for i, v := range nums {
        fmt.Printf("Index %d: %d\n", i, v)
    }
}

// STRUCTS (like classes)
type Person struct {
    Name string
    Age  int
    City string
}

// Method on struct
func (p Person) Greet() string {
    return fmt.Sprintf("Hi, I'm %s, %d years old", p.Name, p.Age)
}

// Pointer receiver (modify)
func (p *Person) Birthday() {
    p.Age++
}

func structs() {
    p1 := Person{Name: "Rahul", Age: 25, City: "Delhi"}
    p2 := Person{"Priya", 22, "Mumbai"}
    
    fmt.Println(p1.Greet())
    p1.Birthday()
    fmt.Println(p1.Age)  // 26
}

// INTERFACES
type Animal interface {
    Speak() string
    Move() string
}

type Dog struct{ Name string }
func (d Dog) Speak() string { return "Woof!" }
func (d Dog) Move() string  { return "Running" }

type Cat struct{ Name string }
func (c Cat) Speak() string { return "Meow!" }
func (c Cat) Move() string  { return "Walking" }

func interfaces() {
    animals := []Animal{Dog{"Buddy"}, Cat{"Kitty"}}
    for _, a := range animals {
        fmt.Println(a.Speak())
    }
}

// ERROR HANDLING
func errors() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(result)
}

func main() {
    types()
    controlFlow()
    fmt.Println(add(5, 3))
    collections()
    structs()
    interfaces()
    errors()
}
```

---

# 🔵 INTERMEDIATE: CONCURRENCY

## Goroutines & Channels

### Roman English Explanation
Goroutines lightweight threads hain. `go` keyword se koi bhi function goroutine ban sakta hai. Channels se goroutines communicate karte hain. Yeh Go ki sabse powerful feature hai.

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

// Basic goroutine
func sayHello() {
    fmt.Println("Hello from goroutine!")
}

// Channel
func basicChannel() {
    ch := make(chan string)
    
    // Send in goroutine
    go func() {
        ch <- "Hello from channel!"
    }()
    
    // Receive (blocking)
    msg := <-ch
    fmt.Println(msg)
}

// Buffered channel
func bufferedChannel() {
    ch := make(chan int, 3)
    
    ch <- 1
    ch <- 2
    ch <- 3
    
    fmt.Println(<-ch)  // 1
    fmt.Println(<-ch)  // 2
}

// Worker pool
func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for job := range jobs {
        results <- job * 2
        time.Sleep(100 * time.Millisecond)
    }
}

func workerPool() {
    const numJobs = 10
    jobs := make(chan int, numJobs)
    results := make(chan int, numJobs)
    var wg sync.WaitGroup
    
    // Start 3 workers
    for w := 1; w <= 3; w++ {
        wg.Add(1)
        go worker(w, jobs, results, &wg)
    }
    
    // Send jobs
    for j := 1; j <= numJobs; j++ {
        jobs <- j
    }
    close(jobs)
    
    // Wait and close results
    wg.Wait()
    close(results)
    
    // Collect results
    for r := range results {
        fmt.Println("Result:", r)
    }
}

// Select (channel multiplexing)
func selectDemo() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "Fast"
    }()
    
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "Slow"
    }()
    
    select {
    case msg := <-ch1:
        fmt.Println("Got from ch1:", msg)
    case msg := <-ch2:
        fmt.Println("Got from ch2:", msg)
    case <-time.After(3 * time.Second):
        fmt.Println("Timeout!")
    }
}

// Mutex (sync)
type Counter struct {
    mu    sync.Mutex
    value int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    c.value++
    c.mu.Unlock()
}

func main() {
    go sayHello()
    time.Sleep(100 * time.Millisecond)
    
    basicChannel()
    bufferedChannel()
    workerPool()
    selectDemo()
    
    // Mutex example
    counter := Counter{}
    var wg sync.WaitGroup
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter.Increment()
        }()
    }
    wg.Wait()
    fmt.Println("Counter:", counter.value)
}
```

---

# 🔴 ADVANCED: WEB SERVERS

## HTTP Server
```go
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "sync"
    "time"
)

// Models
type User struct {
    ID        int       `json:"id"`
    Name      string    `json:"name"`
    Email     string    `json:"email"`
    CreatedAt time.Time `json:"created_at"`
}

// In-memory store
type UserStore struct {
    mu    sync.RWMutex
    users map[int]User
    nextID int
}

func NewUserStore() *UserStore {
    return &UserStore{
        users:  make(map[int]User),
        nextID: 1,
    }
}

func (s *UserStore) Create(name, email string) User {
    s.mu.Lock()
    defer s.mu.Unlock()
    
    user := User{
        ID:        s.nextID,
        Name:      name,
        Email:     email,
        CreatedAt: time.Now(),
    }
    s.users[user.ID] = user
    s.nextID++
    return user
}

func (s *UserStore) Get(id int) (User, bool) {
    s.mu.RLock()
    defer s.mu.RUnlock()
    user, ok := s.users[id]
    return user, ok
}

func (s *UserStore) GetAll() []User {
    s.mu.RLock()
    defer s.mu.RUnlock()
    
    result := make([]User, 0, len(s.users))
    for _, u := range s.users {
        result = append(result, u)
    }
    return result
}

// Handlers
type UserHandler struct {
    store *UserStore
}

func (h *UserHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    switch r.Method {
    case http.MethodGet:
        idStr := r.URL.Path[len("/users/"):]
        if idStr == "" {
            // GET /users — list all
            json.NewEncoder(w).Encode(h.store.GetAll())
        } else {
            // GET /users/:id
            id, _ := strconv.Atoi(idStr)
            user, ok := h.store.Get(id)
            if !ok {
                http.Error(w, `{"error":"not found"}`, http.StatusNotFound)
                return
            }
            json.NewEncoder(w).Encode(user)
        }
        
    case http.MethodPost:
        var input struct {
            Name  string `json:"name"`
            Email string `json:"email"`
        }
        if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
            http.Error(w, `{"error":"invalid json"}`, http.StatusBadRequest)
            return
        }
        user := h.store.Create(input.Name, input.Email)
        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(user)
        
    default:
        http.Error(w, `{"error":"method not allowed"}`, http.StatusMethodNotAllowed)
    }
}

// Middleware
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %s", r.Method, r.URL.Path, time.Since(start))
    })
}

func main() {
    store := NewUserStore()
    handler := &UserHandler{store}
    
    mux := http.NewServeMux()
    mux.Handle("/users", handler)
    mux.Handle("/users/", handler)
    
    // Simple endpoint
    mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, `{"app":"Code Duniya","version":"1.0"}`)
    })
    
    server := &http.Server{
        Addr:         ":8080",
        Handler:      loggingMiddleware(mux),
        ReadTimeout:  10 * time.Second,
        WriteTimeout: 10 * time.Second,
    }
    
    log.Println("Server starting on :8080")
    log.Fatal(server.ListenAndServe())
}
```

---

## 💼 Interview Q&A

**Q1: Goroutine vs Thread difference?**  
A: Goroutine lightweight (2KB stack), user-space scheduling, cheap creation (thousands possible). Thread OS-level (1MB stack), expensive.

**Q2: Channel types?**  
A: Unbuffered (sync, blocks until received), Buffered (async, blocks when full). Directional: `chan<-` (send only), `<-chan` (receive only).

**Q3: `nil` slice vs empty slice difference?**  
A: nil slice has no underlying array (len=0, cap=0, nil). Empty slice has array (len=0, cap=0, not nil). json.Marshal gives null vs [].

**Q4: Interface{} vs any?**  
A: Same thing in Go 1.18+. `any` is alias for `interface{}`. Both accept any type.

**Q5: Defer kaise kaam karta hai?**  
A: defer LIFO order mein execute hota hai. Function return se pehle. Resource cleanup ke liye (close file, unlock mutex).

---

## 🚀 Projects

1. **CLI Todo App** — File-based todo list
2. **REST API Server** — CRUD with in-memory store
3. **URL Shortener** — Redirect service
4. **Chat Server** — WebSocket real-time chat
5. **Web Scraper** — Concurrent page fetcher

---

> **"Go — Simple, fast, concurrent! Cloud ka superhero!" 🔵🚀**

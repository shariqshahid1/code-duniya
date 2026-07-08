# 🟣 Kotlin — Complete Curriculum (2026 Edition)

> **"Kotlin JetBrains ki modern language hai. Java se better, Android ka official language!"**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 2011 | Kotlin 1.0 | JetBrains project |
| 2017 | Kotlin 1.2 | Android official support |
| 2019 | Kotlin 1.3 | Coroutines stable, multiplatform |
| 2021 | Kotlin 1.5 | Sealed interfaces, JVM records |
| 2023 | Kotlin 1.9 | K2 compiler preview |
| 2025 | Kotlin 2.0+ | K2 compiler stable, faster compilation |
| 2026 | Kotlin 2.2+ | Enhanced multiplatform, better tooling |

### Key Facts
- **Creators**: JetBrains (Andrey Breslav)
- **Runtime**: JVM, Android, Native (LLVM), JS/Wasm
- **Used By**: Google, Pinterest, Trello, Duolingo, Coursera

---

## 🟢 BEGINNER KOTLIN

```kotlin
// Variables
fun variables() {
    val name = "Rahul"      // Immutable (final)
    var age = 25             // Mutable
    var price = 99.99       // Type inference
    val active: Boolean = true  // Explicit type
    
    // Null safety
    var nullable: String? = null
    println(nullable?.length)    // Safe call → prints null
    println(nullable ?: "Default")  // Elvis operator
    nullable!!.length  // Force (throws if null)
}

// Functions
fun add(a: Int, b: Int): Int = a + b  // Single expression
fun greet(name: String = "Guest"): String = "Hello, $name!"

// Default & named arguments
fun createUser(name: String, age: Int = 18, city: String = "Delhi") = "$name, $age, $city"
createUser("Rahul")                          // Defaults
createUser("Priya", age = 22, city = "Mumbai")  // Named

// String templates
val name = "Rahul"
println("Hello, $name! Length: ${name.length}")

// Control flow
fun controlFlow() {
    val age = 20
    val status = if (age >= 18) "Adult" else "Minor"
    
    // When (switch)
    val x = 3
    val result = when (x) {
        1 -> "One"
        2, 3 -> "Two or Three"
        in 4..10 -> "Four to Ten"
        else -> "Other"
    }
    
    // Loops
    for (i in 1..5) println(i)           // 1 to 5
    for (i in 1 until 5) println(i)      // 1 to 4
    for (i in 5 downTo 1) println(i)     // 5 to 1
    for (i in 1..10 step 2) println(i)   // 1,3,5,7,9
    
    // Collections
    val items = listOf("Apple", "Banana", "Mango")
    for ((index, item) in items.withIndex()) {
        println("$index: $item")
    }
}

// Collections
fun collections() {
    val list = listOf(1, 2, 3)        // Immutable
    val mutable = mutableListOf(1, 2, 3)
    mutable.add(4)
    
    val map = mapOf("a" to 1, "b" to 2)
    val mutableMap = mutableMapOf<String, Int>()
    
    // Lambda operations
    val numbers = listOf(1, 2, 3, 4, 5)
    val even = numbers.filter { it % 2 == 0 }
    val squared = numbers.map { it * it }
    val sum = numbers.reduce { acc, n -> acc + n }
    val any = numbers.any { it > 3 }
    val all = numbers.all { it > 0 }
}

// Data class (auto-generates equals/hashCode/toString/copy)
data class User(val name: String, val age: Int, val email: String = "")

fun dataClasses() {
    val u1 = User("Rahul", 25)
    val u2 = u1.copy(age = 26)
    println(u1)  // User(name=Rahul, age=25, email=)
}

// Classes
class Person(val name: String) {  // Primary constructor
    var age: Int = 0
    
    // Secondary constructor
    constructor(name: String, age: Int) : this(name) {
        this.age = age
    }
    
    // Properties with getter/setter
    var email: String = ""
        get() = field.lowercase()
        set(value) { field = value.trim() }
    
    // Method
    fun greet() = "Hi, I'm $name"
    
    // Companion (static)
    companion object {
        const val SPECIES = "Human"
        fun createAnonymous() = Person("Guest")
    }
}

// Inheritance
open class Animal(val name: String) {
    open fun makeSound() = "Some sound"
}

class Dog(name: String) : Animal(name) {
    override fun makeSound() = "Woof!"
}

// Interface
interface Flyable {
    fun fly()  // Abstract
    fun takeOff() = println("Taking off")  // Default implementation
}

class Bird : Flyable {
    override fun fly() = println("Flying!")
}

// Sealed class
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
    object Loading : Result()
}

fun handleResult(result: Result) = when (result) {
    is Result.Success -> println("Data: ${result.data}")
    is Result.Error -> println("Error: ${result.message}")
    Result.Loading -> println("Loading...")
}

// Extension functions
fun String.reverse(): String = this.reversed()
fun String.isPalindrome(): Boolean = this == this.reversed()

// Usage
fun main() {
    println("Hello".reverse())  // olleH
    println("racecar".isPalindrome())  // true
    
    // Scope functions
    val user = User("Rahul", 25).apply {
        // this = user
        // email = "rahul@test.com"
    }
    
    val info = user.let {
        "Name: ${it.name}, Age: ${it.age}"
    }
    
    user.run {
        println("Running on $name")
    }
    
    val age = user.also {
        println("Creating user: ${it.name}")
    }.age
    
    with(user) {
        println("$name is $age years old")
    }
}
```

---

## 🔴 ADVANCED: COROUTINES & FLOW

```kotlin
import kotlinx.coroutines.*

// Suspend function
suspend fun fetchData(): String {
    delay(1000)  // Non-blocking
    return "Data loaded"
}

// Coroutine scope
fun main() = runBlocking {
    // Launch
    launch {
        delay(500)
        println("World")
    }
    println("Hello")
    
    // Async
    val deferred = async {
        fetchData()
    }
    println(deferred.await())
    
    // Parallel
    val results = listOf(
        async { fetchData() },
        async { fetchData() }
    ).awaitAll()
    
    // Flow (reactive stream)
    fun numberFlow(): Flow<Int> = flow {
        for (i in 1..5) {
            delay(100)
            emit(i)
        }
    }
    
    numberFlow().collect { println(it) }
}
```

---

## 🚀 Projects

1. **Android Notes App** — Room DB, RecyclerView
2. **Weather App** — API, coroutines, DataStore
3. **MVVM App** — ViewModel, StateFlow, Retrofit
4. **Ktor Server** — Backend API
5. **Multiplatform App** — Shared logic Android/iOS

---

> **"Kotlin — Modern, concise, and powerful! Java ki jagah le rahi hai!" 🟣🚀**

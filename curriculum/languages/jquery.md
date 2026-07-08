# 💎 jQuery — Complete Curriculum

> **"jQuery — JavaScript library jo DOM manipulation, events, animations aur AJAX ko aasan banata hai. Write less, do more!"**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 2006 | jQuery 1.0 | DOM manipulation, CSS selectors |
| 2009 | jQuery 1.3 | Live events, HTML5 support |
| 2013 | jQuery 2.0 | IE6-8 dropped, smaller size |
| 2016 | jQuery 3.0 | Promises, strict mode |
| 2021 | jQuery 3.6 | Latest stable |
| 2025+ | jQuery 4.0 | ES modules, modern APIs |

### Key Facts
- **Creator**: John Resig
- **Motto**: "Write Less, Do More"
- **Used By**: 70%+ of top websites

---

## 🟢 BEGINNER JQUERY

### Setup (CDN)
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

### Document Ready
```javascript
// jQuery syntax
$(document).ready(function() {
    console.log("DOM ready!");
});

// Short form
$(function() {
    console.log("DOM ready!");
});
```

### Selectors
```javascript
// Basic selectors
$("p")          // All paragraphs
$("#myId")      // By ID
$(".myClass")   // By class
$("div p")      // Descendant
$("ul > li")    // Child
$("input[type='text']")  // Attribute

// Examples
$("p:first")        // First paragraph
$("li:even")        // Even indexed
$("li:odd")         // Odd indexed
$(":button")        // All buttons
$(":input")         // All form inputs
$(":visible")       // Visible elements
$(":hidden")        // Hidden elements
```

### DOM Manipulation
```javascript
// Get/Set text
$("#demo").text()                    // Get text
$("#demo").text("Hello World")       // Set text

// Get/Set HTML
$("#demo").html()                    // Get HTML
$("#demo").html("<b>Bold</b>")       // Set HTML

// Get/Set value
$("#input").val()                    // Get value
$("#input").val("Rahul")             // Set value

// Attributes
$("img").attr("src")                 // Get attribute
$("img").attr("src", "photo.jpg")    // Set attribute
$("img").removeAttr("title")         // Remove attribute

// CSS
$("#demo").css("color")              // Get CSS
$("#demo").css("color", "red")       // Set single
$("#demo").css({"color": "red", "font-size": "20px"})  // Set multiple

// Classes
$("#demo").addClass("active")        // Add class
$("#demo").removeClass("active")     // Remove class
$("#demo").toggleClass("active")     // Toggle class
$("#demo").hasClass("active")        // Check class
```

### Adding/Removing Elements
```javascript
// Create
$("<p>New paragraph</p>")

// Insert
$("div").append("<p>End of div</p>")      // Inside, at end
$("div").prepend("<p>Start of div</p>")    // Inside, at start
$("p").after("<p>After p</p>")             // Outside, after
$("p").before("<p>Before p</p>")           // Outside, before

// Remove
$("#demo").remove()        // Remove element
$("#demo").empty()         // Remove children only
$("#demo").detach()        // Remove but keep data
```

### Events
```javascript
// Click
$("#btn").click(function() {
    alert("Clicked!");
});

// Other events
$("#btn").dblclick(fn)        // Double click
$("#btn").mouseenter(fn)      // Mouse enter
$("#btn").mouseleave(fn)      // Mouse leave
$("#btn").hover(fnIn, fnOut)  // Hover (both)
$("#input").focus(fn)         // Focus
$("#input").blur(fn)          // Blur
$("#input").keydown(fn)       // Key down
$("#input").keyup(fn)         // Key up
$("form").submit(fn)          // Form submit

// On (preferred for dynamic elements)
$(document).on("click", ".btn-dynamic", function() {
    console.log("Dynamic button clicked");
});

// Event object
$("#btn").click(function(e) {
    e.preventDefault()     // Stop default action
    e.stopPropagation()    // Stop bubbling
    console.log(e.target)  // Element that triggered
    console.log(e.type)    // Event type
    console.log(e.pageX)   // Mouse X position
});
```

### Effects & Animations
```javascript
// Hide/Show
$("#demo").hide()              // Hide (default 400ms)
$("#demo").show()              // Show
$("#demo").toggle()            // Toggle

// Slide
$("#demo").slideDown()         // Slide down
$("#demo").slideUp()           // Slide up
$("#demo").slideToggle()       // Slide toggle

// Fade
$("#demo").fadeIn()            // Fade in
$("#demo").fadeOut()           // Fade out
$("#demo").fadeToggle()        // Fade toggle
$("#demo").fadeTo(1000, 0.5)   // Fade to opacity

// Custom animation
$("#demo").animate({
    left: "100px",
    opacity: 0.5,
    height: "toggle"
}, 1000, "easeOutBounce", function() {
    console.log("Animation complete");
});

// Chain
$("#demo").css("color", "red").slideUp(200).slideDown(200);

// Stop
$("#demo").stop()              // Stop current
$("#demo").stop(true)          // Clear queue
$("#demo").stop(true, true)    // Finish current
```

### jQuery vs Vanilla JS
```javascript
// Vanilla JS
document.getElementById("demo").textContent = "Hello";
document.querySelectorAll(".item").forEach(el => el.style.display = "none");

// jQuery
$("#demo").text("Hello");
$(".item").hide();
```

---

## 🔴 ADVANCED: AJAX & UTILITIES

### AJAX
```javascript
// Load
$("#result").load("test.html #content");

// Get
$.get("https://api.example.com/data", { id: 1 }, function(response) {
    console.log(response);
});

// Post
$.post("/save", { name: "Rahul", age: 25 }, function(response) {
    console.log("Saved:", response);
});

// Get JSON
$.getJSON("https://api.example.com/users", function(data) {
    $.each(data, function(i, user) {
        console.log(user.name);
    });
});

// Full AJAX
$.ajax({
    url: "https://api.example.com/users",
    type: "GET",
    dataType: "json",
    data: { page: 1, limit: 10 },
    success: function(data) {
        console.log("Success:", data);
    },
    error: function(xhr, status, error) {
        console.log("Error:", error);
    },
    complete: function() {
        console.log("Request complete");
    },
    headers: {
        "Authorization": "Bearer token123"
    },
    timeout: 5000
});

// Promise-style
$.ajax("https://api.example.com/data")
    .done(function(data) { console.log(data); })
    .fail(function(err) { console.log(err); })
    .always(function() { console.log("done"); });
```

### Utility Functions
```javascript
// Each
$.each(["Apple", "Banana"], function(index, value) {
    console.log(index, value);
});

// Extend (merge)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = $.extend({}, obj1, obj2);  // { a:1, b:3, c:4 }

// Map
const numbers = [1, 2, 3];
const doubled = $.map(numbers, function(n) { return n * 2; });

// Trim
$.trim("  Hello  ")  // "Hello"

// Type checking
$.isArray([])           // true
$.isFunction(function(){})  // true
$.isNumeric("123")      // true
$.isEmptyObject({})     // true

// Parse JSON
const obj = $.parseJSON('{"name":"Rahul"}');

// Now (current time)
const now = $.now();  // timestamp
```

### Plugins
```javascript
// jQuery UI (draggable, sortable, datepicker, etc.)
$("#draggable").draggable();
$("#sortable").sortable();
$("#datepicker").datepicker();

// Select2 (enhanced select)
$("select").select2();

// DataTables (tables)
$("#table").DataTable();

// Slick Carousel
$(".slider").slick();

// Magnific Popup
$(".popup").magnificPopup({ type: "image" });
```

---

## 🚀 Projects

1. **To-Do App** — Add/remove/edit tasks
2. **Image Slider** — Click/pause navigation
3. **Form Validator** — Real-time validation
4. **Infinite Scroll** — Load more on scroll
5. **Interactive Table** — Sort, filter, search

---

> **"jQuery — Ab bhi relevant! Legacy projects aur fast prototyping ke liye perfect." 💎**

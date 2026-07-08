# 🎨 CSS3 - Complete Curriculum (2026 Edition)

> **"CSS means Cascading Style Sheets. Ye web pages ki sundarta hai."**

---

## 📋 Table of Contents
- [Complete Roadmap](#-complete-roadmap)
- [History & Evolution](#-history--evolution)
- [Module 1: Beginner](#-module-1-beginner)
- [Module 2: Intermediate](#-module-2-intermediate)
- [Module 3: Advanced](#-module-3-advanced)
- [Module 4: Professional](#-module-4-professional)
- [Module 5: Expert](#-module-5-expert)
- [Interview Module](#-interview-module)
- [Project Module](#-project-module)
- [Quick Reference](#-quick-reference)

---

## 🗺️ Complete Roadmap

```
CSS3 Journey
│
├── 🟢 BEGINNER (Week 1-3)
│   ├── What is CSS?
│   ├── Selectors (Basic)
│   ├── Colors & Backgrounds
│   ├── Text & Fonts
│   ├── Box Model
│   ├── Margins, Padding, Borders
│   ├── Width & Height
│   └── Display Property
│
├── 🔵 INTERMEDIATE (Week 4-6)
│   ├── Advanced Selectors
│   ├── Pseudo-classes & Elements
│   ├── Flexbox
│   ├── Grid Layout
│   ├── Positioning
│   ├── Float & Clear
│   ├── Z-Index & Stacking
│   ├── Overflow
│   └── Units (em, rem, vw, vh)
│
├── 🟠 ADVANCED (Week 7-9)
│   ├── CSS Variables
│   ├── Animations & Transitions
│   ├── Transforms
│   ├── Media Queries
│   ├── Responsive Design
│   ├── CSS Functions
│   ├── Gradients
│   ├── Shadows & Filters
│   └── Clip Path & Masking
│
├── 🔴 PROFESSIONAL (Week 10-12)
│   ├── Preprocessors (SCSS)
│   ├── CSS Architecture (BEM, SMACSS)
│   ├── CSS Modules
│   ├── CSS-in-JS
│   ├── Container Queries
│   ├── Layers (@layer)
│   ├── Subgrid
│   ├── Has Selector
│   └── Performance & Best Practices
│
├── ⚫ EXPERT (Week 13-14)
│   ├── CSS Houdini
│   ├── Scroll-driven Animations
│   ├── View Transitions API
│   ├── Nesting (2024+)
│   ├── Custom Media Queries
│   ├── CSS Color Level 4/5
│   ├── @scope
│   └── Future CSS Features
│
└── 💼 CAREER
    ├── Projects
    ├── Interview Prep
    └── Industry Standards
```

---

## 📖 History & Evolution

| Year | Version | Key Features |
|------|---------|-------------|
| 1996 | CSS1 | Fonts, colors, margins |
| 1998 | CSS2 | Positioning, z-index, media types |
| 2001 | CSS3 Modules | Modular approach starts |
| 2012 | CSS3 Final | Flexbox, Grid starts |
| 2015 | CSS4 Terminology | Variables, new selectors |
| 2017 | CSS Grid | Full grid support |
| 2020 | CSS Container Queries | Container-based responsive |
| 2023 | CSS Nesting | Native nesting support |
| 2024 | CSS Has Selector | Parent selector |
| 2025 | CSS Layers | Cascade layers widely adopted |
| 2026 | CSS Latest | Scroll-driven animations, scope |

### Browser Support - 2026
| Browser | CSS3 Support |
|---------|-------------|
| Chrome 130+ | ✅ 100% |
| Firefox 130+ | ✅ 99.5% |
| Safari 18+ | ✅ 99% |
| Edge 130+ | ✅ 100% |

### Pros & Cons
| Pros | Cons |
|------|------|
| Beautiful designs possible | Can get complex |
| Responsive layouts | Browser inconsistencies |
| Animations without JS | Debugging difficult |
| Reusable code | Specificity wars |
| Separation of concerns | Performance if overused |

---

# 🟢 MODULE 1: BEGINNER CSS3

---

## 1.1 🌟 What is CSS?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 20 mins |
| **Prerequisites** | HTML5 Basics |

### Definition
CSS = **C**ascading **S**tyle **S**heets. Yeh web pages ko beautiful banata hai.

### Roman English Explanation
CSS ko "kapde" samjho. HTML ne jo skeleton banaya, usme CSS styling karti hai. CSS se hum colors, fonts, layout, animations sab kuch set kar sakte hain. "Cascading" ka matlab hai ki ek ke baad ek rule apply hota hai.

### Analogy 🏠
> HTML = House structure (walls, roof)
> CSS = Interior design (paint, furniture, curtains)
> JavaScript = Smart home features (lights, AC)

### Three Ways to Add CSS
```css
/* 1. Inline CSS - HTML element ke andar */
<p style="color: red;">Red text</p>

/* 2. Internal CSS - style tag in head */
<head>
    <style>
        p { color: blue; }
    </style>
</head>

/* 3. External CSS - separate file */
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### CSS Syntax
```css
selector {
    property: value;
    property: value;
}

/* Example */
h1 {
    color: red;
    font-size: 32px;
    text-align: center;
}
```

### Line-by-Line Explanation
| Part | Meaning |
|------|---------|
| `h1` | Selector - kis element par lagega |
| `{ }` | Curly braces - rules ka group |
| `color` | Property - kya change karna hai |
| `red` | Value - kaise change karna hai |
| `;` | Semicolon - rule khatam |

---

## 1.2 🎯 CSS Selectors

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 40 mins |
| **Prerequisites** | HTML Basics |

### Definition
Selectors CSS ke targeting system hain. Ye decide karte hain ki CSS rule KIS element par lagega.

### Basic Selectors
```css
/* 1. Universal Selector - SAB KUCH */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 2. Element/Tag Selector */
h1 { color: red; }
p { font-size: 16px; }
div { background: yellow; }

/* 3. Class Selector (.className) */
.card { border: 1px solid black; }
.btn-primary { background: blue; color: white; }

/* 4. ID Selector (#idName) */
#header { height: 80px; }
#main-content { padding: 20px; }

/* 5. Group Selector */
h1, h2, h3 { font-family: Arial; }

/* 6. Descendant Selector (space) */
div p { color: green; } /* div ke ANDAR ke saare p */

/* 7. Child Selector (>) */
div > p { color: blue; } /* div ke DIRECT children p */

/* 8. Adjacent Sibling (+) */
h1 + p { margin-top: 0; } /* h1 ke THEEK BAAD wala p */

/* 9. General Sibling (~) */
h1 ~ p { color: gray; } /* h1 ke BAAD ke saare p */

/* 10. Attribute Selector */
[type="text"] { border: 1px solid gray; }
[href^="https"] { color: green; } /* starts with */
[href$=".pdf"] { color: red; } /* ends with */
[href*="google"] { color: blue; } /* contains */
[class~="featured"] { border: 2px solid gold; } /* word */
```

### Specificity Hierarchy
```
Inline styles > ID > Class/Attribute/Pseudo-class > Element/Pseudo-element
   1000          100          10                         1
```

### Beginner Examples

**Example 1 - Basic Styling**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 { color: navy; text-align: center; }
        .highlight { background-color: yellow; }
        #special { font-size: 24px; color: purple; }
    </style>
</head>
<body>
    <h1>Welcome to Code Duniya</h1>
    <p class="highlight">Yeh highlighted paragraph hai</p>
    <p id="special">Yeh special paragraph hai</p>
</body>
</html>
```

**Example 2 - Multiple Elements**
```html
<style>
    .card {
        background: white;
        border-radius: 10px;
        padding: 20px;
        margin: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .card-title { font-size: 24px; font-weight: bold; }
    .card-text { color: #666; }
</style>

<div class="card">
    <h2 class="card-title">HTML Course</h2>
    <p class="card-text">Complete HTML5 course free</p>
</div>
```

**Example 3 - Attribute Selectors**
```html
<style>
    input[type="text"] { padding: 10px; border: 2px solid blue; }
    input[type="submit"] { background: green; color: white; padding: 10px 20px; }
    a[href^="https"] { color: green; }
    a[href$=".pdf"]::after { content: "📄"; }
</style>

<input type="text" placeholder="Naam likho">
<input type="submit" value="Submit">
<a href="https://google.com">Google</a>
<a href="file.pdf">Download PDF</a>
```

**Example 4 - Descendant vs Child**
```html
<style>
    .container p { color: blue; }     /* Saare p */
    .container > p { color: red; }    /* Sirf direct p */
</style>

<div class="container">
    <p>Direct child - RED</p>
    <div>
        <p>Inside div - BLUE (descendant only)</p>
    </div>
    <p>Direct child - RED</p>
</div>
```

**Example 5 - Group Selector**
```html
<style>
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Arial', sans-serif;
        color: #333;
        margin-bottom: 15px;
    }
</style>
```

---

## 1.3 🎨 Colors in CSS

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 25 mins |

### Color Formats
```css
/* 1. Named Colors - 140+ named colors */
color: red;
color: blue;
color: tomato;
color: rebeccapurple;

/* 2. HEX Code - #RRGGBB */
color: #ff0000;   /* Red */
color: #00ff00;   /* Green */
color: #0000ff;   /* Blue */
color: #ffffff;   /* White */
color: #000000;   /* Black */
color: #ff6347;   /* Tomato */
color: #333;      /* Shorthand for #333333 */

/* 3. RGB */
color: rgb(255, 0, 0);          /* Red */
color: rgb(255, 99, 71);        /* Tomato */

/* 4. RGBA (with opacity) */
color: rgba(255, 0, 0, 0.5);    /* 50% transparent red */
background: rgba(0, 0, 0, 0.1);  /* 10% black overlay */

/* 5. HSL (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);       /* Red */
color: hsl(120, 100%, 50%);     /* Green */
color: hsl(240, 100%, 50%);     /* Blue */

/* 6. HSLA */
color: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */

/* 7. Current Color - same as element's color */
border: 2px solid currentColor;

/* 8. Transparent */
background: transparent;
```

### Color Wheel (HSLA Explanation)
```
Hue (0-360):
0° = Red
120° = Green
240° = Blue

Saturation (0-100%):
0% = Gray
100% = Full color

Lightness (0-100%):
0% = Black
50% = Normal
100% = White
```

### Practical Example
```css
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.button-primary {
    background: #007bff;
    color: #ffffff;
    border: 2px solid #0056b3;
}

.button-danger {
    background: #dc3545;
    color: rgba(255, 255, 255, 0.9);
}
```

---

## 1.4 📝 Text & Font Styling

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |

### Text Properties
```css
p {
    /* Color */
    color: #333;
    
    /* Alignment */
    text-align: left;         /* default */
    text-align: right;
    text-align: center;
    text-align: justify;      /* Both sides aligned */
    
    /* Decoration */
    text-decoration: underline;
    text-decoration: overline;
    text-decoration: line-through;
    text-decoration: none;    /* Remove link underline */
    
    /* Transform */
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize; /* Har word capital */
    
    /* Spacing */
    letter-spacing: 2px;       /* Letters ke beech */
    word-spacing: 5px;         /* Words ke beech */
    line-height: 1.6;          /* Lines ke beech */
    text-indent: 50px;         /* First line indent */
    
    /* Shadow */
    text-shadow: 2px 2px 4px gray;
    /* text-shadow: x y blur color; */
    
    /* Overflow */
    white-space: nowrap;       /* No wrap */
    overflow: hidden;          /* Hide overflow */
    text-overflow: ellipsis;   /* Show ... */
    
    /* Word Break */
    word-break: break-all;     /* Kahi bhi break */
    word-wrap: break-word;     /* Word ke end par break */
}
```

### Font Properties
```css
body {
    /* Font Family - Multiple backups */
    font-family: 'Roboto', 'Arial', sans-serif;
    font-family: 'Noto Sans Devanagari', sans-serif; /* Hindi */
    
    /* Font Size */
    font-size: 16px;         /* Pixels */
    font-size: 1.2rem;       /* Relative */
    font-size: 100%;         /* Percentage */
    font-size: large;        /* Keyword */
    
    /* Font Weight */
    font-weight: normal;     /* 400 */
    font-weight: bold;       /* 700 */
    font-weight: 100;        /* Thin */
    font-weight: 300;        /* Light */
    font-weight: 500;        /* Medium */
    font-weight: 900;        /* Black */
    
    /* Font Style */
    font-style: normal;
    font-style: italic;
    font-style: oblique;
    
    /* Shorthand */
    font: italic bold 16px/1.5 'Arial', sans-serif;
    /* font: style weight size/line-height family */
    
    /* Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap');
}
```

### Beginner Example
```html
<style>
    .article {
        font-family: 'Georgia', serif;
        line-height: 1.8;
        color: #2c3e50;
    }
    .article h1 {
        font-size: 2.5rem;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    .article p:first-of-type::first-letter {
        font-size: 3em;
        font-weight: bold;
        color: #e74c3c;
        float: left;
        margin-right: 5px;
    }
    .truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }
</style>
```

---

## 1.5 📦 Box Model

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 45 mins |
| **Prerequisites** | Basic CSS |

### Definition
Box Model CSS ka sabse important concept hai. Har HTML element ek box hai jisme 4 parts hote hain.

### Box Model Diagram
```
┌──────────────────────────────────┐
│          MARGIN (outside)        │
│  ┌──────────────────────────┐    │
│  │      BORDER              │    │
│  │  ┌──────────────────┐    │    │
│  │  │    PADDING        │    │    │
│  │  │  ┌────────────┐   │    │    │
│  │  │  │  CONTENT   │   │    │    │
│  │  │  │  (Text)    │   │    │    │
│  │  │  └────────────┘   │    │    │
│  │  └──────────────────┘    │    │
│  └──────────────────────────┘    │
└──────────────────────────────────┘
```

### Code Examples
```css
.box {
    /* Content */
    width: 300px;
    height: 200px;
    
    /* Padding - content ke andar ka space */
    padding: 20px;              /* All sides */
    padding: 10px 20px;         /* top/bottom left/right */
    padding: 10px 15px 20px 25px; /* top right bottom left (clockwise) */
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 20px;
    padding-left: 25px;
    
    /* Border - padding ke bahar */
    border: 2px solid black;    /* width style color */
    border-width: 2px;
    border-style: solid;
    border-style: dashed;
    border-style: dotted;
    border-style: double;
    border-color: red;
    border-radius: 10px;        /* Gol corners */
    border-radius: 50%;          /* Circle */
    border-top: 2px solid blue;
    border-bottom: 4px dashed green;
    
    /* Margin - border ke bahar (outside space) */
    margin: 20px;               /* All sides */
    margin: 10px auto;          /* Center horizontally */
    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 20px;
    margin-left: 25px;
    margin: 0 auto;             /* Auto margin = center */
}
```

### Box-Sizing
```css
/* 🚨 IMPORTANT: Always use border-box */
* {
    box-sizing: border-box;
}

/*
content-box (default):
width = content width only
Total width = width + padding + border

border-box (recommended):
width = content + padding + border
Total width = width property ke equal
*/
```

### Calculation Example
```css
/* With content-box (default) */
.box {
    width: 300px;
    padding: 20px;
    border: 5px solid;
    /* Total width = 300 + 40 (padding*2) + 10 (border*2) = 350px */
}

/* With border-box */
* { box-sizing: border-box; }
.box {
    width: 300px;
    padding: 20px;
    border: 5px solid;
    /* Total width = 300px (content automatically 230px) */
}
```

### Beginner Examples

**Example 1 - Card Component**
```css
.card {
    width: 300px;
    padding: 20px;
    margin: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    /* Total width = 300px (border-box) */
}
```

**Example 2 - Button Styles**
```css
.btn {
    padding: 12px 24px;
    border: 2px solid #007bff;
    border-radius: 6px;
    margin: 5px;
    background: #007bff;
    color: white;
    cursor: pointer;
}
```

**Example 3 - Centering with Margin**
```css
.container {
    width: 80%;
    margin: 0 auto;  /* Center horizontally */
    padding: 20px;
}

/* Vertical centering trick */
.center-box {
    width: 200px;
    height: 200px;
    margin: 50px auto;
}
```

**Example 4 - Profile Card**
```css
.profile-card {
    width: 350px;
    padding: 30px;
    margin: 20px auto;
    border: 3px solid #f0f0f0;
    border-radius: 15px;
    box-sizing: border-box;
    text-align: center;
}
```

**Example 5 - Article Layout**
```css
.article {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    border-bottom: 1px solid #eee;
}
```

### Memory Trick 🧠
> **"Content And Padding Border Margin"** (inside to outside)
> **"Crazy Ants Party Big Mess"** (C A P B M)

---

## 1.6 📐 Display Property

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### Display Values
```css
/* Block - full width, new line */
display: block;

/* Inline - content width, same line */
display: inline;

/* Inline-Block - inline but can set width/height */
display: inline-block;

/* None - completely hide (removed from flow) */
display: none;

/* Flex - flexible box layout */
display: flex;

/* Grid - grid layout */
display: grid;

/* Table - table-like layout */
display: table;

/* List Item - li ki tarah */
display: list-item;

/* Contents - box ko remove kare (children direct parent mein) */
display: contents;
```

### Block vs Inline vs Inline-Block
```css
/* Block elements */
div, p, h1, ul, li, section, article, nav, header, footer
✅ Full width
✅ New line se start
✅ width/height set kar sakte hain

/* Inline elements */
span, a, strong, em, img, label, input, button
❌ Content width
❌ New line nahi
❌ width/height set nahi kar sakte
✅ Padding left/right work
❌ Padding top/bottom work nahi
❌ Margin top/bottom work nahi

/* Inline-Block - Best of both */
display: inline-block;
✅ Width/height set kar sakte hain
✅ Same line mein rehte hain
✅ Padding/margin sab kaam karta hai
```

### Visual Example
```html
<style>
    .block { display: block; background: red; padding: 10px; }
    .inline { display: inline; background: yellow; padding: 10px; }
    .inline-block { display: inline-block; background: lightblue; padding: 10px; width: 200px; }
</style>

<div class="block">Block 1 - Full width</div>
<div class="block">Block 2 - New line</div>

<span class="inline">Inline 1</span>
<span class="inline">Inline 2 - Same line</span>

<div class="inline-block">Inline-Block 1 (200px)</div>
<div class="inline-block">Inline-Block 2 (200px)</div>
```

---

## 1.7 Width & Height Properties

```css
/* Fixed sizes */
width: 300px;
height: 200px;

/* Relative sizes */
width: 50%;         /* Parent ke 50% */
height: 100vh;      /* Viewport height ke 100% */
width: 100vw;       /* Viewport width ke 100% */
width: 50vw;        /* Aadhi screen */

/* Max/Min constraints */
max-width: 1200px;  /* Isse bada nahi hoga */
min-width: 300px;   /* Isse chhota nahi hoga */
max-height: 500px;
min-height: 100px;

/* Auto - browser decide kare */
height: auto;       /* Content ke hisaab se */
width: auto;        /* Content ke hisaab se */

/* Fill available */
width: 100%;        /* Pure parent width */

/* Intrinsic sizing */
width: fit-content; /* Content ki width */
width: max-content; /* Content jitna ho (no wrap) */
width: min-content; /* Sabse chhota possible */
```

---

## 1.8 Background Properties

```css
.box {
    /* Background Color */
    background-color: #f0f0f0;
    
    /* Background Image */
    background-image: url('bg.jpg');
    
    /* Background Repeat */
    background-repeat: no-repeat;    /* Ek baar */
    background-repeat: repeat;       /* Both sides (default) */
    background-repeat: repeat-x;     /* Sirf horizontally */
    background-repeat: repeat-y;     /* Sirf vertically */
    
    /* Background Position */
    background-position: center;
    background-position: top left;
    background-position: 50% 50%;
    background-position: right bottom;
    background-position: 100px 200px;
    
    /* Background Size */
    background-size: cover;           /* Pure area cover */
    background-size: contain;         /* Pure image dikhe */
    background-size: 100% 100%;       /* Stretch */
    background-size: 200px 150px;     /* Fixed size */
    
    /* Background Attachment */
    background-attachment: scroll;    /* Scroll with page */
    background-attachment: fixed;     /* Fixed position */
    background-attachment: local;     /* Scroll with element */
    
    /* Multiple Backgrounds */
    background: 
        url('overlay.png') no-repeat center,
        url('bg.jpg') cover;
    
    /* Shorthand */
    background: #f0f0f0 url('bg.jpg') no-repeat center/cover fixed;
    
    /* Linear Gradient */
    background: linear-gradient(red, yellow);
    background: linear-gradient(to right, red, blue);
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    /* Radial Gradient */
    background: radial-gradient(circle, red, yellow, green);
    background: radial-gradient(ellipse at center, #ff6b6b 0%, #ee5a24 100%);
    
    /* Conic Gradient */
    background: conic-gradient(red, yellow, green, blue, red);
}
```

---

## 1.9 📏 CSS Units

| Unit | Type | Description | Example |
|------|------|-------------|---------|
| `px` | Absolute | Pixels (1px = 1/96 inch) | `width: 300px` |
| `pt` | Absolute | Points (1pt = 1/72 inch) | `font-size: 12pt` |
| `cm` | Absolute | Centimeters | `width: 10cm` |
| `in` | Absolute | Inches | `width: 5in` |

| `%` | Relative | Parent element ke relative | `width: 50%` |
| `em` | Relative | Parent font size ke relative | `padding: 2em` |
| `rem` | Relative | Root (html) font size ke relative | `margin: 1rem` |
| `vw` | Relative | Viewport width ke 1% | `width: 100vw` |
| `vh` | Relative | Viewport height ke 1% | `height: 100vh` |
| `vmin` | Relative | vw ya vh jo chhota ho | `width: 50vmin` |
| `vmax` | Relative | vw ya vh jo bada ho | `width: 50vmax` |
| `ch` | Relative | Character "0" ki width | `width: 40ch` |
| `ex` | Relative | "x" character ki height | `font-size: 2ex` |

### When to Use What
```css
/* REM - Font sizes ke liye best */
font-size: 1rem;     /* = 16px default */
font-size: 1.5rem;   /* = 24px */
font-size: 2rem;     /* = 32px */

/* EM - Padding/margin jo font size ke saath scale kare */
padding: 1em;        /* Font size ke equal */

/* % - Width/layout ke liye */
width: 80%;          /* Parent ke 80% */

/* VW/VH - Full screen elements */
height: 100vh;       /* Puri screen height */
width: 100vw;        /* Puri screen width */

/* REM is generally preferred over EM (easier to predict) */
```

---

## 📚 Beginner Module - Complete Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | What is CSS | ✅ Done |
| 2 | CSS Syntax | ✅ Done |
| 3 | Three Ways to Add CSS | ✅ Done |
| 4 | Basic Selectors (element, class, id) | ✅ Done |
| 5 | Universal Selector | ✅ Done |
| 6 | Group Selector | ✅ Done |
| 7 | Descendant Selector | ✅ Done |
| 8 | Child Selector (>) | ✅ Done |
| 9 | Adjacent Sibling (+) | ✅ Done |
| 10 | General Sibling (~) | ✅ Done |
| 11 | Attribute Selectors | ✅ Done |
| 12 | Colors (HEX, RGB, RGBA, HSL) | ✅ Done |
| 13 | Text Properties | ✅ Done |
| 14 | Font Properties | ✅ Done |
| 15 | Box Model | ✅ Done |
| 16 | Padding | ✅ Done |
| 17 | Margin | ✅ Done |
| 18 | Border | ✅ Done |
| 19 | Border Radius | ✅ Done |
| 20 | Box Sizing | ✅ Done |
| 21 | Display Property | ✅ Done |
| 22 | Block vs Inline vs Inline-Block | ✅ Done |
| 23 | Width & Height | ✅ Done |
| 24 | Max/Min Width/Height | ✅ Done |
| 25 | Background Properties | ✅ Done |
| 26 | CSS Units (px, em, rem, vw, vh, %) | ✅ Done |
| 27 | Specificity | ✅ Done |

---

# 🔵 MODULE 2: INTERMEDIATE CSS3

---

## 2.1 🎯 Advanced Selectors & Pseudo-classes

### Pseudo-classes (:)
```css
/* User Action */
a:link { color: blue; }         /* Not visited */
a:visited { color: purple; }    /* Visited */
a:hover { color: red; }         /* Mouse over */
a:active { color: green; }      /* Click ke time */
button:focus { outline: 2px solid blue; }  /* Focused */

/* Structural */
element:first-child { }         /* Pehla child */
element:last-child { }          /* Akhri child */
element:nth-child(2) { }        /* Doosra child */
element:nth-last-child(2) { }   /* Last se doosra */
element:nth-child(odd) { }      /* Odd children */
element:nth-child(even) { }     /* Even children */
element:nth-child(3n+1) { }     /* Har 3 mein pehla */
element:nth-child(-n+5) { }     /* Pehle 5 */

/* Type */
element:first-of-type { }
element:last-of-type { }
element:nth-of-type(2) { }

/* Form States */
input:checked { }               /* Checkbox checked */
input:disabled { }              /* Disabled */
input:enabled { }               /* Enabled */
input:required { }              /* Required field */
input:optional { }              /* Not required */
input:valid { }                 /* Valid input */
input:invalid { }               /* Invalid input */
input:in-range { }              /* Within range */
input:out-of-range { }          /* Outside range */
input:placeholder-shown { }     /* Placeholder visible */

/* Other */
:root { }                       /* html element */
:empty { }                      /* Empty elements */
:target { }                     /* URL hash target */
:not(selector) { }              /* NOT this */
:is(selector) { }               /* Match any (forgiving) */
:where(selector) { }            /* Like :is but 0 specificity */
:has(selector) { }              /* Parent selector (2024+) */
```

### Pseudo-elements (::)
```css
::before { }                    /* Element se pehle */
::after { }                     /* Element ke baad */
::first-letter { }              /* Pehla letter */
::first-line { }                /* Pehli line */
::selection { }                 /* Selected text */
::placeholder { }               /* Input placeholder */
::marker { }                    /* List marker (bullet) */
::backdrop { }                  /* Dialog/modal backdrop */
::file-selector-button { }      /* File input button */

/* Must use content property with ::before/::after */
.element::before {
    content: "🌟";
    content: attr(data-icon);
    content: "";
}
```

### Advanced Examples

**Example 1 - Custom Checkbox**
```css
.checkbox-wrapper input[type="checkbox"] {
    display: none;
}
.checkbox-wrapper label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
}
.checkbox-wrapper label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border: 2px solid #ccc;
    border-radius: 4px;
}
.checkbox-wrapper input:checked + label::before {
    background: #007bff;
    border-color: #007bff;
}
.checkbox-wrapper input:checked + label::after {
    content: "✓";
    position: absolute;
    left: 5px;
    top: 2px;
    color: white;
    font-size: 18px;
}
```

**Example 2 - Tooltip with ::before/::after**
```css
.tooltip {
    position: relative;
    cursor: pointer;
}
.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}
.tooltip:hover::after {
    opacity: 1;
}
```

**Example 3 - Zebra Striping with nth-child**
```css
tr:nth-child(even) {
    background: #f2f2f2;
}
tr:nth-child(odd) {
    background: white;
}
/* Pattern: every 3rd starting from 2nd */
li:nth-child(3n+2) {
    background: yellow;
}
```

**Example 4 - Has Selector (Parent Selector)**
```css
/* Card jiske andar image hai */
.card:has(img) {
    border: 2px solid gold;
}

/* Form jisme error hai */
form:has(.error) {
    border-color: red;
}

/* Parent jiska child focused hai */
.form-group:has(input:focus) {
    border-color: blue;
}

/* Multiple conditions */
.card:has(h2):has(p) {
    /* Card with both h2 AND p */
}

/* NOT has */
.card:not(:has(img)) {
    background: #eee;
}
```

---

## 2.2 🎯 CSS Combinators Summary

| Combinator | Symbol | Example | Selects |
|------------|--------|---------|---------|
| Descendant | space | `div p` | div ke andar saare p |
| Child | `>` | `div > p` | div ke direct children p |
| Adjacent sibling | `+` | `h1 + p` | h1 ke immediately baad wala p |
| General sibling | `~` | `h1 ~ p` | h1 ke baad saare p |
| Column | `||` | `col || td` | Column ke cells |

---

## 2.3 🎨 Flexbox (CSS Flexible Box Layout)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 90 mins |
| **Prerequisites** | Box Model, Display |

### Definition
Flexbox ek-dimensional layout system hai. Yeh items ko row ya column mein arrange karta hai.

### Roman English Explanation
Flexbox ko ek "elastic container" samjho. Iske andar jo items hain, wo automatically arrange ho jate hain. Agar screen chhoti hoti hai to items shrink ho jate hain, agar badi hoti hai to expand. Pehle hum floats, tables, aur positioning se layout banate the - Flexbox ne sab easy kar diya.

### Flexbox Architecture
```
┌───────── Flex Container ─────────┐
│  main-start                      │
│  ┌──────┐ ┌──────┐ ┌──────┐    │  main-end
│  │Item 1│ │Item 2│ │Item 3│    │
│  └──────┘ └──────┘ └──────┘    │
│  ↑ cross-start                  │
│  ↓ cross-end                    │
└─────────────────────────────────┘

Main axis = flex-direction (row/horizontal by default)
Cross axis = perpendicular to main axis
```

### Container Properties
```css
.flex-container {
    /* Important: container ko flex banao */
    display: flex;
    /* or */
    display: inline-flex;
    
    /* Direction - main axis */
    flex-direction: row;            /* Default: left to right */
    flex-direction: row-reverse;    /* Right to left */
    flex-direction: column;         /* Top to bottom */
    flex-direction: column-reverse; /* Bottom to top */
    
    /* Wrap - items ko next line mein le jao */
    flex-wrap: nowrap;              /* Default: ek line mein */
    flex-wrap: wrap;                /* Multiple lines */
    flex-wrap: wrap-reverse;        /* Reverse wrap */
    
    /* Shorthand: direction + wrap */
    flex-flow: row wrap;
    flex-flow: column nowrap;
    
    /* Justify Content - main axis alignment */
    justify-content: flex-start;      /* Default: start se */
    justify-content: flex-end;        /* End se */
    justify-content: center;          /* Center */
    justify-content: space-between;   /* Items ke beech equal space */
    justify-content: space-around;    /* Har taraf space */
    justify-content: space-evenly;    /* Equal space everywhere */
    
    /* Align Items - cross axis alignment (single line) */
    align-items: stretch;             /* Default: full height */
    align-items: flex-start;          /* Top */
    align-items: flex-end;            /* Bottom */
    align-items: center;              /* Center vertically */
    align-items: baseline;            /* Text baseline align */
    
    /* Align Content - cross axis (multiple lines) */
    align-content: stretch;           /* Default */
    align-content: flex-start;        /* Top */
    align-content: flex-end;          /* Bottom */
    align-content: center;            /* Center */
    align-content: space-between;     /* Lines ke beech space */
    align-content: space-around;      /* Around each line */
    
    /* Gap (row-gap + column-gap shorthand) */
    gap: 20px;              /* Both rows and columns */
    row-gap: 10px;          /* Between rows */
    column-gap: 20px;       /* Between columns */
    gap: 10px 20px;         /* row column */
}
```

### Item Properties
```css
.flex-item {
    /* Order - visual order change (default 0) */
    order: 0;
    order: -1;   /* Pehle aayega */
    order: 1;    /* Baad mein aayega */
    
    /* Grow - extra space kaise fill kare */
    flex-grow: 0;        /* Default: grow nahi karega */
    flex-grow: 1;        /* Available space le lega */
    flex-grow: 2;        /* Doosre se double space */
    
    /* Shrink - space kam ho to kaise shrink */
    flex-shrink: 1;      /* Default: shrink ho sakta hai */
    flex-shrink: 0;      /* Shrink nahi hoga */
    
    /* Basis - initial size before grow/shrink */
    flex-basis: auto;    /* Default: content size */
    flex-basis: 200px;   /* Fixed starting size */
    flex-basis: 50%;
    
    /* Shorthand */
    flex: 1;                 /* flex-grow: 1 */
    flex: 0 0 auto;          /* Default */
    flex: 1 0 200px;         /* grow shrink basis */
    flex: 0 0 100px;         /* Fixed width (no grow/shrink) */
    
    /* Self alignment - override container ka align-items */
    align-self: auto;         /* Default: parent se */
    align-self: flex-start;
    align-self: flex-end;
    align-self: center;
    align-self: stretch;
    align-self: baseline;
}
```

### Flexbox Examples

**Example 1 - Navigation Bar**
```html
<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #333;
        padding: 1rem 2rem;
        color: white;
    }
    .nav-links {
        display: flex;
        gap: 20px;
        list-style: none;
    }
    .nav-links a {
        color: white;
        text-decoration: none;
    }
    .logo {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>

<nav class="navbar">
    <div class="logo">Code Duniya</div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

**Example 2 - Card Grid**
```html
<style>
    .card-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    .card {
        flex: 0 0 300px;  /* Fixed 300px, no grow/shrink */
        /* or */
        flex: 1 1 250px;  /* Grow, shrink, min 250px */
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
</style>
```

**Example 3 - Holy Grail Layout**
```html
<style>
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
    }
    header { background: #333; color: white; padding: 1rem; }
    .main-content {
        display: flex;
        flex: 1;  /* Grow to fill space */
    }
    nav { flex: 0 0 200px; background: #f0f0f0; }
    article { flex: 1; padding: 20px; }
    aside { flex: 0 0 150px; background: #f9f9f9; }
    footer { background: #333; color: white; padding: 1rem; }
</style>

<body>
    <header>Header</header>
    <div class="main-content">
        <nav>Sidebar Nav</nav>
        <article>Main Content</article>
        <aside>Right Sidebar</aside>
    </div>
    <footer>Footer</footer>
</body>
```

**Example 4 - Centering (The Holy Grail of CSS)**
```css
/* ONE Flexbox line mein center! */
.center-me {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

**Example 5 - Responsive Cards**
```css
.responsive-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.responsive-cards .card {
    flex: 1 1 300px;  /* Minimum 300px, grow to fill */
    max-width: 400px;
}
/* 3 cards in a row on desktop, 2 on tablet, 1 on mobile */
```

### Flexbox Playground
```
justify-content: center;
┌──────────────────────────────────┐
│         [1] [2] [3]              │
└──────────────────────────────────┘

justify-content: space-between;
┌──────────────────────────────────┐
│ [1]              [2]             │
└──────────────────────────────────┘

align-items: center;
┌──────────────────────────────────┐
│                                  │
│      [1]    [2]    [3]          │
│                                  │
└──────────────────────────────────┘
```

### Flexbox Cheatsheet
```
Container:
├── display: flex
├── flex-direction (row | column)
├── flex-wrap (nowrap | wrap)
├── justify-content (main axis)
│   ├── flex-start
│   ├── flex-end
│   ├── center
│   ├── space-between
│   ├── space-around
│   └── space-evenly
├── align-items (cross axis, 1 line)
│   ├── stretch
│   ├── flex-start
│   ├── flex-end
│   ├── center
│   └── baseline
└── align-content (cross axis, multi-line)

Items:
├── order (default: 0)
├── flex-grow (default: 0)
├── flex-shrink (default: 1)
├── flex-basis (default: auto)
├── flex (shorthand: grow shrink basis)
└── align-self (override)
```

---

## 2.4 📐 CSS Grid Layout

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Medium-Hard |
| **Time** | 90 mins |
| **Prerequisites** | Flexbox |

### Definition
CSS Grid 2-dimensional layout system hai. Yeh rows AUR columns dono control karta hai (unlike Flexbox which is 1D).

### Roman English Explanation
Grid ko ek "chessboard" samjho. Isme rows aur columns dono hote hain. Tum items ko exact position de sakte ho ki kaunsa item kaunsi row mein aur kaunse column mein aayega. Flexbox se zyada powerful hai complex layouts ke liye.

### Grid Architecture
```
┌─────┬─────┬─────┬─────┐
│     │     │     │     │  ← Grid Row
│     │     │     │     │
├─────┼─────┼─────┼─────┤
│     │     │     │     │
│     │     │     │     │
├─────┼─────┼─────┼─────┤
│     │     │     │     │
│     │     │     │     │
└─────┴─────┴─────┴─────┘
  ↑                     ↑
 Grid Column         Grid Lines (numbered 1,2,3...)
```

### Container Properties
```css
.grid-container {
    /* Important: container ko grid banao */
    display: grid;
    /* or */
    display: inline-grid;
    
    /* Columns define */
    grid-template-columns: 100px 200px 100px;  /* 3 columns */
    grid-template-columns: 1fr 2fr 1fr;         /* Fractional units */
    grid-template-columns: repeat(3, 1fr);       /* 3 equal columns */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  /* Responsive */
    grid-template-columns: 200px auto 150px;     /* Mixed */
    grid-template-columns: minmax(100px, 1fr) 2fr;
    
    /* Rows define */
    grid-template-rows: 100px 200px;
    grid-template-rows: repeat(3, auto);
    grid-template-rows: 100px 1fr 50px;
    
    /* Shorthand: rows / columns */
    grid-template: 100px 1fr 50px / repeat(3, 1fr);
    
    /* Gap */
    gap: 20px;
    row-gap: 20px;
    column-gap: 10px;
    
    /* Auto rows - items ke liye */
    grid-auto-rows: 100px;
    grid-auto-rows: minmax(100px, auto);
    
    /* Auto columns */
    grid-auto-columns: 100px;
    
    /* Auto flow */
    grid-auto-flow: row;      /* Default: fill rows first */
    grid-auto-flow: column;   /* Fill columns first */
    grid-auto-flow: dense;    /* Fill gaps automatically */
    
    /* Justify Items (horizontal alignment in cells) */
    justify-items: stretch;   /* Default: fill cell */
    justify-items: start;
    justify-items: end;
    justify-items: center;
    
    /* Align Items (vertical alignment in cells) */
    align-items: stretch;     /* Default */
    align-items: start;
    align-items: end;
    align-items: center;
    
    /* Place Items (shorthand for justify + align) */
    place-items: center;      /* Center both */
    place-items: start center;
    
    /* Justify Content (align entire grid horizontally) */
    justify-content: start;
    justify-content: center;
    justify-content: end;
    justify-content: space-between;
    justify-content: space-evenly;
    
    /* Align Content (align entire grid vertically) */
    align-content: start;
    align-content: center;
    align-content: end;
    align-content: space-evenly;
}
```

### Item Properties
```css
.grid-item {
    /* Position by line numbers */
    grid-column: 1 / 3;        /* Column 1 se 3 tak (span 2 columns) */
    grid-column: 1 / span 2;   /* Same thing */
    grid-column: 1;            /* Single column */
    grid-column: 1 / -1;       /* Full width */
    
    grid-row: 1 / 3;           /* Row 1 se 3 tak */
    grid-row: 1 / span 2;
    
    /* Shorthand */
    grid-area: 1 / 1 / 3 / 3;  /* row-start / col-start / row-end / col-end */
    
    /* Named areas */
    grid-area: header;         /* grid-template-areas se match */
    
    /* Self alignment (override container) */
    justify-self: stretch;
    justify-self: start;
    justify-self: end;
    justify-self: center;
    
    align-self: stretch;
    align-self: start;
    align-self: end;
    align-self: center;
    
    place-self: center;        /* Shorthand */
}
```

### Grid Examples

**Example 1 - Basic Grid**
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
/* Creates 3 equal columns */
```

**Example 2 - Named Grid Areas**
```css
.layout {
    display: grid;
    grid-template-areas:
        "header  header  header"
        "sidebar main    aside"
        "footer  footer  footer";
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 10px;
}

header { grid-area: header; }
nav { grid-area: sidebar; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }
```

**Example 3 - Responsive Auto-fill Grid**
```css
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}
/* Auto creates columns - 250px minimum, grows to fill */
```

**Example 4 - Spanning Items**
```css
.featured {
    grid-column: 1 / -1;      /* Full width row */
    /* OR */
    grid-column: span 2;      /* Span 2 columns */
    grid-row: span 2;          /* Span 2 rows */
}

/* Magazine layout */
.magazine {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
}
.magazine .hero {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}
.magazine .sidebar {
    grid-column: 4;
    grid-row: 1 / 4;
}
```

**Example 5 - Subgrid**
```css
/* Subgrid = child grid parent ke grid lines follow kare */
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
.card {
    display: grid;
    grid-template-rows: subgrid;  /* Parent ki rows follow */
    grid-row: span 3;              /* Span 3 rows */
    /* Now card's children align with siblings */
}
```

### Grid vs Flexbox

| Aspect | Grid | Flexbox |
|--------|------|---------|
| Dimension | 2D (rows + columns) | 1D (row OR column) |
| Best for | Page layout, complex grids | Component layout, nav bars |
| Item alignment | Both axes simultaneously | Main + cross axis |
| Gap property | ✅ Yes | ✅ Yes |
| Overlap | ✅ Yes (grid items can overlap) | ❌ No |
| Source order | Independent (items can be placed anywhere) | Source order dependent |
| Browser support | ✅ All modern | ✅ All modern |

---

## 2.5 📍 CSS Positioning

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 45 mins |

### Position Values
```css
/* Static (default) */
position: static;           /* Normal flow, z-index doesn't work */

/* Relative */
position: relative;          /* Normal flow, but offset from self */
top: 20px;                  /* 20px neeche se */
left: 30px;                 /* 30px right se */
/* z-index works */

/* Absolute */
position: absolute;          /* Removed from flow, positions relative to nearest positioned ancestor */
top: 0;
right: 0;                   /* Top-right corner of parent */

/* Fixed */
position: fixed;             /* Removed from flow, relative to viewport */
bottom: 20px;
right: 20px;                /* Fixed position even on scroll */

/* Sticky */
position: sticky;            /* Mix of relative + fixed */
top: 0;                      /* Sticks to top when scrolled to that point */
```

### Offset Properties
```css
top: 20px;
right: 30px;
bottom: 40px;
left: 50px;
/* Works with position: relative, absolute, fixed, sticky */
```

### Positioning Examples

**Example 1 - Fixed Header**
```css
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
}
body {
    padding-top: 60px;  /* Don't hide content under header */
}
```

**Example 2 - Absolute Badge**
```css
.card {
    position: relative;  /* Anchor for absolute children */
}
.badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: red;
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
    font-size: 12px;
}
```

**Example 3 - Sticky Sidebar**
```css
.sidebar {
    position: sticky;
    top: 80px;  /* Sticks 80px from top when scrolled */
    height: fit-content;
}
```

**Example 4 - Modal Overlay**
```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.modal {
    background: white;
    padding: 40px;
    border-radius: 10px;
    max-width: 500px;
}
```

**Example 5 - Tooltip Positioning**
```css
.tooltip-container {
    position: relative;
    display: inline-block;
}
.tooltip-text {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    visibility: hidden;
}
.tooltip-container:hover .tooltip-text {
    visibility: visible;
}
```

---

## 2.6 📚 Z-Index & Stacking Context

```css
/* Z-index controls which element appears on top */
.element1 { z-index: 1; }     /* Neeche */
.element2 { z-index: 10; }    /* Upar */
.element3 { z-index: 100; }   /* Sabse upar */

/* Only works on positioned elements */
/* position: relative/absolute/fixed/sticky required */

/* Stacking Context is created when: */
1. Root element (html)
2. Positioned elements with z-index (not auto)
3. Opacity < 1
4. Transform, filter, perspective
5. will-change
6. Isolation: isolate
```

---

## 2.7 🌊 Float & Clear

```css
/* Float (legacy - avoid for layout, use flexbox/grid instead) */
.float-left { float: left; }
.float-right { float: right; }
.float-none { float: none; }

/* Clear */
.clear-left { clear: left; }
.clear-right { clear: right; }
.clear-both { clear: both; }
.clear-none { clear: none; }

/* Clearfix hack */
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

/* Modern: use display: flow-root instead */
.container {
    display: flow-root;  /* Contains floats */
}
```

---

## 2.8 📏 Overflow

```css
.box {
    /* Visible (default) - content bahar nikal jayega */
    overflow: visible;
    
    /* Hidden - content kat jayega */
    overflow: hidden;
    
    /* Scroll - hamesha scrollbar */
    overflow: scroll;
    
    /* Auto - sirf zaroorat par scrollbar */
    overflow: auto;
    
    /* Individual axes */
    overflow-x: hidden;
    overflow-y: scroll;
}
```

---

## Intermediate Module - Practice

### Flash Cards
```
Q: What's the difference between em and rem?
A: em = parent font size, rem = root font size

Q: Flexbox main axis direction?
A: flex-direction determines main axis (row/column)

Q: Grid vs Flexbox?
A: Grid = 2D (rows+columns), Flexbox = 1D

Q: Position sticky kya karta hai?
A: Scroll karne par element stick ho jata hai

Q: Z-index kab kaam karta hai?
A: Sirf positioned elements par (not static)

Q: What does flex: 1 mean?
A: flex-grow: 1, flex-shrink: 1, flex-basis: 0

Q: Box-sizing: border-box kya karta hai?
A: Width includes padding + border
```

---

# 🟠 MODULE 3: ADVANCED CSS3

---

## 3.1 🎨 CSS Variables (Custom Properties)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### Definition
CSS variables reusable values hain jo poori stylesheet mein use ho sakti hain. Jaise JavaScript mein variables, waise hi CSS mein.

### Code Syntax
```css
/* Declare variables (usually in :root for global scope) */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size-large: 2rem;
    --spacing-unit: 8px;
    --border-radius: 4px;
    --font-primary: 'Roboto', sans-serif;
    --shadow: 0 2px 5px rgba(0,0,0,0.1);
    --header-height: 60px;
    --max-width: 1200px;
}

/* Use variables */
.button {
    background: var(--primary-color);
    color: white;
    padding: calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius);
    font-family: var(--font-primary);
}

/* With fallback value */
.text-muted {
    color: var(--secondary-color, #666); /* 666 is fallback */
}

/* Theme switching */
[data-theme="dark"] {
    --primary-color: #375a7f;
    --bg-color: #222;
    --text-color: #fff;
}

body {
    background: var(--bg-color, white);
    color: var(--text-color, black);
}
```

### Benefits
1. ✅ Reusability - Ek jagah change karo, sab jagah badle
2. ✅ Theme support - Dark/light mode easily
3. ✅ JavaScript accessible - `element.style.setProperty('--var', value)`
4. ✅ Cascade - Scope define kar sakte hain
5. ✅ Calculations - `calc()` ke saath use kar sakte hain

### JavaScript Interaction
```javascript
// Get variable
getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color');  // #007bff

// Set variable
document.documentElement.style
    .setProperty('--primary-color', '#ff0000');  // Change to red
```

---

## 3.2 🔄 CSS Transitions

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### Definition
Transitions CSS properties ko smoothly change hone deti hain (instant change ki jagah).

### Code Syntax
```css
.element {
    /* Which properties to transition */
    transition-property: all;         /* Default: all */
    transition-property: color, background, transform;
    
    /* Duration */
    transition-duration: 0.3s;       /* 300 milliseconds */
    transition-duration: 200ms;
    
    /* Timing function (easing) */
    transition-timing-function: ease;         /* Default: slow start/end */
    transition-timing-function: linear;        /* Constant speed */
    transition-timing-function: ease-in;       /* Slow start */
    transition-timing-function: ease-out;      /* Slow end */
    transition-timing-function: ease-in-out;   /* Slow start and end */
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* Custom */
    
    /* Delay - kitni der baad start */
    transition-delay: 0s;             /* Default: immediate */
    transition-delay: 0.1s;
    
    /* Shorthand */
    transition: all 0.3s ease;
    transition: color 0.3s ease, transform 0.5s ease-in-out;
    transition: transform 0.3s, box-shadow 0.3s 0.1s; /* 0.1s delay for shadow */
}
```

### Example - Button Hover
```css
.btn {
    background: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    /* OR individually */
    transition: 
        background-color 0.3s ease,
        transform 0.2s ease,
        box-shadow 0.3s ease;
}
.btn:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
```

### Which Properties Can Transition?
✅ Color, background, opacity, transform
✅ Width, height, margin, padding
✅ Font-size, border, box-shadow
✅ All numeric values and colors
❌ display (use visibility instead)

---

## 3.3 ✨ CSS Transforms

### 2D Transforms
```css
.element {
    /* Translate (move) */
    transform: translateX(50px);        /* Right move */
    transform: translateY(-20px);       /* Up move */
    transform: translate(50px, -20px);  /* Both */
    
    /* Scale (size) */
    transform: scale(1.5);             /* 150% size */
    transform: scaleX(2);              /* Double width */
    transform: scaleY(0.5);            /* Half height */
    
    /* Rotate */
    transform: rotate(45deg);          /* 45 degree clockwise */
    transform: rotate(-90deg);         /* 90 degree anticlockwise */
    
    /* Skew (tilt) */
    transform: skewX(10deg);           /* Horizontal tilt */
    transform: skewY(10deg);           /* Vertical tilt */
    transform: skew(10deg, 20deg);     /* Both */
    
    /* Multiple transforms */
    transform: translate(50px, 50px) rotate(45deg) scale(1.2);
    
    /* Transform origin (default center) */
    transform-origin: top left;
    transform-origin: 0 0;
    transform-origin: 50% 50%;        /* Center (default) */
}
```

### 3D Transforms
```css
.element {
    /* Perspective (required for 3D) */
    perspective: 1000px;
    
    /* 3D Transforms */
    transform: rotateX(45deg);         /* Flip horizontal axis */
    transform: rotateY(45deg);         /* Flip vertical axis */
    transform: rotateZ(45deg);         /* Same as rotate 2D */
    transform: translateZ(100px);      /* Come towards user */
    transform: translate3d(10px, 20px, 30px);
    transform: scaleZ(2);
    
    /* 3D Preserve children */
    transform-style: preserve-3d;
    
    /* Backface visibility */
    backface-visibility: hidden;
    
    /* Multiple */
    transform: perspective(800px) rotateY(180deg);
}
```

### Example - 3D Card Flip
```css
.card-container {
    perspective: 1000px;
    width: 200px;
    height: 300px;
}
.card {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}
.card:hover {
    transform: rotateY(180deg);
}
.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}
.card-back {
    transform: rotateY(180deg);
    background: #333;
    color: white;
}
```

---

## 3.4 🎬 CSS Animations (@keyframes)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 45 mins |

### Definition
Animations complex, multi-step visual effects banane ke liye. Transitions sirf start/end karte hain, animations beech mein bhi control kar sakti hain.

### Code Syntax
```css
/* 1. Define the animation (keyframes) */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* With percentages (multiple steps) */
@keyframes bounce {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

/* Complex animation */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-20px);
    }
    75% {
        transform: translateY(-10px);
    }
}

/* 2. Apply the animation */
.element {
    /* Name (required) */
    animation-name: slideIn;
    
    /* Duration (required) */
    animation-duration: 1s;
    
    /* Timing function */
    animation-timing-function: ease;
    
    /* Delay */
    animation-delay: 0.5s;
    
    /* Iteration count */
    animation-iteration-count: 1;       /* Once */
    animation-iteration-count: infinite; /* Forever */
    animation-iteration-count: 3;        /* 3 times */
    
    /* Direction */
    animation-direction: normal;          /* Forward */
    animation-direction: reverse;         /* Backward */
    animation-direction: alternate;       /* Forward then backward */
    animation-direction: alternate-reverse; /* Backward then forward */
    
    /* Fill mode (what happens before/after) */
    animation-fill-mode: none;           /* Default */
    animation-fill-mode: forwards;       /* End state stays */
    animation-fill-mode: backwards;      /* Start state applied before start */
    animation-fill-mode: both;           /* Both directions */
    
    /* Play state */
    animation-play-state: running;       /* Playing */
    animation-play-state: paused;        /* Paused */
    
    /* Shorthand */
    animation: slideIn 1s ease 0.5s infinite alternate both;
}
```

### Animation Examples

**Example 1 - Loading Spinner**
```css
@keyframes spin {
    to { transform: rotate(360deg); }
}
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

**Example 2 - Pulse Effect**
```css
@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
}
.pulse-button {
    animation: pulse 2s ease-in-out infinite;
}
```

**Example 3 - Shake Animation**
```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
.error-input {
    animation: shake 0.5s;
}
```

**Example 4 - Fade In + Slide Up**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.animate-in {
    animation: fadeInUp 0.6s ease forwards;
}
/* Staggered animation */
.animate-in:nth-child(2) { animation-delay: 0.1s; }
.animate-in:nth-child(3) { animation-delay: 0.2s; }
```

**Example 5 - Typing Effect**
```css
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}
@keyframes blink {
    50% { border-color: transparent; }
}
.typing-text {
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid black;
    animation: 
        typing 3s steps(40) forwards,
        blink 0.5s step-end infinite;
}
```

---

## 3.5 📱 Media Queries & Responsive Design

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 60 mins |

### Definition
Media queries different screen sizes/devices ke liye different CSS apply karti hain.

### Basic Syntax
```css
/* Syntax */
@media media-type and (condition) {
    /* CSS rules */
}

/* Media Types */
@media screen { }      /* Computer screens, phones, tablets */
@media print { }       /* Printer */
@media speech { }      /* Screen readers */
@media all { }         /* All devices (default) */

/* Common Breakpoints */
/* Mobile First Approach */
/* Base styles (mobile) */
.container { padding: 10px; }

/* Tablet (768px+) */
@media (min-width: 768px) {
    .container { padding: 20px; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
    .container { padding: 40px; max-width: 1200px; margin: 0 auto; }
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
    .container { max-width: 1400px; }
}
```

### Advanced Media Queries
```css
/* Orientation */
@media (orientation: portrait) { }     /* Mobile vertical */
@media (orientation: landscape) { }    /* Mobile horizontal */

/* Dark Mode */
@media (prefers-color-scheme: dark) {
    body { background: #222; color: white; }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
}

/* High Contrast */
@media (prefers-contrast: high) { }

/* Print styles */
@media print {
    header, footer, nav, .ads { display: none; }
    body { font-size: 12pt; }
}

/* Range syntax */
@media (width >= 768px) { }           /* Modern syntax */
@media (768px <= width <= 1200px) { } /* Between */
```

### Responsive Design Examples

**Example 1 - Responsive Grid**
```css
.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;              /* Mobile: 1 column */
}

@media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }  /* Tablet: 2 columns */
}

@media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }  /* Desktop: 3 columns */
}
```

**Example 2 - Responsive Navigation**
```css
.nav {
    display: flex;
    flex-direction: column;  /* Mobile: vertical */
}

@media (min-width: 768px) {
    .nav {
        flex-direction: row;     /* Desktop: horizontal */
        justify-content: space-between;
    }
}
```

**Example 3 - Responsive Font Size**
```css
body { font-size: 16px; }
@media (min-width: 768px) { body { font-size: 18px; } }
@media (min-width: 1440px) { body { font-size: 20px; } }
```

---

## 3.6 🎭 CSS Filters

```css
.element {
    /* Blur */
    filter: blur(5px);
    
    /* Brightness */
    filter: brightness(0.5);  /* 50% dark */
    filter: brightness(2);    /* 200% bright */
    
    /* Contrast */
    filter: contrast(200%);
    
    /* Grayscale */
    filter: grayscale(100%);  /* Black & white */
    
    /* Hue Rotate */
    filter: hue-rotate(90deg);
    
    /* Invert */
    filter: invert(100%);     /* Negative */
    
    /* Opacity */
    filter: opacity(50%);
    
    /* Saturate */
    filter: saturate(300%);
    
    /* Sepia */
    filter: sepia(100%);
    
    /* Drop Shadow (like box-shadow but respects transparency) */
    filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.5));
    
    /* Multiple */
    filter: brightness(1.2) contrast(1.5) saturate(1.3);
}
```

---

## 3.7 🎯 Clip Path & Masking

```css
/* Clip Path - crop element into shape */
.element {
    clip-path: circle(50%);                           /* Circle */
    clip-path: ellipse(50% 25%);                      /* Ellipse */
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* Diamond */
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%); /* Pentagon */
    clip-path: inset(10% 20% 30% 40%);                /* Inset rectangle */
    clip-path: path('M0,0 L100,0 L100,100 Z');       /* SVG path */
    
    /* Animation with clip-path */
    transition: clip-path 0.3s ease;
}
.element:hover {
    clip-path: circle(100%);
}

/* Mask - image opacity based masking */
.masked {
    mask-image: url('mask.png');
    mask-size: cover;
    mask-repeat: no-repeat;
    -webkit-mask-image: url('mask.png'); /* WebKit fallback */
}
```

---

## 3.8 🔢 CSS Functions

```css
/* calc() - Mathematical calculations */
.element {
    width: calc(100% - 40px);
    height: calc(100vh - 80px);
    padding: calc(1rem + 10px);
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
}

/* min(), max(), clamp() - Responsive sizing */
.element {
    width: min(100%, 1200px);          /* 100% ya 1200px jo chhota ho */
    width: max(300px, 50%);            /* 300px ya 50% jo bada ho */
    font-size: clamp(1rem, 2.5vw, 2rem); /* Min 1rem, ideal 2.5vw, max 2rem */
    padding: clamp(10px, 3%, 40px);
}

/* attr() - HTML attributes se value lena */
.element::after {
    content: attr(data-label);
    /* Can use with other properties in some cases */
}

/* var() - CSS variables ka use */
color: var(--primary-color);

/* env() - Environment variables (safe area insets) */
padding-bottom: env(safe-area-inset-bottom);
```

---

## Advanced Module - Complete Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | CSS Variables | ✅ Done |
| 2 | CSS Transitions | ✅ Done |
| 3 | CSS Transforms (2D & 3D) | ✅ Done |
| 4 | CSS Animations (@keyframes) | ✅ Done |
| 5 | Media Queries | ✅ Done |
| 6 | Responsive Design | ✅ Done |
| 7 | CSS Filters | ✅ Done |
| 8 | Clip Path | ✅ Done |
| 9 | CSS Functions (calc, min, max, clamp) | ✅ Done |
| 10 | CSS Gradients (linear, radial, conic) | ✅ Done |
| 11 | Shadows (box-shadow, text-shadow) | ✅ Done |
| 12 | CSS Counter | ✅ Done |
| 13 | CSS Shapes | Next |
| 14 | Object-Fit & Object-Position | Next |
| 15 | Cursor Properties | Next |
| 16 | Resize Property | Next |
| 17 | Pointer Events | Next |

---

# 🔴 MODULE 4: PROFESSIONAL CSS3

---

## 4.1 🏗️ CSS Architecture Methodologies

### BEM (Block Element Modifier)
```css
/* Block - standalone component */
.card { }

/* Element - part of block (__) */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier - variation (--) */
.card--featured { }
.card__button--primary { }
.card__button--disabled { }

/* HTML example */
<div class="card card--featured">
    <div class="card__header">
        <h2 class="card__title">Title</h2>
    </div>
    <div class="card__body">
        <p class="card__text">Content</p>
        <button class="card__button card__button--primary">Click</button>
    </div>
</div>
```

### SMACSS (Scalable and Modular Architecture for CSS)
```
Base - Reset, defaults
Layout - Header, footer, grid
Module - Reusable components
State - Active, hidden, disabled
Theme - Colors, fonts
```

### OOCSS (Object Oriented CSS)
```
Separate structure from skin
Separate container from content
```

---

## 4.2 📦 CSS Modules & CSS-in-JS

### CSS Modules
```css
/* styles.module.css */
.button {
    background: blue;
    color: white;
}
/* Compiled: .Button_module_button_1a2b3c */
```

### CSS-in-JS (Styled Components example)
```javascript
const Button = styled.button`
    background: blue;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    
    &:hover {
        background: darkblue;
    }
`;
```

---

## 4.3 🎯 Container Queries (2024+)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 30 mins |

### Definition
Container queries parent container ki size ke hisaab se styling karti hain (viewport nahi).

### Code Syntax
```css
/* Define container */
.card-container {
    container-type: inline-size;
    container-name: card;
    /* OR shorthand */
    container: card / inline-size;
}

/* Query container */
@container card (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
    }
    .card__image {
        width: 200px;
    }
}

@container card (max-width: 399px) {
    .card {
        display: flex;
        flex-direction: column;
    }
    .card__image {
        width: 100%;
    }
}
```

### Container Query Units
```css
.element {
    width: 50cqw;      /* 50% of container width */
    height: 30cqh;     /* 30% of container height */
    padding: 2cqi;     /* 2% of container inline size */
    font-size: clamp(1rem, 5cqw, 2rem);
}
```

---

## 4.4 🧅 CSS Layers (@layer)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 20 mins |

### Definition
CSS layers specificity wars ka solution hain. Aap layer ka order decide kar sakte hain.

### Code Syntax
```css
/* Define layers in order (first = lowest priority) */
@layer reset, base, components, utilities;

/* Add rules to layers */
@layer reset {
    *, *::before, *::after { box-sizing: border-box; margin: 0; }
}

@layer base {
    body { font-family: sans-serif; line-height: 1.6; }
}

@layer components {
    .button { padding: 12px 24px; border-radius: 4px; }
}

@layer utilities {
    .text-center { text-align: center; }
    .mt-1 { margin-top: 8px; }
}

/* Layer import order: reset < base < components < utilities */
/* Later layer always wins regardless of specificity */
```

---

## 4.5 🎨 CSS Color Level 4 & 5 (2026)

```css
/* New Color Spaces */
.element {
    /* LCH - Better than HSL for perception */
    color: lch(50% 100 300);
    background: lch(70% 50 200);
    
    /* OKLCH - Even better color space */
    color: oklch(65% 0.3 180);
    
    /* Display P3 - Wider color gamut */
    color: color(display-p3 1 0.5 0);
    
    /* HWB (Hue Whiteness Blackness) */
    background: hwb(180 20% 30%);
    
    /* Relative colors */
    --primary: #007bff;
    --primary-light: hsl(from var(--primary) h s calc(l + 20));
    --primary-dark: hsl(from var(--primary) h s calc(l - 10));
}
```

---

## 4.6 🪺 CSS Nesting (2024+)

```css
/* Without nesting (old) */
.card { border: 1px solid #ddd; }
.card__title { font-size: 1.5rem; }
.card__body { padding: 20px; }
.card__body p { margin-bottom: 10px; }
.card:hover { box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

/* WITH NESTING (new) */
.card {
    border: 1px solid #ddd;
    
    &__title { font-size: 1.5rem; }
    &__body {
        padding: 20px;
        
        p { margin-bottom: 10px; }
    }
    
    &:hover { box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    
    /* Nested media query */
    @media (min-width: 768px) {
        display: flex;
    }
}

/* Also works with @media nesting */
.element {
    @media (width >= 768px) {
        width: 50%;
    }
}
```

---

## 4.7 🎭 Scroll-driven Animations (2026)

```css
/* Animation controlled by scroll position */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

.element {
    animation: fadeIn 1s linear;
    animation-timeline: view();           /* Based on element's view position */
    animation-range: entry 0% entry 100%; /* Animate on scroll in */
}

/* Or use scroll-timeline */
@keyframes grow {
    from { width: 0; }
    to { width: 100%; }
}

.progress-bar {
    animation: grow auto linear;
    animation-timeline: scroll(root);    /* Based on page scroll */
}
```

---

## 4.8 👁️ View Transitions API

```css
/* SPA page transitions */
@keyframes slide-out {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(-100px); }
}
@keyframes slide-in {
    from { opacity: 0; transform: translateX(100px); }
    to { opacity: 1; transform: translateX(0); }
}

::view-transition-old(root) {
    animation: slide-out 0.3s ease forwards;
}
::view-transition-new(root) {
    animation: slide-in 0.3s ease forwards;
}

/* Custom crossfade */
::view-transition-old(root) { animation: fade-out 0.5s; }
::view-transition-new(root) { animation: fade-in 0.5s; }
```

---

## 4.9 🎯 CSS @scope (2026)

```css
/* Scope styles to a subtree */
@scope (.card) {
    /* Only applies .card ke andar */
    p { color: #666; }
    a { color: blue; }
    
    /* Scope limits */
    :scope { border: 1px solid #ddd; }
}

/* With lower/upper boundary */
@scope (.card) to (.card__footer) {
    /* Card mein but footer ke bahar */
    p { margin-bottom: 10px; }
}
```

---

## 4.10 ⚡ CSS Performance Best Practices

```css
/* 1. Use will-change for animations */
.animated-element {
    will-change: transform, opacity;
}

/* 2. Contain property for isolation */
.widget {
    contain: layout style paint;  /* Isolate from rest of page */
    content-visibility: auto;     /* Only render when visible */
}

/* 3. Avoid expensive properties in animations */
/* BAD */
.element {
    animation: bad 1s infinite;
}
@keyframes bad {
    from { left: 0; }  /* Triggers layout */
    to { left: 100px; }
}
/* GOOD */
.element {
    animation: good 1s infinite;
}
@keyframes good {
    from { transform: translateX(0); }  /* Only composite */
    to { transform: translateX(100px); }
}

/* 4. Use content-visibility for long pages */
.lazy-section {
    content-visibility: auto;
    contain-intrinsic-size: 500px; /* Placeholder height */
}
```

### Performance Tips
1. ✅ Use `transform` and `opacity` for animations (GPU accelerated)
2. ✅ Avoid `box-shadow` animations (expensive)
3. ✅ Use `content-visibility: auto` for below-fold content
4. ✅ Minimize CSS specificity chains
5. ✅ Avoid `@import` (blocking)
6. ✅ Use CSS minification
7. ✅ Remove unused CSS (PurgeCSS)
8. ✅ Use `will-change` sparingly

---

# ⚫ MODULE 5: EXPERT CSS3

---

## 5.1 🎩 CSS Houdini

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 90 mins |

### Definition
CSS Houdini developers ko CSS engine ka access deta hai. Aap apne CSS features bana sakte hain!

### Worklets
```javascript
// 1. Paint Worklet - Custom CSS paint
// registerPaint('gradientBlob', class { ... })

// 2. Layout Worklet - Custom layout
// registerLayout('masonry', class { ... })

// 3. Animation Worklet - Custom animations
// registerAnimator('scrollDriven', class { ... })

// 4. Typed OM (Object Model)
// element.attributeStyleMap.set('--custom', CSS.px(10))
```

### Example - Custom Paint Worklet
```javascript
// blob.js - Paint Worklet
registerPaint('blob', class {
    static get inputProperties() {
        return ['--blob-color', '--blob-size'];
    }
    
    paint(ctx, size, props) {
        const color = props.get('--blob-color') || '#ff0000';
        const blobSize = parseInt(props.get('--blob-size')) || 50;
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(size.width/2, size.height/2, blobSize, 0, Math.PI * 2);
        ctx.fill();
    }
});

// In CSS
.element {
    --blob-color: #007bff;
    --blob-size: 100;
    background: paint(blob);
}
```

---

## 5.2 🎬 Advanced CSS Features (2026)

### @property - Custom Properties with Types
```css
/* Define typed custom property */
@property --rotation {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

@property --color-transition {
    syntax: '<color>';
    initial-value: red;
    inherits: true;
}

/* Use in animations */
.element {
    --rotation: 0deg;
    transition: --rotation 1s;
}
.element:hover {
    --rotation: 360deg;
    transform: rotate(var(--rotation));
}
```

### @starting-style (Enter animations)
```css
/* Animate elements when they first appear */
@starting-style {
    .dialog {
        opacity: 0;
        transform: scale(0.9);
    }
}

.dialog {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.3s, transform 0.3s;
}
```

### Anchor Positioning
```css
/* Position elements relative to other elements (like tooltips) */
.anchor {
    anchor-name: --tooltip;
}

.tooltip {
    position: absolute;
    position-anchor: --tooltip;
    top: anchor(bottom);
    left: anchor(left);
    /* OR */
    inset-area: bottom span-right;
}
```

### Scrollbar Styling
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f1; }
::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #555; }

/* Firefox */
* { scrollbar-width: thin; scrollbar-color: #888 #f1f1f1; }
```

### @media (prefers-) Features
```css
@media (prefers-color-scheme: light) { }
@media (prefers-color-scheme: dark) { }
@media (prefers-reduced-motion: no-preference) { }
@media (prefers-reduced-motion: reduce) { }
@media (prefers-contrast: more) { }
@media (prefers-reduced-data: reduce) { }
@media (prefers-color-gamut: p3) { }
@media (dynamic-range: high) { }
```

---

## Expert Module - Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | CSS Houdini | ✅ Done |
| 2 | @property | ✅ Done |
| 3 | @starting-style | ✅ Done |
| 4 | Anchor Positioning | ✅ Done |
| 5 | Scroll-driven Animations | ✅ Done |
| 6 | View Transitions API | ✅ Done |
| 7 | @scope | ✅ Done |
| 8 | CSS Nesting | ✅ Done |
| 9 | Container Queries | ✅ Done |
| 10 | @layer | ✅ Done |
| 11 | Color Level 4/5 | ✅ Done |
| 12 | Custom Media Queries | Next |
| 13 | @container style queries | Next |
| 14 | CSS Toggles | Next |
| 15 | CSS Mixins | Next |
| 16 | Balancing Text | Next |
| 17 | Subgrid | ✅ |
| 18 | Individual Transform Properties | Next |

---

# 💼 INTERVIEW MODULE

---

## CSS Interview Questions

### 🟢 Beginner
**Q1: CSS ka full form?** - Cascading Style Sheets

**Q2: Box model kya hai?** - Content, Padding, Border, Margin

**Q3: Specificity kya hai?** - Inline(1000) > ID(100) > Class(10) > Element(1)

**Q4: Class vs ID?** - Class multiple use, ID unique

**Q5: Block vs Inline?** - Block full width, Inline content width

### 🔵 Intermediate
**Q6: Flexbox vs Grid?** - Flexbox 1D, Grid 2D

**Q7: Position values?** - static, relative, absolute, fixed, sticky

**Q8: Pseudo-class vs Pseudo-element?** - :class (state), ::element (part)

**Q9: rem vs em?** - rem = root font size, em = parent font size

**Q10: Media query breakpoints?** - Mobile first: 768px, 1024px, 1440px

### 🟠 Advanced
**Q11: What is stacking context?** - 3D conceptual z-order of elements

**Q12: BEM methodology?** - Block__Element--Modifier naming

**Q13: CSS Variables vs Preprocessor variables?** - CSS vars are live, JS accessible, cascade

**Q14: Container queries vs Media queries?** - Container = parent size, Media = viewport

**Q15: Will-change property?** - Hints browser about upcoming changes

---

## MCQ Questions

1. **CSS selectivity sabse zyada kaunsi hai?**
   - a) Element (1)
   - b) Class (10)
   - c) ID (100) ✅
   - d) Universal (0)

2. **Position fixed kiske relative hota hai?**
   - a) Parent
   - b) Viewport ✅
   - c) Document
   - d) Sibling

3. **Flexbox mein items ko center karne ke liye?**
   - a) justify-content: center ✅ (main axis)
   - b) text-align: center
   - c) margin: auto
   - d) display: center

4. **CSS Grid mein 3 equal columns kaise?**
   - a) `grid-template-columns: repeat(3, 1fr)` ✅
   - b) `grid-columns: 3`
   - c) `columns: 3`
   - d) `grid: 3`

5. **Animations banane ke liye keyword?**
   - a) `@keyframes` ✅
   - b) `@animation`
   - c) `@move`
   - d) `@transition`

---

# 📝 CSS Cheat Sheet

## Selectors
```css
* { }            /* All */
#id { }          /* ID */
.class { }       /* Class */
div { }          /* Element */
div p { }        /* Descendant */
div > p { }      /* Direct child */
h1 + p { }       /* Adjacent sibling */
a[href] { }      /* Attribute */
```

## Box Model
```css
box-sizing: border-box;  /* ALWAYS */
margin: auto;            /* Center block */
```

## Flexbox Quick
```css
display: flex;
justify-content: center;  /* Main axis */
align-items: center;      /* Cross axis */
gap: 20px;
flex: 1;                  /* Grow equally */
```

## Grid Quick
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
```

## Centering
```css
/* Flexbox */
display: flex; justify-content: center; align-items: center;

/* Grid */
display: grid; place-items: center;

/* Absolute */
position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);

/* Margin */
margin: 0 auto;  /* Horizontal only */
```

---

# 🚀 PROJECT MODULE

### 🟢 Beginner Projects
| Project | Topics |
|---------|--------|
| Colorful Portfolio Page | Colors, fonts, box model |
| Product Card UI | Borders, shadows, flexbox |
| Navigation Bar | Flexbox, positioning |
| Photo Gallery | Grid, images, hover effects |
| Login Form | Styling forms, inputs |

### 🔵 Intermediate Projects
| Project | Topics |
|---------|--------|
| Landing Page | Full responsive layout |
| Dashboard Layout | Grid + flexbox combined |
| E-commerce Product Grid | Responsive grid, cards |
| Blog with Sidebar | Semantic layout, positioning |
| Pricing Table | Flexbox, gradients, hover |

### 🟠 Advanced Projects
| Project | Topics |
|---------|--------|
| Animated Portfolio | Transitions, animations |
| 3D Card Carousel | 3D transforms, perspective |
| CSS Art (Character) | Clip path, gradients |
| Loading Animations | Keyframes, transforms |
| Interactive Form | Validation styling, pseudo-classes |

### 🔴 Professional Projects
| Project | Topics |
|---------|--------|
| Design System | CSS variables, BEM, layers |
| Component Library | Container queries, nesting |
| Theme Switcher | CSS vars + JS, prefers-color-scheme |
| Responsive Email Template | Tables, inline styles |
| PWA with Offline Support | Service workers + CSS |

---

> **"CSS website ki rooh hai. Isse sundar banayein!" 🎨**
>
> **[Next: JavaScript ES2026 →](javascript.md)**

[Back to Main Curriculum →](../README.md)

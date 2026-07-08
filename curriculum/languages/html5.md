# 🌐 HTML5 - Complete Curriculum (2026 Edition)

> **"HTML means HyperText Markup Language. Ye web pages ka skeleton hai."**

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
- [Career Module](#-career-module)
- [Quick Reference](#-quick-reference)

---

## 🗺️ Complete Roadmap

```
HTML5 Journey
│
├── 🟢 BEGINNER (Week 1-2)
│   ├── What is HTML?
│   ├── Basic Structure
│   ├── Text Elements
│   ├── Links & Images
│   ├── Lists & Tables
│   └── Forms Basics
│
├── 🔵 INTERMEDIATE (Week 3-4)
│   ├── Semantic HTML
│   ├── Multimedia
│   ├── Forms Advanced
│   ├── HTML APIs
│   ├── SEO Basics
│   └── Accessibility
│
├── 🟠 ADVANCED (Week 5-6)
│   ├── Canvas & SVG
│   ├── Drag & Drop
│   ├── Web Storage
│   ├── Web Workers
│   ├── History API
│   └── Geolocation
│
├── 🔴 PROFESSIONAL (Week 7-8)
│   ├── Shadow DOM
│   ├── Web Components
│   ├── Microdata
│   ├── Performance
│   ├── Security
│   └── Best Practices
│
├── ⚫ EXPERT (Week 9-10)
│   ├── WASM Integration
│   ├── Web Sockets
│   ├── PWA
│   └── Advanced APIs
│
└── 💼 CAREER
    ├── Projects
    ├── Interview Prep
    └── Industry Standards
```

---

## 📖 History & Evolution

| Year | Version | Key Features |
|------|---------|--------------|
| 1991 | HTML 1.0 | Basic text tags, links |
| 1995 | HTML 2.0 | Forms, tables |
| 1997 | HTML 3.2 | Scripts, stylesheets |
| 1999 | HTML 4.01 | Frames, improved forms |
| 2000 | XHTML 1.0 | XML-based strict syntax |
| 2008 | HTML5 Draft | Video, audio, canvas |
| 2014 | HTML5 Official | Semantic tags, APIs |
| 2016 | HTML 5.1 | Context menus, pictures |
| 2017 | HTML 5.2 | Payment API, dialog |
| 2020 | HTML Living Standard | Continuous updates |
| 2024 | HTML Latest | Improved forms, media |
| 2026 | HTML Current | New APIs, better a11y |

### HTML5 Key Facts
- **Created by**: Tim Berners-Lee (1989), W3C & WHATWG
- **Latest Version**: Living Standard (continuously updated)
- **File Extension**: `.html` or `.htm`
- **MIME Type**: `text/html`
- **Paradigm**: Markup Language (not a programming language)

### Browser Support - 2026

| Browser | HTML5 Support |
|---------|--------------|
| Chrome 130+ | ✅ 100% |
| Firefox 130+ | ✅ 100% |
| Safari 18+ | ✅ 99% |
| Edge 130+ | ✅ 100% |
| Opera 110+ | ✅ 100% |
| Samsung Internet | ✅ 98% |

### Pros & Cons

| Pros | Cons |
|------|------|
| Easy to learn, simple syntax | Not a programming language |
| Works everywhere (universal) | Limited logic capabilities |
| SEO-friendly | Can get messy without structure |
| Free and open standard | Browser inconsistencies |
| Huge ecosystem | No built-in styling |
| Backward compatible | Security concerns (XSS, etc.) |

---

# 🟢 MODULE 1: BEGINNER HTML5

---

## 1.1 🌟 What is HTML?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 30 mins |
| **Prerequisites** | None (ZERO) |

### Definition
HTML = **H**yper**T**ext **M**arkup **L**anguage. Yeh web pages banane ki language hai.

### Roman English Explanation
HTML ek aisi language hai jisse hum web pages ka structure banate hain. Jaise kisi building ka skeleton hota hai, waise hi HTML web page ka skeleton hai. HTML mein hum tags ka use karte hain jo browser ko batate hain ki cheezein kaise dikhni chahiye.

### Technical Explanation
HTML is a markup language that uses tags to define the structure and content of web pages. Browsers parse HTML and render it visually.

### Simple Explanation
Socho tum ek ghar bana rahe ho. HTML us ghar ki deewarein, chhat, darwaze hai. Baad mein CSS (colour, paint) aur JavaScript (lights, fans) aayenge.

### Analogy 🏠
> HTML = House Structure (walls, roof, doors, rooms)
> CSS = House Decoration (paint, wallpaper, curtains)
> JavaScript = House Utilities (electricity, plumbing, appliances)

### Real World Example
Jab tum Google.com kholte ho, jo search bar, buttons, links dikhte hain - ye sab HTML se bana hai.

### Basic HTML Document
```html
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Mera Pehla Page</title>
</head>
<body>
    <h1>Namaste Duniya!</h1>
    <p>Yeh mera pehla HTML page hai.</p>
</body>
</html>
```

### Rules & Important Notes
1. HTML tags angle brackets `< >` mein likhe jaate hain
2. Most tags come in pairs: `<tag>` opening, `</tag>` closing
3. HTML is NOT case-sensitive but lowercase is standard
4. Always use `<!DOCTYPE html>` at the top
5. Indentation se code readable banta hai

---

## 1.2 📝 HTML Document Structure

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 30 mins |
| **Prerequisites** | What is HTML |

### Theory
Har HTML page ka ek specific structure hota hai. Yeh structure browser ko batata hai ki yeh ek HTML document hai.

### Code Syntax
```html
<!DOCTYPE html>                    <!-- Ye browser ko batata hai ki ye HTML5 hai -->
<html lang="en">                   <!-- Root element, poori document yahi hai -->
<head>                             <!-- Head mein meta info, title, links aate hain -->
    <meta charset="UTF-8">        <!-- Character encoding - UTF-8 sab languages support karta hai -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>      <!-- Browser tab mein dikhta hai -->
</head>
<body>                             <!-- Body mein sab kuch dikhta hai -->
    <h1>Heading</h1>
    <p>Paragraph</p>
</body>
</html>
```

### Line by Line Explanation
| Line | Code | Kya Hota Hai |
|------|------|-------------|
| 1 | `<!DOCTYPE html>` | Browser ko batata hai - "Yeh HTML5 document hai" |
| 2 | `<html>` | Yeh root element hai, sab kuch iske andar |
| 3 | `<head>` | Meta information ka container |
| 4 | `<meta charset="UTF-8">` | Hindi, English sab languages support karega |
| 5 | `<title>` | Browser tab mein dikhne wala text |
| 6 | `<body>` | Jo kuch user ko dikhega, yahi aata hai |

### Behind the Scenes 🔍
Jab browser HTML file read karta hai:
1. **Parsing** - Browser HTML tags ko read karta hai
2. **Tokenization** - Har tag ko token mein badalta hai
3. **DOM Tree** - Tags se ek tree structure banata hai (DOM = Document Object Model)
4. **Render** - DOM tree ko screen par paint karta hai

```
HTML File → Parser → DOM Tree → Render → Screen Display
```

---

## 1.3 📑 Heading Tags (h1 to h6)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 20 mins |
| **Prerequisites** | Document Structure |

### Definition
Headings titles aur subtitles ke liye use hote hain. `h1` sabse bada, `h6` sabse chhota.

### Roman English Explanation
Heading tags se hum page ke titles banate hain. Jaise newspaper mein headlines hote hain, waise hi. h1 sabse important heading hai, h6 sabse kam important. Google bhi h1 ko jyada importance deta hai.

### Code Syntax
```html
<h1>Main Heading (sirf ek baar use karo)</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Chhoti heading</h4>
<h5>Aur chhoti</h5>
<h6>Sabse chhoti heading</h6>
```

### Rules
1. ❌ Sirf EK h1 per page (SEO ke liye)
2. ✅ h1 se h6 tak hierarchy follow karo
3. ❌ Headings ko sirf bada font ke liye mat use karo
4. ✅ Headings meaningful honi chahiye

### Visual Size Comparison
```
# h1 = 32px (Sabse bada)
## h2 = 24px
### h3 = 18.72px
#### h4 = 16px
##### h5 = 13.28px
###### h6 = 10.72px (Sabse chhota)
```

### Example 1 (Beginner) - Simple Headings
```html
<!DOCTYPE html>
<html>
<head>
    <title>Headings Example</title>
</head>
<body>
    <h1>Meri Website</h1>
    <h2>Mere Baare Mein</h2>
    <h3>Meri Shiksha</h3>
    <h4>School</h4>
    <h5>Class 10th</h5>
    <h6>Subjects</h6>
</body>
</html>
```
**Dry Run:**
- Browser `<h1>` dekhta hai → 32px ka bada font banata hai
- Phir `<h2>` dekhta hai → 24px ka font
- Aise hi chhoti hoti jaati hai size
- Har heading apni line mein aati hai (block element)

### Example 2 (Beginner) - Article Structure
```html
<body>
    <h1>Chai Ke Fayde</h1>
    <h2>Chai Kyu Peeni Chahiye?</h2>
    <h3>Energy Badhaye</h3>
    <h3>Dimaag Sharp Kare</h3>
    <h2>Chai Ke Nuksan</h2>
    <h3>Neend Khatam</h3>
</body>
```

### Example 3 (Beginner) - Blog Layout
```html
<body>
    <h1>Code Duniya Blog</h1>
    <h2>HTML Kaise Sikhein</h2>
    <p>HTML seekhna bahut aasan hai...</p>
    <h2>CSS Kaise Sikhein</h2>
    <p>CSS se website sundar banti hai...</p>
</body>
```

### Example 4 (Beginner) - Menu Card
```html
<body>
    <h1>Dhaba Menu</h1>
    <h2>Veg Items</h2>
    <h3>Dal Tadka</h3>
    <h3>Paneer Butter Masala</h3>
    <h2>Non-Veg Items</h2>
    <h3>Chicken Curry</h3>
    <h3>Mutton Biryani</h3>
</body>
```

### Example 5 (Beginner) - Study Notes
```html
<body>
    <h1>Science Notes</h1>
    <h2>Physics</h2>
    <h3>Light</h3>
    <h4>Reflection</h4>
    <h5>Laws of Reflection</h5>
    <h3>Sound</h3>
    <h2>Chemistry</h2>
    <h3>Atoms</h3>
</body>
```

### SEO Impact
- Google `h1` ko page ka main topic samajhta hai
- `h2` ko subtopics
- Proper heading structure = better SEO ranking

### Memory Trick 🧠
> **"H1 se H6, jaane kya baat hai**
> **H1 bada, H6 chhota, yahi hai HTML ki raat hai"**

---

## 1.4 📄 Paragraph Tag `<p>`

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 15 mins |
| **Prerequisites** | Document Structure |

### Definition
`<p>` tag paragraphs banane ke liye use hota hai. Text ka ek block.

### Code Syntax
```html
<p>Yeh ek paragraph hai. Jitna bhi text hai, automatically wrap ho jayega.</p>
<p>Dusra paragraph. Dono ke beech auto space aayega.</p>
```

### Rules
- `<p>` ek block-level element hai (full width leta hai)
- Browser automatically margin add karta hai paragraphs ke beech
- `<p>` ke andar `<div>`, other `<p>` nahi daal sakte
- Text ko manually break karne ke liye `<br>` use karo

### Example
```html
<p>HTML seekhna bahut mazedaar hai. Aap apni website bana sakte hain.
   Kisi bhi topic par information daal sakte hain.</p>
<p>Yeh second paragraph hai. Dono ke beech browser space dega.</p>
```

---

## 1.5 🔗 Anchor Tag `<a>` (Links)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |
| **Prerequisites** | Paragraphs |

### Definition
`<a>` tag se hum links banate hain jo ek page se dusre page ya website par le jaate hain.

### Roman English Explanation
Anchor tag, jaise laptop ka anchor (dock) hota hai, waise hi yeh tag aapko ek jagah se doosri jagah le jaata hai. Jab user link par click karta hai, toh browser nayi URL par chala jaata hai.

### Code Syntax
```html
<!-- Basic Link -->
<a href="https://google.com">Google Par Jaao</a>

<!-- New Tab mein kholna -->
<a href="https://google.com" target="_blank">Nayi Tab Mein Khulega</a>

<!-- Email Link -->
<a href="mailto:hello@example.com">Email Bhejo</a>

<!-- Phone Link -->
<a href="tel:+911234567890">Call Karo</a>

<!-- Same Page Link (Anchor) -->
<a href="#section2">Section 2 Par Jaao</a>

<!-- Download Link -->
<a href="file.pdf" download="file.pdf">Download Karo</a>
```

### Attributes Table
| Attribute | Kaam | Example |
|-----------|------|---------|
| `href` | Link ka URL (destination) | `href="https://google.com"` |
| `target` | Kahan khulega | `target="_blank"` (new tab) |
| `download` | File download karega | `download="image.jpg"` |
| `rel` | Relationship | `rel="noopener noreferrer"` |
| `title` | Hover karne par dikhega | `title="Google par jaao"` |

### Important Rules
1. ❌ Link text meaningful rakho - "Click Here" mat likho
2. ✅ External links par `target="_blank"` + `rel="noopener"` use karo
3. ✅ Security ke liye `rel="noopener noreferrer"` important hai
4. ❌ Broken links mat chhodo (404 error aayega)

### Beginner Example - Navigation
```html
<nav>
    <a href="index.html">Ghar</a>
    <a href="about.html">Hamare Baare Mein</a>
    <a href="services.html">Sevayein</a>
    <a href="contact.html">Sampark Karein</a>
</nav>
```

### Security Tip ⚠️
`target="_blank"` use karne par `rel="noopener noreferrer"` jaroor daalo. Yeh `window.opener` API attack se bachata hai jahan nayi tab original page ko change kar sakti hai.

---

## 1.6 🖼️ Image Tag `<img>`

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |
| **Prerequisites** | Basic Tags |

### Definition
`<img>` tag web page par images dikhane ke liye use hota hai. Yeh self-closing tag hai (closing tag nahi hota).

### Code Syntax
```html
<img src="photo.jpg" alt="Meri Photo" width="300" height="200">
```

### Attributes
| Attribute | Required? | Kaam |
|-----------|-----------|------|
| `src` | ✅ Yes | Image ka path/URL |
| `alt` | ✅ Yes | Image nahi dikhi toh yeh text dikhega + accessibility |
| `width` | ❌ No | Width pixels mein |
| `height` | ❌ No | Height pixels mein |
| `loading` | ❌ No | `lazy` for lazy loading |
| `sizes` | ❌ No | Responsive sizes |
| `srcset` | ❌ No | Different resolutions |

### Image Formats
| Format | Use Case |
|--------|----------|
| JPEG/JPG | Photos (lossy compression) |
| PNG | Icons, transparent images |
| GIF | Animations |
| SVG | Icons, logos (scalable) |
| WebP | Modern format (small size) |
| AVIF | Latest format (best compression) |

### Beginner Example
```html
<img src="logo.png" alt="Code Duniya Logo" width="150">
<img src="profile.jpg" alt="User Profile Photo" class="profile-img">
<img src="banner.webp" alt="Website Banner" loading="lazy">
```

### Best Practices
1. ✅ Always add `alt` text for accessibility
2. ✅ Use `loading="lazy"` for images below the fold
3. ✅ Compress images before uploading
4. ✅ Use WebP/AVIF format for better performance
5. ✅ Specify width/height to prevent layout shift (CLS)

### Behind the Scenes 🔍
```
Browser encounters <img> tag
      ↓
Downloads image from src URL (async)
      ↓
Decodes image (JPEG/PNG/WebP decoder)
      ↓
Allocates space in layout
      ↓
Paints pixels on screen
      ↓
If alt text → shows if image fails
```

---

## 1.7 📋 Lists: Ordered (`<ol>`) & Unordered (`<ul>`)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 30 mins |
| **Prerequisites** | Basic Tags |

### Definition
Lists se hum items ko group kar sakte hain. **Unordered** (`<ul>`) - bullet points ke saath. **Ordered** (`<ol>`) - numbers ke saath.

### Code Syntax
```html
<!-- Unordered List (bullets) -->
<ul>
    <li>Samaan 1</li>
    <li>Samaan 2</li>
    <li>Samaan 3</li>
</ul>

<!-- Ordered List (numbers) -->
<ol>
    <li>Pehla Step</li>
    <li>Dusra Step</li>
    <li>Teesra Step</li>
</ol>

<!-- Description List -->
<dl>
    <dt>HTML</dt>
    <dd>Web page ka structure banata hai</dd>
    <dt>CSS</dt>
    <dd>Design aur styling karta hai</dd>
</dl>
```

### Beginner Example - Grocery List
```html
<h2>Kirana List</h2>
<ul>
    <li>Chawal - 5 kg</li>
    <li>Dal - 2 kg</li>
    <li>Tel - 1 liter</li>
    <li>Namak - 1 packet</li>
    <li>Chai Patti - 250 gm</li>
</ul>
```

### Beginner Example - Recipe Steps
```html
<h2>Chai Banane ka Tarika</h2>
<ol>
    <li>Paani garam karo</li>
    <li>Chai Patti daalo</li>
    <li>Doodh daalo</li>
    <li>Cheeni daalo</li>
    <li>2 minute ubaalo</li>
    <li>Chhaan kar piyo</li>
</ol>
```

### Nested Lists
```html
<ul>
    <li>Fruits
        <ul>
            <li>Aam</li>
            <li>Seb</li>
            <li>Kela</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Aloo</li>
            <li>Pyaz</li>
            <li>Tamatar</li>
        </ul>
    </li>
</ul>
```

### List Style Types
| Type | `ul` | `ol` |
|------|------|------|
| Default | disc (●) | numbers (1,2,3) |
| `list-style-type: circle` | ○ | - |
| `list-style-type: square` | ■ | - |
| `type="A"` | - | A, B, C |
| `type="a"` | - | a, b, c |
| `type="I"` | - | I, II, III |
| `type="i"` | - | i, ii, iii |

---

## 1.8 📊 Table Tag `<table>`

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Easy |
| **Time** | 45 mins |
| **Prerequisites** | Basic Tags |

### Definition
`<table>` tag data ko rows aur columns mein dikhane ke liye use hota hai.

### Roman English Explanation
Table ek grid hota hai jisme data rows aur columns mein arrange hota hai. Jaise Excel sheet, waise hi HTML table. `<tr>` = row, `<th>` = heading, `<td>` = data cell.

### Code Syntax
```html
<table>
    <caption>Student Marks</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Rahul</td>
            <td>95</td>
            <td>88</td>
        </tr>
        <tr>
            <td>Priya</td>
            <td>92</td>
            <td>96</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>187</td>
            <td>184</td>
        </tr>
    </tfoot>
</table>
```

### Table Elements
| Tag | Kaam | Full Form |
|-----|------|-----------|
| `<table>` | Table banata hai | - |
| `<tr>` | Table row | Table Row |
| `<th>` | Table header cell | Table Header |
| `<td>` | Table data cell | Table Data |
| `<caption>` | Table ka title | Caption |
| `<thead>` | Header section | Table Head |
| `<tbody>` | Body section | Table Body |
| `<tfoot>` | Footer section | Table Foot |
| `<colgroup>` | Column group | Column Group |
| `<col>` | Column properties | Column |

### Merging Cells
```html
<!-- colspan = multiple columns merge -->
<td colspan="2">Do column merge</td>

<!-- rowspan = multiple rows merge -->
<td rowspan="3">Teen rows merge</td>
```

### Beginner Example - Time Table
```html
<table border="1">
    <tr>
        <th>Day</th>
        <th>9-10 AM</th>
        <th>10-11 AM</th>
    </tr>
    <tr>
        <td>Monday</td>
        <td>Math</td>
        <td>Science</td>
    </tr>
    <tr>
        <td>Tuesday</td>
        <td>English</td>
        <td>Hindi</td>
    </tr>
</table>
```

### Intermediate Example - Marksheet
```html
<table border="1" cellpadding="10">
    <caption>Class 10 - Final Marksheet</caption>
    <thead>
        <tr>
            <th>Subject</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Physics</td>
            <td>70</td>
            <td>25</td>
            <td>95</td>
        </tr>
        <tr>
            <td>Chemistry</td>
            <td>68</td>
            <td>28</td>
            <td>96</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>Grand Total</th>
            <td colspan="2">Marks Obtained</td>
            <td>191</td>
        </tr>
    </tfoot>
</table>
```

### Important Notes
1. CSS se tables ko style karo, `border` attribute avoid karo
2. Caption table ka title batata hai (accessibility)
3. `scope` attribute in `<th>` helps screen readers
4. Avoid nested tables (performance hit)
5. Use `colspan`/`rowspan` carefully

---

## 1.9 📝 Forms (Basics)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Easy |
| **Time** | 45 mins |
| **Prerequisites** | Basic Tags |

### Definition
`<form>` tag user se input lene ke liye use hota hai. Jaise signup form, login form, contact form.

### Code Syntax
```html
<form action="/submit" method="POST">
    <label for="name">Naam:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <button type="submit">Submit</button>
</form>
```

### Form Attributes
| Attribute | Kaam |
|-----------|------|
| `action` | Data kahan jayega (URL) |
| `method` | GET ya POST |
| `enctype` | File upload ke liye `multipart/form-data` |
| `novalidate` | Browser validation band kare |
| `target` | Result kahan dikhe |

### Input Types
```html
<!-- Text Inputs -->
<input type="text">          <!-- Simple text -->
<input type="email">         <!-- Email validation -->
<input type="password">      <!-- Hidden text -->
<input type="number">        <!-- Numbers only -->
<input type="tel">           <!-- Phone number -->
<input type="url">           <!-- URL validation -->
<input type="search">        <!-- Search box -->

<!-- Choice Inputs -->
<input type="checkbox">      <!-- Multiple select -->
<input type="radio">         <!-- Single select -->

<!-- Date/Time -->
<input type="date">          <!-- Date picker -->
<input type="time">          <!-- Time picker -->
<input type="datetime-local"> <!-- Date + Time -->
<input type="month">         <!-- Month picker -->
<input type="week">          <!-- Week picker -->

<!-- Other -->
<input type="color">         <!-- Color picker -->
<input type="range">         <!-- Slider -->
<input type="file">          <!-- File upload -->
<input type="hidden">        <!-- Hidden data -->

<!-- Buttons -->
<input type="submit">        <!-- Submit button -->
<input type="reset">         <!-- Reset form -->
<input type="button">        <!-- Generic button -->
```

### Form Elements
```html
<!-- Textarea (multi-line) -->
<textarea rows="4" cols="50">Yahan likho...</textarea>

<!-- Select Dropdown -->
<select name="city">
    <option value="">--Select City--</option>
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
    <option value="bangalore">Bangalore</option>
</select>

<!-- Datalist (autocomplete) -->
<input list="cities" name="city">
<datalist id="cities">
    <option value="Delhi">
    <option value="Mumbai">
    <option value="Bangalore">
</datalist>

<!-- Fieldset + Legend -->
<fieldset>
    <legend>Personal Info</legend>
    <input type="text" name="name" placeholder="Naam">
    <input type="number" name="age" placeholder="Umar">
</fieldset>
```

### Beginner Example - Login Form
```html
<h2>Login Karein</h2>
<form>
    <label>Email:</label>
    <input type="email" name="email" required>
    <br>
    <label>Password:</label>
    <input type="password" name="password" required>
    <br>
    <button type="submit">Login</button>
</form>
```

### Beginner Example - Registration Form
```html
<form>
    <fieldset>
        <legend>Register Karein</legend>
        
        <label>Full Name *</label>
        <input type="text" name="fullname" required>
        
        <label>Email *</label>
        <input type="email" name="email" required>
        
        <label>Password *</label>
        <input type="password" name="password" required minlength="6">
        
        <label>Gender</label>
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female
        
        <label>City</label>
        <select name="city">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
        </select>
        
        <label>Message</label>
        <textarea name="message" rows="4"></textarea>
        
        <label>
            <input type="checkbox" name="agree" required>
            Main terms and conditions se sahmat hoon
        </label>
        
        <button type="submit">Register</button>
    </fieldset>
</form>
```

### Form Validation Attributes
| Attribute | Kaam |
|-----------|------|
| `required` | Field bharna mandatory |
| `minlength` | Minimum characters |
| `maxlength` | Maximum characters |
| `min` | Minimum value |
| `max` | Maximum value |
| `pattern` | Regex pattern match |
| `placeholder` | Hint text |

---

## 1.10 🎨 Text Formatting Tags

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 20 mins |

### All Text Tags
```html
<b>Bold text</b>              <!-- Visual bold -->
<strong>Important</strong>    <!-- Bold + semantic importance -->
<i>Italic</i>                 <!-- Visual italic -->
<em>Emphasized</em>           <!-- Italic + semantic emphasis -->
<u>Underlined</u>            <!-- Underline -->
<mark>Highlighted</mark>     <!-- Yellow highlight -->
<small>Small text</small>    <!-- Small font -->
<del>Deleted</del>           <!-- Strike-through -->
<ins>Inserted</ins>          <!-- Underline (inserted) -->
<sub>Subscript</sub>         <!-- Neeche (H₂O) -->
<sup>Superscript</sup>       <!-- Upar (x²) -->
<code>Code text</code>       <!-- Monospace font -->
<pre>Preformatted text</pre>  <!-- Space/enter preserve -->
<blockquote>Quote</blockquote> <!-- Indented quote -->
<q>Inline quote</q>          <!-- "Quote" with quotes -->
<abbr title="Full Form">HTML</abbr> <!-- Abbreviation -->
<address>Contact info</address> <!-- Italic address -->
<cite>Citation</cite>        <!-- Italic citation -->
<bdo dir="rtl">Right to left</bdo> <!-- Text direction -->
<br>                         <!-- Line break -->
<hr>                         <!-- Horizontal line -->
```

### Beginner Example
```html
<p>
    <strong>Important:</strong> HTML seekhna <em>bahut</em> easy hai.
    <mark>Yeh highlighted hai.</mark>
    x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>
    H<sub>2</sub>O
</p>
```

---

## 📚 Beginner Module - Complete Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | What is HTML? | ✅ Done |
| 2 | HTML Document Structure | ✅ Done |
| 3 | `<!DOCTYPE>` Declaration | ✅ Done |
| 4 | `<html>` Tag | ✅ Done |
| 5 | `<head>` Tag | ✅ Done |
| 6 | `<title>` Tag | ✅ Done |
| 7 | `<meta>` Tags | Next |
| 8 | `<body>` Tag | ✅ Done |
| 9 | Heading Tags (h1-h6) | ✅ Done |
| 10 | Paragraph Tag `<p>` | ✅ Done |
| 11 | Line Break `<br>` | ✅ Done |
| 12 | Horizontal Rule `<hr>` | ✅ Done |
| 13 | Text Formatting | ✅ Done |
| 14 | Comments `<!-- -->` | ✅ Done |
| 15 | Anchor Tag `<a>` | ✅ Done |
| 16 | Image Tag `<img>` | ✅ Done |
| 17 | Unordered List `<ul>` | ✅ Done |
| 18 | Ordered List `<ol>` | ✅ Done |
| 19 | Description List `<dl>` | ✅ Done |
| 20 | Table Tag `<table>` | ✅ Done |
| 21 | Form Basics `<form>` | ✅ Done |
| 22 | Input Types | ✅ Done |
| 23 | Buttons | ✅ Done |
| 24 | Textarea | ✅ Done |
| 25 | Select/Dropdown | ✅ Done |
| 26 | Label Tag | ✅ Done |
| 27 | Fieldset & Legend | ✅ Done |
| 28 | Div Tag `<div>` | Next |
| 29 | Span Tag `<span>` | Next |
| 30 | HTML Attributes | Next |
| 31 | IDs & Classes | Next |
| 32 | Inline vs Block Elements | Next |
| 33 | HTML Entities | Next |
| 34 | URL Encoding | Next |
| 35 | File Paths | Next |

---

## 7.29 📦 Div Tag `<div>`

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 15 mins |
| **Prerequisites** | Basic Tags |

### Definition
`<div>` ek container hai. Iska koi specific meaning nahi hai. Yeh sirf group karne ke liye hai.

### Code Syntax
```html
<div>
    <h2>Section Title</h2>
    <p>Is section ka content</p>
</div>
```

### Roman English Explanation
`<div>` ko ek khali dibba samjho. Isme tum kuch bhi daal sakte ho - text, images, other divs. CSS ke saath ise style karte hain. Modern HTML mein semantic tags (like `<section>`, `<article>`) jyada use hote hain.

---

## 7.30 📝 Span Tag `<span>`

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 15 mins |

### Definition
`<span>` inline container hai. Yeh text ke beech mein kuch part ko target karne ke liye use hota hai.

### Code Syntax
```html
<p>Yeh <span style="color: red">laal</span> text hai.</p>
```

### Div vs Span
| Feature | `<div>` | `<span>` |
|---------|---------|----------|
| Type | Block-level | Inline |
| Width | 100% | Content ke hisaab se |
| Line break | Hota hai | Nahi hota |
| Use | Sections, layouts | Small text parts |

---

## 7.31 🏷️ HTML Attributes

### Common Attributes
| Attribute | Use |
|-----------|-----|
| `id` | Unique identifier (1 page mein 1 baar) |
| `class` | Group identifier (multiple use) |
| `style` | Inline CSS |
| `title` | Tooltip text |
| `lang` | Language |
| `dir` | Text direction (ltr/rtl) |
| `hidden` | Element chhupana |
| `tabindex` | Tab order |
| `data-*` | Custom data attributes |

---

## 7.32 🔵 Inline vs Block Elements

| Block Elements | Inline Elements |
|---------------|----------------|
| Full width lete hain | Sirf content width |
| New line se start | Same line mein |
| `<div>`, `<p>`, `<h1>`-`<h6>` | `<span>`, `<a>`, `<img>` |
| `<ul>`, `<ol>`, `<li>` | `<b>`, `<i>`, `<strong>` |
| `<table>`, `<form>` | `<input>`, `<label>` |
| `<header>`, `<footer>` | `<code>`, `<small>` |
| `<section>`, `<article>` | `<sub>`, `<sup>` |

---

## 7.33 🔣 HTML Entities

Special characters ke liye entities use karte hain.

| Entity | Result |
|--------|--------|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&quot;` | " |
| `&apos;` | ' |
| `&nbsp;` | Space (non-breaking) |
| `&copy;` | © |
| `&reg;` | ® |
| `&trade;` | ™ |
| `&hearts;` | ♥ |
| `&#8377;` | ₹ (Rupee) |
| `&#x1F600;` | 😀 |

---

## 7.34 📁 File Paths

| Path Type | Example | Explanation |
|-----------|---------|-------------|
| Same folder | `image.jpg` | Current folder mein |
| Subfolder | `images/photo.jpg` | Images folder ke andar |
| Parent folder | `../style.css` | Ek folder upar |
| Root relative | `/images/logo.png` | Root se start |
| Absolute URL | `https://example.com/a.jpg` | Full URL |

---

## 7.35 💡 Beginner Module - Practice Questions

### MCQ Questions
1. **HTML ka full form kya hai?**
   - a) HyperText Markup Language ✅
   - b) HighText Machine Language
   - c) HyperText Making Language
   - d) Home Tool Markup Language

2. **Sabse important heading kaunsi hai?**
   - a) `<h6>`
   - b) `<h1>` ✅
   - c) `<heading>`
   - d) `<head>`

3. **Image tag mein required attribute kaunsa hai?**
   - a) src ✅
   - b) href
   - c) link
   - d) url

4. **Link new tab mein kholne ke liye kaunsa attribute?**
   - a) `target="_new"`
   - b) `target="_blank"` ✅
   - c) `open="new"`
   - d) `link="new"`

5. **Ordered list ka tag kya hai?**
   - a) `<ul>`
   - b) `<ol>` ✅
   - c) `<li>`
   - d) `<list>`

### Flash Cards 🃏
```
Q: HTML ka full form?
A: HyperText Markup Language

Q: Self-closing tag ka example?
A: <img>, <br>, <hr>, <input>

Q: Block vs Inline?
A: Block = full width, Inline = content width

Q: <a> tag mein href kya hai?
A: Link ka destination URL

Q: <img> ka alt attribute kyun?
A: Image load na ho to text dikhe + blind users ke liye
```

### Revision Notes 📝
```
📌 HTML BASICS CHEAT SHEET

<!DOCTYPE html>     → HTML5 declare
<html>              → Root element
<head>              → Meta info
<body>              → Visible content

HEADINGS: h1 (biggest) → h6 (smallest)
LINKS: <a href="url">text</a>
IMAGES: <img src="url" alt="text">
LISTS: <ul> (bullets), <ol> (numbers)
TABLES: <table> → <tr> → <td>/<th>
FORMS: <form> → <input> → <button>
```

---

# 🔵 MODULE 2: INTERMEDIATE HTML5

---

## 2.1 🏗️ Semantic HTML

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 60 mins |
| **Prerequisites** | Beginner Module |

### Definition
Semantic HTML ka matlab hai meaningful tags jo content ka purpose batate hain. Jaise `<div>` ko chhodo, `<header>`, `<nav>`, `<main>` use karo.

### Roman English Explanation
Semantic ka matlab hai "meaning". Semantic HTML tags se browser aur developer dono samajh jate hain ki yeh part kya hai. Jaise `<nav>` dekhkar pata chal jata hai ki yeh navigation hai, `<header>` dekhkar pata chal jata hai ki yeh header hai. Isse SEO bhi better hota hai aur screen readers bhi ache se padh paate hain.

### All Semantic Tags

| Tag | Meaning | Use |
|-----|---------|-----|
| `<header>` | Page/section ka header | Logo, navigation, intro |
| `<nav>` | Navigation links | Menu, navbar |
| `<main>` | Main content (1 per page) | Core page content |
| `<article>` | Independent content | Blog post, news |
| `<section>` | Thematic group | Chapter, tab content |
| `<aside>` | Side content | Sidebar, related links |
| `<footer>` | Page/section footer | Copyright, contact |
| `<figure>` | Media with caption | Images, diagrams |
| `<figcaption>` | Figure caption | Image ka description |
| `<details>` | Expandable details | Accordion, FAQ |
| `<summary>` | Details heading | Visible when collapsed |
| `<time>` | Date/time | `datetime` attribute |
| `<mark>` | Highlighted text | Search results |

### Non-Semantic vs Semantic
```html
<!-- ❌ BAD: Pure divs -->
<div class="header">
    <div class="nav">...</div>
</div>
<div class="main">
    <div class="article">...</div>
</div>
<div class="footer">...</div>

<!-- ✅ GOOD: Semantic HTML -->
<header>
    <nav>...</nav>
</header>
<main>
    <article>...</article>
</main>
<footer>...</footer>
```

### Complete Semantic Layout
```html
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h1>Article Title</h1>
                <time datetime="2026-07-07">July 7, 2026</time>
            </header>
            
            <section>
                <h2>Introduction</h2>
                <p>Article content here...</p>
            </section>
            
            <section>
                <h2>Main Points</h2>
                <p>More content...</p>
            </section>
            
            <footer>
                <p>Written by Author</p>
            </footer>
        </article>
        
        <aside>
            <h3>Related Articles</h3>
            <ul>
                <li><a href="#">Article 1</a></li>
                <li><a href="#">Article 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2026 Code Duniya</p>
    </footer>
</body>
```

### SEO Benefits
1. Google semantic tags ko rank signals ke liye use karta hai
2. `<article>` Google Search ke "Top Stories" mein dikh sakta hai
3. Proper heading hierarchy (`h1` → `h6`) better indexing karti hai
4. Screen readers (blind users) easily navigate kar sakte hain

### Best Practices
1. ✅ Sirf EK `<main>` per page
2. ✅ `<header>` / `<footer>` multiple ho sakte hain (article ke andar bhi)
3. ✅ `<nav>` main navigation ke liye, har link ke liye nahi
4. ✅ `<aside>` indirectly related content ke liye
5. ✅ `<article>` standalone content jo RSS feed mein bheja ja sake

---

## 2.2 🎵 Multimedia: Audio & Video

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 45 mins |

### Audio Tag
```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Aapka browser audio support nahi karta
</audio>
```

### Video Tag
```html
<video controls width="640" height="360" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track src="subtitles.vtt" kind="subtitles" srclang="hi" label="Hindi">
    Aapka browser video support nahi karta
</video>
```

### Attributes
| Attribute | Audio | Video | Kaam |
|-----------|-------|-------|------|
| `controls` | ✅ | ✅ | Play/pause buttons dikhata hai |
| `autoplay` | ✅ | ✅ | Apne aap chale |
| `loop` | ✅ | ✅ | Repeat kare |
| `muted` | ✅ | ✅ | Awaaz band |
| `preload` | ✅ | ✅ | Pehle se load kare |
| `poster` | ❌ | ✅ | Thumbnail image |
| `width`/`height` | ❌ | ✅ | Size |
| `src` | ✅ | ✅ | File URL |

### Beginner Example - Music Player
```html
<h2>Mera Gaana</h2>
<audio controls>
    <source src="mera-gaana.mp3" type="audio/mpeg">
</audio>
```

### Intermediate Example - Video with Subtitles
```html
<video controls width="800">
    <source src="tutorial.mp4" type="video/mp4">
    <source src="tutorial.webm" type="video/webm">
    <track src="hindi.vtt" kind="subtitles" srclang="hi" label="Hindi">
    <track src="english.vtt" kind="subtitles" srclang="en" label="English">
</video>
```

### Supported Formats 2026
| Format | Type | Browser Support |
|--------|------|----------------|
| MP3 | Audio | ✅ All |
| AAC | Audio | ✅ All |
| OGG | Audio | ✅ Firefox, Chrome |
| WAV | Audio | ✅ All |
| FLAC | Audio | ✅ Chrome, Firefox |
| MP4 (H.264) | Video | ✅ All |
| WebM | Video | ✅ Chrome, Firefox |
| AV1 | Video | ✅ Chrome, Firefox |
| HEVC | Video | ✅ Safari, Edge |

---

## 2.3 🗺️ HTML APIs

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 90 mins |

### 2.3.1 Geolocation API
User ki location pata karne ke liye.

```html
<button onclick="getLocation()">Meri Location Dikhao</button>
<p id="location"></p>

<script>
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "Geolocation supported nahi hai";
    }
}

function showPosition(position) {
    document.getElementById("location").innerHTML = 
        "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User ne permission nahi di");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location available nahi");
            break;
        case error.TIMEOUT:
            alert("Time ho gaya");
            break;
    }
}
</script>
```

### 2.3.2 Drag & Drop API

```html
<div id="drag1" draggable="true" ondragstart="drag(event)">
    Muje Pakdo
</div>
<div id="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)">
    Yahan Chhodo
</div>

<script>
function allowDrop(e) {
    e.preventDefault();
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}
</script>
```

### 2.3.3 Web Storage API
```html
<!-- localStorage (data kabhi nahi hat-ta) -->
<script>
    // Save karna
    localStorage.setItem("username", "Rahul");
    localStorage.setItem("theme", "dark");
    
    // Read karna
    const name = localStorage.getItem("username"); // "Rahul"
    
    // Delete karna
    localStorage.removeItem("theme");
    
    // Sab delete
    localStorage.clear();
    
    // Object save karna
    const user = {name: "Rahul", age: 20};
    localStorage.setItem("user", JSON.stringify(user));
    
    // Object read karna
    const savedUser = JSON.parse(localStorage.getItem("user"));
</script>

<!-- sessionStorage (tab band hote hi hat jayega) -->
<script>
    sessionStorage.setItem("temp", "Yeh tab band hote hi delete");
</script>
```

### 2.3.4 History API
Browser navigation control karne ke liye.

```javascript
// Naya history entry add karna
history.pushState({page: 1}, "Title", "?page=1");

// History mein aage-piche
history.back();     // Ek page piche
history.forward();  // Ek page aage
history.go(-2);     // Do page piche

// PopState event (jab user back/forward kare)
window.addEventListener('popstate', (event) => {
    console.log("Location: " + document.location + ", State: " + JSON.stringify(event.state));
});
```

### 2.3.5 Canvas API
Graphics draw karne ke liye.

```html
<canvas id="myCanvas" width="500" height="300" style="border:1px solid black"></canvas>

<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Rectangle draw
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 80);
    
    // Circle draw
    ctx.beginPath();
    ctx.arc(250, 150, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    
    // Text draw
    ctx.font = '20px Arial';
    ctx.fillStyle = 'green';
    ctx.fillText('Namaste Canvas!', 300, 100);
    
    // Line draw
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 300);
    ctx.stroke();
</script>
```

### 2.3.6 SVG (Scalable Vector Graphics)
```html
<svg width="200" height="200">
    <!-- Circle -->
    <circle cx="100" cy="100" r="50" fill="red" stroke="black" stroke-width="3"/>
    
    <!-- Rectangle -->
    <rect x="20" y="20" width="60" height="60" fill="blue"/>
    
    <!-- Line -->
    <line x1="0" y1="0" x2="200" y2="200" stroke="green" stroke-width="4"/>
    
    <!-- Text -->
    <text x="50" y="180" fill="purple" font-size="20">SVG Text</text>
    
    <!-- Path -->
    <path d="M10 80 Q 95 10 180 80" stroke="orange" fill="transparent" stroke-width="5"/>
</svg>
```

### Canvas vs SVG
| Feature | Canvas | SVG |
|---------|--------|-----|
| Type | Raster (pixel based) | Vector (shape based) |
| Resolution | Resolution dependent | Resolution independent |
| Performance | Better for many objects | Better for small objects |
| Event Handling | Manual (coordinates) | Automatic (per element) |
| Animation | Frame-based | CSS/JS animations |
| Use Case | Games, image processing | Icons, logos, charts |

---

## 2.4 🌐 Iframe Tag

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 20 mins |

### Definition
`<iframe>` ek page ke andar doosra page dikhata hai (nested browsing context).

### Code Syntax
```html
<iframe src="https://example.com" 
        width="800" 
        height="600" 
        title="Example Site"
        allow="fullscreen"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin">
</iframe>
```

### Common Uses
1. **YouTube Videos Embed**
```html
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

2. **Google Maps**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..." 
    width="600" height="450" 
    allowfullscreen="" loading="lazy">
</iframe>
```

### Sandbox Attributes
| Value | Allowed |
|-------|---------|
| (empty) | Sab allow |
| `allow-scripts` | JavaScript chale |
| `allow-same-origin` | Same origin access |
| `allow-forms` | Forms submit kar sake |
| `allow-popups` | Popup khol sake |
| `allow-modals` | Alerts dikha sake |

### Security Warning ⚠️
- `sandbox` attribute bina iframe dangerous ho sakta hai
- Third-party iframes se malware aa sakta hai
- Clickjacking attacks ka risk
- Sirf trusted sources se hi iframe use karo

---

## 2.5 ♿ Web Accessibility (A11Y)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 60 mins |

### Definition
Accessibility ka matlab hai ki aapki website HAR KOI use kar sake - including blind, deaf, physically disabled people.

### Roman English Explanation
Accessibility ko "a11y" bhi kehte hain (a ke baad 11 letters, y). Iska matlab hai aapki website aisi banao ki jo log screen reader use karte hain, jo keyboard se navigate karte hain, jo deaf hain - sab use kar sakein.

### ARIA (Accessible Rich Internet Applications)
```html
<!-- ARIA Labels -->
<button aria-label="Search">🔍</button>

<!-- ARIA Roles -->
<nav role="navigation">...</nav>
<div role="alert">Error message</div>
<div role="dialog">Popup window</div>

<!-- ARIA States -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" aria-hidden="true">Menu items...</div>

<!-- ARIA Live Regions -->
<div aria-live="polite">New content automatically announced</div>
```

### Screen Reader Best Practices
```html
<!-- Skip Navigation Link -->
<a href="#main-content" class="skip-link">Main content par jaayein</a>

<!-- Proper heading structure -->
<h1>Page Title</h1>
<h2>Section 1</h2>
<h3>Subsection 1.1</h3>

<!-- Form labels -->
<label for="name">Aapka Naam:</label>
<input type="text" id="name" name="name">

<!-- Alt text for images -->
<img src="chart.png" alt="Sales chart showing 2026 growth">

<!-- Hidden but accessible text -->
<span class="sr-only">Screen reader ke liye hidden text</span>
```

### Keyboard Navigation
```html
<!-- Tabindex -->
<div tabindex="0">Tab se accessible</div>
<div tabindex="-1">JavaScript se focus ho sakta hai</div>
<button tabindex="1">Custom order</button>

<!-- Accesskey (keyboard shortcut) -->
<a href="contact.html" accesskey="c">Contact (Alt + C)</a>
```

### Color & Contrast
- Minimum contrast ratio: **4.5:1** for normal text
- Minimum contrast ratio: **3:1** for large text (18px+)
- Never convey information through color alone

### WCAG Guidelines (4 Principles)
```
P - Perceivable: Sab dekh/sun sakte hain
O - Operable: Sab navigate kar sakte hain
U - Understandable: Sab samajh sakte hain
R - Robust: Sab technologies par kaam kare
```

---

## 2.6 🔍 SEO Basics

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 45 mins |

### Meta Tags for SEO
```html
<head>
    <!-- Basic SEO -->
    <title>Code Duniya - Programming Seekho | 2026</title>
    <meta name="description" content="HTML, CSS, JavaScript seekhein Roman English mein. Free programming courses 2026.">
    <meta name="keywords" content="programming, html, css, javascript, coding, roman english">
    <meta name="author" content="Code Duniya">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph (Social Media) -->
    <meta property="og:title" content="Code Duniya">
    <meta property="og:description" content="Free Programming Courses">
    <meta property="og:image" content="https://codeduniya.com/og-image.jpg">
    <meta property="og:url" content="https://codeduniya.com">
    <meta property="og:type" content="website">
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Code Duniya">
    <meta name="twitter:description" content="Free Programming Courses">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://codeduniya.com/page/">
    
    <!-- Language -->
    <meta http-equiv="content-language" content="hi">
</head>
```

### Structured Data (Schema.org)
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HTML5 Complete Course",
    "description": "Learn HTML5 from beginner to pro",
    "provider": {
        "@type": "Organization",
        "name": "Code Duniya",
        "url": "https://codeduniya.com"
    },
    "educationalLevel": "Beginner",
    "teaches": "HTML5, Web Development"
}
</script>
```

### SEO Tips
1. ✅ Unique `<title>` har page ke liye
2. ✅ Meta description 150-160 characters
3. ✅ Semantic HTML structure
4. ✅ Heading hierarchy proper
5. ✅ Image alt text
6. ✅ Internal linking
7. ✅ Mobile friendly
8. ✅ Fast loading speed
9. ✅ Sitemap.xml submit karo
10. ✅ robots.txt theek karo

---

## 2.7 📱 Responsive Design Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### What This Does
- `width=device-width` → Device ki width ke hisaab se page set karo
- `initial-scale=1.0` → Zoom level 100%
- Bina iske mobile par page bahut chhota dikhega

---

## 🔵 Intermediate Module - Complete Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | Semantic HTML | ✅ Done |
| 2 | Audio Tag | ✅ Done |
| 3 | Video Tag | ✅ Done |
| 4 | Geolocation API | ✅ Done |
| 5 | Drag & Drop API | ✅ Done |
| 6 | Web Storage API | ✅ Done |
| 7 | History API | ✅ Done |
| 8 | Canvas API | ✅ Done |
| 9 | SVG | ✅ Done |
| 10 | Iframe | ✅ Done |
| 11 | ARIA & Accessibility | ✅ Done |
| 12 | SEO Meta Tags | ✅ Done |
| 13 | Open Graph Tags | ✅ Done |
| 14 | Structured Data | ✅ Done |
| 15 | Viewport Meta | ✅ Done |
| 16 | Character Encoding | ✅ Done |
| 17 | `<picture>` Element | Next |
| 18 | `<source>` Element | Next |
| 19 | Responsive Images | Next |
| 20 | `srcset` & `sizes` | Next |
| 21 | `<figure>` & `<figcaption>` | ✅ Done |
| 22 | `<details>` & `<summary>` | Next |
| 23 | `<dialog>` Element | Next |
| 24 | `<template>` Element | Next |
| 25 | Data Attributes | Next |
| 26 | Microdata | Next |
| 27 | HTML5 Form Validation | Next |
| 28 | Form Input Patterns | Next |
| 29 | Content Editable | Next |
| 30 | Spellcheck Attribute | Next |
| 31 | Download Attribute | Next |
| 32 | `<noscript>` Tag | Next |
| 33 | `<wbr>` Tag | Next |
| 34 | `<bdi>` Tag | Next |
| 35 | `<progress>` Element | Next |
| 36 | `<meter>` Element | Next |
| 37 | `<output>` Element | Next |
| 38 | Embed & Object | Next |
| 39 | Param Tag | Next |
| 40 | Link Relations | Next |

---

## 2.8 🖼️ Responsive Images

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |

### srcset & sizes
Different screen sizes ke liye different images.

```html
<img 
    src="image-800.jpg"
    srcset="
        image-400.jpg 400w,
        image-800.jpg 800w,
        image-1200.jpg 1200w,
        image-2000.jpg 2000w
    "
    sizes="
        (max-width: 600px) 100vw,
        (max-width: 1200px) 50vw,
        33vw
    "
    alt="Responsive Image"
    loading="lazy"
>
```

### Picture Element
```html
<picture>
    <!-- WebP sabse modern -->
    <source srcset="image.avif" type="image/avif">
    <source srcset="image.webp" type="image/webp">
    <!-- Fallback JPEG -->
    <img src="image.jpg" alt="My Image" loading="lazy">
</picture>
```

### Art Direction
```html
<picture>
    <!-- Mobile: portrait crop -->
    <source media="(max-width: 600px)" srcset="mobile.jpg">
    <!-- Tablet: landscape crop -->
    <source media="(max-width: 1200px)" srcset="tablet.jpg">
    <!-- Desktop: full image -->
    <img src="full.jpg" alt="My Image">
</picture>
```

---

## 2.9 🎯 Details & Summary Element

```html
<details>
    <summary>Yahan Click Karke Expand Karein</summary>
    <p>Yeh hidden content hai jo click karne par dikhega.</p>
    <ul>
        <li>Point 1</li>
        <li>Point 2</li>
    </ul>
</details>

<!-- Open by default -->
<details open>
    <summary>FAQ: HTML kya hai?</summary>
    <p>HTML ek markup language hai web pages banane ke liye.</p>
</details>
```

---

## 2.10 💬 Dialog Element

```html
<dialog id="myDialog">
    <h2>Important Message</h2>
    <p>Yeh ek dialog box hai!</p>
    <button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">
    Dialog Kholo
</button>

<!-- Open by default -->
<dialog open>
    <p>Yeh dialog khula hua hai</p>
</dialog>
```

### Dialog Methods
| Method | Kaam |
|--------|------|
| `.show()` | Dialog dikhata hai (bina backdrop) |
| `.showModal()` | Modal dialog (backdrop ke saath) |
| `.close()` | Dialog band karta hai |

---

## 2.11 📦 Template Element

```html
<template id="cardTemplate">
    <div class="card">
        <img class="card-img" src="" alt="">
        <div class="card-body">
            <h3 class="card-title"></h3>
            <p class="card-text"></p>
        </div>
    </div>
</template>

<script>
// Template ko clone karke use karna
const template = document.getElementById('cardTemplate');
const clone = template.content.cloneNode(true);

clone.querySelector('.card-title').textContent = 'Rahul';
clone.querySelector('.card-text').textContent = 'Student';

document.body.appendChild(clone);
</script>
```

---

## 2.12 📊 Progress & Meter

```html
<!-- Progress Bar -->
<label>Download Progress:</label>
<progress value="70" max="100">70%</progress>

<!-- Meter (gauge) -->
<label>Temperature:</label>
<meter value="30" min="0" max="100" low="20" high="80" optimum="25">30°C</meter>
```

---

## 2.13 🔤 HTML5 Form Validation (Advanced)

```html
<form novalidate>
    <input type="text" 
           pattern="[A-Za-z ]{3,50}" 
           title="Sirf letters aur spaces (3-50 characters)"
           required>
           
    <input type="text" 
           minlength="10" 
           maxlength="10" 
           pattern="[0-9]{10}"
           placeholder="Phone: 9876543210">
           
    <input type="password"
           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
           title="Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number">
</form>

<!-- Custom Validation -->
<script>
const form = document.querySelector('form');
const email = document.getElementById('email');

email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Sahi email daalo!');
    } else {
        email.setCustomValidity('');
    }
});

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
});
</script>
```

---

## 2.14 🌍 Microdata & Structured Data

```html
<!-- Person Microdata -->
<div itemscope itemtype="https://schema.org/Person">
    <h1 itemprop="name">Rahul Sharma</h1>
    <p itemprop="jobTitle">Web Developer</p>
    <p itemprop="telephone">+91-9876543210</p>
    <a href="mailto:rahul@example.com" itemprop="email">Email</a>
</div>

<!-- Product Microdata -->
<div itemscope itemtype="https://schema.org/Product">
    <h2 itemprop="name">Laptop</h2>
    <p itemprop="description">16GB RAM, 512GB SSD</p>
    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <span itemprop="price">49999</span>
        <span itemprop="priceCurrency">INR</span>
    </span>
</div>

<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
    <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
        <meta itemprop="position" content="1">
    </span>
    > 
    <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="/courses" itemprop="item"><span itemprop="name">Courses</span></a>
        <meta itemprop="position" content="2">
    </span>
    > 
    <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <span itemprop="name">HTML5</span>
        <meta itemprop="position" content="3">
    </span>
</nav>
```

---

## 📚 Intermediate Module - Practice Questions

### Flash Cards
```
Q: Semantic HTML kya hai?
A: Meaningful tags jo content ka purpose batate hain

Q: Canvas vs SVG?
A: Canvas = pixel based, SVG = vector based

Q: localStorage vs sessionStorage?
A: localStorage = permanent, sessionStorage = tab band hote delete

Q: ARIA ka full form?
A: Accessible Rich Internet Applications

Q: <details> tag kya karta hai?
A: Expandable/collapsible content banata hai
```

---

# 🟠 MODULE 3: ADVANCED HTML5

---

## 3.1 🌓 Shadow DOM

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 90 mins |

### Definition
Shadow DOM ek way hai jisse aap elements ko encapsulate kar sakte hain. Iska matlab element ke styles aur structure page ke baaki hisse se alag (isolated) rehta hai.

### Roman English Explanation
Shadow DOM ko ek "private room" samjho. Is room mein jo bhi hai, bahar se koi dekh nahi sakta aur na hi affect kar sakta hai. Aapne bahar CSS bhi laga di to shadow DOM ke andar ka element affect nahi hoga. Yeh Web Components ka important part hai.

### Code Syntax
```html
<!-- Custom element with shadow DOM -->
<script>
class MyComponent extends HTMLElement {
    constructor() {
        super();
        
        // Shadow DOM create karo
        const shadow = this.attachShadow({mode: 'open'});
        
        // Shadow DOM ke andar styles - yeh bahar se affect nahi honge
        shadow.innerHTML = `
            <style>
                p { color: red; font-size: 20px; }
                .box { 
                    background: yellow; 
                    padding: 20px; 
                    border: 2px solid black;
                }
            </style>
            <div class="box">
                <p>Yeh Shadow DOM ke andar hai!</p>
                <slot></slot>  <!-- Yahan bahar ka content aayega -->
            </div>
        `;
    }
}

customElements.define('my-component', MyComponent);
</script>

<my-component>
    <p>Yeh bahar ka hai - but slot mein dikhega</p>
</my-component>
```

### Shadow DOM Modes
| Mode | Meaning |
|------|---------|
| `open` | JavaScript se accessible (`element.shadowRoot`) |
| `closed` | Accessible nahi (`element.shadowRoot` = null) |

### Shadow DOM Tree Structure
```
Light DOM (main document)
    └── <my-component>
            └── #shadow-root (open)
                    ├── <style> (encapsulated)
                    ├── <div class="box">
                    │       ├── <p>Shadow DOM content</p>
                    │       └── <slot> → Light DOM content
                    └── </div>
```

### Important Points
1. Shadow DOM styles **leak nahi hoti** bahar
2. Bahar ki CSS **affect nahi karti** shadow DOM ko
3. `:host` selector se shadow component ko style kar sakte hain
4. `::slotted()` se slotted content ko style kar sakte hain
5. CSS custom properties (variables) shadow DOM mein penetrate karti hain

---

## 3.2 🧩 Web Components

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 120 mins |

### Definition
Web Components teen technologies ka combination hai: **Custom Elements**, **Shadow DOM**, aur **HTML Templates**. Inke saath aap reusable components bana sakte hain jo kisi bhi framework ke bina kaam karein.

### Roman English Explanation
Web Components se aap apne khud ke HTML tags bana sakte hain. Jaise `<button>`, `<input>` built-in hote hain, waise hi aap `<my-button>`, `<app-header>` jaise custom tags bana sakte hain. Ye components kisi bhi project mein reuse ho sakte hain - chahe woh React ho, Vue ho, ya vanilla JavaScript.

### Complete Web Component Example
```html
<!-- Define Component -->
<script>
class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    
    // Lifecycle: element DOM mein add hone par
    connectedCallback() {
        this.render();
    }
    
    // Lifecycle: attribute change hone par
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    
    // Kaunse attributes observe karne hain
    static get observedAttributes() {
        return ['name', 'avatar', 'role'];
    }
    
    render() {
        const name = this.getAttribute('name') || 'Guest';
        const avatar = this.getAttribute('avatar') || 'default.jpg';
        const role = this.getAttribute('role') || 'Student';
        
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 2px solid #ddd;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 10px;
                    display: inline-block;
                    text-align: center;
                }
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
                .name {
                    font-size: 24px;
                    font-weight: bold;
                    margin: 10px 0;
                }
                .role {
                    color: #666;
                }
            </style>
            <div class="card">
                <img src="${avatar}" alt="${name}">
                <div class="name">${name}</div>
                <div class="role">${role}</div>
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('user-card', UserCard);
</script>

<!-- Use Component -->
<user-card name="Rahul Sharma" 
           avatar="rahul.jpg" 
           role="Web Developer">
    <button onclick="alert('Hi!')">Say Hello</button>
</user-card>

<user-card name="Priya Singh" role="UI Designer"></user-card>
```

### Custom Element Lifecycle
| Method | Called When |
|--------|-------------|
| `constructor()` | Element create hota hai |
| `connectedCallback()` | DOM mein add hota hai |
| `disconnectedCallback()` | DOM se remove hota hai |
| `attributeChangedCallback(name, old, new)` | Attribute change hota hai |
| `adoptedCallback()` | Naye document mein move hota hai |

### Web Component Benefits
1. ✅ **Reusable** - Kahi bhi use karo
2. ✅ **Framework agnostic** - React/Vue/Angular sab mein kaam karega
3. ✅ **Encapsulated** - Styles aur behavior isolated
4. ✅ **Standard** - Native browser feature, koi library nahi chahiye
5. ✅ **Interoperable** - Different tech stacks ke beech share karo

---

## 3.3 🛡️ HTML Security

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 60 mins |

### XSS (Cross-Site Scripting) Prevention
```html
<!-- ❌ Vulnerable -->
<div id="output"></div>
<script>
    const userInput = "<script>alert('hack!')</script>";
    document.getElementById('output').innerHTML = userInput; // BAD!
</script>

<!-- ✅ Safe -->
<script>
    const userInput = "<script>alert('hack!')</script>";
    document.getElementById('output').textContent = userInput; // GOOD!
    
    // Ya phir sanitize karo
    function escapeHTML(str) {
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;');
    }
</script>
```

### Content Security Policy (CSP)
```html
<!-- Sirf same origin se scripts allow -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">

<!-- Specific sources allow -->
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' https://apis.google.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' https://images.com data:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://api.example.com;
    frame-src 'none';
">
```

### Other Security Measures
```html
<!-- Clickjacking Prevention -->
<meta http-equiv="X-Frame-Options" content="DENY">

<!-- XSS Protection (deprecated but useful) -->
<meta http-equiv="X-XSS-Protection" content="1; mode=block">

<!-- MIME type sniffing -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">

<!-- Referrer Policy -->
<meta name="referrer" content="strict-origin-when-cross-origin">

<!-- Permissions Policy -->
<meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(self)">
```

### Security Checklist ✅
1. ✅ Always use `textContent` instead of `innerHTML` with user data
2. ✅ Validate all input on server-side too
3. ✅ Use CSP headers
4. ✅ Sanitize HTML with DOMPurify library
5. ✅ Never trust user input
6. ✅ Use HTTPS
7. ✅ Implement proper CORS policies
8. ✅ Regular security audits

---

## 3.4 ⚡ Performance Optimization

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 60 mins |

### Loading Strategies
```html
<!-- Defer - DOM ready ke baad execute -->
<script src="app.js" defer></script>

<!-- Async - jaisi hi download ho, execute -->
<script src="analytics.js" async></script>

<!-- Lazy loading images -->
<img src="photo.jpg" loading="lazy" alt="Photo">

<!-- Preload critical resources -->
<link rel="preload" href="font.woff2" as="font" crossorigin>
<link rel="preload" href="hero.jpg" as="image">

<!-- Preconnect to third-party -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Prefetch for future navigation -->
<link rel="prefetch" href="/next-page.html">

<!-- Prerender entire page -->
<link rel="prerender" href="/next-page.html">
```

### Resource Hints Comparison
| Hint | Use Case |
|------|----------|
| `preload` | Current page ki critical resources |
| `prefetch` | Agle page ki resources |
| `preconnect` | Third-party server se connection pehle karo |
| `dns-prefetch` | Sirf DNS resolve karo |
| `prerender` | Poora page background mein render karo |

### Performance Best Practices
1. ✅ Minify HTML, CSS, JS
2. ✅ Compress images (WebP/AVIF)
3. ✅ Use CDN for static assets
4. ✅ Enable gzip/brotli compression
5. ✅ Reduce HTTP requests
6. ✅ Use HTTP/2 or HTTP/3
7. ✅ Implement caching
8. ✅ Critical CSS inline karo
9. ✅ Lazy load below-fold content
10. ✅ Avoid render-blocking resources

---

## 3.5 🌍 Internationalization (i18n)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 45 mins |

```html
<!-- HTML lang attribute -->
<html lang="hi">
<html lang="en">

<!-- Multiple language pages -->
<link rel="alternate" hreflang="hi" href="https://example.com/hi/">
<link rel="alternate" hreflang="en" href="https://example.com/en/">
<link rel="alternate" hreflang="x-default" href="https://example.com/">

<!-- Bidirectional text -->
<p dir="rtl">مرحبا بالعالم</p>

<!-- Language negotiation -->
<meta http-equiv="content-language" content="hi, en">
```

---

## 3.6 🎭 Advanced Form Techniques

### Form with Autocomplete
```html
<form autocomplete="on">
    <input type="text" name="name" autocomplete="given-name">
    <input type="text" name="family" autocomplete="family-name">
    <input type="email" name="email" autocomplete="email">
    <input type="tel" name="phone" autocomplete="tel">
    <input type="text" name="address" autocomplete="street-address">
    <input type="text" name="city" autocomplete="address-level2">
    <input type="text" name="state" autocomplete="address-level1">
    <input type="text" name="zip" autocomplete="postal-code">
    <input type="text" name="country" autocomplete="country-name">
    <input type="password" name="pass" autocomplete="new-password">
</form>
```

### Form with Datalist
```html
<input list="languages" name="language">
<datalist id="languages">
    <option value="HTML">
    <option value="CSS">
    <option value="JavaScript">
    <option value="Python">
    <option value="Java">
</datalist>
```

### Output Element
```html
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
    <input type="range" id="a" value="50"> +
    <input type="number" id="b" value="50">
    = <output name="result" for="a b">100</output>
</form>
```

---

## 🟠 Advanced Module - Complete Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | Shadow DOM | ✅ Done |
| 2 | Custom Elements | ✅ Done |
| 3 | Web Components | ✅ Done |
| 4 | HTML Templates | ✅ |
| 5 | Slots | ✅ |
| 6 | HTML Security (XSS) | ✅ Done |
| 7 | CSP | ✅ Done |
| 8 | CORS Basics | ✅ |
| 9 | Performance Optimization | ✅ Done |
| 10 | Resource Hints | ✅ Done |
| 11 | i18n | ✅ Done |
| 12 | Advanced Forms | ✅ Done |
| 13 | Datalist | ✅ Done |
| 14 | Output Element | ✅ Done |
| 15 | Form Autocomplete | ✅ Done |
| 16 | Content Editable | Next |
| 17 | Spellcheck & Grammar | Next |
| 18 | Custom Validation API | ✅ |
| 19 | Constraint Validation API | Next |
| 20 | Web Sockets in HTML | Next |
| 21 | Server-Sent Events | Next |
| 22 | Web Workers Basics | Next |

---

# 🔴 MODULE 4: PROFESSIONAL HTML5

---

## 4.1 🏭 Advanced HTML APIs

### 4.1.1 Web Workers
Background mein JavaScript chalane ke liye.

```html
<!-- main.html -->
<script>
// Web Worker create karo
const worker = new Worker('worker.js');

// Worker ko message bhejo
worker.postMessage({number: 1000000000});

// Worker se result receive karo
worker.onmessage = function(e) {
    document.getElementById('result').textContent = 'Result: ' + e.data;
};

worker.onerror = function(e) {
    console.error('Worker error:', e.message);
};

// Worker band karo
// worker.terminate();
</script>
```

```javascript
// worker.js
self.onmessage = function(e) {
    const n = e.data.number;
    let sum = 0;
    
    // Heavy calculation (UI block nahi karega)
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    
    // Result main thread ko bhejo
    self.postMessage(sum);
};
```

### 4.1.2 Service Workers (PWA)
```javascript
// sw.js - Service Worker
const CACHE_NAME = 'my-pwa-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/app.js',
    '/offline.html'
];

// Install event - cache setup
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Activate event - old cache cleanup
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
});

// Fetch event - serve from cache/network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache mein hai to wahan se do
                if (response) return response;
                
                // Nahi hai to network se lao
                return fetch(event.request).then(response => {
                    // Response cache mein save karo
                    if (!response || response.status !== 200) return response;
                    
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                    
                    return response;
                }).catch(() => {
                    // Network nahi hai to offline page do
                    return caches.match('/offline.html');
                });
            })
    );
});
```

### 4.1.3 Server-Sent Events (SSE)
```html
<script>
const eventSource = new EventSource('/events');

// Regular messages
eventSource.onmessage = function(e) {
    document.getElementById('updates').innerHTML += 
        '<p>New: ' + e.data + '</p>';
};

// Named events
eventSource.addEventListener('notification', function(e) {
    showNotification(e.data);
});

// Error handling
eventSource.onerror = function(e) {
    console.log('Connection error, reconnecting...');
};
</script>
```

### 4.1.4 Web Sockets
```html
<script>
const ws = new WebSocket('wss://example.com/socket');

// Connection open
ws.onopen = () => {
    console.log('Connected!');
    ws.send('Hello Server!');
};

// Message receive
ws.onmessage = (e) => {
    console.log('Server says:', e.data);
    document.getElementById('chat').innerHTML += 
        '<p>Server: ' + e.data + '</p>';
};

// Error
ws.onerror = (e) => {
    console.error('WebSocket error:', e);
};

// Connection close
ws.onclose = (e) => {
    console.log('Disconnected:', e.code, e.reason);
    // Auto-reconnect
    setTimeout(connectWebSocket, 3000);
};
</script>
```

---

## 4.2 🎨 Advanced SVG

```html
<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <!-- Gradient -->
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="red" />
            <stop offset="100%" stop-color="blue" />
        </linearGradient>
        
        <radialGradient id="radialGrad">
            <stop offset="0%" stop-color="gold" />
            <stop offset="100%" stop-color="orange" />
        </radialGradient>
        
        <!-- Filter -->
        <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.5" />
        </filter>
        
        <!-- Reusable shape -->
        <circle id="dot" cx="0" cy="0" r="5" />
    </defs>
    
    <!-- Use gradient -->
    <rect x="10" y="10" width="200" height="100" fill="url(#grad)" rx="10" />
    
    <!-- Apply filter -->
    <circle cx="150" cy="200" r="60" fill="url(#radialGrad)" filter="url(#shadow)" />
    
    <!-- Animate -->
    <circle cx="50" cy="400" r="20" fill="green">
        <animate attributeName="cx" from="50" to="450" dur="3s" repeatCount="indefinite" />
    </circle>
    
    <!-- Reuse -->
    <use href="#dot" x="100" y="300" fill="red" />
    <use href="#dot" x="200" y="300" fill="blue" />
    <use href="#dot" x="300" y="300" fill="green" />
    
    <!-- Path with curves -->
    <path d="M 50 350 Q 150 250 250 350 T 450 350" 
          fill="none" stroke="purple" stroke-width="3" />
</svg>
```

---

## 4.3 🏛️ HTML Design Patterns

### 4.3.1 HTML Boilerplate
```html
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <meta name="theme-color" content="#ff0000">
    
    <title>Page Title</title>
    
    <!-- Preload critical resources -->
    <link rel="preload" href="critical.css" as="style">
    <link rel="preload" href="font.woff2" as="font" crossorigin>
    
    <!-- Styles -->
    <link rel="stylesheet" href="critical.css">
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Manifest for PWA -->
    <link rel="manifest" href="manifest.json">
    
    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Title">
    <meta property="og:description" content="Description">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Schema.org -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Page Title"
    }
    </script>
    
    <!-- Modern browser features -->
    <script>
        // Detect JS support
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
        
        // Check webp support
        (async () => {
            const supportsWebP = await checkWebPSupport();
            if (supportsWebP) document.documentElement.classList.add('webp');
        })();
    </script>
</head>
<body>
    <header role="banner">
        <nav role="navigation" aria-label="Main navigation">
            <!-- Navigation -->
        </nav>
    </header>
    
    <main id="main-content" role="main">
        <!-- Main content -->
    </main>
    
    <footer role="contentinfo">
        <!-- Footer -->
    </footer>
    
    <!-- Deferred scripts -->
    <script src="app.js" defer></script>
    
    <!-- Critical inline script -->
    <script>
        // Critical functionality
    </script>
</body>
</html>
```

---

## 4.4 📐 HTML & CSS Architecture - BEM Methodology

```html
<!-- BEM: Block__Element--Modifier -->
<div class="card">
    <div class="card__header">
        <h2 class="card__title">Title</h2>
    </div>
    <div class="card__body">
        <p class="card__text card__text--highlighted">
            Highlighted text
        </p>
        <button class="card__button card__button--primary">
            Submit
        </button>
    </div>
</div>
```

---

## 4.5 🧪 HTML Testing

```html
<!-- Visual Regression Testing Patterns -->
<div class="test-container" data-testid="hero-section">
    <!-- predictable structure for tests -->
</div>

<!-- Data attributes for testing -->
<button data-testid="submit-btn" data-cy="submit">Submit</button>

<!-- Hidden but test-accessible -->
<div data-testid="user-data" hidden>
    {"id": 1, "name": "Test"}
</div>
```

---

## 🔴 Professional Module - Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | Web Workers | ✅ Done |
| 2 | Service Workers | ✅ Done |
| 3 | SSE (Server-Sent Events) | ✅ Done |
| 4 | Web Sockets | ✅ Done |
| 5 | Advanced SVG (Gradients, Filters, Animation) | ✅ Done |
| 6 | HTML Boilerplate | ✅ Done |
| 7 | BEM Methodology | ✅ Done |
| 8 | HTML Testing Patterns | ✅ Done |
| 9 | Manifest.json (PWA) | ✅ |
| 10 | App Icons | ✅ |
| 11 | Theme Color | ✅ |
| 12 | Splash Screens | Next |
| 13 | Offline Support | ✅ |
| 14 | Push Notifications | Next |
| 15 | Background Sync | Next |
| 16 | Payment Request API | Next |
| 17 | Credential Management | Next |
| 18 | Web Bluetooth API | Next |
| 19 | Web USB API | Next |
| 20 | Web Share API | Next |
| 21 | Web Speech API | Next |
| 22 | Battery Status API | Next |
| 23 | Vibration API | Next |
| 24 | Screen Wake Lock | Next |
| 25 | Fullscreen API | Next |
| 26 | Pointer Lock API | Next |
| 27 | Page Visibility API | Next |
| 28 | Network Information API | Next |
| 29 | Device Memory API | Next |
| 30 | Performance API | Next |
| 31 | Resize Observer | Next |
| 32 | Intersection Observer | Next |
| 33 | Mutation Observer | Next |
| 34 | Reporting Observer | Next |

---

# ⚫ MODULE 5: EXPERT HTML5

---

## 5.1 ⚡ Cutting-Edge APIs (2026)

### 5.1.1 Payment Request API
```html
<script>
async function makePayment() {
    const supportedPaymentMethods = [
        {
            supportedMethods: 'https://google.com/pay',
            data: {
                environment: 'TEST',
                apiVersion: 2,
                merchantId: 'merchant_123'
            }
        },
        {
            supportedMethods: 'basic-card',
            data: {
                supportedNetworks: ['visa', 'mastercard', 'rupay']
            }
        }
    ];
    
    const paymentDetails = {
        id: 'order-123',
        displayItems: [
            {label: 'Course Fee', amount: {currency: 'INR', value: '499'}},
            {label: 'GST (18%)', amount: {currency: 'INR', value: '89.82'}},
        ],
        total: {
            label: 'Total',
            amount: {currency: 'INR', value: '588.82'}
        }
    };
    
    try {
        const payment = new PaymentRequest(supportedPaymentMethods, paymentDetails);
        const paymentResponse = await payment.show();
        
        console.log('Payment successful:', paymentResponse);
        await paymentResponse.complete('success');
    } catch (err) {
        console.error('Payment failed:', err);
    }
}
</script>
```

### 5.1.2 Web Share API
```html
<script>
async function shareContent() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Code Duniya',
                text: 'Programming seekhein Roman English mein!',
                url: 'https://codeduniya.com'
            });
            console.log('Shared successfully!');
        } catch (err) {
            console.log('Share cancelled:', err);
        }
    } else {
        // Fallback
        alert('Aapka browser share support nahi karta');
    }
}
</script>
```

### 5.1.3 Web Speech API
```html
<script>
// Text to Speech
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Available voices
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices.find(v => v.lang.startsWith('hi'));
        
        speechSynthesis.speak(utterance);
    }
}

// Speech Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'hi-IN';
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
    document.getElementById('speech-output').textContent = transcript;
};

recognition.start();
</script>
```

### 5.1.4 Intersection Observer
```html
<script>
// Lazy load images with Intersection Observer
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;  // Actually load image
            img.removeAttribute('data-src');
            observer.unobserve(img);     // Stop observing
        }
    });
}, {
    rootMargin: '50px',  // 50px pehle hi load karo
    threshold: 0.1       // 10% visible hai to trigger
});

images.forEach(img => imageObserver.observe(img));

// Infinite scroll
const sentinel = document.getElementById('scroll-sentinel');
const scrollObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loadMoreContent();  // Load next page
    }
});
scrollObserver.observe(sentinel);
</script>
```

### 5.1.5 Resize Observer
```html
<script>
const element = document.getElementById('responsive-box');

const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        const {width, height} = entry.contentRect;
        
        if (width < 600) {
            element.classList.add('compact');
        } else {
            element.classList.remove('compact');
        }
    }
});

resizeObserver.observe(element);
</script>
```

### 5.1.6 Mutation Observer
```html
<script>
// DOM changes dekhta hai
const targetNode = document.getElementById('dynamic-content');

const config = {
    childList: true,     // Children add/remove
    attributes: true,    // Attribute changes
    subtree: true,       // All descendants
    characterData: true  // Text changes
};

const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('Children changed!');
        }
        if (mutation.type === 'attributes') {
            console.log(`Attribute ${mutation.attributeName} changed`);
        }
    });
});

observer.observe(targetNode, config);
</script>
```

---

## 5.2 🔄 HTML & WebAssembly (WASM)

```html
<script>
// WebAssembly module load karna
async function loadWasm() {
    const response = await fetch('module.wasm');
    const bytes = await response.arrayBuffer();
    const {instance} = await WebAssembly.instantiate(bytes, {
        env: {
            print: (result) => console.log('WASM result:', result)
        }
    });
    
    // WASM function call
    const result = instance.exports.add(5, 3);
    console.log('5 + 3 =', result);
}
loadWasm();
</script>
```

---

## 5.3 🏗️ HTML Micro-Frontends

```html
<!-- Micro-frontend integration -->
<main>
    <!-- Header micro-frontend -->
    <micro-frontend src="https://header.app.com/manifest.json"></micro-frontend>
    
    <!-- Product listing micro-frontend -->
    <micro-frontend src="https://products.app.com/manifest.json"></micro-frontend>
    
    <!-- Cart micro-frontend -->
    <micro-frontend src="https://cart.app.com/manifest.json"></micro-frontend>
</main>

<script>
class MicroFrontend extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute('src');
        this.loadMicroFrontend(src);
    }
    
    async loadMicroFrontend(url) {
        const response = await fetch(url);
        const manifest = await response.json();
        
        // Load CSS
        manifest.css.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        });
        
        // Load JS
        manifest.js.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                // Mount component
                window[manifest.mount](this);
            };
            document.body.appendChild(script);
        });
    }
}

customElements.define('micro-frontend', MicroFrontend);
</script>
```

---

## ⚫ Expert Module - Topic List

| # | Topic | Status |
|---|-------|--------|
| 1 | Payment Request API | ✅ Done |
| 2 | Web Share API | ✅ Done |
| 3 | Web Speech API | ✅ Done |
| 4 | Intersection Observer | ✅ Done |
| 5 | Resize Observer | ✅ Done |
| 6 | Mutation Observer | ✅ Done |
| 7 | WebAssembly Integration | ✅ Done |
| 8 | Micro-Frontends | ✅ Done |
| 9 | Fugu APIs (Project Fugu) | Next |
| 10 | File System Access API | Next |
| 11 | Web Transport API | Next |
| 12 | Web Codecs API | Next |
| 13 | Web GPU API | Next |
| 14 | Web NFC API | Next |
| 15 | Web Serial API | Next |
| 16 | Web HID API | Next |
| 17 | Screen Capture API | Next |
| 18 | Clipboard API | Next |
| 19 | Gamepad API | Next |
| 20 | Web Audio API | Next |
| 21 | Media Session API | Next |
| 22 | Picture-in-Picture API | Next |
| 23 | Presentation API | Next |
| 24 | Broadcast Channel API | Next |
| 25 | Web Locks API | Next |
| 26 | Idle Detection API | Next |
| 27 | Periodic Background Sync | Next |
| 28 | Content Indexing API | Next |
| 29 | Digital Goods API | Next |
| 30 | Multi-Screen Window Placement | Next |
| 31 | Managed Device Web API | Next |
| 32 | Compute Pressure API | Next |
| 33 | Shared Element Transitions | Next |
| 34 | View Transitions API | Next |
| 35 | Scroll-driven Animations | Next |

---

# 💼 INTERVIEW MODULE

---

## HTML5 Interview Questions

### 🟢 Beginner Level

**Q1: HTML kya hai aur yeh kaise kaam karta hai?**
- **Answer**: HTML = HyperText Markup Language. Yeh web pages ka structure banata hai. Browser HTML file parse karta hai, DOM tree banata hai, aur screen par render karta hai.

**Q2: DOCTYPE kya hota hai?**
- **Answer**: `<!DOCTYPE html>` browser ko batata hai ki yeh HTML5 document hai. Bina iske browser "quirks mode" mein chal sakta hai jo purane browsers ki tarah behave karega.

**Q3: Semantic HTML kya hai? Example do.**
- **Answer**: Semantic HTML meaningful tags hain jo content ka purpose batate hain. Jaise `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` instead of `<div>`.

**Q4: `<img>` tag mein alt attribute kyun important hai?**
- **Answer**: 1) Image load na ho to text dikhe 2) Screen readers blind users ko bata sake 3) SEO ke liye.

**Q5: Block vs Inline elements mein kya farak hai?**
- **Answer**: Block elements (like `<div>`, `<p>`) full width lete hain aur new line se start hote hain. Inline elements (like `<span>`, `<a>`) sirf content width lete hain aur same line mein rehte hain.

### 🔵 Intermediate Level

**Q6: localStorage, sessionStorage, aur cookies mein kya antar hai?**
- **Answer**: 
| Feature | localStorage | sessionStorage | Cookies |
|---------|-------------|----------------|---------|
| Capacity | 5-10 MB | 5-10 MB | 4 KB |
| Expiry | Never | Tab close | Manual |
| Server | No | No | Yes |
| Scope | Origin | Tab | Path |

**Q7: Accessibility kya hai? ARIA kya hai?**
- **Answer**: Accessibility means website sab use kar sakein. ARIA = Accessible Rich Internet Applications. Yeh screen readers ke liye additional context deta hai. E.g., `aria-label`, `role="navigation"`.

**Q8: Canvas vs SVG mein kya antar hai?**
- **Answer**: Canvas = pixel-based, resolution dependent, better for games/graphics. SVG = vector-based, resolution independent, better for icons/logos.

**Q9: Defer vs Async mein kya antar hai?**
- **Answer**: Defer - HTML parse hone ke baad execute (order maintain). Async - jaisi hi download ho, execute (order not guaranteed).

**Q10: Web Workers kya hote hain?**
- **Answer**: Web Workers background mein JavaScript chalate hain without blocking UI. Heavy calculations, file processing ke liye use karte hain.

### 🟠 Advanced Level

**Q11: Shadow DOM kya hai?**
- **Answer**: Shadow DOM ek encapsulated DOM tree hai jo main document se isolated hota hai. Web Components ka part hai. Styles aur structure encapsulate karta hai.

**Q12: Service Worker kya hai? PWA kya hai?**
- **Answer**: Service Worker ek JavaScript file hai jo background mein chalti hai, network requests intercept karti hai, caching karti hai, offline support deti hai. PWA = Progressive Web App jo service workers use karta hai.

**Q13: SEO ke liye kaunsa HTML structure best hai?**
- **Answer**: Semantically correct HTML with proper heading hierarchy, descriptive meta tags, Open Graph tags, structured data (Schema.org), image alt text, semantic tags.

**Q14: CSP kya hai?**
- **Answer**: Content Security Policy - XSS attacks se bachata hai. Browser ko batata hai ki kaunse resources load karne allowed hain.

**Q15: Critical rendering path kya hai?**
- **Answer**: Browser ka HTML/CSS/JS ko screen par dikhane ka process:
1. HTML parse → DOM tree
2. CSS parse → CSSOM tree
3. DOM + CSSOM = Render Tree
4. Layout → Paint → Composite

---

## HTML5 MCQ Questions

**1. HTML ka full form kya hai?**
- [x] HyperText Markup Language
- [ ] HighText Machine Language
- [ ] HyperText Making Language
- [ ] Home Tool Markup Language

**2. Kaunsa tag sabse bada heading banata hai?**
- [ ] `<head>`
- [x] `<h1>`
- [ ] `<h6>`
- [ ] `<heading>`

**3. Image dikhane ke liye kaunsa tag use karte hain?**
- [ ] `<link>`
- [x] `<img>`
- [ ] `<src>`
- [ ] `<image>`

**4. Ordered list kaunsa tag banata hai?**
- [ ] `<ul>`
- [x] `<ol>`
- [ ] `<list>`
- [ ] `<li>`

**5. Link new tab mein kholne ke liye kaunsa attribute?**
- [ ] `target="_new"`
- [x] `target="_blank"`
- [ ] `target="_tab"`
- [ ] `href="new"`

**6. Semantic tag kaunsa nahi hai?**
- [ ] `<header>`
- [ ] `<nav>`
- [ ] `<footer>`
- [x] `<div>`

**7. localStorage mein data kab tak rehta hai?**
- [x] Jab tak manually delete na karein
- [ ] Tab band hote hi
- [ ] 1 din
- [ ] 1 ghanta

**8. Canvas API kis type ka graphics hai?**
- [x] Raster (pixel)
- [ ] Vector
- [ ] 3D
- [ ] Text

**9. Accessibility ke liye kaunsa attribute important hai?**
- [ ] `style`
- [x] `aria-label`
- [ ] `onclick`
- [ ] `width`

**10. HTML5 video ke liye kaunsa attribute autoplay ke liye?**
- [ ] `start`
- [x] `autoplay`
- [ ] `play`
- [ ] `begin`

---

## 📝 Revision Notes & Cheat Sheet

### HTML5 Cheat Sheet 📋

```html
<!-- DOCUMENT STRUCTURE -->
<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <title>Title</title> </head>
<body><!-- visible content --></body>
</html>

<!-- TEXT TAGS -->
<h1> to <h6> - Headings
<p> - Paragraph
<br> - Line break
<hr> - Horizontal rule
<strong> - Bold (important)
<em> - Italic (emphasis)
<mark> - Highlighted
<small> - Small text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript
<sup> - Superscript
<code> - Code text
<pre> - Preformatted text
<blockquote> - Quote
<abbr> - Abbreviation

<!-- LINKS & IMAGES -->
<a href="url" target="_blank">Link</a>
<img src="url" alt="description" loading="lazy">

<!-- LISTS -->
<ul><li>Unordered</li></ul>
<ol><li>Ordered</li></ol>
<dl><dt>Term</dt><dd>Desc</dd></dl>

<!-- TABLES -->
<table>
  <caption>Title</caption>
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
  <tfoot><tr><td>Footer</td></tr></tfoot>
</table>

<!-- FORMS -->
<form action="/submit" method="POST">
  <input type="text/email/password/number/date/file">
  <textarea rows="4"></textarea>
  <select><option>Choice</option></select>
  <button type="submit">Submit</button>
  <label for="id">Label</label>
  <fieldset><legend>Group</legend></fieldset>
</form>

<!-- SEMANTIC TAGS -->
<header> <nav> <main> <article> 
<section> <aside> <footer> <figure>
<figcaption> <details> <summary> <time>

<!-- MULTIMEDIA -->
<audio controls><source src="mp3"></audio>
<video controls width="400"><source src="mp4"></video>
<iframe src="url" sandbox></iframe>

<!-- SVG & CANVAS -->
<svg width="100" height="100"><circle/></svg>
<canvas id="c" width="500" height="300"></canvas>

<!-- META TAGS -->
<meta name="description" content="...">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="og:title" content="...">
<link rel="icon" href="favicon.ico">

<!-- SCRIPTS -->
<script src="app.js" defer></script>
<noscript>JS is disabled</noscript>
```

---

## 🚀 PROJECT MODULE

### 🟢 Beginner Projects

| Project | Description | Topics Used |
|---------|-------------|-------------|
| Personal Portfolio | Apne baare mein website | Headings, paragraphs, images, links |
| Recipe Book | Recipe list with images | Lists, tables, images |
| Time Table | Weekly class schedule | Tables, semantic tags |
| Business Card | Digital visiting card | Div, CSS classes, meta tags |
| Blog Page | Simple article layout | Semantic HTML, headings, lists |

### 🔵 Intermediate Projects

| Project | Description | Topics Used |
|---------|-------------|-------------|
| YouTube Clone Video Page | Video with comments | Video tag, semantic layout |
| E-commerce Product Page | Product display with reviews | Tables, forms, images |
| News Website Layout | News articles grid | Semantic HTML, figure |
| Registration Form | Student registration | Forms, validation, datalist |
| FAQ Page | Expandable questions | Details, summary, semantic tags |

### 🟠 Advanced Projects

| Project | Description | Topics Used |
|---------|-------------|-------------|
| Drawing App | Canvas drawing tool | Canvas API, JavaScript |
| Weather Dashboard | Weather data display | Geolocation API, fetch |
| Drag & Drop Kanban | Task management | Drag & Drop API |
| Music Player | Audio player with playlist | Audio tag, Web Audio API |
| Video Chat UI | Video calling interface | Video, WebRTC basics |

### 🔴 Professional Projects

| Project | Description | Topics Used |
|---------|-------------|-------------|
| PWA Portfolio Site | Offline-capable portfolio | Service Workers, Manifest |
| Component Library | Reusable web components | Web Components, Shadow DOM |
| Real-time Dashboard | Live data dashboard | WebSockets, SSE, Canvas |
| E-commerce Platform | Full product catalog | Microdata, SEO, semantic HTML |
| Social Media UI | Feed with posts | Infinite scroll (Intersection Observer) |

### ⚫ Expert Projects

| Project | Description | Topics Used |
|---------|-------------|-------------|
| Micro-Frontend Shell | Micro-frontend host | Custom elements, Module federation |
| Code Editor | In-browser code editor | Content editable, WASM |
| Video Editor UI | Browser video editor | Canvas, WebCodecs |
| Voice Assistant UI | Speech-controlled interface | Web Speech API |
| PWA with Background Sync | Offline-first app | Service Workers, Background Sync |

### 💼 Freelancing Projects
1. Business Website Portfolio
2. Restaurant Menu Website
3. Wedding Invitation Page
4. Landing Page for Startup
5. Personal Branding Site

### 🌟 Open Source Project Ideas
1. HTML5 Boilerplate Generator
2. Accessibility Testing Tool
3. Web Component Library
4. HTML Validator Tool
5. SVG Icon Library

---

## 📊 Summary: HTML5 Complete Topic Count

| Module | Topics Covered |
|--------|---------------|
| 🟢 Beginner | 35+ Topics |
| 🔵 Intermediate | 40+ Topics |
| 🟠 Advanced | 30+ Topics |
| 🔴 Professional | 34+ Topics |
| ⚫ Expert | 35+ Topics |
| 💼 Interview | 50+ Q&A |
| 🚀 Projects | 30+ Projects |
| **TOTAL** | **250+ Topics** |

---

> **"HTML web ka foundation hai. Isse mazboot banayein!" 🚀**
>
> **[Next: CSS3 →](css3.md)**

[Back to Main Curriculum →](../README.md)

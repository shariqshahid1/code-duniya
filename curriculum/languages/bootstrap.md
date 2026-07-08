# 🅱️ Bootstrap 5 — Complete Curriculum (2026 Edition)

> **"Bootstrap world ka most popular CSS framework hai. Responsive, mobile-first websites jaldi banane ke liye!"**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 2011 | Bootstrap 1 | Open source by Twitter |
| 2012 | Bootstrap 2 | Responsive grid, 12 columns |
| 2013 | Bootstrap 3 | Mobile-first, flat design |
| 2018 | Bootstrap 4 | Flexbox, cards, new utilities |
| 2021 | Bootstrap 5 | No jQuery, CSS custom properties |
| 2025 | Bootstrap 5.3+ | Dark mode, RTL, improved forms |

### Setup
```html
<!-- CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- npm -->
npm install bootstrap@5
```

---

## 🔲 Grid System

```html
<!-- 12-column grid -->
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3">Column 1</div>
    <div class="col-sm-6 col-md-4 col-lg-3">Column 2</div>
    <div class="col-sm-6 col-md-4 col-lg-3">Column 3</div>
    <div class="col-sm-6 col-md-4 col-lg-3">Column 4</div>
  </div>
</div>

<!-- Breakpoints: col- (xs), col-sm- (≥576px), col-md- (≥768px), col-lg- (≥992px), col-xl- (≥1200px), col-xxl- (≥1400px) -->

<!-- Auto layout -->
<div class="row">
  <div class="col">Auto</div>
  <div class="col-6">6 columns wide</div>
  <div class="col">Auto</div>
</div>

<!-- Gutters -->
<div class="row g-4">  <!-- gap 1-5 -->
  <div class="col">Item</div>
</div>
```

### Roman English Explanation
Bootstrap ka grid 12 columns ka hota hai. `container` (center, max-width) → `row` (horizontal group) → `col` (columns). Responsive classes use karte hain: `col-md-6` ka matlab medium screen pe 6 columns, chhoti screen poora width.

---

## 🎨 Components

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>

<!-- Cards -->
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Code Duniya</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Courses</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Modal -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Content here...</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
<button data-bs-toggle="modal" data-bs-target="#myModal">Open Modal</button>

<!-- Forms -->
<form>
  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input">
    <label class="form-check-label">Remember me</label>
  </div>
  <select class="form-select mb-3">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<!-- Alerts -->
<div class="alert alert-success">Success! ✅</div>
<div class="alert alert-danger">Error! ❌</div>
<div class="alert alert-warning">Warning! ⚠️</div>

<!-- Badge -->
<span class="badge bg-primary">New</span>
<span class="badge bg-danger">5</span>

<!-- Spinner -->
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Progress -->
<div class="progress">
  <div class="progress-bar" style="width: 75%">75%</div>
</div>

<!-- Accordion -->
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        What is Bootstrap?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">Bootstrap is a CSS framework...</div>
    </div>
  </div>
</div>
```

---

## 📐 Utilities

```html
<!-- Spacing: m (margin), p (padding), t (top), b (bottom), s (start/left), e (end/right), x (horizontal), y (vertical) -->
<!-- Values: 0, 1 (.25rem), 2 (.5rem), 3 (1rem), 4 (1.5rem), 5 (3rem), auto -->
<div class="mt-3 mb-2 p-4 mx-auto" style="max-width: 400px;">Spacing</div>

<!-- Text -->
<p class="text-start text-center text-end">Alignment</p>
<p class="text-primary text-success text-danger text-warning">Colors</p>
<p class="fw-bold fw-normal fst-italic">Font weight & style</p>
<p class="fs-1 fs-2 fs-3 fs-4 fs-5 fs-6">Font sizes</p>

<!-- Display -->
<div class="d-flex d-none d-md-block">Display</div>
<div class="d-flex justify-content-center align-items-center" style="height: 100px;">
  Flex Center
</div>

<!-- Colors -->
<div class="bg-primary bg-success bg-danger bg-warning bg-info bg-dark p-2">Backgrounds</div>
<div class="border border-primary border-3 rounded-3 p-2">Borders</div>

<!-- Shadows -->
<div class="shadow-none shadow-sm shadow shadow-lg p-3">Shadows</div>

<!-- Sizing -->
<div class="w-75 h-50">Width 75%, Height 50%</div>

<!-- Position -->
<div class="position-relative">
  <div class="position-absolute top-0 start-0">Top Left</div>
</div>

<!-- Visibility -->
<div class="visible invisible">Visibility</div>
```

---

## 🚀 Complete Page Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Duniya - Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">🚀 Code Duniya</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Courses</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <div class="bg-primary text-white py-5">
    <div class="container text-center">
      <h1 class="display-4">Welcome to Code Duniya</h1>
      <p class="lead">Programing seekhna ab hua aasan!</p>
      <a href="#" class="btn btn-light btn-lg">Start Learning</a>
    </div>
  </div>

  <!-- Cards -->
  <div class="container my-5">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <h3>🌐 HTML5</h3>
            <p>Web ka skeleton</p>
            <a href="#" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <h3>🎨 CSS3</h3>
            <p>Web ki styling</p>
            <a href="#" class="btn btn-success">Learn</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <h3>⚡ JavaScript</h3>
            <p>Web ka behaviour</p>
            <a href="#" class="btn btn-warning">Learn</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">© 2026 Code Duniya. All rights reserved.</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 💼 Interview Q&A

**Q1: Bootstrap grid kaise kaam karta hai?**  
A: 12-column grid system. container → row → col. col-sm-6 means small screen pe 6 columns (50% width). 5 breakpoints: xs, sm, md, lg, xl, xxl.

**Q2: Bootstrap 5 mein jQuery kyun nahi hai?**  
A: Vanilla JS mein sab ho raha tha. jQuery bundle size bada rahi thi. Bootstrap 5 pure JavaScript mein hai.

**Q3: Bootstrap ke components?**  
A: Navbar, Cards, Modals, Forms, Buttons, Alerts, Badges, Accordion, Carousel, Tabs, Tooltips.

**Q4: Utilities vs Components difference?**  
A: Utilities single-purpose CSS classes (mt-3, text-center). Components complex HTML structures (cards, modals).

---

> **"Bootstrap — Responsive websites 10x faster!" 🅱️🚀**

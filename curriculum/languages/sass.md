# 💅 Sass/SCSS — Complete Curriculum

> **"Sass (Syntactically Awesome Style Sheets) — CSS ka powerful extension. Variables, nesting, mixins, functions — CSS ko programming language banata hai!"**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 2007 | Sass 1.0 | Indented syntax (.sass) |
| 2010 | SCSS 3.0 | CSS-like syntax (.scss) |
| 2016 | Ruby Sass end | LibSass, Dart Sass |
| 2018 | Dart Sass 1.0 | Official implementation |
| 2022 | Sass 1.56 | @use, @forward, @layer |
| 2025+ | Sass 2.0 | Module system complete |

### Key Facts
- **Creator**: Hampton Catlin, Natalie Weizenbaum
- **Two Syntaxes**: `.sass` (indented) and `.scss` (CSS-like)
- **Preprocessor**: Compiles to standard CSS

---

## 🟢 BEGINNER SASS/SCSS

### Variables
```scss
// Colors
$primary: #3498db;
$secondary: #2ecc71;
$danger: #e74c3c;
$dark: #2c3e50;
$light: #ecf0f1;

// Sizes
$font-size-base: 16px;
$spacing-unit: 8px;
$container-max: 1200px;

// Borders
$border-radius: 4px;
$border-color: #ddd;

// Usage
.btn-primary {
    background: $primary;
    color: white;
    padding: $spacing-unit * 2;
    border-radius: $border-radius;
}
```

### Nesting
```scss
// CSS (long)
.nav { background: $dark; }
.nav ul { list-style: none; }
.nav ul li { display: inline; }
.nav ul li a { color: white; }

// SCSS (nested)
.nav {
    background: $dark;
    
    ul {
        list-style: none;
        
        li {
            display: inline;
            
            a {
                color: white;
                
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
```

### Partials & Import (@use)
```scss
// _variables.scss (partial file)
$primary: #3498db;
$font-stack: 'Segoe UI', sans-serif;

// _mixins.scss
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

// main.scss (using modules)
@use 'variables' as v;
@use 'mixins' as m;

.header {
    background: v.$primary;
    font-family: v.$font-stack;
    @include m.flex-center;
}

// @use with namespace
@use 'variables' as vars;
body { color: vars.$primary; }

// @forward (re-export)
// _index.scss
@forward 'variables';
@forward 'mixins';
```

### Mixins
```scss
// Define mixin
@mixin flex-center($direction: row) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: $direction;
}

@mixin responsive($breakpoint) {
    @if $breakpoint == 'mobile' {
        @media (max-width: 768px) { @content; }
    } @else if $breakpoint == 'tablet' {
        @media (max-width: 1024px) { @content; }
    } @else if $breakpoint == 'desktop' {
        @media (min-width: 1025px) { @content; }
    }
}

@mixin button-variant($bg, $color: white) {
    background: $bg;
    color: $color;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background: darken($bg, 10%);
    }
}

// Use mixins
.card {
    @include flex-center(column);
    padding: 20px;
}

.btn-primary { @include button-variant(#3498db); }
.btn-danger { @include button-variant(#e74c3c); }

.responsive-box {
    width: 100%;
    
    @include responsive('mobile') {
        font-size: 14px;
    }
    @include responsive('desktop') {
        font-size: 18px;
    }
}
```

### Extend/Inheritance
```scss
// %placeholder (doesn't output in CSS directly)
%btn-base {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.btn-primary {
    @extend %btn-base;
    background: $primary;
    color: white;
}

.btn-secondary {
    @extend %btn-base;
    background: $secondary;
    color: white;
}

// Direct extend
.error { color: red; font-weight: bold; }
.error-serious { @extend .error; font-size: 20px; }
```

### Operators
```scss
.container {
    width: 100% - 40px;  // 100% minus 40px padding
    margin: $spacing-unit * 3;
    padding: $spacing-unit;
}

$base: 16px;
h1 { font-size: $base * 2.5; }    // 40px
h2 { font-size: $base * 2; }       // 32px
h3 { font-size: $base * 1.75; }    // 28px

.split {
    width: percentage(1/3);  // 33.33333%
}
```

### Functions
```scss
// Built-in functions
$color: #3498db;

.lighter { background: lighten($color, 20%); }
.darker { background: darken($color, 10%); }
.saturated { background: saturate($color, 30%); }
.desaturated { background: desaturate($color, 30%); }
.transparent { background: rgba($color, 0.5); }

// Custom functions
@function px-to-rem($px, $base: 16px) {
    @return $px / $base * 1rem;
}

@function fluid-size($min, $max) {
    @return clamp(#{$min}px, #{$min}px + ($max - $min) * ((100vw - 320px) / 1920), #{$max}px);
}

h1 {
    font-size: px-to-rem(32px);  // 2rem
}

.fluid-text {
    font-size: fluid-size(16, 48);
}
```

### Conditionals & Loops
```scss
// @if/@else
$theme: 'dark';

body {
    @if $theme == 'dark' {
        background: #1a1a2e;
        color: white;
    } @else {
        background: white;
        color: black;
    }
}

// @for loop
@for $i from 1 through 5 {
    .col-#{$i} {
        width: ($i * 20%);
    }
}

// @each loop
$sizes: ('small': 12px, 'medium': 16px, 'large': 20px);

@each $name, $size in $sizes {
    .text-#{$name} {
        font-size: $size;
    }
}

// @while loop
$i: 6;
@while $i > 0 {
    .mb-#{$i} { margin-bottom: $i * 4px; }
    $i: $i - 1;
}
```

### Maps
```scss
// Define map
$breakpoints: (
    'mobile': 480px,
    'tablet': 768px,
    'desktop': 1024px,
    'wide': 1280px
);

$colors: (
    'primary': #3498db,
    'success': #2ecc71,
    'warning': #f1c40f,
    'danger': #e74c3c
);

@mixin respond($bp) {
    @if map-has-key($breakpoints, $bp) {
        @media (min-width: map-get($breakpoints, $bp)) {
            @content;
        }
    }
}

// Map functions
$primary-color: map-get($colors, 'primary');
$keys: map-keys($breakpoints);     // 'mobile', 'tablet', 'desktop', 'wide'
$values: map-values($breakpoints); // 480px, 768px, 1024px, 1280px
$has-key: map-has-key($colors, 'info'); // false
```

---

## 🔴 ADVANCED: ARCHITECTURE

### 7-1 Pattern
```
sass/
├── abstracts/     # Variables, functions, mixins
│   ├── _variables.scss
│   ├── _functions.scss
│   └── _mixins.scss
├── vendors/       # External libs
│   └── _bootstrap.scss
├── base/          # Reset, typography
│   ├── _reset.scss
│   └── _typography.scss
├── layout/        # Header, footer, grid
│   ├── _header.scss
│   └── _grid.scss
├── components/    # Buttons, cards, forms
│   ├── _buttons.scss
│   └── _cards.scss
├── pages/         # Page-specific
│   └── _home.scss
└── main.scss      # Imports everything
```

### SCSS Example: Button System
```scss
// _variables.scss
$btn-padding-y: 10px;
$btn-padding-x: 24px;
$btn-radius: 6px;
$btn-font-size: 16px;

// _mixins.scss
@mixin btn-base {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: $btn-padding-y $btn-padding-x;
    font-size: $btn-font-size;
    font-weight: 600;
    border: 2px solid transparent;
    border-radius: $btn-radius;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}

@mixin btn-variant($bg, $color, $hover-bg: darken($bg, 10%)) {
    @include btn-base;
    background: $bg;
    color: $color;
    border-color: $bg;
    
    &:hover:not(:disabled) {
        background: $hover-bg;
    }
}

// _buttons.scss
.btn {
    &-primary { @include btn-variant(#3498db, white); }
    &-secondary { @include btn-variant(#95a5a6, white); }
    &-success { @include btn-variant(#2ecc71, white); }
    &-danger { @include btn-variant(#e74c3c, white); }
    &-outline { @include btn-variant(transparent, #3498db, #3498db); @extend .btn-outline; color: #3498db; &:hover:not(:disabled) { color: white; } }
    &-lg { padding: 14px 32px; font-size: 18px; }
    &-sm { padding: 6px 16px; font-size: 14px; }
    &-block { width: 100%; }
}
```

---

## 🚀 Projects

1. **Complete Button System** — 10+ button variants
2. **Responsive Grid** — 12-column grid system
3. **Theme System** — Light/dark mode with maps
4. **Component Library** — Cards, forms, alerts, badges
5. **Dashboard Template** — Full layout with SCSS

---

> **"Sass — CSS ko maintainable aur powerful banata hai. Professional projects ke liye must-have!" 💅**

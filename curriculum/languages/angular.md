# 🅰️ Angular — Complete Curriculum (2026 Edition)

> **"Angular Google ka powerful framework hai. Ek baar code likho, Web + Mobile + Desktop sab pe chalao!"**

---

## 📋 Table of Contents
- [History & Evolution](#-history--evolution)
- [Module 1: Beginner](#-module-1-beginner)
- [Module 2: Components & Templates](#-module-2-components--templates)
- [Module 3: Directives & Pipes](#-module-3-directives--pipes)
- [Module 4: Services & DI](#-module-4-services--dependency-injection)
- [Module 5: Routing](#-module-5-routing)
- [Module 6: Forms](#-module-6-forms)
- [Module 7: HTTP & API](#-module-7-http--api)
- [Module 8: Advanced](#-module-8-advanced)
- [Interview Module](#-interview-module)
- [Project Module](#-project-module)

---

## 📖 History & Evolution

| Year | Version | Key Features |
|------|---------|--------------|
| 2010 | AngularJS | First version, MVC architecture |
| 2016 | Angular 2 | Complete rewrite, TypeScript, component-based |
| 2017 | Angular 4-5 | Smaller bundles, HttpClient |
| 2018 | Angular 6-7 | Element, CLI prompts, Angular Material |
| 2019 | Angular 8-9 | Ivy compiler, Bazel support |
| 2020 | Angular 10-11 | Strict mode, ESLint |
| 2021 | Angular 12-13 | Nullish coalescing, Ivy everywhere |
| 2022 | Angular 14-15 | Standalone components, directives |
| 2023 | Angular 16-17 | Signals, new control flow, SSR improvements |
| 2024 | Angular 18 | esbuild, Vite, deferred loading |
| 2025 | Angular 19 | Signal-based components, zoneless |
| 2026 | Angular 20 | Full zoneless change detection, AI tooling |

### Key Facts
- **Creator**: Google (Misko Hevery, 2010)
- **Latest**: Angular 20
- **Language**: TypeScript (by default)
- **Architecture**: Component-based, Module (optional now)
- **Used By**: Google, Microsoft, Forbes, Upwork, Deutsche Bank

### Pros & Cons
| Pros | Cons |
|------|------|
| Complete framework (batteries included) | Heavy bundle size |
| TypeScript native | Steep learning curve |
| Great for enterprise apps | Overkill for small projects |
| Powerful CLI | Complex RxJS |
| Two-way data binding | |
| Excellent tooling | |

---

# 🟢 MODULE 1: BEGINNER ANGULAR

---

## 1.1 🌟 Angular Kya Hai?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 20 mins |

### Definition
Angular ek TypeScript-based web application framework hai jo Google ne banaya hai. Isse dynamic, single-page applications (SPAs) banate hain.

### Roman English Explanation
Angular ko aise samjho — ye ek powerful tool hai jo web apps banane mein help karta hai. React sirf ek library hai (UI ke liye). Angular poora framework hai — routing, forms, HTTP, security sab built-in aata hai. Ismein aap HTML ko extend karte hain apne custom elements (components) se.

### Setup
```bash
# Angular CLI install karo
npm install -g @angular/cli

# New project banao
ng new my-app --standalone

# Development server chalao
ng serve

# Component banao
ng generate component user-profile
ng g c user-list
ng g s user-service
ng g p capitalize
ng g d highlight
```

---

## 1.2 🏗️ Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Root component
│   │   ├── app.component.html     # Template
│   │   ├── app.component.css      # Styles
│   │   ├── app.config.ts          # App configuration
│   │   └── app.routes.ts          # Routing
│   ├── index.html                 # Main HTML
│   ├── main.ts                    # Entry point
│   └── styles.css                 # Global styles
├── angular.json                   # Angular config
├── package.json
└── tsconfig.json
```

### Entry Point
```typescript
// main.ts — Angular app yahi start hota hai
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

### First Component
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',        // HTML tag <app-root>
  standalone: true,            // Standalone component
  template: `
    <h1>{{ title }}</h1>
    <p>Welcome to Angular!</p>
  `,
  styles: [`
    h1 { color: #1976d2; }
  `]
})
export class AppComponent {
  title = 'Code Duniya';
}
```

---

## 1.3 🖥️ Data Binding

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 35 mins |

### Roman English Explanation
Data binding se component ka data (TypeScript) aur template (HTML) ke beech mein connection banta hai. 4 types hain:

### Types of Data Binding

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  standalone: true,
  template: `
    <h2>Data Binding Demo</h2>

    <!-- 1. Interpolation (Component → Template) -->
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Sum: {{ 5 + 3 }}</p>

    <!-- 2. Property Binding (Component → Template) -->
    <img [src]="imageUrl" [alt]="imageAlt" [width]="imageWidth">
    <button [disabled]="isDisabled">Click Me</button>
    <div [class.active]="isActive">Active Class</div>
    <div [style.color]="textColor">Colored Text</div>

    <!-- 3. Event Binding (Template → Component) -->
    <button (click)="handleClick()">Click</button>
    <input (input)="handleInput($event)" (keyup.enter)="onEnter()">
    <div (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
      Hover me
    </div>

    <!-- 4. Two-way Binding (Component ↔ Template) -->
    <input [(ngModel)]="username" placeholder="Enter name">
    <p>Hello, {{ username }}!</p>
  `,
  standalone: true,
  imports: [FormsModule]
})
export class BindingDemoComponent {
  // Interpolation
  name = 'Rahul';
  age = 25;

  // Property binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageAlt = 'Angular Logo';
  imageWidth = 100;
  isDisabled = false;
  isActive = true;
  textColor = 'blue';

  // Two-way binding
  username = '';

  // Event handlers
  handleClick() {
    alert('Button clicked!');
  }

  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Input:', value);
  }

  onEnter() {
    console.log('Enter pressed!');
  }

  onMouseEnter() { console.log('Mouse entered'); }
  onMouseLeave() { console.log('Mouse left'); }
}
```

---

## 1.4 🔄 Control Flow (New Syntax)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
Angular 17+ mein naya control flow syntax aaya hai. `*ngIf`, `*ngFor` ki jagah ab `@if`, `@for`, `@switch` use karte hain.

### Examples

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  template: `
    <h2>Control Flow</h2>

    <!-- @if (Angular 17+) -->
    @if (isLoggedIn) {
      <p>Welcome, {{ username }}!</p>
    } @else {
      <p>Please log in</p>
    }

    <!-- @for -->
    <h3>Fruits:</h3>
    <ul>
      @for (fruit of fruits; track fruit.id; let i = $index, first = $first, last = $last) {
        <li [class.highlight]="first">
          {{ i + 1 }}. {{ fruit.name }}
          @if (first) { ⭐ }
          @if (last) { 🏁 }
        </li>
      } @empty {
        <li>No fruits available</li>
      }
    </ul>

    <!-- @switch -->
    @switch (role) {
      @case ('admin') {
        <p>Admin Panel Access</p>
      }
      @case ('editor') {
        <p>Content Editor Access</p>
      }
      @case ('user') {
        <p>User Access</p>
      }
      @default {
        <p>Guest Access</p>
      }
    }
  `,
  styles: ['.highlight { font-weight: bold; color: gold; }']
})
export class ControlFlowComponent {
  isLoggedIn = true;
  username = 'Rahul';
  role = 'admin';

  fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Mango' },
    { id: 4, name: 'Orange' }
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }
}
```

### Old Syntax (ngIf/ngFor)
```html
<!-- Old way (still works, but @ syntax is preferred now) -->
<div *ngIf="isLoggedIn; else loginBlock">
  Welcome {{ username }}!
</div>
<ng-template #loginBlock>
  <p>Please log in</p>
</ng-template>

<li *ngFor="let fruit of fruits; let i = index; trackBy: trackById">
  {{ i + 1 }}. {{ fruit }}
</li>

<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin</p>
  <p *ngSwitchDefault>Guest</p>
</div>
```

---

# 🔵 MODULE 2: COMPONENTS & TEMPLATES

---

## 2.1 🧩 Component Deep Dive

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 40 mins |

### Roman English Explanation
Component Angular ki basic building block hai. Har component ke 3 parts hote hain: Class (logic), Template (HTML), Styles (CSS).

### Component with Inputs & Outputs
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="user-card" [class.vip]="user.isVip">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <p>Role: {{ user.role }}</p>
      
      <div class="actions">
        <button (click)="onView()">View</button>
        <button (click)="onEdit()">Edit</button>
        <button (click)="onDelete()" class="danger">Delete</button>
      </div>
    </div>
  `,
  styles: [`
    .user-card { border: 1px solid #ddd; padding: 16px; margin: 8px; border-radius: 8px; }
    .vip { border-color: gold; background: #fffae6; }
    .danger { color: red; }
  `]
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
  @Input() showActions = true;

  @Output() view = new EventEmitter<number>();
  @Output() edit = new EventEmitter<User>();
  @Output() delete = new EventEmitter<number>();

  onView() { this.view.emit(this.user.id); }
  onEdit() { this.edit.emit(this.user); }
  onDelete() { this.delete.emit(this.user.id); }
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  isVip: boolean;
}
```

### Using the Component
```typescript
// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent],
  template: `
    <h1>Users</h1>
    @for (user of users; track user.id) {
      <app-user-card
        [user]="user"
        (view)="onViewUser($event)"
        (delete)="onDeleteUser($event)"
      />
    }
  `
})
export class AppComponent {
  users: User[] = [
    { id: 1, name: 'Rahul', email: 'rahul@test.com', role: 'admin', isVip: true },
    { id: 2, name: 'Priya', email: 'priya@test.com', role: 'user', isVip: false },
    { id: 3, name: 'Amit', email: 'amit@test.com', role: 'editor', isVip: true }
  ];

  onViewUser(id: number) { console.log('View user:', id); }
  onDeleteUser(id: number) { 
    this.users = this.users.filter(u => u.id !== id);
  }
}
```

---

## 2.2 🧬 Component Lifecycle

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
Component ke lifecycle hooks predefined moments hote hain jab Angular automatically specific methods call karta hai.

### Lifecycle Hooks
```typescript
import { Component, OnInit, OnDestroy, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  template: `<p>{{ message }}</p>`
})
export class LifecycleDemoComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  
  @Input() data: any;
  
  // 1. Constructor — Component create hote time (sabse pehle)
  constructor() {
    console.log('1. Constructor');
  }

  // 2. ngOnChanges — Input properties change hote time
  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes);
  }

  // 3. ngOnInit — Component initialize hone ke baad (ek baar)
  ngOnInit() {
    console.log('3. ngOnInit');
    console.log('Data loaded:', this.data);
  }

  // 4. ngAfterViewInit — View aur child views ready hone ke baad
  ngAfterViewInit() {
    console.log('4. ngAfterViewInit');
  }

  // 5. ngAfterContentInit — Content projection ke baad
  ngAfterContentInit() {
    console.log('5. ngAfterContentInit');
  }

  // 6. ngOnDestroy — Component destroy hone se pehle (cleanup)
  ngOnDestroy() {
    console.log('6. ngOnDestroy');
    // Unsubscribe subscriptions, clear timers
  }
}
```

### Lifecycle Order
```
Constructor → ngOnChanges → ngOnInit → ngDoCheck →
ngAfterContentInit → ngAfterContentChecked →
ngAfterViewInit → ngAfterViewChecked →
(Change Detection Cycle) →
 ngOnDestroy (when removed)
```

---

## 2.3 🔗 Content Projection

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Content projection se parent component child component ke andar content pass kar sakta hai. `ng-content` tag ka use hota hai.

### Examples
```typescript
@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <ng-content select="[card-title]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[card-actions]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ddd; border-radius: 8px; margin: 8px; }
    .card-header { background: #f5f5f5; padding: 12px; border-bottom: 1px solid #ddd; }
    .card-body { padding: 16px; }
    .card-footer { background: #fafafa; padding: 12px; border-top: 1px solid #ddd; }
  `]
})
export class CardComponent {}

// Usage
@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CardComponent],
  template: `
    <app-card>
      <h2 card-title>User Profile</h2>
      <p>Name: Rahul Kumar</p>
      <p>Email: rahul@test.com</p>
      <button card-actions (click)="edit()">Edit</button>
    </app-card>
  `
})
export class ContentProjectionComponent {
  edit() { console.log('Editing...'); }
}
```

---

# 🟠 MODULE 3: DIRECTIVES & PIPES

---

## 3.1 🎯 Directives

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Roman English Explanation
Directives HTML ko extend karte hain. 3 types hain: Components (template ke saath), Structural (*ngIf, *ngFor), Attribute ([ngClass], [ngStyle]).

### Custom Directive
```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  @Input() highlightDuration = 1000;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition = 'background-color 0.3s';
  }
}

// Usage
@Component({
  template: `
    <p appHighlight="lightblue">Hover over me!</p>
    <p appHighlight="lightgreen" highlightDuration="2000">I stay green longer!</p>
  `,
  imports: [HighlightDirective]
})
export class DirectiveDemoComponent {}
```

### Structural Directive (Custom)
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}

// Usage: <div *appUnless="isLoading">Content</div>
```

---

## 3.2 🔧 Pipes

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
Pipes data transform karte hain template mein. Built-in pipes hain (DatePipe, CurrencyPipe) aur custom pipes bana sakte hain.

### Built-in Pipes
```typescript
@Component({
  standalone: true,
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, DecimalPipe, PercentPipe],
  template: `
    <h3>Built-in Pipes</h3>
    
    <p>Date: {{ today | date:'fullDate' }}</p>
    <p>Short Date: {{ today | date:'dd/MM/yyyy' }}</p>
    <p>Time: {{ today | date:'hh:mm:ss a' }}</p>

    <p>Uppercase: {{ 'hello world' | uppercase }}</p>
    <p>Lowercase: {{ 'HELLO WORLD' | lowercase }}</p>
    <p>Titlecase: {{ 'hello world' | titlecase }}</p>

    <p>Currency: {{ price | currency:'INR':'symbol':'1.2-2' }}</p>
    <p>Number: {{ 3.14159 | number:'1.2-3' }}</p>
    <p>Percent: {{ 0.25 | percent }}</p>
    <p>JSON: {{ user | json }}</p>
  `
})
export class PipeDemoComponent {
  today = new Date();
  price = 1234.56;
  user = { name: 'Rahul', age: 25 };
}
```

### Custom Pipe
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number = 20, suffix: string = '...'): string {
    if (!value) return '';
    if (value.length <= maxLength) return value;
    return value.substring(0, maxLength) + suffix;
  }
}

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, property: string = 'name'): any[] {
    if (!items || !searchTerm) return items;
    return items.filter(item =>
      item[property]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

// Usage
@Component({
  standalone: true,
  imports: [TruncatePipe, FilterPipe],
  template: `
    <p>{{ longText | truncate:15 }}</p>
    
    <input [(ngModel)]="search" placeholder="Search...">
    @for (user of users | filter:search:'name'; track user.id) {
      <p>{{ user.name }}</p>
    }
  `
})
export class PipeUsageComponent {
  longText = 'This is a very long text that needs truncation';
  search = '';
  users = [
    { id: 1, name: 'Rahul Kumar' },
    { id: 2, name: 'Priya Sharma' }
  ];
}
```

---

# 🟣 MODULE 4: SERVICES & DEPENDENCY INJECTION

---

## 4.1 📦 Services

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Roman English Explanation
Services mein reusable logic rakhte hain (API calls, data sharing, business logic). `@Injectable` decorator se service banate hain aur DI (Dependency Injection) se inject karte hain.

### Service Example
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Singleton — poori app mein ek instance
})
export class UserService {
  // Signal-based state
  private users = signal<User[]>([
    { id: 1, name: 'Rahul', email: 'rahul@test.com', role: 'admin' },
    { id: 2, name: 'Priya', email: 'priya@test.com', role: 'user' }
  ]);

  readonly users$ = this.users.asReadonly();

  constructor(private http: HttpClient) {
    console.log('UserService created — singleton!');
  }

  getUsers() {
    return this.users();
  }

  getUser(id: number) {
    return this.users().find(u => u.id === id);
  }

  addUser(user: User) {
    this.users.update(users => [...users, { ...user, id: Date.now() }]);
  }

  updateUser(id: number, updates: Partial<User>) {
    this.users.update(users =>
      users.map(u => u.id === id ? { ...u, ...updates } : u)
    );
  }

  deleteUser(id: number) {
    this.users.update(users => users.filter(u => u.id !== id));
  }

  fetchUsersFromApi() {
    return this.http.get<User[]>('https://api.example.com/users');
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
```

### Using Service in Component
```typescript
@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <h2>User List</h2>
    @for (user of userService.users$(); track user.id) {
      <div>
        {{ user.name }} - {{ user.role }}
        <button (click)="deleteUser(user.id)">🗑️</button>
      </div>
    }
  `
})
export class UserListComponent {
  constructor(public userService: UserService) {}

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
```

---

## 4.2 🔄 Dependency Injection

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
DI ek design pattern hai jisme class apne dependencies khud create nahi karti, Angular inject karta hai. Isse code testable aur modular banta hai.

### Injection Tokens
```typescript
import { InjectionToken, inject } from '@angular/core';

// Injection token — non-class dependencies ke liye
export const API_URL = new InjectionToken<string>('API_URL');
export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export interface AppConfig {
  apiUrl: string;
  appName: string;
  version: string;
}

// Provide values
export const appConfigProvider = {
  provide: APP_CONFIG,
  useValue: {
    apiUrl: 'https://api.example.com',
    appName: 'Code Duniya',
    version: '1.0.0'
  } as AppConfig
};

// Use in service
@Injectable()
export class DataService {
  private config = inject(APP_CONFIG);
  private apiUrl = inject(API_URL);

  constructor() {
    console.log('API URL:', this.config.apiUrl);
    console.log('App:', this.config.appName);
  }
}
```

---

# 🔴 MODULE 5: ROUTING

---

## 5.1 🧭 Router Setup

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 35 mins |

### Roman English Explanation
Routing se multiple pages ke beech navigate kar sakte hain bina page reload kiye. SPA (Single Page Application) ka ye core feature hai.

### Setup & Configuration
```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },
  
  { path: 'about', component: AboutComponent },
  
  { path: 'users', component: UserListComponent },
  
  // Dynamic route
  { path: 'users/:id', component: UserDetailComponent },
  
  // Lazy loading — module load hoga jab zaroorat padegi
  { 
    path: 'admin', 
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard]
  },
  
  // Protected route with data
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [authGuard],
    data: { title: 'User Profile' }
  },
  
  // Child routes
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then(m => m.productRoutes)
  },
  
  // Wildcard (404)
  { path: '**', component: NotFoundComponent }
];
```

### App Config
```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
};
```

### Template Navigation
```html
<!-- Navigation links -->
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
  <a [routerLink]="['/users', userId]" routerLinkActive="active">Profile</a>
  <button (click)="goBack()">Back</button>
</nav>

<!-- Router outlet — yahan page render hoga -->
<router-outlet />
```

### Route Parameters
```typescript
@Component({
  template: `User ID: {{ id }}`
})
export class UserDetailComponent {
  // Option 1: Signal-based input (Angular 15+)
  id = input.required<string>();
  
  // Option 2: ActivatedRoute
  private route = inject(ActivatedRoute);
  userId$ = this.route.paramMap.pipe(
    map(params => params.get('id')),
    filter(id => id !== null)
  );
  
  // Query params
  private queryParams = toSignal(this.route.queryParams);

  constructor() {
    // Listen to params changes
    this.route.params.subscribe(params => {
      console.log('User ID:', params['id']);
    });
  }

  goBack() {
    inject(Router).navigate(['/users']);
  }
}
```

---

## 5.2 🛡️ Guards

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 25 mins |

### Roman English Explanation
Guards route protection ke liye hote hain. Jaise — login check karna, role verify karna, data load hone se pehle check karna.

### Auth Guard
```typescript
import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

// Functional guard (Angular 14+, recommended)
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  // Redirect to login with return URL
  router.navigate(['/login'], {
    queryParams: { returnUrl: state.url }
  });
  return false;
};

// Role guard
export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const requiredRoles = route.data['roles'] as string[];
  
  if (!requiredRoles || requiredRoles.includes(authService.currentRole())) {
    return true;
  }
  
  inject(Router).navigate(['/access-denied']);
  return false;
};
```

### Route Resolver
```typescript
import { ResolveFn } from '@angular/router';

export const userResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserService);
  const id = route.paramMap.get('id')!;
  return userService.getUser(+id);  // or fetch from API
};

// In routes: { path: 'users/:id', component: UserDetailComponent, resolve: { user: userResolver } }
```

---

# 🟤 MODULE 6: FORMS

---

## 6.1 📝 Template-driven Forms

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Roman English Explanation
Template-driven forms simple hote hain. HTML mein hi form logic likhte hain. `ngModel` se two-way binding hoti hai.

### Example
```typescript
@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Contact Form</h2>
    
    <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
      <div>
        <label>Name:</label>
        <input name="name" ngModel required #name="ngModel">
        @if (name.invalid && name.touched) {
          <small>Name is required</small>
        }
      </div>

      <div>
        <label>Email:</label>
        <input name="email" ngModel required email #email="ngModel">
        @if (email.errors?.['required'] && email.touched) {
          <small>Email is required</small>
        }
        @if (email.errors?.['email'] && email.touched) {
          <small>Invalid email format</small>
        }
      </div>

      <div>
        <label>Message:</label>
        <textarea name="message" ngModel required minlength="10" #msg="ngModel"></textarea>
        @if (msg.invalid && msg.touched) {
          <small>Message must be at least 10 characters</small>
        }
      </div>

      <button type="submit" [disabled]="contactForm.invalid">Submit</button>
    </form>

    @if (submitted) {
      <p>Form submitted! Check console.</p>
    }
  `
})
export class ContactFormComponent {
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form data:', form.value);
      this.submitted = true;
      form.reset();
    }
  }
}
```

---

## 6.2 ⚡ Reactive Forms

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 40 mins |

### Roman English Explanation
Reactive forms zyada powerful hain. Form logic component mein rehta hai. Dynamic validation, nested forms, form arrays sab easily handle kar sakte hain.

### Example
```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Registration Form</h2>

    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <!-- Personal Info -->
      <fieldset>
        <legend>Personal Info</legend>
        
        <div>
          <label>Name:</label>
          <input formControlName="name">
          @if (registrationForm.get('name')?.invalid && registrationForm.get('name')?.touched) {
            <small>Name is required (min 3 chars)</small>
          }
        </div>

        <div>
          <label>Email:</label>
          <input formControlName="email">
          @if (registrationForm.get('email')?.errors?.['required']) {
            <small>Email required</small>
          }
          @if (registrationForm.get('email')?.errors?.['email']) {
            <small>Invalid email</small>
          }
        </div>

        <div>
          <label>Age:</label>
          <input type="number" formControlName="age">
          @if (registrationForm.get('age')?.errors?.['min']) {
            <small>Must be 18+</small>
          }
        </div>
      </fieldset>

      <!-- Address (Nested group) -->
      <fieldset formGroupName="address">
        <legend>Address</legend>
        <input formControlName="street" placeholder="Street">
        <input formControlName="city" placeholder="City">
        <input formControlName="zip" placeholder="ZIP Code">
      </fieldset>

      <!-- Skills (Dynamic array) -->
      <fieldset>
        <legend>Skills</legend>
        <div formArrayName="skills">
          @for (skill of skills.controls; track i; let i = $index) {
            <div>
              <input [formControlName]="i">
              <button type="button" (click)="removeSkill(i)">✖</button>
            </div>
          }
        </div>
        <button type="button" (click)="addSkill()">+ Add Skill</button>
      </fieldset>

      <button type="submit" [disabled]="registrationForm.invalid">Register</button>
    </form>

    <!-- Form value preview -->
    <div>
      <h3>Form Value (JSON)</h3>
      <pre>{{ registrationForm.value | json }}</pre>
    </div>
  `
})
export class RegistrationFormComponent {
  private fb = inject(FormBuilder);

  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.min(18), Validators.max(120)]],
    address: this.fb.group({
      street: [''],
      city: ['', Validators.required],
      zip: ['']
    }),
    skills: this.fb.array([''])
  });

  get skills() {
    return this.registrationForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
      this.registrationForm.reset();
    }
  }
}
```

---

# 🔴 MODULE 7: HTTP & API

---

## 7.1 🌐 HttpClient

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 35 mins |

### Roman English Explanation
`HttpClient` se APIs se data fetch/post/update/delete karte hain. Observable return karta hai jise subscribe karna padta hai. Ab `httpResource()` (Angular 19+) bhi hai jo signal-based hai.

### HTTP Service Example
```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  // GET
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  // GET with params
  getPostsByUser(userId: number): Observable<Post[]> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Post[]>(`${this.baseUrl}/posts`, { params });
  }

  // GET single
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }

  // POST
  createPost(post: Partial<Post>): Observable<Post> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Post>(`${this.baseUrl}/posts`, post, { headers });
  }

  // PUT
  updatePost(id: number, post: Partial<Post>): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/posts/${id}`, post);
  }

  // DELETE
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/posts/${id}`);
  }

  // With error handling
  getPostSafe(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to fetch post'));
      })
    );
  }

  // Signal-based (Angular 19+)
  // postsResource = httpResource<Post[]>(() => `${this.baseUrl}/posts`);

  // Convert to signal
  postsSignal = toSignal(
    this.http.get<Post[]>(`${this.baseUrl}/posts`),
    { initialValue: [] as Post[] }
  );
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```

### Component with HTTP
```typescript
@Component({
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h2>Posts</h2>

    @if (loading()) {
      <p>Loading...</p>
    }

    @if (error()) {
      <p style="color: red">{{ error() }}</p>
    }

    @for (post of posts(); track post.id) {
      <div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    }
  `
})
export class PostListComponent {
  private api = inject(ApiService);

  posts = signal<Post[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.loadPosts();
  }

  loadPosts() {
    this.loading.set(true);
    this.api.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load posts');
        this.loading.set(false);
      }
    });
  }

  createPost() {
    this.api.createPost({
      title: 'New Post',
      body: 'This is a new post',
      userId: 1
    }).subscribe(newPost => {
      this.posts.update(posts => [newPost, ...posts]);
    });
  }
}
```

### HTTP Interceptor
```typescript
import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private auth = inject(AuthService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();

    if (token) {
      // Clone request with auth header
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}

// Error interceptor
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = 'An error occurred';
        
        if (error.status === 401) {
          errorMessage = 'Unauthorized. Please login.';
        } else if (error.status === 403) {
          errorMessage = 'Access denied.';
        } else if (error.status === 404) {
          errorMessage = 'Resource not found.';
        } else if (error.status >= 500) {
          errorMessage = 'Server error. Please try later.';
        }

        console.error(`HTTP Error ${error.status}:`, errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
```

---

# ⚫ MODULE 8: ADVANCED ANGULAR

---

## 8.1 📶 Signals (State Management)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 35 mins |

### Roman English Explanation
Signals Angular 16+ mein aaye hain. Ye reactive values hote hain jo change hone pe automatically UI update karte hain. Zone.js ki zaroorat nahi (zoneless change detection).

### Signal Examples
```typescript
import { Component, signal, computed, effect, inject } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h2>Shopping Cart</h2>

    <div>
      @for (item of items(); track item.id) {
        <div>
          {{ item.name }} — ₹{{ item.price }}
          <button (click)="removeItem(item.id)">✖</button>
        </div>
      }
    </div>

    <p>Total Items: {{ itemCount() }}</p>
    <p>Subtotal: ₹{{ subtotal() }}</p>
    <p>Tax (18%): ₹{{ tax() }}</p>
    <p><strong>Total: ₹{{ total() }}</strong></p>

    <button (click)="addItem()">+ Add Item</button>
    <button (click)="clearCart()">Clear Cart</button>
  `
})
export class CartComponent {
  // Signal — reactive value
  items = signal<CartItem[]>([
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mouse', price: 500 }
  ]);

  // Computed — derived value (automatically recalculates)
  itemCount = computed(() => this.items().length);
  subtotal = computed(() => this.items().reduce((sum, item) => sum + item.price, 0));
  tax = computed(() => this.subtotal() * 0.18);
  total = computed(() => this.subtotal() + this.tax());

  // Effect — side effect jab signal change ho
  private logEffect = effect(() => {
    console.log('Cart updated:', this.items());
    localStorage.setItem('cart', JSON.stringify(this.items()));
  });

  addItem() {
    this.items.update(items => [...items, {
      id: Date.now(),
      name: `Item ${items.length + 1}`,
      price: Math.floor(Math.random() * 1000) + 100
    }]);
  }

  removeItem(id: number) {
    this.items.update(items => items.filter(item => item.id !== id));
  }

  clearCart() {
    this.items.set([]);
  }
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
}
```

---

## 8.2 ⚡ Performance Optimization

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 25 mins |

### Roman English Explanation
Angular apps ko fast rakhne ke liye optimization techniques: lazy loading, OnPush change detection, trackBy, deferred loading.

### Techniques
```typescript
// 1. OnPush Change Detection
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,  // Manual change detection
  template: `...`
})
export class OptimizedComponent {
  // Sirf jab @Input change ho ya signal update ho tab hi view update hoga
}

// 2. trackBy in @for
@for (item of items; track item.id) { }  // Angular element reuse karega

// 3. Deferred loading (Angular 17+)
@defer (on interaction) {
  <app-heavy-component />
} @placeholder {
  <p>Click to load heavy component</p>
} @loading {
  <p>Loading...</p>
} @error {
  <p>Failed to load</p>
}

// 4. Lazy loading routes
{ path: 'admin', loadComponent: () => import('./admin.component').then(m => m.AdminComponent) }

// 5. Virtual scrolling (Angular CDK)
<cdk-virtual-scroll-viewport itemSize="50" class="viewport">
  <div *cdkVirtualFor="let item of items">{{ item.name }}</div>
</cdk-virtual-scroll-viewport>

// 6. Pure pipes (no state changes)
@Pipe({ name: 'purePipe', pure: true })
```

---

# 💼 INTERVIEW MODULE

---

## Angular Interview Questions

### Beginner

**Q1: Component kya hai?**
A: Component Angular ki basic building block hai. Template (HTML), Class (TS), Styles (CSS) teen parts hote hain. `@Component` decorator se define karte hain.

**Q2: Data binding types kaunsa hai?**
A: 4 types: Interpolation `{{ }}`, Property binding `[property]`, Event binding `(event)`, Two-way binding `[(ngModel)]`.

**Q3: `*ngIf` aur `@if` mein difference?**
A: `*ngIf` structural directive hai (Angular 2+). `@if` naya control flow hai (Angular 17+). `@if` faster hai, better type checking, zones compatibility.

**Q4: Service kya hai?**
A: Reusable logic ke liye class. `@Injectable` decorator se. API calls, data sharing, business logic service mein rakhte hain. DI se inject karte hain.

**Q5: Pipe kya hai aur custom pipe kaise banaye?**
A: Pipe data transform karta hai template mein. `@Pipe` decorator se banate hain, `PipeTransform` interface implement karte hain.

### Intermediate

**Q6: Observable aur Promise mein difference?**
A: Observable multiple values emit kar sakta hai (stream), lazy hai, cancelable hai. Promise single value, eager, cancel nahi kar sakte.

**Q7: Reactive forms aur template-driven forms mein difference?**
A: Reactive — form logic component mein, more flexible, easier validation, dynamic forms. Template-driven — form logic HTML mein, simple, ngModel based.

**Q8: Route guards kaunsa hai?**
A: CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad. Functional guards (Angular 14+) recommended.

**Q9: Change Detection kaise kaam karta hai?**
A: Angular Zone.js use karta hai async operations detect karne ke liye. OnPush strategy se performance better hoti hai — sirf @Input change ya events pe check karta hai.

**Q10: Standalone components kya hain?**
A: Modules ki zaroorat nahi. Har component apne dependencies directly import karta hai. Angular 15+ se stable, ab default hai.

### Advanced

**Q11: Signals kya hain aur zone.js se better kyun hain?**
A: Signals reactive values hain jo change detection trigger karte hain bina Zone.js ke. Fine-grained reactivity — sirf affected component update hota hai. Better performance, zoneless apps possible.

**Q12: Custom Angular Schematics kaise banaye?**
A: `ng generate schematic` se. Templates folder, schema.json, factory function. CLI commands customize kar sakte hain.

**Q13: Content projection kya hai?**
A: `ng-content` se parent component child mein content pass karta hai. Multi-slot projection (select attribute) bhi possible hai.

**Q14: Angular Elements kya hai?**
A: Angular components ko custom elements (Web Components) mein convert karta hai. Kisi bhi framework ke saath use kar sakte hain bina Angular ki zaroorat ke.

**Q15: State management Angular mein kaise karte hain?**
A: Services (simple apps), Signals (medium), NgRx/NGXS/Akita (complex apps). Signal-based state management ab recommended approach hai.

---

## Angular Cheat Sheet

```typescript
// Component
@Component({ selector: 'app-comp', standalone: true, template: ``, styles: [] })
export class Comp { }

// Data Binding
{{ value }}          // Interpolation
[property]="value"   // Property
(event)="handler()"  // Event
[(ngModel)]="value"  // Two-way

// Control Flow (Angular 17+)
@if (condition) { } @else { }
@for (item of items; track item.id) { } @empty { }
@switch (value) { @case ('a') { } @default { } }

// Input/Output
@Input() name!: string;
@Output() change = new EventEmitter<string>();

// Service
@Injectable({ providedIn: 'root' })
export class MyService { }

// Router
routerLink="/path"
routerLinkActive="active"
<router-outlet />
inject(Router).navigate(['/path', id]);

// HTTP
inject(HttpClient).get<Type>('/api/data')
    .subscribe(data => {});

// Signals
count = signal(0);
doubled = computed(() => count() * 2);
effect(() => console.log(count()));
count.update(c => c + 1);
```

---

## 🚀 Projects

### Beginner Projects
1. **Todo App** — CRUD with signals
2. **User Directory** — List, search, filter users
3. **Weather App** — API se weather data dikhana
4. **Calculator** — Basic math operations
5. **Countdown Timer** — With start/pause/reset

### Intermediate Projects
1. **Blog Platform** — Posts, comments, routing
2. **Shopping Cart** — Products, cart, checkout
3. **Task Manager** — Drag-drop, categories, filters
4. **Quiz App** — Questions, scoring, timer
5. **Expense Tracker** — CRUD, charts, summaries

### Advanced Projects
1. **E-Commerce Admin** — Complete admin panel
2. **Real-time Chat** — WebSocket + Angular
3. **Social Dashboard** — Analytics, charts, widgets
4. **Project Management** — Kanban board, teams
5. **Angular + Firebase App** — Auth, Firestore, hosting

---

> **"Angular — Google ka superpower! Enterprise apps ka boss!" 🅰️🚀**

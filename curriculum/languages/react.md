# ⚛️ React 19 - Complete Curriculum (2026)

> **"React = Reusable UI Components. Yeh modern web development ka standard hai."**

---

## 🗺️ Roadmap

```
🟢 BEGINNER: JSX | Components | Props | State | useState | Events | Conditional Rendering
🔵 INTERMEDIATE: useEffect | useRef | Forms | Lists | Context | useReducer | Custom Hooks
🟠 ADVANCED: Performance | useMemo | useCallback | Suspense | Error Boundaries | Portals
🔴 PROFESSIONAL: Server Components | Actions | Patterns | Testing | SSR | Next.js
⚫ EXPERT: React Server Functions | Concurrent Features | Compiler | Architecture
```

## 📖 What is React?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 30 mins |
| **Prerequisites** | JavaScript, TypeScript |

### Definition
React is a **JavaScript library** for building user interfaces developed by Meta (Facebook, 2013).

### Roman English Explanation
React ko "Lego blocks" samjho. Aap chhote-chhote components (Lego pieces) banate ho aur unhe jodkar ek bada application banate ho. Jab data change hota hai, React automatically sirf wahi part update karta hai jo badla hai - poora page nahi refresh karta.

### Core Concepts
- **Components** - Reusable UI pieces
- **JSX** - JavaScript + HTML (template language)
- **Virtual DOM** - Efficient updates
- **Unidirectional Data Flow** - Parent → Child
- **Hooks** - State and lifecycle in function components

---

## 🟢 MODULE 1: BEGINNER

### Setup
```bash
# Vite (recommended 2026)
npm create vite@latest my-app -- --template react-ts

# Next.js (full framework)
npx create-next-app@latest my-app

# React + TypeScript
npm create vite@latest my-app -- --template react-ts
```

### Project Structure
```
src/
├── components/    # Reusable components
│   ├── Button.tsx
│   └── Card.tsx
├── hooks/         # Custom hooks
├── pages/         # Page components
├── styles/        # CSS files
├── types/         # TypeScript types
├── utils/         # Helper functions
├── App.tsx        # Root component
└── main.tsx       # Entry point
```

### JSX (JavaScript XML)
```tsx
// JSX = HTML-like syntax in JavaScript
const element = <h1>Hello, World!</h1>;

// JSX rules:
// 1. Single root element
const wrong = (
    <h1>Title</h1>    // ❌ Two root elements
    <p>Text</p>
);
const correct = (
    <div>
        <h1>Title</h1>
        <p>Text</p>
    </div>
);
// or use Fragment
const correct2 = (
    <>
        <h1>Title</h1>
        <p>Text</p>
    </>
);

// 2. className instead of class
const div = <div className="container">Content</div>;

// 3. JavaScript expressions in {}
const name = "Rahul";
const element = <h1>Hello, {name}!</h1>;
const result = <p>2 + 2 = {2 + 2}</p>;

// 4. Self-closing tags must close
<img src="photo.jpg" alt="Photo" />  // ✅
<br />  // ✅

// 5. Style as object (camelCase)
const style = { color: 'red', fontSize: '20px' };
const styled = <p style={style}>Styled text</p>;
```

### Components
```tsx
// 1. Function Component (Standard)
function Welcome({ name }: { name: string }) {
    return <h1>Hello, {name}!</h1>;
}

// 2. Arrow Function Component
const Welcome: React.FC<{ name: string }> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

// 3. With TypeScript
interface UserProps {
    name: string;
    age?: number;
    isAdmin?: boolean;
}

const UserCard: React.FC<UserProps> = ({ name, age, isAdmin = false }) => {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            {age && <p>Age: {age}</p>}
            {isAdmin && <span className="badge">Admin</span>}
        </div>
    );
};

// Using components
function App() {
    return (
        <div>
            <Welcome name="Rahul" />
            <UserCard name="Priya" age={25} isAdmin />
        </div>
    );
}
```

### Props
```tsx
// Props = Properties (data passed from parent to child)

// Parent
function App() {
    return <Child name="Rahul" age={25} isActive={true} />;
}

// Child
interface ChildProps {
    name: string;
    age: number;
    isActive: boolean;
}

const Child: React.FC<ChildProps> = ({ name, age, isActive }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
};

// children prop
interface CardProps {
    title: string;
    children: React.ReactNode;  // Anything renderable
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-body">{children}</div>
        </div>
    );
};

// Usage
<Card title="My Card">
    <p>This is the card body</p>
    <button>Click</button>
</Card>
```

### useState Hook
```tsx
// useState = component state management
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);  // Initial: 0
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

// useState with objects
const [user, setUser] = useState({ name: '', age: 0 });

// Update object (spread to keep other properties)
setUser(prev => ({ ...prev, name: 'Rahul' }));

// useState with arrays
const [items, setItems] = useState<string[]>([]);
setItems(prev => [...prev, 'New Item']);  // Add
setItems(prev => prev.filter(i => i !== id));  // Remove
```

### Event Handling
```tsx
function Form() {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked', e.clientX, e.clientY);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Value:', e.target.value);
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}
```

### Conditional Rendering
```tsx
function UserGreeting({ isLoggedIn, user }: Props) {
    // if/else
    if (!isLoggedIn) {
        return <LoginButton />;
    }
    
    return (
        <div>
            {/* Ternary */}
            <h1>{user.name ? `Hello ${user.name}` : 'Hello Guest'}</h1>
            
            {/* && (show if true) */}
            {user.isAdmin && <AdminPanel />}
            
            {/* || (fallback if falsy) */}
            {user.bio || 'No bio available'}
            
            {/* Ternary for toggle */}
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide' : 'Show'} Details
            </button>
            
            {/* Conditional class */}
            <div className={`card ${isActive ? 'active' : ''}`}>...</div>
        </div>
    );
}
```

### Lists & Keys
```tsx
interface User {
    id: number;
    name: string;
    email: string;
}

function UserList({ users }: { users: User[] }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>  {/* Key is REQUIRED for lists */}
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </li>
            ))}
        </ul>
    );
}

// Filtered list
const activeUsers = users.filter(u => u.isActive);
const userItems = activeUsers.map(u => <li key={u.id}>{u.name}</li>);
```

---

## 🔵 MODULE 2: INTERMEDIATE

### useEffect Hook
```tsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }: { userId: number }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // 1. Run on mount (empty deps)
    useEffect(() => {
        console.log('Component mounted');
        
        // Cleanup function (runs on unmount)
        return () => {
            console.log('Component unmounted');
        };
    }, []);
    
    // 2. Run when userId changes
    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`/api/users/${userId}`);
                if (!response.ok) throw new Error('Not found');
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error');
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
        
        // Cleanup: cancel request if component unmounts
        return () => {
            // AbortController logic here
        };
    }, [userId]);  // Re-run when userId changes
    
    // 3. Run on every render
    useEffect(() => {
        console.log('Rendered');
    });  // No deps array
    
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    if (!user) return <NotFound />;
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
```

### useRef Hook
```tsx
import { useRef, useEffect } from 'react';

function AutoFocusInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputRef.current?.focus();  // Auto focus on mount
    }, []);
    
    return <input ref={inputRef} type="text" />;
}

// Mutable values (no re-render)
function Timer() {
    const countRef = useRef(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            countRef.current += 1;
            console.log(countRef.current);  // Updates but no re-render
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    return <p>Check console for count</p>;
}
```

### Forms & Controlled Components
```tsx
function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: 0,
        country: '',
        agree: false
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Send to API...
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} required />
            <input name="email" type="email" value={formData.email} onChange={handleChange} />
            <input name="password" type="password" value={formData.password} onChange={handleChange} />
            <input name="age" type="number" value={formData.age} onChange={handleChange} />
            <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select</option>
                <option value="IN">India</option>
                <option value="US">USA</option>
            </select>
            <label>
                <input name="agree" type="checkbox" checked={formData.agree} onChange={handleChange} />
                I agree to terms
            </label>
            <button type="submit">Register</button>
        </form>
    );
}
```

### Context API
```tsx
import { createContext, useContext, useState } from 'react';

// 1. Create context
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2. Provider component
function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    
    const login = async (email: string, password: string) => {
        const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
        const data = await response.json();
        setUser(data.user);
    };
    
    const logout = () => {
        setUser(null);
    };
    
    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

// 3. Custom hook
function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}

// 4. Usage
function Profile() {
    const { user, logout, isAuthenticated } = useAuth();
    
    if (!isAuthenticated) return <Login />;
    
    return (
        <div>
            <h2>Welcome {user?.name}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
```

### useReducer Hook
```tsx
import { useReducer } from 'react';

// Action types
type Action = 
    | { type: 'INCREMENT'; payload?: number }
    | { type: 'DECREMENT' }
    | { type: 'RESET' };

// State type
interface State {
    count: number;
    lastAction: string;
}

// Reducer function
function counterReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + (action.payload || 1), lastAction: 'INCREMENT' };
        case 'DECREMENT':
            return { count: state.count - 1, lastAction: 'DECREMENT' };
        case 'RESET':
            return { count: 0, lastAction: 'RESET' };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0, lastAction: '' });
    
    return (
        <div>
            <p>Count: {state.count}</p>
            <p>Last: {state.lastAction}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
}
```

### Custom Hooks
```tsx
// Custom hook: useFetch
import { useState, useEffect } from 'react';

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const controller = new AbortController();
        
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
        
        return () => controller.abort();
    }, [url]);
    
    return { data, loading, error };
}

// Usage
function Users() {
    const { data: users, loading, error } = useFetch<User[]>('/api/users');
    
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    return <UserList users={users || []} />;
}

// Custom hook: useLocalStorage
function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue] as const;
}
```

---

## 🟠 MODULE 3: ADVANCED

### useMemo & useCallback
```tsx
import { useMemo, useCallback } from 'react';

// useMemo - memoize computed values
function ExpensiveList({ items, filter }: Props) {
    const filteredItems = useMemo(() => {
        console.log('Filtering...');  // Only runs when items/filter changes
        return items.filter(item => item.name.includes(filter));
    }, [items, filter]);
    
    return <List items={filteredItems} />;
}

// useCallback - memoize functions
function Parent() {
    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);  // Function never changes (stable reference)
    
    return <Child onClick={handleClick} />;
}

// useCallback with dependencies
const saveUser = useCallback(async (user: User) => {
    await api.saveUser(user);
}, [api]);  // Only changes if api changes
```

### React.memo
```tsx
// Prevents re-render if props haven't changed
const ExpensiveComponent = React.memo(({ data }: { data: Data }) => {
    console.log('Rendering...');
    return <div>{/* Expensive render */}</div>;
});

// With custom comparison
const MemoizedComponent = React.memo(
    ({ user }: { user: User }) => <Profile user={user} />,
    (prev, next) => prev.user.id === next.user.id  // Only compare id
);
```

### Suspense & Lazy Loading
```tsx
import { Suspense, lazy } from 'react';

// Lazy load component
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Suspense>
    );
}

// Error Boundaries
class ErrorBoundary extends React.Component<
    { children: React.ReactNode; fallback: React.ReactNode },
    { hasError: boolean }
> {
    state = { hasError: false };
    
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    
    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error('Error:', error, info);
    }
    
    render() {
        if (this.state.hasError) return this.props.fallback;
        return this.props.children;
    }
}
```

### Portals
```tsx
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;
    
    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')!  // Renders outside parent tree
    );
}
```

---

## 🔴 MODULE 4: PROFESSIONAL

### Server Components (React 19+)
```tsx
// Server Component - runs on server, no client JS
// Components are server by default in Next.js 15+

// UserList.server.tsx (Server Component)
async function UserList() {
    const users = await db.users.findAll();  // Direct DB access!
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

// Client Component - needs interactivity
'use client';
function LikeButton() {
    const [liked, setLiked] = useState(false);
    return <button onClick={() => setLiked(!liked)}>{liked ? '❤️' : '🤍'}</button>;
}
```

### React 19 New Features
```tsx
// use() hook - read resources in render
import { use } from 'react';

function Comments({ commentsPromise }: { commentsPromise: Promise<Comment[]> }) {
    const comments = use(commentsPromise);  // Suspense-aware
    
    return comments.map(c => <Comment key={c.id} comment={c} />);
}

// Server Actions
async function submitForm(formData: FormData) {
    'use server';
    const name = formData.get('name');
    await db.users.create({ name });
    revalidatePath('/users');
}

// useOptimistic - optimistic updates
const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (state, newLike) => state + 1
);
```

---

## 💼 INTERVIEW

### Top Questions
1. Virtual DOM kya hai?
2. useEffect vs useLayoutEffect?
3. useState vs useReducer?
4. Props drilling se kaise bachein?
5. What are custom hooks?
6. What is React.memo?
7. useMemo vs useCallback?
8. What is reconciliation?
9. Controlled vs uncontrolled components?
10. What are keys in React?

---

> **"React seekho, modern web developer bano!" ⚛️**
>
> **[Next: Next.js →](nextjs.md)**

[Back to Main Curriculum →](../README.md)

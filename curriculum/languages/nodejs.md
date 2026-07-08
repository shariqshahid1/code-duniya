# 🟢 Node.js & Express.js - Complete Curriculum (2026)

> **"Node.js = JavaScript on Server. Express = Node.js framework for web apps."**

---

## 📖 What is Node.js?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |
| **Prerequisites** | JavaScript |

### Definition
Node.js is a **JavaScript runtime** built on Chrome's V8 engine. It runs JavaScript outside the browser - on the server.

### Roman English Explanation
Pehle JavaScript sirf browser mein chalti thi. Node.js ne JavaScript ko server par bhi chalane layak bana diya. Ab aap JavaScript mein hi server, APIs, file system sab bana sakte ho. Node.js "event-driven" aur "non-blocking" hai - matlab ek request ruki nahi to doosri wait nahi karti.

### Key Features
- **Non-blocking I/O** - Async by default
- **Event-driven** - Event loop handles requests
- **NPM** - World's largest package ecosystem
- **Single-threaded** but efficient with async
- **Cross-platform** - Windows, Mac, Linux

---

## 🗺️ Complete Roadmap

```
🟢 BEGINNER: What is Node? | Setup | Modules | File System | Path | Events | NPM
🔵 INTERMEDIATE: Express | Routing | Middleware | REST API | Error Handling | Auth
🟠 ADVANCED: Database (MongoDB/SQL) | Auth (JWT) | File Upload | WebSockets | Testing
🔴 PROFESSIONAL: Deployment | Scaling | Security | Caching (Redis) | Microservices
⚫ EXPERT: Clustering | Worker Threads | Streams | Performance | Custom NPM Packages
```

### Setup & Basics
```javascript
// 1. Setup
// npm init -y  (create package.json)

// 2. CommonJS vs ES Modules
// CommonJS (default)
const express = require('express');
module.exports = myFunction;

// ES Modules (package.json: "type": "module")
import express from 'express';
export default myFunction;

// 3. Global vs Local
console.log(global);  // Global object (like window in browser)
console.log(__dirname);  // Current directory path
console.log(__filename); // Current file path
process.env.NODE_ENV;    // Environment variable
```

### Core Modules
```javascript
// File System (fs)
import fs from 'fs/promises';  // Promise based

// Read file
const data = await fs.readFile('file.txt', 'utf-8');

// Write file
await fs.writeFile('output.txt', 'Hello World');

// Check if exists
try { await fs.access('file.txt'); } catch { /* not found */ }

// Path module
import path from 'path';

path.join('users', 'profile', 'photo.jpg');  // Normalize path
path.resolve('src', '..', 'dist');             // Absolute path
path.basename('/users/file.txt');              // 'file.txt'
path.extname('image.jpg');                     // '.jpg'

// Events (EventEmitter)
import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on('data', (msg) => console.log('Received:', msg));
emitter.emit('data', 'Hello');
```

### Express.js
```javascript
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

// Route parameters
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const { page, limit } = req.query;  // Query params
    res.json({ id, page, limit });
});

// POST with body
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    // Create user...
    res.status(201).json({ id: 1, name, email });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### REST API Complete
```javascript
import express from 'express';

const app = express();
app.use(express.json());

// In-memory database
let users = [
    { id: 1, name: 'Rahul', email: 'rahul@example.com' },
    { id: 2, name: 'Priya', email: 'priya@example.com' }
];
let nextId = 3;

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email required' });
    }
    const user = { id: nextId++, name, email };
    users.push(user);
    res.status(201).json(user);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'Not found' });
    
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Not found' });
    users.splice(index, 1);
    res.status(204).send();
});
```

### Middleware
```javascript
// Custom middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();  // Move to next middleware/route
};

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        res.status(403).json({ error: 'Invalid token' });
    }
};

// Global middleware
app.use(logger);

// Route-specific middleware
app.get('/api/profile', authenticate, (req, res) => {
    res.json(req.user);
});

// Error handling middleware (4 parameters!)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});
```

### Database with MongoDB
```javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db('app');

// CRUD operations
const users = db.collection('users');

// Create
await users.insertOne({ name: 'Rahul', email: 'rahul@example.com' });

// Read
const allUsers = await users.find({}).toArray();
const user = await users.findOne({ email: 'rahul@example.com' });

// Update
await users.updateOne(
    { email: 'rahul@example.com' },
    { $set: { name: 'Rahul Sharma' } }
);

// Delete
await users.deleteOne({ email: 'old@example.com' });
```

### JWT Authentication
```javascript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Register
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save user to database
    const user = await db.collection('users').insertOne({
        name, email, password: hashedPassword
    });
    
    res.status(201).json({ message: 'User created' });
});

// Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await db.collection('users').findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
    
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});
```

### File Upload
```javascript
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },  // 5MB
    fileFilter: (req, file, cb) => {
        const allowed = ['.jpg', '.jpeg', '.png', '.pdf'];
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, allowed.includes(ext));
    }
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json({ 
        message: 'File uploaded',
        filename: req.file.filename,
        path: req.file.path
    });
});
```

---

> **"Node.js se full-stack JavaScript developer bano!" 🚀**
>
> **[Next: Python →](python.md)**

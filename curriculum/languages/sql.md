# 🗄️ SQL & MongoDB - Complete Curriculum (2026)

> **"SQL = Structured Data (Tables). MongoDB = Flexible Data (Documents)."**

---

## 📖 SQL - Relational Databases

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Prerequisites** | Programming basics |

### What is SQL?
SQL = **Structured Query Language**. Tables mein data store karta hai (Excel jaisa). Examples: MySQL, PostgreSQL, SQLite.

### Roman English Explanation
SQL ko "filing cabinet" samjho. Aapke paas tables hain (jaise Excel sheets), har table mein rows (records) aur columns (fields) hain. SQL se aap data create, read, update, delete kar sakte ho.

## 🗺️ SQL Complete Roadmap

```
🟢 BEGINNER: What is DB? | CREATE TABLE | INSERT | SELECT | WHERE | UPDATE | DELETE
🔵 INTERMEDIATE: JOIN | GROUP BY | HAVING | Subqueries | Indexes | Constraints
🟠 ADVANCED: Transactions | Stored Procedures | Views | Functions | Normalization
🔴 PROFESSIONAL: Performance Tuning | Security | Backup/Restore | Replication
```

### Basic SQL
```sql
-- CREATE Database
CREATE DATABASE school;
USE school;

-- CREATE Table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT CHECK (age >= 0),
    city VARCHAR(100) DEFAULT 'Delhi',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT
INSERT INTO students (name, email, age, city)
VALUES ('Rahul', 'rahul@example.com', 25, 'Mumbai');

INSERT INTO students (name, email, age) 
VALUES ('Priya', 'priya@example.com', 22);

-- SELECT
SELECT * FROM students;
SELECT name, email FROM students;
SELECT * FROM students WHERE age > 20;
SELECT * FROM students ORDER BY age DESC;
SELECT * FROM students LIMIT 10 OFFSET 0;
SELECT COUNT(*) FROM students;
SELECT city, COUNT(*) FROM students GROUP BY city;
SELECT city, COUNT(*) FROM students 
GROUP BY city HAVING COUNT(*) > 1;

-- UPDATE
UPDATE students SET city = 'Bangalore' 
WHERE id = 1;

-- DELETE
DELETE FROM students WHERE id = 3;
-- TRUNCATE (delete all)
TRUNCATE TABLE students;
```

### Joins
```sql
-- INNER JOIN (only matching)
SELECT s.name, c.course_name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;

-- LEFT JOIN (all students, even if no enrollment)
SELECT s.name, c.course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;
```

### Normalization
```
1NF: Atomic values (no lists in cells)
2NF: No partial dependency (all columns depend on full PK)
3NF: No transitive dependency (non-key → non-key)
BCNF: Every determinant is a candidate key
```

---

## 📖 MongoDB - NoSQL Database

### MongoDB vs SQL
| Feature | SQL | MongoDB |
|---------|-----|---------|
| Data Model | Tables (rows/cols) | Documents (JSON) |
| Schema | Fixed | Flexible |
| Relationships | JOINs | Embedded/References |
| Scaling | Vertical | Horizontal (sharding) |
| Query | SQL | JSON-like |

### MongoDB Commands
```javascript
// Show databases
show dbs
use school

// Collections (like tables)
db.createCollection('students')

// INSERT
db.students.insertOne({
    name: 'Rahul',
    email: 'rahul@example.com',
    age: 25,
    address: { city: 'Delhi', pincode: 110001 },
    hobbies: ['coding', 'chess']
});

db.students.insertMany([
    { name: 'Priya', age: 22 },
    { name: 'Amit', age: 24 }
]);

// SELECT
db.students.find()
db.students.find({ age: { $gt: 20 } })
db.students.find({ name: /^R/ })  // Regex
db.students.find().sort({ age: -1 })
db.students.find().limit(10)
db.students.find().skip(20).limit(10)  // Pagination

// Projection (select columns)
db.students.find({}, { name: 1, email: 1, _id: 0 })

// UPDATE
db.students.updateOne(
    { name: 'Rahul' },
    { $set: { age: 26 } }
);

db.students.updateMany(
    { city: 'Delhi' },
    { $inc: { age: 1 } }
);

// DELETE
db.students.deleteOne({ name: 'Rahul' });
db.students.deleteMany({ age: { $lt: 18 } });

// Aggregation
db.students.aggregate([
    { $group: { _id: '$city', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 5 }
]);
```

---

> **"Database programming ki foundation hai. Data sambhalo, duniya sambhalo!" 📊**
>
> **[Next: DSA →](../dsa/dsa.md)**

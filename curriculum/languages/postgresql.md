# 🐘 PostgreSQL — Complete Curriculum (2026)

> **"PostgreSQL — World's most advanced open source relational database! ACID compliant, extensible, aur production ready."**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 1996 | Postgres95 | SQL support |
| 2005 | PostgreSQL 8.0 | Windows support |
| 2010 | PostgreSQL 9.0 | Streaming replication, Hot Standby |
| 2016 | PostgreSQL 9.6 | Parallel query, UPSERT |
| 2020 | PostgreSQL 13 | B-tree dedup, incremental sort |
| 2023 | PostgreSQL 16 | Logical replication enhancements |
| 2025 | PostgreSQL 17 | Improved performance, JSON enhancements |
| 2026 | PostgreSQL 18 | AI extensions, better sharding |

### Key Facts
- **License**: Open Source (PostgreSQL license)
- **Type**: Object-relational database (ORDBMS)
- **Used By**: Apple, Instagram, Reddit, Twitch, Uber, Spotify

---

## 🟢 BEGINNER POSTGRESQL

### Installation
```bash
# Windows
choco install postgresql

# macOS
brew install postgresql

# Linux (Ubuntu/Debian)
sudo apt install postgresql postgresql-contrib

# Start service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Connect to PostgreSQL
```bash
# As postgres user
sudo -u postgres psql

# With specific database
psql -h localhost -U myuser -d mydb

# Connection string
# postgresql://user:password@host:port/database
```

### Basic Commands (psql)
```sql
-- List databases
\l

-- Connect to database
\c dbname

-- List tables
\dt

-- Describe table
\d tablename

-- List schemas
\dn

-- Show query execution plan
\i file.sql  -- Run SQL file

-- Help
\h           -- SQL commands help
\?           -- psql commands help

-- Quit
\q
```

### Data Types
```sql
-- Numeric
INTEGER, BIGINT, SMALLINT
DECIMAL(p,s), NUMERIC(p,s)
REAL, DOUBLE PRECISION, MONEY
SERIAL, BIGSERIAL (auto-increment)

-- Character
CHAR(n), VARCHAR(n), TEXT

-- Date/Time
DATE, TIME, TIMESTAMP
TIMESTAMPTZ, INTERVAL
TIMEZONE

-- Boolean
BOOLEAN (TRUE/FALSE/NULL)

-- JSON
JSON, JSONB (binary, indexed)

-- Array
INTEGER[], TEXT[], JSONB[]

-- Network
INET, CIDR, MACADDR

-- UUID
UUID

-- Geometric
POINT, LINE, LSEG, BOX, CIRCLE

-- Range
INT4RANGE, INT8RANGE, NUMRANGE, TSRANGE, TSTZRANGE, DATERANGE

-- Binary
BYTEA

-- Full Text
TSVECTOR, TSQUERY
```

### CREATE TABLE
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 0),
    salary DECIMAL(10,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    bio TEXT,
    preferences JSONB DEFAULT '{}',
    tags TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- With constraints
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    total DECIMAL(10,2) NOT NULL CHECK (total >= 0),
    status VARCHAR(20) DEFAULT 'pending'
        CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- With indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created ON users(created_at DESC);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE UNIQUE INDEX idx_users_email_lower ON users(LOWER(email));

-- JSONB index
CREATE INDEX idx_users_prefs ON users USING GIN(preferences);

-- Full text search index
CREATE INDEX idx_users_search ON users USING GIN(to_tsvector('english', name || ' ' || COALESCE(bio, '')));
```

### CRUD Operations
```sql
-- INSERT
INSERT INTO users (name, email, age, salary) 
VALUES ('Rahul Sharma', 'rahul@example.com', 25, 50000);

INSERT INTO users (name, email, age) 
VALUES 
    ('Priya Patel', 'priya@example.com', 22),
    ('Amit Singh', 'amit@example.com', 28);

INSERT INTO users (name, email, preferences)
VALUES ('Test', 'test@example.com', '{"theme": "dark", "notifications": true}'::jsonb);

-- INSERT with RETURNING
INSERT INTO users (name, email) 
VALUES ('New User', 'new@example.com') 
RETURNING id, created_at;

-- SELECT
SELECT * FROM users;
SELECT name, email, age FROM users WHERE age > 25;
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM users WHERE name LIKE 'Rah%';
SELECT * FROM users WHERE email ILIKE '%gmail%';  -- Case insensitive
SELECT * FROM users WHERE age IN (22, 25, 28);
SELECT * FROM users WHERE tags @> ARRAY['premium'];
SELECT * FROM users WHERE preferences @> '{"theme": "dark"}';

-- ORDER BY, LIMIT, OFFSET
SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 0;
SELECT * FROM users ORDER BY age DESC, name ASC;

-- Aggregates
SELECT 
    COUNT(*) as total_users,
    AVG(age) as avg_age,
    MAX(age) as max_age,
    MIN(age) as min_age,
    SUM(salary) as total_salary
FROM users;

SELECT status, COUNT(*), SUM(total) 
FROM orders 
GROUP BY status 
HAVING COUNT(*) > 5;

-- DISTINCT
SELECT DISTINCT city FROM users;
SELECT COUNT(DISTINCT city) FROM users;

-- UPDATE
UPDATE users SET age = 26 WHERE id = 1;
UPDATE users SET 
    name = 'Rahul Sharma Updated',
    updated_at = NOW()
WHERE id = 1
RETURNING *;

-- DELETE
DELETE FROM users WHERE id = 10;
DELETE FROM users WHERE age < 18 RETURNING id, name;

-- TRUNCATE (faster than DELETE, resets sequence)
TRUNCATE TABLE temp_logs;
TRUNCATE TABLE orders CASCADE;  -- With related tables
```

### Advanced SELECT
```sql
-- JOINs
SELECT u.name, o.id as order_id, o.total, o.status
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

SELECT u.name, o.id, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;  -- Users with no orders

SELECT u.name, o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

SELECT u.name, o.total
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;

-- CROSS JOIN
SELECT users.name, products.name
FROM users
CROSS JOIN products;

-- SELF JOIN
SELECT e1.name as employee, e2.name as manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.id;

-- Subqueries
SELECT name, salary
FROM users
WHERE salary > (SELECT AVG(salary) FROM users);

SELECT name, (
    SELECT COUNT(*) FROM orders WHERE user_id = users.id
) as order_count
FROM users;

-- EXISTS
SELECT name FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.total > 1000
);

-- ANY/ALL
SELECT * FROM users 
WHERE age > ALL (SELECT age FROM users WHERE city = 'Delhi');

-- CTE (Common Table Expression)
WITH high_spenders AS (
    SELECT user_id, SUM(total) as total_spent
    FROM orders
    GROUP BY user_id
    HAVING SUM(total) > 10000
)
SELECT u.name, h.total_spent
FROM users u
JOIN high_spenders h ON u.id = h.user_id
ORDER BY h.total_spent DESC;

-- Window Functions
SELECT 
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank,
    RANK() OVER (ORDER BY salary DESC) as dense_rank,
    AVG(salary) OVER (PARTITION BY department) as dept_avg,
    salary - AVG(salary) OVER (PARTITION BY department) as diff_from_avg,
    LAG(salary, 1) OVER (ORDER BY salary DESC) as prev_salary,
    LEAD(salary, 1) OVER (ORDER BY salary DESC) as next_salary,
    FIRST_VALUE(name) OVER (ORDER BY salary DESC) as highest_paid
FROM users;

-- UNION / INTERSECT / EXCEPT
SELECT name, email FROM users
UNION
SELECT name, email FROM archived_users;

SELECT id FROM current_users
INTERSECT
SELECT user_id FROM orders;

SELECT id FROM users
EXCEPT
SELECT user_id FROM orders;
```

---

## 🔴 ADVANCED: PERFORMANCE & ADMIN

### EXPLAIN & ANALYZE
```sql
-- See query plan
EXPLAIN SELECT * FROM users WHERE age > 25;

-- Execute and measure
EXPLAIN ANALYZE SELECT * FROM users WHERE age > 25;

-- Includes buffers
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM users WHERE age > 25;

-- JSON format
EXPLAIN (FORMAT JSON) SELECT * FROM users WHERE age > 25;
```

### Indexes
```sql
-- B-tree (default)
CREATE INDEX idx_name ON users(name);

-- Hash (equality only)
CREATE INDEX idx_email_hash ON users USING HASH(email);

-- GiST (geometric, full-text)
CREATE INDEX idx_location ON locations USING GIST(coords);

-- GIN (JSONB, arrays, full-text)
CREATE INDEX idx_prefs ON users USING GIN(preferences);
CREATE INDEX idx_tags ON users USING GIN(tags);

-- BRIN (large tables with physical ordering)
CREATE INDEX idx_created_brin ON users USING BRIN(created_at);

-- Partial index
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;

-- Covering index (INCLUDE)
CREATE INDEX idx_covering ON users(age) INCLUDE (name, email) WHERE age > 18;

-- Concurrently (no locking)
CREATE INDEX CONCURRENTLY idx_name ON users(name);
```

### Partitioning
```sql
-- Range partitioning
CREATE TABLE orders_partitioned (
    id SERIAL,
    user_id INTEGER,
    total DECIMAL(10,2),
    created_at DATE
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2024 PARTITION OF orders_partitioned
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

CREATE TABLE orders_2025 PARTITION OF orders_partitioned
    FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');

-- List partitioning
CREATE TABLE users_by_region PARTITION OF users
    FOR VALUES IN ('asia', 'europe');

-- Hash partitioning
CREATE TABLE logs_partitioned PARTITION OF logs
    FOR VALUES WITH (MODULUS 4, REMAINDER 0);
```

### Views & Materialized Views
```sql
-- View (virtual table)
CREATE VIEW active_users AS
SELECT id, name, email, created_at
FROM users
WHERE is_active = true;

-- Materialized View (cached)
CREATE MATERIALIZED VIEW monthly_sales AS
SELECT 
    DATE_TRUNC('month', created_at) as month,
    COUNT(*) as orders,
    SUM(total) as revenue
FROM orders
GROUP BY DATE_TRUNC('month', created_at)
WITH DATA;

-- Refresh
REFRESH MATERIALIZED VIEW monthly_sales;
REFRESH MATERIALIZED VIEW CONCURRENTLY monthly_sales;  -- No lock
```

### Functions & Procedures
```sql
-- Scalar function
CREATE FUNCTION get_user_orders_count(user_id INTEGER)
RETURNS INTEGER
LANGUAGE SQL
AS $$
    SELECT COUNT(*) FROM orders WHERE orders.user_id = get_user_orders_count.user_id;
$$;

-- PL/pgSQL function
CREATE FUNCTION calculate_discount(amount DECIMAL)
RETURNS DECIMAL
LANGUAGE plpgsql
AS $$
DECLARE
    discount DECIMAL;
BEGIN
    IF amount > 10000 THEN
        discount := amount * 0.1;
    ELSIF amount > 5000 THEN
        discount := amount * 0.05;
    ELSE
        discount := 0;
    END IF;
    RETURN discount;
END;
$$;

-- Function returning table
CREATE FUNCTION get_users_by_age(min_age INTEGER, max_age INTEGER)
RETURNS TABLE(id INTEGER, name VARCHAR, age INTEGER)
LANGUAGE SQL
AS $$
    SELECT id, name, age FROM users WHERE age BETWEEN min_age AND max_age;
$$;

-- Procedure (transactional)
CREATE PROCEDURE transfer_money(from_id INTEGER, to_id INTEGER, amount DECIMAL)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE accounts SET balance = balance - amount WHERE id = from_id;
    UPDATE accounts SET balance = balance + amount WHERE id = to_id;
    COMMIT;
END;
$$;

CALL transfer_money(1, 2, 500);
```

### Triggers
```sql
-- Trigger function
CREATE FUNCTION update_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Create trigger
CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();

-- Audit trigger
CREATE TABLE audit_log (
    table_name TEXT,
    action TEXT,
    old_data JSONB,
    new_data JSONB,
    changed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE FUNCTION audit_trigger()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO audit_log(table_name, action, old_data, new_data)
    VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD)::jsonb, row_to_json(NEW)::jsonb);
    RETURN NEW;
END;
$$;

CREATE TRIGGER audit_users
    AFTER INSERT OR UPDATE OR DELETE ON users
    FOR EACH ROW
    EXECUTE FUNCTION audit_trigger();
```

### Transactions & Locking
```sql
-- Basic transaction
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- Rollback on error
BEGIN;
SAVEPOINT before_update;
UPDATE products SET stock = stock - 1 WHERE id = 10;
-- If error:
ROLLBACK TO SAVEPOINT before_update;
-- Continue with other operations
COMMIT;

-- Isolation levels
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;

-- Advisory lock
SELECT pg_advisory_lock(12345);  -- Application-level lock
SELECT pg_advisory_unlock(12345);
```

### Full Text Search
```sql
-- Create tsvector column
ALTER TABLE articles ADD COLUMN search_vector TSVECTOR;

-- Update trigger
CREATE FUNCTION articles_search_update()
RETURNS TRIGGER AS $$
BEGIN
    NEW.search_vector := to_tsvector('english', 
        COALESCE(NEW.title, '') || ' ' || COALESCE(NEW.content, ''));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trig_articles_search
    BEFORE INSERT OR UPDATE ON articles
    FOR EACH ROW
    EXECUTE FUNCTION articles_search_update();

-- Search
SELECT title, ts_rank(search_vector, query) as rank
FROM articles, plainto_tsquery('english', 'postgresql tutorial') query
WHERE search_vector @@ query
ORDER BY rank DESC
LIMIT 10;

-- Highlight
SELECT 
    title,
    ts_headline('english', content, plainto_tsquery('postgresql tutorial'),
        'MaxWords=50, MinWords=20')
FROM articles
WHERE search_vector @@ plainto_tsquery('english', 'postgresql tutorial');
```

### JSON/JSONB Operations
```sql
-- JSONB operators
SELECT preferences->'theme' FROM users;
SELECT preferences->>'theme' FROM users;  -- Returns text
SELECT preferences#>'{notifications,email}' FROM users;
SELECT preferences#>>'{notifications,email}' FROM users;

-- JSONB containment
SELECT * FROM users WHERE preferences @> '{"theme": "dark"}';
SELECT * FROM users WHERE preferences ? 'theme';  -- Key exists
SELECT * FROM users WHERE preferences ?| ARRAY['theme', 'language'];

-- JSONB modify
UPDATE users 
SET preferences = jsonb_set(preferences, '{language}', '"hi"')
WHERE id = 1;

-- JSONB aggregate
SELECT 
    id, 
    jsonb_agg(orders) as user_orders
FROM users
JOIN orders ON users.id = orders.user_id
GROUP BY users.id;
```

### Backup & Restore
```bash
# Backup
pg_dump dbname > backup.sql
pg_dump -h localhost -U username dbname > backup.sql
pg_dump --schema-only dbname > schema.sql
pg_dump --data-only dbname > data.sql
pg_dump -Fc dbname > backup.dump  # Custom format (compressed)

# Restore
psql dbname < backup.sql
pg_restore -d dbname backup.dump

# pg_dumpall (all databases)
pg_dumpall > all_backup.sql

# Continuous archiving (WAL)
-- In postgresql.conf:
wal_level = replica
archive_mode = on
archive_command = 'cp %p /backup/%f'
```

---

## 🚀 Projects

1. **E-Commerce Database** — Users, products, orders, inventory
2. **Social Media Backend** — Posts, comments, likes, followers
3. **Analytics Dashboard** — Aggregated queries, materialized views
4. **Real-time Chat Logs** — Full-text search, partitions
5. **Multi-tenant SaaS** — Row-level security, schemas

---

> **"PostgreSQL — Reliable, feature-rich, extensible. SQL ka baap!" 🐘🔥**

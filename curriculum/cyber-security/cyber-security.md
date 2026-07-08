# 🔒 Cyber Security - Complete Curriculum (2026)

> **"Cyber Security = Digital world ki suraksha. Hacking seekho, lekin legal!"**

---

## 📖 What is Cyber Security?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Hard |
| **Time** | 4-8 months |
| **Prerequisites** | Networking basics, Linux |

### Definition
Cyber Security is the practice of protecting systems, networks, and data from digital attacks.

### Roman English Explanation
Cyber Security ko "digital talwar" samjho. Ek side se aap systems ko bachana seekhte ho (defense), doosri side se aap hack karna seekhte ho (offense - ethical hacking). 2026 mein cyber attacks 10x badh gaye hain. Har company ko security experts chahiye.

---

## 🗺️ Complete Roadmap

```
🟢 BEGINNER: Networking Basics | Linux | Windows Security | Cryptography | Hashing
🔵 INTERMEDIATE: OWASP Top 10 | SQL Injection | XSS | CSRF | Authentication | Sessions
🟠 ADVANCED: Network Security | Web Security | API Security | Cloud Security | Mobile Security
🔴 PROFESSIONAL: Ethical Hacking | Penetration Testing | Bug Bounty | Forensics | SIEM
⚫ EXPERT: Malware Analysis | Reverse Engineering | Red Team | Blue Team | CTF
```

## 🟢 MODULE 1: BEGINNER

### Networking Basics
```bash
# IP address - Device ka address
ipconfig          # Windows
ifconfig          # Linux
curl ifconfig.me  # Public IP

# Ports - Application ke gate
# 80 - HTTP, 443 - HTTPS, 22 - SSH, 21 - FTP
# 3306 - MySQL, 27017 - MongoDB, 5432 - PostgreSQL

# Common commands
ping google.com           # Check connectivity
tracert google.com       # Trace route
nslookup google.com      # DNS lookup
netstat -an              # Active connections
```

### Linux Security
```bash
# File permissions
chmod 755 file          # rwxr-xr-x
chown user:group file   # Change owner
umask 022               # Default permissions

# User management
useradd username
passwd username
usermod -aG sudo username
sudo visudo             # Sudoers config

# SSH Security
# /etc/ssh/sshd_config:
# Port 2222 (change from default)
# PermitRootLogin no
# PasswordAuthentication no
# AllowUsers specific_user
```

### Cryptography
```python
# Hashing (one-way)
import hashlib

hashlib.md5(b"password").hexdigest()      # 32 chars (broken!)
hashlib.sha1(b"password").hexdigest()     # 40 chars (broken!)
hashlib.sha256(b"password").hexdigest()   # 64 chars (secure)
hashlib.sha512(b"password").hexdigest()   # 128 chars

# bcrypt (password hashing)
import bcrypt
salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(b"password", salt)
bcrypt.checkpw(b"password", hashed)  # True

# Symmetric Encryption (AES)
from cryptography.fernet import Fernet
key = Fernet.generate_key()
cipher = Fernet(key)
encrypted = cipher.encrypt(b"Secret message")
decrypted = cipher.decrypt(encrypted)

# Asymmetric Encryption (RSA)
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import rsa, padding
private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()
```

## 🔵 MODULE 2: INTERMEDIATE

### OWASP Top 10 (2026)
```
1.  Broken Access Control
2.  Cryptographic Failures
3.  Injection (SQL, NoSQL, Command)
4.  Insecure Design
5.  Security Misconfiguration
6.  Vulnerable Components
7.  Auth Failures
8.  Data Integrity Failures
9.  Logging & Monitoring
10. SSRF
```

### SQL Injection Prevention
```python
# ❌ VULNERABLE
query = f"SELECT * FROM users WHERE email = '{email}'"

# ✅ SAFE (Parameterized queries)
cursor.execute("SELECT * FROM users WHERE email = %s", (email,))

# ORM (safe by default)
User.query.filter_by(email=email).first()
```

### XSS (Cross-Site Scripting) Prevention
```javascript
// ❌ VULNERABLE
element.innerHTML = userInput;

// ✅ SAFE
element.textContent = userInput;

// ✅ Sanitization
function sanitize(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}
```

### CSRF Prevention
```javascript
// Anti-CSRF token
// Server generates random token, sends with form
// Server validates on submission

// SameSite cookies
Set-Cookie: session=abc; SameSite=Strict; Secure; HttpOnly

// Custom headers
fetch('/api/data', {
    headers: { 'X-CSRF-Token': csrfToken }
})
```

## 🟠 MODULE 3: ADVANCED

### Web Security
```python
# Input Validation
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

# Secure Headers
# Content-Security-Policy
# X-Frame-Options: DENY
# X-Content-Type-Options: nosniff
# Strict-Transport-Security: max-age=31536000
```

### API Security
```javascript
// Rate limiting
app.use('/api', rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

// JWT best practices
// Short expiry (15 min for access, 7 days for refresh)
// Store in HttpOnly cookies NOT localStorage
// Validate signature on every request
// Blacklist on logout
```

## Ethical Hacking Tools
```bash
# Nmap - Network scanner
nmap -sV -sC target.com           # Version + scripts
nmap -p- target.com               # All ports
nmap -sS -O target.com            # SYN scan + OS detection

# Wireshark - Packet analyzer (GUI)
# Filter: http, tcp.port==80, ip.addr==192.168.1.1

# Burp Suite - Web app testing (GUI)
# Proxy, Repeater, Intruder, Scanner

# Metasploit - Exploitation framework
msfconsole
use exploit/multi/http/struts2_content_type_ognl
set RHOSTS target.com
run

# Gobuster - Directory enumeration
gobuster dir -u https://target.com -w wordlist.txt

# Hydra - Password brute force
hydra -l admin -P passwords.txt target.com ssh

# SQLMap - SQL injection automation
sqlmap -u "https://target.com/page?id=1" --dbs

# John the Ripper - Password cracking
john --wordlist=rockyou.txt hash.txt
```

---

> **"Security seekho, digital world ko safe banao! 🔒"**
>
> **[Next: Special Modules →](../special-modules/git-github.md)**

[Back to Main Curriculum →](../README.md)

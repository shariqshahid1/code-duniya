# 🐧 Linux & Bash — Complete Curriculum (2026)

> **"Linux — Developer ka best friend. Har programmer ko command line aana chahiye! Servers, DevOps, Security — sab Linux pe chalta hai."**

---

## 📖 History

| Year | Version | Key Features |
|------|---------|--------------|
| 1991 | Linux 0.01 | Linus Torvalds releases kernel |
| 1992 | GPL License | Becomes open source |
| 1993 | Slackware | First popular distro |
| 1994 | Linux 1.0 | Networking support |
| 2004 | Ubuntu 4.10 | User-friendly Linux |
| 2015 | systemd adopted | Modern init system |
| 2024 | Linux 6.8 | Rust in kernel, improved hardware |
| 2026 | Linux 7.x | Better security, AI integration |

### Key Facts
- **Creator**: Linus Torvalds
- **Kernel**: Monolithic
- **Distros**: Ubuntu, Debian, Fedora, Arch, RHEL, CentOS
- **Shell**: Bash (Bourne Again Shell), Zsh, Fish

---

## 🟢 BEGINNER LINUX

### Directory Structure
```
/           → Root directory (sabse upar)
/bin        → Essential binaries (ls, cp, mv)
/boot       → Boot loader files
/dev        → Device files (hardware access)
/etc        → Configuration files
/home       → User home directories
/lib        → Shared libraries
/media      → Removable media mount
/mnt        → Temporary mount
/opt        → Optional software
/proc       → Process info (virtual filesystem)
/root       → Root user's home
/sbin       → System binaries (admin commands)
/tmp        → Temporary files (deleted on boot)
/usr        → User programs and data
/var        → Variable data (logs, databases)
```

### Essential Commands

#### Navigation
```bash
pwd              # Print working directory (current location)
ls               # List files
ls -l            # Long format
ls -a            # Show hidden files (.)
ls -la           # Long format + hidden
ls -lh           # Human-readable sizes
ls -lt           # Sort by time
ls -lS           # Sort by size
cd /path         # Change directory
cd ~             # Go to home
cd -             # Go to previous directory
cd ..            # Go up one level
```

#### File Operations
```bash
# Create
touch file.txt          # Create empty file
mkdir dir               # Create directory
mkdir -p a/b/c          # Create nested directories

# Copy
cp source dest          # Copy file
cp -r src_dir dest_dir  # Copy directory recursively
cp -a src dest          # Archive (preserve permissions)

# Move/Rename
mv old new              # Move or rename
mv file.txt /tmp/       # Move to /tmp

# Remove
rm file.txt             # Delete file
rm -r dir               # Delete directory recursively
rm -rf dir              # Force delete (dangerous!)
rmdir empty_dir         # Delete empty directory only

# View
cat file.txt            # Full content
less file.txt           # Scrollable view (q to quit)
head -n 10 file.txt     # First 10 lines
tail -n 10 file.txt     # Last 10 lines
tail -f file.txt        # Follow (live updates)
nl file.txt             # Line numbers
```

#### Text Processing
```bash
# Search
grep "pattern" file.txt           # Basic search
grep -i "pattern" file.txt        # Case insensitive
grep -r "pattern" /path/           # Recursive
grep -l "pattern" *.txt           # Files with match
grep -c "pattern" file.txt        # Count matches
grep -n "pattern" file.txt        # Line numbers
grep -v "pattern" file.txt        # Invert match
grep "^start" file.txt            # Lines starting with
grep "end$" file.txt              # Lines ending with

# Cut columns
cut -d',' -f1,3 data.csv          # Columns 1 and 3
cut -c1-10 file.txt               # Characters 1-10

# Sort
sort file.txt                     # Alphabetical
sort -n file.txt                  # Numerical
sort -r file.txt                  # Reverse
sort -u file.txt                  # Unique
sort -t',' -k2 data.csv           # Sort by 2nd column

# Unique
uniq file.txt                     # Remove consecutive duplicates
sort file.txt | uniq              # Global unique
sort file.txt | uniq -c           # Count occurrences

# Word count
wc file.txt                       # Lines, words, chars
wc -l file.txt                    # Lines only
wc -w file.txt                    # Words only

# Stream editor
sed 's/old/new/' file.txt         # Replace first per line
sed 's/old/new/g' file.txt        # Replace all globally
sed -i 's/old/new/g' file.txt     # In-place edit
sed '/pattern/d' file.txt         # Delete matching lines
sed -n '1,10p' file.txt           # Print lines 1-10

# AWK
awk '{print $1}' file.txt         # First column
awk -F',' '{print $1,$3}' data.csv  # CSV columns
awk '{sum+=$1} END {print sum}' file.txt  # Sum column
```

#### Permission
```bash
# Permission format: rwx rwx rwx (owner group others)
# r=4, w=2, x=1

chmod 755 file.sh          # rwx r-x r-x
chmod +x file.sh           # Add execute
chmod -w file.txt          # Remove write
chmod u+r file             # Owner read
chmod g+w file             # Group write
chmod o-r file             # Others remove read

chown user file            # Change owner
chown user:group file      # Change owner and group
chown -R user dir          # Recursive

# Special permissions
chmod u+s file             # SUID (run as owner)
chmod g+s file             # SGID (run as group)
chmod +t /tmp              # Sticky bit (only owner can delete)
```

#### Process Management
```bash
ps                          # Current processes
ps aux                      # All processes (detailed)
ps -ef                      # Full listing
top                         # Interactive process viewer
htop                        # Better top (if installed)
kill PID                    # Terminate process
kill -9 PID                 # Force kill
kill -15 PID                # Graceful kill
pkill name                  # Kill by name
pgrep name                  # Find PID by name

# Background/Foreground
command &                   # Run in background
Ctrl+Z                      # Suspend process
bg                          # Resume in background
fg                          # Bring to foreground
jobs                        # List background jobs

# nohup (run after logout)
nohup command &
```

#### Disk & Storage
```bash
df -h                       # Disk usage (human)
du -sh /path                # Directory size
du -h --max-depth=1         # Per-folder sizes
mount /dev/sda1 /mnt        # Mount filesystem
umount /mnt                 # Unmount
fdisk -l                    # List partitions
lsblk                       # Block devices
```

#### Network
```bash
ping google.com             # Test connectivity
curl https://api.example.com  # HTTP request
wget https://file.zip       # Download file
ssh user@host               # SSH connection
scp file user@host:/path    # Secure copy
rsync -av src/ dest/        # Sync directories
netstat -tulpn              # Listening ports
ss -tulpn                   # Modern netstat
ifconfig                    # Network interfaces
ip a                        # Modern ifconfig
nslookup google.com         # DNS lookup
dig google.com              # Detailed DNS
traceroute google.com       # Route trace
```

#### Compression
```bash
# Tar
tar -cvf archive.tar dir/       # Create tar
tar -xvf archive.tar            # Extract tar
tar -czvf archive.tar.gz dir/   # Create gzip
tar -xzvf archive.tar.gz        # Extract gzip
tar -cjvf archive.tar.bz2 dir/  # Create bzip2
tar -xjvf archive.tar.bz2       # Extract bzip2

# Zip
zip -r archive.zip dir/         # Create zip
unzip archive.zip               # Extract zip
```

---

## 🔴 ADVANCED: BASH SCRIPTING

### Script Basics
```bash
#!/bin/bash
# Shebang — tells which interpreter to use

# Variables
NAME="Rahul"
echo "Hello, $NAME"
echo "Path: $PATH"
echo "Home: $HOME"
echo "Exit code of last command: $?"

# Positional arguments
echo "Script: $0"
echo "First arg: $1"
echo "Second arg: $2"
echo "All args: $@"
echo "Arg count: $#"

# Command substitution
FILES=$(ls)
DATE=`date`  # Old style, avoid
CURRENT_DIR=$(pwd)

# Arithmetic
NUM=$((5 + 3))
echo $NUM  # 8
```

### Conditionals
```bash
#!/bin/bash

# If-else
if [ "$1" = "hello" ]; then
    echo "Hello to you too!"
elif [ "$1" = "bye" ]; then
    echo "Goodbye!"
else
    echo "Say hello or bye"
fi

# File operators
if [ -f "file.txt" ]; then echo "File exists"; fi
if [ -d "dir" ]; then echo "Directory exists"; fi
if [ -r "file" ]; then echo "Readable"; fi
if [ -w "file" ]; then echo "Writable"; fi
if [ -x "file" ]; then echo "Executable"; fi
if [ -s "file" ]; then echo "Non-empty"; fi

# String operators
if [ -z "$var" ]; then echo "Empty string"; fi
if [ -n "$var" ]; then echo "Non-empty"; fi
if [ "$a" = "$b" ]; then echo "Equal"; fi
if [ "$a" != "$b" ]; then echo "Not equal"; fi

# Numeric operators
if [ "$a" -eq "$b" ]; then echo "Equal"; fi
if [ "$a" -ne "$b" ]; then echo "Not equal"; fi
if [ "$a" -gt "$b" ]; then echo "Greater"; fi
if [ "$a" -ge "$b" ]; then echo "Greater or equal"; fi
if [ "$a" -lt "$b" ]; then echo "Less"; fi
if [ "$a" -le "$b" ]; then echo "Less or equal"; fi

# Logical operators
if [ "$a" = "yes" ] && [ "$b" = "yes" ]; then
    echo "Both yes"
fi

if [ "$a" = "yes" ] || [ "$b" = "yes" ]; then
    echo "At least one yes"
fi

if ! [ -f "file" ]; then
    echo "File doesn't exist"
fi
```

### Loops
```bash
#!/bin/bash

# For loop
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

for file in *.txt; do
    echo "Processing: $file"
done

for ((i=0; i<10; i++)); do
    echo $i
done

# While loop
count=0
while [ $count -lt 5 ]; do
    echo $count
    count=$((count + 1))
done

# Until loop
count=0
until [ $count -ge 5 ]; do
    echo $count
    count=$((count + 1))
done

# Read file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < "input.txt"
```

### Functions
```bash
#!/bin/bash

# Define function
function greet() {
    local name="$1"  # local scope
    echo "Hello, $name!"
}

# Another syntax
say_bye() {
    echo "Goodbye, $1!"
}

greet "Rahul"
say_bye "Priya"

# Return value (exit code)
is_even() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0  # Success
    else
        return 1  # Failure
    fi
}

if is_even 42; then
    echo "Even"
fi

# Return string
get_name() {
    echo "Rahul"  # Use stdout as return
}
result=$(get_name)
echo "Name is $result"
```

### Arrays
```bash
#!/bin/bash

# Declare array
fruits=("Apple" "Banana" "Mango" "Orange")

# Access
echo "${fruits[0]}"   # Apple
echo "${fruits[@]}"   # All elements
echo "${#fruits[@]}"  # Length
echo "${!fruits[@]}"  # Indices

# Add
fruits+=("Grapes")

# Remove
unset fruits[1]

# Loop
for fruit in "${fruits[@]}"; do
    echo $fruit
done

# Associative arrays (Bash 4+)
declare -A user
user[name]="Rahul"
user[age]=25
user[city]="Delhi"

echo "${user[name]}"
```

### Advanced Features
```bash
# Error handling
set -e            # Exit on error
set -u            # Error on undefined variables
set -o pipefail   # Pipeline fails if any command fails
set -x            # Debug mode (print commands)

# Trap (cleanup on exit)
cleanup() {
    echo "Cleaning up..."
    rm -f /tmp/tempfile
}
trap cleanup EXIT
trap 'echo "Ctrl+C pressed"; exit' SIGINT

# Here documents
cat << EOF > config.txt
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=app
EOF

# Select menu
select option in "Start" "Stop" "Restart" "Exit"; do
    case $option in
        "Start") echo "Starting...";;
        "Stop") echo "Stopping...";;
        "Restart") echo "Restarting...";;
        "Exit") break;;
    esac
done
```

### Example Scripts

#### Backup Script
```bash
#!/bin/bash
set -euo pipefail

BACKUP_DIR="/backup/$(date +%Y%m%d_%H%M%S)"
SOURCE_DIR="/var/www"
DB_NAME="mydb"
DB_USER="root"
RETENTION_DAYS=7

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Backup files
tar -czf "$BACKUP_DIR/files.tar.gz" "$SOURCE_DIR"

# Backup database
pg_dump "$DB_NAME" > "$BACKUP_DIR/database.sql"

# Compress database
gzip "$BACKUP_DIR/database.sql"

# Delete old backups
find /backup -type d -mtime +$RETENTION_DAYS -exec rm -rf {} \;

echo "Backup completed: $BACKUP_DIR"
```

#### System Monitor
```bash
#!/bin/bash

while true; do
    clear
    echo "===== SYSTEM MONITOR ====="
    echo "Uptime: $(uptime -p)"
    echo ""
    echo "CPU Usage:"
    top -bn1 | grep "Cpu(s)"
    echo ""
    echo "Memory Usage:"
    free -h
    echo ""
    echo "Disk Usage:"
    df -h /
    echo ""
    sleep 2
done
```

---

## 🚀 Projects

1. **Backup Automation Script** — Files + database backup
2. **System Monitor Dashboard** — Live CPU, memory, disk
3. **Log Analyzer** — Parse and summarize logs
4. **Batch File Renamer** — Pattern-based renaming
5. **Deployment Script** — Git pull, build, restart
6. **Network Scanner** — Ping sweep, port check

---

> **"Linux — Developer ki superpower. Command line aayi to developer life aasan!" 🐧🔥**

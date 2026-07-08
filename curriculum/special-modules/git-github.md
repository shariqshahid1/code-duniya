# 🔄 Git & GitHub - Complete Guide (2026)

> **"Git = Version Control. GitHub = Git ka cloud. Developer ka best friend."**

---

## 📖 What is Git?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 1 week |
| **Prerequisites** | Terminal basics |

### Definition
Git is a **distributed version control system** created by Linus Torvalds (2005). It tracks code changes.

### Roman English Explanation
Git ko "time machine" samjho. Aap code mein changes save kar sakte ho, purane versions par wapas aa sakte ho, doosron ke saath ek saath code likh sakte ho. GitHub us time machine ka "cloud storage" hai - jahan se puri duniya access kar sakti hai.

---

## Basic Commands
```bash
# Setup
git config --global user.name "Rahul Sharma"
git config --global user.email "rahul@example.com"
git config --global core.editor "code --wait"
git config --list

# Initialize
git init                    # New repo
git clone <url>             # Download existing repo

# Basic workflow
git status                  # Check changes
git add <file>              # Stage changes
git add .                   # Stage all
git commit -m "Message"    # Save snapshot
git commit -am "Message"   # Add + commit (tracked files)

# History
git log                     # See commits
git log --oneline          # Compact view
git log --graph             # Visual branch tree
git diff                    # Unstaged changes
git show <commit-hash>     # See commit details

# Undo
git restore <file>         # Discard changes
git restore --staged <file> # Unstage
git reset --soft HEAD~1    # Undo commit, keep changes
git reset --hard HEAD~1    # Undo commit, discard changes
git revert <commit-hash>   # Safe undo (creates new commit)
```

## Branching & Merging
```bash
# Branches
git branch                  # List branches
git branch feature         # Create branch
git checkout feature       # Switch to branch
git switch feature         # Modern switch
git checkout -b feature    # Create + switch
git branch -d feature      # Delete branch (merged)
git branch -D feature      # Force delete

# Merge
git checkout main
git merge feature          # Merge feature into main

# Rebase (cleaner history)
git checkout feature
git rebase main            # Reapply commits on top of main

# Resolve conflicts
# 1. Git marks conflict in file
# 2. Edit file to fix
# 3. git add fixed-file
# 4. git commit (for merge) or git rebase --continue (for rebase)
```

## Remote (GitHub)
```bash
git remote add origin <url>    # Link local to remote
git remote -v                   # See remotes
git push origin main           # Upload
git pull origin main           # Download + merge
git fetch origin               # Download without merge

# First push
git push -u origin main        # -u sets upstream

# Pull request workflow
# 1. Fork repo on GitHub
# 2. git clone your-fork
# 3. git checkout -b feature
# 4. Make changes, commit
# 5. git push origin feature
# 6. Create PR on GitHub

# Tags
git tag v1.0.0                # Create tag
git push origin v1.0.0        # Push tag

# Stash (temporary save)
git stash                     # Save changes temporarily
git stash list               # See stashes
git stash pop                 # Restore + remove stash
git stash apply               # Restore (keep stash)
```

## .gitignore
```
# .gitignore - Files to ignore
node_modules/
.env
*.log
dist/
build/
.DS_Store
*.pyc
__pycache__/
venv/
```

---

> **"Git seekho, code safe rakho, team ke saath kaam karo!" 🔄**

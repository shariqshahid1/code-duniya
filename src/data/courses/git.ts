import { Course } from "@/types";

export const gitCourse: Course = {
  id: "git",
  title: "Git & GitHub",
  description: "Git version control aur GitHub ko seekhein. Basic commands se lekar branching, merging, collaboration tak.",
  longDescription: "Git aur GitHub ko Roman English mein seekhein. Version control, branching, merging, collaboration, aur professional workflows.",
  lessonsCount: 15,
  duration: "6 hours",
  category: "programming-languages",
  difficulty: "beginner",
  icon: "git-branch",
  color: "orange",
  modules: [
    {
      id: "git-basics",
      title: "Git Basics aur Advanced Topics",
      description: "Git version control ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "git-intro",
          title: "Git Introduction aur Setup",
          description: "Git introduction, setup aur basic workflow seekhenge.",
          order: 1,
          content: {
            introduction: "Git ek distributed version control system hai jo code changes track karta hai. Is lesson mein Git setup, basic configuration, aur fundamental concepts seekhenge.",
            sections: [
              {
                title: "What is Git?",
                explanation: "Git Linus Torvalds ne banaya (2005). Distributed architecture - har developer full repo copy. Staging area, commit history, branches. GitHub remote hosting. VCS types: Centralized (SVN) vs Distributed (Git).",
                example: 'git --version\ngit config --global user.name "Rahul Kumar"\ngit config --global user.email "rahul@example.com"\ngit config --global init.defaultBranch main\ngit config --list'
              },
              {
                title: "Repository Initialization",
                explanation: "git init new repo banata hai. git clone existing repo copy. .git folder hidden track info store. Working directory, staging area, local repo, remote repo. File states: modified, staged, committed. .gitignore untracked files ignore.",
                example: "# New repo\nmkdir my-project && cd my-project\ngit init\n\n# Clone existing\ngit clone https://github.com/user/repo.git\n\n# .gitignore\nnode_modules/\n.env\n*.log\ndist/\n.DS_Store\n\n# Check status\ngit status"
              },
              {
                title: "Basic Git Workflow",
                explanation: "Add files to staging (git add). Commit changes (git commit). Check log (git log). git status current state. git diff changes compare. git rm remove tracked files. git mv rename files.",
                example: "# Workflow\necho '# My Project' > README.md\ngit add README.md\ngit commit -m 'Initial commit'\n\n# Multiple files\ngit add .\ngit commit -m 'Add project files'\n\n# View history\ngit log --oneline --graph --all\n\n# Diff\ngit diff\ngit diff --staged\n\n# Unstage\ngit restore --staged file.txt"
              }
            ],
            codeExamples: [
              {
                title: "Complete Git Setup",
                language: "bash",
                code: '# Git setup and first commit\n\ngit config --global user.name "Rahul Kumar"\ngit config --global user.email "rahul@email.com"\ngit config --global init.defaultBranch main\n\nmkdir code-duniya-website\ncd code-duniya-website\ngit init\n\necho "# CodeDuniya" > README.md\necho "node_modules/" > .gitignore\necho ".env" >> .gitignore\n\ngit add .\ngit commit -m "Initial setup with README and gitignore"\n\ngit log --oneline\n# Output: abc1234 Initial setup with README and gitignore'
              }
            ],
            notes: [
              "Git distributed hai, har developer ke paas full history.",
              "Staging area commit se pehle code review ke liye useful.",
              ".gitignore sensitive/auto-generated files ke liye.",
              "git log --oneline concise history dikhata hai."
            ],
            commonMistakes: [
              { mistake: "git add -A se sensitive files commit karna", correction: ".gitignore mein add karein ya git add specific files." },
              { mistake: "Commit message mein details na dena", correction: "Descriptive message with summary and body likho." }
            ],
            interviewQuestions: [
              "Git vs SVN main difference?",
              "Git file lifecycle stages?"
            ],
            practiceExercises: [
              { question: "New repo initialize karo, 3 files add karo, aur commit karo with descriptive message.", hint: "git init, git add, git commit -m 'descriptive message'", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-git-intro",
              title: "Git Introduction Quiz",
              questions: [
                { id: "q1", question: "Git initialize command?", options: ["git start", "git init", "git new", "git create"], correctAnswer: 1, explanation: "git init command ek naya Git repository initialize karta hai jo current directory mein .git folder banata hai." },
                { id: "q2", question: "File track karne ke liye?", options: ["git track", "git add", "git stage", "git include"], correctAnswer: 1, explanation: "git add command files ko staging area mein bhejta hai, jahan se woh commit ke liye ready ho jati hain." },
                { id: "q3", question: "Git is which type of VCS?", options: ["Centralized", "Distributed", "Local", "Hybrid"], correctAnswer: 1, explanation: "Git ek distributed version control system hai jahan har developer ke paas poori repository ki local copy hoti hai." }
              ]
            }
          },
          duration: "15 min"
        },
        {
          id: "git-basics-commands",
          title: "Git Basic Commands",
          description: "Git ke basic commands: add, commit, status, log seekhenge.",
          order: 2,
          content: {
            introduction: "Git ke important basic commands seekhenge: add, commit, status, log, diff, restore, rm. Daily development mein kaise use karte hain.",
            sections: [
              {
                title: "Committing Changes",
                explanation: "Commits snapshot at a point. Hash ID uniquely identifies. git commit -a shorthand for tracked files. git commit --amend last commit modify. Atomic commits - ek logical change per commit.",
                example: "# Basic commit\ngit add file1.ts file2.ts\ngit commit -m 'Add user authentication feature'\n\n# Amend last commit\ngit add forgotten-file.ts\ngit commit --amend --no-edit\n\n# Skip staging (tracked files only)\ngit commit -am 'Fix navigation bug'"
              },
              {
                title: "Status aur Diff",
                explanation: "git status files state (untracked, modified, staged). git diff working dir vs staging. git diff --staged staging vs last commit. git diff HEAD vs last commit. git show commit details.",
                example: "# Status options\ngit status\ngit status -s  # short format\n\n# Diff options\ngit diff\ngit diff --staged\ngit diff HEAD~2..HEAD  # last 2 commits\n\n# Show commit details\ngit show abc123\ngit show HEAD"
              },
              {
                title: "File Operations",
                explanation: "git restore discard changes. git restore --staged unstage. git rm remove tracked. git mv rename. git clean remove untracked. restore vs reset difference.",
                example: "# Restore - discard changes\ngit restore file.ts\ngit restore --staged file.ts\n\n# Remove files\ngit rm file.ts  # remove + stage\ngit rm --cached file.ts  # remove from tracking only\n\n# Restore old version\ngit restore --source HEAD~2 file.ts\n\n# Clean untracked\ngit clean -n  # dry run\ngit clean -f  # force remove"
              }
            ],
            codeExamples: [
              {
                title: "Working with Commits",
                language: "bash",
                code: '# Create commits and review history\n\necho "function hello() { return \'Namaste\'; }" > hello.js\ngit add hello.js\ngit commit -m "Add hello function"\n\necho "console.log(hello());" > index.js\ngit add index.js\ngit commit -m "Add index entry point"\n\ngit log --oneline\n# xyz789 Add index entry point\n# abc123 Add hello function\n\ngit show --stat HEAD'
              }
            ],
            notes: [
              "Atomic commits ek hi logical change karo.",
              "git status -s quick overview ke liye.",
              "git commit --amend force push ke baad avoid karo.",
              "git restore working directory changes discard (safe nahi)."
            ],
            commonMistakes: [
              { mistake: "git commit -a mein new files include nahi hoti", correction: "Naye files ke liye git add zaroori hai." },
              { mistake: "git clean -f bina check ke chalana", correction: "Pehle git clean -n (dry run) karein." }
            ],
            interviewQuestions: [
              "git restore vs git reset?",
              "--amend kab use karte hain?"
            ],
            practiceExercises: [
              { question: "5 commits banao, git log se dekho aur git revert se ek commit undo karo.", hint: "git revert HEAD ya git revert <hash>", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-git-commands",
              title: "Git Basic Commands Quiz",
              questions: [
                { id: "q1", question: "Git status short format?", options: ["git status -s", "git status--short", "git status -q", "git short"], correctAnswer: 0, explanation: "git status -s short format mein file status dikhata hai, jisme do columns hote hain staging aur working directory ke liye." },
                { id: "q2", question: "Staged file unstage command?", options: ["git restore --staged", "git unstage", "git reset file", "git remove"], correctAnswer: 0, explanation: "git restore --staged command staging area se file ko hata deta hai, working directory mein changes rakh kar." }
              ]
            }
          },
          duration: "15 min"
        },
        {
          id: "git-branching",
          title: "Branching aur Merging",
          description: "Branching, merging aur conflict resolution seekhenge.",
          order: 3,
          content: {
            introduction: "Git branching model seekhenge. Branch create, switch, merge, conflict resolution. Feature branches, hotfixes, Git Flow strategy.",
            sections: [
              {
                title: "Branch Management",
                explanation: "Branch independent development line. git branch create/list. git switch move to branch. git checkout -b create + switch. Branch naming: feature/, bugfix/, hotfix/. git branch -d delete merged. git branch -D force delete.",
                example: "# Create and switch\ngit branch feature-login\ngit checkout feature-login\n\n# List branches\ngit branch  # local\ngit branch -r  # remote\ngit branch -a  # all\n\n# Delete branch\ngit branch -d feature-login\ngit branch -D feature-login\n\n# Rename\ngit branch -m old-name new-name"
              },
              {
                title: "Merging Strategies",
                explanation: "git merge branch current mein merge. Fast-forward (linear history). 3-way merge (merge commit). git merge --no-ff force merge commit. git merge --squash combine commits. Merge conflicts when same file changed differently.",
                example: "# Fast-forward merge\ngit checkout main\ngit merge feature-login\n\n# 3-way merge (merge commit)\ngit merge --no-ff feature-login\n\n# Squash merge\ngit merge --squash feature-login\ngit commit -m 'Add login feature (squashed)'\n\n# Abort merge\ngit merge --abort"
              },
              {
                title: "Conflict Resolution",
                explanation: "Conflicts tab jab same file same line dono branches mein change. Conflict markers: <<<<<<<, =======, >>>>>>>. Resolve manually. git mergetool visual diff. Conflict resolved after git add.",
                example: "# Conflict markers\n<<<<<<< HEAD\nconsole.log('Hello from main');\n=======\nconsole.log('Hello from feature');\n>>>>>>> feature-login\n\n# Resolve steps\n1. Edit file, remove markers, keep correct code\n2. git add resolved-file.ts\n3. git commit -m 'Merge feature-login: resolve conflicts'\n\n# Or abort\ngit merge --abort"
              }
            ],
            codeExamples: [
              {
                title: "Branching Workflow",
                language: "bash",
                code: "# Feature branch workflow\n\ngit checkout -b feature-navbar\n\necho 'nav component' > navbar.html\ngit add .\ngit commit -m 'Add navbar HTML'\n\necho 'nav styles' > navbar.css\ngit add .\ngit commit -m 'Add navbar styles'\n\ngit checkout main\ngit pull origin main\n\ngit merge feature-navbar\n# If conflict, resolve and:\ngit add resolved-file\ngit commit -m 'Merge feature-navbar'\n\ngit branch -d feature-navbar"
              }
            ],
            notes: [
              "Feature branches isolate development.",
              "main/master production-ready rakhna.",
              "git merge --no-ff history preserve karta hai.",
              "Conflicts normal hain, careful resolve karo."
            ],
            commonMistakes: [
              { mistake: "Merge conflicts force push karna", correction: "Resolve karo, commit karo, phir push." },
              { mistake: "Main branch mein directly commit karna", correction: "Feature branch banao, PR merge karo." }
            ],
            interviewQuestions: [
              "Fast-forward vs 3-way merge?",
              "Merge conflict kaise resolve karte?"
            ],
            practiceExercises: [
              { question: "2 branches banao, same file edit karo, conflict create karo aur resolve karo.", hint: "git merge se conflict generate, manual resolve, git add, git commit.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-git-branching",
              title: "Branching & Merging Quiz",
              questions: [
                { id: "q1", question: "Branch create + switch command?", options: ["git branch -c", "git checkout -b", "git switch -n", "git branch -s"], correctAnswer: 1, explanation: "git checkout -b branchName ek saath nayi branch banata hai aur us par switch kar deta hai." },
                { id: "q2", question: "Merge abort command?", options: ["git merge stop", "git merge --abort", "git merge cancel", "git abort"], correctAnswer: 1, explanation: "git merge --abort merge process ko cancel karta hai aur original state mein wapas le jata hai." },
                { id: "q3", question: "Force delete branch?", options: ["git branch -d", "git branch -D", "git branch -f", "git branch --force"], correctAnswer: 1, explanation: "git branch -D force delete karta hai, chahe branch merged ho ya na ho, unlike -d jo sirf merged branch delete karta hai." }
              ]
            }
          },
          duration: "20 min"
        },
        {
          id: "git-remote",
          title: "Remote Repositories aur GitHub",
          description: "Remote repositories aur GitHub collaboration seekhenge.",
          order: 4,
          content: {
            introduction: "Remote repositories ke saath kaam karna seekhenge. GitHub, git push/pull/fetch, origin remote, collaboration workflows, pull requests.",
            sections: [
              {
                title: "Remote Basics",
                explanation: "Remote URL jo hosted repo point karta hai. Origin default remote name. git remote -v list. git remote add origin URL. git clone auto origin set. GitHub/GitLab/Bitbucket hosting. SSH vs HTTPS auth.",
                example: "# Add remote\ngit remote add origin https://github.com/user/repo.git\n\n# Verify\ngit remote -v\n\n# Remove remote\ngit remote remove origin\n\n# SSH (recommended)\ngit remote set-url origin git@github.com:user/repo.git"
              },
              {
                title: "Push, Pull, Fetch",
                explanation: "git push origin branch upload. git pull origin branch fetch + merge. git fetch origin branch download only. git push -u upstream track. git push --force (avoid).",
                example: "# Push\ngit push origin main\ngit push origin feature-login\n\n# First push with upstream\ngit push -u origin feature-login\n# Next time: git push only\n\n# Pull\ngit pull origin main\n\n# Fetch\ngit fetch origin\ngit log origin/main\n\n# Delete remote branch\ngit push origin --delete feature-login"
              },
              {
                title: "Pull Requests aur Collaboration",
                explanation: "Pull Request (PR) propose changes. Fork + PR model (external). Branch + PR model (team). Code review. Protected branches. Merge options: merge commit, squash, rebase.",
                example: "# PR Workflow\n1. git checkout -b feature-new\n2. git add, git commit\n3. git push -u origin feature-new\n4. GitHub par PR create\n5. Team review kare\n6. APPROVE -> Merge\n\n# Sync fork with upstream\ngit remote add upstream https://github.com/original/repo.git\ngit fetch upstream\ngit checkout main\ngit merge upstream/main\ngit push origin main"
              }
            ],
            codeExamples: [
              {
                title: "Complete Remote Workflow",
                language: "bash",
                code: '# Initialize and connect to GitHub\n\necho "# My App" > README.md\ngit init\ngit add .\ngit commit -m "Initial commit"\n\ngit remote add origin https://github.com/rahul/my-app.git\ngit branch -M main\ngit push -u origin main\n\ngit checkout -b feature-dark-mode\necho "body { background: black; }" > dark.css\ngit add .\ngit commit -m "Add dark mode CSS"\ngit push -u origin feature-dark-mode\n# Create PR on GitHub.com\n\ngit checkout main\ngit pull origin main\ngit branch -d feature-dark-mode'
              }
            ],
            notes: [
              "git push -u ek baar karo, phir sirf git push kaam karega.",
              "git fetch safe hai, auto-merge nahi karta.",
              "Protected branches main par direct push rokta hai.",
              "git push --force avoid karo, --force-with-lease use karo."
            ],
            commonMistakes: [
              { mistake: "git force push se team history overwrite", correction: "git push --force-with-lease use karein." },
              { mistake: "Multiple remotes confuse karna", correction: "git remote -v hamesha check karein." }
            ],
            interviewQuestions: [
              "git pull vs git fetch?",
              "Fork vs branch workflow?"
            ],
            practiceExercises: [
              { question: "GitHub par repo banao, local connect karo, feature branch push karo, PR create karo.", hint: "git remote add origin URL, git push -u, GitHub.com par PR.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-git-remote",
              title: "Remote Repositories & GitHub Quiz",
              questions: [
                { id: "q1", question: "Default remote name?", options: ["master", "origin", "remote", "upstream"], correctAnswer: 1, explanation: "origin default remote repository name hai jo git clone ya git remote add se set hota hai." },
                { id: "q2", question: "git push -u ka matlab?", options: ["Upstream set", "Update", "Upload", "Undo"], correctAnswer: 0, explanation: "git push -u upstream track set karta hai, jisse agle baar sirf git push likhna kaafi hota hai." },
                { id: "q3", question: "Safer force push?", options: ["git push -f", "git push --force-with-lease", "git push --hard", "git push --delete"], correctAnswer: 1, explanation: "git push --force-with-lease safe hai kyunki ye check karta hai ki remote par koi naye commits na aaye hoon." }
              ]
            }
          },
          duration: "20 min"
        },
        {
          id: "git-advanced",
          title: "Advanced Git: Rebase, Stash, Cherry-Pick",
          description: "Advanced Git: rebase, stash, cherry-pick seekhenge.",
          order: 5,
          content: {
            introduction: "Advanced Git techniques: rebase, stash, cherry-pick, reset, revert, reflog, Git hooks aur workflows seekhenge.",
            sections: [
              {
                title: "Rebase vs Merge",
                explanation: "Rebase commits linear history mein re-apply karta hai. git rebase main. Interactive rebase git rebase -i HEAD~3. Options: pick, squash, reword, drop, edit. Golden rule: public history rebase mat karo.",
                example: "# Rebase feature on main\ngit checkout feature\ngit rebase main\n\n# Interactive rebase\ngit rebase -i HEAD~3\n# p, pick = use commit\n# r, reword = change message\n# s, squash = combine with previous\n# d, drop = remove commit\n# e, edit = stop to amend\n\n# Resolve rebase conflicts\ngit rebase --continue\ngit rebase --skip\ngit rebase --abort"
              },
              {
                title: "Stash aur Cherry-Pick",
                explanation: "git stash temporary save. git stash pop apply + remove. git stash apply keep stash. git stash list all stashes. cherry-pick specific commit apply on current branch.",
                example: "# Stash\ngit stash  # save changes\ngit stash -m 'WIP: login form'\ngit stash list  # stash@{0}: On feature: WIP\n\n# Apply stash\ngit stash pop  # apply + drop\ngit stash apply stash@{1}  # apply + keep\n\n# Cherry-pick\ngit cherry-pick abc123  # single commit\ngit cherry-pick --no-commit abc123  # stage only"
              },
              {
                title: "Reset, Revert, Reflog",
                explanation: "git reset: --soft (keep staging), --mixed (keep working, default), --hard (discard all). git revert safe undo - new commit. git reflog all actions track - recovery tool.",
                example: "# Reset modes\ngit reset --soft HEAD~1  # undo commit, keep staged\ngit reset --mixed HEAD~1  # undo commit, keep working\ngit reset --hard HEAD~1   # discard commit + changes\n\n# Revert (safe)\ngit revert HEAD  # new commit undoing last\ngit revert abc123\n\n# Reflog - recovery\ngit reflog\n# Reset accidentally?\ngit reset --hard HEAD@{1}\n\ngit gc  # optimize"
              }
            ],
            codeExamples: [
              {
                title: "Advanced Git Workflow",
                language: "bash",
                code: "# Rebasing and cleaning history\n\ngit checkout -b feature-user-profile\n\necho 'user model' > User.ts\ngit add . && git commit -m 'WIP: add user'\necho 'update' >> User.ts\ngit add . && git commit -m 'fix typo'\necho 'done' >> User.ts\ngit add . && git commit -m 'add profile'\n\ngit rebase -i HEAD~3\n# Change pick -> squash for commits 2 and 3\n# Message: 'Add UserProfile feature with model'"
              }
            ],
            notes: [
              "Rebase clean history banata hai but force push needed.",
              "Stash unfinished work temporary save ke liye.",
              "Cherry-pick specific commit dusri branch mein lane ke liye.",
              "git reset --hard data loss kar sakta hai, careful.",
              "git revert public branches ke liye safe hai."
            ],
            commonMistakes: [
              { mistake: "Public branch ka rebase karke force push", correction: "Public branch rebase avoid karo, revert use karo." },
              { mistake: "git reset --hard se important changes loss", correction: "Pehle git stash ya branch banao, phir reset." }
            ],
            interviewQuestions: [
              "Rebase vs merge kab use karein?",
              "git reflog kya hai?"
            ],
            practiceExercises: [
              { question: "3 commits banao, interactive rebase se squash karo ek commit mein.", hint: "git rebase -i HEAD~3, squash mark, new message.", difficulty: "medium" },
              { question: "Stash use karo, branch switch karo, wapas aake stash apply karo.", hint: "git stash, git checkout main, git checkout back, git stash pop.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-git-advanced",
              title: "Advanced Git Quiz",
              questions: [
                { id: "q1", question: "Safe undo for public branches?", options: ["git reset", "git revert", "git rebase", "git cherry-pick"], correctAnswer: 1, explanation: "git revert safe hai public branches ke liye kyunki ye naya commit banata hai, history change nahi karta." },
                { id: "q2", question: "Temporary changes save command?", options: ["git save", "git stash", "git hold", "git temp"], correctAnswer: 1, explanation: "git stash working directory ke temporary changes ko save karta hai taake branch switch kar sakein." },
{ id: "q3", question: "Interactive rebase combine option?", options: ["pick", "squash", "drop", "reword"], correctAnswer: 1, explanation: "squash option interactive rebase mein multiple commits ko ek single commit mein combine karta hai." }
              ]
            }
          },
          duration: "20 min"
        }
      ]
    }
  ],
};


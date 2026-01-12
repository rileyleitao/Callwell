# How to Sync This Repository to GitHub

## Prerequisites
- Git installed on your computer (download from https://git-scm.com/download/win)
- A GitHub account (create one at https://github.com if you don't have one)

## Steps to Push to GitHub

### 1. Initialize Git Repository (if not already initialized)
Open PowerShell or Command Prompt in this directory and run:
```bash
git init
```

### 2. Add All Files
```bash
git add .
```

### 3. Create Initial Commit
```bash
git commit -m "Initial commit"
```

### 4. Create a New Repository on GitHub
1. Go to https://github.com/new
2. Enter a repository name (e.g., "Callwell")
3. Choose public or private
4. **DO NOT** initialize with README, .gitignore, or license (since you already have files)
5. Click "Create repository"

### 5. Connect Local Repository to GitHub
After creating the repo, GitHub will show you commands. Use these (replace `YOUR_USERNAME` and `REPO_NAME`):
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Alternative: Using GitHub Desktop
If you prefer a GUI:
1. Download GitHub Desktop from https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select this folder (C:\Users\Riley\Desktop\Callwell)
5. Click "Publish repository" button
6. Choose a name and visibility, then click "Publish Repository"

## Troubleshooting
- If Git is not recognized, make sure Git is installed and restart your terminal
- If you get authentication errors, you may need to set up a Personal Access Token (GitHub no longer accepts passwords)
  - Go to GitHub Settings → Developer settings → Personal access tokens → Generate new token
  - Use this token as your password when pushing

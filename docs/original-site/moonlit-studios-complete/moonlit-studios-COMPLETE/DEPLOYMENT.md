# 🚀 Moonlit Studios - Deployment Guide

## Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repo
```bash
# On GitHub.com:
# Click "+" → "New repository"
# Name: moonlit-studios-website
# Public
# Don't initialize with README
# Create repository
```

### Step 2: Push Your Code
```bash
cd /path/to/moonlit-studios-complete

git init
git add .
git commit -m "Initial commit - Moonlit Studios website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/moonlit-studios-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repo Settings
2. Pages (left sidebar)
3. Source: Deploy from branch `main`
4. Folder: `/ (root)`
5. Save

**Your site will be live in 2-3 minutes!**

URL: `https://YOUR-USERNAME.github.io/moonlit-studios-website`

---

## Custom Domain (Optional)

1. Buy domain (Namecheap, Google Domains, etc.)
2. Add CNAME file to repo root with your domain
3. Configure DNS records
4. Enable HTTPS in GitHub Pages settings

---

## 🎉 You're Live!

Share with the world! 🌙✨

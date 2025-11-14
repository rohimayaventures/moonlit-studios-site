# 🚀 Vercel Deployment Guide - Moonlit Studios

## ✅ Pre-Deployment Checklist

This project is **fully configured for Vercel** deployment. All Cloudflare configurations have been removed.

### What's Configured:

- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `next.config.mjs` - Optimized for Vercel Edge
- ✅ `.gitignore` - Includes `.vercel` directory
- ✅ `.env.example` - Template for environment variables
- ❌ **Removed:** `wrangler` (Cloudflare CLI) from dependencies

---

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `rohimayaventures/moonlit-studios-site`

2. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `.next` (auto-configured)

3. **Set Environment Variables:**
   ```
   ANTHROPIC_API_KEY = sk-ant-your-actual-key-here
   ```
   **Important:** Add this in Vercel Dashboard → Settings → Environment Variables

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Your site will be live at: `https://your-project.vercel.app`

---

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts to link project and set environment variables
```

---

## 🔑 Environment Variables Setup

### For Vercel (Production):

1. Go to your Vercel project dashboard
2. Navigate to: **Settings → Environment Variables**
3. Add the following:

| Variable Name       | Value                          | Environment           |
|---------------------|--------------------------------|-----------------------|
| `ANTHROPIC_API_KEY` | `sk-ant-your-actual-key-here` | Production, Preview, Development |

**Security Note:** Never prefix API keys with `NEXT_PUBLIC_` - they should only be accessible server-side.

### For Local Development:

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your actual API key
# ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

---

## 🏗️ Build & Test Locally

Before deploying, test your build locally:

```bash
# Install dependencies
npm install

# Build the project (same as Vercel does)
npm run build

# Start production server locally
npm start

# Visit: http://localhost:3000
```

---

## 🎯 Post-Deployment Checklist

After deploying to Vercel:

- [ ] Visit your live URL: `https://your-project.vercel.app`
- [ ] Test the AI Lab page: `/ai-lab`
- [ ] Try the Hufflepuff Healthcare Triage demo (live)
- [ ] Try the Slytherin Nagini Sales demo (live)
- [ ] Check that the global Kai widget works
- [ ] Verify all flip cards work correctly
- [ ] Test on mobile devices
- [ ] Check browser console for errors

---

## 🐛 Troubleshooting

### Issue: "API key not configured" error

**Solution:**
- Verify `ANTHROPIC_API_KEY` is set in Vercel dashboard
- Redeploy the project after adding environment variable
- Check that the key starts with `sk-ant-`

### Issue: Build fails on Vercel

**Solution:**
```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### Issue: 500 Internal Server Error on API routes

**Solution:**
- Check Vercel logs: Dashboard → Deployments → [Latest] → Functions
- Verify API key is correctly set
- Ensure API route is using correct Claude model: `claude-sonnet-4-20250514`

---

## 📊 Vercel Features Used

- **Edge Functions:** API routes run on Vercel's edge network
- **Automatic HTTPS:** SSL certificates managed by Vercel
- **Image Optimization:** Next.js Image component optimized for Vercel
- **Environment Variables:** Securely injected at build/runtime
- **Continuous Deployment:** Auto-deploy on git push

---

## 🌟 Custom Domain Setup (Optional)

To use `moonlstudios.com`:

1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain: `moonlstudios.com`
3. Add `www.moonlstudios.com` (optional)
4. Follow Vercel's DNS configuration instructions
5. Update nameservers or add A/CNAME records

---

## 📞 Support

If you encounter issues:

1. Check Vercel Logs: Dashboard → Deployments → Functions
2. Review Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
3. Check this repo's Issues tab

---

**🎉 Your Moonlit Studios site is ready to deploy to Vercel!**

No Cloudflare configurations remain. Everything is optimized for Vercel Edge.

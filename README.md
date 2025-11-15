# 🌙 Moonlit Studios - Website

> **Where Dreams Surface and Ideas Flow**

Professional freelance portfolio website for Moonlit Studios - a creative design, healthtech development, and AI innovation studio founded by Hannah Pagade, "The Nurse Who Codes."

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Service Suites](#service-suites)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Easter Eggs & Special Features](#easter-eggs--special-features)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Moonlit Studios is a full-stack freelance business offering five specialized service suites:

1. **Creative Design & Development** - Branding, web, and visual identity
2. **Health x Tech Development** - HIPAA-compliant healthcare applications
3. **Consulting** - Strategy, UX, and product advisory
4. **AI Innovation Suite** - Conversational AI, RAG systems, voice AI
5. **Author & Ghostwriting Studio** - Books, content, and author platforms

This website showcases portfolio work, service offerings, and includes interactive AI demonstrations.

**Live Site:** [moonlitstudios.com](https://moonlitstudios.com)

---

## ✨ Features

### Core Functionality
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **5 Service Suite Pages** - Detailed offerings with tiered pricing
- ✅ **AI Lab Demonstrations** - 4 interactive AI demos (Computer Vision, RAG Q&A, Healthcare Triage, Voice Sales)
- ✅ **Portfolio Showcases** - Case studies for each service suite
- ✅ **Dynamic Animations** - Water-bending inspired flow animations
- ✅ **Contact Forms** - Service-specific inquiry forms
- ✅ **SEO Optimized** - Meta tags, semantic HTML, fast performance

### Interactive Elements
- 🎤 **Voice AI Integration** - OpenAI Whisper (speech-to-text) + TTS (text-to-speech)
- 🤖 **Claude-Powered Demos** - Live AI demonstrations using Anthropic's Claude API
- 👁️ **Computer Vision** - Image analysis demo
- 📚 **RAG Q&A System** - Knowledge base search
- 🏥 **Healthcare Triage** - Symptom analysis (demo only, not medical advice)
- 💬 **Conversational Sales AI** - Nagini voice assistant

### Design System
- 🌙 **Moon Phase Header** - CSS-animated lunar cycle
- 💧 **Water Bending Aesthetic** - ATLA-inspired flowing gradients
- ⚡ **HP Easter Eggs** - Hidden Marauder's Map footprints in footer
- 🎨 **Custom Color Palette** - Mermaid teal, lunar gold, midnight navy
- ✍️ **Typewriter Effect** - Hero section animated text
- 🍵 **Uncle Iroh Wisdom** - Philosophical quotes scattered throughout

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** CSS animations + Framer Motion

### Backend / API
- **Runtime:** Node.js
- **AI Models:** 
  - Anthropic Claude (Sonnet 4.5) - Chat, analysis, triage
  - OpenAI GPT-4 - Alternative LLM
  - OpenAI Whisper - Speech-to-text
  - OpenAI TTS - Text-to-speech
- **API Routes:** Next.js API routes

### Infrastructure
- **Hosting:** Vercel
- **Version Control:** Git + GitHub
- **Package Manager:** npm

### Key Dependencies
```json
{
  "@anthropic-ai/sdk": "^0.x.x",
  "openai": "^4.x.x",
  "next": "14.x.x",
  "react": "^18.x.x",
  "typescript": "^5.x.x",
  "tailwindcss": "^3.x.x",
  "lucide-react": "^0.x.x"
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- API keys for:
  - Anthropic (Claude)
  - OpenAI (for voice features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohimayaventures/moonlit-studios-site.git
   cd moonlit-studios-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
moonlit-studios-site/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx              # About Hannah page
│   │   ├── ai-lab/
│   │   │   └── page.tsx              # AI Lab demonstrations
│   │   ├── api/
│   │   │   ├── chat/
│   │   │   │   └── route.ts          # General chat endpoint
│   │   │   ├── vision/
│   │   │   │   └── route.ts          # Computer vision API
│   │   │   ├── rag/
│   │   │   │   └── route.ts          # RAG Q&A API
│   │   │   ├── triage/
│   │   │   │   └── route.ts          # Healthcare triage API
│   │   │   ├── sales/
│   │   │   │   └── route.ts          # Nagini voice sales API
│   │   │   └── voice/
│   │   │       └── transcribe/
│   │   │           └── route.ts      # Whisper transcription API
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact form
│   │   ├── portfolio/
│   │   │   └── page.tsx              # Portfolio showcase
│   │   ├── services/
│   │   │   ├── page.tsx              # Service suites overview
│   │   │   ├── creative-design-development/
│   │   │   │   └── page.tsx          # Creative suite page
│   │   │   ├── health-tech-development/
│   │   │   │   └── page.tsx          # HealthTech suite page
│   │   │   ├── consulting/
│   │   │   │   └── page.tsx          # Consulting suite page
│   │   │   ├── ai-innovation/
│   │   │   │   └── page.tsx          # AI Innovation suite page
│   │   │   └── ghostwriting/
│   │   │       └── page.tsx          # Ghostwriting suite page
│   │   ├── layout.tsx                # Root layout with nav/footer
│   │   ├── page.tsx                  # Homepage
│   │   └── globals.css               # Global styles + animations
│   ├── components/
│   │   ├── HeroTypewriter.tsx        # Animated typewriter component
│   │   └── [other components]
│   └── lib/
│       └── [utility functions]
├── public/
│   ├── images/
│   └── [static assets]
├── .env.local                        # Environment variables (gitignored)
├── .gitignore                        # Git ignore rules
├── next.config.js                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

---

## 🎨 Service Suites

### 1. Creative Design & Development
**Pricing:** $1,800 - $8,500

**Services:**
- Branding & Identity
- Web Development
- Packaging & Product Design
- Creative Copywriting

**Portfolio Projects:**
- Serenity Wellness (Brand + Website)
- Artisan Harvest (Product Packaging)

---

### 2. Health x Tech Development
**Pricing:** $4,500 - $15,000

**Services:**
- HIPAA-Aligned UI/UX Design
- Clinical Workflow Tools
- Health Data Dashboards
- Patient Portals
- Telemedicine Interfaces

**Portfolio Projects:**
- CareFlow Dashboard (Clinical Operations)
- HealthConnect (Telemedicine Platform)

---

### 3. Consulting
**Pricing:** $150-200/hour or packaged sprints

**Services:**
- HealthTech Product Strategy
- UX for Clinician Workflows
- Portfolio & Career Coaching
- Workshops & Training

**Packages:**
- Discovery Sprint ($3,000)
- UX Audit ($2,500)
- Product Strategy ($5,000)

---

### 4. AI Innovation Suite
**Pricing:** $5,000 - $18,000

**Services:**
- AI Product Architecture
- Conversational & Voice AI
- RAG Systems (Document Q&A)
- Computer Vision Applications
- Custom AI Integrations

**Portfolio Projects:**
- MedBot (Healthcare RAG Chatbot)
- VoiceScribe (Medical Dictation AI)

---

### 5. Author & Ghostwriting Studio
**Pricing:** $200/post - $50,000/book

**Services:**
- Book Ghostwriting (Cookbooks, Memoirs, Business Books)
- Blog & Newsletter Content
- Author Platform Development
- Brand Storytelling

**Packages:**
- Ongoing Content ($250-600/deliverable)
- Full Books ($18,000-$50,000)
- Author Platforms ($4,000-$10,000)

---

## 🔐 Environment Variables

Required environment variables for full functionality:

```env
# Anthropic API (Required for all AI demos)
ANTHROPIC_API_KEY=sk-ant-xxxxx

# OpenAI API (Required for voice features only)
OPENAI_API_KEY=sk-xxxxx

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Getting API Keys

**Anthropic Claude:**
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create account → API Keys → Generate new key
3. Copy to `.env.local` as `ANTHROPIC_API_KEY`

**OpenAI:**
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create account → API Keys → Create new secret key
3. Copy to `.env.local` as `OPENAI_API_KEY`

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect GitHub repo
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Add Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add `ANTHROPIC_API_KEY` and `OPENAI_API_KEY`
   - Redeploy

### Custom Domain Setup

1. In Vercel dashboard → Domains
2. Add your domain: `moonlitstudios.com`
3. Follow DNS configuration instructions
4. SSL certificate auto-generated

---

## 🎭 Easter Eggs & Special Features

### Hidden Elements

**1. HP Marauder's Map Footer** 👣
- Hover over the footer quote: "I solemnly swear that I am up to no good"
- Watch footprints walk across the screen
- "Mischief Managed" appears at the bottom

**2. Moon Phases** 🌙
- 5 moon phases in header (New → Waxing → Full → Waning → New)
- Full moon represents "AI Lab at full power"
- Hover effects on each phase

**3. Water Bending Animations** 💧
- Flowing gradient orbs in background
- Inspired by ATLA (Avatar: The Last Airbender)
- "Be like water" philosophy throughout

**4. Uncle Iroh Wisdom** 🍵
- Tea cup icon that tilts on hover
- Philosophical quotes about AI and technology
- ATLA-inspired wisdom sections

**5. Typewriter Effect** ⌨️
- Hero section cycles through 3 phrases:
  - "Where Magic Meets Machine Learning"
  - "The Nurse Who Codes AI Solutions"
  - "Computer Vision • RAG • Voice AI • Healthcare Triage"

### Brand Philosophy

The site embodies the "water bending" philosophy:
- **Adaptable** - Like water, we adapt to each client's needs
- **Flowing** - Smooth user experience, natural interactions
- **Healing** - Healthcare focus, fixing broken systems
- **Moon-powered** - Innovation guided by vision (moonlight)

---

## 🎨 Design System

### Color Palette

```css
--midnight: #0A1128        /* Primary background */
--deepOcean: #1B4965       /* Secondary background */
--mermaidTeal: #4A9B9B     /* Primary brand color */
--tealBright: #3AA7A3      /* Accent highlights */
--lunarGold: #FFD700       /* Call-to-action color */
--pearlWhite: #F8F9FA      /* Primary text */
--moonlightSilver: #C0D6DF /* Secondary text */
--starlight: #A8DADC       /* Tertiary text */
```

### Typography

- **Headings:** System font stack (optimized for performance)
- **Body:** Clean, readable sans-serif
- **Monospace:** Code blocks and technical content

### Animations

```css
/* Water orb floating */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-20px) translateX(10px); }
}

/* Fade in on scroll */
.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

/* HP footprints walking */
@keyframes walkLeft {
  0% { left: -5%; }
  100% { left: 45%; }
}
```

---

## 🤝 Contributing

This is a personal portfolio site, but suggestions and bug reports are welcome!

### Reporting Bugs

1. Check existing issues first
2. Create new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. Open an issue with "Feature Request" tag
2. Describe the feature and use case
3. Explain why it would improve the site

---

## 📄 License

MIT License

Copyright (c) 2025 Moonlit Studios

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 📞 Contact

**Moonlit Studios**  
Founded by Hannah Pagade - "The Nurse Who Codes"

- **Website:** [moonlitstudios.com](https://moonlitstudios.com)
- **Email:** hello@moonlitstudios.com
- **GitHub:** [@rohimayaventures](https://github.com/rohimayaventures)
- **Location:** Westminster, Colorado, USA

---

## 🙏 Acknowledgments

- **Anthropic** - Claude API for intelligent AI demonstrations
- **OpenAI** - Whisper & TTS for voice features
- **Next.js Team** - Amazing React framework
- **Vercel** - Seamless deployment platform
- **Tailwind CSS** - Utility-first styling
- **Lucide** - Beautiful icon library

---

## 🌟 Inspiration

This site draws inspiration from:
- **Avatar: The Last Airbender** - Water bending philosophy, Uncle Iroh wisdom
- **Harry Potter** - Hidden easter eggs, magical user experience
- **Ocean & Moon Imagery** - Flowing, mysterious, transformative
- **Healthcare** - Healing, systematic, empathetic
- **Technology** - Innovative, efficient, scalable

**"Where Dreams Surface and Ideas Flow"** 🌙

---

*Built with ❤️ by The Nurse Who Codes*
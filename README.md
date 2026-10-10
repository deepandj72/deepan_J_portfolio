# Deepan J — Personal AI & Data Science Engineer Portfolio

> **Production-ready, responsive personal portfolio website engineered with React 19, Vite, TypeScript, and Tailwind CSS v4.**

Designed and built for **Deepan J**, final-year B.Tech Artificial Intelligence & Data Science student at National Engineering College, Kovilpatti. Inspired by modern engineering design systems (Linear, Vercel, Stripe).

---

## 🚀 Live Demo & Preview

- **Local Preview**: `http://localhost:5173/`
- **Target Deployment Platform**: Vercel (`https://deepan-j.vercel.app` or custom domain)
- **Primary Repository**: `deepan-j-portfolio`

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design System
- **Icons**: Lucide React + Bespoke Branded SVGs (GitHub, LinkedIn)
- **Forms & Validation**: React Hook Form with accessible error boundaries
- **Email Service**: EmailJS integration with graceful fallback
- **Theme Engine**: Persistent Light / Dark mode with system preference detection and localStorage sync
- **SEO & Social**: Rich Open Graph meta tags, Twitter card, custom branded SVG favicon, `robots.txt`

---

## 📂 Project Directory Structure

```text
portfolio/
├── public/
│   ├── deepan-j-resume.pdf   # Authentic downloadable resume asset
│   ├── deepan-photo.png      # High-res extracted portrait from resume
│   ├── favicon.svg           # Branded SVG favicon
│   └── robots.txt            # Search engine crawler instructions
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with scroll indicator & mobile drawer
│   │   ├── Footer.tsx         # Verified social links, copyright, and back-to-top
│   │   ├── ThemeToggle.tsx    # Light/Dark mode switcher
│   │   ├── SectionHeading.tsx # Reusable badge + title component
│   │   ├── ProjectCard.tsx    # Bespoke technical schematics & telemetry visualizations
│   │   ├── ProjectModal.tsx   # Detailed modal (Problem, Solution, Contributions)
│   │   ├── SkillCard.tsx      # Grouped competencies with descriptions
│   │   ├── ExperienceCard.tsx # Lyanaa AI Machine Learning Engineer Internship card
│   │   ├── ContactForm.tsx    # Validated contact form with EmailJS integration
│   │   └── SocialIcons.tsx    # Pixel-perfect GitHub & LinkedIn icons
│   ├── sections/
│   │   ├── Hero.tsx           # Impactful hero with orbital tech tags & resume highlights
│   │   ├── About.tsx          # Factual narrative & core cognitive strengths
│   │   ├── Skills.tsx         # Filterable skill categories
│   │   ├── Experience.tsx     # Verifiable ML engineer internship
│   │   ├── Projects.tsx       # Shopwise AI, Hill-Aware Driver Assistance, Elderly Assist
│   │   ├── Achievements.tsx   # IIT Mandi Special Prize, GenAI 100-Hr, CIT INTELLINA
│   │   ├── Education.tsx      # B.Tech (CGPA: 7.71) & HSC (82.83%) cards
│   │   ├── Leadership.tsx     # President Rotaract & Secretary AI&DS Association
│   │   └── Contact.tsx        # Direct contact details & interactive form
│   ├── data/                  # Centralized TypeScript data records
│   ├── types/                 # Strict TypeScript schemas
│   ├── hooks/                 # Theme & interaction hooks
│   ├── App.tsx                # Main single-page application
│   ├── main.tsx               # React root mounting
│   └── index.css              # Tailwind CSS v4 styling & animations
├── vercel.json                # Vercel SPA routing rewrites & security headers
├── .env.example               # Environment variables template for EmailJS
└── package.json
```

---

## ⚡ Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized static bundle in `./dist` ready for static CDN deployment.

---

## 📬 Contact Form & EmailJS Setup

The contact form is built using **React Hook Form** with strict client-side validation.

To enable direct email dispatch to your inbox via EmailJS:
1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service (e.g., Gmail) and an Email Template.
3. In your project root, create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Fill in your keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
> **Note**: If environment variables are not set, the form gracefully displays a clear configuration guide and provides a one-click direct email fallback to `deepandj72@gmail.com`.

---

## 🚢 Publishing to GitHub & Deploying to Vercel

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for full step-by-step instructions.

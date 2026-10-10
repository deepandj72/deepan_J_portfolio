# 🌐 Complete Deployment Guide for Deepan J's Portfolio

Follow this step-by-step guide to push your portfolio to GitHub and deploy it live to Vercel with a free, permanent HTTPS URL.

---

## Step 1: Initialize Git and Push to GitHub

### 1. Install / Verify Git
If Git is not yet installed on your system or not recognized in your command prompt, download and install it from [git-scm.com/download/win](https://git-scm.com/download/win) (or run the installer with Administrator rights).

### 2. Create the Repository on GitHub
1. Sign in to your GitHub account: [github.com/deepandj72-source](https://github.com/deepandj72-source).
2. Click **New Repository** (or visit [github.com/new](https://github.com/new)).
3. Repository name: `deepan-j-portfolio`
4. Set visibility to **Public**.
5. Leave "Add a README file", ".gitignore", and "license" **unchecked** (we already have them configured in the project).
6. Click **Create repository**.

### 3. Commit and Push from Your Terminal
Open PowerShell or Terminal inside `c:\Users\DEEPAN J\Music\portfolio` and run:

```bash
# Initialize git repository
git init

# Add all files (excluding .env, node_modules, and dist as specified in .gitignore)
git add .

# Create initial commit
git commit -m "feat: complete production-ready AI engineer portfolio for Deepan J"

# Rename branch to main
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/deepandj72-source/deepan-j-portfolio.git

# Push your code
git push -u origin main
```

*(If prompted, complete the one-time GitHub browser login or enter your Personal Access Token).*

---

## Step 2: Deploy to Vercel

Vercel provides free, high-speed global CDN hosting with automatic deployments whenever you push changes to your GitHub repo.

### 1. Sign In to Vercel
1. Go to [vercel.com](https://vercel.com) and click **Sign Up** or **Log In**.
2. Select **Continue with GitHub** (this connects directly with your `deepandj72-source` GitHub account).

### 2. Import Your Project
1. In the Vercel Dashboard, click **Add New...** -> **Project**.
2. Locate `deepan-j-portfolio` in your GitHub repository list and click **Import**.

### 3. Verify Project Configuration
Vercel automatically detects the Vite configuration:
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. (Optional) Add Environment Variables
If you configured EmailJS for the contact form, expand the **Environment Variables** section and add:
- `VITE_EMAILJS_SERVICE_ID`: your service ID
- `VITE_EMAILJS_TEMPLATE_ID`: your template ID
- `VITE_EMAILJS_PUBLIC_KEY`: your public key

*(If you don't add them right now, the website will still run smoothly and gracefully direct visitors to your email `deepandj72@gmail.com`).*

### 5. Deploy
1. Click **Deploy**.
2. Within 30 to 45 seconds, Vercel will build the project and output your live URL, such as:
   ```text
   https://deepan-j-portfolio.vercel.app
   ```
3. Click the preview thumbnail to visit your live portfolio!

---

## Step 3: Verify the Live Deployment

Check the following on your live Vercel URL:
- [x] **Hero section**: Displays your name, portrait, and core focus areas.
- [x] **Download Resume**: Clicking "Download Resume" in the navbar downloads your authentic resume PDF (`deepan-j-resume.pdf`).
- [x] **Theme Switcher**: Click the sun/moon icon in the navbar to toggle between Light and Dark mode.
- [x] **Project Modals**: Click "View Project Details" on any of the 3 projects to view full problem statements, solutions, and engineering contributions.
- [x] **Contact Form**: Test submitting a message or check the direct email link fallback.
- [x] **Mobile Responsiveness**: Open on your smartphone or shrink your browser to check the smooth mobile navigation drawer.

---

## Step 4: Connecting a Custom Domain (Optional)

If you acquire a custom domain (e.g., `deepanj.dev` or `deepan.ai`):
1. In your Vercel project dashboard, go to **Settings** -> **Domains**.
2. Type your domain name and click **Add**.
3. Follow the DNS instructions (adding the CNAME or A record in your domain registrar).
4. Vercel automatically provisions a free SSL/TLS certificate.

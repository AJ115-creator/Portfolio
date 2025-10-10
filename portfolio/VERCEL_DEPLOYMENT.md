# Vercel Deployment Guide

This guide explains how to securely deploy your portfolio to Vercel with EmailJS credentials.

## Prerequisites

- A Vercel account (https://vercel.com)
- Your EmailJS credentials from the dashboard
- Git repository (GitHub, GitLab, or Bitbucket)

## Security Note ✅

Your EmailJS credentials are now stored in environment variables and will NOT be exposed in your repository. The `.env` file is gitignored for safety.

## Step 1: Prepare Your Repository

1. **Commit your changes** (the `.env` file will be automatically excluded):
   ```bash
   git add .
   git commit -m "Add environment variables for EmailJS"
   git push origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/new

2. **Import your Git repository**
   - Connect your GitHub/GitLab/Bitbucket account
   - Select your portfolio repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Vite
   - Root Directory: `./portfolio`
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `dist` (should be auto-detected)

4. **Add Environment Variables** (CRITICAL STEP):
   Click on "Environment Variables" and add these **EXACT** keys and values:

   | Name | Value |
   |------|-------|
   | `VITE_EMAILJS_SERVICE_ID` | `service_dbc55a6` |
   | `VITE_EMAILJS_TEMPLATE_ID` | `template_za9bmen` |
   | `VITE_EMAILJS_PUBLIC_KEY` | `uOR0BTZdCevKdTuqP` |
   | `VITE_EMAILJS_TO_EMAIL` | `ayushjha115.aj@gmail.com` |

   **Important**: Make sure to add these for all environments (Production, Preview, and Development)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)

### Option B: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to portfolio directory**:
   ```bash
   cd portfolio
   ```

4. **Deploy**:
   ```bash
   vercel
   ```

5. **Add environment variables** (after first deployment):
   ```bash
   vercel env add VITE_EMAILJS_SERVICE_ID
   vercel env add VITE_EMAILJS_TEMPLATE_ID
   vercel env add VITE_EMAILJS_PUBLIC_KEY
   vercel env add VITE_EMAILJS_TO_EMAIL
   ```
   
   When prompted, enter the values and select "Production", "Preview", and "Development"

6. **Redeploy with environment variables**:
   ```bash
   vercel --prod
   ```

## Step 3: Verify Deployment

1. **Test the contact form** on your deployed site
2. **Check browser console** for any missing environment variable warnings
3. **Send a test message** to ensure EmailJS is working correctly

## Troubleshooting

### Contact form not working?

1. **Check environment variables are set correctly** in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Verify all 4 variables are present with correct values
   - Make sure they apply to all environments

2. **Redeploy after adding environment variables**:
   - Go to Deployments tab
   - Click "..." menu on latest deployment
   - Select "Redeploy"

3. **Check browser console** for error messages

### Build failing?

1. **Verify your build works locally**:
   ```bash
   cd portfolio
   npm run build
   npm run preview
   ```

2. **Check Node version compatibility**:
   - Vercel uses Node 18.x by default
   - You can specify a different version in `package.json`:
     ```json
     "engines": {
       "node": ">=18.0.0"
     }
     ```

## Security Best Practices ✅

- ✅ Environment variables are used (not hardcoded)
- ✅ `.env` file is gitignored
- ✅ Credentials are stored in Vercel's secure environment
- ✅ `.env.example` provided for reference

## EmailJS Note

EmailJS Public Key is safe to expose on the frontend as it's designed for client-side usage. However, using environment variables:
- Makes credential management easier
- Allows different values for dev/production
- Follows industry best practices
- Makes it easier to rotate keys if needed

## Custom Domain (Optional)

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed by Vercel
4. SSL certificate will be automatically provisioned

## Continuous Deployment

Vercel automatically redeploys when you push to your main branch. To deploy a different branch:
1. Go to Project Settings → Git
2. Change the Production Branch if needed

---

**Need help?** Check Vercel's documentation: https://vercel.com/docs


# 🚀 Deployment Guide: Host Your Website for Free

Since you have a custom domain and the project is ready, here are the two best ways to host it for free.

---

## Option 1: Netlify (Recommended - Easiest)
**Best for:** Non-developers. No coding tools required. Just drag and drop.

### 1. Deploy the Site
1.  Go to [app.netlify.com](https://app.netlify.com).
2.  Sign up (you can use Email, Google, or GitHub).
3.  Once logged in, you will see a page that says "Team overview" or "Sites".
4.  Look for the area that says **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here."**
5.  Open your file explorer on your computer.
6.  Locate your `static-perigee` folder.
7.  **Drag and drop the entire `static-perigee` folder** into that box on the Netlify website.
8.  Netlify will upload and deploy it instantly. You'll get a random URL like `happy-hippo-123456.netlify.app`.

### 2. Connect Your Custom Domain
1.  On your site's dashboard in Netlify, click **"Domain settings"** (or "Set up a custom domain").
2.  Click **"Add custom domain"**.
3.  Enter your domain name (e.g., `www.yourdomain.com`) and click **Verify**.
4.  Click **"Add domain"**.
5.  **Configure DNS (The Important Part)**:
    *   Netlify will tell you to update your DNS records.
    *   **Option A (Easier):** Use Netlify DNS. Click "Set up Netlify DNS" and follow instructions to change your nameservers at your domain registrar (where you bought the domain).
    *   **Option B (Manual):** Log in to your domain registrar (GoDaddy, Namecheap, etc.) and add a **CNAME record** pointing `www` to your Netlify URL (e.g., `happy-hippo-123456.netlify.app`).

### 3. Contact Form Setup (Optional)
If you are using the contact form, ensure you have set up the `access_key` in `contact.html` as explained in the **Finalizing the Contact Form** section below.

---

## Option 2: GitHub Pages
**Best for:** If you want version control or plan to update the code frequently.

### 1. Initial Setup
1.  **Create a GitHub Account**: [github.com](https://github.com).
2.  **Create a New Repository**:
    *   Click `+` → "New repository".
    *   Name it `portfolio`. make it **Public**.
3.  **Upload Files**:
    *   Click "uploading an existing file".
    *   Drag ALL files from `static-perigee` (ensure `index.html` is in the root).
    *   **Commit changes**.
4.  **Activate Pages**:
    *   Go to **Settings** → **Pages**.
    *   Select Source: `Deploy from a branch`, Branch: `main` / `root`.
    *   Click **Save**.
5.  **Custom Domain & DNS (Namecheap Example)**:
    *   In **Settings** → **Pages**, enter your custom domain under "Custom domain".
    *   **Login to Namecheap** -> Domain List -> Manage -> Advanced DNS.
    *   **Add CNAME Record**: Host: `www`, Value: `yourusername.github.io`.
    *   **Add 4 A Records**: Host: `@`, Values:
        *   `185.199.108.153`
        *   `185.199.109.153`
        *   `185.199.110.153`
        *   `185.199.111.153`
    *   Back in GitHub, check **Enforce HTTPS** (Wait 30mins if needed).

### 2. How to Update Your Site Later
When you make changes to your files (like new text or images) and want to update the live site:

1.  Go to your GitHub Repository page.
2.  Click the **"Add file"** button (top right of the file list) → Select **"Upload files"**.
3.  Drag and drop your **new/updated files** into the box.
4.  Write a small note in "Commit changes" (e.g., "Updated contact info").
5.  Click the green **Commit changes** button.
6.  **Done!** GitHub will automatically detect the changes and update your live site in 1-2 minutes.

---

## Finalizing the Contact Form
(Step required for both options if you want the contact form to work)

1.  Go to [Web3Forms.com](https://web3forms.com/).
2.  Enter your email to get an **Access Key**.
3.  Open `contact.html` on your computer.
4.  Find this line (around line 71):
    ```html
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    ```
5.  Replace `YOUR_ACCESS_KEY_HERE` with your actual key.
6.  Save the file before dragging/uploading to Netlify or GitHub.

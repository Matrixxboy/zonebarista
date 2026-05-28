# 🚀 Coffee OS Deployment Guide

Because Coffee OS is built on a **100% Serverless, Static Architecture**, it can be hosted absolutely free, and it will run infinitely without you ever having to pay for server costs or database hosting.

Here are the step-by-step guides to get your knowledge base live on the internet using the two best free platforms: **GitHub Pages** and **Vercel**.

---

## 🌐 Option 1: Hosting on GitHub Pages (Recommended)

GitHub Pages is perfect because it links directly to your repository and updates automatically every time you push code.

### Step 1: Push your code to GitHub
If you haven't already, push your local folder to a public GitHub repository. Open your terminal in the `zonebarista` folder and run:
```bash
git init
git add .
git commit -m "Initial commit: Coffee OS launch"
```
Create a new **Public** repository on [GitHub](https://github.com/new) (leave the readme/gitignore checkboxes empty). Follow the instructions GitHub gives you to link your local code and push it:
```bash
git remote add origin https://github.com/matrixxboy/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. On your GitHub repository page, click the **⚙️ Settings** tab near the top right.
2. In the left-hand sidebar, scroll down and click **Pages**.
3. Under the **Build and deployment** section, locate the **Source** dropdown.
4. Change the branch from *None* to **`main`**.
5. Ensure the folder is set to `/ (root)` and click **Save**.

### Step 3: Wait for Deployment
GitHub will take about 1–2 minutes to build the site. Once finished, a banner at the top of the Pages settings will appear:
> *"Your site is live at https://matrixxboy.github.io/YOUR_REPO_NAME/"*

Click it, and you're live!

---

## ⚡ Option 2: Hosting on Vercel

Vercel provides incredibly fast global edge-caching and gives you a sleeker default URL (e.g., `coffee-os.vercel.app`).

### Step 1: Create a Vercel Account
Go to [Vercel.com](https://vercel.com) and sign up using your GitHub account.

### Step 2: Import your GitHub Repository
1. On your Vercel Dashboard, click **Add New...** and select **Project**.
2. Under "Import Git Repository", find the repository you created in Option 1 and click **Import**.
3. **Configure Project:**
   - **Project Name:** Name it whatever you like (e.g., `coffee-os`).
   - **Framework Preset:** Leave it as `Other`.
   - **Build and Output Settings:** Leave these exactly as they are (Vercel automatically detects that it is a static HTML site).
4. Click **Deploy**.

### Step 3: You're Live!
Vercel will deploy your site in less than 30 seconds. It will instantly generate a live URL for you, and automatically update your site whenever you push new changes to GitHub.

---

## 📝 Updating Your Knowledge Base
Because the app dynamically reads the markdown files in `coffee-knowledge-base/`, you never need to edit the HTML to add new articles! 

Simply add or edit your `.md` files, update the `INDEX.md` map if necessary, and push your changes to GitHub:
```bash
git add .
git commit -m "Added new article on espresso puck prep"
git push
```
Both GitHub Pages and Vercel will automatically detect the push and update your live website instantly!

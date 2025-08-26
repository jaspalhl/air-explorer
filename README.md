
# AIR Data Explorer — Vercel Deployment

This folder contains a single-page static app:
- `index.html` — your interactive Plotly explorer (self-contained; data embedded)
- `vercel.json` — optional config (clean URLs)

## Option A — Drag & Drop (fastest)
1) Go to https://vercel.com/new
2) Click **"Deploy a Project" → "Import" → "Drag and Drop"** (or "Deploy from Folder").
3) Drag this folder or upload the ZIP.
4) When prompted for framework, pick **"Other"** (static site). No build command needed.
5) Click **Deploy**. You’ll get a live URL.

## Option B — GitHub (recommended for updates)
1) Create a new, empty GitHub repo and push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial deploy"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```
2) In Vercel, click **New Project → Import Git Repository** and select your repo.
3) Framework: **Other**. Build & Output settings can stay empty (static site).
4) Click **Deploy**.
5) Any future commits to `main` redeploy automatically.

## Option C — CLI (one-liner)
1) Install the CLI (once): `npm i -g vercel`
2) From this folder, run:
   ```bash
   vercel --prod
   ```
   Accept the defaults. The output URL is your live site.

## Custom Domain (optional)
- In your Vercel project → **Settings → Domains** → Add your domain and set the suggested DNS records.
- Once DNS propagates, the domain will serve this app.

## Notes
- The app is static; no server code needed.
- If you want to load data from a separate JSON later, create a `public/data.json` and fetch it from `index.html`, then redeploy.

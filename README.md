
# AIR Data Explorer — v9 (GitHub → Vercel with OG image)

This is the v9 build:
- Compact one-line controls on desktop (Type, Age focus, Show labels, Color by, Search, Buttons)
- Dark, legible hover boxes with wrapped summaries
- Mobile-friendly layout (controls stack; labels off by default on very small screens)
- 70/70 quadrant, axis padding, PNG download
- `/api/og` dynamic Open Graph image for rich link previews

## Deploy (GitHub → Vercel)
1) Create a new GitHub repo (or reuse yours) and upload these files (`index.html`, `api/og.ts`, `package.json`, `vercel.json`, `README.md`).
2) In Vercel → **New Project → Import Git Repository**.
3) Framework Preset: **Other**. Leave Build/Output blank.
4) Click **Deploy**.
5) Test OG image at: `https://YOUR-VERCEL-DOMAIN.vercel.app/api/og`

## Set absolute OG/Twitter image URL (recommended)
- Edit `index.html` to change:
  - `<meta property="og:image" content="/api/og">`
  - `<meta name="twitter:image" content="/api/og">`
- to:
  - `https://YOUR-VERCEL-DOMAIN.vercel.app/api/og`
Commit and push → Vercel redeploys.

## Customize OG card text (optional)
- You can pass query params to `/api/og`:
  `/api/og?title=AIR%20Data%20Explorer&type=TV&ages=Teens%20%E2%80%A2%20Adults&colorBy=IMDb`

## Common gotchas
- Ensure `index.html` is at the repo **root** (not inside a subfolder).
- If preview shows the old card, re-scrape via the Facebook Debugger or Twitter/X Card Validator.

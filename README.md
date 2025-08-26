
# AIR Data Explorer — v9.2 (OG image without JSX/React)

This version avoids React/JSX in Edge Functions to fix build errors.
- `api/og.ts` uses plain element objects + `new ImageResponse(...)`
- No `tsconfig.json` required
- `@vercel/og` pinned to `^0.8.5`

## Deploy
- Import this repo in Vercel (Framework: Other). No build command.
- Test OG at `/api/og`.
- Optionally set absolute OG image URLs in `index.html` after first deploy.

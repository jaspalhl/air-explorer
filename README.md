# AIR Data Explorer — v9.1 (Vercel fix)
- Fix install error by using a valid @vercel/og version (^0.8.5)
- Use `/api/og.tsx` (JSX) with Edge runtime
- Add `tsconfig.json` with `jsx: react-jsx`

## Deploy
Import this repo in Vercel (Framework: Other). No build command needed.
Test OG at `/api/og`. After first deploy, set absolute OG image URLs in `<head>` if desired.

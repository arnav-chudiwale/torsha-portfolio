# Torsha Goswami · Terrain (v2)

Environmental scientist & watershed ecologist portfolio — Next.js 15, App Router, Tailwind.

## Local development

```bash
npm install
npm run dev
```

Open **http://localhost:3001** (or double-click `start-dev.bat` on Windows).

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. [vercel.com/new](https://vercel.com/new) → Import the repository.
3. **Root Directory:** set to **`v2`** (required — do not deploy the repo root).
4. Framework Preset: **Next.js** (auto-detected).
5. Build Command: `npm run build` (default)
6. Output: default (`.next`)
7. **Environment variable** (Production + Preview):

   | Name | Value |
   |------|--------|
   | `NEXT_PUBLIC_SITE_URL` | Your live URL, e.g. `https://your-project.vercel.app` |

8. Deploy.

After the first deploy, update `NEXT_PUBLIC_SITE_URL` if you add a custom domain, then redeploy.

## Pre-deploy checklist

- [ ] Root Directory = `v2`
- [ ] `public/portrait.jpg` present (hero + Open Graph)
- [ ] `NEXT_PUBLIC_SITE_URL` set in Vercel
- [ ] `npm run build` succeeds locally
- [ ] Spot-check mobile (menu, hero, recognition swipe, theme toggle)

## Project layout

- `app/` — routes, layout, global styles
- `components/` — UI and sections
- `data/` — JSON content (CV-derived)
- `public/` — portrait and static assets
- `lib/` — contours and motion helpers

# Torsha Goswami — Terrain Portfolio

Source documents (CV, design philosophy PDF, photos) live in this folder.

## Website versions

| Folder | Description | How to run |
|--------|-------------|------------|
| **[v1/](v1/)** | Frozen first version — safe rollback | `cd v1` → `npm install` → `npm run dev` |
| **[v2/](v2/)** | Active version — refined feel & motion | `cd v2` → `npm install` → `npm run dev` |

The original app at the repo root matches v1; **use `v2/` for the latest work.**

## Quick start (v2)

Double-click `v2/start-dev.bat` or:

```bash
cd v2
npm install
npm run dev
```

Open **http://localhost:3001**

Always run from **`v2/`** (not the repo root). If you see a webpack/runtime error, double-click `start-dev.bat` or delete `v2/.next` and run `npm run dev` again.

## Deploy v2 on Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Set **Root Directory** to **`v2`**.
3. Add env var `NEXT_PUBLIC_SITE_URL` = your production URL (e.g. `https://your-app.vercel.app`).
4. Deploy.

Full checklist and settings: **[v2/README.md](v2/README.md)**.

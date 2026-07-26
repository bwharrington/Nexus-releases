# AGENTS.md

## Cursor Cloud specific instructions

This repo is frontend-only: a single React + Vite SPA (the Nexus marketing/help
site) in `website/`. There is no backend, database, or Docker. The Nexus desktop
app source is NOT in this repo, so only the website can be run/tested here.

### Service: Nexus website (`website/`)

- Dev server: `npm run dev` (run from `website/`). Vite serves on port `5173`.
- Lint / build / preview commands: see `website/package.json` scripts
  (`lint` = oxlint, `build` = `tsc -b && vite build`, `preview`).

### Non-obvious caveats

- The site uses a Vite `base` of `/Nexus-releases/` (see `website/vite.config.ts`).
  The dev server root `http://localhost:5173/` returns 404 — you MUST open
  `http://localhost:5173/Nexus-releases/`.
- CI (`.github/workflows/deploy-website.yml`) pins Node 20, but the app builds
  and runs fine on the Node 22 present in the cloud VM.
- Download / "latest release" buttons link out to GitHub Releases (external);
  a broken/loading external link is expected behavior, not an app bug.

# Nexus-releases

Public home for the **Nexus** marketing site and downloadable installers.

The Nexus application source stays in a private repository. This repo only publishes:

- The GitHub Pages website (`website/`)
- Release assets (Windows installers uploaded by CI when a `v*` tag is pushed in the private app repo)

## Website

Live site (after Pages is enabled): https://bwharrington.github.io/Nexus-releases/

```bash
cd website
npm install
npm run dev
```

Open `http://localhost:5173/Nexus-releases/`. See [`website/README.md`](website/README.md).

## Downloads

Latest release: https://github.com/bwharrington/Nexus-releases/releases/latest

Typical Windows assets:

- `Nexus-Setup.exe`
- `Nexus-Portable.exe`

## GitHub Pages

Enable **Settings → Pages → Source: GitHub Actions**. Deploys run via [`.github/workflows/deploy-website.yml`](.github/workflows/deploy-website.yml) on pushes to `website/**`.

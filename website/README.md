# Nexus website

Marketing and help site for Nexus, deployed to GitHub Pages from the public
[Nexus-releases](https://github.com/bwharrington/Nexus-releases) repository.

## Local development

```bash
cd website
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/Nexus-releases/`).

## Build

```bash
cd website
npm run build
npm run preview
```

Output is `website/dist` with base path `/Nexus-releases/`.

## Help docs

Curated markdown lives in [`content/help/`](content/help/). Register new topics in [`src/content/helpManifest.ts`](src/content/helpManifest.ts) (slug, title, summary, order).

## Deploy

Pushes that change `website/**` on `main` run [`.github/workflows/deploy-website.yml`](../.github/workflows/deploy-website.yml). Enable **GitHub Pages** in the repo settings with source **GitHub Actions**.

Live URL (after Pages is enabled): https://bwharrington.github.io/Nexus-releases/

Download buttons link to [Releases](https://github.com/bwharrington/Nexus-releases/releases/latest). Installers are published by CI in the private Nexus app repository (Windows Setup + Portable, macOS arm64/x64 DMGs).

# wifikeep.com

The official public marketing website for **WiFiKeep** ([wifikeep.com](https://wifikeep.com)), advertising the core web application at [app.wifikeep.com](https://app.wifikeep.com).

This repository is maintained as a standalone Next.js static site that is exported as pure HTML, CSS, and client-side JavaScript, and automatically deployed to GitHub Pages with the custom domain `wifikeep.com`.

---

## Features

- **Static Next.js Export**: Built using `output: 'export'` with unoptimized images for 100% static hosting on GitHub Pages or any static CDN.
- **Modern UI & Design**: Built with Tailwind CSS v4 and React 19.
- **Interactive Demos**:
  - Live client-side `WIFI:` QR Code generator & scanner preview.
  - Interactive OS capability matrix (Windows, macOS, Linux, iOS, Android).
  - Responsive FAQ accordion.
- **Conversion-Driven**: Direct CTAs to [app.wifikeep.com/signup](https://app.wifikeep.com/signup) and [app.wifikeep.com/login](https://app.wifikeep.com/login).
- **Automated Deployment**: GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.
- **Custom Domain**: Configured via `public/CNAME` pointing to `wifikeep.com`.

---

## Local Development

Inside this directory:

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev

# 3. Open in browser
open http://localhost:3000
```

---

## Static Build & Verification

```bash
# Typecheck
pnpm typecheck

# Build static export to ./out
pnpm build
```

The compiled output will be generated in `./out` with all assets, pages, and `CNAME` ready for static deployment.

---

## GitHub Actions & Custom Domain Setup

The repository includes [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) which automatically:
1. Checks out the code.
2. Sets up Node.js and pnpm.
3. Runs `pnpm install` and `pnpm run build`.
4. Uploads `./out` as a GitHub Pages artifact.
5. Deploys to GitHub Pages under the custom domain `wifikeep.com`.

Ensure GitHub Pages is enabled in the repository settings:
- **Settings** → **Pages** → **Source**: **GitHub Actions**.
- **Custom domain**: `wifikeep.com` (Enforce HTTPS enabled).

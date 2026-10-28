# Bharath R — Portfolio

Vite (vanilla JS) + Tailwind CSS v4. All content lives in [src/data/portfolio.js](src/data/portfolio.js).

## Setup

```bash
# Prerequisite: Node.js 20.19+ (Node 22/24 LTS recommended)
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve dist/ locally (http://localhost:4173)
```

How the project was bootstrapped (for reference):

```bash
npm create vite@latest portfolio -- --template vanilla
cd portfolio
npm install
npm install -D tailwindcss @tailwindcss/vite sharp
npm install @fontsource/bebas-neue @fontsource/abel
```

Tailwind v4 has no `tailwind.config.js`: the `@tailwindcss/vite` plugin is registered in `vite.config.js` and the
theme (colors, fonts, spacing, keyframes) lives in the `@theme` block in `src/style.css`.

## Editing content

Everything — name, headline, summary, skills, experience, projects, certificates, links, SEO title/description —
is in `src/data/portfolio.js`. Search the file for `TODO` to find the items that still need your input.

## Images

Original photos/certificates are in `iPortfolio/assets/img/` (legacy, untouched). `npm run images` regenerates the
web-sized WebP copies in `src/assets/img/` and the 1200×630 `public/og-image.jpg`. Add new images there and
reference them by path (relative to `src/assets/img/`) in `portfolio.js`.

## Deploy — Netlify (`netlify.toml` is included)

1. Push this folder to a GitHub repo (do not commit `node_modules`/`dist`; `.gitignore` already excludes them).
2. Netlify → **Add new site → Import an existing project** → pick the repo.
3. Build settings are read from `netlify.toml` (build command `npm run build`, publish directory `dist`, Node 22).
4. Deploy. To keep your existing URL, rename the site to `rbharath` under **Site configuration → Change site name**
   (or attach a custom domain), then make sure `site.url` in `portfolio.js` plus `public/robots.txt` and
   `public/sitemap.xml` match the final URL.

Or from the CLI, no Git needed:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

# Fallen Oak

Static Astro site for Fallen Oak Equine Rescue. The public site is built from Astro pages, reusable Astro components, JavaScript/JSON data files, and MDX-backed content collections.

## Stack

- Astro 6
- MDX through `@astrojs/mdx`
- Tailwind CSS 4 through `@tailwindcss/vite`
- Astro content collections for news articles and videos
- `astro-icon` with Iconify icon packages
- Static output in `dist/`

## Commands

Run commands from the project root:

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local Astro dev server |
| `npm run build` | Build the static production site into `dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run astro -- --help` | Show Astro CLI help |

## Project Structure

```text
/
├── functions/               Cloudflare Pages functions
│   └── robots.txt.js         Host-aware robots.txt response
├── public/                   Static files copied directly to the build
├── src/
│   ├── assets/               Images and media imported by Astro
│   ├── components/           Shared Astro components
│   ├── content/
│   │   ├── news/             News articles organized by year as MDX
│   │   └── videos/           Video entries organized by year as MDX
│   ├── data/                 Structured site data for cards/lists
│   ├── layouts/              Shared page shell
│   ├── lib/                  Shared TypeScript helpers
│   ├── pages/                File-based routes
│   └── styles/               Global CSS entry point
├── astro.config.mjs          Astro integrations and site config
├── src/content.config.ts     Content collection schema
├── tailwind.config.mjs       Tailwind theme/content config
└── tsconfig.json             TypeScript config
```

## News Articles

News lives in `src/content/news/<year>/<slug>.mdx`. The route is generated from the folder year and file slug:

```text
src/content/news/2026/hay-fundraiser.mdx
→ /news/2026/hay-fundraiser/
```

Each article is an MDX file with frontmatter validated by `src/content.config.ts`:

```mdx
---
title: "Article Title"
author: "Fallen Oak"
date: "January 1, 2026"
year: 2026
image: "../../../assets/news/2026/example.jpg"
pony: false
summary: "Short card/listing summary."
---

Article body content goes here.
```

Use `pony: true` for articles that should only be listed on the pony version of the site. Those articles may also include `normalContent` in frontmatter when the normal site needs a fallback body for a direct article URL.

The news routes are:

- `src/pages/news.astro` for the latest year listing
- `src/pages/news/[year].astro` for year archive pages
- `src/pages/news/[year]/[id].astro` for individual articles
- `src/lib/news.ts` for sorting, URL generation, and pony filtering

## Videos

Videos live in `src/content/videos/<year>/<slug>.mdx`. The route is generated from the folder year and file slug:

```text
src/content/videos/2026/hug-a-horse-on-fox-35.mdx
-> /videos/2026/hug-a-horse-on-fox-35/
```

Each video entry stores its card metadata, thumbnail, embed iframe, and detail page body in one MDX file:

```mdx
---
title: "Video Title"
date: "January 1, 2026"
year: 2026
image: "../../../assets/videos/2026/example.jpg"
pony: true
summary: "Short card/listing summary."
embed: |-
  <iframe title="Video title" src="https://example.com/embed"></iframe>
---

Detail page body content goes here.
```

The current video section is pony-only, so existing entries use `pony: true`. The routes are:

- `src/pages/videos.astro` for the latest visible year listing
- `src/pages/videos/[year].astro` for year archive pages
- `src/pages/videos/[year]/[id].astro` for individual video pages
- `src/lib/videos.ts` for sorting, URL generation, and pony filtering

## Pony Version

The production pony site is normally served from:

```text
https://pony.fallenoak.org
```

In code, the pony version is controlled by the `PONY` environment variable. When `PONY=true`, components wrapped in `DisplayPony.astro` render, components wrapped in `DisplayNormal.astro` are hidden, and pony-only news/video entries are included in listings.

For local development in PowerShell:

```powershell
$env:PONY = "true"
npm run dev
```

Then open:

```text
http://localhost:4321
```

To stop using pony mode in that terminal:

```powershell
Remove-Item Env:PONY
npm run dev
```

If pony mode is set in a root `.env` file, remove that line or set it to:

```env
PONY=false
```

If you want the local URL to look like the production subdomain, start the dev server with `PONY=true` and open:

```text
http://pony.localhost:4321
```

The hostname alone does not enable pony mode locally; the `PONY=true` environment variable is what changes the rendered site.

For production-style pony builds:

```powershell
$env:PONY = "true"
npm run build
Remove-Item Env:PONY
```

## Deployment Notes

The site builds as static output. Static redirects live in `public/_redirects`. The host-aware `robots.txt` behavior is handled by `functions/robots.txt.js`, which blocks crawlers on `pony.fallenoak.org` and allows crawlers on the main site.

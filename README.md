# reece-bunnage.github.io

Personal portfolio for Reece Bunnage — Information Systems at BYU, automation
consultant at SOLVD.cloud. Live at **https://reece-bunnage.github.io**.

## Stack

React 18 · Vite 5 · React Router 6 · Tailwind CSS 3 · framer-motion

Structurally modeled on [koleton.dev](https://koleton.dev) — same three-route
layout, same Ubuntu/Source Sans 3 type pairing. Deliberately built without
Material Tailwind or MUI, which is most of why the production bundle is ~312 KB
instead of ~1.5 MB.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/  (also writes 404.html for SPA deep links)
npm run preview  # serve the production build
```

## Adding a project

All content lives in `src/data/`. Nothing is hardcoded into components.

To add a project, append one object to the `projects` array in
`src/data/projects.js`:

```js
{
  slug: 'url-slug',              // becomes /projects/url-slug
  kind: 'build',                 // 'case-study' | 'build' | 'other'
  featured: false,               // true -> shows on the home page (keep to 3)
  title: 'Project Name',
  context: 'Where this came from',
  summary: 'One sentence for the card.',
  image: '/images/projects/name.png',   // or null for the icon placeholder
  icon: 'chart',                 // flow | shield | globe | chart | search | game
  tags: ['Tech', 'Tech'],
  body: ['Paragraph.', 'Paragraph.'],
  bulletsTitle: 'What this involved:',
  bullets: ['...'],
  outcome: 'Optional highlighted result.',
  note: 'Optional caveat, e.g. client systems not shown.',
  links: [{ label: 'View on GitHub', url: 'https://...' }],
}
```

Resume content lives in `src/data/profile.js` and `src/data/experience.js`.

## Images to add

The site renders correctly without these — each falls back to a monogram or
icon placeholder — but real screenshots are better:

| Path | Status |
| --- | --- |
| `public/images/portrait.jpg` | **Still needed** — hero photo, square crop (renders as a circle) |
| `public/images/projects/planetarium.jpg` | Captured from the live site |
| `public/images/projects/pandait.jpg` | Captured from the live site |
| `public/images/projects/risk-assessment.jpg` | Captured from the live demo |
| `public/images/projects/clothing-search.jpg` | Captured from the live demo |
| `public/images/projects/sharks-and-minnows.jpg` | Captured from the live demo |
| `public/images/projects/is-201-website.jpg` | Captured from the live demo |
| `public/images/projects/web-brawler.jpg` | Captured from a local match |
| Bucketeer | No screenshot — runs as a local workspace app, so it uses the icon fallback |

The two client/internal case studies (SOLVD quoting redesign, BYU IT automation)
intentionally use icon treatments — those systems shouldn't be screenshotted.

## Adding images

Drop files in `public/images/` (portrait) or `public/images/projects/`
(screenshots), then:

```bash
npm run optimize-images   # 4MB Retina screenshot -> ~300KB, skips small files
npm run build
git add -A && git commit -m "Add screenshots" && git push
```

If the optimizer changes a file's extension (`.png` -> `.jpg`), update that
project's `image` path in `src/data/projects.js`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Repo Settings → Pages → Source must be set to
**GitHub Actions**.

`npm run postbuild` copies `index.html` to `404.html` so GitHub Pages serves the
app shell for deep links like `/projects/bucketeer` — without it, a refresh on
any route other than `/` returns a 404.

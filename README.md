# reece-bunnage.github.io

Personal portfolio for Reece Bunnage — Information Systems at BYU (minors in
Cybersecurity and Computer Science), automation consultant at SOLVD.cloud,
building toward cybersecurity consulting. Live at
**https://reece-bunnage.github.io**.

## Stack

React 18 · Vite 5 · React Router 6 · Tailwind CSS 3 · framer-motion

Structurally modeled on [koleton.dev](https://koleton.dev) — same Ubuntu/Source
Sans 3 type pairing. Four routes: `/`, `/about`, `/projects` (plus
`/projects/:slug`), and `/credentials`. Deliberately built without
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
  kind: 'build',                 // 'case-study' | 'build' | 'other' | 'writing'
  featured: false,               // true -> shows on the home page (keep to 3)
  title: 'Project Name',
  context: 'Where this came from',
  summary: 'One sentence for the card.',
  image: '/images/projects/name.png',   // or null for the icon placeholder
  icon: 'chart',                 // flow | shield | globe | chart | search | game | rules | ai
  logo: { src: '/images/x.png', alt: 'X' },  // optional; overrides image/icon.
                                 // Renders centred on a cream plate instead of
                                 // cropped to fill — use for a brand mark.
  tags: ['Tech', 'Tech'],
  meta: 'Optional line under the title, e.g. dates.',
  body: ['Paragraph.', 'Paragraph.'],
  bulletsTitle: 'What this involved:',
  bullets: ['...'],
  outcome: 'Optional highlighted result.',
  note: 'Optional caveat, e.g. client systems not shown.',
  links: [{ label: 'View on GitHub', url: 'https://...' }],
}
```

### Which band a project lands in

`/projects` renders three bands, driven by the selectors at the bottom of
`projects.js`:

| `kind` | Band |
| --- | --- |
| `case-study`, `build` | **Projects** (`mainProjects`) |
| `other` | **Other Development Projects** (`otherProjects`, `compact` cards) |
| `writing` | **Writing** (`writing`) |

`mainProjects` is `kind !== 'other' && kind !== 'writing'`, so it is the default
band — a new `kind` lands there unless you add it to that filter too. Every kind
still gets a detail page at `/projects/:slug`.

The Writing band's grid is `sm:grid-cols-2`, sized for one or two pieces; bump it
to `lg:grid-cols-3` once there is a third. `writing[0]` also drives the one-line
"Also writing" mention under the featured projects on the home page, so the
newest piece goes **last** in the array — and the sentence after the link in
`src/pages/Home.jsx` is specific to that article, so it needs rewriting when a
newer one takes its place.

Array order matters for one other thing: the "Next:" link at the foot of a detail
page is `projects[(index + 1) % projects.length]`, a plain wraparound over the
whole array regardless of kind.

### One card, several projects

A single engagement that covers more than one project uses an optional
`sections` array instead of top-level `bullets`. The card in the grid stays one
card; the detail page renders a jump nav plus one block per section. `/projects/solvd`
is the example.

```js
{
  slug: 'solvd',
  // ...card fields as above, plus `body` for the shared intro. Omit `bullets`.
  sections: [
    {
      id: 'quoting-release',       // anchor target for the jump nav
      icon: 'flow',                // same glyph set, drawn small on a light badge
      title: 'Project name',
      tags: ['Tech', 'Tech'],
      summary: 'The scannable paragraph, set as a lead.',
      body: ['Paragraph.'],
      bulletsTitle: 'What this involved:',
      bullets: ['...'],
      takeaway: { label: "The call I'd defend", text: 'Why it was built this way.' },
    },
  ],
}
```

## Adding a page

`src/pages/Foo.jsx`, a `<Route>` in `src/App.jsx`, and one entry in the `LINKS`
array in `src/components/Navbar.jsx` — that array drives both the desktop nav and
the mobile drawer. Two things are *not* driven by it and need editing by hand:

- `src/pages/NotFound.jsx` names the tabs in prose.
- The `Resume` pill is hardcoded beside the array in both nav blocks.

## Resume content

Lives in `src/data/profile.js` and `src/data/experience.js`.

`public/Reece-Bunnage-Resume.pdf` is the served resume — currently the
cyber-focused version, and the only one. Every link to it comes from
`profile.resume`, so replacing the resume is a file overwrite and nothing else.
Serving *two* resumes (e.g. a security track and an automation track) would mean
turning `profile.resume` into a list and updating its three consumers:
`Navbar.jsx` (desktop pill and mobile drawer) and the `LINKS` array in
`SocialLinks.jsx`.

### Certifications and coursework

`/credentials` renders three arrays from `src/data/profile.js`. Anything not yet
earned carries its own status rather than being left off:

```js
export const certifications = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'In progress',        // 'Earned' -> solid tag; anything else -> outline
    date: 'Target November 2026', // or just the year, once earned
    what: 'One sentence on what it actually validates.',
  },
]

export const coursework = [
  { code: 'ACC 551', name: 'Course name', note: 'Graduate MAcc course', what: 'Optional.' },
]

export const communities = [
  { name: 'BYU Collegiate Cyber Defense Competition', note: 'Applicant' },
]
```

`communities` deliberately overlaps `involvement` (rendered on About): the same
clubs read as general involvement there and as security signal on `/credentials`.
Keep `note` honest — "Applicant" is not "Competitor".

The `skills` array is rendered `sm:grid-cols-2 lg:grid-cols-4` on About, so it
wants four groups. Adding a fifth reflows it.

## Images to add

The site renders correctly without these — each falls back to a monogram or
icon placeholder — but real screenshots are better:

| Path | Status |
| --- | --- |
| `public/images/portrait.jpg` | Supplied by Reece; the hero crops it square from the top |
| `public/images/solvd-logo.png` | SOLVD.cloud wordmark, from solvd.cloud; shown on a cream plate |
| `public/images/projects/planetarium.jpg` | Captured from the live site |
| `public/images/projects/pandait.jpg` | Captured from the live site |
| `public/images/projects/risk-assessment.jpg` | Captured from the live demo |
| `public/images/projects/clothing-search.jpg` | Captured from the live demo |
| `public/images/projects/sharks-and-minnows.jpg` | Captured from the live demo |
| `public/images/projects/web-brawler.jpg` | Captured from a local match |
| `public/images/projects/bucketeer-{dashboard,bank-sync,rules}.jpg` | Supplied by Reece; shown as a 3-image gallery |

The two client/internal case studies shouldn't be screenshotted: the BYU IT
automation entry uses an icon treatment, and the SOLVD engagement shows the
employer's wordmark instead.

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

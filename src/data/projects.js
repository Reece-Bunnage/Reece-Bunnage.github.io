// Single source of truth for every project on the site.
// To add a project: append one object here. No component changes needed.
//
//   kind:     'case-study' (work) | 'build' (self-directed) | 'other' (compact card)
//   featured: shows on the home page (keep this to 3)
//   image:    path under /public, or null to fall back to the monogram placeholder

export const projects = [
  {
    slug: 'salesforce-quoting-redesign',
    kind: 'case-study',
    featured: true,
    title: 'Salesforce Quoting Workflow Redesign',
    context: 'SOLVD.cloud — Automation Consultant',
    summary:
      'Rebuilt how a 20-user sales team creates quotes, working with client stakeholders and an offshore team.',
    image: null,
    icon: 'flow',
    tags: [
      'Salesforce',
      'Revenue Cloud / CPQ',
      'Flows',
      'Validation Rules',
      'Stakeholder Management',
    ],
    body: [
      'A sales team of 20 was building quotes through a workflow that took longer than it needed to and left room for mistakes at every step. The fix was not a single automation — it was understanding where the manual steps actually were, then deciding which ones the system should own.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Partnering with client stakeholders to map the existing quoting workflow and find where errors were being introduced',
      'Coordinating the redesign with an offshore development team',
      'Configuring Revenue Cloud (CPQ) to streamline quoting and pricing',
      'Building Salesforce automations with Flows and validation rules to reduce manual workload and lower data-entry errors',
      'Cutting user errors and reducing quote creation time for the 20-user sales team',
    ],
    outcome:
      'Measurably improved sales team speed and deal execution by up to 25%.',
    note: 'Client systems are not shown. This write-up describes scope and approach only.',
    links: [],
  },
  {
    slug: 'it-automation-knowledge-base',
    kind: 'case-study',
    featured: false,
    title: 'IT Automation & Knowledge Base',
    context: 'BYU Department of Physics and Astronomy — IT Computer Support Specialist',
    summary:
      'Automated Active Directory cleanup and built the documentation that keeps the same question from getting asked twice.',
    image: null,
    icon: 'shield',
    tags: [
      'Active Directory',
      'Intune',
      'Jamf',
      'Process Automation',
      'Documentation',
    ],
    body: [
      'Supporting 100+ students and faculty surfaces the same two problems over and over: records that drift out of date, and questions that get answered from scratch every time. Both are automation problems more than they are support problems.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Automating device inventory processes, removing inactive devices and users from Active Directory to improve system accuracy and security hygiene by 10%',
      'Leading the initiative to formalize the department IT knowledge base',
      'Reducing repeat support requests and improving onboarding for new student employees',
      'Resolving software, hardware, and network issues for 100+ students and faculty using Active Directory/Intune, Jamf, and diagnostic tools',
    ],
    note: 'Internal university systems are not shown.',
    links: [],
  },
  {
    slug: 'byu-physics-astronomy-web',
    kind: 'case-study',
    featured: false,
    title: 'BYU Physics & Astronomy Web Content',
    context: 'BYU Department of Physics and Astronomy — Brightspot CMS',
    summary:
      'Built and maintained pages for two live BYU department sites: the Royden G. Derrick Planetarium and the Physics & Astronomy Tech Office.',
    image: '/images/projects/planetarium.jpg',
    gallery: [
      {
        src: '/images/projects/planetarium.jpg',
        caption: 'planetarium.byu.edu — shows, community group bookings, and directions for public visitors.',
      },
      {
        src: '/images/projects/pandait.jpg',
        caption: 'pandait.byu.edu — IT service documentation and request intake for department faculty, staff, and students.',
      },
    ],
    icon: 'globe',
    tags: ['Brightspot CMS', 'Content Strategy', 'Technical Documentation'],
    body: [
      'Two audiences, two very different jobs. The planetarium site serves the public and community groups — schools, scout troops, youth organizations — who need to know what is showing, how to book a group, and where to park. The Tech Office site serves department faculty, staff, and students who need a specific answer fast: how to install Mathematica, how to get on the VPN, how to reset an account.',
      'Both run on Brightspot, BYU’s institutional CMS. My work was content and page building — writing and updating pages so people can find what they came for without asking someone first.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Building and maintaining pages in Brightspot CMS across both department sites',
      'Keeping show, scheduling, and community-group booking information current for public visitors',
      'Writing and updating IT service documentation — software installation, computer labs, VPN, accounts, printing — for department users',
      'Keeping the two sites consistent with BYU web standards',
    ],
    links: [
      { label: 'planetarium.byu.edu', url: 'https://planetarium.byu.edu/' },
      { label: 'pandait.byu.edu', url: 'https://pandait.byu.edu/' },
    ],
  },
  {
    slug: 'risk-assessment',
    kind: 'build',
    featured: true,
    title: 'Risk Assessment',
    context: 'Self-directed — AI-assisted decision tool',
    summary:
      'A web app that uses AI to run a risk assessment on a piece of software, built for IT departments deciding whether to adopt or integrate it.',
    image: '/images/projects/risk-assessment.png',
    icon: 'shield',
    tags: ['JavaScript', 'AI', 'IT Governance'],
    body: [
      'IT departments get asked to approve new software constantly, and the assessment that should happen before saying yes often does not — not because nobody cares, but because doing it properly takes time nobody has.',
      'This app puts AI in that gap: describe the program, get a structured risk assessment back. It is the intersection of the two things I am building toward — AI as a working tool, and the governance side of business systems.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Designing a web app that performs an AI-driven risk assessment of a program',
      'Framing the output for the actual decision: should an IT department use or integrate this software',
      'Building the interface and the prompt structure behind the assessment',
    ],
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/Reece-Bunnage/Risk-Assessment',
      },
    ],
  },
  {
    slug: 'bucketeer',
    kind: 'build',
    featured: true,
    title: 'Bucketeer',
    context: 'Self-directed — TypeScript',
    summary:
      'A personal budgeting app you download and run locally, so your transaction history never leaves your machine.',
    image: '/images/projects/bucketeer.png',
    icon: 'chart',
    tags: ['TypeScript', 'Local-First', 'Personal Finance'],
    body: [
      'Budgeting apps want your bank credentials. That is the trade almost all of them ask for, and it is the reason a lot of people never start.',
      'Bucketeer runs locally instead. You download it, run it on your own machine, and feed it transaction history — either a CSV export or your own bank API key. Nothing is hosted, so there is no third party holding your financial data. That constraint drove most of the design decisions in the project.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Building a budgeting app in TypeScript that runs locally rather than as a hosted service',
      'Supporting two ways in: CSV import of transaction history, or linking a bank with your own API key',
      'Designing around the local-first constraint — no server means no stored credentials',
    ],
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/Reece-Bunnage/bucketeer',
      },
    ],
  },
  {
    slug: 'clothing-search',
    kind: 'build',
    featured: false,
    title: 'Clothing Search',
    context: 'Self-directed — built for a real user',
    summary:
      'Queries multiple clothing sites at once so my wife can cast a wide net in one search instead of ten tabs.',
    image: '/images/projects/clothing-search.png',
    icon: 'search',
    tags: ['JavaScript', 'Web Scraping', 'Search'],
    body: [
      'My wife shops for a specific item across a handful of sites, one tab at a time. This collapses that into a single query — search once, get options from everywhere at once.',
      'It is a small tool with exactly one user, which turned out to be the useful part: I got feedback on every decision immediately from the person actually using it.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Building a site that queries multiple clothing retailers for a given item',
      'Aggregating results into a single view so a wide net can be cast quickly',
      'Iterating directly on feedback from the person using it',
    ],
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/Reece-Bunnage/clothing-search',
      },
    ],
  },
  {
    slug: 'web-brawler',
    kind: 'other',
    featured: false,
    title: 'Web Brawler',
    context: 'Self-directed — built with Claude Code',
    summary:
      'A multiplayer browser game over WebSockets with a local server — a deliberate test of how far AI-assisted development goes on something real-time.',
    image: '/images/projects/web-brawler.png',
    icon: 'game',
    tags: ['JavaScript', 'WebSockets', 'AI-Assisted Development'],
    body: [
      'A friend and I wanted to know whether we could vibe-code a multiplayer game and actually play it against each other. WebSockets and a local server, built with Claude Code.',
      'The point was not the game. Real-time multiplayer is unforgiving about state — two clients disagreeing is immediately visible on screen — which made it a good place to find out where AI-assisted development carries you and where you have to reason it through yourself.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Building a multiplayer browser game using WebSockets and a local server',
      'Using Claude Code as the primary development tool and directing it through the build',
      'Working out where the AI-generated approach held up and where synchronization had to be reasoned through directly',
    ],
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/Reece-Bunnage/web-brawler',
      },
    ],
  },
  {
    slug: 'sharks-and-minnows',
    kind: 'other',
    featured: false,
    title: 'Sharks and Minnows',
    context: 'Self-directed — built with Claude Code',
    summary:
      'A browser arcade game: swim across the pool without getting caught. Built to test what AI-assisted development handles well.',
    image: '/images/projects/sharks-and-minnows.png',
    icon: 'game',
    tags: ['JavaScript', 'Game Development', 'AI-Assisted Development'],
    body: [
      'A browser arcade game built explicitly as an experiment in vibe-coding with Claude Code — how much of a small, complete, playable thing can be built this way, and what still needs a human decision.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Building a complete browser arcade game from scratch',
      'Using Claude Code as the development tool end to end',
      'Treating the build as a way to learn where AI assistance is strongest',
    ],
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/Reece-Bunnage/sharks-and-minnows',
      },
    ],
  },
  {
    slug: 'is-201-website',
    kind: 'other',
    featured: false,
    title: 'IS 201 Website',
    context: 'BYU coursework',
    summary: 'Class website project — early coursework in web development.',
    image: null,
    icon: 'globe',
    tags: ['JavaScript', 'HTML', 'CSS'],
    body: [
      'A class website project from IS 201. Included here because the course is right that version history is part of the evidence — it shows where the web work started.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: ['Building a website for coursework using JavaScript, HTML, and CSS'],
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/Reece-Bunnage/IS-201-WEBSITE',
      },
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const mainProjects = projects.filter((p) => p.kind !== 'other')
export const otherProjects = projects.filter((p) => p.kind === 'other')
export const getProject = (slug) => projects.find((p) => p.slug === slug)

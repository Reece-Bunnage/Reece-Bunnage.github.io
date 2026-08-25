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
    featured: false,
    title: 'bunnage shield',
    context: 'Self-directed — AI-powered vendor risk assessment',
    summary:
      'Helps security and compliance teams evaluate third-party vendor risk in minutes instead of weeks: answer 14 questions, get an AI-generated risk report.',
    image: '/images/projects/risk-assessment.jpg',
    icon: 'shield',
    tags: ['React', 'AI', 'Vendor Risk', 'Compliance'],
    body: [
      'Before a company signs with a vendor, someone is supposed to assess the risk. In practice that review is slow enough that it often gets skipped, or reduced to a form nobody reads — which is exactly when a bad integration gets approved.',
      'bunnage shield compresses that review into 14 questions and returns an AI-generated risk report. It keeps a history of past assessments, so a team can see how a vendor was evaluated and revisit the reasoning later.',
      'This is the project that sits closest to where I am headed: AI doing the analytical work, applied to a governance decision a business actually has to make.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Designing a 14-question assessment that produces enough signal for a useful risk report without becoming another form nobody finishes',
      'Generating the risk report with AI and structuring the output around the decision being made — sign or do not sign',
      'Building assessment history so past evaluations stay reviewable',
      'Shipping it as a React app deployed on GitHub Pages',
    ],
    links: [
      {
        label: 'Live demo',
        url: 'https://reece-bunnage.github.io/Risk-Assessment/',
      },
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
      'A local-first budgeting app with a rules engine that files transactions into buckets automatically, so categorizing a month of spending stops being manual work.',
    image: '/images/projects/bucketeer-dashboard.jpg',
    gallery: [
      {
        src: '/images/projects/bucketeer-dashboard.jpg',
        caption:
          'Dashboard — what is left to spend, and budget vs. actual by bucket with child buckets rolled into parents.',
      },
      {
        src: '/images/projects/bucketeer-bank-sync.jpg',
        caption:
          'Accounts & sync — connect a real bank through Plaid or Teller, or stay in CSV-only mode and import nothing live.',
      },
      {
        src: '/images/projects/bucketeer-rules.jpg',
        caption:
          'Categorization rules, grouped by the bucket each one files into. When several match, the most specific rule wins.',
      },
    ],
    icon: 'chart',
    tags: ['TypeScript', 'Rules Engine', 'Local-First', 'Plaid / Teller'],
    body: [
      'Budgeting apps want your bank credentials, and that trade is why a lot of people never start. Bucketeer runs on your own machine instead \u2014 \u201cAll data stays on this computer\u201d is a line in the interface, not a marketing claim. It still connects to real banks through Plaid or Teller, but the access tokens live in the browser\u2019s local database and a local server proxies the requests. Nothing is hosted, so there is no third party holding your financial history. If you would rather connect nothing at all, CSV import covers it.',
      'The part I care about most is the rules engine, because hand-categorizing transactions is the chore that kills budgeting. A rule reads \u201cdescription contains COSTCO GAS \u2192 Gas,\u201d and it files that transaction every month without being asked again.',
      'Rules need conflict resolution the moment you have more than a few, so I had to decide what happens when several match one transaction: the most specific rule wins, ties go to the longer keyword, then to the newest rule. Anything unmatched stays Uncategorized rather than getting guessed at \u2014 a wrong bucket is worse than an empty one, because you stop trusting the numbers.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Building a local-first budgeting app in TypeScript \u2014 no hosted service and no stored credentials',
      'Connecting real accounts through Plaid or Teller, with CSV import as the no-integration path',
      'Writing a categorization rules engine that files transactions into buckets automatically',
      'Defining deterministic precedence for when several rules match the same transaction, and leaving unmatched ones alone',
      'Rolling child buckets up into parents for budget-vs-actual reporting',
      'Keeping access tokens in the browser\u2019s local database, proxied by a local server',
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
    featured: true,
    title: 'Clothing Search',
    context: 'Self-directed — built for a real user',
    summary:
      'Searches eight stores at once by size and actual measurements, so my wife can stop opening a tab per retailer.',
    image: '/images/projects/clothing-search.jpg',
    icon: 'search',
    tags: ['JavaScript', 'Search', 'UX'],
    body: [
      'My wife shops for one specific item across a handful of stores, one tab at a time. This collapses that into a single search across Amazon, ASOS, Nordstrom, Macy\u2019s, SHEIN, Target, H&M, and Bohme.',
      'The part that actually matters is measurements. A size 6 is not a size 6 across eight retailers, so filtering on a real number \u2014 minimum length in inches \u2014 does more work than filtering on a label. That insight came from the person using it, not from me.',
      'One user, one real problem, feedback on every decision within a day. It stayed small on purpose.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Building a single search that queries eight clothing retailers at once',
      'Filtering by type, size, color, minimum length in inches, and free-text keywords',
      'Letting the shopper choose which stores to include in a given search',
      'Iterating directly with the person using it',
    ],
    links: [
      {
        label: 'Live demo',
        url: 'https://reece-bunnage.github.io/clothing-search/',
      },
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
    image: '/images/projects/web-brawler.jpg',
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
    image: '/images/projects/sharks-and-minnows.jpg',
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
        label: 'Play it',
        url: 'https://reece-bunnage.github.io/sharks-and-minnows/',
      },
      {
        label: 'View on GitHub',
        url: 'https://github.com/Reece-Bunnage/sharks-and-minnows',
      },
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const mainProjects = projects.filter((p) => p.kind !== 'other')
export const otherProjects = projects.filter((p) => p.kind === 'other')
export const getProject = (slug) => projects.find((p) => p.slug === slug)

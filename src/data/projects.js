// Single source of truth for every project on the site.
// To add a project: append one object here. No component changes needed.
//
//   kind:     'case-study' (work) | 'build' (self-directed) | 'other' (compact card)
//   featured: shows on the home page (keep this to 3)
//   image:    path under /public, or null to fall back to the monogram placeholder

export const projects = [
  {
    slug: 'solvd',
    kind: 'case-study',
    featured: true,
    title: 'Salesforce CPQ — Client Engagement',
    context: 'SOLVD.cloud — Automation Consultant',
    meta: 'Sep 2025 – Present · AI & Salesforce consulting',
    summary:
      'Requirements, solution design, QA, and release delivery on an enterprise CPQ implementation, alongside an offshore development team.',
    image: null,
    icon: 'flow',
    logo: {
      src: '/images/solvd-logo.png',
      alt: 'SOLVD.cloud',
    },
    tags: [
      'Salesforce CPQ',
      'Solution Design',
      'Requirements Gathering',
      'UAT',
      'Release Management',
      'Stakeholder Management',
      'Claude',
    ],
    body: [
      'I work on the Salesforce CPQ implementation for an enterprise software client — requirements, solution design, QA, and release delivery alongside an offshore development team. Client and product names withheld.',
    ],
    sections: [
      {
        id: 'quoting-release',
        icon: 'flow',
        title: 'Enterprise Quoting Release — Requirements & QA Ownership',
        tags: [
          'Salesforce CPQ',
          'Requirements Gathering',
          'Solution Design',
          'UAT',
          'Release Management',
          'Stakeholder Management',
        ],
        summary:
          'An enterprise software client needed a new AI product line to be quotable on its own rather than bolted onto an existing product. Eleven weeks, three user stories, thirty-seven subtasks, and a production deployment across 29 quote templates.',
        impact: {
          text: 'The client’s sales team can now sell the new AI product line on its own — a deal that previously couldn’t be quoted at all — and it reached production with a backstop that keeps it off accounts that aren’t entitled to it.',
          stats: [
            { value: '29', label: 'quote templates shipped to production' },
            { value: '7', label: 'blocking developer questions resolved' },
            { value: '8', label: 'post-UAT defects triaged' },
            { value: '2', label: 'descoped builds caught before release' },
          ],
        },
        body: [
          'The client’s sales team could only quote the new product line on top of an existing platform product. A customer who wanted just the new line couldn’t be quoted at all. Removing that dependency wasn’t one change — it touched product configuration, pricing, quote documents, approval rules, and a downstream billing integration. The hard part wasn’t building anything. It was working out what the system needed to stop requiring, and proving that loosening those requirements wouldn’t let a bad quote through.',
        ],
        bulletsTitle: 'What this involved:',
        bullets: [
          'Drafting the technical design the development team built from, assembled from stakeholder calls, mid-project requirement changes, and direct investigation of the production org',
          'Resolving seven blocking technical questions from the offshore development team so implementation could move',
          'Reverse-engineering an existing calculation pattern in the org so a new one could be modeled on it rather than invented',
          'Authoring the UAT test plan and running the client acceptance session',
          'Triaging eight post-UAT defects with pass/fail verdicts, and reproducing two on video so developers could fix them from a repro rather than a description',
          'Catching two products that had been built after being descoped, and getting them removed before release',
          'Approving the production deployment across 29 quote templates',
        ],
        takeaway: {
          label: 'What I did',
          text: 'The requirement everyone wanted to remove was also a safety net, so I pushed for a quote-level validation rule as a backstop so that even with the prerequisites relaxed, the new products couldn’t land on an account that wasn’t entitled to them. Slightly more to maintain, and it means the loosening can’t be exploited by accident.',
        },
      },
      {
        id: 'rule-bypass',
        icon: 'rules',
        title: 'Product Rule Bypass Framework',
        tags: [
          'Salesforce CPQ',
          'Solution Design',
          'Validation Rules',
          'Least-Privilege Access',
          'QA',
          'Client UAT',
        ],
        summary:
          'Approved exceptions were deadlocking quotes — a validation rule would block the save even after the business had signed off on the exception. The fix had to unblock the rule without unblocking everyone.',
        impact: {
          text: 'Approved exceptions stopped deadlocking quotes, and sales operations got a way to clear one specific rule without switching off every other guardrail — visible only to the one team that should have it.',
          stats: [
            { value: '4', label: 'rules, each with its own scoped bypass' },
            { value: '1', label: 'profile with access — verified as the real user' },
            { value: '1', label: 'missed blocking rule caught before release' },
          ],
        },
        body: [
          'In Salesforce CPQ, a rule that requires Product B whenever Product A is on the quote is doing exactly its job — right up until someone approves an exception. Then the quote can’t be saved at all, and the rule that was protecting data integrity is just in the way. The obvious fix is a global admin override, which would have worked and would have been a bad idea: one switch that turns off every guardrail at once, available to whoever holds it.',
        ],
        bulletsTitle: 'What this involved:',
        bullets: [
          'Designing a per-rule bypass — a multi-select picklist where each value disarms exactly one named rule, so clearing one blocker never silently clears another',
          'Diagnosing that error conditions couldn’t evaluate the multi-select field directly, and specifying a formula field that flattens the selected values into text the conditions can parse',
          'Specifying four summary variables and four error conditions, and writing the deployment plan',
          'Authoring the test script — naming the specific product cohorts and quote records to test against and to exclude — then executing it across all four rules in multiple quote scenarios',
          'Verifying least-privilege access by logging in as the client’s actual sales-operations user to confirm the field was invisible to every other profile',
          'Finding an adjacent validation rule the spec had missed that still blocked the save, and escalating it before release',
        ],
        takeaway: {
          label: 'What I did',
          text: 'Chose one picklist value per rule over a single global bypass. It’s more configuration to maintain and more for a user to understand, and it buys something worth the cost — an override can never do more than the person who requested it intended.',
        },
      },
      {
        id: 'ai-design-drafting',
        icon: 'ai',
        title: 'AI-Assisted Design Drafting',
        tags: [
          'Claude',
          'Prompt Engineering',
          'Requirements Analysis',
          'Meeting Transcripts',
          'Salesforce CPQ',
        ],
        summary:
          'Requirements arrived as hour-long calls; developers needed build-ready specs. I built a workflow that converts one into the other and keeps the judgment calls human.',
        impact: {
          text: 'Developers built from a spec that reflected the latest decision rather than last week’s, instead of waiting while someone re-read hours of call recordings — and nothing AI-generated reached them without my review.',
          stats: [
            { value: '37', label: 'subtasks built from my design' },
            { value: '3', label: 'user stories traced to it' },
          ],
        },
        body: [
          'On a fast-moving release, decisions get made on a call and then revised on the next one. Reading back through transcripts to work out what’s still true is slow — and it’s the kind of slow that makes a whole project late, because developers sit blocked while someone reconstructs the current state of the requirements. I used Claude against the meeting transcripts to extract what had actually changed, then wrote the design myself from that.',
        ],
        bulletsTitle: 'What this involved:',
        bullets: [
          'Running call transcripts through Claude to pull out changed decisions and requirement deltas instead of re-reading them by hand',
          'Drafting the technical design the development team built from — three user stories and thirty-seven subtasks trace back to it',
          'Using Claude to research specific integration questions the team was blocked on, then delivering the findings as a document developers could act on directly',
          'Reviewing and correcting AI output before it reached anyone else, and treating peer review of my own draft as part of the process — two of my field-design decisions were corrected in review, which is what review is for',
        ],
        takeaway: {
          label: 'What I did',
          text: 'AI drafted, I decided. Nothing it produced reached a developer without going through me, and I own what shipped. I hold Anthropic’s Claude Certified Architect credential, and the reason I think that’s worth something is not that it means I can prompt well — it’s that using these tools on real client work requires knowing where their output stops being trustworthy.',
        },
      },
    ],
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
    impact: {
      text: 'Inactive accounts and unmanaged devices came out of the department directory — fewer doors left open — and recurring questions now have a documented answer that new student employees onboard from. The knowledge base was an initiative I led.',
      stats: [
        { value: '100+', label: 'students and faculty supported' },
        { value: '3', label: 'identity and device platforms — AD, Intune, Jamf' },
      ],
    },
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
      'Executing an access-device review that identified and removed inactive user accounts and unmanaged devices from Active Directory, reducing vulnerability',
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
    impact: {
      text: 'Public visitors can find a show, book a group, and get directions — and department users can answer their own IT questions — without emailing or calling someone first.',
      stats: [
        { value: '2', label: 'live BYU department sites I build and maintain' },
      ],
    },
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
    title: 'BunnageShield',
    context: 'Self-directed — third-party vendor risk assessment',
    summary:
      'Helps security and compliance teams evaluate third-party vendor risk in minutes instead of weeks: answer 14 questions, get an AI-generated risk report.',
    impact: {
      text: 'Built on my own time to close a real gap: vendor reviews that get skipped because they’re slow. It’s live today — anyone can run an assessment and get a report without installing anything.',
      stats: [
        { value: '14', label: 'questions to a full risk report' },
        { value: 'Live', label: 'public demo, deployed and usable' },
      ],
    },
    image: '/images/projects/risk-assessment.jpg',
    icon: 'shield',
    tags: ['Vendor Risk', 'Compliance', 'React', 'Google Gemini API', 'Vite'],
    body: [
      'Before a company signs with a vendor, someone is supposed to assess the risk. In practice that review is slow enough that it often gets skipped, or reduced to a form nobody reads — which is exactly when a bad integration gets approved.',
      'BunnageShield compresses that review into 14 questions and returns an AI-generated risk report. It keeps a history of past assessments, so a team can see how a vendor was evaluated and revisit the reasoning later.',
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
    impact: {
      text: 'Categorizing a month of spending goes from a manual chore to rules that run on their own — without handing bank credentials to a hosted service.',
      stats: [
        { value: '0', label: 'credentials held by a hosted server' },
        { value: '2', label: 'live bank integrations — Plaid and Teller' },
      ],
    },
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
    featured: false,
    title: 'Clothing Search',
    context: 'Self-directed — built for a real user',
    summary:
      'Searches eight stores at once by size and actual measurements, so my wife can stop opening a tab per retailer.',
    impact: {
      text: 'One search replaces eight browser tabs, and every decision was shaped by the person who actually uses it.',
      stats: [
        { value: '8', label: 'retailers in a single search' },
        { value: '1', label: 'real user giving feedback within a day' },
      ],
    },
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
    slug: 'lucid-bot',
    kind: 'build',
    featured: false,
    title: 'LPC 2026 Competition Bot',
    context: 'Self-directed competition bot, built with my wife',
    meta: 'October 2026 · Lucid Programming Competition',
    summary:
      'A C++ bot for the Lucid Programming Competition that took 1st and then 2nd in its first two ranked rounds and made the finals, then slid to 11th as rival teams changed their strategies between rounds and we didn’t.',
    impact: {
      text: 'Top two in the first two ranked rounds and a spot in the finals against teams from BYU, the University of Utah, and Utah State, and a hard lesson in agility: the teams that inspected and adapted every round overtook the one that played it safe.',
      stats: [
        { value: '1st', label: 'Round 1, of 16 teams' },
        { value: '2nd', label: 'Round 2, of 15 teams, 6 gold behind first' },
        { value: '5th', label: 'Semifinals, of 16 teams' },
        { value: '11th', label: 'Finals, of 16 teams' },
      ],
    },
    image: '/images/projects/lucid-bot.jpg',
    icon: 'game',
    tags: ['C++20', 'Game AI', 'Simulation', 'Agile', 'AI-Assisted Development'],
    body: [
      'The Lucid Programming Competition puts sixteen teams’ bots on the same map. Each turn, every bot gives each of its workers one order (move, mine, deposit, recruit, or build a base), and after 480 turns the team with the most gold in its bank wins. My wife and I entered as [BYU] Virginia, and like every team we had three hours to plan, build, and test our bot.',
      'We built it around one idea: price everything in gold. Mining a deposit, exploring an unseen corner, hiring another worker, and building a base next to a gold field each get an estimated value minus the time they cost, and every worker takes the best option still available. Workers don’t pile onto the same deposit, and nothing gets started that can’t be banked before the match ends.',
      'Alongside the bot we built an offline simulator of the game rules, so a change had to hold up across hundreds of simulated matches against several kinds of opponents before we shipped it. That discipline is why the bot was solid from the first ranked round: 1st place, then 2nd, six gold behind the winner.',
      'We made it to the finals, but we slid on the way: 5th in the semifinals, then 11th in the finals. Every team could study replays of every match, ours included, and the teams around us treated each round like a sprint: review what happened, change something, ship it before the next one. By the finals several of them were racing to build bases across the rich center of the map in the first sixty turns, which locked us out of the best gold. The data was in front of me too. I saw the trend coming and decided to play it safe rather than risk breaking something that worked, and that cost us.',
    ],
    bulletsTitle: 'What this involved:',
    bullets: [
      'Writing the strategy in C++20 on top of the competition’s starter client: map memory, weighted 8-direction pathfinding, and an economic model for recruiting workers and building bases',
      'Building an offline simulator of the game rules to benchmark strategy changes against the built-in bots and against copies of our own bot',
      'Reading match replays after each round, which include every team’s actions, to see where our workers lost time and what the leading teams did differently',
      'Hardening the client so a dropped connection or a slow turn couldn’t knock the bot out of a ranked match',
      'Using Claude Code throughout, from the bot and simulator to the replay analysis',
    ],
    outcome:
      'Take the opportunity to learn from the data around you and adapt. It makes things less comfortable, but it could give you the edge needed to win. I decided to play it safe, and it cost us.',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/mow1472/lucid-bot',
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
  {
    slug: 'cyber-hygiene-small-business',
    kind: 'writing',
    // The home page gets a one-line mention rather than a fourth featured card.
    featured: false,
    title: 'Cyber Hygiene for Small Businesses',
    context: 'Writing \u2014 published on LinkedIn',
    meta: 'June 2025',
    summary:
      'An introduction to cybersecurity for new business owners, told through the three little pigs: why weak passwords and phishing are the wolf at the door, and which habits to build before growth makes them expensive.',
    image: null,
    icon: 'book',
    tags: ['Cyber Hygiene', 'Small Business', 'Security Awareness', 'Technical Writing'],
    body: [
      'Starting a business is exciting, and security is the thing that gets postponed \u2014 there is always something more urgent than a password policy. The article makes that case in terms a new owner already knows: the three little pigs. A straw house goes up fast and comes down just as fast, and plenty of new businesses are running one without meaning to.',
      'The threats it covers are the unglamorous ones \u2014 weak passwords, phishing, and the digital risks that get overlooked while everyone is focused on growth. Each is paired with a real-world example and a habit that costs almost nothing to adopt at the start and a great deal to retrofit later.',
      'I wrote it for a business communication course at BYU, and the assignment shaped the whole approach: the reader is a future business owner with no security background and no patience for jargon. Turning a technical risk into a decision someone will actually act on is most of what security consulting is, so the constraint turned out to be the useful part.',
    ],
    bulletsTitle: 'What the article covers:',
    bullets: [
      'Weak and reused passwords \u2014 the cheapest exposure to close',
      'Phishing, and what it looks like when it arrives at a small business',
      'The digital risks new owners overlook while focused on growth',
      'Real-world examples paired with habits to build from the start, rather than after an incident',
    ],
    outcome:
      "Just like the little pigs' brick house kept the wolf out, good cyber hygiene keeps your business safe.",
    note: 'Summary written for this site. The full article is on LinkedIn.',
    links: [
      {
        label: 'Read it on LinkedIn',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7340824586076184576/',
      },
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
// Every `kind` except the two that get their own band on the Projects page.
export const mainProjects = projects.filter(
  (p) => p.kind !== 'other' && p.kind !== 'writing',
)
export const otherProjects = projects.filter((p) => p.kind === 'other')
export const writing = projects.filter((p) => p.kind === 'writing')
export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const profile = {
  name: 'Reece Bunnage',
  role: 'Automation & Business Systems Consultant',
  // The role is the job I hold; the direction is the one I'm moving toward.
  // Kept as separate fields so the hero can render it as a subordinate line
  // rather than overstating the title.
  direction: 'building toward cybersecurity consulting',
  location: 'Utah',
  tagline:
    'I build automation and business systems that take manual work off of the people who do the work — and I sit with those people to figure out what to automate in the first place.',
  intro: [
    "I'm an Information Systems student at BYU's Marriott School of Business, minoring in Cybersecurity and Computer Science, and an automation consultant at SOLVD.cloud.",
    "Most of what I do comes down to the same pattern: find the step where a team is doing something by hand, understand why it works that way, and rebuild it so the system does it instead. At SOLVD that looks like requirements, solution design, and QA on a Salesforce CPQ implementation for an enterprise client. At BYU's Department of Physics and Astronomy it has looked like identity and endpoint administration across Active Directory, Intune, and Jamf, an access review that pulled inactive accounts and unmanaged devices out of the directory, and a knowledge base that keeps the same question from getting asked twice.",
    "The direction I'm building toward is the security side of business systems — identity and access, third-party risk, and the controls that decide who is allowed to do what. It's the same translation problem as automation work: what a team needs, against what a system can actually be made to enforce. I'm working toward CompTIA Security+, and applying to BYU's five-year integrated MISM program, since its emphasis on leadership and project management is the half of security consulting that technical coursework doesn't cover.",
  ],
  email: 'rjbunnage@gmail.com',
  linkedin: 'https://www.linkedin.com/in/reece-bunnage/',
  github: 'https://github.com/Reece-Bunnage',
  githubHandle: 'Reece-Bunnage',
  resume: '/Reece-Bunnage-Resume.pdf',
}

export const education = {
  school: 'Brigham Young University — Marriott School of Business',
  location: 'Provo, UT',
  degrees: [
    {
      name: 'Master of Information Systems Management (MISM)',
      note: 'Applying to the five-year integrated program',
      dates: 'Expected April 2029',
    },
    {
      name: 'Bachelor of Science, Information Systems',
      note: 'Minors in Cybersecurity & Computer Science',
      dates: 'Expected April 2028',
    },
  ],
  details: ['GPA 4.00 / 4.00', 'BYU Academic Scholarship'],
}

// Rendered on /credentials. Kept in resume order — Security+ leads because it
// is the direction, and the `status` badge does the work of being honest about
// what is earned versus in progress.
export const certifications = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'In progress',
    date: 'Target November 2026',
    what: 'The baseline credential for security work — threat types, secure architecture, risk management, and the controls that mitigate them.',
  },
  {
    name: 'Claude Certified Architect',
    issuer: 'Anthropic',
    status: 'Earned',
    date: '2026',
    what: "Designing and deploying systems built on Claude. What it's worth on client work isn't that I can prompt well — it's knowing where a model's output stops being trustworthy.",
  },
  {
    name: 'Salesforce Certified Platform Administrator',
    issuer: 'Salesforce',
    status: 'Earned',
    date: '2025',
    what: 'Platform configuration and the security model — profiles, permission sets, and record-level sharing. The access-design half of it is what I use most.',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'In progress',
    date: 'Target December 2026',
    what: 'Cloud fundamentals, including the shared responsibility model and IAM.',
  },
]

export const coursework = [
  {
    code: 'ACC 551',
    name: 'Risk Assurance and Information Technology Audit',
    note: 'Graduate MAcc course',
    what: 'IT general controls, audit evidence, and how a control gets tested rather than assumed.',
  },
  {
    code: 'CS 235',
    name: 'Data Structures & Algorithms',
    note: 'C++',
  },
  {
    code: 'IS 303 / CS 111',
    name: 'Intro to Programming',
    note: 'Python',
  },
]

// Also on /credentials, framed there as security signal. The general list of
// clubs lives in `involvement` below, on the About page.
export const communities = [
  {
    name: 'BYU Collegiate Cyber Defense Competition',
    note: 'Applicant',
  },
  { name: 'BYU Linux Association', note: 'Member' },
  { name: 'BYU Association of Information Systems', note: 'Member' },
  { name: 'BYU AI Association', note: 'Member' },
  { name: 'Marriott Inclusion & Belonging Society', note: 'Member' },
]

export const skills = [
  {
    group: 'Security & Identity',
    items: [
      'Active Directory',
      'Microsoft Intune',
      'Jamf (MDM)',
      'Least-Privilege Access Design',
      'IT Change Control (CCB)',
      'IT Risk & Controls',
      'UAT & Test Authoring',
    ],
  },
  {
    group: 'Automation & Business Systems',
    items: [
      'Salesforce Administration',
      'Salesforce CPQ',
      'Solution Design',
      'Validation Rules',
      'Flows',
      'Process Design',
      'Apex',
      'SOQL',
      'VBA',
    ],
  },
  {
    group: 'Development',
    items: [
      'Python',
      'JavaScript / TypeScript',
      'C++',
      'React',
      'Next.js',
      'Node.js',
      'WebSockets',
      'HTML & CSS',
    ],
  },
  {
    group: 'Data & Tooling',
    items: [
      'SQL',
      'SQLite',
      'Tableau',
      'Git & GitHub',
      'Jira',
      'Asana',
      'Gearset',
      'Windows / macOS / Linux',
      'AI & Prompt Engineering',
    ],
  },
]

// Certifications moved to /credentials; what is left here is recognition.
export const awards = [
  { title: 'BYU Full Academic Scholarship', note: 'Award' },
  { title: 'Dean’s List', note: 'Award — 4 semesters' },
  { title: 'SOLVD.cloud Team Award', note: 'Award — January 2026' },
  {
    title: 'Texas State UIL Computer Applications',
    note: 'Competitor',
  },
]

export const involvement = [
  'BYU Association of Information Systems',
  'BYU AI Association',
  'BYU Linux Association',
  'BYU Collegiate Cyber Defense Competition (applicant)',
  'Marriott Inclusion & Belonging Society',
]

export const hobbies = [
  'Running',
  'Weightlifting',
  'Sci-fi books',
  'Ping-pong',
  'Pickleball',
  'Water sports',
]

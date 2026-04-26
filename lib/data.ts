export const personal = {
  name: "Sai Krishna Keerti",
  role: "Full Stack Engineer",
  stack: "React · Next.js · Node.js · TypeScript · GraphQL · PostgreSQL",
  tagline: "I build products end-to-end — from the API layer to the pixel.",
  bio: "7 years building full-stack, production-grade products — spanning React frontends, Node.js/Java backends, GraphQL APIs, and cloud deployments on GCP. I operate across the entire stack and care deeply about performance, clean architecture, and shipping things that actually work at scale.",
  availability: "Open to senior full-stack/frontend roles · Hyderabad / Banglore / Remote",
  email: "saikrishnakeerti@gmail.com",
  linkedin: "https://www.linkedin.com/in/saikrishnakeerti",
  location: "Hyderabad, India",
};

export const stats = [
  { num: "7 yrs", label: "Experience" },
  { num: "70%", label: "Build time saved" },
  { num: "$300k+", label: "Revenue impact" },
  { num: "1k+", label: "Users shipped to" },
  { num: "Full Stack", label: "End-to-end" },
];

export const experience = [
  {
    company: "Highspot",
    role: "Senior Software Engineer",
    period: "Jun 2021 – Feb 2026",
    location: "Hyderabad",
    bullets: [
      "Built a <strong>Python SSE-based MCP server</strong> that automates Zephyr test case creation through Cursor — cutting manual effort for adding tests <strong>from hours to minutes</strong>.",
      "Migrated the lint pipeline to a <strong>dual ESLint + oxlint setup</strong>, slashing pre-commit lint time <strong>from 50s → 25s</strong> and delivering initial lint feedback in <strong>under 2 seconds</strong>.",
    ],
    tags: ["React", "TypeScript", "Redux", "Ruby", "Java", "Python"],
  },
  {
    company: "Bicycle.ai",
    role: "Senior Software Engineer",
    period: "Jun 2021 – Feb 2026",
    location: "Hyderabad",
    bullets: [
      "Architected the frontend of the core <strong>Modelling module</strong> — the product's primary customer onboarding surface — driving cross-functional collaboration across backend, product, and design teams.",
      "Migrated build system from Webpack to Vite, cutting <strong>build and hot-reload times by ~70%</strong> and significantly improving daily developer experience.",
      "Built a <strong>plug-and-play AI chat provider component</strong> using Context-based state propagation — now embedded across multiple products, enabling the team to ship AI features faster.",
      "Rearchitected the dashboard framework to support global filters — a key capability that directly helped <strong>secure clients generating $150,000+ in annual revenue</strong>.",
      "Designed and shipped a full <strong>OAuth authentication flow</strong> with Google Sign-In, password login, and self-serve user management from scratch.",
      "Mentored developers through code reviews and pair programming, raising code quality standards in an Agile environment.",
    ],
    tags: ["React", "TypeScript", "Redux", "Vite", "GraphQL", "Jest", "Java / JAX-RS", "GCP", "Docker"],
  },
  {
    company: "Zemoso Technologies",
    role: "Software Development Engineer",
    period: "Aug 2018 – May 2021",
    location: "Hyderabad",
    bullets: [
      "Built a React-based mentorship platform for a client that scaled to <strong>1,000+ users and was eventually acquired</strong> — owned the full frontend from architecture to delivery.",
      "Delivered a <strong>WebRTC proof-of-concept</strong> (SIPml + Asterisk) demonstrating real-time call capabilities that directly contributed to converting the client.",
      "Built <strong>canvas-based image editing and anomaly detection</strong> capabilities into a reporting tool, streamlining and improving the accuracy of data analysis.",
    ],
    tags: ["React", "Redux", "Python", "Flask", "PostgreSQL", "WebRTC", "Canvas API", "Material-UI"],
  },
];

export const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js / Express", level: 85 },
  { name: "GraphQL (Client + Server)", level: 87 },
  { name: "REST API Design", level: 88 },
  { name: "PostgreSQL / SQL", level: 80 },
  { name: "Java / JAX-RS", level: 78 },
  { name: "Docker / GCP", level: 76 },
  { name: "Redux / State Mgmt", level: 88 },
  { name: "Testing (Jest / RTL)", level: 82 },
  { name: "CSS / Animation", level: 90 },
  { name: "Performance & Tooling", level: 88 },
];

export const blogPosts = [
  {
    slug: "webpack-to-vite-70-percent",
    tag: "Performance",
    title: "Webpack → Vite: how we cut build times by 70% in a production React app",
    desc: "Step-by-step migration, real config diffs, and the gotchas nobody warns you about.",
    readTime: "6 min read",
    date: "Coming soon",
    published: false,
  },
  {
    slug: "plug-and-play-ai-chat-react-context",
    tag: "Architecture",
    title: "Building a plug-and-play AI chat component with React Context",
    desc: "How I designed a reusable chat provider that snaps into any feature with zero setup.",
    readTime: "5 min read",
    date: "Coming soon",
    published: false,
  },
  {
    slug: "global-filters-dashboard-architecture",
    tag: "State Management",
    title: "Global filters in a dashboard: the architecture decision that changed everything",
    desc: "State management tradeoffs, performance implications, and the UX wins we unlocked.",
    readTime: "7 min read",
    date: "Coming soon",
    published: false,
  },
  {
    slug: "oauth-from-scratch-react",
    tag: "Auth",
    title: "OAuth from scratch: Google Sign-In + password auth in React",
    desc: "A practical, no-library guide to building a full authentication flow from the ground up.",
    readTime: "8 min read",
    date: "Coming soon",
    published: false,
  },
  {
    slug: "shipping-a-platform-that-got-acquired",
    tag: "Story",
    title: "What I learned shipping a platform that got acquired",
    desc: "The decisions, tradeoffs, and lessons from building a product used by 1,000+ people.",
    readTime: "5 min read",
    date: "Coming soon",
    published: false,
  },
  {
    slug: "canvas-api-image-editing-react",
    tag: "Canvas API",
    title: "Canvas API for image editing in React: a practical guide",
    desc: "How to build real image manipulation tools using the browser's native Canvas API.",
    readTime: "6 min read",
    date: "Coming soon",
    published: false,
  },
];

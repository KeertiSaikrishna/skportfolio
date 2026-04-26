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
      "Led Webpack → Vite migration and purged <strong>~150 unused modules</strong> — slashing build time <strong>from 10 min to under 5 min</strong> and hot module reload <strong>from 8s to under 3s</strong>, transforming the daily dev experience.",
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
    slug: "why-react-server-components",
    tag: "React · Next.js · Performance",
    title: "Why React Server Components? The Problem Nobody Fully Explained",
    desc: "You've been using Next.js for a while. You know getServerSideProps, you've seen 'use client'. But do you actually know why RSC exists?",
    readTime: "18 min read",
    date: "Apr 26, 2026",
    published: true,
  },
  {
    slug: "webpack-to-vite-70-percent",
    tag: "Performance",
    title: "Webpack → Vite: how we cut build times by 70% in a production React app",
    desc: "Step-by-step migration, real config diffs, and the gotchas nobody warns you about.",
    readTime: "6 min read",
    date: "Coming soon",
    published: false,
  },
];

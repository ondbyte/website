// Content for the post-AI site. Sourced from github.com/ondbyte (public repos only)
// and the resume. Edit here; App.tsx only renders it.

export type EntryType = "Career" | "Open source" | "App"

export type Entry = {
  date: string
  year: string
  type: EntryType
  title: string
  description: string
  impact: string
  tech: string[]
  href?: string
  language?: string
  color?: string
  stars?: number
  forks?: number
  featured?: boolean
}

const GH = "https://github.com/ondbyte"
const lang = {
  Go: "#00ADD8",
  Rust: "#dea584",
  "C++": "#f34b7d",
  Dart: "#00B4AB",
  TypeScript: "#3178c6",
} as const

export const profile = {
  name: "Yadhunandan K S",
  initials: "YK",
  handle: "ondbyte",
  location: "Bengaluru, India",
  email: "yadunandanworks@gmail.com",
  github: GH,
  linkedin: "https://linkedin.com/in/yadu",
  stackoverflow: "https://stackoverflow.com/users/12341099/yadu",
  medium: "https://medium.com/@yadhunandan.me",
  publicRepos: 54,
  yearsCoding: new Date().getFullYear() - 2020,
  contributionsLastYear: 224,
}

// Daily GitHub contribution counts for the last 12 weeks (oldest first), from the GitHub API.
export const recentContributions = [
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 4, 2, 3, 0, 0, 6, 5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 12, 9, 19, 1, 8, 15, 10, 10, 2, 0, 0, 0, 3, 13, 5, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]

export const services = [
  {
    title: "Mobile apps",
    body: "Android and iOS apps from a single Flutter or React Native (Expo) codebase. I take them from first screen to Play Store and App Store release.",
    tech: ["Flutter", "React Native", "Expo", "Firebase"],
  },
  {
    title: "Web apps",
    body: "Dashboards, booking systems and internal tools built in React or with HTMX, wired to a real API and deployed to your domain.",
    tech: ["React", "TypeScript", "HTMX", "Tailwind"],
  },
  {
    title: "Back-ends & APIs",
    body: "Go back-ends with login, payments, OTP and admin panels on PostgreSQL. I deploy them to AWS, GCP or a VPS and look after them.",
    tech: ["Go", "PostgreSQL", "Docker", "AWS / GCP"],
  },
]

export const entries: Entry[] = [
  {
    date: "Oct",
    year: "2026",
    type: "Open source",
    title: "chromeaf: Chromium with an MCP server",
    description:
      "ungoogled-chromium with a Model Context Protocol server built into the browser process. AI agents, scripts or plain curl can read pages, find elements and drive a real browser over HTTP.",
    impact: "Built by patching the browser itself, not a wrapper around it",
    tech: ["C++", "Chromium", "MCP"],
    href: `${GH}/chromeaf`,
    language: "C++",
    color: lang["C++"],
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    date: "Oct",
    year: "2026",
    type: "Open source",
    title: "servoaf: Servo browser with MCP",
    description:
      "The Servo sibling of chromeaf. It is the full servoshell browser with the same MCP tools built in, so a person and an AI agent can use the same window at the same time.",
    impact: "Same MCP tool surface on two browser engines",
    tech: ["Rust", "Servo", "MCP"],
    href: `${GH}/servoaf`,
    language: "Rust",
    color: lang.Rust,
    stars: 0,
    forks: 0,
  },
  {
    date: "May",
    year: "2026",
    type: "Open source",
    title: "dredd: self-hosted code sandbox",
    description:
      "A fast, self-hosted alternative to Judge0, written in Go. It runs untrusted code inside Firecracker microVMs with hardware-level isolation, behind a simple HTTP API.",
    impact: "40+ languages · Firecracker microVM isolation",
    tech: ["Go", "Firecracker", "Linux"],
    href: `${GH}/dredd`,
    language: "Go",
    color: lang.Go,
    stars: 0,
    forks: 0,
  },
  {
    date: "Jul",
    year: "2024",
    type: "Career",
    title: "Software Engineer 2, American Express",
    description:
      "I own parts of the Profile Service in R42, Amex's high-throughput event-driven microservice platform. I build issuer-specific behaviour, onboard new partners and write the rules-engine logic that pays out rewards and cashback.",
    impact: "BDD and system test suites · mentoring on code quality",
    tech: ["Go", "Java", "Microservices", "Rules engine"],
    href: "https://linkedin.com/in/yadu",
  },
  {
    date: "Jun",
    year: "2024",
    type: "Open source",
    title: "simplejwt",
    description: "A small, dependency-light JWT library for Go with pluggable signers, including HMAC.",
    impact: "Grew out of the token auth work at Impelsys",
    tech: ["Go", "JWT", "Crypto"],
    href: `${GH}/simplejwt`,
    language: "Go",
    color: lang.Go,
    stars: 0,
    forks: 0,
  },
  {
    date: "Mar",
    year: "2024",
    type: "Open source",
    title: "ogo: OpenAPI for Go, automatically",
    description:
      "Generates OpenAPI documentation from your Go handlers and validates API parameters out of the box. Written from scratch, in Go and for Go.",
    impact: "No annotations to keep in sync",
    tech: ["Go", "OpenAPI", "Reflection"],
    href: `${GH}/ogo`,
    language: "Go",
    color: lang.Go,
    stars: 0,
    forks: 0,
  },
  {
    date: "Feb",
    year: "2024",
    type: "Open source",
    title: "whatsapp: conversation bots in Go",
    description:
      "A Go package for writing automated WhatsApp conversations on the official WhatsApp Business (WABA) API: text, location, contacts, images, video and documents.",
    impact: "The kind of bots big companies use, as a Go library",
    tech: ["Go", "WABA", "Webhooks"],
    href: `${GH}/whatsapp`,
    language: "Go",
    color: lang.Go,
    stars: 0,
    forks: 1,
  },
  {
    date: "Oct",
    year: "2023",
    type: "Open source",
    title: "samlmux",
    description: "A SAML helper for Go HTTP servers that handles SP metadata, the login flow and assertion handling.",
    impact: "Extracted from the SAML auth service I designed",
    tech: ["Go", "SAML", "SSO"],
    href: `${GH}/samlmux`,
    language: "Go",
    color: lang.Go,
    stars: 0,
    forks: 0,
  },
  {
    date: "May",
    year: "2023",
    type: "Open source",
    title: "turbo_flag",
    description:
      "A drop-in replacement for Go's flag package that adds subcommands, JSON/YAML/TOML config files, .env loading, environment variable binding, enums and short aliases.",
    impact: "Drop-in: swap the import and keep your code",
    tech: ["Go", "CLI"],
    href: `${GH}/turbo_flag`,
    language: "Go",
    color: lang.Go,
    stars: 1,
    forks: 0,
  },
  {
    date: "Nov",
    year: "2022",
    type: "Career",
    title: "Software Engineer 1, Impelsys",
    description:
      "Designed a SAML authentication service, a token-claims roles service and a custom AES-based JWT library. Built NATS-based peer authentication and a REST wrapper that reloads nats-server config with zero downtime.",
    impact: "Go · MySQL · NATS · AWS",
    tech: ["Go", "Gin", "NATS", "MySQL", "Docker"],
  },
  {
    date: "Oct",
    year: "2022",
    type: "Open source",
    title: "SimpMQ",
    description: "A deliberately simple message queue broker and client in Go, with no dependencies.",
    impact: "go install and you have a broker",
    tech: ["Go", "Messaging"],
    href: `${GH}/simp_mq`,
    language: "Go",
    color: lang.Go,
    stars: 0,
    forks: 0,
  },
  {
    date: "May",
    year: "2021",
    type: "App",
    title: "Learn from Maps (Geo-edutech)",
    description:
      "A geography learning app for schools. Freelance founding engineer: I built the Flutter front-end, a Go licensing service for schools and a GCS-backed file cache, and set up the VM, NGINX and systemd deploy.",
    impact: "Live on Google Play",
    tech: ["Flutter", "Go", "GCP", "Firebase"],
    href: "https://play.google.com/store/apps/details?id=com.learnfrommaps.android",
    language: "Dart",
    color: lang.Dart,
  },
  {
    date: "Apr",
    year: "2021",
    type: "Open source",
    title: "super_strapi + simple_strapi",
    description:
      "Two Dart packages: one generates typed Dart classes from Strapi models, and the other is a Strapi SDK for Flutter with find, count and complex graph queries.",
    impact: "My most-starred work · used by other Flutter devs",
    tech: ["Dart", "Flutter", "Strapi", "Codegen"],
    href: `${GH}/super_strapi`,
    language: "Dart",
    color: lang.Dart,
    stars: 6,
    forks: 4,
  },
  {
    date: "Jan",
    year: "2021",
    type: "App",
    title: "Bapp: Book Appointments (BigMints, Dubai)",
    description:
      "A freelance appointment-booking app. I moved it from serverless to a Node.js + MongoDB server on App Engine to cut costs, and added Firebase auth and slot calculation based on existing bookings.",
    impact: "Lower running costs after the server migration",
    tech: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    href: "https://play.google.com/store/apps/details?id=com.bigmints.bapp",
    language: "Dart",
    color: lang.Dart,
  },
  {
    date: "Jun",
    year: "2020",
    type: "App",
    title: "Little Basket & Bharat Grocer (Coorgle)",
    description:
      "Cross-platform grocery shopping apps for clients of Coorgle Web Services, built in Flutter with Firebase messaging and a Strapi back-end.",
    impact: "Two client apps shipped to Google Play",
    tech: ["Flutter", "Firebase", "Strapi"],
    href: "https://play.google.com/store/apps/details?id=com.coorgle.bharatgrocer.three",
    language: "Dart",
    color: lang.Dart,
  },
  {
    date: "Jun",
    year: "2020",
    type: "Career",
    title: "Software Engineer, Coorgle Web Services",
    description:
      "My first engineering role after switching careers from three years in financial sales. I built Flutter apps for clients, wrote design docs and shipped on deadlines in an Agile team.",
    impact: "Career switch: sales → software",
    tech: ["Flutter", "Firebase", "TypeScript"],
  },
]

export const filters = ["All work", "Career", "Open source", "App"] as const

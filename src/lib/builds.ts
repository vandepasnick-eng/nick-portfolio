export interface Build {
  slug: string;
  title: string;
  date: string;
  category: string;
  stack: string[];
  description: string;
  url?: string;
  story: string;
  interesting: string;
}

export const builds: Build[] = [
  {
    slug: "nv-web-design",
    title: "NV Web Design — NZ Trades Business Website",
    date: "2025",
    category: "Web Build",
    stack: ["HTML", "CSS", "JavaScript", "Claude Code"],
    description:
      "Conversion-focused business website for NZ trades web design service. Not a portfolio piece — a live sales tool for an active business.",
    url: "https://nicholasvandepas.com",
    story:
      "This was the first website I built as part of launching my NZ Web Design for Trades business. The brief was simple: convert cold outreach prospects into enquiries. Single page, conversion-focused, mobile-first. Built entirely with Claude Code.\n\nThe design needed to speak directly to NZ trades business owners — plumbers, electricians, builders — who don't have a website and aren't sure they need one. Every section answers an objection or builds trust.",
    interesting:
      "This isn't just a portfolio piece — it's a live sales tool for an active business. I cold-call NZ trades businesses using this site as the product demo. It shows that the work is real, not just practice.",
  },
  {
    slug: "google-places-lead-gen",
    title: "Google Places Lead Generation Tool",
    date: "2025",
    category: "AI Tool",
    stack: ["Python", "Google Places API"],
    description:
      "Scraped 500+ NZ businesses without websites across small towns. Became the entire sales database for the web design business.",
    story:
      "I needed a way to find NZ trades businesses that didn't have websites — at scale, without paying for a list. So I built a scraper using the Google Places API that systematically searched small towns across New Zealand for trades businesses, then filtered for those without a web presence.\n\nThe result: 500+ qualified leads with business name, phone number, location, and trade type. This became the entire sales database for the web design business.",
    interesting:
      "This is the engineering mindset applied to sales — systematic, data-driven approach to identifying a market gap. Instead of guessing where the prospects are, I built a tool to find them. That's what an engineer brings to business problems.",
  },
  {
    slug: "valentines-countdown",
    title: "Valentine's Day Countdown Site",
    date: "2025",
    category: "Personal",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "Climbing-themed countdown site built for my partner. Daily unlocks revealing messages and memories leading up to Valentine's Day.",
    story:
      "Built for my partner Gabryelle. We both love climbing, so I made a climbing-themed countdown site where each day leading up to Valentine's Day unlocked a new message, memory, or inside joke. Each \"hold\" on the wall was a day to click.\n\nIt was a fun constraint — build something emotionally meaningful using the same tools I use for business projects.",
    interesting:
      "Not everything I build is a business tool. This shows range — the ability to build something playful and emotionally considered, not just technically functional. Same stack, same tools, completely different intent.",
  },
  {
    slug: "tarot-lead-magnet",
    title: "Tarot Lead Magnet Site",
    date: "2025",
    category: "Web Build",
    stack: ["Next.js", "Claude Code"],
    description:
      "Interactive tarot-based lead magnet for a life coaching business. Users get a reading, the business gets an email lead.",
    story:
      "Built for my mother-in-law's life coaching business. The concept: a tarot-based interactive experience where users draw cards and receive a personalised reading. At the end, they're prompted to leave their email to get the full interpretation — turning engagement into a lead.\n\nThis was the project where I properly learned Next.js and Claude Code together. Real client, real brief, real constraints.",
    interesting:
      "A good story about learning a new framework by shipping something real rather than following a tutorial. The brief came from a real client with real expectations, which forced me to figure things out properly instead of taking shortcuts.",
  },
  {
    slug: "claude-code-workspace",
    title: "Claude Code Portfolio Workspace",
    date: "2025",
    category: "AI Tool",
    stack: ["Claude Code", "Markdown"],
    description:
      "Structured workspace system for Claude Code — context files, reusable slash commands, organised folder structure. The system that builds everything else.",
    story:
      "Before building anything, I built the environment to build in. This workspace uses structured context files (purpose, about, projects, design decisions, current state) and reusable slash commands (/build-site, /add-build, /add-post) to make every Claude Code session productive from the first message.\n\nThe idea: instead of re-explaining context every session, encode it in files that Claude reads automatically. Every session starts with /prime, which loads all context so Claude understands the current state of the site.",
    interesting:
      "Meta — a tool built to build tools. Demonstrates systems thinking: before building, build the environment to build in. This is the engineering discipline showing up in a completely different domain.",
  },
];

export function getAllBuilds(): Build[] {
  return builds;
}

export function getBuildBySlug(slug: string): Build | undefined {
  return builds.find((b) => b.slug === slug);
}

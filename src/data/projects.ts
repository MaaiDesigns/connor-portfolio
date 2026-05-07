export type LiveSite = {
  name: string;
  url: string;
  description: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  problem: string;
  solution: string;
  outcome: string;
  technical: string[];
  liveSites?: LiveSite[];
};

export const projects: Project[] = [
  {
    id: "geo-prospect-engine",
    number: "01",
    title: "GEO Prospect Engine",
    client: "Early-Stage Startup",
    year: "2024",
    tags: ["Agent Architecture", "Lead Generation", "API Orchestration"],
    problem:
      "A startup needed to identify prospects matching a specific ideal customer profile across multiple geographies. The manual process was slow, inconsistent, and couldn't scale with their growth targets.",
    solution:
      "Designed an agent-driven prospecting engine that ingested an ICP prompt and decomposed the search into geography-specific pipelines. Each agent independently sourced, filtered, and ranked leads against the profile criteria. The system was progressively automated — once OpenClaw was layered on top, the entire pipeline ran autonomously with minimal oversight.",
    outcome:
      "Transformed a multi-day manual research process into an automated pipeline delivering qualified, geography-segmented prospect lists. Adding a new geography became a configuration change, not a rebuild.",
    technical: [
      "ICP-driven prompt architecture",
      "Geography-segmented agent orchestration",
      "Progressive automation from semi-manual to fully autonomous",
      "OpenClaw integration for unattended execution",
    ],
  },
  {
    id: "vc-deal-sourcing",
    number: "02",
    title: "VC Deal Sourcing Platform",
    client: "Venture Capital Firm",
    year: "2024",
    tags: ["CRM Integration", "Multi-Stage Pipeline", "Search & Enrichment APIs"],
    problem:
      "A VC firm needed to increase deal flow velocity without sacrificing quality. Analysts were spending hours on manual note-taking after meetings and even more time sourcing companies that fit a nuanced investment thesis.",
    solution:
      "Started with the bottleneck closest to revenue: a meeting-note-to-CRM integration that automatically extracted relevant details from transcripts and wrote structured notes directly into the CRM. With that foundation in place, designed a multi-stage deal sourcing pipeline that utilized search and enrichment APIs to find companies and evaluate them through progressive layers of thesis-fit scoring. Companies that passed each stage were enriched further and re-evaluated — creating a funnel that surfaced only the highest-quality prospects.",
    outcome:
      "Analysts received curated, thesis-matched prospect lists in their inbox every morning. Multi-stage filtering dramatically reduced time spent on unqualified leads, letting the team focus on relationship-building instead of research.",
    technical: [
      "Meeting transcript → structured CRM entries",
      "Investment thesis prompt engineering",
      "Multi-stage search, enrichment, and evaluation pipeline",
      "Automated daily delivery to analyst workflows",
    ],
  },
  {
    id: "moco-platform",
    number: "03",
    title: "MOCO — Autonomous Digital Employee Platform",
    client: "Internal Platform / 2555 Ventures",
    year: "2025–Present",
    tags: ["Platform Engineering", "Autonomous Agents", "DevOps", "Model Routing"],
    problem:
      "Small businesses need quality web presence and ongoing content marketing, but can't afford traditional agency pricing. Delivering boutique quality at scale requires infrastructure that doesn't grow linearly with headcount.",
    solution:
      "Architected MOCO (Marketing, Operations, Content, Outreach) as a full autonomous digital employee platform running on dedicated hardware. A Mac Mini M4 serves as the compute layer, managed via PM2 process management, networked through Tailscale, with secrets in macOS Keychain. The system includes a Telegram bot for command interface, a Next.js dashboard for task management, a 50-skill library synced from GitHub on a 5-minute cron, and tiered model routing that selects the right AI model based on task complexity. Claude Code runs authenticated for autonomous code generation and execution.",
    outcome:
      "A single operator delivers website builds, content creation, and ongoing marketing services to multiple clients simultaneously — work that would typically require a 3–5 person agency team.",
    technical: [
      "Mac Mini M4 as autonomous compute node",
      "PM2 process orchestration with Tailscale networking",
      "Telegram bot + Next.js dashboard interfaces",
      "50-skill library with GitHub sync (5-min cron)",
      "Tiered model routing (skill config → routing table → keyword inference → pillar fallback)",
      "Claude Code API integration for autonomous execution",
      "macOS Keychain secrets management",
    ],
  },
  {
    id: "production-client-sites",
    number: "04",
    title: "Production Client Sites",
    client: "Multiple Clients",
    year: "2025",
    tags: ["Next.js", "Vercel", "Production Deployment", "Client Delivery"],
    problem:
      "Local small businesses either had no web presence or were overpaying agencies for cookie-cutter templates. They needed professional, performant sites that reflected their business — without the $5K+ price tag.",
    solution:
      "Designed and deployed production Next.js sites through the MOCO pipeline. Each site is custom-built with a cohesive design language, deployed on Vercel with professional-grade performance and optimized for search.",
    outcome:
      "Live production sites serving real businesses with ongoing content and maintenance delivered through the MOCO platform at a fraction of traditional agency cost.",
    technical: [
      "Next.js 14 with App Router",
      "Vercel deployment pipeline",
      "Formspree form integrations",
      "Responsive, performance-optimized builds",
      "Cohesive design system across all properties",
    ],
    liveSites: [
      {
        name: "Maai Designs",
        url: "https://maaidesigns.com",
        description: "Agency site — narrative-driven, 10-chapter homepage",
      },
      {
        name: "Best Cleaners & Laundry",
        url: "https://bestcleanerssavannah.com",
        description: "Full-service cleaning — local SEO, service pages, booking",
      },
      {
        name: "Korean Golf Association of Savannah",
        url: "https://savkga.com",
        description: "Community org — membership, tournaments, event registration",
      },
    ],
  },
];

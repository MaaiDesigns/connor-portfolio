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
  diagram?: "geo" | "vc" | "moco";
  liveSites?: LiveSite[];
  crossReference?: string;
};

export const projects: Project[] = [
  {
    id: "lead-sourcing-system",
    number: "01",
    title: "Lead Sourcing & Deduplication System",
    client: "Early-Stage Startup (name withheld)",
    year: "2024",
    tags: ["Agent Orchestration", "Lead Generation", "Dashboard Design"],
    problem:
      "A startup needed to identify prospects matching a specific ideal customer profile across multiple U.S. geographies. Their team was manually researching leads — slow, inconsistent, and couldn't scale.",
    solution:
      "Designed a geography-segmented prospecting workflow using ChatGPT agents. Each agent independently sourced leads for a specific metro area against the company's ICP criteria. Built a simple dashboard in Lovable for the team to review, deduplicate, and export results. The output was clean CSVs that dropped directly into their existing CRM — no integration engineering required.",
    outcome:
      "Transformed a multi-day manual research process into a same-day pipeline. Adding a new geography became a configuration step, not a rebuild. The team went from spending days on lead research to spending that time on outreach.",
    technical: [
      "ICP-driven prompt design for consistent agent output",
      "Geography-segmented agent orchestration (one agent per metro)",
      "Lovable dashboard for deduplication and review",
      "CSV export → direct CRM import (no API integration needed)",
    ],
  },
  {
    id: "vc-deal-intelligence",
    number: "02",
    title: "VC Deal Intelligence Platform",
    client: "Venture Capital Firm (name withheld)",
    year: "2024",
    tags: ["CRM Integration", "Autonomous Research", "Dashboard Design"],
    problem:
      "A VC firm had years of meeting notes, conversation history, and deal evaluation scattered across tools. Analysts were spending hours on manual note organization and even more time sourcing companies that fit a nuanced investment thesis.",
    solution:
      "Started with the most immediate pain point: organizing all of their conversation history and notes into a searchable, accessible dashboard built on Supabase. Designed a system that automatically synced structured notes into their CRM. As the foundation solidified, evolved the system into an autonomous deal sourcing pipeline. Trained an OpenClaw instance on the firm's investment thesis — the specific criteria, data points, and company characteristics they evaluated. The agent ran research autonomously, evaluating companies through progressive layers of thesis-fit scoring.",
    outcome:
      "Analysts received a curated email every morning with five companies that matched their investment thesis — sourced, evaluated, and summarized overnight. The system went from 'help us organize our notes' to 'do our first-pass deal sourcing for us' over the course of the engagement.",
    technical: [
      "Supabase database for centralized note and conversation storage",
      "Automated CRM sync for structured meeting outputs",
      "Investment thesis prompt engineering for agent training",
      "OpenClaw instance for autonomous overnight research",
      "Multi-stage evaluation pipeline (search → enrich → score → deliver)",
      "Automated daily email delivery to analyst workflows",
    ],
  },
  {
    id: "moco-platform",
    number: "03",
    title: "MOCO — Autonomous Digital Employee Platform",
    client: "Internal Platform / 2555 Ventures",
    year: "2025–Present",
    tags: ["Platform Engineering", "Autonomous Agents", "Process Design"],
    diagram: "moco",
    problem:
      "Small businesses need quality web presence and ongoing marketing, but can't afford traditional agency pricing. Delivering boutique quality at scale requires a system — not more headcount.",
    solution:
      "Designed MOCO (Marketing, Operations, Content, Outreach) as an autonomous operations platform running on dedicated hardware. A Mac Mini serves as the always-on compute layer, running a skill library of 50+ workflows synced from GitHub, a Telegram bot for task commands, and a dashboard for monitoring. The platform handles website builds, content creation, social media, and client communications — work that would typically require a 3–5 person team.",
    outcome:
      "A single operator delivers full-service digital marketing to multiple clients simultaneously. Currently building out the agent team to handle increasingly complex workflows autonomously — the goal is a business that scales through infrastructure, not hiring.",
    technical: [
      "Mac Mini M4 as dedicated compute node",
      "50+ skill library with automated GitHub sync",
      "Telegram bot + dashboard for task management",
      "Tiered model routing (task complexity → appropriate AI model)",
      "Claude Code for autonomous code generation and deployment",
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
      "Local small businesses either had no web presence or were overpaying agencies $5K+ for basic sites. They needed professional, performant websites without the traditional agency price tag.",
    solution:
      "Designed and deployed production Next.js sites through the MOCO pipeline. Custom-built with a cohesive design language, Vercel deployment, search-optimized.",
    outcome:
      "Live production sites serving real businesses. Best Cleaners & Laundry saw a $40K Q1 year-over-year revenue increase — attributed primarily to increased organic search visibility and a modern booking flow. That's a 33× return on a $300/month investment.",
    technical: [
      "Next.js 14 App Router",
      "Vercel deployment",
      "Formspree integrations",
      "Performance-optimized",
      "Cohesive design system",
    ],
    crossReference:
      "See the Design Showcase section above for device mockups of each site.",
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
  {
    id: "ai-business-architecture",
    number: "05",
    title: "AI Business Architecture",
    client: "Company name withheld (active engagement)",
    year: "2025",
    tags: ["Systems Design", "Agent Architecture", "Consulting"],
    problem:
      "A company needed to operate as a lean team but deliver at the scale of a much larger organization. They wanted to architect a system of AI agents with specific capabilities to handle core business functions.",
    solution:
      "Contracted to design the overall system architecture and build out the agent team — defining which roles get automated, what each agent's capabilities and boundaries are, and how the human team interacts with the system. This is organizational design through an AI lens: figuring out what the org chart looks like when half the roles are agents.",
    outcome:
      "In progress. The goal is a business that runs with a small human team supported by purpose-built agents handling research, operations, and execution workflows.",
    technical: [
      "Agent role definition and capability scoping",
      "Workflow design for human-agent collaboration",
      "System architecture for multi-agent coordination",
    ],
  },
  {
    id: "real-estate-sourcing",
    number: "06",
    title: "Real Estate Investment Sourcing Tool",
    client: "Real estate portfolio owner",
    year: "2025",
    tags: ["Predictive Modeling", "Pattern Matching", "Internal Tool"],
    problem:
      "A portfolio owner with 50+ rental units needed a systematic way to identify new acquisition targets that match the patterns of their successful properties.",
    solution:
      "Building a purpose-built scoring tool — not a polished SaaS product, but a practical internal instrument that encodes the owner's investment logic. The system analyzes existing successful properties to build a scoring model, then scans available inventory to surface properties that match the established pattern.",
    outcome:
      "In development. The tool is designed to replace the manual process of scanning listings and running mental math — encoding decades of investment judgment into a repeatable, scannable system.",
    technical: [
      "Property scoring model based on existing portfolio analysis",
      "Automated inventory scanning and filtering",
      "Pattern matching against successful property characteristics",
    ],
  },
];

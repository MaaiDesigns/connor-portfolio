export type TimelineEntry = {
  period: string;
  label: string;
  description: string;
  isCurrent?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2021–2023",
    label: "AI Startup + Microsoft",
    description:
      "Product leadership at a venture-backed AI startup. Led a major project with Microsoft — translating customer requirements into technical strategy alongside the CTO, founder, designers, and senior advisors. Built the muscle for scoping complex systems and bridging business needs with engineering execution.",
  },
  {
    period: "2023–2024",
    label: "AI Consulting",
    description:
      "Applied AI strategy across small manufacturing, venture capital, and early-stage companies. Worked directly with founders and operators to identify where AI creates real operational leverage — and where it doesn't.",
  },
  {
    period: "2024",
    label: "Hands-On Building",
    description:
      "Added direct technical execution to the strategic foundation. Began building production software — client projects, internal tools, automation pipelines — using AI-assisted development environments.",
  },
  {
    period: "Late 2024",
    label: "Terminal-Based Development",
    description:
      "Shifted to terminal-based Claude Code workflows for more complex architectures. Faster iteration, better context management, and the ability to tackle multi-service system builds.",
  },
  {
    period: "2025",
    label: "Autonomous Agent Systems",
    description:
      "Designed and deployed autonomous agent pipelines via OpenClaw. The shift from interactive development to delegated execution — agents running research, content, and prospecting workflows with minimal oversight.",
  },
  {
    period: "2026",
    label: "MOCO Platform",
    description:
      "Full autonomous digital employee system on dedicated hardware. Model routing, skill libraries, multi-interface access, GitHub-synced deployment. One operator delivering what previously required a team.",
    isCurrent: true,
  },
];

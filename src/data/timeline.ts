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
      "Product leadership at a venture-backed AI startup in Cincinnati. Started in business development and partnerships, grew into Chief of Staff. Raised venture capital, built a partnership with Microsoft, became a Microsoft Co-Pilot partner, and presented at Microsoft Build. Managed development projects with Microsoft directly.",
  },
  {
    period: "2023–2024",
    label: "AI Consulting",
    description:
      "Applied AI strategy across venture capital firms, private equity firms, family offices, and small manufacturers. Built partnerships with V7 Labs, Emma Legal, and Quill Meetings. Worked with data partners including Crust Data. Architected AI systems and built tooling for operations, deal sourcing, and research.",
  },
  {
    period: "2024",
    label: "Hands-On Building",
    description:
      "Added direct technical execution to the strategic foundation. Began building production software — client projects, internal tools, automation pipelines — using AI-assisted development environments. The combination of systems-thinking background and hands-on building created a compounding advantage.",
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

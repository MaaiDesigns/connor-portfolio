export type TimelineEntry = {
  period: string;
  label: string;
  description: string;
  isCurrent?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2021–2023",
    label: "AI Product Design + Microsoft",
    description:
      "Product leadership at a venture-backed AI startup. Hands-on with UX/UI design, feature architecture, and engineering collaboration — not just strategy. Built a partnership with Microsoft, became a Microsoft Co-Pilot partner, and presented at Microsoft Build. Worked directly with Microsoft product managers on development projects. Learned how AI products get designed, scoped, and shipped.",
  },
  {
    period: "2023–2024",
    label: "AI Consulting",
    description:
      "Applied AI systems design across venture capital firms, private equity firms, family offices, and small manufacturers. Built internal tools, research pipelines, and deal sourcing systems. Focused on practical implementations — dashboards, agent workflows, and CRM integrations — not theoretical strategy decks.",
  },
  {
    period: "2024",
    label: "Hands-On Tool Building",
    description:
      "Added direct technical execution to the design foundation. Started building the tools myself — simple dashboards, data pipelines, agent orchestration — using AI-assisted development. The combination of process-design thinking and hands-on building meant I could go from whiteboard to working prototype without a development team.",
  },
  {
    period: "Late 2024",
    label: "Terminal-Based Development",
    description:
      "Shifted to terminal-based Claude Code workflows for more complex system architectures. Faster iteration, better context management, and the ability to build multi-component systems end-to-end.",
  },
  {
    period: "2025–Present",
    label: "Autonomous Agent Systems",
    description:
      "Designing and deploying autonomous agent platforms — systems that run research, content, prospecting, and operational workflows with minimal human oversight. Building my own business on this infrastructure while consulting with companies doing the same.",
    isCurrent: true,
  },
];

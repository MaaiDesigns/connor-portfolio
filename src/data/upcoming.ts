export type UpcomingProject = {
  title: string;
  description: string;
  tags: string[];
};

export const upcoming: UpcomingProject[] = [
  {
    title: "Franchise Site Selection Model",
    description:
      "A predictive model for a food franchise expansion from South Korea to the United States. The system simulates a base case from a successful Korean store location, then evaluates U.S. properties against that control — factoring in demographics, traffic patterns, competition density, and market characteristics.",
    tags: ["Predictive Modeling", "GIS", "Market Analysis"],
  },
  {
    title: "Rental Property Sourcing Tool",
    description:
      "An intelligent property identification system for a 50-unit portfolio owner. Analyzes existing successful properties to build a scoring model, then scans available inventory to surface acquisition targets that match the established pattern.",
    tags: ["Real Estate Analytics", "Pattern Matching", "Portfolio Analysis"],
  },
  {
    title: "Career Management Platform",
    description:
      "A career management tool in collaboration with an entrepreneur — helping professionals track, plan, and advance their careers with AI-assisted guidance.",
    tags: ["SaaS", "Career Development", "AI-Assisted"],
  },
];

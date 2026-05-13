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
];

export type VentureStatus = "Active" | "In development" | "Side project" | "Early stage";

export type Venture = {
  name: string;
  description: string;
  status: VentureStatus;
};

export const ventures: Venture[] = [
  {
    name: "Maai Designs",
    description:
      "AI-first digital marketing agency for small businesses. $300/month all-inclusive.",
    status: "Active",
  },
  {
    name: "MOCO",
    description:
      "Autonomous digital employee platform. Marketing, Operations, Content, Outreach.",
    status: "Active",
  },
  {
    name: "Maai Services",
    description:
      "AI architecture consulting. Helping companies plan and build their AI systems.",
    status: "Active",
  },
  {
    name: "Maai Machines",
    description:
      "Pre-configured Mac Minis and Mac Studios for AI development.",
    status: "Side project",
  },
  {
    name: "Franchise Site Selection",
    description:
      "Predictive location model for a food franchise expanding from South Korea to the US.",
    status: "In development",
  },
  {
    name: "Real Estate Sourcing",
    description:
      "Property identification and scoring tool for a 50-unit portfolio owner.",
    status: "In development",
  },
  {
    name: "Career Management Platform",
    description:
      "Career management tool in collaboration with an entrepreneur.",
    status: "Early stage",
  },
  {
    name: "Staffing & Recruiting Tool",
    description:
      "AI-assisted sourcing tool for a staffing and recruiting business.",
    status: "Early stage",
  },
];

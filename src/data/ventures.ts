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
      "AI systems design and consulting. Helping companies build practical AI tools and workflows.",
    status: "Active",
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
];

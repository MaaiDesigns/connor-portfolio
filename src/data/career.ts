export type CareerRole = {
  company: string;
  context: string;
  role: string;
  bullets: string[];
};

export const career: CareerRole[] = [
  {
    company: "Textron Aviation",
    context: "Fortune 100 Aircraft Manufacturer",
    role: "Sales Development Program → Business Jet Sales",
    bullets: [
      "Completed year-long sales development training program",
      "Sold Cessna Citations, Beechcraft King Airs, and Caravans in the field",
      "Built client-facing skills and technical communication in a complex-sale environment",
    ],
  },
  {
    company: "AI Startup, Cincinnati",
    context: "Venture-Backed AI Company",
    role: "Product Design & Partnerships → Chief of Staff",
    bullets: [
      "Led product design — UX/UI layouts, feature architecture, and engineering collaboration",
      "Built partnership with Microsoft — became a Microsoft Co-Pilot partner",
      "Presented at Microsoft Build",
      "Worked directly with Microsoft product managers on development projects",
      "Raised venture capital and built the company's investor network",
    ],
  },
  {
    company: "Independent AI Consulting",
    context: "AI Architecture & Strategy",
    role: "Principal",
    bullets: [
      "Worked with venture capital firms, private equity firms, and family offices",
      "Architected AI systems and built tooling for operations and research",
      "Built partnerships with V7 Labs, Emma Legal, Quill Meetings",
      "Worked with data partners including Crust Data",
      "Evaluated small manufacturing companies for AI integration",
      "Built prototypes: government RFP deal sourcing tool, manufacturing quoting system",
    ],
  },
  {
    company: "2555 Ventures LLC",
    context: "Maai Designs / MOCO / Maai Services / Maai Machines",
    role: "Founder",
    bullets: [
      "Founded and operate an AI-first digital marketing agency (Maai Designs)",
      "Architected MOCO — autonomous digital employee platform on dedicated hardware",
      "Launched Maai Services for AI systems design and consulting",
      "Built and deployed production websites for multiple clients",
      "Developing predictive models, sourcing tools, and autonomous agent systems",
    ],
  },
];

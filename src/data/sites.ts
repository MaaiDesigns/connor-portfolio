export type Site = {
  id: string;
  name: string;
  description: string;
  url: string;
  hostname: string;
  desktop: string;
  mobile: string;
  tags: string[];
};

export const sites: Site[] = [
  {
    id: "maai",
    name: "Maai Designs",
    description:
      "The agency homepage — a narrative-driven, 10-chapter scrolling experience built around the 'Classic Principles. Future Execution.' brand story. Space Grotesk typography, terracotta/copper accent palette, warm off-white backgrounds.",
    url: "https://maaidesigns.com",
    hostname: "maaidesigns.com",
    desktop: "/screenshots/maai-desktop.png",
    mobile: "/screenshots/maai-mobile.png",
    tags: ["Next.js", "Vercel", "Tailwind", "Framer Motion"],
  },
  {
    id: "bestcleaners",
    name: "Best Cleaners & Laundry",
    description:
      "A full-service cleaning business serving Savannah for 110+ years. Local SEO optimized, service-specific pages, booking flow, and mobile-first design. Generated a $40K Q1 YoY revenue increase — 33× ROI on $300/month.",
    url: "https://bestcleanerssavannah.com",
    hostname: "bestcleanerssavannah.com",
    desktop: "/screenshots/bestcleaners-desktop.png",
    mobile: "/screenshots/bestcleaners-mobile.png",
    tags: ["Next.js", "Vercel", "Local SEO", "Formspree"],
  },
  {
    id: "kgas",
    name: "Korean Golf Association of Savannah",
    description:
      "A community organization site with membership management, tournament registration, and event coordination. Custom Formspree integrations for multi-form workflows.",
    url: "https://savkga.com",
    hostname: "savkga.com",
    desktop: "/screenshots/kgas-desktop.png",
    mobile: "/screenshots/kgas-mobile.png",
    tags: ["Next.js", "Vercel", "Formspree", "Tailwind"],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  href?: string;
  image?: string;
}

export const experiences: Experience[] = [
  {
    company: "Manulife",
    role: "Software Engineer",
    period: "June 2025 — Present",
    description:
      "Shipping AI-powered products at Manulife, including a customer support research assistant and an agentic HR platform used company-wide. Also automating the CI/CD pipelines keeping them and other tools deployed.",
    tech: ["TypeScript", "Next.js", "Python", "LangChain", "FastAPI"],
    href: "https://www.manulife.com/ca/en/about-us/ai",
    image: "/images/manulife_financial_logo.jpg",
  },
  {
    company: "Manulife",
    role: "Software Engineer Intern",
    period: "May 2024 — Apr. 2025",
    description:
      "Built a client-requested investment visualizer and integrated financial APIs into portfolio management microservices. Helped secure a set of legacy apps against SQL injection and XSS.",
    tech: ["React", "Spring Boot", "Java"],
    href: "https://www.manulifeim.com/en",
    image: "/images/manulife_financial_logo.jpg",
  },
  {
    company: "RBC Borealis",
    role: "Software Engineer Intern",
    period: "Sept. 2023 — Apr. 2024",
    description:
      "Engineered a data dictionary tool for ingesting large volumes of datasets daily, and a reusable Angular component library for rendering relationship graphs across mainframe applications.",
    tech: ["Angular", "TypeScript", "Spring Boot", "Java"],
    href: "https://rbcborealis.com/",
    image: "/images/borealis_ai_logo.jpg",
  },
];

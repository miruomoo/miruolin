export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  tech: string[];
  href?: string;
}

export const experiences: Experience[] = [
  {
    company: "Manulife",
    role: "Software Engineer",
    period: "June 2025 — Present",
    location: "Toronto",
    description:
      "Shipping AI-powered products at Manulife, including a customer support research assistant and an internal HR chatbot used company-wide, alongside automating the CI/CD pipelines that keep them deployed.",
    tech: ["TypeScript", "Next.js", "Python", "LangChain", "FastAPI"],
    href: "https://www.manulife.com/ca/en/about-us/ai",
  },
  {
    company: "Manulife",
    role: "Software Engineer Intern",
    period: "May 2024 — Apr. 2025",
    location: "Toronto",
    description:
      "Built a client-requested investment visualizer, integrated financial APIs into portfolio management microservices, and helped secure a set of legacy apps against SQL injection and XSS.",
    tech: ["React", "Spring Boot", "Java"],
    href: "https://www.manulifeim.com/en",
  },
  {
    company: "RBC",
    role: "Software Engineer Intern",
    period: "Sept. 2023 —  Apr. 2024",
    location: "Toronto",
    description:
      "Engineered a data dictionary tool for ingesting large volumes of datasets daily, and a reusable Angular component library for rendering relationship graphs across mainframe applications.",
    tech: ["Angular", "TypeScript", "Spring Boot", "Java"],
    href: "https://www.rbc.com/our-impact/technology/index.html"
  },
];

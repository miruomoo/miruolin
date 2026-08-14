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
    location: "Toronto, ON",
    description:
      "Placeholder description. Led development of a customer-facing platform serving thousands of users. Built distributed backend services and shipped end-to-end features across the stack.",
    tech: ["TypeScript", "Next.js", "Python", "LangChain", "FastAPI"],
    href: "#",
  },
  {
    company: "Manulife",
    role: "Software Engineer Intern",
    period: "2022 — 2024",
    location: "Toronto, ON",
    description:
      "Placeholder description. Owned key features from design to deploy across a modern web application. Improved core performance metrics and mentored junior engineers on the team.",
    tech: ["React", "Spring Boot", "Java"],
    href: "#",
  },
  {
    company: "RBC",
    role: "Software Engineer Intern",
    period: "2020 — 2022",
    location: "Toronto, ON",
    description:
      "Placeholder description. Contributed to internal tooling and platform infrastructure. Automated deployment pipelines and built observability into critical services.",
    tech: ["Angular", "TypeScript", "Spring Boot", "Java"],
  },
];

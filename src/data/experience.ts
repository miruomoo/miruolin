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
    period: "2024 — Present",
    location: "Remote",
    description:
      "Placeholder description. Led development of a customer-facing platform serving thousands of users. Built distributed backend services and shipped end-to-end features across the stack.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "AWS"],
    href: "#",
  },
  {
    company: "Manulife",
    role: "Full-Stack Engineer",
    period: "2022 — 2024",
    location: "Toronto, ON",
    description:
      "Placeholder description. Owned key features from design to deploy across a modern web application. Improved core performance metrics and mentored junior engineers on the team.",
    tech: ["React", "Node.js", "GraphQL", "Kubernetes"],
    href: "#",
  },
  {
    company: "RBC",
    role: "Software Engineer",
    period: "2020 — 2022",
    location: "Waterloo, ON",
    description:
      "Placeholder description. Contributed to internal tooling and platform infrastructure. Automated deployment pipelines and built observability into critical services.",
    tech: ["Python", "Docker", "Terraform"],
  },
];

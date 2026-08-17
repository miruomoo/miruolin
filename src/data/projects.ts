export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "RBC TechPulse",
    tagline: "Capstone project commissioned by RBC",
    description:
      "A GenAI tool for researching technology trends, aggregating insights from various sources and providing actionable recommendations.",
    tech: ["TypeScript", "React", "Python", "OpenAI API"],
    // github: "https://github.com/miruomoo",
  },
  {
    name: "Course Outline Manager",
    tagline: "CRUD tool for Western's ECE department",
    description:
      "Web application allowing professors and teaching assistants to edit and manage course outlines more easily.",
    tech: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/miruomoo/Course-Outline-Manager",
    // live: "#",
  },
];

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
    name: "Placeholder One",
    tagline: "Real-time collaborative canvas",
    description:
      "A shared drawing app with cursor presence and undo across clients. Uses CRDTs for conflict-free concurrent editing.",
    tech: ["TypeScript", "WebSocket", "Yjs", "Canvas API"],
    github: "https://github.com/miruomoo",
  },
  {
    name: "Placeholder Two",
    tagline: "Terminal-first task tracker",
    description:
      "A minimal CLI for managing tasks entirely from the terminal. Local-first with optional sync to a self-hosted backend.",
    tech: ["Rust", "SQLite", "Ratatui"],
    github: "https://github.com/miruomoo",
    live: "#",
  },
  {
    name: "Placeholder Three",
    tagline: "Music production visualizer",
    description:
      "An audio-reactive visual companion for DAW sessions. Runs shader passes synced to the mixdown for rendering out music videos.",
    tech: ["WebGL", "Web Audio API", "React"],
    github: "https://github.com/miruomoo",
  },
  {
    name: "Placeholder Four",
    tagline: "Static site generator",
    description:
      "A tiny opinionated SSG that turns Markdown notes into an interlinked personal wiki. Ships fast, deploys anywhere.",
    tech: ["Go", "Markdown", "Templating"],
    github: "https://github.com/miruomoo",
  },
];

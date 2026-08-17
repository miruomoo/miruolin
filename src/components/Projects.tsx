import BorderGlow from "@/ui/BorderGlow";
import { projects } from "@/data/projects";

const MESH_COLORS = ["#ffffff", "#a3a3a3", "#525252"];

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 sm:py-20 overflow-x-clip">
      <p className="mb-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
        Projects
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <BorderGlow
            key={project.name}
            backgroundColor="var(--card-bg)"
            borderRadius={20}
            glowColor="0 0 70"
            colors={MESH_COLORS}
            edgeSensitivity={35}
            glowIntensity={0.9}
            glowRadius={32}
          >
            <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-normal text-fg">
                  {project.name}
                </h3>
                <p className="text-sm text-muted">{project.tagline}</p>
              </div>
              <p className="text-[0.95rem] leading-relaxed text-fg/80">
                {project.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[0.72rem] font-medium text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-2 text-[0.8rem] font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg transition-opacity hover:opacity-60"
                  >
                    GitHub ↗
                  </a>
                )}
                {!project.github && (
                  <p
                    className="text-muted"
                  >
                    Closed Source
                  </p>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition-opacity hover:opacity-70"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}

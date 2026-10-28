import { experiences } from "@/data/experience";

// basePath prefix required for GitHub Pages project deploy
const BASE = process.env.NODE_ENV === "production" ? "/miruolin" : "";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-14 sm:py-20">
      <h2 className="mb-8 text-base font-medium text-muted">
        Experience
      </h2>
      <ol className="flex flex-col divide-y divide-border">
        {experiences.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="py-6 first:pt-0">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-center gap-3">
                {entry.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${BASE}${entry.image}`}
                    alt=""
                    width={32}
                    height={32}
                    draggable={false}
                    className="h-8 w-8 shrink-0 select-none rounded-full border border-border object-cover"
                  />
                )}
                <div className="flex flex-col">
                  <h3 className="font-serif text-2xl font-normal leading-8 text-fg">
                    {entry.href ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block"
                      >
                        {entry.company}
                        <span
                          aria-hidden="true"
                          className="absolute bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                        />
                      </a>
                    ) : (
                      entry.company
                    )}
                  </h3>
                  <p className="text-sm text-muted">{entry.role}</p>
                </div>
              </div>
              <p className="whitespace-nowrap text-sm tabular-nums text-muted">
                {entry.period}
              </p>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-fg/80">
              {entry.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {entry.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 text-[0.72rem] font-medium text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

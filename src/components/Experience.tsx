import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 py-14 sm:py-20">
      <p className="mb-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
        Experience
      </p>
      <ol className="flex flex-col divide-y divide-border">
        {experiences.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="py-6 first:pt-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex flex-col gap-0.5">
                <h3 className="font-serif text-2xl font-normal text-fg">
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
              <p className="whitespace-nowrap text-sm text-muted sm:text-right">
                {entry.period}
                {entry.location && (
                  <>
                    <span className="mx-2 opacity-40">·</span>
                    {entry.location}
                  </>
                )}
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

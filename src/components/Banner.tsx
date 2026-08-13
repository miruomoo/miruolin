"use client";

import SpecularButton from "@/ui/SpecularButton";

const GITHUB_URL = "https://github.com/miruomoo";
const LINKEDIN_URL = "https://www.linkedin.com/in/miruo-lin/";

const NAME_WORDS = ["Miruo", "Lin"];

export function Banner() {
  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center px-6 py-20 sm:py-28"
    >
      <div className="flex flex-col items-center text-center">
        <p className="mb-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted animate-fade-up [animation-delay:0ms]">
          Full-Stack Software Engineer
        </p>

        <h1
          aria-label="Miruo Lin"
          className="flex flex-wrap items-baseline justify-center gap-x-4 font-serif text-[clamp(4rem,14vw,8rem)] font-light leading-[0.95] tracking-[-0.02em] text-fg"
        >
          {NAME_WORDS.map((word, i) => (
            <span
              key={word}
              className="inline-block animate-fade-up"
              style={{ animationDelay: `${120 + i * 140}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "440ms" }}
        >
          <SpecularButton
            size="md"
            radius={999}
            tint="#171717"
            tintOpacity={1}
            baseColor="#3a3a3a"
            lineColor="#ffffff"
            textColor="#f5f5f5"
            onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}
          >
            GitHub
          </SpecularButton>
          <SpecularButton
            size="md"
            radius={999}
            tint="#171717"
            tintOpacity={1}
            baseColor="#3a3a3a"
            lineColor="#ffffff"
            textColor="#f5f5f5"
            onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
          >
            LinkedIn
          </SpecularButton>
        </div>

        <p
          className="mt-12 max-w-xl text-balance text-base leading-relaxed text-muted animate-fade-up sm:text-lg"
          style={{ animationDelay: "560ms" }}
        >
          I build thoughtful products at the intersection of design and engineering.
          Currently interested in tools that make everyday software feel considered.
        </p>
      </div>
    </section>
  );
}

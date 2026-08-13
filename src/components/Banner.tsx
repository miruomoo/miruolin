"use client";

import { useTheme } from "next-themes";
import SpecularButton from "@/ui/SpecularButton";
import Grainient from "@/ui/Grainient";

const GITHUB_URL = "https://github.com/miruomoo";
const LINKEDIN_URL = "https://www.linkedin.com/in/miruo-lin/";

const NAME_WORDS = ["Miruo", "Lin"];

export function Banner() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Grainient
          color1={isLight ? "#1c1a16" : "#0c0c0c"}
          color2={isLight ? "#b87333" : "#7a7979"}
          color3={isLight ? "#f2ede5" : "#fcf9f9"}
          saturation={isLight ? 0.4 : 0}
          timeSpeed={0.25}
          warpSpeed={5}
          warpFrequency={5}
          warpStrength={1}
          warpAmplitude={50}
          rotationAmount={300}
          grainAmount={0.05}
          contrast={1.6}
          zoom={1.1}
        />
      </div>
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

        {/* <p
          className="mt-12 max-w-xl text-balance text-base leading-relaxed text-muted animate-fade-up sm:text-lg"
          style={{ animationDelay: "560ms" }}
        >
          
        </p> */}
      </div>
    </section>
  );
}

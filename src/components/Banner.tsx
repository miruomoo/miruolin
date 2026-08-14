"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import SpecularButton from "@/ui/SpecularButton";
import Grainient from "@/ui/Grainient";

const GITHUB_URL = "https://github.com/miruomoo";
const LINKEDIN_URL = "https://www.linkedin.com/in/miruo-lin/";
// reversed — decoded only at click time, never a plain address in the bundle
const EMAIL_R = "moc.liamg@1nilourim";

const NAME_WORDS = ["Miruo", "Lin"];

export function Banner() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = EMAIL_R.split("").reverse().join("");
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-20 sm:py-25"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Grainient
          color1={isLight ? "#4e493f" : "#0c0c0c"}
          color2={isLight ? "#af7b4b" : "#7a7979"}
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
          Software Engineer
        </p>

        <h1
          aria-label="Miruo Lin"
          className="flex flex-wrap items-baseline justify-center gap-x-4 font-serif text-[clamp(4rem,14vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-fg"
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

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy email address"
          className="group mt-10 inline-flex items-center gap-2 text-[0.85rem] text-muted transition-colors hover:text-fg animate-fade-up"
          style={{ animationDelay: "560ms" }}
        >
          Email: 
          <span className="relative">
            {"miruolin1 [at] gmail [dot] com"}
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
          </span>
          {copied ? <CheckIcon /> : <ClipboardIcon />}
        </button>

        {copied && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border/60 bg-surface px-4 py-1.5 text-[0.75rem] font-medium text-fg shadow-md animate-fade-up"
          >
            Email copied!
          </div>
        )}
      </div>
    </section>
  );
}

function ClipboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-accent" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

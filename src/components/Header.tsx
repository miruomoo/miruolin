"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-serif text-xl leading-none tracking-tight text-fg transition-opacity hover:opacity-70"
          aria-label="Miruo Lin — home"
        >
          ML
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-[0.8rem] font-medium text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

const CYCLE = { light: "dark", dark: "system", system: "light" } as const;
const NEXT_LABEL: Record<string, string> = { light: "Light", dark: "Dark", system: "System" };

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const current = (mounted ? (theme ?? "system") : "system") as keyof typeof CYCLE;
  const next = CYCLE[current];

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => setTheme(next)}
        aria-label={`Switch to ${NEXT_LABEL[next]} mode`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted transition-colors hover:border-border hover:text-fg"
      >
        <span className="sr-only">Toggle theme</span>
        {mounted ? (
          current === "system" ? <SystemIcon /> :
          resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />
        ) : <span className="h-4 w-4" />}
      </button>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded border border-border/60 bg-surface px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      >
        {NEXT_LABEL[next]}
      </span>
    </div>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

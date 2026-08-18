"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    Promise.all([
      document.fonts.ready,
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", resolve, { once: true });
      }),
    ]).then(() => {
      setLoaded(true);
      document.documentElement.classList.add("page-ready");
    });
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      onTransitionEnd={() => { if (loaded) setMounted(false); }}
      className={`fixed inset-0 z-[9999] bg-bg flex items-center justify-center pointer-events-none transition-opacity duration-200 ease-out ${
        loaded ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-fg/20 border-t-fg" />
    </div>
  );
}

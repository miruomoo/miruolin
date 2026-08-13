"use client";

import Stack from "@/ui/Stack";

const CARD_IMAGES = [
  { src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format", alt: "Landscape" },
  { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format", alt: "Forest" },
  { src: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", alt: "Mountain" },
  { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", alt: "Nature" },
];

export function About() {
  const cards = CARD_IMAGES.map(({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="pointer-events-none h-full w-full object-cover"
    />
  ));

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-14 sm:py-20"
    >
      <div className="mx-auto flex w-fit max-w-full flex-col items-start gap-8 sm:flex-row sm:items-start sm:gap-20">
        <div className="h-50 w-50 shrink-0 md:h-44 md:w-44">
          <Stack
            cards={cards}
            sensitivity={150}
            sendToBackOnClick
            animationConfig={{ stiffness: 260, damping: 20 }}
          />
        </div>
        <div className="max-w-xl">
          <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-fg/85 sm:text-lg">
            <p>
              I&rsquo;m a full-stack engineer who cares about how software feels to
              use. Most of my time is spent building products end-to-end: designing
              the interaction, writing the code, and shipping it.
            </p>
            <p>
              Outside of work, I&rsquo;m into music production, painting landscapes,
              JDM cars, and the films of Denis Villeneuve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

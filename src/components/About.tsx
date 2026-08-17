"use client";

import Stack from "@/ui/Stack";

const CARD_IMAGES = [
  { src: "/images/stack1.JPEG", alt: "Disney" },
  { src: "/images/stack2.JPEG", alt: "Toronto" },
  { src: "/images/stack3.JPEG", alt: "Ramen" },
  { src: "/images/stack4.JPEG", alt: "Yosemite" },
  { src: "/images/stack5.JPEG", alt: "Malibu" },
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
        <div className="h-40 w-40 shrink-0 md:h-50 md:w-50">
          <Stack
            cards={cards.reverse()}
            sensitivity={150}
            sendToBackOnClick
            animationConfig={{ stiffness: 260, damping: 20 }}
          />
        </div>
        <div className="max-w-xl">
          <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-fg/85 sm:text-md">
            <p>
              I&rsquo;m a full-stack engineer who obsesses over how software feels to use. Most of my time goes into building products end-to-end: designing interactions, shipping code, and refining based on user feedback.
            </p>
            <p>
              Outside of work, I&rsquo;m nerding out about video games, music production, JDM cars, or Denis Villeneuve movies :)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

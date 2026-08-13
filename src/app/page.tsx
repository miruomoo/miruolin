import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Banner />
        <section id="about" className="mx-auto w-full max-w-2xl scroll-mt-20 px-6 py-14 sm:py-20">
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
        </section>
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

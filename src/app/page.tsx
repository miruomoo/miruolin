import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Banner />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

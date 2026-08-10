import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Grain sits above the page but below content, so the texture carries
          past the hero instead of stopping at the fold. */}
      <div className="grain" aria-hidden="true" />


      <main id="main" className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

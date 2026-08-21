import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        {/* Work before biography — the proof is one scroll from the hero
            instead of four sections down. It is close enough that the hero no
            longer needs a button pointing at it, which is why its CTAs are the
            CV and the contact form. About/Skills/Experience then answer "who
            is this" for visitors the work already convinced. */}
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

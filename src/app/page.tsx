import Hero from "@/components/Hero";
import WordMarquee from "@/components/WordMarquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <WordMarquee />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

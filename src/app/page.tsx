import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Evolution from "@/components/Evolution";
import Projects from "@/components/Projects";
import WhatsNext from "@/components/WhatsNext";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Background />
        <Evolution />
        <Projects />
        <WhatsNext />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

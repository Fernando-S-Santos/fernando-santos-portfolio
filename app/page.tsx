import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Specialties from "../sections/Specialties";
import Projects from "../sections/Projects";
import Timeline from "../sections/Timeline";
import TechStack from "../sections/TechStack";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Specialties />
          <Projects />
          <Timeline />
          <TechStack />
          <Contact />
          <footer className="py-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} Desenvolvido por Fernando S. Santos. Todos os direitos reservados.
          </footer>
        </main>
    </>
  );
}

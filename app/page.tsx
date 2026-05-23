import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResumeButton from '@/components/ResumeButton';

export default function Home() {
  return (
    <main className="relative">
      <div id="hero">
        <Hero />
      </div>
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
      <ResumeButton />
    </main>
  );
}
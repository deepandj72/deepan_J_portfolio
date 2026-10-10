import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Education } from './sections/Education';
import { Leadership } from './sections/Leadership';
import { Contact } from './sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#F4F6FB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F3F4F6] selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Background ambient grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 -z-10" />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

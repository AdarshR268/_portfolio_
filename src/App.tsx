import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GridBackground } from './components/GridBackground';
import gsap from 'gsap';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Default to dark mode for a more premium initial look, or respect system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Sync theme state with html classList and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // GSAP animations on load completion
  useEffect(() => {
    if (!isLoading) {
      // Small reveal animation for page container
      gsap.fromTo(
        ".page-content-wrapper",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [isLoading]);

  return (
    <>
      {/* Cinematic Loading Screen overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {!isLoading && (
        <>
          {/* Interactive grid background */}
          <GridBackground />

          {/* Header Navigation floating pill */}
          <Navbar theme={theme} setTheme={setTheme} />

          <div className="page-content-wrapper min-h-screen flex flex-col justify-between selection:bg-text-primary/10 selection:text-text-primary">
            {/* Page Sections Layout */}
            <main className="flex-grow">
              {/* Section 2: Immersive Hero */}
              <Hero />

              {/* Section 3: Professional Profile Architecture (About) */}
              <About />

              {/* Section 4: Technical Arsenal Blueprint (Skills) */}
              <Skills />

              {/* Section 5: Engineering Works Catalog (Projects) */}
              <Projects />

              {/* Section 6: Academic Journey Timeline (Education) */}
              <Education />

              {/* Section 7: Direct Communications Portal (Contact) */}
              <Contact />
            </main>

            {/* Section 7: Footer Signature Node */}
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;

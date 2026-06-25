import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#about' }, // Education points to the timeline/highlights in About
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full border border-stroke bg-surface/70 backdrop-blur-md px-4 md:px-6 py-3 flex justify-between items-center transition-all duration-300 shadow-lg shadow-black/5 select-none">
      {/* Branding Left */}
      <a href="#" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-stroke bg-surface flex-shrink-0">
          <img
            src="/img/profile.jpg"
            alt="AR"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <span className="font-body font-extrabold text-lg md:text-xl tracking-tighter text-gradient">
          Adarsh R
        </span>
      </a>

      {/* Central Links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className="relative px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-text-primary/80 hover:text-text-primary transition-colors duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <motion.div
                layoutId="nav-hover-pill"
                className="absolute inset-0 bg-stroke/50 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Interactive Node */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="relative p-2 rounded-full border border-stroke bg-surface/80 text-text-primary hover:bg-stroke/30 transition-all duration-200 shadow-sm flex items-center justify-center overflow-hidden"
          aria-label="Toggle Theme"
        >
          <motion.div
            key={theme}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-text-primary" />
            ) : (
              <Sun className="w-4 h-4 text-text-primary" />
            )}
          </motion.div>
        </button>

        {/* CTA Button "Let's Talk" */}
        <a
          href="#contact"
          className="relative inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-text-primary text-bg hover:opacity-90 transition-all duration-200 shadow-sm"
        >
          <span>Let's Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
};

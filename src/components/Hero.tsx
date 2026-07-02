import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, ArrowRight } from 'lucide-react';

const roles = ["Scalable Web", "Robust Backend", "Elegant Frontend", "Data-Driven"];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState<number>(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-4 max-w-5xl mx-auto overflow-hidden">
      {/* Background glow animations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 accent-gradient rounded-full blur-[100px] opacity-10 md:opacity-20 -z-10 pointer-events-none" />

      {/* Profile Anchor Asset (High-fidelity Avatar) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8 group cursor-pointer"
      >
        {/* Glowing border ring */}
        <div className="absolute -inset-1.5 rounded-full accent-gradient opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-1000 group-hover:duration-200 animate-tilt" />
        
        {/* High-fidelity avatar graphic */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-surface bg-surface flex items-center justify-center shadow-2xl">
          <img
            src="/img/profile.jpg"
            alt="Adarsh R Avatar"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </motion.div>

      {/* Operational Status Indicator */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:border-emerald-500/20 dark:bg-emerald-500/10 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide shadow-sm mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        </span>
        <span>Available for new opportunities</span>
      </motion.div>

      {/* Main Core Heading */}
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 text-center leading-[1.1] font-body"
      >
        Crafting <span className="text-gradient">Digital Experiences</span>
      </motion.h1>

      {/* Core Dynamic Role String */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-base md:text-xl font-light text-muted text-center max-w-2xl leading-relaxed mb-10 h-16 md:h-12 flex flex-col md:flex-row justify-center items-center gap-1 font-body"
      >
        <span>Python Full Stack Developer specializing in building</span>
        <div className="h-8 md:h-full relative flex items-center justify-center overflow-hidden min-w-[150px] font-semibold text-text-primary">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute text-gradient"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <span>applications.</span>
      </motion.div>

      {/* Action Handles */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16 z-10 w-full justify-center px-4"
      >
        {/* View Projects CTA */}
        <a
          href="#projects"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-text-primary text-bg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg shadow-black/5"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* GitHub Profile Redirect */}
        <a
          href="https://github.com/adarshr268"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border border-stroke bg-surface hover:bg-stroke/30 text-text-primary transition-all duration-200 shadow-sm"
        >
          <Github className="w-4 h-4" />
          <span>GitHub Profile</span>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted cursor-pointer hover:text-text-primary transition-colors duration-200"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.2em] font-semibold uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

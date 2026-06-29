import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24 select-none">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stroke bg-surface/50 text-xs font-semibold text-muted uppercase tracking-widest">
          <GraduationCap className="w-3.5 h-3.5" />
          Education
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary font-body">
          Academic <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-muted max-w-lg font-light text-sm md:text-base font-body leading-relaxed">
          My educational timeline and certifications.
        </p>
      </div>

      {/* Timeline wrapper */}
      <div className="relative border-l border-stroke/60 max-w-2xl mx-auto pl-8 space-y-8 mt-12">
        {/* BCA Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <span className="absolute -left-[38px] top-1.5 flex h-4 w-4 items-center justify-center">
            <span className="h-3.5 w-3.5 rounded-full bg-[#A855F7] border border-bg shadow-sm" />
          </span>
          <div className="bg-surface/50 border border-stroke rounded-2xl p-6 md:p-8 shadow-sm backdrop-blur-md hover:border-text-primary/20 transition-all duration-300">
            <span className="text-xs font-bold tracking-wider text-[#A855F7] uppercase font-body">
              2021-2024
            </span>
            <h4 className="text-lg md:text-xl font-bold text-text-primary mt-1 font-body">
              Bachelor of Computer Applications
            </h4>
            <p className="text-sm md:text-base text-muted mt-1 font-body">
              Indira Gandhi National Open University (IGNOU)
            </p>
          </div>
        </motion.div>

        {/* Diploma Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <span className="absolute -left-[38px] top-1.5 flex h-4 w-4 items-center justify-center">
            <span className="h-3.5 w-3.5 rounded-full bg-[#06B6D4] border border-bg shadow-sm" />
          </span>
          <div className="bg-surface/50 border border-stroke rounded-2xl p-6 md:p-8 shadow-sm backdrop-blur-md hover:border-text-primary/20 transition-all duration-300">
            <span className="text-xs font-bold tracking-wider text-[#06B6D4] uppercase font-body">
              2013-2016
            </span>
            <h4 className="text-lg md:text-xl font-bold text-text-primary mt-1 font-body">
              Diploma in Hardware Maintenance
            </h4>
            <p className="text-sm md:text-base text-muted mt-1 font-body">
              Model Polytechnic College, Vadakara
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Settings } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Creative Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stroke bg-surface/50 text-xs font-semibold text-muted uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            Background
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-body">
            Behind the <span className="text-gradient">Code</span>
          </h2>
          
          <div className="space-y-4 text-base md:text-lg text-muted font-light leading-relaxed font-body">
            <p>
              I am a passionate Python Full Stack Developer Trainee with a solid technical foundation. My primary focus lies in creating scalable web systems, architecting robust backend components, and building elegant, fluid frontends.
            </p>
            <p>
              By leveraging modern web frameworks and designing clean, normalized database structures, I strive to build software that is highly maintainable, efficient, and capable of solving complex, real-world organizational challenges.
            </p>
            <p>
              Continuous learning is at the heart of my developer journey. Whether it's optimization of queries, streamlining state management, or refining user experiences, I focus on coding with precision and intention.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Modular Highlights Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: 5+ Projects Completed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-stroke bg-surface/50 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-text-primary/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 accent-gradient rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-stroke/30 text-text-primary flex items-center justify-center">
                <Settings className="w-6 h-6 animate-spin-slow text-gradient" style={{ animationDuration: '8s' }} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary font-body tracking-tight">
                  5+ Projects
                </h3>
                <p className="text-sm font-semibold tracking-wide text-muted font-body uppercase mt-1">
                  Completed & Deployed
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm md:text-base text-muted font-light leading-relaxed font-body">
              Engineered end-to-end full stack platforms featuring secure authorization layers, third-party API integrations, and database performance optimizations.
            </p>
          </motion.div>

          {/* Card 2: Full-Stack Competency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-stroke bg-surface/50 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-text-primary/20"
          >
            <div className="absolute top-0 right-0 w-24 h-24 accent-gradient rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
            <div className="p-3 rounded-lg bg-stroke/30 text-text-primary w-fit mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-text-primary font-body">
              Full-Stack Competency
            </h4>
            <p className="text-xs font-semibold text-muted font-body uppercase mt-1">
              DEVELOPMENT & TRAINING
            </p>
            <p className="mt-3 text-xs md:text-sm text-muted font-light leading-relaxed font-body">
              Proficient in modern web architectures, combining clean frontends with performant database structures and secure backends.
            </p>
          </motion.div>

          {/* Card 3: Engineered Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-stroke bg-surface/50 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-text-primary/20"
          >
            <div className="absolute top-0 right-0 w-24 h-24 accent-gradient rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
            <div className="p-3 rounded-lg bg-stroke/30 text-text-primary w-fit mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-text-primary font-body">
              Engineered Solutions
            </h4>
            <p className="text-xs font-semibold text-muted font-body uppercase mt-1">
              INTENTION & PRECISION
            </p>
            <p className="mt-3 text-xs md:text-sm text-muted font-light leading-relaxed font-body">
              Passionate about resolving real-world organizational challenges using scalable relational systems and streamlined API flows.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Laptop, Server, Database } from 'lucide-react';

interface SkillItem {
  name: string;
  iconClass: string; // FontAwesome or standard class name
  useLucide?: boolean;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: (
        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
          <Laptop className="w-5 h-5" />
        </div>
      ),
      skills: [
        { name: "HTML5", iconClass: "fab fa-html5 text-orange-500" },
        { name: "CSS3", iconClass: "fab fa-css3-alt text-blue-500" },
        { name: "JavaScript ES6+", iconClass: "fab fa-js text-yellow-500" },
        { name: "React JS", iconClass: "fab fa-react text-cyan-400 animate-spin-slow" },
        { name: "jQuery", iconClass: "fa-solid fa-code text-blue-400" },
        { name: "Bootstrap 5", iconClass: "fab fa-bootstrap text-purple-500" },
        { name: "Tailwind CSS", iconClass: "fa-solid fa-wind text-teal-400" },
      ]
    },
    {
      title: "Backend",
      icon: (
        <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
          <Server className="w-5 h-5" />
        </div>
      ),
      skills: [
        { name: "Python", iconClass: "fab fa-python text-yellow-400" },
        { name: "Django", iconClass: "fa-solid fa-code text-emerald-500" },
        { name: "RESTful APIs", iconClass: "fa-solid fa-cloud text-sky-400" },
        { name: "Git", iconClass: "fab fa-git-alt text-orange-500" },
        { name: "GitHub", iconClass: "fab fa-github text-text-primary" },
      ]
    },
    {
      title: "Database & Systems",
      icon: (
        <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
          <Database className="w-5 h-5" />
        </div>
      ),
      skills: [
        { name: "PostgreSQL", iconClass: "fa-solid fa-database text-blue-500" },
        { name: "MySQL", iconClass: "fa-solid fa-server text-blue-400" },
        { name: "MongoDB", iconClass: "fa-solid fa-leaf text-green-500" },
        { name: "SQLite", iconClass: "fa-solid fa-database text-sky-400" },
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24 select-none">
      
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary font-body">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-muted max-w-lg font-light text-sm md:text-base font-body leading-relaxed">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      {/* 3-Column Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="group relative flex flex-col rounded-2xl border border-stroke bg-surface/50 p-6 md:p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-text-primary/20"
          >
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-24 h-24 accent-gradient rounded-full blur-[40px] opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" />

            {/* Category Header */}
            <div className="flex items-center gap-3.5 mb-6">
              {category.icon}
              <h3 className="text-xl font-bold tracking-tight text-text-primary font-body">
                {category.title}
              </h3>
            </div>

            {/* Skills Tags List */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-stroke bg-surface/80 hover:bg-stroke/40 transition-colors duration-200"
                >
                  <i className={`${skill.iconClass} text-sm md:text-base w-4 text-center`} />
                  <span className="text-xs font-semibold text-text-primary font-body">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

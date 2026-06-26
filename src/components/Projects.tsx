import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Github, ArrowUpRight, BookOpen, ShoppingCart, ListTodo, Atom, Shield } from 'lucide-react';

interface Project {
  title: string;
  subtitle?: string;
  githubUrl: string;
  description: string;
  tags: string[];
  bannerClass: string;
  icon: React.ReactNode;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Library Management System",
      githubUrl: "https://github.com/AdarshR268/LIBRARY-MANAGEMENT-SYSTEM",
      description: "Developed a responsive library management web application featuring user authentication, book rental, overdue fine calculation, admin approval systems, and Razorpay payment integration.",
      tags: ["Django", "MySQL", "JavaScript"],
      bannerClass: "bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-b border-stroke/50",
      icon: <BookOpen className="w-12 h-12 text-indigo-400 opacity-80" />
    },
    {
      title: "Artkart Ecommerce",
      githubUrl: "https://github.com/AdarshR268/Artkart-Ecommerce",
      description: "Built a dynamic e-commerce platform for wall paintings with features like secure OTP login, product reviews, wishlist, advanced search/filters, and robust order tracking.",
      tags: ["Python", "PostgreSQL", "Bootstrap"],
      bannerClass: "bg-gradient-to-br from-teal-950/60 to-emerald-950/60 border-b border-stroke/50",
      icon: <ShoppingCart className="w-12 h-12 text-teal-400 opacity-80" />
    },
    {
      title: "Insurance CRM",
      subtitle: "A modern, premium CRM platform tailored for insurance agents to track campaigns, manage client leads, and streamline administrative workflows.",
      githubUrl: "https://github.com/AdarshR268/Insurance-CRM",
      description: "Developed a responsive, dual-role Customer Relationship Management (CRM) web application featuring secure administrator-agent segregation, automated credential generation, AJAX-powered validation, and a glassmorphic user interface.",
      tags: ["Django", "MySQL", "jQuery (AJAX)", "Bootstrap 4", "Vanilla CSS", "SMTP"],
      bannerClass: "bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-b border-stroke/50",
      icon: <Shield className="w-12 h-12 text-indigo-400 opacity-80" />
    },
    {
      title: "Task Management App",
      githubUrl: "https://github.com/AdarshR268/Task-Manager-Django",
      description: "A clean workflow solution focusing on task creation, prioritization states, and seamless status transitions, optimized with quick update modules.",
      tags: ["Django", "SQLite", "JavaScript"],
      bannerClass: "bg-gradient-to-br from-red-950/60 to-rose-950/60 border-b border-stroke/50",
      icon: <ListTodo className="w-12 h-12 text-rose-400 opacity-80" />
    },
    {
      title: "ReactJS Todo App",
      githubUrl: "https://github.com/AdarshR268/ToDo-List",
      description: "A decoupled client dashboard built with React state layers to support instant mutations to create, filter, edit, and complete tasks.",
      tags: ["ReactJS", "HTML5", "Tailwind CSS"],
      bannerClass: "bg-gradient-to-br from-blue-950/60 to-violet-950/60 border-b border-stroke/50",
      icon: <Atom className="w-12 h-12 text-blue-400 opacity-80" />
    }
  ];

  const getTagStyles = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('django') || lower.includes('python')) {
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    }
    if (lower.includes('mysql') || lower.includes('postgres') || lower.includes('postgresql')) {
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
    if (lower.includes('javascript') || lower.includes('js') || lower.includes('jquery')) {
      if (lower.includes('react')) return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    }
    if (lower.includes('bootstrap')) {
      return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    }
    if (lower.includes('sqlite')) {
      return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
    }
    if (lower.includes('tailwind')) {
      return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
    }
    if (lower.includes('html') || lower.includes('css')) {
      return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    }
    return 'bg-stroke/40 text-muted border-stroke/50';
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24 select-none">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary font-body">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted max-w-lg font-light text-sm md:text-base font-body mt-3 leading-relaxed">
            A selection of my recent work and technical achievements.
          </p>
        </div>
        <a
          href="https://github.com/adarshr268"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-gradient transition-all duration-200 flex-shrink-0"
        >
          <span>View all on GitHub</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* 2x2 Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stroke bg-surface/50 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-text-primary/20"
          >
            {/* Banner Block */}
            <div className={`h-48 w-full flex items-center justify-center relative overflow-hidden ${project.bannerClass}`}>
              <div className="absolute top-0 right-0 w-32 h-32 accent-gradient rounded-full blur-[60px] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none" />
              <div className="transition-transform duration-500 group-hover:scale-110">
                {project.icon}
              </div>
            </div>

            {/* Details Block */}
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-start mb-3.5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary font-body">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-text-primary/70 font-semibold mt-1 font-body leading-normal">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-stroke bg-surface hover:bg-stroke/50 text-muted hover:text-text-primary transition-all duration-200 flex-shrink-0 ml-4 mt-1"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm md:text-base text-muted font-light leading-relaxed mb-6 font-body">
                  {project.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full border text-xs font-semibold font-body transition-colors duration-200 ${getTagStyles(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

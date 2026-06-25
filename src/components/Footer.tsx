import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-stroke py-10 px-6 max-w-7xl mx-auto select-none mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Column: Branding and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-body font-extrabold text-lg text-text-primary tracking-tight">
            Adarsh R
          </span>
          <p className="text-xs text-muted font-body font-light">
            &copy; 2026 Adarsh R | All Rights Reserved
          </p>
        </div>

        {/* Right Column: Social Matrix handles */}
        <div className="flex items-center gap-4">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/adarsh--r--/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-stroke bg-surface hover:bg-stroke/40 text-muted hover:text-text-primary transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* GitHub Node */}
          <a
            href="https://github.com/adarshr268"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-stroke bg-surface hover:bg-stroke/40 text-muted hover:text-text-primary transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Email Hub */}
          <a
            href="mailto:adarshofficial268@gmail.com"
            className="p-3 rounded-xl border border-stroke bg-surface hover:bg-stroke/40 text-muted hover:text-text-primary transition-all duration-200"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* File Download Handle pointing locally to resume */}
          <a
            href="/img/resume.pdf"
            download="Adarsh_R_Resume.pdf"
            className="p-3 rounded-xl border border-stroke bg-surface hover:bg-stroke/40 text-muted hover:text-text-primary transition-all duration-200 flex items-center gap-1.5"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider font-body hidden sm:inline">Resume</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

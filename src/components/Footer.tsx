import React from 'react';
import { Code2, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-100">
          {/* Brand & Brief Description */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center gap-2 text-lg font-bold text-[#0f172a] hover:text-[#0284c7] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span>DevLaunch</span>
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              A modern, responsive landing page created for Internship Task 1 (Easy). Built with clean HTML5, CSS3, and JavaScript.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-sky-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  onClick={(e) => handleLinkClick(e, '#workflow')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Workflow
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, '#skills')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleLinkClick(e, '#features')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-sky-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Task Info */}
          <div className="md:col-span-3 space-y-2 text-xs text-slate-600">
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
              Project Details
            </p>
            <p className="text-slate-700 font-medium">Task 1 (Easy) – Responsive Landing Page</p>
            <p className="text-slate-500">Technologies: HTML5, CSS3, JavaScript</p>
            <p className="text-slate-500">Theme: Modern Light Blue & White</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DevLaunch. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

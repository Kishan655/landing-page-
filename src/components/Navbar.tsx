import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Skills', href: '#skills' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-xs py-3.5'
          : 'bg-white/70 backdrop-blur-xs border-b border-sky-100/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#0f172a] hover:text-[#0284c7] transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <span>DevLaunch</span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#0284c7] font-semibold'
                      : 'hover:text-[#0f172a]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284c7] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#workflow"
              onClick={(e) => handleLinkClick(e, '#workflow')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] active:scale-[0.98] rounded-lg transition-all shadow-xs hover:shadow-sky-200/50 whitespace-nowrap shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-sky-50 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white border-b border-sky-100 shadow-xl px-6 py-6 transition-all duration-200 ease-out animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold text-sky-600 tracking-wider uppercase mb-1">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-[#0284c7] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#workflow"
                onClick={(e) => handleLinkClick(e, '#workflow')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-lg transition-colors shadow-xs"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="text-center text-xs text-slate-400">
                Task 1 (Easy) · Responsive Web Development
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

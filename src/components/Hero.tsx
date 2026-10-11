import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_tech_interface_1791705263992.jpg';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-[#f8fbff] to-white"
    >
      {/* Subtle geometric background shapes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Soft geometric light blooms */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />

      {/* Floating subtle geometric shapes */}
      <div
        className="hidden lg:block absolute top-28 left-[10%] w-12 h-12 border-2 border-sky-300/40 rounded-xl rotate-12 animate-float-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute bottom-24 right-[8%] w-14 h-14 border border-sky-300/50 rounded-full animate-float-reverse pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Description, Buttons */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/60">
              <span className="w-2 h-2 rounded-full bg-sky-600" />
              <span>Web Development Internship</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-600 font-medium">Task 1: Responsive Landing Page</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] text-balance leading-[1.15]">
              Build Your <span className="text-[#0284c7]">Digital Future</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal text-balance">
              Learn modern web development by building responsive, interactive, and user-friendly websites.
            </p>

            {/* Call-to-action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo('#workflow')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-sky-500/15 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('#about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-sky-700 bg-white hover:bg-sky-50/60 border border-slate-200 hover:border-sky-300 active:scale-[0.98] rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Explore More</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick feature highlights */}
            <div className="pt-6 border-t border-sky-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>HTML5 & CSS3 Standard</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Mobile & Desktop Friendly</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Interactive JavaScript</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic Illustration */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft decorative shadow */}
              <div className="absolute -inset-3 bg-sky-200/40 rounded-3xl blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border border-sky-200/80 bg-white shadow-xl">
                <img
                  src={heroImage}
                  alt="Modern web development interface with responsive design illustration"
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

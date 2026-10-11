import React from 'react';
import { Smartphone, Check, Sparkles, Monitor, Zap } from 'lucide-react';
import mockupImage from '../assets/images/responsive_mockup_showcase_1791705282592.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Overview & Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            About the Project
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Learn why this internship project was built and understand the critical role responsive web design plays in today's digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-lg bg-white">
              <img
                src={mockupImage}
                alt="Responsive website preview on desktop, tablet, and mobile"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-sky-50/70 border-t border-sky-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-sky-900">Task 1 (Easy)</span>
                <span>Responsive Landing Page</span>
              </div>
            </div>
          </div>

          {/* Right Column: Explanations */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                Purpose of the Project
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                The main objective of this internship project is to build a solid foundation in modern frontend web development. By developing a complete landing page using HTML5, CSS3, and JavaScript, interns gain practical hands-on experience structuring web pages, writing clean CSS, and adding dynamic user interactions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                Why Responsive Web Design Matters
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                With more than half of all internet traffic coming from mobile devices, a website must look and work great regardless of the screen size. Responsive design guarantees readability, prevents broken layouts, and delivers an intuitive experience for every visitor.
              </p>

              {/* 4 Clean Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#f8fbff] border border-sky-100">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#0f172a] mb-1">
                    <Smartphone className="w-4 h-4 text-sky-600" />
                    <span>Works on Every Device</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automatically adjusts layouts for smartphones, tablets, laptops, and wide screens.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8fbff] border border-sky-100">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#0f172a] mb-1">
                    <Zap className="w-4 h-4 text-sky-600" />
                    <span>Fast & User Friendly</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Easy to navigate with comfortable tap targets and no cumbersome horizontal scrolling.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8fbff] border border-sky-100">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#0f172a] mb-1">
                    <Monitor className="w-4 h-4 text-sky-600" />
                    <span>Single Unified Codebase</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Maintains one clean codebase that serves all visitors instead of managing multiple sites.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8fbff] border border-sky-100">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#0f172a] mb-1">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                    <span>Better Search Visibility</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Search engines favor mobile-optimized websites with semantic HTML and clean styling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

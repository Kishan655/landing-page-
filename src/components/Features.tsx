import React from 'react';
import { FEATURES_DATA } from '../data/content';
import { Laptop, Menu, MousePointer, Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-sky-600" />;
      case 'Menu':
        return <Menu className="w-6 h-6 text-sky-600" />;
      case 'MousePointer':
        return <MousePointer className="w-6 h-6 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-sky-600" />;
      default:
        return <Laptop className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#f8fbff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Built-In Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Key Features
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Every component has been engineered to deliver a cohesive, user-friendly, and responsive web experience.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5">
                  {getFeatureIcon(feat.icon)}
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] mb-2.5">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-sky-700 font-semibold">
                <span>Fully Implemented</span>
                <span className="text-emerald-500">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

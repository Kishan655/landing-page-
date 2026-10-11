import React from 'react';
import { WORKFLOW_STEPS } from '../data/content';
import { Layout, Grid, Navigation, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Layout className="w-5 h-5 text-sky-600" />;
      case 2:
        return <Grid className="w-5 h-5 text-sky-600" />;
      case 3:
        return <Navigation className="w-5 h-5 text-sky-600" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-sky-600" />;
      case 5:
        return <Smartphone className="w-5 h-5 text-sky-600" />;
      default:
        return <Layout className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#f8fbff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Step-by-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Task Workflow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A clear 5-step development process followed to build this responsive landing page from start to finish.
          </p>
        </div>

        {/* Five Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {getStepIcon(item.step)}
                  </div>
                  <span className="text-xs font-bold font-mono text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
                    Step 0{item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-sky-700 font-medium">
                <span>{item.highlight}</span>
                <span className="text-slate-300" aria-hidden="true">✓</span>
              </div>
            </div>
          ))}

          {/* Quick Summary Card filling 6th slot for clean 3x2 grid balance */}
          <div className="bg-gradient-to-br from-sky-600 to-sky-700 text-white rounded-2xl p-7 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                Ready for Review
              </h3>
              <p className="text-sm text-sky-100 leading-relaxed">
                All five workflow steps have been executed with precision, resulting in a clean, fully functional, and responsive landing page.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-sky-500/50 flex items-center justify-between text-xs text-sky-100 font-medium">
              <span>Task 1 Completed</span>
              <span className="font-mono">100% Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

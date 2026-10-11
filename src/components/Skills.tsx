import React from 'react';
import { SKILLS_DATA } from '../data/content';
import { Code, Smartphone, FileCode, Layout, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const getSkillIcon = (icon: string) => {
    switch (icon) {
      case 'Code':
        return <Code className="w-6 h-6 text-sky-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-600" />;
      case 'FileCode':
        return <FileCode className="w-6 h-6 text-sky-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-sky-600" />;
      default:
        return <Code className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Core Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Skills You Will Learn
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Build competence across the foundational technologies and methodologies required for modern frontend engineering.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5">
                  {getSkillIcon(skill.icon)}
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] mb-2.5">
                  {skill.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {skill.description}
                </p>

                {/* Points */}
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  {skill.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education &amp; Scholastic Foundation"
          subtitle="A solid foundation in mathematical principles, computational logic, and engineering fundamentals."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel card-glow rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400">
                    {edu.id.includes('btech') ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <School className="w-6 h-6" />
                    )}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </p>
              </div>

              {/* Score Highlight Box */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                  {edu.scoreType}
                </span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-white bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-xl border border-indigo-200/60 dark:border-indigo-800/50">
                  {edu.scoreValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

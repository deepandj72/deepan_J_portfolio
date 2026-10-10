import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Users2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { leadershipData } from '../data/leadership';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="LEADERSHIP &amp; RESPONSIBILITIES"
          title="Extracurricular Leadership"
          subtitle="Contributing actively to student organizations, collaborative technology events, and community development."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item) => (
            <div
              key={item.id}
              className="glass-panel card-glow rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400">
                    {item.id.includes('rotaract') ? (
                      <HeartHandshake className="w-6 h-6" />
                    ) : (
                      <Users2 className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-800/50">
                      {item.role}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      {item.organization}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Elected Student Officer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

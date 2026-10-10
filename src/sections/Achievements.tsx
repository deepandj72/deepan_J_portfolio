import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Trophy, Award, Sparkles, Building, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'certification':
        return <Award className="w-6 h-6 text-indigo-500" />;
      case 'competition':
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
      default:
        return <Trophy className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACHIEVEMENTS &amp; CERTIFICATIONS"
          title="Milestones &amp; Competitive Recognitions"
          subtitle="Honors earned through competitive hackathons, national technical symposiums, and advanced professional specialization programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel card-glow rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60">
                    {getIcon(item.type)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mb-3">
                  <Building className="w-3.5 h-3.5" />
                  {item.organization}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Verified Credential
                </span>
                <span className="italic">Candidate Record</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

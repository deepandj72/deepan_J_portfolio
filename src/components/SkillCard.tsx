import React from 'react';
import { Terminal, BrainCircuit, Eye, Cpu, CheckCircle } from 'lucide-react';
import type { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Programming':
        return <Terminal className="w-5 h-5 text-indigo-500" />;
      case 'Generative AI':
        return <BrainCircuit className="w-5 h-5 text-violet-500" />;
      case 'Machine Learning & Computer Vision':
        return <Eye className="w-5 h-5 text-cyan-500" />;
      case 'Embedded & Application Development':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      default:
        return <Terminal className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="glass-panel card-glow rounded-3xl p-6 transition-all border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/50">
            {getCategoryIcon(category.category)}
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {category.category}
          </h3>
        </div>

        <div className="space-y-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 transition-colors hover:border-indigo-300 dark:hover:border-indigo-800"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-500" />
                  {skill.name}
                </span>
              </div>
              {skill.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 pl-5">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Target, GitMerge, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          title="Turning Curiosity Into Intelligent Systems"
          subtitle="Combining academic rigor with hands-on experimentation across Generative AI, computer vision, and embedded intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-4 h-4" />
                <span>Background &amp; Philosophy</span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                I'm a final-year B.Tech Artificial Intelligence and Data Science student at National Engineering College, Kovilpatti. My interests include Artificial Intelligence, Generative AI, LLMs, and Data Science.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Through my internship and academic projects, I've explored intelligent assistance systems, natural language processing, product review analysis, and embedded driver assistance solutions. I enjoy solving practical problems through structured thinking, experimentation, and software development.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Institution</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">NEC, Kovilpatti</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Degree</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">B.Tech AI &amp; DS</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">CGPA</span>
                <span className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">7.71</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Graduation</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">2027</span>
              </div>
            </div>
          </div>

          {/* Two Compact Strength Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Card 1: Problem Solving */}
            <div className="glass-panel card-glow rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Problem Solving
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                An analytical approach to understanding challenges and developing efficient solutions, breaking down multi-variable real-world conditions into actionable engineering models.
              </p>
            </div>

            {/* Card 2: Logical Thinking */}
            <div className="glass-panel card-glow rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200/60 dark:border-violet-800/50 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4">
                <GitMerge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Logical Thinking
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Structured reasoning, systematic debugging, and data-driven decision-making that ensures models, architectures, and algorithms are robust, verifiable, and explainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

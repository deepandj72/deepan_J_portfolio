import React from 'react';
import { ArrowRight, Mail, Award, Briefcase, GraduationCap, Terminal, Brain, Eye } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-cyan-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Introduction Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>AI &amp; DATA SCIENCE ENGINEER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>{' '}
              for Real-World Problems.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm Deepan J, an Artificial Intelligence and Data Science student passionate about Generative AI, LLMs, machine learning, and intelligent applications. I enjoy turning ideas into practical, data-driven solutions.
            </p>

            {/* Secondary line */}
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Exploring the intersection of AI, data, and software engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                id="hero-explore-work-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                id="hero-connect-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Compact Technology Pills */}
            <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/70">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5">
                Core Focus Areas
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">Python</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">Machine Learning</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">Generative AI</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">LLMs</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">Computer Vision</span>
              </div>
            </div>
          </div>

          {/* Right Column (Portrait + Orbital Tech Accents) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-84 md:w-92 aspect-square flex items-center justify-center">
              {/* Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-indigo-400/20 dark:border-indigo-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-violet-400/15 dark:border-violet-500/15 animate-reverse-spin-slow pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-500/20">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950 relative">
                  <img
                    src="/deepan-photo.png"
                    alt="Deepan J - AI and Data Science Engineer"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                    loading="eager"
                    onError={(e) => {
                      // Fallback placeholder if image fails to render
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Name badge inside photo card */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-white text-xs">
                    <div>
                      <p className="font-bold leading-tight">Deepan J</p>
                      <p className="text-[10px] text-slate-300">National Engineering College</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating Technology Badge 1: Python */}
              <div className="absolute -top-2 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl glass-panel shadow-lg border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 animate-bounce [animation-duration:5s]">
                <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                <span>Python</span>
              </div>

              {/* Floating Technology Badge 2: LLMs */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 px-3 py-1.5 rounded-xl glass-panel shadow-lg border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 animate-bounce [animation-duration:6s] [animation-delay:1s]">
                <Brain className="w-3.5 h-3.5 text-violet-500" />
                <span>LLMs</span>
              </div>

              {/* Floating Technology Badge 3: Computer Vision */}
              <div className="absolute -bottom-3 left-4 sm:left-6 px-3 py-1.5 rounded-xl glass-panel shadow-lg border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 animate-bounce [animation-duration:7s] [animation-delay:2s]">
                <Eye className="w-3.5 h-3.5 text-cyan-500" />
                <span>Computer Vision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Below Hero Highlights (3 Compact Cards) */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Academic Program</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">B.Tech AI &amp; Data Science</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Industry Experience</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Machine Learning Engineer Intern</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">National Recognition</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">AI Agentic Hackathon — Special Prize</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & info */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white font-['Outfit']">
              DEEPAN J
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
              AI Engineer
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            B.Tech Artificial Intelligence and Data Science · National Engineering College
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:deepandj72@gmail.com"
            id="footer-email-link"
            aria-label="Email Deepan J"
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepan-dj"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin-link"
            aria-label="LinkedIn profile of Deepan J"
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/deepandj72"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github-link"
            aria-label="GitHub profile of Deepan J"
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://skillrack.com/faces/candidate/manageprofile.xhtml"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-skillrack-link"
            aria-label="SkillRack profile of Deepan J"
            title="SkillRack Profile (Candidate Portal)"
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1"
          >
            <span className="text-[10px] font-bold font-mono">SR</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Deepan J. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

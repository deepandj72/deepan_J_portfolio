import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Mail, ExternalLink, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Have an Idea? Let's Build Something Intelligent."
          subtitle="I'm interested in AI, Generative AI, machine learning, and software development opportunities. Feel free to connect with me to discuss projects, internships, and collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Verified Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel card-glow rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Open for software engineering and AI internship discussions, project collaboration, or research opportunities.
                </p>
              </div>

              {/* Email item */}
              <a
                href="mailto:deepandj72@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 block">
                    Email
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                    deepandj72@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn item */}
              <a
                href="https://www.linkedin.com/in/deepan-dj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 block">
                    LinkedIn
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    linkedin.com/in/deepan-dj
                  </span>
                </div>
              </a>

              {/* GitHub item */}
              <a
                href="https://github.com/deepandj72"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 block">
                    GitHub
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    github.com/deepandj72
                  </span>
                </div>
              </a>

              {/* SkillRack item */}
              <a
                href="https://skillrack.com/faces/candidate/manageprofile.xhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 group-hover:scale-105 transition-transform flex items-center justify-center font-bold text-xs font-mono">
                  SR
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 block">
                    Skill Rack
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                    Candidate Profile Portal
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </span>
                </div>
              </a>

              {/* Location Note */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>Tamil Nadu, India · Open to Remote &amp; On-Site Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

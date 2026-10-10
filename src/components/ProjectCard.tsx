import React from 'react';
import { ArrowUpRight, Activity, Bot, Building2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  // Render technical schematic / concept visual according to project type
  const renderVisual = () => {
    if (project.visualType === 'hmi-dashboard') {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-slate-900 via-[#131b2e] to-slate-950 p-3 sm:p-4 rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 select-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Top Bar: Telemetry Status */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 font-mono">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ESP32 TELEMETRY ONLINE</span>
            </div>
            <span className="text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
              RISK INDEX: 0.78
            </span>
          </div>

          {/* Center Graphic: Inclined Road + Heavy Vehicle Concept Schematic */}
          <div className="relative z-10 flex items-center justify-center my-1">
            <svg viewBox="0 0 320 80" className="w-full max-w-[280px] h-16" fill="none">
              {/* Inclined Road Surface */}
              <line x1="10" y1="68" x2="310" y2="28" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
              <line x1="10" y1="74" x2="310" y2="34" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" />

              {/* Heavy Commercial Truck Schematic */}
              <g transform="translate(130, 24) rotate(-8)">
                <rect x="0" y="0" width="60" height="22" rx="3" fill="#6366F1" opacity="0.9" />
                <rect x="52" y="4" width="18" height="18" rx="2" fill="#818CF8" />
                {/* Wheels */}
                <circle cx="12" cy="24" r="5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
                <circle cx="26" cy="24" r="5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
                <circle cx="60" cy="24" r="5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
                {/* Weight force vector */}
                <path d="M30 10 L30 36 M26 31 L30 37 L34 31" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              </g>

              {/* Slope Angle Indicator */}
              <path d="M250 42 A 20 20 0 0 0 258 35" stroke="#F59E0B" strokeWidth="2" fill="none" />
              <text x="264" y="38" fill="#F59E0B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">+14.2°</text>
            </svg>
          </div>

          {/* Bottom HUD Metrics Bar */}
          <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[9px]">SLOPE GRADE</span>
              <span className="text-amber-400 font-bold text-xs">+14.2° (Steep)</span>
            </div>
            <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[9px]">SPEED / GEAR</span>
              <span className="text-cyan-400 font-bold text-xs">42 km/h · G2</span>
            </div>
            <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[9px]">GROSS LOAD</span>
              <span className="text-violet-400 font-bold text-xs">28.4 Tonnes</span>
            </div>
          </div>

          <div className="absolute bottom-1 right-2 text-[8px] text-slate-500 italic">
            *Conceptual Technical Visualization
          </div>
        </div>
      );
    }

    if (project.visualType === 'review-nlp') {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-slate-900 via-[#161f38] to-slate-950 p-4 rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 select-none">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />

          {/* Chat & NLP Header */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 font-mono">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60">
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              <span>SHOPWISE NLP ENGINE</span>
            </div>
            <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              94% POSITIVE CONSENSUS
            </span>
          </div>

          {/* Review Stream Simulated Pill */}
          <div className="relative z-10 space-y-2 my-1">
            <div className="bg-slate-800/90 p-2 rounded-xl border border-slate-700/70 text-xs text-slate-200 flex items-start gap-2 shadow-sm">
              <span className="text-indigo-400 font-bold text-[10px] mt-0.5 uppercase tracking-wide">Query</span>
              <span className="text-[11px] line-clamp-1">"Summarize 840 verified customer reviews for sound &amp; battery..."</span>
            </div>
            <div className="bg-indigo-950/60 p-2 rounded-xl border border-indigo-800/50 text-[11px] text-indigo-200 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Synthesized 3 core value drivers
              </span>
              <span className="text-[10px] text-indigo-300 font-mono">0.14s latency</span>
            </div>
          </div>

          {/* Sentiment Tokens */}
          <div className="relative z-10 flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
              + Sound Quality: 96%
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
              + Battery Life: 92%
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-amber-950/80 text-amber-300 border border-amber-800/50">
              ~ Case Bulk: 14%
            </span>
          </div>
        </div>
      );
    }

    // Edge AI Elderly Assistance
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-slate-900 via-[#18192b] to-slate-950 p-4 rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />

        {/* Vision Header */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 font-mono">
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>YOLOv10 + LSTM FEED</span>
          </div>
          <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            NORMAL GAIT DETECTED
          </span>
        </div>

        {/* Vision Detection Target Area */}
        <div className="relative z-10 my-1 bg-slate-950/70 rounded-xl border border-slate-800 p-2 flex items-center justify-around">
          <div className="relative border-2 border-dashed border-cyan-400/80 rounded-lg p-2 text-center bg-cyan-950/20">
            <span className="text-[10px] font-mono text-cyan-300 block">Person Tracked #01</span>
            <span className="text-[9px] text-emerald-400 font-bold">Confidence: 98.6%</span>
          </div>
          <div className="space-y-1 text-right font-mono text-[10px]">
            <div className="text-slate-300">Fall Risk: <span className="text-emerald-400 font-bold">NOMINAL</span></div>
            <div className="text-slate-300">Heart Rate: <span className="text-rose-400 font-bold">74 BPM</span></div>
            <div className="text-slate-300">GPS Sync: <span className="text-cyan-400 font-bold">LOCKED</span></div>
          </div>
        </div>

        {/* Edge Sensors Footer */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>ESP32 Edge Stream: 30 FPS</span>
          <span className="text-violet-400">Android Alert Service: Connected</span>
        </div>
      </div>
    );
  };

  return (
    <div className="glass-panel card-glow rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all group border border-slate-200/80 dark:border-slate-800/80">
      <div>
        {/* Render visual diagram */}
        <div className="mb-5 overflow-hidden rounded-2xl shadow-md">
          {renderVisual()}
        </div>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/50">
            {project.category}
          </span>
          {project.isExperienceLinked && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-800/50">
              <Building2 className="w-3 h-3" />
              Lyanaa AI
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          type="button"
          id={`view-project-${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/btn"
        >
          <span>View Project Details</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`github-link-${project.id}`}
            aria-label={`GitHub repository for ${project.title}`}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

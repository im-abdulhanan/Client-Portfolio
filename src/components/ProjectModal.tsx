import React, { useEffect } from 'react';
import { X, CheckCircle, Calendar, User, Building } from 'lucide-react';
import type { ProjectData } from './ProjectsStack';
import { WashiTape, StarDoodle } from './DoodleAssets';
import { WaylineMockup, TandemMockup, ForgeMockup, VoltMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const cs = project.detailedCaseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div
        className="relative z-10 my-8 w-full max-w-3xl overflow-hidden rounded-xl border-3 border-[var(--ca-ink)] bg-[var(--ca-surface)] shadow-[12px_12px_0px_#191510] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Top Bar */}
        <div
          className="flex items-center justify-between border-b-2 border-[var(--ca-ink)] px-6 py-4"
          style={{ backgroundColor: project.color, color: project.textColor.includes('white') ? '#ffffff' : '#191510' }}
        >
          <div className="flex items-center gap-2.5">
            <StarDoodle className="h-5 w-5 fill-current" />
            <span className="ca-mono text-sm font-bold uppercase tracking-widest">
              CASE STUDY // PROJECT {project.number}
            </span>
          </div>

          <button
            id="close-modal-btn"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[var(--ca-ink)] bg-white text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] transition-transform hover:scale-105 active:scale-95"
            aria-label="Close Case Study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="ca-grid max-h-[80vh] overflow-y-auto p-6 sm:p-10">
          
          {/* Header Metadata */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--ca-ink)] sm:text-5xl">
              {project.title}
            </h2>
            <p className="mt-2 text-xl font-medium text-[var(--ca-ink)]/80">
              {project.description}
            </p>
          </div>

          {/* Quick Meta Grid */}
          {cs && (
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border-2 border-[var(--ca-ink)] bg-white p-4 shadow-[3px_3px_0px_#191510] sm:grid-cols-3">
              <div>
                <div className="ca-mono flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--ca-ink)]/60">
                  <Building className="h-3.5 w-3.5" />
                  CLIENT
                </div>
                <div className="mt-1 font-bold text-[var(--ca-ink)]">{cs.client}</div>
              </div>
              <div>
                <div className="ca-mono flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--ca-ink)]/60">
                  <User className="h-3.5 w-3.5" />
                  ROLE
                </div>
                <div className="mt-1 font-bold text-[var(--ca-ink)]">{cs.role}</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="ca-mono flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--ca-ink)]/60">
                  <Calendar className="h-3.5 w-3.5" />
                  TIMELINE
                </div>
                <div className="mt-1 font-bold text-[var(--ca-ink)]">{cs.year} ({project.date})</div>
              </div>
            </div>
          )}

          {/* Large Hero Mockup */}
          <div className="relative mt-8 overflow-hidden rounded-md border-2 border-[var(--ca-ink)] shadow-[4px_4px_0px_#191510] h-64 sm:h-80">
            <WashiTape color="rgba(255, 255, 255, 0.75)" rotate="-rotate-12" width="w-20" height="h-6" className="-top-2 -left-2 z-10" />
            {project.id === 'wayline' && <WaylineMockup />}
            {project.id === 'tandem' && <TandemMockup />}
            {project.id === 'forge' && <ForgeMockup />}
            {project.id === 'volt' && <VoltMockup />}
          </div>

          {/* The Challenge & Solution */}
          {cs && (
            <div className="mt-10 space-y-8">
              <div>
                <h4 className="ca-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-blue)]">
                  THE CHALLENGE
                </h4>
                <p className="mt-2 text-base sm:text-lg leading-relaxed text-[var(--ca-ink)]">
                  {cs.problem}
                </p>
              </div>

              <div>
                <h4 className="ca-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-green)]">
                  DESIGN SOLUTION
                </h4>
                <p className="mt-2 text-base sm:text-lg leading-relaxed text-[var(--ca-ink)]">
                  {cs.solution}
                </p>
              </div>

              {/* Key Impact & Metrics */}
              <div className="rounded-lg border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow-soft)] p-6 shadow-[4px_4px_0px_#191510]">
                <h4 className="ca-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)]">
                  KEY RESULTS & IMPACT
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {cs.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-[var(--ca-ink)]">
                      <CheckCircle className="h-5 w-5 shrink-0 text-[var(--ca-green)] fill-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Tags */}
              <div>
                <h4 className="ca-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)]/70">
                  DELIVERABLES
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cs.deliverables.map((del) => (
                    <span
                      key={del}
                      className="ca-mono rounded-md border border-[var(--ca-ink)] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510]"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer Action */}
          <div className="mt-12 flex justify-end">
            <button
              onClick={onClose}
              className="ca-mono rounded-lg border-2 border-[var(--ca-ink)] bg-[var(--ca-ink)] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#191510] transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

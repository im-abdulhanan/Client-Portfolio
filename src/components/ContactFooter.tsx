import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight, Zap, Check } from 'lucide-react';
import { WashiTape, LinkedInIcon, DribbbleIcon, GitHubIcon, InstagramIcon } from './DoodleAssets';

interface ContactFooterProps {
  onNavigate: (sectionId: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const email = 'robin.vale.design@example.com';

  const handleDropLine = () => {
    // Fire festive celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f7c948', '#2b57d6', '#ff4d8d', '#16b06a', '#191510'],
    });

    navigator.clipboard.writeText(email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer id="contact" className="relative border-t-2 border-[var(--ca-grid-dot)] bg-[var(--ca-surface)] pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Massive Tilted Yellow Contact Card */}
        <div className="relative mx-auto max-w-4xl -rotate-1 transition-transform duration-300 hover:rotate-0">
          
          {/* Tilted Sticky Note on Top Left (Purple) */}
          <div className="absolute -top-12 -left-3 z-20 max-w-xs rotate-3 sm:-top-16 sm:-left-6">
            <div className="relative rounded-sm border-2 border-[var(--ca-ink)] bg-[var(--ca-cyan)] p-4 text-xs font-bold text-[var(--ca-ink)] shadow-[4px_4px_0px_#191510] sm:text-sm">
              <WashiTape color="rgba(255, 255, 255, 0.75)" rotate="-rotate-12" width="w-16" height="h-5" className="-top-2 left-4 z-10" />
              <p className="ca-mono leading-relaxed">
                Open to contract work, full-time roles, and interesting conversations about hard design problems.
              </p>
              <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[var(--ca-ink)] bg-white px-2.5 py-0.5 text-[11px]">
                <Zap className="h-3 w-3 fill-[var(--ca-yellow)] text-[var(--ca-ink)]" />
                <span>1 spot available</span>
              </div>
            </div>
          </div>

          {/* Main Yellow Post-it Container */}
          <div className="ca-doodle-box relative border-3 border-[var(--ca-ink)] bg-[var(--ca-yellow)] p-8 pt-20 pb-16 text-center shadow-[10px_10px_0px_#191510] sm:p-16 sm:pt-24">
            
            <span className="ca-hand block text-3xl font-bold tracking-wide text-[var(--ca-ink)] sm:text-4xl">
              let's make something together
            </span>

            <h2 className="ca-display mt-2 text-7xl uppercase tracking-wider text-[var(--ca-ink)] sm:text-9xl md:text-[11rem] leading-none select-none">
              CONTACT
            </h2>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                id="drop-a-line-btn"
                onClick={handleDropLine}
                className="ca-mono group inline-flex items-center gap-2 border-b-3 border-[var(--ca-ink)] pb-1 text-base font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] transition-all hover:gap-3 hover:border-black sm:text-lg"
              >
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD!' : 'DROP A LINE'}</span>
                {copied ? (
                  <Check className="h-5 w-5 text-[var(--ca-green)] stroke-[3]" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 stroke-[2.5]" />
                )}
              </button>

              <span className="ca-mono text-xs font-semibold text-[var(--ca-ink)]/70 sm:ml-4">
                ({email})
              </span>
            </div>

            <p className="ca-hand mt-8 text-xl font-bold text-[var(--ca-ink)]/80 sm:text-2xl">
              Got a project, a hard problem, or just want to say hi? Send it over. I read every message.
            </p>
          </div>
        </div>

        {/* Bottom Wordmark & Navigation Strip */}
        <div className="mt-28 border-t border-[var(--ca-ink)]/15 pt-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            
            {/* Left: Pixel Logo & Role */}
            <div>
              <h3 className="ca-display text-5xl uppercase tracking-wider text-[var(--ca-ink)] sm:text-7xl leading-none">
                ROBIN VALE
              </h3>
              <div className="ca-mono mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--ca-blue)]" />
                PRODUCT DESIGNER & CREATIVE ENGINEER
              </div>
            </div>

            {/* Right: Quick Links & Socials */}
            <div className="flex flex-col items-start gap-6 md:items-end">
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="ca-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--ca-ink)] hover:underline"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => onNavigate('projects')}
                  className="ca-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--ca-ink)] hover:underline"
                >
                  CASE STUDY
                </button>
                <button
                  onClick={() => onNavigate('playground')}
                  className="ca-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--ca-ink)] hover:underline"
                >
                  PLAYGROUND
                </button>
              </div>

              {/* Social Circles */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] transition-transform hover:-translate-y-1 hover:shadow-[3px_3px_0px_#191510]"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-pink)] text-white shadow-[2px_2px_0px_#191510] transition-transform hover:-translate-y-1 hover:shadow-[3px_3px_0px_#191510]"
                  aria-label="Dribbble Portfolio"
                >
                  <DribbbleIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-green)] text-white shadow-[2px_2px_0px_#191510] transition-transform hover:-translate-y-1 hover:shadow-[3px_3px_0px_#191510]"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-ink)] text-white shadow-[2px_2px_0px_#191510] transition-transform hover:-translate-y-1 hover:shadow-[3px_3px_0px_#191510]"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Copyright notice & badge */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--ca-ink)]/10 pt-6 text-xs text-[var(--ca-ink)]/60 sm:flex-row">
            <span className="ca-mono">© 2026 Robin Vale. Designed with creative flair.</span>
            <span className="ca-mono inline-flex items-center gap-1.5 rounded-full border border-[var(--ca-ink)]/20 bg-white px-3 py-1 text-[11px] font-bold text-[var(--ca-ink)] shadow-[1px_1px_0px_#191510]">
              ✦ Crafted with Vite + React + Tailwind
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

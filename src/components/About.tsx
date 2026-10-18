import React from 'react';
import { Sparkles, Palette, Puzzle, Eye } from 'lucide-react';
import { WashiTape } from './DoodleAssets';

export const About: React.FC = () => {
  const skills = [
    { name: 'Interaction Design', color: 'var(--ca-yellow)', icon: Sparkles, iconBg: 'var(--ca-yellow)' },
    { name: 'Prototyping', color: 'var(--ca-green)', icon: Palette, iconBg: 'var(--ca-green)' },
    { name: 'User Research', color: 'var(--ca-pink)', icon: Puzzle, iconBg: 'var(--ca-pink)' },
    { name: 'Motion Design', color: 'var(--ca-blue)', icon: Eye, iconBg: 'var(--ca-blue)', textColor: 'text-white' },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: "about me!" and "what's up" box */}
        <div className="mb-14 text-center">
          <span className="ca-hand block text-2xl font-bold tracking-wide text-[var(--ca-ink)] sm:text-3xl">
            about me!
          </span>
          <div className="mt-3 inline-block">
            <div className="ca-doodle-box inline-block border-2 border-[var(--ca-ink)] bg-white px-6 py-2 shadow-[3px_3px_0px_#191510]">
              <h3 className="ca-mono text-2xl font-bold tracking-tight text-[var(--ca-ink)] sm:text-3xl">
                what's up
              </h3>
            </div>
          </div>
        </div>

        {/* Scrapbook Grid: Polaroid Left, Bio Center, Polaroid Right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.8fr_1fr]">
          
          {/* Polaroid 1 (Left): Portrait */}
          <div className="mx-auto max-w-[280px] -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            <div className="relative border-2 border-[var(--ca-ink)] bg-white p-3.5 pb-8 shadow-[5px_5px_0px_#191510]">
              {/* Taped corners */}
              <WashiTape color="rgba(43, 87, 214, 0.6)" rotate="-rotate-45" width="w-16" height="h-6" className="-top-3 -left-4 z-10" />
              <WashiTape color="rgba(247, 201, 72, 0.65)" rotate="rotate-45" width="w-16" height="h-6" className="-top-3 -right-4 z-10" />
              
              <div className="aspect-[4/5] overflow-hidden border border-[var(--ca-ink)]/20 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=600&auto=format&fit=crop"
                  alt="Robin portrait"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="ca-hand mt-3 text-center text-xl font-bold text-[var(--ca-ink)]">
                2026
              </div>
            </div>
          </div>

          {/* Central Bio Statement */}
          <div className="px-2 text-center sm:px-6">
            <p className="ca-hand text-3xl leading-snug font-bold text-[var(--ca-ink)] sm:text-4xl md:text-5xl md:leading-normal">
              I'm a product designer who gets a little too excited about making complicated things feel simple.{' '}
              <span className="inline-flex align-middle mx-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] shadow-[2px_2px_0px_#191510] ca-wobble">
                  ✨
                </span>
              </span>{' '}
              I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier.{' '}
              <span className="inline-flex align-middle mx-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[var(--ca-ink)] bg-[var(--ca-green)] shadow-[2px_2px_0px_#191510] ca-wobble" style={{ animationDelay: '1.5s' }}>
                  🎨
                </span>
              </span>
            </p>
          </div>

          {/* Polaroid 2 (Right): Workspace */}
          <div className="mx-auto max-w-[280px] rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
            <div className="relative border-2 border-[var(--ca-ink)] bg-white p-3.5 pb-8 shadow-[5px_5px_0px_#191510]">
              {/* Taped corners */}
              <WashiTape color="rgba(43, 87, 214, 0.6)" rotate="-rotate-45" width="w-16" height="h-6" className="-top-3 -left-4 z-10" />
              <WashiTape color="rgba(247, 201, 72, 0.65)" rotate="rotate-45" width="w-16" height="h-6" className="-top-3 -right-4 z-10" />

              <div className="aspect-[3/4] overflow-hidden border border-[var(--ca-ink)]/20 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                  alt="Robin's creative workspace"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="ca-hand mt-3 text-center text-xl font-bold text-[var(--ca-ink)]">
                my workspace
              </div>
            </div>
          </div>

        </div>

        {/* Skill Badges Deck (Washi Tape Strips) */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex items-center transition-transform hover:-translate-y-1 hover:scale-105"
                style={{ transform: `rotate(${index % 2 === 0 ? '-1.5deg' : '1.5deg'})` }}
              >
                {/* Main Tape Pill */}
                <div
                  className={`ca-mono relative inline-flex items-center border-2 border-[var(--ca-ink)] px-5 py-2.5 text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191510] sm:text-base ${
                    skill.textColor || 'text-[var(--ca-ink)]'
                  }`}
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name}
                </div>

                {/* Companion Square Icon Badge */}
                <div
                  className="relative -ml-1.5 flex h-10 w-10 items-center justify-center border-2 border-[var(--ca-ink)] shadow-[3px_3px_0px_#191510] transition-transform group-hover:rotate-12"
                  style={{ backgroundColor: skill.iconBg }}
                >
                  <Icon className="h-5 w-5 text-[var(--ca-ink)]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { WavyUnderline } from './DoodleAssets';

interface Brand {
  name: string;
  tagline: string;
  bgColor: string;
  textColor: string;
  rotate: string;
}

export const TrustedBy: React.FC = () => {
  const brands: Brand[] = [
    { name: 'DJI', tagline: 'Aerial Robotics', bgColor: 'var(--ca-yellow-soft)', textColor: 'text-[var(--ca-ink)]', rotate: '-rotate-2' },
    { name: 'FORMULA 1', tagline: 'Motorsport Innovation', bgColor: 'var(--ca-mint)', textColor: 'text-[var(--ca-ink)]', rotate: 'rotate-1' },
    { name: 'KLOOK', tagline: 'Travel Experience', bgColor: 'var(--ca-cyan)', textColor: 'text-[var(--ca-ink)]', rotate: '-rotate-1' },
    { name: 'NIKE', tagline: 'Athletic Wear UI', bgColor: 'var(--ca-pink-soft)', textColor: 'text-[var(--ca-ink)]', rotate: 'rotate-2' },
    { name: 'HONDA', tagline: 'Mobility Labs', bgColor: 'var(--ca-yellow)', textColor: 'text-[var(--ca-ink)]', rotate: '-rotate-2' },
    { name: 'PORSCHE', tagline: 'Digital Cockpits', bgColor: 'var(--ca-mint)', textColor: 'text-[var(--ca-ink)]', rotate: 'rotate-1' },
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="inline-flex flex-col items-center">
          <span className="ca-hand text-3xl font-bold tracking-wide text-[var(--ca-ink)] sm:text-4xl">
            trusted by
          </span>
          <WavyUnderline className="w-20 text-[var(--ca-ink)] -mt-1 sm:w-24" />
        </div>

        {/* Taped Brand Badges Grid */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`group relative inline-flex items-center justify-center border-2 border-[var(--ca-ink)] px-6 py-3.5 shadow-[3px_3px_0px_#191510] transition-all hover:scale-105 hover:shadow-[5px_5px_0px_#191510] ${brand.rotate}`}
              style={{ backgroundColor: brand.bgColor }}
            >
              {/* Semi-transparent washi tape sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/20" />
              
              <div className="flex flex-col items-center">
                <span className="ca-display text-2xl font-black uppercase tracking-wider text-[var(--ca-ink)] sm:text-3xl">
                  {brand.name}
                </span>
                <span className="ca-mono -mt-1 text-[10px] font-bold uppercase tracking-widest text-[var(--ca-ink)]/75">
                  {brand.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Playful Peeking Smiley Mascot (from REA footer screenshot) */}
        <div className="relative mx-auto mt-20 max-w-xs">
          <div className="relative mx-auto h-40 w-40 sm:h-52 sm:w-52 overflow-visible">
            {/* Mascot Head */}
            <div className="absolute inset-x-0 bottom-0 h-40 w-40 sm:h-52 sm:w-52 rounded-full border-4 border-[var(--ca-ink)] bg-[var(--ca-yellow)] shadow-[6px_6px_0px_#191510]">
              
              {/* Eyes */}
              <div className="absolute top-12 left-10 h-7 w-4 sm:top-16 sm:left-14 sm:h-9 sm:w-5 rounded-full bg-[var(--ca-ink)]" />
              <div className="absolute top-12 right-10 h-7 w-4 sm:top-16 sm:right-14 sm:h-9 sm:w-5 rounded-full bg-[var(--ca-ink)]" />

              {/* Rosy Cheeks */}
              <div className="absolute top-18 left-7 h-5 w-7 sm:top-24 sm:left-10 sm:h-7 sm:w-9 rounded-full bg-[var(--ca-pink)] opacity-80" />
              <div className="absolute top-18 right-7 h-5 w-7 sm:top-24 sm:right-10 sm:h-7 sm:w-9 rounded-full bg-[var(--ca-pink)] opacity-80" />

              {/* Sweet Smile */}
              <svg viewBox="0 0 100 50" fill="none" className="absolute bottom-6 left-1/2 w-16 sm:w-20 -translate-x-1/2">
                <path d="M10 10 Q50 48 90 10" stroke="#191510" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Sparkles, Stamp, Trash2 } from 'lucide-react';
import { WavyUnderline, StarDoodle, FlowerSticker } from './DoodleAssets';

interface DroppedSticker {
  id: number;
  type: string;
  x: number;
  y: number;
  rotate: number;
  content: string;
  bg: string;
}

export const Playground: React.FC = () => {
  const [stickers, setStickers] = useState<DroppedSticker[]>([
    { id: 1, type: 'badge', x: 15, y: 35, rotate: -8, content: 'LO-FI SKETCH', bg: 'var(--ca-yellow)' },
    { id: 2, type: 'badge', x: 65, y: 25, rotate: 6, content: 'PIXEL PERFECT', bg: 'var(--ca-mint)' },
    { id: 3, type: 'badge', x: 40, y: 65, rotate: -4, content: 'SHIP IT FAST ⚡', bg: 'var(--ca-pink)' },
  ]);

  const stickerOptions = [
    { text: 'WORK IN PROGRESS', bg: 'var(--ca-yellow)' },
    { text: "CHEF'S KISS 🤌", bg: 'var(--ca-mint)' },
    { text: 'USER FIRST', bg: 'var(--ca-cyan)' },
    { text: '100% TESTED', bg: 'var(--ca-green)' },
    { text: 'STAY CURIOUS', bg: 'var(--ca-yellow-soft)' },
    { text: 'NO DEADLINES', bg: 'var(--ca-pink)' },
  ];

  const handleAddSticker = (option: { text: string; bg: string }) => {
    const newSticker: DroppedSticker = {
      id: Date.now(),
      type: 'badge',
      x: Math.floor(Math.random() * 70) + 10,
      y: Math.floor(Math.random() * 60) + 20,
      rotate: Math.floor(Math.random() * 24) - 12,
      content: option.text,
      bg: option.bg,
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const handleClear = () => {
    setStickers([]);
  };

  return (
    <section id="playground" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="ca-hand text-2xl font-bold tracking-wide text-[var(--ca-ink)] sm:text-3xl">
              creative canvas
            </span>
            <WavyUnderline className="w-24 text-[var(--ca-ink)] -mt-1 sm:w-28" />
          </div>

          <h2 className="ca-display mt-4 text-5xl uppercase tracking-wider text-[var(--ca-ink)] sm:text-7xl">
            THE PLAYGROUND
          </h2>

          <p className="ca-mono mx-auto mt-3 max-w-lg text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]/75 sm:text-sm">
            Tap stickers below to pin them onto the scrapbook canvas!
          </p>
        </div>

        {/* Sticker Selection Palette */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          {stickerOptions.map((opt, i) => (
            <button
              key={opt.text}
              id={`stamp-btn-${i}`}
              onClick={() => handleAddSticker(opt)}
              className="ca-mono group flex items-center gap-2 rounded-full border-2 border-[var(--ca-ink)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#191510] active:scale-95"
              style={{ backgroundColor: opt.bg }}
            >
              <Stamp className="h-3.5 w-3.5" />
              <span>{opt.text}</span>
            </button>
          ))}

          {stickers.length > 0 && (
            <button
              id="stamp-clear-btn"
              onClick={handleClear}
              className="ca-mono flex items-center gap-1.5 rounded-full border border-[var(--ca-ink)]/40 bg-white px-3 py-2 text-xs font-bold uppercase text-[var(--ca-ink)]/70 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="h-3 w-3" />
              Clear
            </button>
          )}
        </div>

        {/* Interactive Scrapbook Corkboard / Canvas */}
        <div className="relative mx-auto min-h-[380px] w-full max-w-4xl overflow-hidden rounded-xl border-3 border-[var(--ca-ink)] bg-white shadow-[8px_8px_0px_#191510] sm:min-h-[440px]">
          
          {/* Lined paper texture inside */}
          <div className="ca-grid absolute inset-0 opacity-80" />

          {/* Background decorative doodles */}
          <div className="pointer-events-none absolute top-8 left-8 opacity-25">
            <StarDoodle className="h-16 w-16 text-[var(--ca-blue)]" />
          </div>
          <div className="pointer-events-none absolute bottom-8 right-8 opacity-25">
            <FlowerSticker className="h-20 w-20 text-[var(--ca-pink)] ca-spin-slow" />
          </div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-10">
            <span className="ca-display text-8xl sm:text-9xl font-black">
              CANVAS
            </span>
          </div>

          {/* Rendered Pinned Stickers */}
          {stickers.map((stk) => (
            <div
              key={stk.id}
              className="absolute z-10 cursor-grab active:cursor-grabbing transition-transform hover:scale-110"
              style={{
                left: `${stk.x}%`,
                top: `${stk.y}%`,
                transform: `rotate(${stk.rotate}deg)`,
              }}
            >
              <div
                className="ca-mono inline-flex items-center gap-1.5 rounded-sm border-2 border-[var(--ca-ink)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[3px_3px_0px_#191510] sm:text-sm select-none"
                style={{ backgroundColor: stk.bg }}
              >
                <Sparkles className="h-3.5 w-3.5 fill-current" />
                {stk.content}
              </div>
            </div>
          ))}

          {stickers.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="ca-hand text-3xl font-bold text-[var(--ca-ink)]/40">
                canvas is clean — click a sticker above!
              </span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

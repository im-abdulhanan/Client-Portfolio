import React from 'react';
import { ArrowUpRight, ArrowUpLeft, WavyUnderline, FlowerSticker, TargetSticker } from './DoodleAssets';
import { ArrowUpRight as LucideArrow } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Floating Avatar 1 (Left) */}
        <div className="ca-wobble absolute -left-2 top-32 hidden sm:block md:left-6 lg:left-12">
          <div className="group relative">
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[var(--ca-orange)] bg-white shadow-[0_4px_12px_rgba(25,21,16,0.15)] transition-transform duration-300 group-hover:scale-110">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=400&auto=format&fit=crop"
                alt="Robin Vale Portrait"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <span className="ca-hand absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-0.5 text-xs font-bold text-[var(--ca-ink)] border border-[var(--ca-ink)] shadow-[1px_1px_0px_#191510]">
              hey!
            </span>
          </div>
        </div>

        {/* Floating Avatar 2 (Right) */}
        <div className="ca-wobble absolute -right-2 top-48 hidden sm:block md:right-6 lg:right-12" style={{ animationDelay: '1.2s' }}>
          <div className="group relative">
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[var(--ca-orange)] bg-white shadow-[0_4px_12px_rgba(25,21,16,0.15)] transition-transform duration-300 group-hover:scale-110">
              <img
                src="https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=400&auto=format&fit=crop"
                alt="Robin Vale at work"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <span className="ca-hand absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-0.5 text-xs font-bold text-[var(--ca-ink)] border border-[var(--ca-ink)] shadow-[1px_1px_0px_#191510]">
              designing ✨
            </span>
          </div>
        </div>

        {/* "my name is" handwritten label */}
        <div className="inline-flex flex-col items-center">
          <span className="ca-hand text-2xl font-bold tracking-wide text-[var(--ca-ink)] sm:text-3xl">
            my name is
          </span>
          <WavyUnderline className="w-20 text-[var(--ca-ink)] -mt-1 sm:w-24" />
        </div>

        {/* Hero Name Badge Box with Stickers */}
        <div className="relative mx-auto mt-6 max-w-xl">
          
          {/* Top Left Tape Sticker: "MADE THINGS" */}
          <div className="absolute -left-2 -top-5 z-20 -rotate-6 sm:-left-6 sm:-top-7">
            <div className="ca-mono relative inline-flex items-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] transition-transform hover:rotate-0 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ca-ink)] mr-1.5" />
              MADE THINGS
            </div>
          </div>

          {/* Top Right Tape Sticker: "SWEAT THE DETAILS" */}
          <div className="absolute -right-2 -top-5 z-20 rotate-6 sm:-right-6 sm:-top-7">
            <div className="ca-mono relative inline-flex items-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow-soft)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] transition-transform hover:rotate-0 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ca-ink)] mr-1.5" />
              SWEAT THE DETAILS
            </div>
          </div>

          {/* Central Doodle Outline Box */}
          <div className="ca-doodle-box relative border-3 border-[var(--ca-orange)] bg-white/40 px-6 py-6 shadow-[0_4px_16px_rgba(25,21,16,0.06)] sm:px-12 sm:py-8">
            <h1 className="ca-display text-7xl uppercase tracking-wider text-[var(--ca-ink)] sm:text-9xl md:text-[10.5rem] select-none leading-none">
              ROBIN
            </h1>
          </div>

          {/* Bottom Left Sticky Note: "Product Designer" + Arrow */}
          <div className="absolute -bottom-8 -left-3 z-20 -rotate-3 sm:-bottom-10 sm:-left-8">
            <div className="flex items-center gap-1.5">
              <div className="ca-hand rounded-sm border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-3 py-1 text-base font-bold text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] sm:text-lg">
                Product Designer
              </div>
              <ArrowUpRight className="h-7 w-7 text-[var(--ca-ink)] stroke-[var(--ca-ink)]" />
            </div>
          </div>

          {/* Bottom Right Sticky Note: "Chicago, IL" + Arrow */}
          <div className="absolute -bottom-8 -right-3 z-20 rotate-3 sm:-bottom-10 sm:-right-8">
            <div className="flex items-center gap-1.5">
              <ArrowUpLeft className="h-7 w-7 text-[var(--ca-ink)] stroke-[var(--ca-ink)]" />
              <div className="ca-hand rounded-sm border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] px-3 py-1 text-base font-bold text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] sm:text-lg">
                Chicago, IL
              </div>
            </div>
          </div>
        </div>

        {/* Monospace Status Pill below Hero */}
        <div className="mt-16 inline-flex items-center gap-2.5 rounded-full border border-[var(--ca-ink)]/15 bg-white/80 px-4 py-1.5 backdrop-blur-sm sm:mt-20">
          <span className="ca-blink h-2.5 w-2.5 rounded-full bg-[var(--ca-blue)]" />
          <span className="ca-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] sm:text-sm">
            OPEN TO NEW WORK AND GOOD PROBLEMS
          </span>
        </div>

        {/* Large Punchy Statement Headline */}
        <div className="mx-auto mt-12 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--ca-ink)] sm:text-5xl md:text-6xl sm:leading-tight">
            I design software that{' '}
            <span className="inline-block align-middle mx-1">
              <TargetSticker className="h-8 w-8 sm:h-12 sm:w-12 inline-block" />
            </span>{' '}
            gets out of your way.{' '}
            <span className="inline-block align-middle mx-1 ca-spin-slow">
              <FlowerSticker className="h-8 w-8 sm:h-12 sm:w-12 inline-block" />
            </span>
          </h2>
        </div>

        {/* Hero Call to Action Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onContactClick}
            className="group relative inline-flex items-center overflow-hidden rounded-md border-3 border-[var(--ca-ink)] bg-[var(--ca-ink)] text-white shadow-[4px_4px_0px_#191510] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#191510] active:translate-x-0.5 active:translate-y-0.5"
          >
            <span className="flex h-full items-center justify-center bg-[var(--ca-blue)] px-3.5 py-3.5 text-white transition-colors group-hover:bg-[var(--ca-yellow)] group-hover:text-[var(--ca-ink)]">
              <LucideArrow className="h-5 w-5" />
            </span>
            <span className="ca-mono px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em]">
              CONTACT ME
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

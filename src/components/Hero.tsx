import React from 'react';
import {
  DoubleWavyUnderline,
  SketchyOrangeBox,
  SelectionBoundingBox,
  ArrowUpRightSketch,
  ArrowUpLeftSketch,
  FlowerSticker,
  TargetSticker,
} from './DoodleAssets';

interface HeroProps {
  onContactClick?: () => void;
  name?: string;
}

export const Hero: React.FC<HeroProps> = ({ name = 'ROBIN' }) => {
  return (
    <section className="relative overflow-visible pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

        {/* Floating Avatar 1 (Left) - matching reference */}
        <div className="ca-wobble absolute left-2 top-28 hidden sm:block md:left-6 lg:left-10">
          <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[#ff5a27] bg-white shadow-[0_6px_16px_rgba(25,21,16,0.18)] transition-transform duration-300 hover:scale-105 sm:h-24 sm:w-24">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
              alt="Robin portrait"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Avatar 2 (Right) - matching reference */}
        <div
          className="ca-wobble absolute right-2 top-48 hidden sm:block md:right-6 lg:right-10"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[#ff5a27] bg-white shadow-[0_6px_16px_rgba(25,21,16,0.18)] transition-transform duration-300 hover:scale-105 sm:h-24 sm:w-24">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
              alt="Robin at work"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* "my name is" handwritten label */}
        <div className="inline-flex flex-col items-center select-none">
          <span className="ca-hand text-3xl font-medium tracking-normal text-[#191510] sm:text-4xl">
            my name is
          </span>
          <DoubleWavyUnderline className="w-20 -mt-1 sm:w-24 text-[#191510]" />
        </div>

        {/* Hero Name Badge Box with Stickers & Bounding Outline */}
        <div className="relative mx-auto mt-6 max-w-lg sm:max-w-xl">

          {/* Top Left Tape Sticker: "MADE THINGS" */}
          <div className="absolute -left-2 -top-5 z-20 -rotate-6 sm:-left-6 sm:-top-7">
            <div className="ca-mono inline-flex items-center rounded-full border border-[#191510]/15 bg-[#a2dcc1] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#191510] shadow-[0_2px_4px_rgba(25,21,16,0.08)] transition-transform hover:rotate-0 sm:text-sm">
              MADE THINGS
            </div>
          </div>

          {/* Top Right Tape Sticker: "SWEAT THE DETAILS" + Selection Bounding Box */}
          <div className="absolute -right-2 -top-6 z-20 sm:-right-8 sm:-top-8">
            <div className="relative">
              {/* Figma-style Selection Bounding Box with corner handles */}
              <SelectionBoundingBox className="absolute -left-3 -top-2.5 h-16 w-36 sm:h-20 sm:w-44" />

              <div className="ca-mono relative rotate-6 inline-flex items-center rounded-full border border-[#191510]/15 bg-[#fae8b4] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#191510] shadow-[0_2px_4px_rgba(25,21,16,0.08)] transition-transform hover:rotate-0 sm:text-sm">
                SWEAT THE DETAILS
              </div>
            </div>
          </div>

          {/* Central Sketch Outline Box with 8-bit Pixel Name */}
          <div className="relative px-8 py-5 sm:px-14 sm:py-7">
            {/* Hand-drawn sketchy orange outline */}
            <SketchyOrangeBox />

            <h1 className="ca-display text-7xl uppercase tracking-tight text-[#191510] select-none leading-none sm:text-9xl md:text-[9.5rem]">
              {name}
            </h1>
          </div>

          {/* Bottom Left Sticky Note: "Product Designer" + Sketch Arrow */}
          <div className="absolute -bottom-8 -left-3 z-20 -rotate-3 sm:-bottom-10 sm:-left-8">
            <div className="flex items-start gap-1">
              <div className="ca-hand rounded-sm border border-[#191510]/15 bg-[#ffd857] px-3.5 py-1 text-xl font-bold text-[#191510] shadow-sm sm:text-2xl">
                Product Designer
              </div>
              <ArrowUpRightSketch className="h-7 w-7 -mt-2 -ml-0.5 text-[#191510]" />
            </div>
          </div>

          {/* Bottom Right Sticky Note: "Chicago, IL" + Sketch Arrow */}
          <div className="absolute -bottom-8 -right-3 z-20 rotate-3 sm:-bottom-10 sm:-right-8">
            <div className="flex items-start gap-1">
              <ArrowUpLeftSketch className="h-7 w-7 -mt-2 -mr-0.5 text-[#191510]" />
              <div className="ca-hand rounded-sm border border-[#191510]/15 bg-[#b2e5cf] px-3.5 py-1 text-xl font-bold text-[#191510] shadow-sm sm:text-2xl">
                Chicago, IL
              </div>
            </div>
          </div>
        </div>

        {/* Monospace Status Line directly on lined paper */}
        <div className="mt-14 flex items-center justify-center gap-2.5 sm:mt-18">
          <span className="ca-blink h-2.5 w-2.5 rounded-full bg-[#2656d6]" />
          <span className="ca-mono text-xs font-bold uppercase tracking-[0.2em] text-[#191510] sm:text-sm">
            OPEN TO NEW WORK AND GOOD PROBLEMS
          </span>
        </div>

        {/* Large Punchy Statement Headline */}
        <div className="mx-auto mt-12 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#191510] sm:text-5xl md:text-6xl sm:leading-tight">
            I design software that{' '}
            <span className="inline-block align-middle mx-1 -mt-1.5">
              <TargetSticker className="h-9 w-9 sm:h-12 sm:w-12 inline-block" />
            </span>{' '}
            <br className="hidden sm:inline" />
            gets out of your way.{' '}
            <span className="inline-block align-middle mx-1 -mt-1.5 ca-spin-slow">
              <FlowerSticker className="h-9 w-9 sm:h-12 sm:w-12 inline-block" />
            </span>
          </h2>
        </div>

      </div>
    </section>
  );
};

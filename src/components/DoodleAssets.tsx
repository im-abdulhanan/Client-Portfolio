import React from 'react';

// Hand-drawn squiggle underline
export const WavyUnderline: React.FC<{ className?: string }> = ({ className = 'w-24 h-3' }) => (
  <svg viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M2 7C14 2 26 12 38 6C50 1 62 11 74 6C86 1 94 8 98 6"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Curved arrow pointing up-right
export const ArrowUpRight: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M8 32C14 22 24 14 34 8M34 8H20M34 8V22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Curved arrow pointing up-left
export const ArrowUpLeft: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 32C26 22 16 14 6 8M6 8H20M6 8V22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Hand-drawn starburst / 4-point star
export const StarDoodle: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C13 7 17 11 22 12C17 13 13 17 12 22C11 17 7 13 2 12C7 11 11 7 12 2Z" />
  </svg>
);

// Spinning 8-petal daisy flower sticker
export const FlowerSticker: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-[var(--ca-magenta)]' }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="14" fill="#191510" />
    <circle cx="50" cy="18" r="14" />
    <circle cx="50" cy="82" r="14" />
    <circle cx="18" cy="50" r="14" />
    <circle cx="82" cy="50" r="14" />
    <circle cx="27" cy="27" r="14" />
    <circle cx="73" cy="27" r="14" />
    <circle cx="27" cy="73" r="14" />
    <circle cx="73" cy="73" r="14" />
    <circle cx="50" cy="50" r="10" fill="#f7c948" />
  </svg>
);

// Target / Eyeball playful sticker
export const TargetSticker: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#16b06a" stroke="#191510" strokeWidth="6" />
    <circle cx="50" cy="50" r="28" fill="#ffffff" />
    <circle cx="50" cy="50" r="14" fill="#191510" />
  </svg>
);

// Washi Tape component with translucent angle and sheen
export const WashiTape: React.FC<{
  className?: string;
  color?: string;
  rotate?: string;
  width?: string;
  height?: string;
}> = ({
  className = '',
  color = 'rgba(255, 255, 255, 0.65)',
  rotate = '-rotate-6',
  width = 'w-24',
  height = 'h-7',
}) => (
  <div
    className={`ca-tape-strip ${width} ${height} ${rotate} ${className}`}
    style={{ backgroundColor: color }}
  />
);

// Social Brand Icons
export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const DribbbleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

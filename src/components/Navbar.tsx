import React, { useState } from 'react';
import { Star, User, LayoutGrid, Sparkles, Heart, Menu, X } from 'lucide-react';
import { LinkedInIcon, DribbbleIcon, GitHubIcon } from './DoodleAssets';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Star },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'projects', label: 'CASE STUDY', icon: LayoutGrid },
    { id: 'playground', label: 'PLAYGROUND', icon: Sparkles },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--ca-grid-dot)] bg-[var(--ca-surface)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Left: Brand Icon */}
        <button
          onClick={() => handleNavClick('home')}
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-pink)] shadow-[2px_2px_0px_#191510] transition-all hover:scale-105 hover:shadow-[3px_3px_0px_#191510] active:scale-95"
          aria-label="Home"
        >
          <span className="text-xl leading-none select-none">☺</span>
          {/* Tooltip badge */}
          <span className="ca-hand pointer-events-none absolute -bottom-8 left-0 hidden whitespace-nowrap rounded-md bg-[var(--ca-yellow)] px-2 py-0.5 text-sm font-bold text-[var(--ca-ink)] border border-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] group-hover:block">
            hello!
          </span>
        </button>

        {/* Center: Desktop Navigation Tabs */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`ca-mono relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-150 ${
                  isActive
                    ? 'border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510]'
                    : 'text-[var(--ca-ink)] hover:bg-[var(--ca-yellow-soft)]/60 hover:text-[var(--ca-ink)]'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'fill-current' : ''}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Socials & Contact Button */}
        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] shadow-[1.5px_1.5px_0px_#191510] transition-transform hover:-translate-y-0.5 hover:shadow-[2.5px_2.5px_0px_#191510]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-pink)] text-white shadow-[1.5px_1.5px_0px_#191510] transition-transform hover:-translate-y-0.5 hover:shadow-[2.5px_2.5px_0px_#191510]"
              aria-label="Dribbble"
            >
              <DribbbleIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-green)] text-white shadow-[1.5px_1.5px_0px_#191510] transition-transform hover:-translate-y-0.5 hover:shadow-[2.5px_2.5px_0px_#191510]"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="ca-mono inline-flex items-center gap-2 rounded-lg border-2 border-[var(--ca-ink)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510] transition-all hover:bg-[var(--ca-ink)] hover:text-white hover:shadow-[3px_3px_0px_#191510] active:translate-x-0.5 active:translate-y-0.5"
          >
            <Heart className="h-3.5 w-3.5 fill-[var(--ca-pink)] text-[var(--ca-pink)]" />
            CONTACT
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[var(--ca-ink)] bg-white shadow-[2px_2px_0px_#191510] md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`ca-mono flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wider ${
                    isActive
                      ? 'border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510]'
                      : 'border border-transparent bg-white/70 text-[var(--ca-ink)]'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('contact')}
              className="ca-mono mt-2 flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--ca-ink)] bg-[var(--ca-ink)] px-4 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[2px_2px_0px_#191510]"
            >
              <Heart className="h-4 w-4 fill-[var(--ca-pink)] text-[var(--ca-pink)]" />
              CONTACT ME
            </button>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] shadow-[2px_2px_0px_#191510]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ca-pink)] text-white shadow-[2px_2px_0px_#191510]"
              >
                <DribbbleIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-green)] text-white shadow-[2px_2px_0px_#191510]"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onOpenSection: (section: 'story' | 'jobs' | 'resume' | 'message') => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  onToggleMenu,
  onOpenSection
}) => {
  const navLinks = [
    { label: 'Story', section: 'story' as const },
    { label: 'Projects', section: 'jobs' as const },
    { label: 'Resume', section: 'resume' as const },
    { label: 'Message', section: 'message' as const }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: portfolioData.contact.linkedin },
    { label: 'GitHub', href: portfolioData.contact.github },
    { label: 'LeetCode', href: portfolioData.contact.leetcode }
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 text-cream pointer-events-auto">
      {/* Brand / Logo */}
      <div className="flex items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onOpenSection('story');
          }}
          className="anim-fade-up font-hn text-lg tracking-wide hover:opacity-70 transition-opacity duration-300"
          style={{ animationDelay: '800ms' }}
        >
          {portfolioData.shortName}
        </a>
      </div>

      {/* Desktop Cluster */}
      <div className="hidden sm:flex items-start gap-16 lg:gap-24">
        {/* Year */}
        <div
          className="anim-fade-up text-sm font-hn select-none text-cream"
          style={{ animationDelay: '900ms' }}
        >
          {portfolioData.year}
        </div>

        {/* Nav Column */}
        <nav className="flex flex-col gap-0.5 text-sm font-hn">
          {navLinks.map((item, i) => (
            <a
              key={item.label}
              href={`#${item.section}`}
              onClick={(e) => {
                e.preventDefault();
                onOpenSection(item.section);
              }}
              className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60 cursor-pointer"
              style={{ animationDelay: `${1000 + i * 80}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Column */}
        <div className="flex flex-col gap-0.5 text-sm font-hn">
          {socialLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
              style={{ animationDelay: `${1150 + i * 80}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={onToggleMenu}
        aria-label="Toggle Menu"
        className="sm:hidden anim-fade-up relative z-50 flex h-10 w-10 items-center justify-center p-2 text-cream focus:outline-none"
        style={{ animationDelay: '900ms' }}
      >
        <div className="relative flex h-4 w-6 flex-col justify-between">
          <span
            className={`h-[1.5px] w-full bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isMenuOpen ? 'translate-y-[7.25px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[1.5px] w-full bg-cream transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[1.5px] w-full bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isMenuOpen ? '-translate-y-[7.25px] -rotate-45' : ''
            }`}
          />
        </div>
      </button>
    </header>
  );
};

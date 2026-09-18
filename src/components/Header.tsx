import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onOpenSection: (section: 'story' | 'experience' | 'jobs' | 'resume' | 'message') => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  onToggleMenu,
  onOpenSection
}) => {
  const navLinks = [
    { label: 'Story', section: 'story' as const },
    { label: 'Experience', section: 'experience' as const },
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
    <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-7 pt-7 sm:px-10 sm:pt-8 text-cream pointer-events-auto">
      {/* Brand / Logo */}
      <div className="flex items-center">
        <a
          href="#story"
          onClick={(e) => {
            e.preventDefault();
            onOpenSection('story');
          }}
          aria-label="Muhammad Ahmad - Home"
          className="anim-fade-up font-hn text-lg tracking-wide hover:opacity-70 transition-opacity duration-300 whitespace-nowrap"
          style={{ animationDelay: '800ms' }}
        >
          {portfolioData.shortName}
        </a>
      </div>

      {/* Desktop Cluster */}
      <div className="hidden sm:flex items-start gap-16 lg:gap-24">
        {/* Nav Column */}
        <nav aria-label="Desktop Navigation" className="flex flex-col gap-0.5 text-sm font-hn">
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

      {/* Mobile Hamburger Button — ☰ when closed, × when open */}
      <button
        onClick={onToggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden anim-fade-up relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-cream/[0.08] border border-cream/20 hover:bg-cream/[0.14] active:scale-95 transition-all duration-300 text-cream focus:outline-none overflow-hidden"
        style={{ animationDelay: '900ms' }}
      >
        {/* ☰ — shown when closed */}
        <svg
          viewBox="0 0 20 14"
          fill="none"
          className={`absolute w-5 h-[14px] transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`}
          aria-hidden="true"
        >
          <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        {/* × — shown when open */}
        <svg
          viewBox="0 0 18 18"
          fill="none"
          className={`absolute w-[18px] h-[18px] transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
          }`}
          aria-hidden="true"
        >
          <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </header>
  );
};

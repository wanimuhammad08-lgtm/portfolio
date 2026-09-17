import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: 'story' | 'jobs' | 'resume' | 'message') => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection
}) => {
  // Lock document body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
    <div className="sm:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button — × icon matching hamburger style */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className={`absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-cream/[0.08] border border-cream/20 hover:bg-cream/[0.14] active:scale-95 text-cream transition-all duration-400 overflow-hidden focus:outline-none ${
            isOpen ? 'opacity-100 scale-100 delay-200' : 'opacity-0 scale-75'
          }`}
        >
          <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]" aria-hidden="true">
            <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Top: Site Index */}
        <div className="mt-12 flex flex-col">
          <span
            className={`text-xs uppercase tracking-[0.2em] text-cream/50 font-hn transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100 delay-250' : 'translate-y-4 opacity-0'
            }`}
          >
            Site Index
          </span>

          <nav aria-label="Mobile Navigation" className="mt-8 flex flex-col gap-6 font-hn">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={`#${link.section}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onSelectSection(link.section);
                }}
                className={`text-4xl text-cream font-light transition-all duration-500 hover:opacity-60 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${300 + idx * 80}ms` : '0ms'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom: Find Me */}
        <div className="mt-auto pt-10 flex flex-col">
          <span
            className={`text-xs uppercase tracking-[0.2em] text-cream/50 font-hn transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-4 opacity-0'
            }`}
          >
            Find Me
          </span>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-hn text-sm">
            {socialLinks.map((social, idx) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`text-cream transition-all duration-500 hover:opacity-60 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${550 + idx * 60}ms` : '0ms'
                }}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

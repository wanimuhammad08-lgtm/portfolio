import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div
      className="anim-fade-up absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden select-none pointer-events-none"
      style={{ animationDelay: '500ms' }}
    >
      <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream font-medium tracking-tight">
        {/* Track Half 1 */}
        <span className="inline-block pr-[6vw] flex-shrink-0">
          &mdash;&nbsp;Muhammad Ahmad&nbsp;
        </span>

        {/* Track Half 2 (Exact duplicate for seamless loop) */}
        <span className="inline-block pr-[6vw] flex-shrink-0" aria-hidden="true">
          &mdash;&nbsp;Muhammad Ahmad&nbsp;
        </span>
      </div>
    </div>
  );
};

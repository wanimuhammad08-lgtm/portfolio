import React, { useState } from 'react';
import { Header } from './components/Header';
import { Marquee } from './components/Marquee';
import { FrontPortrait } from './components/FrontPortrait';
import { CreamRule } from './components/CreamRule';
import { Footer } from './components/Footer';
import { MobileDrawer } from './components/MobileDrawer';
import { EditorialModal } from './components/EditorialModal';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'story' | 'jobs' | 'resume' | 'message' | null>(null);

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-black text-cream selection:bg-cream selection:text-black">
      {/* 1. LAYER DEFAULT (z-0): Full-bleed background image — local asset */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/bg.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle vignette gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* 2. LAYER z-10: Marquee scrolling name (-- Muhammad Ahmad --) */}
      <Marquee />

      {/* 3. LAYER z-10: Horizontal cream rule */}
      <CreamRule />

      {/* 4. LAYER z-20: Front portrait cutout overlay (above marquee, pointer-events none) */}
      <FrontPortrait />

      {/* 5. LAYER z-30 (sm:z-10): Desktop and mobile footer */}
      <Footer />

      {/* 6. LAYER z-30: Header navigation & brand chrome */}
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onOpenSection={(section) => setActiveSection(section)}
      />

      {/* 7. LAYER z-40: Mobile drawer */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSection={(section) => setActiveSection(section)}
      />

      {/* 8. LAYER z-40: Editorial Slide-out Modal for deep content exploration */}
      <EditorialModal
        isOpen={activeSection !== null}
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
        onSwitchSection={(section) => setActiveSection(section)}
      />
    </main>
  );
};

export default App;

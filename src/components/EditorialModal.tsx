import React from 'react';
import { X, ExternalLink, Download, Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface EditorialModalProps {
  isOpen: boolean;
  activeSection: 'story' | 'jobs' | 'resume' | 'message' | null;
  onClose: () => void;
  onSwitchSection: (section: 'story' | 'jobs' | 'resume' | 'message') => void;
}

export const EditorialModal: React.FC<EditorialModalProps> = ({
  isOpen,
  activeSection,
  onClose,
  onSwitchSection
}) => {
  if (!isOpen || !activeSection) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-8 md:p-12 animate-fadeIn">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Editorial Content Container */}
      <div className="relative z-50 w-full max-w-4xl max-h-[88vh] bg-[#111111] border border-cream/20 text-cream overflow-hidden flex flex-col shadow-2xl">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream/15 bg-[#141414]">
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-[0.25em] text-cream/50 font-hn">
              {portfolioData.name} &mdash; Archive
            </span>

            {/* Quick tab switcher */}
            <div className="hidden sm:flex items-center gap-4 text-xs tracking-wider uppercase font-hn">
              {(['story', 'jobs', 'resume', 'message'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => onSwitchSection(tab)}
                  className={`transition-colors duration-200 pb-0.5 border-b ${
                    activeSection === tab
                      ? 'border-cream text-cream font-medium'
                      : 'border-transparent text-cream/40 hover:text-cream/80'
                  }`}
                >
                  {tab === 'jobs' ? 'Projects' : tab}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-cream/70 hover:text-cream transition-colors duration-200 p-1"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 space-y-10 font-hn text-cream selection:bg-cream selection:text-black">
          {/* 1. STORY SECTION */}
          {activeSection === 'story' && (
            <div className="space-y-8 max-w-2xl">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-cream/50 block mb-2">
                  Biography & Perspective
                </span>
                <h2 className="text-3xl sm:text-4xl font-light leading-tight">
                  Bridging Data Intelligence & Interactive Craft.
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-cream/85 font-light">
                {portfolioData.bio}
              </p>

              <div className="pt-4 border-t border-cream/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-2">Location & Roots</h4>
                  <p className="text-sm font-light text-cream/90">{portfolioData.contact.homeTown}</p>
                  <p className="text-sm font-light text-cream/60">{portfolioData.contact.location}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-2">Specialization</h4>
                  <p className="text-sm font-light text-cream/90">AI, Data Science & Full-Stack Systems</p>
                  <p className="text-sm font-light text-cream/60">Python, SQL, Route Optimization, React</p>
                </div>
              </div>

              {/* Education Overview */}
              <div className="pt-6 border-t border-cream/15 space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50">Academic Trajectory</h4>
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-cream/10">
                    <div>
                      <div className="text-sm font-medium text-cream">{edu.degree}</div>
                      <div className="text-xs text-cream/60">{edu.institution} &bull; {edu.location}</div>
                    </div>
                    <div className="text-xs text-cream/50 font-mono mt-1 sm:mt-0 sm:text-right">
                      {edu.score} &bull; {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. JOBS / PROJECTS SECTION */}
          {activeSection === 'jobs' && (
            <div className="space-y-10">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-cream/50 block mb-2">
                  Engineering & Research Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-light">Featured Deployments</h2>
              </div>

              {/* Research Paper Feature */}
              <div className="p-6 border border-cream/20 bg-[#161616] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-cream/60">
                  <span className="uppercase tracking-widest text-cream/80 flex items-center gap-1.5">
                    <BookOpen size={14} /> Research Publication
                  </span>
                  <span>IEEE Submission 2025</span>
                </div>
                <h3 className="text-xl font-medium text-cream">
                  {portfolioData.publication.title}
                </h3>
                <p className="text-sm text-cream/75 leading-relaxed font-light">
                  {portfolioData.publication.summary}
                </p>
                <ul className="space-y-1.5 pt-2 text-xs text-cream/70 list-disc list-inside">
                  {portfolioData.publication.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Projects Grid */}
              <div className="space-y-8">
                {portfolioData.projects.map((proj, idx) => (
                  <div key={idx} className="border-t border-cream/15 pt-6 space-y-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-medium text-cream flex items-center gap-2">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-mono text-cream/50">
                        {proj.category} &bull; {proj.period}
                      </span>
                    </div>

                    <p className="text-sm text-cream/80 leading-relaxed font-light">
                      {proj.description}
                    </p>

                    <ul className="space-y-1.5 text-xs text-cream/70 list-disc list-inside font-light">
                      {proj.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[11px] font-mono border border-cream/20 text-cream/70 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. RESUME SECTION */}
          {activeSection === 'resume' && (
            <div className="space-y-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/50 block mb-2">
                    Curriculum Vitae
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-light">Professional Profile</h2>
                </div>

                {/* PDF Download Button */}
                <a
                  href="/resume.pdf"
                  download="Muhammad_Ahmad_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-cream text-cream text-xs uppercase tracking-widest hover:bg-cream hover:text-black transition-colors duration-300"
                >
                  <Download size={15} />
                  Download PDF
                </a>
              </div>

              {/* Skills Matrix */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-cream/50 border-b border-cream/15 pb-2">
                  Technical Core
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {portfolioData.skills.map((skillGroup, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-sm font-medium text-cream">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 text-xs font-mono bg-cream/10 text-cream/90 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4 pt-6 border-t border-cream/15">
                <h3 className="text-xs uppercase tracking-[0.2em] text-cream/50">
                  Professional Certifications
                </h3>
                <div className="space-y-2">
                  {portfolioData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-cream/80 font-light">
                      <Award size={16} className="text-cream/60 flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct PDF Embed / Preview */}
              <div className="pt-6 border-t border-cream/15 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-cream/50">
                    PDF Document Preview
                  </h3>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-cream/70 hover:text-cream flex items-center gap-1"
                  >
                    Open in new tab <ExternalLink size={12} />
                  </a>
                </div>
                <div className="w-full h-96 border border-cream/20 bg-black overflow-hidden">
                  <iframe
                    src="/resume.pdf#toolbar=0"
                    title="Resume PDF"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4. MESSAGE / CONTACT SECTION */}
          {activeSection === 'message' && (
            <div className="space-y-8 max-w-xl">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-cream/50 block mb-2">
                  Transmission
                </span>
                <h2 className="text-3xl sm:text-4xl font-light">Initiate Contact</h2>
              </div>

              <p className="text-sm text-cream/80 leading-relaxed font-light">
                Available for software engineering roles, machine learning research, and collaborative data-driven engineering projects.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center gap-4 p-4 border border-cream/15 hover:border-cream/50 transition-colors duration-200"
                >
                  <Mail size={18} className="text-cream/60" />
                  <div>
                    <div className="text-xs text-cream/50 uppercase tracking-wider">Direct Email</div>
                    <div className="text-sm font-mono text-cream">{portfolioData.contact.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 border border-cream/15 hover:border-cream/50 transition-colors duration-200"
                >
                  <Phone size={18} className="text-cream/60" />
                  <div>
                    <div className="text-xs text-cream/50 uppercase tracking-wider">Phone</div>
                    <div className="text-sm font-mono text-cream">{portfolioData.contact.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-cream/15">
                  <MapPin size={18} className="text-cream/60" />
                  <div>
                    <div className="text-xs text-cream/50 uppercase tracking-wider">Location</div>
                    <div className="text-sm font-light text-cream">
                      {portfolioData.contact.location} &bull; {portfolioData.contact.homeTown}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-cream/15 space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-cream/50 block">Digital Presence</span>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 border border-cream/20 text-cream hover:bg-cream hover:text-black transition-colors duration-200"
                  >
                    LinkedIn &rarr;
                  </a>
                  <a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 border border-cream/20 text-cream hover:bg-cream hover:text-black transition-colors duration-200"
                  >
                    GitHub &rarr;
                  </a>
                  <a
                    href={portfolioData.contact.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 border border-cream/20 text-cream hover:bg-cream hover:text-black transition-colors duration-200"
                  >
                    LeetCode &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

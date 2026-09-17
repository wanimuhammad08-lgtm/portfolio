import React from 'react';
import { X, ExternalLink, Download, Mail, Phone, MapPin, Award, BookOpen, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface EditorialModalProps {
  isOpen: boolean;
  activeSection: 'story' | 'experience' | 'jobs' | 'resume' | 'message' | null;
  onClose: () => void;
  onSwitchSection: (section: 'story' | 'experience' | 'jobs' | 'resume' | 'message') => void;
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
            <div className="hidden sm:flex items-center gap-4 text-xs tracking-wider font-hn">
              {([
                { id: 'story', label: 'Story' },
                { id: 'experience', label: 'Experience' },
                { id: 'jobs', label: 'Projects' },
                { id: 'resume', label: 'Resume' },
                { id: 'message', label: 'Message' }
              ] as const).map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => onSwitchSection(id)}
                  className={`transition-colors duration-200 pb-0.5 border-b ${
                    activeSection === id
                      ? 'border-cream text-cream font-medium'
                      : 'border-transparent text-cream/40 hover:text-cream/80'
                  }`}
                >
                  {label}
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

          {/* 2. EXPERIENCE SECTION */}
          {activeSection === 'experience' && (
            <div className="space-y-10">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-cream/50 block mb-2">
                  Work History & Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-light">Professional Experience</h2>
              </div>

              <div className="space-y-6">
                {portfolioData.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 border border-cream/20 bg-[#161616] space-y-4 hover:border-cream/40 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-cream/10 pb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <Briefcase size={18} className="text-cream/70 flex-shrink-0" />
                          <h3 className="text-xl font-medium text-cream">{exp.role}</h3>
                        </div>
                        <div className="text-sm text-cream/80 font-light mt-1 flex flex-wrap items-center gap-2">
                          <span className="text-cream font-normal">{exp.company}</span>
                          <span className="text-cream/40">&bull;</span>
                          <span className="px-2 py-0.5 text-[11px] font-mono border border-cream/20 text-cream/70 rounded">
                            {exp.type}
                          </span>
                          {exp.url && (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 ml-1 underline underline-offset-2"
                            >
                              Live Site <ExternalLink size={10} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-cream/60 font-mono sm:text-right">
                        <div>{exp.period}</div>
                        {exp.duration && <div className="text-cream/40">{exp.duration}</div>}
                      </div>
                    </div>

                    <ul className="space-y-2 text-sm text-cream/75 font-light leading-relaxed list-disc list-inside">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="marker:text-cream/40">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. JOBS / PROJECTS SECTION */}
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
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-medium text-cream flex items-center gap-2">
                          {proj.title}
                        </h3>
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 border border-cream/30 text-cream/90 hover:text-black hover:bg-cream text-xs font-mono uppercase tracking-wider rounded transition-all duration-200"
                          >
                            Live Site <ExternalLink size={12} />
                          </a>
                        )}
                        {proj.status && (
                          <span className="px-2 py-0.5 text-[10px] font-mono border border-emerald-500/30 text-emerald-400 bg-emerald-950/30 rounded">
                            {proj.status}
                          </span>
                        )}
                      </div>
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

          {/* 4. RESUME SECTION */}
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

              {/* Work Experience inside CV */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.2em] text-cream/50 border-b border-cream/15 pb-2">
                  Professional Experience
                </h3>
                <div className="space-y-4">
                  {portfolioData.experience.map((exp, idx) => (
                    <div key={idx} className="p-4 border border-cream/10 bg-cream/[0.02] space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium text-cream">{exp.role}</span>
                          <span className="text-cream/40">&bull;</span>
                          <span className="text-sm text-cream/80 font-light">{exp.company}</span>
                          <span className="px-1.5 py-0.5 text-[10px] font-mono border border-cream/20 text-cream/60 rounded">
                            {exp.type}
                          </span>
                          {exp.url && (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 hover:text-emerald-300 ml-1 underline underline-offset-2"
                            >
                              Live Site <ExternalLink size={9} />
                            </a>
                          )}
                        </div>
                        <div className="text-xs text-cream/50 font-mono">
                          {exp.period} {exp.duration ? `(${exp.duration})` : ''}
                        </div>
                      </div>
                      <ul className="text-xs text-cream/70 font-light space-y-1 list-disc list-inside pt-1">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="marker:text-cream/40">{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div className="space-y-6 pt-2 border-t border-cream/15">
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

              {/* Licenses & Certifications */}
              <div className="space-y-4 pt-6 border-t border-cream/15">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-cream/50">
                    Licenses & Certifications
                  </h3>
                  <span className="text-xs text-cream/40 font-mono">
                    {portfolioData.certifications.length} Verified
                  </span>
                </div>
                <div className="space-y-3">
                  {portfolioData.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 border border-cream/15 bg-[#161616] hover:border-cream/35 transition-all duration-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-start gap-3">
                          <Award size={18} className="text-cream/70 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-cream">{cert.title}</h4>
                            <div className="text-xs text-cream/70 font-light mt-0.5">
                              {cert.issuer} &bull; Issued {cert.issueDate}
                              {cert.expiryDate ? ` &bull; Expires ${cert.expiryDate}` : ''}
                            </div>
                            <div className="text-[11px] font-mono text-cream/50 mt-1">
                              Credential ID: {cert.credentialId}
                            </div>
                          </div>
                        </div>

                        {cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1.5 sm:pl-7">
                            <span className="text-[11px] text-cream/50 self-center mr-1">Skills:</span>
                            {cert.skills.map((s, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 text-[11px] font-mono bg-cream/10 text-cream/80 rounded"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-cream/30 text-cream/85 hover:text-cream hover:border-cream hover:bg-cream/10 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200 self-start flex-shrink-0"
                      >
                        Show credential <ExternalLink size={12} />
                      </a>
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
                <div className="w-full h-96 sm:h-[480px] border border-cream/20 bg-black overflow-hidden relative">
                  <object
                    data="/resume.pdf#toolbar=0&navpanes=0"
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <iframe
                      src="/resume.pdf#toolbar=0"
                      title="Resume PDF"
                      className="w-full h-full border-0"
                    >
                      <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-3 bg-cream/5">
                        <p className="text-sm text-cream/70">
                          Inline PDF preview is not supported on this browser or device.
                        </p>
                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-cream/40 text-xs uppercase tracking-wider text-cream hover:bg-cream hover:text-black transition-colors"
                        >
                          <ExternalLink size={14} /> Open Resume PDF
                        </a>
                      </div>
                    </iframe>
                  </object>
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

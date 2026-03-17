import { useState, useEffect, useRef } from 'react';
import './index.css';

/* ─── Icons ─── */
const GithubIcon = ({ s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>;
const LinkedinIcon = ({ s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
const XIcon = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const EmailIcon = ({ s = 17 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m2 7 10 6.5L22 7" /></svg>;
const AppleIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>;
const PlayIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.93-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.67.5-1.6.03-1.6-.8z" /></svg>;
const GlobeIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
const MenuIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>;
const CloseIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
const SunIcon = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const MoonIcon = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;

/* ─── Data ─── */
const NAV = [
  { label: 'About', id: 'about' },
  { label: 'Work Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
];

const SKILLS = [
  ['📱', 'React Native'], ['🔷', 'TypeScript'], ['⚡', 'Redux'], ['🔥', 'Firebase'],
  ['🔗', 'REST APIs'], ['💰', 'RevenueCat'], ['🔔', 'Push Notifications'],
  ['▶️', 'Play Store'], ['🍎', 'App Store'], ['🟨', 'JavaScript'], ['⚛️', 'React.js'], ['🌿', 'Git'],
];

const EXPERIENCE = [{
  period: 'Sept 2023\n– Present',
  role: 'React Native Developer',
  company: 'SilverSky Technology',
  desc: 'Building cross-platform mobile applications for Android & iOS used by real users in production.',
  bullets: [
    'Developed cross-platform mobile apps using React Native for Android and iOS',
    'Implemented complex UI animations and user-facing product features',
    'Integrated REST APIs and third-party SDKs into mobile applications',
    'Built push notification systems and real-time features using Firebase',
    'Implemented in-app subscription flows using RevenueCat with full App Store & Play Store integration',
    'Managed production releases, code signing, and app store submissions',
  ],
  tags: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'RevenueCat', 'REST APIs'],
}];

// Add screenshots arrays — replace placeholder strings with real image paths once available
const PROJECTS = [
  {
    id: 1, name: 'FamilyFeed', tagline: 'Smart Family Organizer',
    desc: 'Collaborative family management app for tasks, groceries, appointments, and events with smart AI bots.',
    features: ['Shared lists, tasks & events', 'Calendar & appointment management', 'Smart bots — GroceryBot, HealthBot', 'Real-time sync via Firebase'],
    tech: ['React Native', 'Firebase', 'REST APIs'],
    type: 'Mobile App',
    emoji: '👨‍👩‍👧‍👦',
    // coverImage: '/images/familyfeed-cover.png',      ← replace with actual path
    // screenshots: ['/images/ff-1.png', '/images/ff-2.png', '/images/ff-3.png'],
    coverImage: null, screenshots: [],
    appStore: '#', playStore: '#',
  },
  {
    id: 2, name: 'Tydlig', tagline: 'School Management System',
    desc: 'Multi-role school management system for coordinators, teachers, and admins with real-time messaging.',
    features: ['Coordinator & admin dashboard', 'Teacher leave management', 'Schedule management', 'Real-time messaging via FCM'],
    tech: ['React Native', 'Firebase', 'API Integration'],
    type: 'Mobile App', emoji: '🏫',
    coverImage: null, screenshots: [],
    appStore: '#', playStore: '#',
  },
  {
    id: 3, name: 'Sunrise', tagline: 'Morning Routine Tracker',
    desc: 'Habit-building app for consistent morning routines with streaks, reminders, and social sharing.',
    features: ['Habit tracking with streaks', 'Push notification reminders', 'Achievement sharing', 'Progress charts'],
    tech: ['React Native', 'Push Notifications', 'REST APIs'],
    type: 'Mobile App', emoji: '🌅',
    coverImage: null, screenshots: [],
    appStore: '#', playStore: '#',
  },
  {
    id: 4, name: 'EaziQuote', tagline: 'Quote & Invoice Management',
    desc: 'Quoting and invoicing app for tradespeople with premium subscriptions via RevenueCat.',
    features: ['Quote and invoice creation', 'Job tracking dashboard', 'Premium tier via RevenueCat', 'Published on App Store & Play Store'],
    tech: ['React Native', 'RevenueCat', 'TypeScript'],
    type: 'Mobile App', emoji: '📋',
    coverImage: null, screenshots: [],
    appStore: '#', playStore: '#',
  },
  {
    id: 5, name: 'Tuck', tagline: 'B2B Gift Card Platform',
    desc: 'B2B platform for companies to offer discounted gift cards via custom employee portals. 150+ providers.',
    features: ['Admin dashboard', 'Custom branded portals', 'Employee gift card marketplace', '150+ gift card providers'],
    tech: ['React', 'TypeScript', 'REST APIs'],
    type: 'Web App', emoji: '🎁',
    coverImage: null, screenshots: [],
    liveUrl: '#', githubUrl: '#',
  },
];

const OTHER_PROJECTS = [
  {
    id: 6, name: 'Bettermint', tagline: 'Fitness Habit & Tracking App',
    desc: 'A behavioral fitness application integrating Google Fitness APIs to track user health data and promote consistency through data-driven insights.',
    highlights: ['Google Fitness integration', 'Steps, calories & sleep tracking', 'Data visualization dashboards'],
    tech: ['React Native', 'Google Fitness SDK'],
    type: 'Mobile App', emoji: '💪',
    color: '#22c55e',
  },
  {
    id: 7, name: 'FootRank', tagline: 'Football Match Rating Platform',
    desc: 'A community-driven application allowing users to rate football matches and explore top-rated games across leagues.',
    highlights: ['Match rating & reviews', 'Top-rated match discovery', 'Community engagement'],
    tech: ['React Native'],
    type: 'Mobile App', emoji: '⚽',
    color: '#0ea5e9',
  },
  {
    id: 8, name: 'GuisedUp', tagline: 'Social Community Platform',
    desc: 'A social platform designed to connect users experiencing similar emotional phases through posts, events, and messaging.',
    highlights: ['Posts, videos & events', 'Phase-based communities', 'Personal & group chat'],
    tech: ['React Native'],
    type: 'Mobile App', emoji: '💬',
    color: '#ec4899',
  },
];

/* ─── Project Modal ─── */
function Modal({ project, onClose }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  if (!project) return null;
  const isMobile = project.type === 'Mobile App';

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-content">
          <div className="modal-name">{project.name}</div>
          <div className="modal-sub">{project.tagline} · {project.type}</div>

          {/* Screenshots strip */}
          <div className="modal-screenshots" ref={scrollRef}>
            {project.screenshots && project.screenshots.length > 0
              ? project.screenshots.map((src, i) => (
                <img key={i} src={src} alt={`${project.name} screenshot ${i + 1}`} className="modal-screenshot" />
              ))
              : Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="modal-screenshot-ph">
                  <div className="modal-screenshot-ph-icon">{project.emoji}</div>
                  <div className="modal-screenshot-ph-label">Screenshot {i + 1}</div>
                </div>
              ))
            }
          </div>

          <p className="modal-desc">{project.desc}</p>
          <ul className="modal-features">
            {project.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className="modal-tags">
            {project.tech.map((t, i) => <span className="tag" key={i}>{t}</span>)}
          </div>
          <div className="modal-actions">
            {isMobile ? (
              <>
                <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="modal-btn modal-ios">
                  <AppleIcon /> App Store
                </a>
                <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="modal-btn modal-and">
                  <PlayIcon /> Play Store
                </a>
              </>
            ) : (
              <>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-live">
                  <GlobeIcon /> Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-gh">
                  <GithubIcon s={14} /> GitHub
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── App ─── */
export default function App() {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  // Theme logic
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let cur = 'about';
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 90) cur = id;
      }
      // also highlight resume when user scrolls past projects
      const resumeEl = document.getElementById('resume');
      if (resumeEl && resumeEl.getBoundingClientRect().top <= 90) cur = 'resume';
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ═══ TOP NAV ═══ */}
      <nav className={`top-nav${scrolled ? ' scrolled' : ''}`}>
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {'<'}<span>sn</span>{' />'}
        </button>

        {/* Desktop nav + Toggle */}
        <div className="desktop-controls" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div className="nav-links">
            {NAV.map(({ label, id }) => (
              <button
                key={id}
                className={`nav-btn${active === id ? ' active' : ''}`}
                onClick={() => goto(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <button
            className="theme-toggle-desktop"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <SunIcon s={16} /> : <MoonIcon s={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mobile-controls">
          <button className="hamburger" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <SunIcon s={18} /> : <MoonIcon s={18} />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        {NAV.map(({ label, id }) => (
          <button key={id} className={`nav-btn${active === id ? ' active' : ''}`} onClick={() => goto(id)}>
            {label}
          </button>
        ))}
        <button className="nav-btn" onClick={() => { goto('contact'); setMenuOpen(false); }}>
          Let's Connect
        </button>
      </div>

      {/* ═══ PAGE SHELL ═══ */}
      <div className="page-shell">

        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div>
            <div className="avatar-wrap">
              <div className="avatar">SN</div>
            </div>

            <button className="opp-badge" onClick={() => setConnectOpen(o => !o)}>
              <span className="opp-dot" />
              I'm looking out for opportunities !!
            </button>

            {/* Inline Let's Connect panel */}
            <div className={`connect-panel${connectOpen ? ' open' : ''}`}>
              <a href="mailto:satyamnarayan@email.com" className="connect-item">
                <span className="connect-icon"><EmailIcon s={16} /></span>
                satyamnarayan@email.com
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="connect-item">
                <span className="connect-icon"><LinkedinIcon s={16} /></span>
                LinkedIn Profile
              </a>
            </div>

            <h1 className="sidebar-name">Satyam Narayan</h1>
            <div className="sidebar-role">React Native Developer</div>
            <p className="sidebar-tag">
              Building scalable mobile apps<br />
              for Android &amp; iOS with real impact.
            </p>

            <div className="sidebar-actions">
              <a href="/resume.pdf" download="Satyam_Narayan_Resume.pdf" className="sidebar-link">
                Resume ↗
              </a>
              <button
                className="sidebar-link"
                onClick={() => setConnectOpen(o => !o)}
                style={{ color: connectOpen ? 'var(--white)' : undefined }}
              >
                Let's Connect {connectOpen ? '↑' : '↓'}
              </button>
            </div>
          </div>

          <div className="sidebar-spacer" />

          <div className="sidebar-socials">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="soc-icon" title="GitHub">
              <GithubIcon s={19} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="soc-icon" title="LinkedIn">
              <LinkedinIcon s={19} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="soc-icon" title="Twitter / X">
              <XIcon s={17} />
            </a>
          </div>
        </aside>

        {/* ═══ RIGHT CONTENT ═══ */}
        <main className="content-panel">

          {/* ── ABOUT ── */}
          <section className="c-section" id="about">
            <h2 className="c-heading">About</h2>
            <div className="about-body">
              <p className="about-p">
                I'm a <strong>React Native developer</strong> with <strong>1.5+ years</strong> of professional experience
                building cross-platform mobile applications for Android and iOS.
                I've worked on <strong>15+ projects</strong> across productivity, education, fitness, social, and B2B tools.
              </p>
              <p className="about-p">
                I specialize in <strong>production-ready mobile apps</strong> — integrating Firebase for real-time features
                and push notifications, implementing in-app subscriptions via <strong>RevenueCat</strong>, and shipping
                apps to the <strong>Play Store and App Store</strong>.
              </p>
              <p className="about-p">
                Currently at <strong>SilverSky Technology</strong>, shipping apps used by real users every day.
                I care about clean architecture, intuitive UX, and scalable code.
              </p>

              <div className="stats-row">
                {[['1.5+', 'Years of Experience'], ['15+', 'Projects Delivered'], ['3', 'Platforms (iOS, Android & Web)']].map(
                  ([n, l]) => <div className="stat-box" key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
                )}
              </div>

              <div className="skills-chips">
                {SKILLS.map(([icon, label]) => (
                  <span className="chip" key={label}><span>{icon}</span>{label}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section className="c-section" id="experience">
            <h2 className="c-heading">Work Experience</h2>
            <div className="exp-list">
              {EXPERIENCE.map((e, i) => (
                <div className="exp-entry" key={i}>
                  <div className="exp-dates">{e.period}</div>
                  <div>
                    <div className="exp-company-row">
                      <span className="exp-company-name">{e.company}</span>
                      <span className="exp-company-arrow">↗</span>
                    </div>
                    <div className="exp-role-title">{e.role}</div>
                    <p className="exp-desc-text">{e.desc}</p>
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    <div className="tags-row">
                      {e.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ marginTop: 48 }}>
              <h2 className="c-heading">Education</h2>
              <div className="exp-list">
                {[
                  { p: '2021 – 2023', d: 'Master of Computer Applications (MCA)', c: 'LNCT Bhopal' },
                  { p: '2018 – 2021', d: 'Bachelor of Computer Applications (BCA)', c: 'L.N. Mishra College of Business Management' },
                ].map((ed, i) => (
                  <div className="edu-entry" key={i}>
                    <div className="exp-dates">{ed.p}</div>
                    <div>
                      <div className="exp-role-title" style={{ fontSize: 15, marginBottom: 5 }}>{ed.d}</div>
                      <div className="exp-company-name" style={{ fontSize: 13 }}>{ed.c}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section className="c-section" id="projects">
            <h2 className="c-heading">Featured Projects</h2>
            <p className="section-subtitle">Production apps shipped across iOS, Android & Web — click a card for the full story.</p>
            <div className="projects-group">
              {PROJECTS.map(p => (
                <div key={p.id} className="proj-card" onClick={() => setModal(p)}>
                  <div className="proj-inner">
                    <div className="proj-header">
                      <span className="proj-name">{p.name}</span>
                      <span className={`proj-badge ${p.type === 'Mobile App' ? 'mobile' : 'web'}`}>
                        {p.type === 'Mobile App' ? 'Mobile' : 'Web'}
                      </span>
                      <span className="proj-arrow">↗</span>
                    </div>
                    <p className="proj-desc">{p.tagline}. {p.desc.split('.')[0]}.</p>
                    <div className="proj-tags">
                      {p.tech.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                    </div>
                  </div>

                  {/* Cover image or emoji placeholder */}
                  <div className="proj-image-wrap">
                    {p.coverImage
                      ? <img src={p.coverImage} alt={p.name} />
                      : <div className="proj-img-placeholder">{p.emoji}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* ── OTHER PROJECTS ── */}
            <h2 className="c-heading" style={{ marginTop: 72 }}>Other Projects</h2>
            <p className="section-subtitle">Additional projects I've contributed to as a developer.</p>
            <div className="other-projects-grid">
              {OTHER_PROJECTS.map(p => (
                <div key={p.id} className="other-proj-card" style={{ '--card-accent': p.color }}>
                  <div className="other-proj-top">
                    <span className="other-proj-emoji">{p.emoji}</span>
                    <span className={`proj-badge ${p.type === 'Mobile App' ? 'mobile' : 'web'}`}>
                      {p.type === 'Mobile App' ? 'Mobile' : 'Web'}
                    </span>
                  </div>
                  <div className="other-proj-name">{p.name}</div>
                  <div className="other-proj-tagline">{p.tagline}</div>
                  <p className="other-proj-desc">{p.desc}</p>
                  <ul className="other-proj-highlights">
                    {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                  <div className="other-proj-tech">
                    {p.tech.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                  </div>
                  <div className="other-proj-accent-line" />
                </div>
              ))}
            </div>
          </section>

          {/* ── RESUME ── */}
          <section className="c-section" id="resume">
            <h2 className="c-heading">Resume</h2>
            <div className="resume-card">
              <div>
                <div className="resume-name-lg">Satyam Narayan</div>
                <div className="resume-chips">
                  {['React Native Developer', '1.5+ yrs', '15+ projects', 'Android & iOS'].map(c => (
                    <span className="resume-chip" key={c}>{c}</span>
                  ))}
                </div>
              </div>
              <a href="/resume.pdf" download="Satyam_Narayan_Resume.pdf" className="resume-dl">
                ⬇ &nbsp;Download PDF
              </a>
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section className="c-section" id="contact">
            <h2 className="c-heading">Let's Connect</h2>
            <p className="contact-intro">
              I'm always open to discussing new opportunities, collaborations, or interesting projects.
              Feel free to reach out through any of the channels below.
            </p>
            <div className="contact-rows">
              {[
                { href: 'mailto:satyamnarayan@email.com', Icon: EmailIcon, label: 'Email', val: 'satyamnarayan@email.com' },
                { href: 'https://linkedin.com/in/', Icon: LinkedinIcon, label: 'LinkedIn', val: 'linkedin.com/in/satyamnarayan' },
                { href: 'https://github.com/', Icon: GithubIcon, label: 'GitHub', val: 'github.com/satyamnarayan' },
              ].map(({ href, Icon, label, val }) => (
                <a key={label} href={href} target={href.startsWith('mail') ? undefined : '_blank'} rel="noopener noreferrer" className="contact-row">
                  <span className="contact-row-icon"><Icon s={17} /></span>
                  <div>
                    <div className="contact-row-label">{label}</div>
                    <div className="contact-row-value">{val}</div>
                  </div>
                  <span className="contact-row-arrow">↗</span>
                </a>
              ))}
            </div>
          </section>

          <footer className="page-footer">
            Designed &amp; built by Satyam Narayan · {new Date().getFullYear()}
          </footer>
        </main>
      </div>

      {/* Modal */}
      {modal && <Modal project={modal} onClose={() => setModal(null)} />}
    </>
  );
}

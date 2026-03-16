import { useState } from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

const projectIcons = {
    'FamilyFeed': '👨‍👩‍👧‍👦',
    'Tydlig': '🏫',
    'Sunrise': '🌅',
    'EaziQuote': '📋',
    'Tuck': '🎁',
};

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

const AndroidIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.523 15.341a.5.5 0 0 1-.5.5H6.977a.5.5 0 0 1-.5-.5V9.159a.5.5 0 0 1 .5-.5h10.046a.5.5 0 0 1 .5.5v6.182zM15.078 6.185l1.334-2.311a.279.279 0 0 0-.102-.38.279.279 0 0 0-.38.102L14.57 5.916a7.817 7.817 0 0 0-5.14 0L8.07 3.596a.279.279 0 0 0-.38-.102.279.279 0 0 0-.102.38l1.334 2.311C6.748 7.15 5.5 9 5.5 11h13c0-2-.748-3.85-3.422-4.815zM10 9.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm5.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
    </svg>
);

const GlobeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

function ProjectModal({ project, onClose }) {
    if (!project) return null;
    const icon = projectIcons[project.name] || '📦';

    return (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal">
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-header">
                    <div
                        className="modal-icon"
                        style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}
                    >
                        {icon}
                    </div>
                    <div>
                        <div className="modal-title">{project.name}</div>
                        <div className="modal-subtitle">{project.tagline}</div>
                    </div>
                </div>

                <p className="modal-description">{project.description}</p>

                <div className="modal-features">
                    <div className="modal-features-title">Key Features</div>
                    <ul className="modal-feature-list">
                        {project.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                </div>

                <div className="modal-tech">
                    {project.tech.map((t, i) => (
                        <span className="tech-tag" key={i}>{t}</span>
                    ))}
                </div>

                <div className="modal-actions">
                    {project.type === 'Mobile App' ? (
                        <>
                            <a
                                href={project.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn modal-btn-ios"
                            >
                                <AppleIcon /> App Store
                            </a>
                            <a
                                href={project.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn modal-btn-android"
                            >
                                <AndroidIcon /> Play Store
                            </a>
                        </>
                    ) : (
                        <>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn modal-btn-live"
                            >
                                <GlobeIcon /> Live Demo
                            </a>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-btn modal-btn-github"
                                >
                                    <GithubIcon /> GitHub
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Projects</span>
                    <h2 className="section-title">Things I've built</h2>
                    <p className="section-subtitle">
                        A selection of mobile and web projects built with real users in mind.
                        Click any card to learn more.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map(project => {
                        const icon = projectIcons[project.name] || '📦';
                        const isMobile = project.type === 'Mobile App';

                        return (
                            <div
                                className="project-card"
                                key={project.id}
                                onClick={() => setSelected(project)}
                                style={{ '--card-color': `linear-gradient(90deg, ${project.color}, ${project.color}99)` }}
                            >
                                <div className="project-card-top">
                                    <div
                                        className="project-icon"
                                        style={{
                                            background: `${project.color}22`,
                                            border: `1px solid ${project.color}44`,
                                        }}
                                    >
                                        {icon}
                                    </div>
                                    <span className={`project-type-badge ${isMobile ? 'mobile' : 'web'}`}>
                                        {isMobile ? '📱' : '🌐'} {project.type}
                                    </span>
                                </div>

                                <div className="project-name">{project.name}</div>
                                <div className="project-tagline">{project.tagline}</div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span className="tech-tag" key={i}>{t}</span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="tech-tag">+{project.tech.length - 3}</span>
                                    )}
                                </div>

                                <div className="project-footer">
                                    <span className="project-footer-label">
                                        {isMobile ? '📲 Available on stores' : '🌐 Web platform'}
                                    </span>
                                    <span className="project-cta">
                                        View more <span>→</span>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {selected && (
                <ProjectModal project={selected} onClose={() => setSelected(null)} />
            )}
        </section>
    );
}

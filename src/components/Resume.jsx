import './Contact.css';

export default function Resume() {
    return (
        <section className="resume" id="resume">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Resume</span>
                    <h2 className="section-title">Download My Resume</h2>
                    <p className="section-subtitle">
                        A full overview of my experience, education, and skills.
                    </p>
                </div>

                <div className="resume-wrapper">
                    <div className="resume-card">
                        <div>
                            <div className="resume-icon">📄</div>
                        </div>
                        <div className="resume-info" style={{ flex: 1 }}>
                            <div className="resume-name">Satyam Narayan</div>
                            <div className="resume-meta">
                                <div className="resume-meta-item">
                                    <span className="resume-meta-dot" />
                                    React Native Developer
                                </div>
                                <div className="resume-meta-item">
                                    <span className="resume-meta-dot" />
                                    1.5+ years of experience
                                </div>
                                <div className="resume-meta-item">
                                    <span className="resume-meta-dot" />
                                    15+ projects delivered
                                </div>
                                <div className="resume-meta-item">
                                    <span className="resume-meta-dot" />
                                    Android & iOS platforms
                                </div>
                            </div>
                        </div>
                        <div className="resume-actions">
                            <a
                                href="/resume.pdf"
                                download="Satyam_Narayan_Resume.pdf"
                                className="btn btn-primary"
                            >
                                <span>⬇</span>
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

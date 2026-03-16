import './Contact.css';

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 6.5L22 7" />
    </svg>
);

export default function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Contact</span>
                        <h2 className="section-title">Let's Connect</h2>
                    </div>

                    <div className="contact-wrapper">
                        <div className="contact-card">
                            <div className="contact-glow" />

                            <div className="contact-emoji">👋</div>

                            <h3 className="contact-heading">Get in touch</h3>
                            <p className="contact-subtext">
                                I'm always open to discussing new opportunities, collaborations,
                                or interesting projects. Let's build something great together.
                            </p>

                            <div className="contact-links">
                                <a href="mailto:satyamnarayan@email.com" className="contact-link">
                                    <EmailIcon />
                                    <div className="contact-link-value">
                                        <div>satyamnarayan@email.com</div>
                                        <div className="contact-link-label">Email</div>
                                    </div>
                                    <span>→</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    <LinkedinIcon />
                                    <div className="contact-link-value">
                                        <div>linkedin.com/in/satyamnarayan</div>
                                        <div className="contact-link-label">LinkedIn</div>
                                    </div>
                                    <span>→</span>
                                </a>
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    <GithubIcon />
                                    <div className="contact-link-value">
                                        <div>github.com/satyamnarayan</div>
                                        <div className="contact-link-label">GitHub</div>
                                    </div>
                                    <span>→</span>
                                </a>
                            </div>

                            <a href="mailto:satyamnarayan@email.com" className="btn btn-primary">
                                <span>✉️</span>
                                Say Hello
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p className="footer-text">
                        Built with ❤️ by <span>Satyam Narayan</span> · React Native Developer
                    </p>
                </div>
            </footer>
        </>
    );
}

import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
    const exp = experience[0];

    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Work Experience</span>
                    <h2 className="section-title">Professional Journey</h2>
                    <p className="section-subtitle">Building real-world mobile apps that ship to production</p>
                </div>

                <div className="experience-wrapper">
                    <div className="exp-card">
                        <div className="exp-top">
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div className="exp-icon">📱</div>
                                <div className="exp-main">
                                    <div className="exp-role">{exp.role}</div>
                                    <div className="exp-company">{exp.company}</div>
                                </div>
                            </div>
                            <div className="exp-meta">
                                <div className="exp-period">{exp.period}</div>
                                <div className="exp-badge">
                                    <span className="exp-badge-dot" />
                                    {exp.duration}
                                </div>
                            </div>
                        </div>

                        <p className="exp-description">{exp.description}</p>

                        <ul className="exp-responsibilities">
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx}>
                                    <span className="exp-bullet" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="education-section">
                        <div className="education-title">
                            <span>🎓</span> Education
                        </div>
                        <div className="edu-cards">
                            <div className="edu-card">
                                <div className="edu-degree">Master of Computer Applications (MCA)</div>
                                <div className="edu-college">LNCT Bhopal</div>
                            </div>
                            <div className="edu-card">
                                <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
                                <div className="edu-college">L.N. Mishra College of Business Management</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

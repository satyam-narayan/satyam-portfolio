import { skills } from '../data/portfolio';
import './About.css';

const stats = [
    { number: '1.5+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Delivered' },
    { number: '2', label: 'Platforms (iOS & Android)' },
    { number: '5', label: 'Published Apps' },
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Passionate about mobile experiences</h2>
                    <p className="section-subtitle">
                        Building cross-platform apps that feel native, perform great, and solve real problems.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-content">
                        <p className="about-text">
                            I'm a <strong>React Native Developer</strong> with <strong>1.5+ years of professional experience</strong> building
                            cross-platform mobile applications for <strong>Android and iOS</strong>. I've worked on
                            <strong> 15+ projects</strong> spanning productivity, education, fitness, social platforms, and B2B tools.
                        </p>
                        <p className="about-text">
                            I have hands-on experience building <strong>production-grade mobile apps</strong> — from
                            integrating <strong>Firebase</strong> for real-time features and push notifications,
                            to implementing <strong>in-app subscriptions via RevenueCat</strong>, to shipping apps
                            to the <strong>Play Store and App Store</strong>.
                        </p>
                        <p className="about-text">
                            I care deeply about <strong>clean architecture</strong>, seamless user experience, and writing
                            code that scales. I enjoy working on challenging problems and collaborating with
                            product teams to deliver apps users love.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat, i) => (
                                <div className="stat-card" key={i}>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="skills-section">
                            <div className="skills-title">
                                <span>⚡</span>
                                Tech Stack & Skills
                            </div>
                            <div className="skills-grid">
                                {skills.map((skill, i) => (
                                    <span className="skill-pill" key={i}>
                                        <span className="skill-icon">{skill.icon}</span>
                                        {skill.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

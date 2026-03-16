import { useState, useEffect } from 'react';
import './Header.css';

const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: "Let's Connect", id: 'contact' },
];

export default function Header({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navItems.map(item => ({
                id: item.id,
                el: document.getElementById(item.id),
            }));

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = sections[i].el;
                if (el && window.scrollY + 100 >= el.offsetTop) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-inner">
                    <button className="logo" onClick={scrollToTop} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <span className="logo-dot" />
                        <span>satyam.dev</span>
                    </button>

                    <nav className="nav">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileOpen(o => !o)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </header>

            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                {navItems.map(item => (
                    <button
                        key={item.id}
                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => scrollTo(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    );
}

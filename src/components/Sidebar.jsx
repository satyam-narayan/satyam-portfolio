import { personalInfo, socialLinks } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon, EmailIcon } from "./icons";

export default function Sidebar({ connectOpen, setConnectOpen }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="avatar-wrap">
          <div className="avatar">{personalInfo.initials}</div>
        </div>

        <button className="opp-badge" onClick={() => setConnectOpen((o) => !o)}>
          <span className="opp-dot" />
          I'm looking out for opportunities !!
        </button>

        <div className={`connect-panel${connectOpen ? " open" : ""}`}>
          <a href={`mailto:${socialLinks.email}`} className="connect-item">
            <span className="connect-icon">
              <EmailIcon s={16} />
            </span>
            {socialLinks.email}
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-item"
          >
            <span className="connect-icon">
              <LinkedinIcon s={16} />
            </span>
            LinkedIn Profile
          </a>
        </div>

        <h1 className="sidebar-name">{personalInfo.name}</h1>
        <div className="sidebar-role">{personalInfo.role}</div>
        <p className="sidebar-tag">
          Building scalable mobile apps
          <br />
          for Android &amp; iOS with real impact.
        </p>

        <div className="sidebar-actions">
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFilename}
            className="sidebar-link"
          >
            Resume ↗
          </a>
          <button
            className="sidebar-link"
            onClick={() => setConnectOpen((o) => !o)}
            style={{ color: connectOpen ? "var(--white)" : undefined }}
          >
            Let's Connect {connectOpen ? "↑" : "↓"}
          </button>
        </div>
      </div>

      <div className="sidebar-spacer" />

      <div className="sidebar-socials">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="soc-icon"
          title="GitHub"
        >
          <GithubIcon s={19} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="soc-icon"
          title="LinkedIn"
        >
          <LinkedinIcon s={19} />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="soc-icon"
          title="Twitter / X"
        >
          <XIcon s={17} />
        </a>
      </div>
    </aside>
  );
}

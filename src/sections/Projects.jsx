import { useState } from "react";
import { featuredProjects, otherProjects } from "../data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [modal, setModal] = useState(null);

  return (
    <section className="c-section" id="projects">
      <h2 className="c-heading">Featured Projects</h2>
      <p className="section-subtitle">
        Production apps shipped across iOS, Android & Web — click a card for the
        full story.
      </p>

      <div className="projects-group">
        {featuredProjects.map((p) => (
          <div key={p.id} className="proj-card" onClick={() => setModal(p)}>
            <div className="proj-inner">
              <div className="proj-header">
                <span className="proj-name">{p.name}</span>
                <span
                  className={`proj-badge ${p.type === "Mobile App" ? "mobile" : "web"}`}
                >
                  {p.type === "Mobile App" ? "Mobile" : "Web"}
                </span>
                <span className="proj-arrow">↗</span>
              </div>
              <p className="proj-desc">
                {p.tagline}. {p.description.split(".")[0]}.
              </p>
              <div className="proj-tags">
                {p.tech.map((t, i) => (
                  <span className="tag" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="proj-image-wrap">
              {p.coverImage ? (
                <img src={p.coverImage} alt={p.name} />
              ) : (
                <div className="proj-img-placeholder">{p.emoji}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="c-heading" style={{ marginTop: 72 }}>
        Other Projects
      </h2>
      <p className="section-subtitle">
        Additional projects I've contributed to as a developer.
      </p>
      <div className="other-projects-grid">
        {otherProjects.map((p) => (
          <div
            key={p.id}
            className="other-proj-card"
            style={{ "--card-accent": p.color }}
          >
            <div className="other-proj-top">
              <span className="other-proj-emoji">{p.emoji}</span>
              <span
                className={`proj-badge ${p.type === "Mobile App" ? "mobile" : "web"}`}
              >
                {p.type === "Mobile App" ? "Mobile" : "Web"}
              </span>
            </div>
            <div className="other-proj-name">{p.name}</div>
            <div className="other-proj-tagline">{p.tagline}</div>
            <p className="other-proj-desc">{p.description}</p>
            <ul className="other-proj-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="other-proj-tech">
              {p.tech.map((t, i) => (
                <span className="tag" key={i}>
                  {t}
                </span>
              ))}
            </div>
            <div className="other-proj-accent-line" />
          </div>
        ))}
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}

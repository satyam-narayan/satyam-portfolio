import { stats, skills } from "../data/portfolio";

export default function About() {
  return (
    <section className="c-section" id="about">
      <h2 className="c-heading">About</h2>
      <div className="about-body">
        <p className="about-p">
          I'm a <strong>React Native developer</strong> with{" "}
          <strong>1.5+ years</strong> of professional experience building
          cross-platform mobile applications for Android and iOS. I've worked on{" "}
          <strong>15+ projects</strong> across productivity, education, fitness,
          social, and B2B tools.
        </p>
        <p className="about-p">
          I specialize in <strong>production-ready mobile apps</strong> —
          integrating Firebase for real-time features and push notifications,
          implementing in-app subscriptions via <strong>RevenueCat</strong>, and
          shipping apps to the <strong>Play Store and App Store</strong>.
        </p>
        <p className="about-p">
          Currently at <strong>SilverSky Technology</strong>, shipping apps used
          by real users every day. I care about clean architecture, intuitive
          UX, and scalable code.
        </p>

        <div className="stats-row">
          {stats.map(({ number, label }) => (
            <div className="stat-box" key={label}>
              <div className="stat-num">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="skills-chips">
          {skills.map(({ icon, label }) => (
            <span className="chip" key={label}>
              <span>{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

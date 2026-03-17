import { socialLinks } from "../data/portfolio";
import { EmailIcon, LinkedinIcon, GithubIcon } from "../components/icons";

const contactItems = [
  {
    href: `mailto:${socialLinks.email}`,
    Icon: EmailIcon,
    label: "Email",
    val: socialLinks.email,
  },
  {
    href: socialLinks.linkedin,
    Icon: LinkedinIcon,
    label: "LinkedIn",
    val: "linkedin.com/in/satyam-narayan",
  },
  {
    href: socialLinks.github,
    Icon: GithubIcon,
    label: "GitHub",
    val: "github.com/itssatyamnarayan",
  },
];

export default function Contact() {
  return (
    <section className="c-section" id="contact">
      <h2 className="c-heading">Let's Connect</h2>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, collaborations, or
        interesting projects. Feel free to reach out through any of the channels
        below.
      </p>
      <div className="contact-rows">
        {contactItems.map(({ href, Icon, label, val }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="contact-row"
          >
            <span className="contact-row-icon">
              <Icon s={17} />
            </span>
            <div>
              <div className="contact-row-label">{label}</div>
              <div className="contact-row-value">{val}</div>
            </div>
            <span className="contact-row-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import styles from "./contact.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLanguage } from "../../../contexts/LanguageContext";

const TEXT = {
  en: {
    title: "Contact me",
    intro:
      "Thank you for taking the time to explore my portfolio and projects. I’m always happy to connect and exchange ideas.",
    bullets: [
      "Feel free to reach out with job offers or collaboration ideas",
      "Tell me about the challenges or goals you’re working on",
      "I’m especially interested in building reliable and secure systems for real-world use",
      "Open to remote, hybrid, or on-site roles depending on the project and setup",
    ],
    outro:
      "I’m looking forward to meaningful conversations and new opportunities.",
    linkedin: "LinkedIn profile",
  },
  de: {
    title: "Kontakt",
    intro:
      "Vielen Dank, dass du dir die Zeit genommen hast, mein Portfolio und meine Projekte anzusehen. Ich freue mich immer über Austausch und neue Kontakte.",
    bullets: [
      "Melde dich gerne mit Jobangeboten oder Ideen zur Zusammenarbeit",
      "Erzähl mir von den Herausforderungen oder Zielen, an denen du arbeitest",
      "Besonders interessiert bin ich an zuverlässigen und sicheren Systemen für den Praxiseinsatz",
      "Offen für Remote-, Hybrid- oder Vor-Ort-Rollen – abhängig vom Projekt und Setup",
    ],
    outro: "Ich freue mich auf spannende Gespräche und neue Möglichkeiten.",
    linkedin: "LinkedIn-Profil",
  },
};

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const t = TEXT[lang];

  return (
    <section className={styles.section} id="contact">
      <div className={`layout-container ${styles.container}`}>
        <div className={styles.container}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2 className={styles.title}>{t.title}</h2>

            <p className={styles.text}>{t.intro}</p>

            <ul className={styles.list}>
              {t.bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <p className={styles.subtitle}>{t.outro}</p>

            <div className={styles.contactItem}>
              <img
                src={useBaseUrl("/img/portfolio/icons/mail.png")}
                alt="Mail"
              />
              <a href="mailto:mail@benjamin-tietz.com">
                mail@benjamin-tietz.com
              </a>
            </div>

            <div className={styles.contactItem}>
              <img
                src={useBaseUrl("/img/portfolio/icons/linkedin.png")}
                alt="LinkedIn"
              />
              <a
                href="https://www.linkedin.com/in/benjamin-tietz/"
                target="_blank"
                rel="noreferrer"
              >
                {t.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

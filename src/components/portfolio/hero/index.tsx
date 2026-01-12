import React from "react";
import styles from "./hero.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLanguage } from "../../../contexts/LanguageContext";

const TEXT = {
  en: {
    greeting: "Hey there. 👋 I am",
    role: "DevSecOps Engineer",
    description: (
      <>
        During my DevSecOps journey, I had the opportunity to work on a variety
        of practical projects that closely reflect real-world scenarios.
        <br />
        <br />I built and deployed full-stack systems combining an Angular
        frontend, a Django backend, and a PostgreSQL database.
      </>
    ),
    cta: "Contact me",
  },
  de: {
    greeting: "Hey 👋 ich bin",
    role: "DevSecOps Engineer",
    description: (
      <>
        Während meiner DevSecOps-Reise hatte ich die Möglichkeit, an einer
        Vielzahl praxisnaher Projekte zu arbeiten.
        <br />
        <br />
        Ich habe Full-Stack-Systeme mit Angular, Django und PostgreSQL gebaut.
      </>
    ),
    cta: "Kontakt aufnehmen",
  },
};

const Hero: React.FC = () => {
  // ✅ HIER IST DER FIX
  const { lang } = useLanguage();

  const t = TEXT[lang];

  return (
    <section className={styles.hero} id="about">
      <div className={`layout-container ${styles.container}`}>
        <div className={styles.textColumn}>
          <span className={styles.greeting}>{t.greeting}</span>
          <h1 className={styles.name}>Benjamin Tietz</h1>
          <h2 className={styles.role}>{t.role}</h2>

          <p className={styles.description}>{t.description}</p>

          <button
            className={styles.cta}
            onClick={() => (window.location.href = "#contact")}
          >
            {t.cta}
          </button>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={useBaseUrl("/img/portfolio/benjamin.webp")}
            alt="Benjamin Tietz DevSecOps Engineer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

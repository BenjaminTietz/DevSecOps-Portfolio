import React, { useState } from "react";
import styles from "./header.module.css";

type Lang = "en" | "de";

const TEXT: Record<
  Lang,
  { about: string; skills: string; projects: string; contact: string }
> = {
  en: {
    about: "About me",
    skills: "My skills",
    projects: "My projects",
    contact: "Contact",
  },
  de: {
    about: "Über mich",
    skills: "Meine Skills",
    projects: "Meine Projekte",
    contact: "Kontakt",
  },
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  const t = TEXT[lang];

  return (
    <header id="top" className={styles.header}>
      <div className={`layout-container ${styles.container}`}>
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#about">{t.about}</a>
          <a href="#skills">{t.skills}</a>
          <a href="#projects">{t.projects}</a>
          <a href="#contact">{t.contact}</a>

          {/* Language Switch Desktop */}
          <div className={styles.langSwitch}>
            <button
              className={lang === "en" ? styles.active : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span>|</span>
            <button
              className={lang === "de" ? styles.active : ""}
              onClick={() => setLang("de")}
            >
              DE
            </button>
          </div>
        </nav>

        {/* Burger Button (Mobile) */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.close}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t.about}
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          {t.skills}
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          {t.projects}
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          {t.contact}
        </a>

        {/* Language Switch Mobile */}
        <div className={styles.mobileLangSwitch}>
          <button
            className={lang === "en" ? styles.active : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={lang === "de" ? styles.active : ""}
            onClick={() => setLang("de")}
          >
            DE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

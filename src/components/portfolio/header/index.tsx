import React, { useState } from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top" className={styles.header}>
      <div className={styles.container}>
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#about">About me</a>
          <a href="#skills">My skills</a>
          <a href="#projects">My projects</a>
          <a href="#contact">Contact</a>
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
        {/* Close Button */}
        <button
          className={styles.close}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About me
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          My skills
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          My projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </header>
  );
};
export default Header;

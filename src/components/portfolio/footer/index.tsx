import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <button
        className={styles.scrollTop}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <div className={styles.content}>
        <p className={styles.copy}>© Felix Wallke 2025</p>
        <a href="/legal-notice" className={styles.legal}>
          Legal notice
        </a>
      </div>
    </footer>
  );
};

export default Footer;

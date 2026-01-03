import React from "react";
import styles from "./footer.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
        <p className={styles.copy}>© The Wizard of --noinput 2025</p>
        <a href={useBaseUrl("/legal-notice")}>Legal notice</a>
      </div>
    </footer>
  );
};

export default Footer;

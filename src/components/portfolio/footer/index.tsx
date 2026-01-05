import React from "react";
import styles from "./footer.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    const header = document.getElementById("top");
    header?.scrollIntoView({ behavior: "smooth" });
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
        <p className={styles.copy}>© Benjamin Tietz 2026</p>
        <a href={useBaseUrl("/legal-notice")}>Legal notice</a>
      </div>
    </footer>
  );
};

export default Footer;

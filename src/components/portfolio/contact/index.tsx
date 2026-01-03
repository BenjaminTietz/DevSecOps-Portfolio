import React from "react";
import styles from "./contact.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Contact: React.FC = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={styles.title}>Contact me</h2>

          <p className={styles.text}>
            If you made it this far, congratulations — you survived the
            portfolio without exposing any ports.
          </p>

          <ul className={styles.list}>
            <li>
              Feel free to reach out with real job offers (not course upsells)
            </li>
            <li>Tell me what problem you actually want to solve</li>
            <li>
              Let’s talk about systems that work in production — not in slides
            </li>
            <li>
              Remote? Hybrid? On-site? As long as security scans stay green
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.subtitle}>
            I’ve already invested heavily in expensive lessons — now I prefer
            paid work.
          </p>

          <div className={styles.contactItem}>
            <img src={useBaseUrl("/img/portfolio/icons/mail.png")} alt="Mail" />
            <a href="mailto:felix.wallke@gmail.com">security.wayne@gmail.com</a>
          </div>

          <div className={styles.contactItem}>
            <img
              src={useBaseUrl("/img/portfolio/icons/linkedin.png")}
              alt="LinkedIn"
            />
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn (mentor reviews not included)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

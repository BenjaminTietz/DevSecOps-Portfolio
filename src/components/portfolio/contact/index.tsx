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

          <p className={styles.text}>Include the information like:</p>

          <ul className={styles.list}>
            <li>Feel free to reach out with job offers or opportunities</li>
            <li>What role are you looking for?</li>
            <li>How you will contribute to the new team</li>
            <li>Are you open for remote work or relocation?</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.subtitle}>
            Looking forward to hearing from you!
          </p>

          <div className={styles.contactItem}>
            <img src={useBaseUrl("/img/portfolio/icons/mail.png")} alt="Mail" />
            <a href="mailto:felix.wallke@gmail.com">felix.wallke@gmail.com</a>
          </div>

          <div className={styles.contactItem}>
            <img
              src={useBaseUrl("/img/portfolio/icons/linkedin.png")}
              alt="LinkedIn"
            />
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              Profile Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

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
            Thank you for taking the time to explore my portfolio and projects.
            I’m always happy to connect and exchange ideas.
          </p>

          <ul className={styles.list}>
            <li>
              Feel free to reach out with job offers or collaboration ideas
            </li>
            <li>Tell me about the challenges or goals you’re working on</li>
            <li>
              I’m especially interested in building reliable and secure systems
              for real-world use
            </li>
            <li>
              Open to remote, hybrid, or on-site roles depending on the project
              and setup
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.subtitle}>
            I’m looking forward to meaningful conversations and new
            opportunities.
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
              LinkedIn profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

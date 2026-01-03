import React from "react";
import styles from "./hero.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="about">
      <div className={`layout-container ${styles.container}`}>
        {/* LEFT SIDE (Text) */}
        <div className={styles.textColumn}>
          <div className={styles.textTop}>
            <span className={styles.greeting}>Hey there. 👋 I am</span>
            <h1 className={styles.name}>The Wizard of --noinput</h1>
            <h2 className={styles.role}>
              DevSecOps Engineer{" "}
              <span style={{ fontWeight: 400 }}>
                (He Believed. Django Didn’t.)
              </span>
            </h2>
          </div>

          <div className={styles.textBottom}>
            <p className={styles.description}>
              Welcome to a world where Dockerfiles are reviewed, Python versions
              are sometimes… Wayne, and superusers are summoned with commands
              that may or may not exist.
              <br />
              <br />
              I build real-world systems: an Angular frontend, a Django backend,
              and a PostgreSQL database — once officially approved by a mentor
              in a DevSecOps course.
              <br />
              <br />
              A few weeks later, reality performed its own security review. An
              exposed database port was discovered, and my V-Server was flagged
              by the German BSI.
              <br />
              <br />
              Lesson learned:
              <strong>
                {" "}
                DevSecOps is not about passing reviews — it’s about surviving
                reality.
              </strong>
              Today, my ports are closed, my base images are intentional, and my
              superusers are created without magic flags.
            </p>

            <button
              type="button"
              aria-label="Contact me"
              onClick={() => (window.location.href = "#contact")}
              className={styles.cta}
            >
              Contact me (no open ports)
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.imageWrapper}>
          <img
            src={useBaseUrl("/img/portfolio/ben.png")}
            alt="Python Wayne DevSecOps Engineer"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

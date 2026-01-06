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
            <h1 className={styles.name}>Benjamin Tietz</h1>

            <h2 className={styles.role}>DevSecOps Engineer </h2>
          </div>

          <div className={styles.mobileWrapper}>
            <div className={styles.textBottom}>
              <p className={styles.description}>
                During my DevSecOps journey, I had the opportunity to work on a
                variety of practical projects that closely reflect real-world
                scenarios.
                <br />
                <br />
                I built and deployed full-stack systems combining an Angular
                frontend, a Django backend, and a PostgreSQL database, while
                learning how crucial secure defaults, clean configurations, and
                intentional infrastructure decisions really are.
                <br />
                <br />
                The course projects helped me develop a strong awareness for
                security, automation, and operational responsibility. Each
                challenge was a valuable learning experience that sharpened my
                understanding of DevSecOps beyond theory.
                <br />
                <br />
                Today, I focus on building systems that are not only functional,
                but also secure, maintainable, and production-ready — from base
                images and containerization to access control and deployment
                workflows.
              </p>

              <button
                type="button"
                aria-label="Contact me"
                onClick={() => (window.location.href = "#contact")}
                className={styles.cta}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className={styles.imageWrapper}>
          <img
            src={useBaseUrl("/img/portfolio/benjamin.webp")}
            alt="Benjamin Tietz DevSecOps Engineer"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

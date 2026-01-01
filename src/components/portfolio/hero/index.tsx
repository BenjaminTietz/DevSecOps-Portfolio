import React from "react";
import styles from "./hero.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.container}>
        {/* LEFT SIDE (Text) */}
        <div className={styles.textColumn}>
          <div className={styles.textTop}>
            <span className={styles.greeting}>Hey there. 👋 I am</span>
            <h1 className={styles.name}>Benjamin Tietz</h1>
            <h2 className={styles.role}>DevSecOps Engineer</h2>
          </div>

          <div className={styles.textBottom}>
            <p className={styles.description}>
              Write some information about yourself that is IT related. For
              example: Why are you passionate about coding? Do you have a deep
              interest in games? What is your source of inspiration for
              improving your programming skills? Are you constantly learning and
              keeping up to date?
            </p>

            <button className={styles.cta}>Contact me</button>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <div className={styles.imageWrapper}>
          <img
            src={useBaseUrl("/img/portfolio/benjamin.webp")}
            alt="Benjamin Tietz"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

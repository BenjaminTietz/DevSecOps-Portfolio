import React, { useState } from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const skills = [
  {
    label: "HTML",
    icon: "/img/portfolio/icons/html.png",
    details: [
      "User-friendly navigation menus",
      "Responsive web design",
      "Contact forms and login pages",
      "Transitions, animations and hover effects",
    ],
  },
  {
    label: "CSS",
    icon: "/img/portfolio/icons/css.png",
    details: [
      "Modern layouts with Flexbox & Grid",
      "Responsive breakpoints",
      "Hover & transition effects",
    ],
  },
  {
    label: "Static site generator",
    icon: "/img/portfolio/icons/docusaurus.png",
    details: [
      "Static documentation sites",
      "Markdown & MDX content",
      "Search & versioning",
    ],
  },
  {
    label: "Python",
    icon: "/img/portfolio/icons/python.png",
    details: [
      "Automation scripts",
      "Data analysis & visualization",
      "Machine learning",
    ],
  },
  {
    label: "Shell scripting",
    icon: "/img/portfolio/icons/shell_scripting.png",
    details: ["Automation scripts", "System administration", "Task scheduling"],
  },
  {
    label: "YAML",
    icon: "/img/portfolio/icons/yaml.png",
    details: ["Configuration files", "Data serialization", "CI/CD pipelines"],
  },
  {
    label: "Container",
    icon: "/img/portfolio/icons/docker.png",
    details: ["Containerization with Docker"],
  },
  {
    label: "CI/CD with GitHub Actions",
    icon: "/img/portfolio/icons/cicd.png",
    details: ["Automated testing", "Continuous deployment"],
  },
  {
    label: "IT Security",
    icon: "/img/portfolio/icons/security.png",
    details: ["Penetration testing", "Vulnerability management"],
  },
];

const ITEMS_PER_PAGE = 3;
const SWIPE_THRESHOLD = 50;

const Skills: React.FC = () => {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

  const visibleSkills = skills.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const changePage = (next: number) => {
    if (next < 0 || next >= totalPages || next === page) return;

    setAnimating(true);
    setTimeout(() => {
      setPage(next);
      setAnimating(false);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        changePage(page + 1); // swipe left
      } else {
        changePage(page - 1); // swipe right
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className={styles.skills} id="skills">
      <div className={`layout-container ${styles.container}`}>
        <h2 className={styles.title}>My skills</h2>
        <div className={styles.subTitle}>Where I applied my skills</div>

        {/* DESKTOP GRID */}
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.label} className={styles.card}>
              <div className={styles.front}>
                <img
                  src={useBaseUrl(skill.icon)}
                  alt={skill.label}
                  className={styles.icon}
                />
                <span className={styles.label}>{skill.label}</span>
              </div>

              <div className={styles.back}>
                <h3 className={styles.backTitle}>How I used these skills</h3>
                <ul className={styles.backList}>
                  {skill.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className={styles.carousel}>
          <div
            className={`${styles.carouselTrack} ${
              animating ? styles.fadeOut : styles.fadeIn
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleSkills.map((skill) => (
              <div key={skill.label} className={styles.card}>
                <div className={styles.front}>
                  <img
                    src={useBaseUrl(skill.icon)}
                    alt={skill.label}
                    className={styles.icon}
                  />
                  <span className={styles.label}>{skill.label}</span>
                </div>

                <div className={styles.back}>
                  <ul className={styles.backList}>
                    {skill.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className={styles.dots}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  i === page ? styles.activeDot : ""
                }`}
                onClick={() => changePage(i)}
                aria-label={`Go to skills page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

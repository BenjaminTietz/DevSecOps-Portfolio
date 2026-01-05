import React, { useState } from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const ITEMS_PER_PAGE = 3;
const SWIPE_THRESHOLD = 50;

const skills = [
  {
    label: "HTML",
    icon: "/img/portfolio/icons/html.png",
    details: ["User-friendly navigation", "Responsive layouts"],
  },
  {
    label: "CSS",
    icon: "/img/portfolio/icons/css.png",
    details: ["Flexbox & Grid", "Transitions & animations"],
  },
  {
    label: "Docusaurus",
    icon: "/img/portfolio/icons/docusaurus.png",
    details: ["Docs & MDX", "Static sites"],
  },
  {
    label: "Python",
    icon: "/img/portfolio/icons/python.png",
    details: ["Automation", "Scripting"],
  },
  {
    label: "Shell",
    icon: "/img/portfolio/icons/shell_scripting.png",
    details: ["CLI tooling", "Task automation"],
  },
  {
    label: "YAML",
    icon: "/img/portfolio/icons/yaml.png",
    details: ["CI/CD configs"],
  },
  {
    label: "Container",
    icon: "/img/portfolio/icons/docker.png",
    details: ["Docker & images"],
  },
  {
    label: "CI/CD",
    icon: "/img/portfolio/icons/cicd.png",
    details: ["GitHub Actions"],
  },
  {
    label: "Security",
    icon: "/img/portfolio/icons/security.png",
    details: ["Pentesting", "Hardening"],
  },
];

const Skills: React.FC = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

  const visibleSkills = skills.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const changePage = (nextPage: number, dir: "next" | "prev") => {
    if (nextPage < 0 || nextPage >= totalPages || nextPage === page) return;
    setDirection(dir);
    setPage(nextPage);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const diff = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        changePage(page + 1, "next");
      } else {
        changePage(page - 1, "prev");
      }
    }

    setTouchStartX(null);
  };

  return (
    <section className={styles.skills} id="skills">
      <div className={`layout-container ${styles.container}`}>
        <h2 className={styles.title}>My skills</h2>

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
                <ul className={styles.backList}>
                  {skill.details.map((d) => (
                    <li key={d}>{d}</li>
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
              direction === "next" ? styles.slideNext : styles.slidePrev
            }`}
            onTouchStart={handleTouchStart}
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
                    {skill.details.map((d) => (
                      <li key={d}>{d}</li>
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
                onClick={() => changePage(i, i > page ? "next" : "prev")}
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

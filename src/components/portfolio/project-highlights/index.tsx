import React, { useState, useEffect } from "react";
import styles from "./project-highlights.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { projects, Project } from "./project-data";
import { TECH_ICONS } from "./tech-icons";
import { useLanguage } from "../../../contexts/LanguageContext";

const TEXT = {
  en: {
    title: "My project highlights",
    more: "↳ see more projects",
    documentation: "Documentation",
    github: "GitHub",
    mobileMoreText: (
      <>
        These projects offered a wide range of practical challenges and learning
        opportunities.
        <br />
        <br />
        They provided valuable experience in working with existing applications,
        understanding real-world configurations, and improving systems through
        structured deployment and security-aware practices.
        <br />
        <br />
        If you’re interested in learning more about the individual setups and
        solutions, feel free to explore the project documentation.
      </>
    ),
    mobileMoreBtn: "See more projects",
  },
  de: {
    title: "Projekt-Highlights",
    more: "↳ mehr Projekte ansehen",
    documentation: "Dokumentation",
    github: "GitHub",
    mobileMoreText: (
      <>
        Diese Projekte boten vielfältige praxisnahe Herausforderungen und
        Lernmöglichkeiten.
        <br />
        <br />
        Sie vermittelten wertvolle Erfahrungen im Umgang mit bestehenden
        Anwendungen, realen Konfigurationen sowie der Verbesserung von Systemen
        durch strukturierte Deployment- und sicherheitsbewusste Praktiken.
        <br />
        <br />
        Wenn du mehr über die einzelnen Setups und Lösungen erfahren möchtest,
        wirf gerne einen Blick in die Projektdokumentation.
      </>
    ),
    mobileMoreBtn: "Mehr Projekte ansehen",
  },
};

const ProjectHighlights: React.FC = () => {
  // ✅ Hook NUR hier
  const { lang } = useLanguage();
  const t = TEXT[lang];

  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  // optional, aber ok
  useEffect(() => {
    setActiveProject(projects[0]);
  }, [lang]);

  return (
    <section className={styles.section} id="projects">
      <div className={`layout-container ${styles.container}`}>
        <h2 className={styles.title}>{t.title}</h2>

        <div className={styles.wrapper}>
          {/* LEFT LIST */}
          <div className={styles.projectList}>
            <ol className={styles.list}>
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={
                    project.id === activeProject.id ? styles.active : ""
                  }
                  onClick={() => setActiveProject(project)}
                >
                  {project.title[lang]}
                </li>
              ))}
            </ol>

            <a
              className={styles.more}
              href={useBaseUrl("/docs/projects/overview/")}
            >
              {t.more}
            </a>
          </div>

          {/* DESKTOP CARD */}
          <div className={styles.desktopOnly}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{activeProject.title[lang]}</h3>

                <div className={styles.tags}>
                  {activeProject.tech.map((techKey) => {
                    const tech = TECH_ICONS[techKey];
                    if (!tech) return null;

                    return (
                      <span key={techKey} className={styles.tag}>
                        <img
                          src={useBaseUrl(tech.icon)}
                          alt={tech.label}
                          className={styles.tagIcon}
                        />
                        {tech.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className={styles.cardContent}>
                <img
                  src={useBaseUrl(activeProject.image)}
                  alt={activeProject.title[lang]}
                  className={styles.image}
                />
                <p>{activeProject.description[lang]}</p>
              </div>

              <div className={styles.actions}>
                <a className={styles.primaryBtn} href={activeProject.docUrl}>
                  {t.documentation}
                </a>
                <a
                  className={styles.secondaryBtn}
                  href={activeProject.githubUrl}
                >
                  {t.github}
                </a>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className={styles.mobileOnly}>
            {projects.slice(0, 3).map((project, index) => (
              <div key={project.id} className={styles.card}>
                <h3>
                  <span className={styles.projectIndex}>{index + 1}.</span>{" "}
                  {project.title[lang]}
                </h3>
                <p>{project.description[lang]}</p>
              </div>
            ))}

            <div className={styles.mobileMore}>
              <p className={styles.mobileMoreText}>{t.mobileMoreText}</p>
              <a
                href={useBaseUrl("/docs/projects/overview/")}
                className={styles.mobileMoreBtn}
              >
                {t.mobileMoreBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;

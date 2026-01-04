import React, { useState } from "react";
import styles from "./project-highlights.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { projects, Project } from "./project-data";
import { TECH_ICONS } from "./tech-icons";

const ProjectHighlights: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        {/* LEFT LIST (DESKTOP ONLY) */}
        <div className={styles.projectList}>
          <h2 className={styles.title}>My project highlights</h2>

          <ol className={styles.list}>
            {projects.map((project) => (
              <li
                key={project.id}
                className={project.id === activeProject.id ? styles.active : ""}
                onClick={() => setActiveProject(project)}
              >
                {project.title}
              </li>
            ))}
          </ol>

          <a
            className={styles.more}
            href={useBaseUrl("/docs/projects/overview/")}
          >
            ↳ see more projects
          </a>
        </div>

        {/* DESKTOP: SINGLE ACTIVE CARD */}
        <div className={styles.desktopOnly}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{activeProject.title}</h3>

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
                alt={activeProject.title}
                className={styles.image}
              />
              <p>{activeProject.description}</p>
            </div>

            <div className={styles.actions}>
              <a className={styles.primaryBtn} href={activeProject.docUrl}>
                Documentation
              </a>
              <a className={styles.secondaryBtn} href={activeProject.githubUrl}>
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE: 3 PROJECT CARDS */}
        <div className={styles.mobileOnly}>
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{project.title}</h3>

                <div className={styles.tags}>
                  {project.tech.map((techKey) => {
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
                  src={useBaseUrl(project.image)}
                  alt={project.title}
                  className={styles.image}
                />
                <p>{project.description}</p>
              </div>

              <div className={styles.actions}>
                <a className={styles.primaryBtn} href={project.docUrl}>
                  Documentation
                </a>
                <a className={styles.secondaryBtn} href={project.githubUrl}>
                  GitHub
                </a>
              </div>
            </div>
          ))}

          {/* MOBILE: SEE MORE SECTION (NUR EINMAL!) */}
          <div className={styles.mobileMore}>
            <p className={styles.mobileMoreText}>
              Write some information about your other projects. What other
              projects have you been working on so far?
            </p>

            <a
              href={useBaseUrl("/docs/projects/overview/")}
              className={styles.mobileMoreBtn}
            >
              See more projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;

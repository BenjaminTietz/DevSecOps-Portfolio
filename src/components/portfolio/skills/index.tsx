import React from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const skills = [
  { label: "HTML", icon: "/img/portfolio/icons/html.png" },
  { label: "CSS", icon: "/img/portfolio/icons/css.png" },
  {
    label: "Static site generator",
    icon: "/img/portfolio/icons/docusaurus.png",
  },
  { label: "Python", icon: "/img/portfolio/icons/python.png" },
  {
    label: "Shell scripting",
    icon: "/img/portfolio/icons/shell_scripting.png",
  },
  { label: "YAML", icon: "/img/portfolio/icons/yaml.png" },
  { label: "Container", icon: "/img/portfolio/icons/docker.png" },
  { label: "CI/CD with GitHub Actions", icon: "/img/portfolio/icons/cicd.png" },
  { label: "IT Security", icon: "/img/portfolio/icons/security.png" },
];

const Skills: React.FC = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>My skills</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.label} className={styles.card}>
              <img
                src={useBaseUrl(skill.icon)}
                alt={skill.label}
                className={styles.icon}
              />
              <span className={styles.label}>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

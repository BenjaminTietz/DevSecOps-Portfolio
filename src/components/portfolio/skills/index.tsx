import React from "react";
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
      "Transitions, animations and hover effect",
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

const Skills: React.FC = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>My skills</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.label} className={styles.card}>
              {/* Default view */}
              <div className={styles.front}>
                <img
                  src={useBaseUrl(skill.icon)}
                  alt={skill.label}
                  className={styles.icon}
                />
                <span className={styles.label}>{skill.label}</span>
              </div>

              {/* Hover view */}
              <div className={styles.back}>
                <h3 className={styles.backTitle}>How I used this skills</h3>
                <ul className={styles.backList}>
                  {skill.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

export interface TechMeta {
  label: string;
  icon: string;
}

export const TECH_ICONS: Record<string, TechMeta> = {
  yaml: {
    label: "YAML",
    icon: "/img/portfolio/icons/yaml.png",
  },
  shell: {
    label: "Shell scripting",
    icon: "/img/portfolio/icons/shell_scripting.png",
  },
  security: {
    label: "IT Security",
    icon: "/img/portfolio/icons/security.png",
  },
  container: {
    label: "Container",
    icon: "/img/portfolio/icons/docker.png",
  },
  ci: {
    label: "CI/CD with GitHub Actions",
    icon: "/img/portfolio/icons/cicd.png",
  },
  css: {
    label: "CSS3",
    icon: "/img/portfolio/icons/css.png",
  },
  html: {
    label: "HTML5",
    icon: "/img/portfolio/icons/html.png",
  },
  python: {
    label: "Python",
    icon: "/img/portfolio/icons/python.png",
  },
};

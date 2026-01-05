export interface TechMeta {
  label: string;
  icon: string;
  mobileIcon?: string;
}

export const TECH_ICONS: Record<string, TechMeta> = {
  yaml: {
    label: "YAML",
    icon: "/img/portfolio/icons/yaml_mobile.png",
    mobileIcon: "/img/portfolio/icons/yaml_mobile.png",
  },
  shell: {
    label: "Shell scripting",
    icon: "/img/portfolio/icons/shell_scripting_mobile.png",
    mobileIcon: "/img/portfolio/icons/shell_scripting_mobile.png",
  },
  security: {
    label: "IT Security",
    icon: "/img/portfolio/icons/security.png",
  },
  container: {
    label: "Container",
    icon: "/img/portfolio/icons/docker.png",
    mobileIcon: "/img/portfolio/icons/docker_mobile.png",
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

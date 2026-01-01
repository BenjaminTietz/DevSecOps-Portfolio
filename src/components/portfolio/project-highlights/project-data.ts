export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  docUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "minecraft",
    title: "Project Minecraft",
    description:
      "Automated Minecraft server setup with CI/CD, containerization and security hardening.",
    image: "/img/portfolio/projects/minecraft.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/minecraft-server",
    githubUrl: "https://github.com/BenjaminTietz/minecraft-server",
  },
  {
    id: "baby-tools-shop",
    title: "Baby Tools Shop",
    description:
      "E-commerce platform for baby products with integrated DevSecOps practices.",
    image: "/img/portfolio/projects/baby-tools-shop.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/baby-tools-shop",
    githubUrl: "https://github.com/BenjaminTietz/baby-tools-shop",
  },
  {
    id: "truck-signs-api",
    title: "Truck Signs API",
    description:
      "API for managing truck signs with real-time updates and secure access.",
    image: "/img/portfolio/projects/truck-signs-api.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/truck-signs-api",
    githubUrl: "https://github.com/BenjaminTietz/truck_signs_api",
  },
  {
    id: "juice-shop-meister",
    title: "Juice Shop Meister",
    description:
      "E-commerce platform for juice products with DevSecOps practices.",
    image: "/img/portfolio/projects/juice-shop-meister.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "#",
    githubUrl: "#",
  },
  {
    id: "wordpress-hosten",
    title: "WordPress Hosten",
    description:
      "E-commerce platform for hosting services with DevSecOps practices.",
    image: "/img/portfolio/projects/wordpress-hosten.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/wordpress",
    githubUrl:
      "https://benjamintietz.github.io/DevSecOps-Portfolio/docs/projects/wordpress",
  },
  {
    id: "v-server setup",
    title: "V-Server Setup",
    description:
      "Automated V-Server setup with CI/CD, containerization and security hardening.",
    image: "/img/portfolio/projects/v-server-setup.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/v-server-setup/",
    githubUrl: "https://github.com/BenjaminTietz/v-server-setup",
  },
  {
    id: "conduit-deployment",
    title: "Conduit Deployment",
    description:
      "Automated Conduit deployment with CI/CD, containerization and security hardening.",
    image: "/img/portfolio/projects/conduit-deploy.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-deploy",
    githubUrl: "https://github.com/BenjaminTietz/conduit-deployment",
  },
  {
    id: "conduit-compose",
    title: "Conduit Compose",
    description:
      "Automated Conduit deployment with CI/CD, containerization and security hardening.",
    image: "/img/portfolio/projects/conduit-deploy.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-compose",
    githubUrl: "https://github.com/BenjaminTietz/conduit-compose",
  },
];

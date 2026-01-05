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
      "Deployment of a containerized Minecraft server using Docker. This project provided a hands-on introduction to container-based services, basic networking, and verifying service availability in a practical environment.",
    image: "/img/portfolio/projects/minecraft.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/minecraft-server",
    githubUrl: "https://github.com/BenjaminTietz/minecraft-server",
  },
  {
    id: "truck-signs-api",
    title: "Truck Signs API",
    description:
      "Deployment and analysis of a Django REST API. This project emphasized working with existing configurations, understanding API behavior in production-like environments, and improving reliability through structured deployment practices.",
    image: "/img/portfolio/projects/truck-signs-api.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/truck-signs-api",
    githubUrl: "https://github.com/BenjaminTietz/truck_signs_api",
  },
  {
    id: "juice-shop-meister",
    title: "Juice Shop Meister",
    description:
      "A security-focused project centered around the OWASP Juice Shop. The project involves selecting, solving, and documenting multiple hacking challenges from different categories, supported by short explanatory videos and structured markdown documentation. It emphasizes practical web security testing, responsible vulnerability analysis, and clear communication of security risks and mitigation concepts.",
    image: "/img/portfolio/projects/juice-shop.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "#",
    githubUrl: "#",
  },
  {
    id: "conduit-deployment",
    title: "Conduit Deployment",
    description:
      "Deployment of a fullstack application consisting of an Angular frontend and a Django backend. The project emphasized coordinating frontend and backend services and deploying multi-component applications in a consistent environment.",
    image: "/img/portfolio/projects/conduit-container.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-deploy",
    githubUrl: "https://github.com/BenjaminTietz/conduit-deployment",
  },
  {
    id: "conduit-compose",
    title: "Conduit Compose",
    description:
      "Docker Compose-based orchestration of a multi-service application. This project focused on defining service dependencies, managing configuration through code, and running complex setups in a reproducible local and server environment.",
    image: "/img/portfolio/projects/conduit.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-compose",
    githubUrl: "https://github.com/BenjaminTietz/conduit-compose",
  },
];

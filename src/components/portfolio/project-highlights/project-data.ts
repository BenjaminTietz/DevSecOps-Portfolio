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
      "A community-provided Minecraft server image deployed with Docker and verified using a ping. A gentle introduction to containerization, proving that if the container starts, the server probably exists.",
    image: "/img/portfolio/projects/minecraft.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/minecraft-server",
    githubUrl: "https://github.com/BenjaminTietz/minecraft-server",
  },
  {
    id: "baby-tools-shop",
    title: "Baby Tools Shop",
    description:
      "A legacy Django fullstack application — partially broken, unexpectedly documented in Turkish, and containerized as-is. A real-world lesson in working with inherited software you didn’t choose.",
    image: "/img/portfolio/projects/babyshop.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/baby-tools-shop",
    githubUrl: "https://github.com/BenjaminTietz/baby-tools-shop",
  },
  {
    id: "truck-signs-api",
    title: "Truck Signs API",
    description:
      "A severely misconfigured Django API with broken defaults, unclear structure, and creative security assumptions. Notable for inspiring the legendary advice to create a superuser using a flag that does not exist — yet still receiving approval.",
    image: "/img/portfolio/projects/truck-signs-api.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/truck-signs-api",
    githubUrl: "https://github.com/BenjaminTietz/truck_signs_api",
  },
  {
    id: "juice-shop-meister",
    title: "Juice Shop Meister",
    description:
      "A small e-commerce-style project focused on containerization and deployment. Demonstrates that packaging software securely does not automatically improve the software itself.",
    image: "/img/portfolio/projects/juice-shop-meister.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "#",
    githubUrl: "#",
  },
  {
    id: "wordpress-hosten",
    title: "WordPress Hosten",
    description:
      "Classic WordPress deployment using Docker and MariaDB. Straightforward, predictable, and a reminder that not every DevSecOps task needs to be dramatic to be functional.",
    image: "/img/portfolio/projects/wordpress.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/wordpress",
    githubUrl:
      "https://benjamintietz.github.io/DevSecOps-Portfolio/docs/projects/wordpress",
  },
  {
    id: "v-server setup",
    title: "V-Server Setup",
    description:
      "Initial V-Server provisioning and container deployment. Also known as the project that later received an external security notification due to an exposed database port — a far more effective review than any checklist.",
    image: "/img/portfolio/projects/v-server.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/v-server-setup/",
    githubUrl: "https://github.com/BenjaminTietz/v-server-setup",
  },
  {
    id: "conduit-deployment",
    title: "Conduit Deployment",
    description:
      "Deployment of a legacy Angular frontend (partially upgraded) combined with a Django backend using insecure default configurations. Particularly educational in highlighting the gap between deployment success and data protection compliance.",
    image: "/img/portfolio/projects/conduit-deploy.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-deploy",
    githubUrl: "https://github.com/BenjaminTietz/conduit-deployment",
  },
  {
    id: "conduit-compose",
    title: "Conduit Compose",
    description:
      "Docker Compose-based deployment of the Conduit application. Technically functional, legally questionable, and a strong reminder that DevSecOps does not end at `docker compose up` — especially when privacy regulations exist.",
    image: "/img/portfolio/projects/conduit-container.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-compose",
    githubUrl: "https://github.com/BenjaminTietz/conduit-compose",
  },
];

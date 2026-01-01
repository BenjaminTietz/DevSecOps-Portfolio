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
    docUrl: "#",
    githubUrl: "#",
  },
  {
    id: "baby-tools-shop",
    title: "Baby Tools Shop",
    description:
      "E-commerce platform for baby products with integrated DevSecOps practices.",
    image: "/img/portfolio/projects/baby-tools-shop.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "#",
    githubUrl: "#",
  },
  {
    id: "truck-signs-api",
    title: "Truck Signs API",
    description:
      "API for managing truck signs with real-time updates and secure access.",
    image: "/img/portfolio/projects/truck-signs-api.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "#",
    githubUrl: "#",
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
    docUrl: "#",
    githubUrl: "#",
  },
];

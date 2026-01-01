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
];

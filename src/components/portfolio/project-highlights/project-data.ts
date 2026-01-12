export type Lang = "en" | "de";

export interface Project {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  image: string;
  tech: string[];
  docUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "minecraft",
    title: {
      en: "Project Minecraft",
      de: "Projekt Minecraft",
    },
    description: {
      en: "Deployment of a containerized Minecraft server using Docker. This project provided a hands-on introduction to container-based services, basic networking, and verifying service availability in a practical environment.",
      de: "Deployment eines containerisierten Minecraft-Servers mit Docker. Dieses Projekt bot einen praxisnahen Einstieg in containerbasierte Services, grundlegendes Networking und die Überprüfung der Service-Verfügbarkeit.",
    },
    image: "/img/portfolio/projects/minecraft.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/minecraft-server",
    githubUrl: "https://github.com/BenjaminTietz/minecraft-server",
  },

  {
    id: "truck-signs-api",
    title: {
      en: "Truck Signs API",
      de: "Truck Signs API",
    },
    description: {
      en: "Deployment and analysis of a Django REST API. This project emphasized working with existing configurations, understanding API behavior in production-like environments, and improving reliability through structured deployment practices.",
      de: "Deployment und Analyse einer Django REST API. Der Fokus lag auf dem Arbeiten mit bestehenden Konfigurationen, dem Verständnis von API-Verhalten in produktionsnahen Umgebungen sowie der Steigerung der Zuverlässigkeit durch strukturierte Deployment-Praktiken.",
    },
    image: "/img/portfolio/projects/truck-signs-api.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/truck-signs-api",
    githubUrl: "https://github.com/BenjaminTietz/truck_signs_api",
  },

  {
    id: "juice-shop-meister",
    title: {
      en: "Juice Shop Meister",
      de: "Juice Shop Meister",
    },
    description: {
      en: "A security-focused project centered around the OWASP Juice Shop. It involves solving and documenting multiple hacking challenges, supported by explanatory videos and structured markdown documentation.",
      de: "Ein sicherheitsfokussiertes Projekt rund um den OWASP Juice Shop. Es umfasst das Lösen und Dokumentieren verschiedener Hacking-Challenges, ergänzt durch erklärende Videos und strukturierte Markdown-Dokumentation.",
    },
    image: "/img/portfolio/projects/juice-shop.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "#",
    githubUrl: "#",
  },

  {
    id: "conduit-deployment",
    title: {
      en: "Conduit Deployment",
      de: "Conduit Deployment",
    },
    description: {
      en: "Deployment of a fullstack application consisting of an Angular frontend and a Django backend. The project focused on coordinating frontend and backend services in a consistent deployment environment.",
      de: "Deployment einer Fullstack-Anwendung bestehend aus Angular-Frontend und Django-Backend. Der Fokus lag auf der Koordination von Frontend- und Backend-Services in einer konsistenten Deployment-Umgebung.",
    },
    image: "/img/portfolio/projects/conduit-container.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-deploy",
    githubUrl: "https://github.com/BenjaminTietz/conduit-deployment",
  },

  {
    id: "conduit-compose",
    title: {
      en: "Conduit Compose",
      de: "Conduit Compose",
    },
    description: {
      en: "Docker Compose-based orchestration of a multi-service application. The project emphasized defining service dependencies and running complex setups in a reproducible environment.",
      de: "Docker-Compose-basierte Orchestrierung einer Multi-Service-Anwendung. Der Schwerpunkt lag auf der Definition von Service-Abhängigkeiten und reproduzierbaren Setups.",
    },
    image: "/img/portfolio/projects/conduit.png",
    tech: ["yaml", "shell", "security", "container"],
    docUrl: "docs/projects/conduit-compose",
    githubUrl: "https://github.com/BenjaminTietz/conduit-compose",
  },
];

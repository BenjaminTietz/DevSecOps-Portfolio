import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

/* TODO: change to read configuration from environment */
const blogEnabled = false;

const moreColumn = {
  title: "More",
  items: [
    {
      label: "GitHub",
      href: "https://github.com/BenjaminTietz",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/benjamin-tietz/",
    },
  ],
};
if (blogEnabled) {
  moreColumn.items.push({
    label: "Blog",
    href: "/blog",
  });
}

const config: Config = {
  title: "DSO Portfolio & Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://BenjaminTietz.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/DevSecOps-Portfolio/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BenjaminTietz", // Usually your GitHub org/user name.
  projectName: "DevSecOps-Portfolio", // Usually your repo name.

  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BenjaminTietz/DevSecOps-Portfolio",
        },
        blog: blogEnabled
          ? {
              showReadingTime: true,
              feedOptions: {
                type: ["rss", "atom"],
                xslt: true,
              },
              // Please change this to your repo.
              // Remove this to remove the "edit this page" links.
              editUrl: "https://github.com/BenjaminTietz/DevSecOps-Blog",
              // Useful options to enforce blogging best practices
              onInlineTags: "warn",
              onInlineAuthors: "warn",
              onUntruncatedBlogPosts: "warn",
            }
          : false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "DevSecOps Portfolio",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/BenjaminTietz",
          label: "Github",
          position: "right",
        },
        {
          href: "https://benjamin-tietz.com/",
          label: "Fullstack Portfolio",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Full-Stack Developer",
              to: "https://benjamin-tietz.com/",
            },
            {
              label: "DevSecOps Engineer",
              to: "https://benjamintietz.github.io/DevSecOps-Portfolio",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "DevSecOps Guides",
              to: "/docs",
            },
            {
              label: "Penetration Testing",
              to: "/docs/pentesting/overview",
            },
          ],
        },
        moreColumn,
      ],
      copyright: `
    © ${new Date().getFullYear()} Benjamin Tietz <br/>
    Full-Stack Developer & DevSecOps Engineer<br/>
    Built with Docusaurus and ❤️
  `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "hcl"],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

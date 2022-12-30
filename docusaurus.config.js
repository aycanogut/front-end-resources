// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Frontend Resources",
  tagline: "A useful toolbox for you!",
  url: "https://fe-resources.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "aycanogut", // Usually your GitHub org/user name.
  projectName: "front-end-resources", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Frontend Resources",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Resources",
          },
          {
            href: "https://github.com/aycanogut/front-end-resources",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "API",
                to: "docs/category/api",
              },
              {
                label: "CSS",
                to: "/docs/category/css",
              },
              {
                label: "Data Structures and Algorithms",
                to: "/docs/category/data-structures-and-algorithms",
              },
              {
                label: "Design",
                to: "/docs/category/design",
              },
              {
                label: "Frontend Resources",
                to: "/docs/category/frontend-resources",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Git / Github",
                to: "/docs/category/git--github",
              },
              {
                label: "HTML",
                to: "/docs/category/html",
              },
              {
                label: "JavaScript",
                to: "/docs/category/javascript",
              },
              {
                label: "React",
                to: "/docs/category/react",
              },
              {
                label: "TypeScript",
                to: "/docs/category/typescript",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/aycanogut/front-end-resources",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Frontend Resources, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

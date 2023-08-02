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
          routeBasePath: '/',
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
                to: "category/api",
              },
              {
                label: "CSS",
                to: "category/css",
              },
              {
                label: "Data Structures and Algorithms",
                to: "category/data-structures-and-algorithms",
              },
              {
                label: "Design",
                to: "category/design",
              },
              {
                label: "Frontend Resources",
                to: "category/frontend-resources",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Git / Github",
                to: "/category/git--github",
              },
              {
                label: "HTML",
                to: "/category/html",
              },
              {
                label: "JavaScript",
                to: "/category/javascript",
              },
              {
                label: "React",
                to: "/category/react",
              },
              {
                label: "TypeScript",
                to: "/category/typescript",
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
      defaultMode: 'dark',
    }),
};

module.exports = config;

import { themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const setupDoc = "docs/basic/setup";

const config: Config = {
  favicon: "img/icon.png",
  title: "Waitemata Lodge 689", // Title for your website.
  tagline: "The oldest English Constitution lodge in New Zealand",
  url: "http://localhost:3000", // Your website URL
  baseUrl: "/",
  projectName: "react-typescript-cheatsheet",
  organizationName: "typescript-cheatsheets",

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        // Pages moved when the menu was restructured (#820). Keep old URLs
        // working so links out on the web don't break.
        redirects: [
          {
            from: "/docs/advanced/patterns_by_usecase",
            to: "/docs/basic/getting-started/patterns_by_usecase",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          // Docs folder path relative to website dir.
          path: "../docs",
          // Sidebars file relative to website dir.
          //sidebarPath: require.resolve("./sidebars.js"),
          sidebarPath: "./sidebars.js",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },

    image:
      "https://user-images.githubusercontent.com/6764957/53868378-2b51fc80-3fb3-11e9-9cee-0277efe8a927.png",

    prism: {
      defaultLanguage: "typescript",
      theme: themes.github,
      darkTheme: themes.dracula,
    },

    navbar: {
      title: "Waitemata Lodge 689",
      logo: {
        alt: "Logo",
        src: "img/icon.png",
      },
      items: [
        {
          to: "/",
          label: "Home",
          position: "right",
        },
        {
          to: "questionnaire",
          label: "Questionnaire",
          position: "right",
        },
        {
          to: "about",
          label: "About",
          position: "right",
        },
        {
          to: "meetings",
          label: "Meetings",
          position: "right",
        },
        {
          to: "faqs",
          label: "FAQs",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      logo: {
        alt: "TypeScript Cheatsheets Logo",
        src: "img/icon.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Waitemata Lodge 689`,
      links: [
        {
          title: "Contact",
          items: [
            {
              label: "Introduction",
              to: setupDoc,
            },
            {
              label: "Location",
              to: "https://maps.app.goo.gl/1fhpEbD7Vau4B6kL7",
            },
            {
              label: "9 Robert Street, Ellerslie, Auckland 1051",
              to: "https://maps.app.goo.gl/1fhpEbD7Vau4B6kL7",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Charities",
              href: "https://freemasonsnz.org/charities/",
            },
            {
              label: "Contributors",
              to: "contributors",
            },
            {
              label: "Email",
              to: "contributing",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Freemasons New Zealand",
              href: "https://freemasonsnz.org/",
            },
          ],
        },
      ],
    },

    algolia: {
      apiKey: "9a22585d1841d2fa758da919cd08a764",
      indexName: "react-typescript-cheatsheet",
      appId: "J65EL4UPXZ",
    },
  } satisfies Preset.ThemeConfig,

  customFields: {
    firstDoc: setupDoc,
  },
};

export default config;

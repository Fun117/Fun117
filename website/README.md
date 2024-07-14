# Next.js Template

This project is a Next.js template aimed at providing a robust starting point for building modern web applications. It comes with pre-configured localization support, theme toggling, and various other features to streamline development.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository.
2. Change to the template directory with `cd website`.
3. Install the dependencies with `npm install` or `yarn install`.
4. Run the development server with `npm run dev` or `yarn dev`.

## Configuring the Template

The template includes a configuration file located at `richtpl.config.tsx`. Below is a description of how to configure the different options available in this file.

- title (string, optional): The title of the website.
- description (string, optional): A brief description of the website.
- tagline (string): A short tagline welcoming visitors to the site.
- favicon (string, optional): URL to the favicon image.
- url (string): The production URL of the website.
- baseUrl (string, optional): The base URL pathname for the site. (Currently you need to set `baseUrl` yourself in `next.config`)
- organizationName (string): GitHub organization or user name.
- projectName (string): GitHub repository name.
- i18n (i18n): Internationalization settings including default locale, supported locales, and locale-specific configurations.
- themeConfig (ThemeConfig): Theme and layout configuration including color modes, header, footer, and metadata.

### Example Usage

```tsx
import Config from "./config"; // Assuming your TypeScript file is named 'config.ts'

// Example configuration object
const config: Config = {
  title: "My Website",
  description: "This is a sample website built with Next.js and React.",
  tagline: "Welcome to our website!",

  url: "https://www.example.com",
  baseUrl: "/",

  organizationName: "myorg",
  projectName: "myproject",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "jp"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en",
        path: "/en",
      },
      fr: {
        label: "Français",
        htmlLang: "fr",
        path: "/fr",
      },
      jp: {
        label: "日本語",
        htmlLang: "ja",
        path: "/jp",
      },
    },
    selectButton: true,
  },

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      selectSwitch: true,
    },
    header: {
      title: "My Website",
      logo: {
        type: "Vercel&Next.js",
        content: <img src="/logo.svg" alt="Logo" />,
      },
      items: {
        left: [
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
        ],
        right: [
          {
            label: "GitHub",
            href: "https://github.com/myorg/myproject",
            target: "_blank",
          },
        ],
        project: {
          repository: "block",
        },
      },
    },
    footer: {
      title: "Footer",
      logo: {
        type: "Vercel",
        content: <img src="/vercel-logo.svg" alt="Vercel Logo" />,
      },
      social: {
        github: true,
        twitter: "@myhandle",
      },
      footerText: {
        text: "© 2024 My Website",
        i18n: false,
      },
      items: [
        {
          title: "Links",
          contents: [
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms of Use", to: "/terms" },
          ],
        },
      ],
    },
  },
};

export default config;
```

This example demonstrates a basic setup for a website configuration using the Config type. Adjust the fields according to your specific website's requirements and design preferences.

# Project Details

For more details about this project, please visit [Next.js Rich Template](https://nextjs-rich-tpl.vercel.app).

# Call for Contributions

The documentation for this template is not comprehensive, and we welcome anyone who is willing to help improve it. Contributors will be acknowledged on this page. If you would like to contribute, please check our GitHub repository for more details.

import Config from "@/types/richtpl.config";

/**
 * Site configuration object.
 * Contains general site information, i18n settings, and theme configuration.
 */
const config: Config = {
  // Tagline for the site
  tagline: "portfolio,profile",

  // URL to the favicon
  favicon: "/favicon.ico",

  // Production URL of the site
  url: "https://fun117.dev",

  // Base URL pathname (for GitHub Pages deployment)
  baseUrl: "/",

  // GitHub deployment configuration
  organizationName: "fun117", // GitHub organization/user name
  projectName: "fun117", // GitHub repository name

  // Internationalization (i18n) configuration
  i18n: {
    // Default locale for the site
    defaultLocale: "ja",
    // List of supported locales
    locales: ["ja", "en"],
    // Locale-specific configurations
    localeConfigs: {
      ja: {
        label: "日本語", // Label for the Japanese locale
        htmlLang: "ja-JP", // HTML language attribute for Japanese
        path: "ja", // Path prefix for Japanese locale
      },
      en: {
        label: "English", // Label for the English locale
        htmlLang: "en-US", // HTML language attribute for English
        path: "en", // Path prefix for English locale
      },
    },
    selectButton: true, // Option to include a locale selection button
  },

  // Theme and layout configuration
  themeConfig: {
    // Color mode settings
    colorMode: {
      defaultMode: "system", // Default color mode (light, dark, or system)
      selectSwitch: true, // Whether to allow switching color modes
    },
    // URL to the social card image (replace with your project's image)
    image: "/image/upload/front/nextjs/twitter-card.png",
    // Metadata for the site
    metadata: {
      keywords: [
        "Template",
        "i18n",
        "template",
        "Next.js",
        "autoprefixer",
        "rich",
        "tailwindcss",
        "framer-motion",
        "next-themes",
        "vercel-hosting",
        "next-intl",
        "lucide-icons",
      ],
      authors: { name: "Fun117", url: "https://fun117.dev" },
      creator: "Fun117",
      icons: { icon: "/favicon.ico", apple: "/favicon.png" },
      generator: "Next.js",
      publisher: "Vercel",
      robots: "follow, index",
      metadataBase: new URL("https://fun117.dev"),
    },
    // Header configuration
    header: {
      // Title for the header
      title: "Fun117",
      // Logo configuration
      // logo: {
      //   type: "Vercel&Next.js", // Type of logo
      // },
      // Navigation items in the header
      items: {
        // Items on the left side of the header
        left: [
          {
            label: "Home", // Label for the item
            to: "/", // Internal URL path
            i18n_link: true, // Whether to include locale prefix in the URL
            i18n_text: true, // Whether to include locale prefix in the Text
          },
          {
            label: "Projects", // Label for the item
            to: "/projects", // Internal URL path
            i18n_link: true, // Whether to include locale prefix in the URL
            i18n_text: true, // Whether to include locale prefix in the Text
          },
        ],
        project: {
          repository: "block", // Display the repository link in the header
        },
      },
    },
    // Footer configuration
    footer: {
      // Title for the footer
      title: "Fun117",
      // Logo configuration
      // logo: {
      //   type: "Vercel", // Type of logo
      // },
      // Social links configuration
      social: {
        github: true, // Whether to include a GitHub link
        twitter: "Fun_117", // Twitter handle
      },
      footerText: {
        i18n: true, // Whether the footer text should be localized
      },
      // Footer navigation items
      items: [
        {
          title: "Resources", // Title for the section
          title_i18n: true, // Whether the title should be localized
          contents: [
            {
              label: "Scratch Building",
              href: "https://scratch-building.vercel.app",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "SafeEncode",
              href: "https://safe-encode.vercel.app",
              target: "_blank",
            },
            {
              label: "Generated",
              href: "https://generated.vercel.app",
              target: "_blank",
            },
            {
              label: "NowTime",
              href: "https://nowtime.vercel.app",
              target: "_blank",
            },
            {
              label: "Repository Template",
              href: "https://github.com/Fun117/repository-template",
              target: "_blank",
            },
          ],
        },
        {
          title: "Projects",
          title_i18n: true,
          contents: [
            {
              label: "Next&#46;js Rich Template",
              href: "https://nextjs-rich-tpl.vercel.app",
              target: "_blank",
              i18n_text: true
            },
            {
              label: "Scratch Auth React",
              href: "https://www.npmjs.com/package/scratch-auth-react",
              target: "_blank",
            },
            {
              label: "Scratch Cloud Logs",
              href: "https://github.com/fun117/scratch-cloud-logs",
              target: "_blank",
            },
            {
              label: "Zshmgr",
              href: "https://zshmgr.vercel.app",
              target: "_blank",
            },
          ],
        },
        {
          title: "About Fun117",
          title_i18n: true,
          contents: [
            {
              label: "Patreon",
              href: "https://patreon.com/Fun117?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",
              target: "_blank",
            },
            {
              label: "Open Collective",
              href: "https://opencollective.com/fun117",
              target: "_blank",
            },
            {
              label: "GitHub",
              href: "https://github.com/fun117",
              target: "_blank",
            },
            {
              label: "X",
              href: "https://twitter.com/fun_117",
              target: "_blank",
            },
          ],
        },
      ],
    },
    // Sitemap Configuration
    sitemap: {
      excludedDirs: [
        "error", // Directory for error pages
        "not-found", // Directory for 404 pages
        "[...rest]", // Directory for [...rest] pages
      ],
    },
  },
};

export default config;

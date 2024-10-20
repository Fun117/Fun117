import Config from "@/types/richtpl.config";
import { Book, BookUser, Home } from "lucide-react";

/**
 * Site configuration object.
 * Contains general site information, i18n settings, and theme configuration.
 */
const config: Config = {
  // Tagline for the site
  tagline: "Fun117",

  // URL to the favicon
  favicon: "/wp-content/fun117/new/rounded/256x256.ico",

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
    // image: "/image/upload/front/nextjs/twitter-card.png",
    // Metadata for the site
    metadata: {
      keywords: [
        "website",
        "portfolio",
        "profile",
        "fun117",
        "developer",
        "software engineer",
      ],
      authors: { name: "Fun117", url: "https://fun117.dev" },
      creator: "Fun117",
      icons: {
        icon: "/wp-content/fun117/new/rounded/256x256.ico",
        apple: "/wp-content/fun117/new/rounded/400x400.png",
      },
      generator: "Next.js",
      publisher: "Vercel",
      robots: "follow, index",
      metadataBase: new URL("https://fun117.dev"),
    },
    SearchCommand: [
      {
        label: "Pages",
        i18n_text: true,
        items: [
          {
            label: "Home",
            icon: <Home />,
            to: "/",
            i18n_text: true,
          },
          {
            label: "Contacts",
            icon: <BookUser />,
            to: "/contacts",
            i18n_text: true,
            i18n_link: true,
          },
        ],
      },
    ],
    // Header configuration
    header: {
      // Title for the header
      title: "Fun117",
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
            label: "Pages.Contacts.Metadata.title", // Label for the item
            to: "/contacts", // Internal URL path
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
          title: "Projects", // Title for the section
          contents: [
            {
              label: "Telrchat",
              href: "https://telrchat.netlify.app",
              target: "_blank",
            },
            {
              label: "Next.js Rich Template",
              href: "https://nextjs-rich-tpl.vercel.app",
              target: "_blank",
            },
            {
              label: "Scratch Auth",
              href: "https://scratch-auth.netlify.app",
              target: "_blank",
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
          ],
        },
        {
          title: "More",
          title_i18n: true,
          contents: [
            {
              label: "Next&#46;js Commerce",
              href: "https://vercel.com/templates/next.js/nextjs-commerce?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Contact Sales",
              href: "https://vercel.com/contact/sales?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "GitHub",
              href: "https://github.com/vercel/next.js",
              target: "_blank",
            },
            {
              label: "Releases",
              href: "https://github.com/vercel/next.js/releases",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Telemetry",
              href: "https://nextjs.org/telemetry",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Governance",
              href: "https://nextjs.org/governance",
              target: "_blank",
              i18n_text: true,
            },
          ],
        },
        {
          title: "About Vercel",
          title_i18n: true,
          contents: [
            {
              label: "Next&#46;js + Vercel",
              href: "https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Open Source Software",
              href: "https://vercel.com/oss?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "GitHub",
              href: "https://github.com/vercel",
              target: "_blank",
            },
            {
              label: "X",
              href: "https://twitter.com/vercel",
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

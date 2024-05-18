import { _config } from "../_config";

/**
 * @typedef {"ja"} DefaultLocale
 * @typedef {DefaultLocale | "en-US"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  ja: "日本語",
  "en-US": "English",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  ja: "日本を拠点とする情熱的なプログラマーであり、Next.jsに熱心で、Web開発に重点を置いています。",
  "en-US": "A passionate programmer based in Japan, enthusiastic about Next.js and focused on web development.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  ja: "日本を拠点に活動している情熱的なプログラマーです。特にNext.jsやWeb開発に専念しています。Webアプリケーション、ウェブサイト、eコマースプラットフォーム、データベースの開発に積極的に関わっています。",
  "en-US":
    "A Next.js enthusiast with a focus on web development. Passionate about building with Next.js and actively involved in developing web applications, websites, e-commerce sites, and databases.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  ja: "ご質問は？ご意見をお聞かせください。",
  "en-US": "Question? Give us feedback →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  ja: "Github で編集する →",
  "en-US": "Edit this page on GitHub →",
};

/** @type {Readonly<Record<Locale, { text: string; copyright?: string }>>} */
export const footerTextMap = {
  ja: {
    text: "提供",
    copyright: `著作権 © ${new Date().getFullYear()} ${
      _config.author.name
    }.
    Nextraで構築されています。`,
  },
  "en-US": {
    text: "Powered by",
    copyright: `Copyright © ${new Date().getFullYear()} ${
      _config.author.name
    }.
  Built with Nextra.`,
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  ja: "このページについて",
  "en-US": "On This Page",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  ja: "ドキュメントを検索...",
  "en-US": "Search documentation...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  ja: "最終更新日",
  "en-US": "Last updated on",
};

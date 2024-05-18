import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Logo from "./components/logo";
import Vercel from "./components/vercel";
import useLocalesMap from "./components/use-locales-map";
import {
  editTextMap,
  feedbackLinkMap,
  footerTextMap,
  gitTimestampMap,
  headDescriptionMap,
  languageMap,
  searchPlaceholderMap,
  tableOfContentsTitleMap,
  titleMap,
} from "./translations/text";
import { _config } from "./_config";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  project: {
    link: _config.repoUrl,
  },
  docsRepositoryBase: _config.docsRepositoryBase,
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${_config.title}`,
    };
  },
  toc: {
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  search: {
    component: <></>,
    placeholder: () => useLocalesMap(searchPlaceholderMap),
  },
  editLink: {
    text: () => useLocalesMap(editTextMap),
  },
  feedback: {
    content: () => useLocalesMap(feedbackLinkMap),
  },
  logo: () => {
    const title = useLocalesMap(titleMap);
    return (
      <>
        <Logo height={30} />
        <span
          className="mx-2 font-extrabold italic hidden md:inline select-none"
          title={`${_config.title}: ${title}`}
        >
          {_config.title}
        </span>
      </>
    );
  },
  head: () => {
    const { route, locales, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = useLocalesMap(titleMap);
    const description = useLocalesMap(headDescriptionMap);

    const imageUrl = new URL(_config.origin);

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title || titleSuffix);
    }

    const contentLanguage = locales.join(", ");
    const ogTitle = title
      ? `${title} – ${_config.title}`
      : `${_config.title}: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;
    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta httpEquiv="Content-Language" content={contentLanguage} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content={_config.title} />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${_config.title}`} />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale} />
        {locales
          .filter((l) => l !== locale)
          .map((l) => (
            <meta property="og:locale:alternate" content={l} key={l} />
          ))}
      </>
    );
  },
  footer: {
    text: () => {
      const { text, copyright } = useLocalesMap(footerTextMap);

      return (
        <div className="flex flex-col gap-1 items-center sm:items-start w-full">
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener"
            title="vercel.com homepage"
            href="https://vercel.com"
          >
            <span>{text}</span>
            <Vercel />
          </a>
          <a
            href={_config.author.url}
            target="_block"
            rel="noopener"
            title="Author url"
          >
            <p className="mt-6 text-xs">
              {copyright}
            </p>
          </a>
        </div>
      );
    },
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    const lastUpdatedOn = useLocalesMap(gitTimestampMap);

    return (
      <>
        {lastUpdatedOn}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),
};

export default themeConfig;

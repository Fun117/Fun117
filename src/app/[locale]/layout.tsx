import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// config
import config from "../../../richtpl.config";

// next-intl (i18n)
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { CustomCursor } from "@/components/ui/mouse-pointer";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";

export type LayoutProps = {
  locale: string;
};

export async function generateMetadata(props: {
  params: LayoutProps;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const header = await headers();
  const pathname = header.get("x-pathname");
  const path = pathname ? pathname : "";

  const generateAlternates = () => {
    const alternates: {
      canonical: string;
      languages: { [key: string]: string };
    } = {
      canonical: `${config.url}${path}`,
      languages: {},
    };

    for (const locale of config.i18n.locales) {
      const localeConfig = config.i18n.localeConfigs[locale];
      const cleanPath = path.replace(`/${locale}`, ""); // Remove current locale from path
      alternates.languages[
        localeConfig.htmlLang
      ] = `${config.url}/${localeConfig.path}${cleanPath}`;
    }

    return alternates;
  };

  return {
    title: {
      template: `%s | ${
        config.themeConfig?.metadata?.title || config.title || t(`title`)
      }`,
      default: `${
        config.themeConfig?.metadata?.title || config.title || t(`title`)
      }`,
    },
    description: `${
      config.themeConfig?.metadata?.title ||
      config.description ||
      t(`description`)
    }`,
    referrer:
      config.themeConfig?.metadata?.referrer || "origin-when-cross-origin",
    keywords: config.themeConfig?.metadata?.keywords || ["Vercel", "Next.js"],
    authors: config.themeConfig?.metadata?.authors || [
      { name: "Fun117", url: "https://fun117.dev" },
    ],
    creator: config.themeConfig?.metadata?.creator || "Fun117",
    icons: config.favicon || "/favicon.ico",
    generator: config.themeConfig?.metadata?.generator || "Next.js",
    publisher: config.themeConfig?.metadata?.publisher || "Vercel",
    robots: config.themeConfig?.metadata?.robots || "follow, index",
    metadataBase:
      config.themeConfig?.metadata?.metadataBase || new URL(config.url),
    alternates: generateAlternates(),
    openGraph: {
      type: "website",
      url: config.url,
      siteName:
        config.themeConfig?.metadata?.openGraph?.siteName ||
        config.title ||
        t(`title`),
      title:
        config.themeConfig?.metadata?.openGraph?.title ||
        config.title ||
        t(`title`),
      description:
        config.themeConfig?.metadata?.openGraph?.description ||
        config.description ||
        t(`description`),
      images:
        config.themeConfig.metadata?.openGraph?.images ||
        config.themeConfig.image,
      locale:
        config.themeConfig?.metadata?.openGraph?.locale ||
        config.i18n.localeConfigs[locale].htmlLang ||
        "ja-JP",
    },
    twitter: {
      card: "summary_large_image",
      site: `@${
        config.themeConfig?.metadata?.twitter?.site ||
        config.themeConfig?.metadata?.creator ||
        "Fun_117"
      }`,
      title:
        config.themeConfig?.metadata?.twitter?.title ||
        config.title ||
        t(`title`),
      description:
        config.themeConfig?.metadata?.twitter?.description ||
        config.description ||
        t(`description`),
      creator: `@${
        config.themeConfig?.metadata?.twitter?.creator ||
        config.themeConfig?.metadata?.creator ||
        "Fun_117"
      }`,
      images:
        config.themeConfig.metadata?.twitter?.images ||
        config.themeConfig.image,
    },
    ...config.themeConfig?.metadata,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutProps;
}) {
  const gaId = process.env.GA_ID || "";

  const { locale } = await params;
  if (!config.i18n.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="bg-white">
      <body
        className={`${inter.className} relative w-full h-full min-h-dvh overflow-x-clip`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Provider>
            {children}
            <Toaster />
          </Provider>
          <CustomCursor />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

import config from "../../richtpl.config";

export default function robots(): MetadataRoute.Robots {
  const allow: string[] = [];

  for (const lang of config.i18n.locales) {
    const langConfig = config.i18n.localeConfigs[lang];

    const dirPath = path.join(process.cwd(), `src/app/[locale]`);

    allow.push(`/${langConfig.path}`);

    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });

      for (const item of items) {
        if (
          item.isDirectory() &&
          !config.themeConfig.sitemap?.excludedDirs?.includes(item.name)
        ) {
          const pagePath = path.join(dirPath, item.name, "page.tsx");
          if (fs.existsSync(pagePath)) {
            const url = `/${langConfig.path}/${item.name}`;

            allow.push(url);
          }
        }
      }
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: allow,
      disallow: ["/api"],
    },
    sitemap: `${config.url}/sitemap.xml`,
    host: config.url,
  };
}

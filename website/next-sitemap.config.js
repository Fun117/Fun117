/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fun117.dev",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["*/_meta"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"],
      },
    ],
  },
};

import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra();
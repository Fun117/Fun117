import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandPowershell,
  IconBrandPython,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTypescript,
  IconMarkdown,
  IconProps,
} from "@tabler/icons-react";
import React from "react";

type Icon = React.FunctionComponent<IconProps>;

export type technologiesType = {
  name: string;
  // icon: (props: IconProps) => React.JSX.Element;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
};

export const technologies: technologiesType[] = [
  { name: "md", icon: IconMarkdown, label: "MD" },
  { name: "html", icon: IconBrandHtml5, label: "HTML" },
  { name: "css", icon: IconBrandCss3, label: "CSS" },
  { name: "php", icon: IconBrandPhp, label: "PHP" },
  { name: "javascript", icon: IconBrandJavascript, label: "JavaScript" },
  { name: "typescript", icon: IconBrandTypescript, label: "TypeScript" },
  { name: "python", icon: IconBrandPython, label: "Python" },
  { name: "shell", icon: IconBrandPowershell, label: "Shell" },
  { name: "react", icon: IconBrandReact, label: "React" },
  { name: "nextjs", icon: IconBrandNextjs, label: "Next.js" },
  { name: "supabase", icon: IconBrandSupabase, label: "Supabase" },
];

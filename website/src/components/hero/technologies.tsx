import {
  IconBrandCodepen,
  IconBrandCodesandbox,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNpm,
  IconBrandOpenai,
  IconBrandPhp,
  IconBrandPowershell,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandSentry,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
  IconBrandWix,
  IconBrandWordpress,
  IconMarkdown,
  IconProps,
  IconTerminal,
} from "@tabler/icons-react";
import React from "react";

type Icon = React.FunctionComponent<IconProps>;

export type technologiesType = {
  name: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  card: {
    title?: string;
    subtitle: string;
    description: string | React.ReactNode;
  };
};

export const technologies: technologiesType[] = [
  {
    name: "npm",
    icon: IconBrandNpm,
    label: "NPM",
    card: {
      subtitle: "2024年 ~",
      description: "パッケージの公開を行なっています。",
    },
  },
  {
    name: "wix",
    icon: IconBrandWix,
    label: "Wix",
    card: {
      subtitle: "2022年 ~",
      description: "HTML などに触れる前、サイトを作ろうと思い勉強しました。",
    },
  },
  {
    name: "github",
    icon: IconBrandGithub,
    label: "GitHub",
    card: {
      subtitle: "2023年 ~",
      description: "HTMLに触れた頃に存在に気づき、勉強を始めました。",
    },
  },

  {
    name: "shell",
    icon: IconBrandPowershell,
    label: "Shell",
    card: {
      subtitle: "2024年 ~",
      description: "単純作業の自動化や、コマンドを制作する際に使用しています。",
    },
  },
  {
    name: "python",
    icon: IconBrandPython,
    label: "Python",
    card: {
      subtitle: "2024年 ~",
      description:
        "AI や監視システムなどを制作する際に特に使用する言語です。最近では Scratch Hack Alert というプロジェクトを制作しました。これはデータベースを監視し、値の変動に応じて警告などの処理を行うことができます。",
    },
  },
  {
    name: "git",
    icon: IconBrandGit,
    label: "Git",
    card: {
      subtitle: "2024年 ~",
      description:
        "GitHub からリポジトリをクローンしたり、コミットするために必要だったので、学習しました。現在は GitHub Desktop を利用しているので使用する機会は少ないです。",
    },
  },
  {
    name: "javascript",
    icon: IconBrandJavascript,
    label: "JavaScript",
    card: {
      subtitle: "2023年5月13日 ~",
      description:
        "学習を始めたのは、HTML で作成したサイトに動的要素を追加したいと思った時です。現在は 情報処理やバックエンドのコード制作の時に使用するようになりました。",
    },
  },
  {
    name: "typescript",
    icon: IconBrandTypescript,
    label: "TypeScript",
    card: {
      subtitle: "2024年 ~",
      description:
        "HTML のサイトから、Reactのサイトへ移行する時に学び始めました。現在制作している大体のウェブサイトは TypeScript で開発を行なっています。",
    },
  },
  {
    name: "terminal",
    icon: IconTerminal,
    label: "Terminal",
    card: {
      subtitle: "2023年5月13日 ~",
      description:
        "いつ学習したのかは分かりませんが、プログラミングしていて、気づかずうちに習得していました。",
    },
  },
  {
    name: "php",
    icon: IconBrandPhp,
    label: "PHP",
    card: {
      subtitle: "2023年5月28日 ~",
      description:
        "HTML のサイトを制作できるようになった後に少しだけ触れました。学習期間はすごく短く、現在は全く使用していないので、少ししか分かりません。",
    },
  },

  {
    name: "md",
    icon: IconMarkdown,
    label: "MD",
    card: {
      subtitle: "2023年5月13日 ~",
      description: "書く内容が思いつきません",
    },
  },
  {
    name: "css",
    icon: IconBrandCss3,
    label: "CSS",
    card: {
      subtitle: "2023年5月13日 ~",
      description:
        "HTML のサイトを制作している時にデザインをよくするために学習しました。現在は大体 Tailwindcss を使っていますが、時々使用することもあります。",
    },
  },
  {
    name: "html",
    icon: IconBrandHtml5,
    label: "HTML",
    card: {
      subtitle: "2023年5月13日 ~",
      description:
        "初めて触れた言語の一つです。約一年で習得したけど、React などを学習するようになり、ほぼ使わなくなりました。",
    },
  },

  {
    name: "nodejs",
    icon: IconBrandNodejs,
    label: "NodeJS",
    card: {
      subtitle: "2023年 ~",
      description:
        "バックエンドの開発で使用する機会が増え、学習するようになりました。特にリアルタイム通信やAPI構築に便利です。",
    },
  },
  {
    name: "radixui",
    icon: IconBrandRadixUi,
    label: "RadixUI",
    card: {
      subtitle: "2024年 ~",
      description:
        "アクセシブルでカスタマイズ可能なUIコンポーネントライブラリとして使用しています。Reactプロジェクトで活躍しています。",
    },
  },
  {
    name: "tailwind",
    icon: IconBrandTailwind,
    label: "Tailwind",
    card: {
      subtitle: "2024年 ~",
      description:
        "シンプルかつ効率的にスタイリングできるツールとして活用しています。ReactやNext.jsのプロジェクトで特に便利です。全てのクラスを覚えれていませんが、調べたらどのように使えるかはすぐに思い出せます。",
    },
  },

  {
    name: "react",
    icon: IconBrandReact,
    label: "React",
    card: {
      subtitle: "2024年 ~",
      description:
        "コンポーネントベースの開発が可能なため、複雑なUIを効率的に構築する際に使用しています。現在は React のフレームワークの Next.js を使用していることが多いです。",
    },
  },
  {
    name: "nextjs",
    icon: IconBrandNextjs,
    label: "Next.js",
    card: {
      subtitle: "2024年 ~",
      description:
        "Reactのフレームワークとして、SSRやAPI構築が簡単にできる点で非常に役立っています。現在制作しているサイトの大体が Next.js です。",
    },
  },

  {
    name: "prisma",
    icon: IconBrandPrisma,
    label: "Prisma",
    card: {
      subtitle: "2024年 ~",
      description:
        "データベース操作を簡単にするために利用しています。型安全で、TypeScriptと相性が良い点が魅力です。",
    },
  },
  {
    name: "sentry",
    icon: IconBrandSentry,
    label: "Sentry",
    card: {
      subtitle: "2024年 ~",
      description:
        "エラーやパフォーマンスを監視するために使用しています。特に大規模プロジェクトで効果を発揮しています。",
    },
  },
  {
    name: "supabase",
    icon: IconBrandSupabase,
    label: "Supabase",
    card: {
      subtitle: "2024年2月23日 ~",
      description:
        "バックエンドとして、認証やデータベース機能を簡単に実装する際に使用しています。",
    },
  },

  {
    name: "figma",
    icon: IconBrandFigma,
    label: "Figma",
    card: {
      subtitle: "2024年 ~",
      description:
        "デザインモックやプロトタイプ作成に利用しています。特にチームでの共同作業がスムーズになります。",
    },
  },
  {
    name: "openai",
    icon: IconBrandOpenai,
    label: "OpenAI",
    card: {
      subtitle: "2024年 ~",
      description:
        "AI関連のプロジェクトや自然言語処理を使用した機能開発の際に活用しています。時々わからない部分を聞いて手助けをしてもらっています。",
    },
  },

  {
    name: "vscode",
    icon: IconBrandVscode,
    label: "VsCode",
    card: {
      subtitle: "2023年5月13日 ~",
      description:
        "主なエディタとして日常的に使用しています。多くの拡張機能を活用して効率的に開発しています。",
    },
  },
  {
    name: "codepen",
    icon: IconBrandCodepen,
    label: "CodePen",
    card: {
      subtitle: "2024年 ~",
      description:
        "アイデアを素早く試すためのツールとして利用しています。フロントエンドのスニペットを共有する際にも便利です。",
    },
  },
  {
    name: "wordpress",
    icon: IconBrandWordpress,
    label: "WordPress",
    card: {
      subtitle: "2024年 ~",
      description:
        "簡単なブログサイトやCMS機能が必要なプロジェクトで使用しています。",
    },
  },
  {
    name: "codesandbox",
    icon: IconBrandCodesandbox,
    label: "CodeSandBox",
    card: {
      subtitle: "2024年 ~",
      description:
        "オンラインでプロトタイピングやコラボレーションを行う際に利用しています。",
    },
  },
];

import React from "react";
import { Avatar } from "@nextui-org/avatar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
  Tooltip,
} from "@nextui-org/react";

import {
  FaLink,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

type ProjectStatusType =
  | "Public"
  | "Public template"
  | "Private"
  | "Public archive";

type CardsType = {
  org?: string;
  title: string;
  description: string;
  language: {
    label: string;
    color: string;
  };
  link?: string;
  image: string;
  status: ProjectStatusType;
};

const cards: CardsType[] = [
  {
    title: "Next.js Rich Template",
    description:
      "This project is a Next.js template aimed at providing a robust starting point for building modern web applications. It comes with pre-configured localization support, theme toggling, and various other features to streamline development.",
    language: {
      label: "TypeScript",
      color: "#3178c6",
    },
    link: "https://github.com/fun117/nextjs-rich-tpl",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public template",
  },
  {
    org: "Telrchat",
    title: "Website",
    description:
      "This chat service encrypts messages before sending them. Even if the content is leaked externally, it cannot be viewed without decrypting the information.",
    language: {
      label: "TypeScript",
      color: "#3178c6",
    },
    link: "https://github.com/Telrchat/Website",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public",
  },
  {
    title: "SafeEncode",
    description:
      "Security tool for encoding/decoding sensitive data, ensuring privacy & confidentiality. Enables secure communication & DB storage.",
    language: {
      label: "TypeScript",
      color: "#3178c6",
    },
    link: "https://github.com/Fun117/SafeEncode",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public archive",
  },
  {
    org: "scratch-auth",
    title: "pkg",
    description:
      "Scratch Auth is a simple OAuth service for Scratch. It provides an easy-to-understand API for developers and a smooth login experience for users. By using Scratch Auth, you can easily implement OAuth functionality on your website.",
    language: {
      label: "TypeScript",
      color: "#3178c6",
    },
    link: "https://github.com/scratch-auth/pkg",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public",
  },
  {
    title: "generated",
    description:
      "Generated is a generator web application created by Fun117. This app provides functionality to generate something.",
    language: {
      label: "TypeScript",
      color: "#3178c6",
    },
    link: "https://github.com/Fun117/generated",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public archive",
  },
  {
    title: "nowtime",
    description:
      "This is a web application built using React and Next.js. The app displays a customizable clock and allows users to upload and set background images. It also features network status monitoring and error handling for offline scenarios.",
    language: {
      label: "TypeScript",
      color: "#3178c6",
    },
    link: "https://github.com/Fun117/nowtime",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public archive",
  },
  {
    title: "scratch-cloud-logs",
    description:
      "This project is a Node.js script designed to log changes to cloud variables using the Scratch Cloud API.",
    language: {
      label: "JavaScript",
      color: "#f1e05a",
    },
    link: "https://github.com/Fun117/scratch-cloud-logs",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public archive",
  },
  {
    title: "zshmgr",
    description:
      "Zshmgr is a simple package manager for Zsh. It allows users to easily install, uninstall, update, and list packages. The tool is designed to work seamlessly with GitHub repositories, making it easy to manage your Zsh scripts and tools.",
    language: {
      label: "MDX",
      color: "#fcb32c",
    },
    link: "https://github.com/Fun117/zshmgr",
    image: "/wp-content/fun117/new/400x400.png",
    status: "Public archive",
  },
];

export type SocialLinksType = {
  [service: string]: {
    label: string;
    tooltip: string;
    href: string;
    icon: React.ReactNode;
  };
};

export const SocialLinks: SocialLinksType = {
  link: {
    label: "Link",
    tooltip: "Website",
    href: "https://fun117.dev",
    icon: <FaLink />,
  },
  github: {
    label: "GitHub",
    tooltip: "Fun117",
    href: "https://github.com/fun117",
    icon: <FaGithub />,
  },
  discord: {
    label: "Discord",
    tooltip: "Fun117",
    href: "https://discord.com/users/990984460365365258",
    icon: <FaDiscord />,
  },
  youtube: {
    label: "Youtube",
    tooltip: "Fun117",
    href: "https://www.youtube.com/channel/UCT34DhsVlYoyV8Y4c-MTTrQ",
    icon: <FaYoutube />,
  },
  x: {
    label: "X(Twitter)",
    tooltip: "Fun_117",
    href: "https://twitter.com/fun_117",
    icon: <FaXTwitter />,
  },
  instagram: {
    label: "Instagram",
    tooltip: "Fun117",
    href: "https://www.instagram.com/fun.s117",
    icon: <FaInstagram />,
  },
};

function SocialLinksButton() {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const itemVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.ul
      className="flex flex-wrap gap-3 mt-4"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {Object.values(SocialLinks).map((link, idx) => (
        <motion.li key={idx} variants={item}>
          <Tooltip showArrow={true} content={link.tooltip}>
            <Link
              href={link.href}
              target="_blank"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 ease-in-out"
            >
              {link.icon}
            </Link>
          </Tooltip>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function CardStatus(status: ProjectStatusType) {
  if (status === "Public archive") {
    return (
      <Chip size="sm" color="warning" variant="bordered">
        {status}
      </Chip>
    );
  }
  return (
    <Chip size="sm" color="default" variant="bordered">
      {status}
    </Chip>
  );
}

function HerpInfo() {
  const t = useTranslations("Pages.Home.HerpInfo");
  return (
    <div
      id="user-info"
      className="flex flex-col justify-center items-center w-auto container"
    >
      <div
        id="bio"
        className="flex flex-wrap justify-center items-center gap-5 max-w-xl"
      >
        <Avatar
          src="/wp-content/fun117/new/400x400.png"
          className="w-32 h-32 md:w-40 md:h-40 text-large shadow-md"
        />
        <p className="text-center">{t("bio")}</p>
      </div>
      <SocialLinksButton />
      <section
        id="top-projects"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 my-20 mx-0 sm:mx-5 md:mx-10 lg:mx-16"
      >
        {cards.map((card, idx) => {
          return (
            <Card key={idx} className="place-self-auto max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={card.image}
                  width={40}
                />
                <div className="flex flex-col">
                  <Link isExternal showAnchorIcon href={card.link}>
                    <p className="text-md">
                      {card.org && `${card.org}/`}
                      {card.title}
                    </p>
                  </Link>
                  <div className="text-small text-default-500 mt-1">
                    {CardStatus(card.status)}
                  </div>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{card.description}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <div className="flex justify-center items-center gap-1">
                  <span
                    className="w-5 h-5 rounded-full border border-neutral-500"
                    style={{ backgroundColor: card.language.color }}
                  />
                  <span>{card.language.label}</span>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </div>
  );
}

export default HerpInfo;

"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

import { FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaPatreon } from "react-icons/fa6";

import { motion } from "framer-motion";

function Contacts() {
  const t = useTranslations("PageContacts");

  interface LinksProps {
    label: string;
    url: string;
    icon?: React.ReactNode;
    target?: string;
  }

  const Links: LinksProps[] = [
    {
      label: "X",
      url: "https://x.com/Fun_117",
      icon: <FaXTwitter size={50} />,
      target: "_blank",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/fun.s117/",
      icon: <FaInstagram size={50} />,
      target: "_blank",
    },
    {
      label: "Patreon",
      url: "https://www.patreon.com/Fun117",
      icon: <FaPatreon size={50} />,
      target: "_blank",
    },
    {
      label: "Discord",
      url: "https://discord.com/users/990984460365365258",
      icon: <FaDiscord size={50} />,
      target: "_blank",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 w-full h-full">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-5xl font-bold text-neutral-600 dark:text-neutral-400"
      >
        {t("Contacts")}
      </motion.h1>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 2,
              stiffness: 300,
              damping: 24,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          hidden: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className="flex flex-row flex-wrap justify-center items-center gap-10"
      >
        {Links.map(({ label, url, icon, target = "_self" }, idx) => (
          <motion.li
            key={idx}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                scale: 0.5,
                y: 20,
              },
            }}
          >
            <Link
              href={url}
              target={target}
              className="group flex self-auto flex-col justify-center items-center gap-2 w-32 h-32 p-4 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all duration-300 ease-in-out"
            >
              <span className="group-hover:scale-110 group-hover:translate-y-3 transition-all duration-300 ease-in-out">
                {icon}
              </span>
              <span className="opacity-30 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                {label}
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Contacts;

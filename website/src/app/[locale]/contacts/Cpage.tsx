"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

import { FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaPatreon } from "react-icons/fa6";

export default function CPage() {
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
    <div className="relative flex flex-row flex-wrap justify-center items-center min-h-[calc(100vh-64px)] p-2 md:p-6 lg:p-24 xl:p-32">
      <div className="flex flex-col justify-center items-center gap-12 w-full h-full">
        <h1 className="text-5xl font-bold text-neutral-600 dark:text-neutral-400">
          {t("Contacts")}
        </h1>
        <section className="flex flex-row flex-wrap justify-center items-center gap-10">
          {Links.map(({ label, url, icon, target = "_blank" }, idx) => (
            <Link
              key={idx}
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
          ))}
        </section>
      </div>
    </div>
  );
}

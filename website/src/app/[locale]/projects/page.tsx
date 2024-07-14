"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

export default function Home() {
  const t = useTranslations("PageProjects");

  const projects = [
    {
      title: t("items.n1.title"),
      description: t("items.n1.description"),
      image: t("items.n1.image"),
      links: {
        website: t("items.n1.links.website"),
        github: "https://github.com/fun117/nextjs-rich-tpl",
      },
    },
    {
      title: t("items.n2.title"),
      description: t("items.n2.description"),
      image: "/projects/scratch-auth-react/scratchauth_100x100.png",
      links: {
        website: "https://www.npmjs.com/package/scratch-auth-react",
        github: "https://github.com/Fun117/scratch-auth-react",
      },
    },
    {
      title: t("items.n3.title"),
      description: t("items.n3.description"),
      image: "/projects/scratch-cloud-logs/icon.png",
      links: {
        website:
          "https://codesandbox.io/p/github/Fun117/scratch-cloud-logs/main?import=true",
        github: "https://github.com/fun117/scratch-cloud-logs",
      },
    },
    {
      title: t("items.n4.title"),
      description: t("items.n4.description"),
      image: "/projects/zshmgr/icon.png",
      links: {
        website: t("items.n4.links.website"),
        github: "https://github.com/fun117/zshmgr",
      },
    },
  ];

  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-between items-center p-2 md:p-6 lg:p-24 xl:p-32">
      <div className="flex flex-wrap flex-col justify-center items-stretch gap-6 sm:flex-row sm:gap-8 md:gap-10 w-full p-2">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="flex self-auto w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
          >
            <div className="relative rounded-md shadow-md overflow-hidden hover:ring-2 ring-neutral-500/50 ring-offset-4 ring-offset-neutral-950 active:scale-95 transition-all duration-300 ease-in-out">
              <Image
                className="w-full h-64 object-cover"
                src={project.image}
                alt={project.title}
                width={300}
                height={256}
              />
              <Link href={project.links.website} target="_block" key={idx}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-900 to-neutral-700 drop-shadow-lg opacity-50"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm font-medium">{project.description}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

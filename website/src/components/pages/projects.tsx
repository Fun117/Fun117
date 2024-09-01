"use client";

import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

function Projects() {
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
    <>
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex self-auto w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
        >
          <div className="relative rounded-md shadow-md overflow-hidden hover:ring-2 ring-neutral-500/50 ring-offset-neutral-50 dark:ring-offset-neutral-950 ring-offset-4 active:scale-95 transition-all duration-300 ease-in-out">
            <Suspense fallback={<Skeleton className="w-full h-64" />}>
              <Image
                className="w-full h-64 object-cover"
                src={project.image}
                alt={project.title}
                width={300}
                height={256}
              />
            </Suspense>
            <Link href={project.links.website} target="_block" key={idx}>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-neutral-900 dark:to-neutral-700 drop-shadow-lg opacity-40 dark:opacity-50"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm font-medium">{project.description}</p>
              </div>
            </Link>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default Projects;

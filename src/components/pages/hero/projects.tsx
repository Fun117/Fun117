"use client";

import React, { useRef } from "react";
import { Chip, Image, Tooltip } from "@nextui-org/react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ProjectsProps = {
  id: number;
  image: string;
  link: string;
  tags: string[];
};

function HeroProjects() {
  const t = useTranslations("Pages.Hero.projects");
  // 各プロジェクトに対して個別の useRef を作成
  const refs: React.RefObject<HTMLDivElement>[] = [];

  const projects: ProjectsProps[] = [
    {
      id: 1,
      image: "/wp-content/projects/nextjs-rich-tpl/en-dark-fullscreen.png",
      link: "https://nextjs-rich-tpl.vercel.app",
      tags: ["Next.js", "TypeScript", "Template"],
    },
    {
      id: 2,
      image: "/wp-content/projects/scratch-auth/en-dark-fullscreen.png",
      link: "https://github.com/scratch-auth/pkg/tree/main/packages/nextjs",
      tags: ["Next.js", "OAuth", "Scratch", "Package"],
    },
    {
      id: 3,
      image: "/wp-content/projects/scratch-building/ja-dark-fullscreen.png",
      link: "https://scratch-building.vercel.app/",
      tags: ["Next.js", "TypeScript", "Website", "Scratch"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 gap-4 w-full mx-5 sm:!mx-10">
      {projects.map((project, index) => {
        const ref = useRef<HTMLDivElement>(null);
        refs.push(ref);
        const isInView = useInView(ref, {
          once: true,
          margin: "-110px",
        });

        return (
          <div
            key={index}
            ref={ref}
            className="flex flex-col justify-between items-start bg-blue-50 dark:bg-blue-900 border border-neutral-200/50 dark:bg-neutral-800/50 p-5 rounded-2xl shadow-sm"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: `all ${
                0.5 + index * 0.4
              }s cubic-bezier(0.17, 0.55, 0.55, 1)`,
            }}
          >
            <div className="flex flex-col">
              <Tooltip
                showArrow={true}
                content={`${project.link.substring(0, 40)}...`}
              >
                <Link href={project.link} target="_blank" className="mb-3">
                  <Image className="rounded-2xl" src={project.image} />
                </Link>
              </Tooltip>
              <div className="flex flex-col mb-3">
                <h1 className="font-semibold text-3xl mb-2">
                  {t(`${project.id}.title`)}
                </h1>
                <p className="text-sm text-neutral-500">
                  {t(`${project.id}.description`)}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag, idx) => {
                return (
                  <Chip
                    key={idx}
                    className="bg-blue-300/50 dark:bg-blue-700/50 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </Chip>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroProjects;

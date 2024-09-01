"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

function HeroProjects() {
  const tpr = useTranslations("PageProjects");

  const content = [
    {
      title: tpr("items.n1.title"),
      description: tpr("items.n1.description"),
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/projects/nextjs-rich-tpl/website-en.png"
            alt="Image"
            width={350}
            height={350}
          />
        </div>
      ),
    },
    {
      title: tpr("items.n2.title"),
      description: tpr("items.n2.description"),
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/projects/scratch-auth-react/scratchauth_100x100.png"
            alt="Image"
            width={100}
            height={100}
          />
        </div>
      ),
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="w-full my-5"
    >
      <StickyScroll content={content} />
    </motion.div>
  );
}

export default HeroProjects;

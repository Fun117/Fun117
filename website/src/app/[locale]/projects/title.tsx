"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useInView, motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

export default function ProjectsContentTitle() {
  const t = useTranslations("pages.projects.titleContent");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay: 0,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
      transition: {
        duration: 1,
        delay: 0,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full flex md:items-center md:justify-center bg-white/[0.96] dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        classNames={{
          svg: "-top-40 left-0 md:left-60 md:-top-20",
          ellipse: "fill-black dark:fill-white",
        }}
      />
      <motion.div
        ref={ref}
        variants={variants}
        initial={false}
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-5xl pb-20 pt-[120px] px-4 mx-auto"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
          {t("title1")} <br />
          {t("title2")}
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-700 dark:text-neutral-300 max-w-lg text-center mx-auto">
          {t("description")}
        </p>
      </motion.div>
    </div>
  );
}

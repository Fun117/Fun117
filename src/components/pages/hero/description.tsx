"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

function HeroDescription() {
  const t = useTranslations("Pages.Hero.description");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  return (
    <div id="description" className="w-full bg-neutral-950">
      <div className="container flex flex-col items-start max-w-[1024px] h-auto px-8 py-16 text-center mx-auto">
        <motion.h1
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-bold text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl mb-5"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          ref={ref1}
          variants={variants}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          className="font-extralight text-sm sm:!text-base md:!text-lg sm:!px-12 md:!px-24 lg:!px-32"
        >
          {t("description")}
        </motion.p>
      </div>
    </div>
  );
}

export default HeroDescription;

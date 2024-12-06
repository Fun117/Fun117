"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Link } from "@/i18n/routing";

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

function HeroTopContents() {
  const t = useTranslations();
  const tp = useTranslations("Pages.Hero.top-content");
  const ref0 = useRef(null);
  const isInView0 = useInView(ref0, { once: true });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  return (
    <section
      id="hero-top"
      className="container flex flex-col items-start max-w-[1024px] h-auto px-8 mx-auto"
    >
      <motion.div
        ref={ref0}
        variants={variants}
        initial="hidden"
        animate={isInView0 ? "visible" : "hidden"}
        className="flex flex-col w-full p-5 py-10 text-center rounded-t-lg backdrop-blur backdrop-brightness-50"
      >
        <motion.h1
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-bold text-3xl sm:!text-4xl md:!text-5xl mb-5 md:!mb-10"
        >
          {tp("title")}
        </motion.h1>
        <motion.p
          ref={ref2}
          variants={variants}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          className="mb-5 md:!mb-10"
        >
          {tp("description")}
        </motion.p>
        <motion.div
          ref={ref3}
          variants={variants}
          initial="hidden"
          animate={isInView3 ? "visible" : "hidden"}
          className="flex flex-wrap gap-2 md:!gap-5"
        >
          <Link href="https://forms.gle/okPj49cvruieVURB7" target="_blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 10 }}
              className="text-neutral-50 w-fit h-fit px-5 py-2 bg-neutral-100/10 border border-neutral-300/20 rounded-full shadow backdrop-blur"
            >
              {t("buttons.Request")}
            </motion.button>
          </Link>
          <Link href="/about" className="flex items-center">
            <motion.button className="rounded-full">
              {t("buttons.Learn More")}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroTopContents;

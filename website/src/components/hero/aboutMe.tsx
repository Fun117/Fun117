"use client";

import React, { ReactNode, useRef } from "react";

import { motion, useInView } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import BorderSocialButtons from "./borderSocialButtons";

function AnimateContentDiv({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={{
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
          y: 30,
          filter: "blur(10px)",
          transition: {
            duration: 1,
            delay: 0,
            ease: "easeInOut",
          },
        },
      }}
      initial={false}
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col justify-start items-center text-center"
    >
      {children}
    </motion.div>
  );
}

function HeroAboutMeContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 border-y">
      <div className="container max-w-5xl px-5 py-10 flex flex-col justify-center items-center">
        <motion.div
          ref={ref}
          variants={{
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
              y: -30,
              filter: "blur(10px)",
              transition: {
                duration: 1,
                delay: 0,
                ease: "easeInOut",
              },
            },
          }}
          initial={false}
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col justify-center items-center text-center"
        >
          <h1 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl">
            僕について
          </h1>
          <p className="max-w-[80%] mt-5">
            日本在住の学生で、小学生の頃から趣味でプログラミングをはじめた。初めの頃は
            HTML と CSS を使った静的サイトを制作していたけど、現在はトレンドの
            React を使ってウェブサイトなどを制作している。好きな言語は、
            TypeScript で、好きなフレームワークは Next.js
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:!grid-cols-3 gap-5 mt-10">
          <AnimateContentDiv>
            <FaReact className="text-5xl text-sky-500" />
            <p className="max-w-xs mt-5">
              Web とネイティブユーザインターフェースのためのライブラリ
            </p>
          </AnimateContentDiv>
          <AnimateContentDiv>
            <SiTypescript className="text-5xl bg-white text-blue-500 rounded-lg" />
            <p className="max-w-xs mt-5">
              JavaScriptのスーパーセットとなるプログラミング言語
            </p>
          </AnimateContentDiv>
          <AnimateContentDiv>
            <RiNextjsFill className="text-5xl text-black bg-white rounded-full" />
            <p className="max-w-xs mt-5">Web 向けReact フレームワーク</p>
          </AnimateContentDiv>
        </div>
        <BorderSocialButtons />
      </div>
    </div>
  );
}

export default HeroAboutMeContent;

"use client";

import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlipWords } from "../../ui/flip-words";
import { Skeleton } from "../../ui/skeleton";

function Hero() {
  const t = useTranslations("PageHome");
  const words = [
    t("words.website"),
    t("words.database"),
    t("words.service"),
    t("words.module"),
  ];

  return (
    <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-center items-center w-full py-10">
      <Suspense fallback={<Skeleton className="w-full max-w-[500px] min-w-[300px] h-[40px]" />}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-fit lg:mr-20"
        >
          <div className="font-normal text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mx-auto">
            <h1 className="font-bold">{t("Hello, I'm Fun117!")}</h1>
            <FlipWords words={words} />
            {t("development")}
          </div>
        </motion.div>
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full" />}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-fit"
        >
          <Avatar className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
            <AvatarImage
              width={300}
              height={300}
              src="https://github.com/fun117.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </motion.div>
      </Suspense>
    </div>
  );
}

export default Hero;

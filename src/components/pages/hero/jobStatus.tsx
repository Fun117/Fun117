"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { fetchGitHubData, res } from "./github";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

function Status({
  number,
  label,
  startCount,
}: {
  number: undefined | number;
  label: string;
  startCount: boolean;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl sm:!text-4xl md:!text-5xl text-white">
        <Suspense fallback={<span>--</span>}>
          {number !== undefined ? (
            <CountUp
              duration={10}
              className="counter"
              end={number}
              start={startCount ? undefined : number} // 開始時に固定値
            />
          ) : (
            <span>--</span>
          )}
        </Suspense>
      </h1>
      <p className="text-sm text-white">{label}</p>
    </div>
  );
}

function HeroJobStatus() {
  const t = useTranslations("Pages.Hero.job-status");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const [github_data, setGitHubData] = useState<undefined | res>(undefined);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchGitHubData("Fun117");
      if (typeof res === "string") {
        console.error(res);
      } else {
        setGitHubData(res);
      }
    };
    fetch();
  }, []);

  return (
    <div id="job-status" className="container flex flex-col items-start max-w-[1024px] h-auto px-8 mx-auto mb-20">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:!grid-cols-3 gap-5 w-full p-5 rounded-lg backdrop-blur-md backdrop-brightness-75"
      >
        <Status
          label={t("followersCount")}
          number={github_data?.followersCount}
          startCount={isInView}
        />
        <Status
          label={t("repoCount")}
          number={github_data?.repoCount}
          startCount={isInView}
        />
        <Status
          label={t("daysPassed")}
          number={github_data?.daysPassed}
          startCount={isInView}
        />
      </motion.div>
    </div>
  );
}

export default HeroJobStatus;

"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { fetchGitHubData, res } from "./github";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

function Status({
  number,
  label,
}: {
  number: undefined | number;
  label: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl sm:!text-4xl md:!text-5xl text-white">
        <Suspense fallback={<span>--</span>}>
          {number ? (
            <CountUp duration={10} className="counter" end={number} />
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
  const t = useTranslations("Pages.Hero.job-status")
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-110px" });

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
    <div
      className="flex flex-col sm:!flex-row flex-wrap justify-around items-center gap-5 bg-blue-500 container w-full p-5 sm:!p-10 mx-5 sm:!mx-10 rounded-lg shadow-lg"
      ref={ref1}
      style={{
        transform: isInView1 ? "none" : "translateY(100px)",
        opacity: isInView1 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <Status label={t("followersCount")} number={github_data?.followersCount} />
      <Status label={t("repoCount")} number={github_data?.repoCount} />
      <Status label={t("daysPassed")} number={github_data?.daysPassed} />
    </div>
  );
}

export default HeroJobStatus;

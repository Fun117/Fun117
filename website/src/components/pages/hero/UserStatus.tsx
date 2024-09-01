"use client";

import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);
import { GetAllData } from "../../api/github";
import { Skeleton } from "../../ui/skeleton";

function UserStatus() {
  const t = useTranslations("PageHome");

  const [followers, setFollowers] = useState<number | undefined>(undefined);
  const [repos, setRepos] = useState<number | undefined>(undefined);
  const [termOfUse, setTermOfUse] = useState<number | undefined>(undefined);
  const [termOfUseUnit, setTermOfUseUnit] = useState<string | undefined>(
    undefined
  );

  function daysSince(dateString: string): number {
    const startDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return Math.floor(daysDifference);
  }

  function formatNumber(num: number, type?: "number" | "unit"): string {
    if (type === "number") {
      if (num >= 1e9) {
        return (num / 1e9).toFixed(1).replace(/\.0$/, "");
      } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1).replace(/\.0$/, "");
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1).replace(/\.0$/, "");
      } else {
        return num.toString();
      }
    } else if (type === "unit") {
      if (num >= 1e9) {
        return "B";
      } else if (num >= 1e6) {
        return "M";
      } else if (num >= 1e3) {
        return "K";
      } else {
        return "";
      }
    } else {
      if (num >= 1e9) {
        return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
      } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
      } else {
        return num.toString();
      }
    }
  }

  useEffect(() => {
    const api = async () => {
      const res_data = await GetAllData();
      // console.log(res_data);

      setFollowers(res_data.followers);
      setRepos(res_data.public_repos);

      const days = daysSince(res_data.created_at);
      setTermOfUse(Number(formatNumber(days, "number")));
      setTermOfUseUnit(formatNumber(days, "unit"));
    };
    api();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-3 w-full my-5"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <Suspense fallback={<Skeleton className="w-10 h-10" />}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {followers ? (
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={followers}
                />
              ) : (
                <Skeleton className="w-10 h-10" />
              )}
            </h1>
          </Suspense>
          <p>{t("status.Followers")}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <Suspense fallback={<Skeleton className="w-10 h-10" />}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {repos ? (
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={repos}
                  fontStyle={{
                    fontSize: 40,
                  }}
                />
              ) : (
                <Skeleton className="w-10 h-10" />
              )}
            </h1>
          </Suspense>
          <p>{t("status.Repository")}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <Suspense fallback={<Skeleton className="w-10 h-10" />}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {termOfUse ? (
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={termOfUse}
                  fontStyle={{
                    fontSize: 40,
                  }}
                />
              ) : (
                <Skeleton className="w-10 h-10" />
              )}
              {termOfUseUnit}
            </h1>
          </Suspense>
          <p>{t("status.Days on GitHub")}</p>
        </div>
      </motion.div>
    </>
  );
}

export default UserStatus;

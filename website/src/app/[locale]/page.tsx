"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";

import { GetAllData } from "@/components/api/github";

import { motion } from "framer-motion";

import { FlipWords } from "@/components/ui/flip-words";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

export default function Home() {
  const t = useTranslations("PageHome");
  const tpr = useTranslations("PageProjects");

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

  const words = [
    t("words.website"),
    t("words.database"),
    t("words.service"),
    t("words.module"),
  ];

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
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-between items-center p-2 md:p-8 lg:p-24 xl:p-36">
      <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-center items-center w-full py-10">
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
          <Avatar className="w-[300px] h-[300px]">
            <AvatarImage
              width={300}
              height={300}
              src="https://github.com/fun117.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

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
              <span>-</span>
            )}
          </h1>
          <p>{t("status.Followers")}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
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
              <span>-</span>
            )}
          </h1>
          <p>{t("status.Repository")}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
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
              <span>-</span>
            )}
            {termOfUseUnit}
          </h1>
          <p>{t("status.Days on GitHub")}</p>
        </div>
      </motion.div>

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
    </div>
  );
}

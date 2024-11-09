"use client";

import { useTranslations } from "next-intl";
import React from "react";

function HeroTopContents() {
  const t = useTranslations();
  const tp = useTranslations("Pages.Hero.top-content");
  return (
    <section
      id="hero-top"
      className="relative flex container px-5 md:!px-10 pt-24 md:!pt-32 lg:!pt-44 pb-10"
    >
      <div className="flex flex-col md:!w-1/2">
        <h1 className="font-bold text-3xl sm:!text-4xl md:!text-5xl mb-5 md:!mb-10">
          {tp("title")}
        </h1>
        <p className="mb-5 md:!mb-10">{tp("description")}</p>
        <div className="flex flex-wrap gap-2 md:!gap-5">
          <button className="max-w-1/2 bg-gradient-to-b from-blue-500 to-sky-500 text-white px-6 md:!px-8 py-2 rounded-full border border-blue-400 dark:border-blue-600 shadow-md shadow-blue-500/50">
            {t("buttons.Request")}
          </button>
          <button className="max-w-1/2 rounded-full">
            {t("buttons.Learn More")}
          </button>
        </div>
      </div>
      <div className="md:!w-1/2"></div>
    </section>
  );
}

export default HeroTopContents;

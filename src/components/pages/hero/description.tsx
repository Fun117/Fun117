"use client";

import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";

function HeroDescription() {
  const t = useTranslations("Pages.Hero.description")
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-110px" });

  return (
    <div
      className="flex flex-col justify-center items-center container text-center sm:!px-12 md:!px-24 lg:!px-32 py-10"
      ref={ref1}
      style={{
        transform: isInView1 ? "none" : "translateY(100px)",
        opacity: isInView1 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <h1 className="font-bold text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl mb-5">
        {t("title")}
      </h1>
      <p className="font-extralight text-sm sm:!text-base md:!text-lg sm:!px-12 md:!px-24 lg:!px-32">
        {t("description")}
      </p>
    </div>
  );
}

export default HeroDescription;

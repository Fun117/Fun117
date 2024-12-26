"use client";

import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("pages.notfound");

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex flex-col text-center">
        <h1 className="font-bold text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl">
          404
        </h1>
        <h2 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl mt-10">
          {t("title")}
        </h2>
      </div>
    </div>
  );
}

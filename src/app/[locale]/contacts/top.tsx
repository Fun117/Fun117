"use client";

import { useTranslations } from "next-intl";
import React from "react";

function Top() {
  const t = useTranslations("Pages.Contacts");
  return (
    <div className="flex flex-col gap-1 mb-5">
      <h1 className="font-bold text-4xl">{t("Metadata.title")}</h1>
      <p className="font-sm text-neutral-500">{t("Metadata.description")}</p>
    </div>
  );
}

export default Top;

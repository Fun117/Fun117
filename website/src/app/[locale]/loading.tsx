import React from "react";
import { useTranslations } from "next-intl";
import LoaderRo13 from "@/components/ui/loaderro13";

function Loading() {
  const t = useTranslations();
  return (
    <div className="flex justify-center items-center w-full h-full">
      <LoaderRo13 time={-1} />
    </div>
  );
}

export default Loading;

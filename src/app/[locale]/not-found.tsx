import { useTranslations } from "next-intl";

import NotFound from "@/components/pages/not-found";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "404",
  };
}

export default function NotFoundPage() {
  const t = useTranslations("PageNotFound");
  return <NotFound title={t("title")} />;
}

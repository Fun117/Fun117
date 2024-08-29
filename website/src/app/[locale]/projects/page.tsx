import { getTranslations } from "next-intl/server";
import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../layout";

import PageProjects from "./Cpage";

export async function generateMetadata(
  { params }: LayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.locale;
  const t = await getTranslations({ lang, namespace: "PageProjects.Metadata" });

  return {
    title: t(`title`),
  };
}

export default function Home() {
  return <PageProjects />;
}

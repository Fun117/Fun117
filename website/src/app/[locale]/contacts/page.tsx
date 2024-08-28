import { getTranslations } from "next-intl/server";
import CPage from "./Cpage";
import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../layout";

export async function generateMetadata(
  { params }: LayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.locale;
  const t = await getTranslations({ lang, namespace: "PageContacts.Metadata" });

  return {
    title: t(`title`),
  };
}

export default function Page() {
  return <CPage />;
}

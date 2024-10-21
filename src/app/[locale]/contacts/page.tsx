import React, { Suspense } from "react";
import { LayoutProps } from "../layout";
import { Metadata, ResolvingMetadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";
import Top from "./top";
import { Skeleton } from "@nextui-org/skeleton";

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const lang = params.locale;
  const t = await getTranslations({
    lang,
    namespace: "Pages.Contacts.Metadata",
  });

  return {
    title: t(`title`),
  };
}

const contacts = {
  mail: "fun117.kun+contact@gmail.com",
};

async function Page() {
  return (
    <div className="flex flex-col justify-center items-center sm:p-5 md:p-10 lg:p-16">
      <div className="sm:border border-neutral-300 dark:border-neutral-800 p-5 rounded-lg shadow-md container">
        <Top />
        <div className="flex flex-wrap items-center gap-1">
          <Mail />
          <span>{contacts.mail}</span>
        </div>
      </div>
      <div className="w-full h-full min-h-[1000px] mt-10 container">
        <Suspense
          fallback={
            <Skeleton className="w-full h-full min-h-[1000px] border-none p-0 rounded-lg" />
          }
        >
          <iframe
            className="w-full h-full min-h-[1000px] border-none p-0 rounded-lg"
            title="Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgFKhAXYRXurg40CgIk4YMseUVdhsrlNGqr0GdZ9IkJOD5VQ/viewform?embedded=true"
            allowFullScreen
          />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;

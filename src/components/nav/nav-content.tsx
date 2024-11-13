"use client";

import React, { useEffect, useState } from "react";
import NavLinks from "./nav-links";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@nextui-org/react";

function NavContent({ nowPath }: { nowPath?: string }) {
  const t = useTranslations();
  const [scroll_y, setScroll_y] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll_y(window.scrollY);
    };

    // スクロールイベントのリスナーを追加
    setScroll_y(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ${scroll_y > 100 && "bg-sky-200/50 shadow backdrop-blur border-b border-neutral-100"}
  return (
    <header
      className={cn(
        `${
          scroll_y > 100 &&
          "bg-neutral-50/90 dark:bg-neutral-950/90 shadow backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900"
        }`,
        "fixed z-50 left-0 right-0 top-0 flex justify-center items-center w-full py-3 px-5 sm:!px-10 md:!px-16 transition-all duration-500 ease-in-out"
      )}
    >
      <div className="font-bold text-2xl sm:!text-3xl mr-auto">Fun117</div>
      <NavLinks isbg={scroll_y > 100} nowPath={nowPath} />
      <div className="ml-auto">
        <Link href="https://forms.gle/okPj49cvruieVURB7" target="_blank">
          <Button
            className="max-w-1/2 px-6 md:!px-8 py-2"
            color="primary"
            radius="full"
            variant="shadow"
          >
            {t("buttons.Request")}
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default NavContent;

"use client";

import config from "../../../richtpl.config";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import useLocalePathname from "@/hooks/useLocalePathname";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function LanguageSelest() {
  const router = useRouter();
  const pathname = useLocalePathname();
  const t = useTranslations("Languages");
  const lang = useLocale();

  const [selectLocale, setSelectLocale] = useState<string>(
    lang || config.i18n.defaultLocale
  );

  useEffect(() => {
    const handleLocaleChange = (newLocale: string) => {
      router.push(`/${newLocale}/${pathname}`);
      router.refresh();
    };
    handleLocaleChange(selectLocale);
  }, [selectLocale, router, pathname]);

  if (!config.i18n.selectButton) {
    return <></>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("Select a language")}
        className={`w-full max-w-[130px] focus:hidden`}
        asChild
      >
        <Button
          variant="outline"
          className="focus:hidden flex justify-start items-center"
        >
          <Globe className="w-5 h-5 mr-2" />
          <span>
            {config.i18n.localeConfigs[lang || config.i18n.defaultLocale].label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {config.i18n.locales.map((lang, idx) => (
          <DropdownMenuItem
            key={idx}
            onClick={() =>
              setSelectLocale(config.i18n.localeConfigs[lang].path)
            }
          >
            {config.i18n.localeConfigs[lang].label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelest;

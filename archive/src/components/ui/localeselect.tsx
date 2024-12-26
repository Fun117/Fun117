"use client";

import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import config from "../../../richtpl.config";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import useLocalePathname from "@/hooks/useLocalePathname";

const LocaleSelect = () => {
  const router = useRouter();
  const pathname = useLocalePathname();
  const currentLocale = useLocale() || config.i18n.defaultLocale;

  const handleLocaleChange = (locale: string) => {
    router.push(`/${locale}/${pathname}`);
  };

  return (
    <SelectRoot
      collection={languages}
      size="sm"
      width="140px"
      defaultValue={[currentLocale]}
    >
      <SelectTrigger>
        <SelectValueText
          placeholder="Select Language"
          className="text-[#071828]"
        />
      </SelectTrigger>
      <SelectContent>
        {languages.items.map((lang) => (
          <SelectItem
            item={lang}
            key={lang.value}
            className="text-[#071828]"
            onClick={() => handleLocaleChange(lang.value)}
          >
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export { LocaleSelect };

const languages = createListCollection({
  items: config.i18n.locales.map((locale) => ({
    label: config.i18n.localeConfigs[locale].label,
    value: locale,
  })),
});

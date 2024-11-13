"use client";

import * as React from "react";

// next-intl (i18n)
import { useTranslations } from "next-intl";

// next-theme
import { useTheme } from "next-themes";

// icons
import { Moon, Sun } from "lucide-react";

// ui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, ButtonProps } from "@/components/ui/button";
import config from "../../../richtpl.config";
import { Tooltip } from "@nextui-org/react";

// ModeToggle types
export interface ModeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  size?: "small" | "medium" | "large" | "icon" | undefined;
}

export function ModeToggle({ variant, size, children, ...props }: ButtonProps) {
  const t = useTranslations("Theme");
  const { setTheme } = useTheme();

  if (!config.themeConfig.colorMode.selectSwitch) {
    return <></>;
  }

  return (
    <DropdownMenu>
      <Tooltip showArrow={true} content={t("Toggle theme")}>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant || "ghost"}
            size={size || "icon"}
            className="w-10 h-10"
            {...props}
          >
            <Sun className="block dark:hidden h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0" />
            <Moon className="hidden dark:block h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100" />
            <span className="sr-only">{t("Toggle theme")}</span>
          </Button>
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("Light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("Dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("System")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

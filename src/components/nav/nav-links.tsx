"use client";

import React from "react";
import config from "../../../richtpl.config";
import { TLink } from "../ui/Tcomps";
import { cn } from "@/lib/utils";

function NavLinks({ isbg, nowPath }: { isbg?: boolean, nowPath?: string }) {
  return (
    <div className={cn(`${!isbg && "bg-sky-500/20 shadow backdrop-blur"}`,"hidden lg:!flex p-1 rounded-full transition-all duration-300 ease-in-out")}>
      <div className="flex gap-1">
        {config.themeConfig.header?.items?.nav?.map((item, index) => {
          return (
            <TLink
              key={index}
              target={item.target}
              href={item.href}
              to={item.to}
              i18n_link={item.i18n_link || false}
              i18n_text={item.i18n_text || false}
              className={cn(
                `${
                  nowPath === item.to &&
                  "bg-gradient-to-b from-blue-500 to-sky-500 border-sky-50 text-white"
                }`,
                "border-transparent px-6 py-2 border rounded-full"
              )}
            >
              {item.label}
            </TLink>
          );
        })}
      </div>
    </div>
  );
}

export default NavLinks;

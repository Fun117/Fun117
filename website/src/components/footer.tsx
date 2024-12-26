"use client";

import { Link } from "@/i18n/routing";
import { Image, Tooltip } from "@nextui-org/react";
import React from "react";
import { socials } from "../../config";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./ui/LocaleSwitcherSelect";
import { ColorModeSwitcherSelect } from "./ui/colorModeSwitcherSelect";

export type FooterNavItemLinkType = {
  href: string;
  label: string;
};
export type FooterNavItemType = {
  label: string;
  items: FooterNavItemLinkType[];
};

function Footer() {
  const t = useTranslations("footer");

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links: FooterNavItemType[] = [
    {
      label: "website",
      items: [
        {
          href: "/",
          label: "home",
        },
        {
          href: "/projects",
          label: "projects",
        },
        {
          href: "/contact",
          label: "contact",
        },
      ],
    },
    {
      label: "projects",
      items: [
        {
          href: "https://craftrecycle.toakiryu.com",
          label: "craftrecycle",
        },
        {
          href: "https://gform-quick-submit.toakiryu.com",
          label: "gform-quick-submit",
        },
        {
          href: "https://nextjs-rich-tpl.toakiryu.com",
          label: "nextjs-rich-tpl",
        },
        {
          href: "https://safe-encode.vercel.app",
          label: "safe-encode",
        },
        {
          href: "https://scpay.vercel.app",
          label: "scpay",
        },
        {
          href: "https://scratch-building.vercel.app",
          label: "scratch-building",
        },
        {
          href: "https://scratch-status.toakiryu.com",
          label: "scratch-status",
        },
        {
          href: "https://support-scripts.toakiryu.com",
          label: "support-scripts",
        },
        {
          href: "https://vspodb.vercel.app",
          label: "vspodb",
        },
        {
          href: "https://zshmgr.vercel.app",
          label: "zshmgr",
        },
      ],
    },
  ];

  return (
    <footer className="w-full pt-10 bg-neutral-100 dark:bg-neutral-900">
      <div className="container max-w-5xl p-5">
        <div className="grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 gap-10 w-full">
          <div className="mb-10">
            <Image src="/wp-content/toakiryu/icon.png" className="w-10 h-10" />
            <div className="mt-5">
              <p>桐生トア公式ウェブサイト</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              {socials.map((social, index) => {
                return (
                  <Tooltip key={index} content={social.label} showArrow>
                    <Link
                      href={social.link}
                      target="_blank"
                      className="hover:opacity-50 transition-all duration-300 ease-in-out"
                    >
                      <social.icon className="text-lg" />
                    </Link>
                  </Tooltip>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <LocaleSwitcherSelect />
              <ColorModeSwitcherSelect />
            </div>
          </div>
          <div className="flex gap-10">
            {links.map((link, index) => {
              return (
                <div key={index}>
                  <h2 className="font-bold">
                    {t(`items.${link.label}.label`)}
                  </h2>
                  <ul className="flex flex-col mt-5 *:mb-1">
                    {link.items.map((item, idx) => {
                      const isSiteUrl = item.href.indexOf(`https://`) !== 0;
                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            target={isSiteUrl ? "_self" : "_blank"}
                            className="opacity-70"
                            onClick={returnTop}
                          >
                            {t(`items.${link.label}.links.${item.label}`)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

"use client";

import React from "react";
import config from "../../../richtpl.config";
import { useTranslations } from "next-intl";
import { TLink } from "../ui/Tcomps";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { ModeToggle } from "../ui/ModeToggle";
import LanguageSelest from "../ui/LanguageSelest";

function Footer() {
  const t = useTranslations("Footer.items");
  const tl = useTranslations("Footer");

  function SocialButtons() {
    return (
      <>
        {config.themeConfig.footer?.social?.github && (
          <Link
            href={`https://github.com/${config.organizationName}/${config.projectName}`}
            target="block"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            <span className="hidden">GitHub</span>
          </Link>
        )}
        {config.themeConfig.footer?.social?.twitter && (
          <>
            <Link
              href={`https://twitter.com/${config.themeConfig.footer?.social?.twitter}`}
              target="block"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
              <span className="hidden">Twitter</span>
            </Link>
          </>
        )}
      </>
    );
  }

  return (
    <footer className="flex flex-col justify-center items-center w-full text-neutral-400 dark:!text-neutral-600">
      <div className="flex flex-col md:!flex-row justify-between items-start container p-5 sm:!p-10 mx-5 sm:!mx-10">
        <div className="flex flex-col w-full mb-5">
          <h1 className="font-bold text-3xl sm:!text-4xl text-black dark:!text-white mb-5">
            Fun117
          </h1>
          <div className="flex flex-col gap-1 mb-5">
            <p className="text-sm">{tl("role")}</p>
            <h1 className="text-lg sm:!text-xl text-black dark:!text-white">
              fun117.kun@gmail.com
            </h1>
          </div>
          <div className="flex gap-2 w-full">
            <ModeToggle />
            <LanguageSelest/>
          </div>
        </div>
        <div className="flex flex-wrap justify-start md:justify-end items-start gap-5 w-full">
          {config.themeConfig.footer?.items?.map((group, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-start"
              >
                <h1 className="font-bold text-lg text-black dark:!text-white mb-3">
                  {group.title_i18n ? t(group.title) : group.title}
                </h1>
                <div className="flex flex-col">
                  {group.contents?.map((item, idx) => {
                    return (
                      <TLink
                        key={idx}
                        target={item.target}
                        href={item.href}
                        to={item.to}
                        i18n_link={item.i18n_link || false}
                        i18n_text={item.i18n_text || false}
                        className="text-sm font-base w-fit mb-3 hover:text-neutral-800 dark:!hover:text-neutral-200 transition-all duration-300 ease-in-out"
                        i18n_path="Footer.items"
                      >
                        {item.label}
                      </TLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:!flex-row flex-wrap justify-around items-center gap-2 w-full p-5 border-t border-neutral-200 dark:!border-neutral-800">
        <div className="flex gap-2 w-fit">
          <SocialButtons />
        </div>
        <p className="text-sm">{tl("footerText")}</p>
      </div>
    </footer>
  );
}

export default Footer;

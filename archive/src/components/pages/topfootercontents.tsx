"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { motion, useInView } from "framer-motion";
import { IconType } from "react-icons";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { LocaleSelect } from "../ui/localeselect";

function NavLi({ children }: { children: React.ReactNode }) {
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center w-fit lg:!mx-5"
    >
      {children}
    </motion.li>
  );
}

function TopFooterContents() {
  const pathname = usePathname();
  const t = useTranslations("footer");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const links = [
    {
      label: "home",
      link: "/",
    },
    {
      label: "projects",
      link: "/projects",
    },
    {
      label: "contact",
      link: "/contact",
    },
  ];

  const socialLinks: {
    label: string;
    url: string;
    icon: IconType;
  }[] = [
    {
      label: "GitHub",
      url: "https://l.toakiryu.com/github",
      icon: FaGithub,
    },
    {
      label: "X",
      url: "https://l.toakiryu.com/x",
      icon: FaTwitter,
    },
    {
      label: "Youtube",
      url: "https://l.toakiryu.com/youtube",
      icon: FaYoutube,
    },
  ];

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer
      id="top-footer-contents"
      className="relative bg-[#eef7ff] mt-[3.90625vw] lg:!mt-[90px] pt-[90px] pb-[30px] before:absolute before:-top-[2.73438vw] lg:!before:-top-[21] before:w-full before:h-[2.86458vw] lg:!before:h-[22px] before:bg-[url(/wp-content/themes/images/common/bg_footer.svg)] before:bg-bottom before:bg-auto before:bg-repeat-x"
    >
      <div className="w-[63.54167vw] lg:!w-[clamp(100px,90%,1200px)] mx-auto">
        <motion.nav
          initial={false}
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.ul
            variants={variants}
            className="flex flex-wrap justify-between lg:justify-center items-center gap-2"
          >
            {links.map((item, index) => {
              const isNow = pathname === item.link;
              return (
                <NavLi key={index}>
                  <Link
                    href={item.link}
                    className={`font-bold text-sm sm:!text-base md:!text-lg lg:!text-xl uppercase ${
                      isNow ? "text-[#1abbde]" : "text-[#071828]"
                    }`}
                  >
                    {t(`links.${item.label}`)}
                  </Link>
                </NavLi>
              );
            })}
          </motion.ul>
        </motion.nav>
        <div className="relative flex justify-center items-center max-w-[534px] mx-auto my-[65px] border-y-2 border-white py-5">
          <h1 className="flex text-[3.38542vw] lg:!text-base mr-[4.6875vw] font-bold text-[#071828] tracking-[.2rem] uppercase lg:!mr-[35px]">
            official
          </h1>
          <ul className="flex items-center gap-2">
            {socialLinks.map((item, index) => {
              return (
                <li key={index} className="">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="flex border border-[#1abbde] rounded-lg p-2 hover:scale-105 transition-all duration-300 ease-in-out"
                    style={{ boxShadow: "0 4px 0 #cce2f1" }}
                  >
                    <item.icon className="text-[#1abbde]" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative flex justify-center items-center max-w-[534px] mx-auto mb-[65px] border-y-2 border-white py-5">
          <LocaleSelect />
        </div>
      </div>
      <p className="text-xs text-center text-[#7a98c9]">{t("footerText")}</p>
    </footer>
  );
}

export default TopFooterContents;

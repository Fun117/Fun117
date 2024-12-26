"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("pages.notfound");

  return (
    <>
      <div className="pt-[134px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="text-6xl text-center font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#071827] to-[#1464ae]"
        >
          404
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="flex flex-col justify-center items-center w-[clamp(100px,90%,1200px)] mt-[138px] mx-auto"
      >
        <h1 className="text-5xl font-bold uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-[#071827] to-[#1464ae]">
          {t("title")}
        </h1>
        <Link
          href="/"
          className="flex justify-center items-center w-[62.5vw] h-[13.54167vw] lg:!w-[480px] lg:!h-[80px] border border-[#2c3d4e] rounded-full mt-[10.41667vw] lg:!mt-[60px] mx-auto font-bold text-[3.90625vw] lg:!text-xl uppercase text-[#2c3d4e] hover:!bg-[#071828] hover:!text-[#fff] active:scale-95 transition-all duration-300 ease-in-out"
        >
          home
        </Link>
        <div className="mb-10" />
      </motion.div>
    </>
  );
}

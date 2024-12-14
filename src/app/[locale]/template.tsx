"use client";

import TopFooterContents from "@/components/pages/topfootercontents";
import React from "react";
// import { motion } from "framer-motion";

// const variants = {
//   hidden: { opacity: 0 },
//   enter: { opacity: 1 },
// };

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    // <motion.main
    //   className="w-full h-full min-h-dvh"
    //   variants={variants}
    //   initial="hidden"
    //   animate="enter"
    //   transition={{
    //     type: "linear",
    //     duration: 1,
    //   }}
    // >
    //   {children}
    // </motion.main>
    <main className="w-full h-full">
      {children}
      <TopFooterContents />
    </main>
  );
}

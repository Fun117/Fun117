"use client";

import React from "react";
import { motion } from "framer-motion";
function Test() {
  const list = {
    visible: { opacity: 1, duration: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        hidden: {
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
    >
      <motion.li variants={item}>A</motion.li>
      <motion.li variants={item}>B</motion.li>
      <motion.li variants={item}>C</motion.li>
    </motion.ul>
  );
}

export default Test;

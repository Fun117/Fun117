"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDiscord,
  FaGithub,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 30,
    filter: "blur(10px)",
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

type socialLinksProps = {
  label: string;
  url: string;
  icon: IconType;
};

function SocialLinkButton({
  index,
  link,
}: {
  index: number;
  link: socialLinksProps;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      ref={ref}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeInOut",
          },
        },
        hidden: {
          opacity: 0,
          y: 30,
          filter: "blur(10px)",
          transition: {
            duration: 0.8,
            delay: 0.2,
            ease: "easeInOut",
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-neutral-50 w-fit h-fit p-2 bg-neutral-100/10 border border-neutral-300/20 rounded-full shadow backdrop-blur"
    >
      <link.icon />
    </motion.button>
  );
}

export default function HeroUserCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks: socialLinksProps[] = [
    {
      label: "Discord",
      url: "https://i.fun117.dev/discord",
      icon: FaDiscord,
    },
    {
      label: "Twitter",
      url: "https://i.fun117.dev/x",
      icon: FaTwitter,
    },
    {
      label: "GitHub",
      url: "https://i.fun117.dev/github",
      icon: FaGithub,
    },
    {
      label: "Youtube",
      url: "https://i.fun117.dev/youtube",
      icon: FaYoutube,
    },
    {
      label: "Twitch",
      url: "https://i.fun117.dev/twitch",
      icon: FaTwitch,
    },
  ];

  return (
    <div className="flex flex-col-reverse md:!flex-row justify-center items-center p-5 sm:!p-7 md:!p-10 rounded-lg backdrop-blur backdrop-brightness-75">
      <div className="mr-0 md:!mr-20 mt-5 md:!mt-0">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF66] font-bold text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl mb-3">
            Hi, I&apos;m Fun117
          </motion.h1>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF66]">
            Full stack developer
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-2 mt-5">
          {socialLinks.map((link, index) => {
            return (
              <Tooltip key={index} showArrow content={link.label}>
                <Link href={link.url} target="_blank">
                  <SocialLinkButton index={index} link={link} />
                </Link>
              </Tooltip>
            );
          })}
        </div>
      </div>
      <div>
        <img
          src="/wp-content/fun117/new/400x400.png"
          className="w-32 h-32 border rounded-full shadow"
        />
      </div>
    </div>
  );
}

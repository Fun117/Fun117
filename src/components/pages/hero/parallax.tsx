"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroContentParallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  // 1
  {
    title: "SafeEncode",
    link: "https://safe-encode.vercel.app",
    thumbnail: "/wp-content/projects/safe-encode/ja-light-fullscreen.png",
  },
  {
    title: "Telrchat",
    link: "https://telrchat.netlify.app",
    thumbnail: "/wp-content/projects/telrchat/en-light-fullscreen.png",
  },
  {
    title: "Generated",
    link: "https://generated.vercel.app",
    thumbnail: "/wp-content/projects/generated/en-dark-fullscreen.png",
  },
  {
    title: "Next.js Rich Template",
    link: "https://nextjs-rich-tpl.vercel.app",
    thumbnail: "/wp-content/projects/nextjs-rich-tpl/en-dark-fullscreen.png",
  },
  {
    title: "Next.js Base Template",
    link: "https://nextjs-base-template.vercel.app",
    thumbnail:
      "/wp-content/projects/nextjs-base-template/en-dark-fullscreen.png",
  },
  // 2
  {
    title: "Now Time",
    link: "https://nowtime.vercel.app",
    thumbnail: "/wp-content/projects/nowtime/en-dark-fullscreen.png",
  },
  {
    title: "Zshmgr",
    link: "https://zshmgr.vercel.app",
    thumbnail: "/wp-content/projects/zshmgr/ja-dark-fullscreen.png",
  },
  {
    title: "Scratch Cloud API Logger",
    link: "https://github.com/Fun117/scratch-cloud-logs",
    thumbnail: "/wp-content/projects/scratch-cloud-logs/en-dark-fullscreen.png",
  },
  {
    title: "Scratch Auth",
    link: "https://scratch-auth.netlify.app",
    thumbnail: "/wp-content/projects/scratch-auth/en-dark-fullscreen.png",
  },
  {
    title: "Scratch Auth React",
    link: "https://github.com/Fun117/scratch-auth-react",
    thumbnail: "/wp-content/projects/scratch-auth-react/en-dark-fullscreen.png",
  },
  // 3
  {
    title: "Scratch Building",
    link: "https://scratch-building.vercel.app",
    thumbnail: "/wp-content/projects/scratch-building/ja-dark-fullscreen.png",
  },
  {
    title: "COMING SOON",
    link: "#",
    thumbnail: "/wp-content/projects/comingsoon.jpg",
  },
  {
    title: "COMING SOON",
    link: "#",
    thumbnail: "/wp-content/projects/comingsoon.jpg",
  },
  {
    title: "COMING SOON",
    link: "#",
    thumbnail: "/wp-content/projects/comingsoon.jpg",
  },
  {
    title: "COMING SOON",
    link: "#",
    thumbnail: "/wp-content/projects/comingsoon.jpg",
  },
];


import { IconType } from "react-icons";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const products = [
  {
    title: "Craft Recycle",
    link: "https://scratch-status.toakiryu.com",
    thumbnail: "/wp-content/product/craftrecycle.toakiryu.com.png",
  },
  {
    title: "GForm Quick Submit",
    link: "https://gform-quick-submit.toakiryu.com",
    thumbnail: "/wp-content/product/gform-quick-submit.toakiryu.com.png",
  },
  {
    title: "Next.js Rich Template",
    link: "https://nextjs-rich-tpl.toakiryu.com",
    thumbnail: "/wp-content/product/nextjs-rich-tpl.toakiryu.com.png",
  },

  {
    title: "Safe Encode",
    link: "https://safe-encode.vercel.app",
    thumbnail: "/wp-content/product/safe-encode.vercel.app.png",
  },
  {
    title: "ScPay",
    link: "https://scpay.vercel.app",
    thumbnail: "/wp-content/product/scpay.vercel.app.png",
  },
  {
    title: "Scratch Building",
    link: "https://scratch-building.vercel.app",
    thumbnail: "/wp-content/product/scratch-building.vercel.app.png",
  },

  {
    title: "Scratch Status",
    link: "https://scratch-status.toakiryu.com",
    thumbnail: "/wp-content/product/scratch-status.toakiryu.com.png",
  },
  {
    title: "Support Scripts",
    link: "https://support-scripts.toakiryu.com",
    thumbnail: "/wp-content/product/support-scripts.toakiryu.com.png",
  },
  {
    title: "VspoDB",
    link: "https://vspodb.vercel.app",
    thumbnail: "/wp-content/product/vspodb.vercel.app.png",
  },
  {
    title: "Zshmgr",
    link: "https://zshmgr.vercel.app",
    thumbnail: "/wp-content/product/zshmgr.vercel.app.png",
  },
  {
    title: "COMING SOON",
    link: "https://renderwork.studio",
    thumbnail: "/wp-content/product/comingsoon.png",
  },

  {
    title: "COMING SOON",
    link: "https://cremedigital.com",
    thumbnail: "/wp-content/product/comingsoon.png",
  },
  {
    title: "COMING SOON",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/wp-content/product/comingsoon.png",
  },
  {
    title: "COMING SOON",
    link: "https://invoker.lol",
    thumbnail: "/wp-content/product/comingsoon.png",
  },
  {
    title: "COMING SOON",
    link: "https://efreeinvoice.com",
    thumbnail: "/wp-content/product/comingsoon.png",
  },
];

export type socialType = {
  id: string;
  label: string;
  link: string;
  icon: IconType;
  className?: string;
};

export const socials: socialType[] = [
  {
    id: "github",
    label: "GitHub",
    link: "https://l.toakiryu.com/github",
    icon: FaGithub,
    className: "bg-black text-white",
  },
  {
    id: "x",
    label: "X (Twitter)",
    link: "https://l.toakiryu.com/x",
    icon: FaXTwitter,
    className: "bg-black text-white",
  },
  {
    id: "discord",
    label: "Discord",
    link: "https://l.toakiryu.com/discord",
    icon: FaDiscord,
    className: "bg-blue-500 text-white",
  },
];
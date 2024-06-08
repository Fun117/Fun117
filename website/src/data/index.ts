export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/assets/images/desktop-blur-408120.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/assets/svg/grid.svg",
    spareImg: "/assets/svg/website.svg",
  },

  {
    id: 5,
    title: "Currently building a Project Platforms Web apps",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/assets/brand/fun117/fullscreen_bgnone_1683x1080.png",
    spareImg: "/assets/svg/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Scratch Auth for React",
    des: "Scratch Auth is a simple OAuth service for Scratch. It provides developers with an easy-to-understand API and users with a smooth login experience. By using scratch-auth-react, you can easily implement OAuth functionality into your site.",
    img: "",
    iconLists: ["/assets/svg/brand/react.svg", "/assets/svg/brand/typescript.svg"],
    link: "https://www.npmjs.com/package/scratch-auth-react",
  },
  {
    id: 2,
    title: "Zshmgr",
    des: "Zshmgr is a simple package manager for Zsh. It allows users to easily install, uninstall, update, and list packages. The tool is designed to work seamlessly with GitHub repositories, making it easy to manage your Zsh scripts and tools.",
    img: "/assets/projects/zshmgr/logo.svg",
    iconLists: [],
    link: "https://zshmgr.vercel.app/",
  },
  {
    id: 3,
    title: "Next.js base template",
    des: "This Next.js base template is designed as an easy starting point for Next.js projects. It comes with features such as theme switching, i18n (internationalization), and automatic sitemap generation, allowing developers to start their projects quickly.",
    img: "/assets/projects/next-base-template/en-light-fullscreen.png",
    iconLists: ["/assets/svg/brand/nextjs.svg", "/assets/svg/brand/tailwindcss.svg", "/assets/svg/brand/typescript.svg"],
    link: "https://nextjs-base-template.vercel.app/",
  },
  {
    id: 4,
    title: "Scratch Building Website",
    des: "Scratch Building is a game developed on the Scratch platform, and this repository serves as its official website. It provides various features including account authentication, commenting, notifications, and community engagement.",
    img: "/assets/projects/scratch-building/banner.webp",
    iconLists: ["/assets/svg/brand/nextjs.svg", "/assets/svg/brand/tailwindcss.svg", "/assets/svg/brand/typescript.svg"],
    link: "https://scratch-building.vercel.app/",
  },
];

export const testimonials = [
  {
    name: "Tisk_01010100",
    icon: "/assets/brand/tisk_01010100/icon.png",
    title: "BOT Developer",
    quote: "I was very impressed by Fun117's technical skills and problem-solving abilities, which greatly advanced our projects. His excellent communication and collaborative attitude made idea sharing easy and productive. It was an honor to work with such an outstanding partner.",
  },
  {
    name: "Tisk_01010100",
    icon: "/assets/brand/tisk_01010100/icon.png",
    title: "BOT Developer",
    quote: "I was very impressed by Fun117's technical skills and problem-solving abilities, which greatly advanced our projects. His excellent communication and collaborative attitude made idea sharing easy and productive. It was an honor to work with such an outstanding partner.",
  },
  {
    name: "Tisk_01010100",
    icon: "/assets/brand/tisk_01010100/icon.png",
    title: "BOT Developer",
    quote: "I was very impressed by Fun117's technical skills and problem-solving abilities, which greatly advanced our projects. His excellent communication and collaborative attitude made idea sharing easy and productive. It was an honor to work with such an outstanding partner.",
  },
];

export const companies = [
  {
    id: 1,
    name: "Masaabu-YT",
    img: "/assets/brand/masaabu-yt/icon.webp",
    className: "rounded-full",
    nameImg: "",
  },
  {
    id: 2,
    name: "Tisk_01010100",
    img: "/assets/brand/tisk_01010100/icon.png",
    nameImg: "",
  },
  {
    id: 3,
    name: "メタロロ",
    img: "/assets/brand/dmmo-com-jp/icon.png",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/assets/svg/exp1.svg",
  },
  {
    id: 2,
    title: "Auth Modules Dev - Scratch Auth",
    desc: "Development of a module using React to easily implement Scratch authentication.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/assets/svg/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/assets/svg/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/assets/svg/exp4.svg",
  },
];

export const socialMedia = [
  {
    href: "https://github.com/fun117",
    img: "/assets/svg/brand/github.svg",
  },
  {
    href: "https://twitter.com/fun_117",
    img: "/assets/svg/brand/twitter.svg",
  },
];

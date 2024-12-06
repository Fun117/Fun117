"use client";

import React, { useRef } from "react";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

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

type ProjectsProps = {
  id: number;
  image: string;
  link: string;
  tags: string[];
};

function ProjectCard({ project }: { project: ProjectsProps }) {
  const t = useTranslations("Pages.Hero.projects");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id={`project-${t(`${project.id}.title`)}`}
      className="col-span-1"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex text-start">
        <div className="">
          <img src={project.image} onClick={onOpen} />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Link href={project.link} showAnchorIcon isExternal>
                  {t(`${project.id}.title`)}
                </Link>
              </ModalHeader>
              <ModalBody>
                <img src={project.image} />
                <p>{t(`${project.id}.description`)}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.div>
  );
}

function HeroProjects() {
  const projects: ProjectsProps[] = [
    {
      id: 1,
      image: "/wp-content/projects/nextjs-rich-tpl/en-dark-fullscreen.png",
      link: "https://nextjs-rich-tpl.vercel.app",
      tags: ["Next.js", "TypeScript", "Template"],
    },
    {
      id: 2,
      image: "/wp-content/projects/scratch-auth/en-dark-fullscreen.png",
      link: "https://github.com/scratch-auth/pkg/tree/main/packages/nextjs",
      tags: ["Next.js", "OAuth", "Scratch", "Package"],
    },
    {
      id: 3,
      image: "/wp-content/projects/scratch-building/ja-dark-fullscreen.png",
      link: "https://scratch-building.vercel.app",
      tags: ["Next.js", "TypeScript", "Website", "Scratch"],
    },
    {
      id: 4,
      image: "/wp-content/projects/craftrecycle/ja-dark-fullscreen.png",
      link: "https://craftrecycle.fun117.dev",
      tags: ["Next.js", "TypeScript", "Website", "Minecraft", "DataPack"],
    },
  ];

  return (
    <section
      id="projects"
      className="container grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 max-w-[1024px] h-auto px-8 py-24 text-center mx-auto"
    >
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </section>
  );
}

export default HeroProjects;

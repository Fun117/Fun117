"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { WorldMap } from "../ui/world-map";

function ServerWorldMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return;

  return (
    <div className="container py-40 w-full">
      <motion.div
        ref={ref}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0,
              ease: "easeInOut",
            },
          },
          hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
            transition: {
              duration: 0.8,
              delay: 0,
              ease: "easeInOut",
            },
          },
        }}
        initial={false}
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="font-bold text-xl md:text-4xl text-black dark:text-white">
          Vercel{" "}
          <span className="text-neutral-400">
            {"Hosting".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
            を使用しています
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          クラウドホスティングサービスを使用して世界各地のサーバーからウェブサイトをホスティングしています。
        </p>
      </motion.div>
      <motion.div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </motion.div>
    </div>
  );
}

export default ServerWorldMap;

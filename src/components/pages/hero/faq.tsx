"use client";

import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";

type FAQProps = {
  id: number;
};

function HeroFAQ() {
  const t = useTranslations("Pages.Hero.faq");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-110px" });

  const faq: FAQProps[] = [
    {
      id: 1,
    },
  ];

  return (
    <div className="w-full bg-blue-950">
      <section
        id="faq"
        className="container max-w-[1024px] h-auto px-8 py-16 text-start mx-auto "
      >
        <div
          className="flex flex-col md:!flex-row justify-between items-start w-full p-5 sm:!p-10 mx-auto mb-10"
          ref={ref1}
          style={{
            transform: isInView1 ? "none" : "translateY(100px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="w-full md:!w-1/2">
            <h1 className="font-bold text-3xl md:!text-4xl lg:!text-5xl">
              {t("title")}
            </h1>
          </div>
          <Accordion type="single" collapsible className="w-full md:!w-1/2">
            {faq.map((faq, index) => {
              return (
                <AccordionItem key={index} value={`${faq.id}`}>
                  <AccordionTrigger>
                    {t(`items.${faq.id}.question`)}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(`items.${faq.id}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default HeroFAQ;

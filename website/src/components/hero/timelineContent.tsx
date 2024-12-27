"use client";

import { Image } from "@nextui-org/react";
import { Timeline } from "../ui/timeline";

export const timelineData = [
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          学校で新たに始まったプログラミングの授業で、Scratch Jr
          のブロックプログラミングを体験する。学校から全生徒に IPad
          が支給され自宅でも、Scratch Jr を使って遊ぶようになる。
        </p>
        <div className="grid grid-cols-1 sm:!grid-cols-2 gap-4">
          <Image
            src="/wp-content/images/scratchjr.webp"
            alt="Scratch Jr"
            width={200}
            height={100}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          プログラミングに興味を持ち始め、自分でいろいろ調べるようになり、Scratch
          Jr 関連サービスの Scratch
          を発見した。その後独学でプロジェクトを作成するようになる。
        </p>
        <div className="grid grid-cols-1 sm:!grid-cols-2 gap-4">
          <Image
            src="/wp-content/images/scratch.webp"
            alt="Scratch"
            width={200}
            height={100}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          中学生に進学し、お小遣いを使い初めて PC
          を購入する。よりプログラミングに関わるようになり、ブロックプログラミングから、コードプログラミングに挑戦する。初めてのコーディングは、HTML
          と CSS を使って静止サイトを作成した。約一年 HTML
          を学習し、その延長線で JavaScript を使って動的サイトの学習を始める。
        </p>
        <div className="flex flex-wrap gap-4">
          <Image
            src="/wp-content/images/html-icon.webp"
            alt="HTML 5"
            width={50}
            height={50}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
          <Image
            src="/wp-content/images/css-icon.webp"
            alt="CSS 3"
            width={50}
            height={50}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
          <Image
            src="/wp-content/images/javascript-icon.webp"
            alt="JavaScript"
            width={50}
            height={50}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          静止サイトの開発から、動的サイトの開発をするようになった。Youtube
          で、React の存在を知り、それから UI
          構築ライブラリを学習するようになる。 トレンドの Next.js
          などのフレームワークを集中的に使用するようにして、約半年で基本的なことを習得した。気づかずうちに、JavaScript
          と TypeScript も使えるようになっていた。それからは、Next.js
          を使ってウェブサイトを制作するようになった。
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          この年は技術と知識の範囲が大きく広がった。年中頃は、データベースの
          Supabase, 認証機能の clerk
          を学習したいたが、年の終わり頃には、フロントエンドとバックエンドの両方の知識と技術が身についた。
        </p>
        <div className="flex flex-wrap gap-4">
          <Image
            src="/wp-content/images/nextjs.webp"
            alt="Next.js"
            width={200}
            height={100}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
          <Image
            src="/wp-content/images/react.webp"
            alt="React"
            width={200}
            height={100}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
          <Image
            src="/wp-content/images/supabase.webp"
            alt="Supabase"
            width={200}
            height={100}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
          <Image
            src="/wp-content/images/clerk.webp"
            alt="Clerk"
            width={200}
            height={100}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
          <Image
            src="/wp-content/images/typescript.webp"
            alt="TypeScript"
            width={200}
            height={100}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
];

export default function HeroTimelineContent() {
  return (
    <div className="w-full mt-5">
      <Timeline data={timelineData} />
    </div>
  );
}

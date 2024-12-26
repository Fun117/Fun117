"use client";

import React, {
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import {
  CloseIcon,
  uiExpandableCardGridType,
} from "@/components/ui/expandableCard";

function ExpandableCardGridMapDiv({
  id,
  card,
  children,
  onClick,
}: {
  id: string;
  card: uiExpandableCardGridType;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={card.title}
      onClick={onClick}
      className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
      ref={ref}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1,
            delay: 0,
            ease: "easeInOut",
          },
        },
        hidden: {
          opacity: 0,
          y: 30,
          filter: "blur(10px)",
          transition: {
            duration: 1,
            delay: 0,
            ease: "easeInOut",
          },
        },
      }}
      initial={false}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function ExpandableCardGrid({
  cards,
  classNames,
}: {
  cards: uiExpandableCardGridType[];
  classNames?: {
    ul?: string;
  };
}) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className={cn(
          "max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4",
          classNames?.ul
        )}
      >
        {cards.map((card, index) => (
          <ExpandableCardGridMapDiv
            key={index}
            id={id}
            card={card}
            onClick={() => setActive(card)}
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </ExpandableCardGridMapDiv>
        ))}
      </ul>
    </>
  );
}

export default function ProjectsContent() {
  const cards = [
    {
      title: "Craft Recycle",
      description: "Website / Minecraft / Data Pack",
      src: "/wp-content/product/craftrecycle.toakiryu.com.png",
      ctaText: "Visit",
      ctaLink: "https://craftrecycle.toakiryu.com",
      content: () => {
        return (
          <p>
            このプロジェクトは、Minecraftにおけるアイテムやブロックをリサイクル可能にするためのレシピを追加し、新たなクラフト体験を提供するデータパックです。
          </p>
        );
      },
    },
    {
      title: "GForm Quick Submit",
      description: "NPM Package",
      src: "/wp-content/product/gform-quick-submit.toakiryu.com.png",
      ctaText: "Visit",
      ctaLink: "https://gform-quick-submit.toakiryu.com",
      content: () => {
        return (
          <p>
            Google
            フォームにデータを素早く送信できるパッケージです。このツールを使えば、お問い合わせフォームなどを簡単にウェブサイトに統合できます。無料でGoogleフォームを利用可能なので、初心者の方にも最適です。
          </p>
        );
      },
    },
    {
      title: "Next.js Rich Template",
      description: "Next.js / Template",
      src: "/wp-content/product/nextjs-rich-tpl.toakiryu.com.png",
      ctaText: "Visit",
      ctaLink: "https://nextjs-rich-tpl.toakiryu.com",
      content: () => {
        return (
          <p>
            このプロジェクトは、Next.js を使用してモダンな Web
            アプリケーションを構築するための堅牢なスタートポイントを提供します。ローカリゼーションのサポートやテーマ切り替えなど、開発を効率化するために事前設定された機能を含んでいます。
          </p>
        );
      },
    },
    {
      title: "Safe Encode",
      description: "Website / API / Encode",
      src: "/wp-content/product/safe-encode.vercel.app.png",
      ctaText: "Visit",
      ctaLink: "https://safe-encode.vercel.app",
      content: () => {
        return (
          <p>
            セキュリティとプライバシーを重視したデータのエンコードおよびデコードのためのツールです。SafeEncodeは、機密情報や個人情報などの重要なデータを安全に変換し、安全な形式で保存および転送することを目的としています。このツールは、安全な通信やデータベースへの保存などの様々なセキュアなデータ処理に利用できます。
          </p>
        );
      },
    },
    {
      title: "ScPay",
      description: "Website / Web App / Auth",
      src: "/wp-content/product/scpay.vercel.app.png",
      ctaText: "Visit",
      ctaLink: "https://scpay.vercel.app",
      content: () => {
        return (
          <p>
            Scratchアカウントを当サービスと連携して、ゲームの進捗情報などのデータを同期します。開発者向けに認証サービスも提供します。
          </p>
        );
      },
    },
    {
      title: "Scratch Building",
      description: "Website / Comment / Login",
      src: "/wp-content/product/scratch-building.vercel.app.png",
      ctaText: "Visit",
      ctaLink: "https://scratch-building.vercel.app",
      content: () => {
        return (
          <p>
            ビル経営ゲームはScratchプラットフォーム上で開発されたゲームであり、このサイトは公式ウェブサイトとして機能します。アカウント認証、コメント、通知、コミュニティ参加など、さまざまな機能を提供しています。
          </p>
        );
      },
    },
    {
      title: "Scratch Status",
      description: "Website / Status / Preview",
      src: "/wp-content/product/scratch-status.toakiryu.com.png",
      ctaText: "Visit",
      ctaLink: "https://scratch-status.toakiryu.com",
      content: () => {
        return (
          <p>
            Scratchサービスの稼働状況をリアルタイムで監視し、稼働時間、バージョン、サーバー負荷、データベースの健康状態などの詳細なステータス情報を提供します。Scratchの主要なサービスとキャッシュ接続の状態を確認できます。
          </p>
        );
      },
    },
    {
      title: "Support Scripts",
      description: "Website / Minecraft / Data Pack",
      src: "/wp-content/product/support-scripts.toakiryu.com.png",
      ctaText: "Visit",
      ctaLink: "https://support-scripts.toakiryu.com",
      content: () => {
        return (
          <p>
            このプロジェクトは、Minecraftにおけるプレイヤーの位置情報などの情報を簡単に取得できるようにするデータパックです。
          </p>
        );
      },
    },
    {
      title: "ぶいすぽDB",
      description: "Website / DB / Vspo",
      src: "/wp-content/product/vspodb.vercel.app.png",
      ctaText: "Visit",
      ctaLink: "https://vspodb.vercel.app",
      content: () => {
        return (
          <p>
            ぶいすぽっ！の情報データベースサイトです。メンバーの詳細情報から実績,見所など、役立つ情報を見つけることができます。
          </p>
        );
      },
    },
    {
      title: "Zshmgr",
      description: "Website / Zsh",
      src: "/wp-content/product/zshmgr.vercel.app.png",
      ctaText: "Visit",
      ctaLink: "https://zshmgr.vercel.app",
      content: () => {
        return (
          <p>
            Zsh用のシンプルなパッケージマネージャーです。ユーザーはパッケージのインストール、アンインストール、アップデート、リスト表示を簡単に行うことができます。このツールはGitHubリポジトリとシームレスに連携するように設計されており、Zshスクリプトやツールの管理が容易になります。
          </p>
        );
      },
    },
  ];

  return (
    <ExpandableCardGrid
      cards={cards}
      classNames={{
        ul: "container max-w-5xl lg:!grid-cols-3",
      }}
    />
  );
}

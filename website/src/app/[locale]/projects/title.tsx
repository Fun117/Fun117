import { Spotlight } from "@/components/ui/Spotlight";

export default function ProjectsContentTitle() {
  return (
    <div className="w-full flex md:items-center md:justify-center bg-white/[0.96] dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        classNames={{
          svg: "-top-40 left-0 md:left-60 md:-top-20",
          ellipse: "fill-black dark:fill-white",
        }}
      />
      <div className="relative z-10 w-full max-w-5xl py-20 px-4 mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
          Toa Kiryu <br />
          プロジェクト履歴
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-700 dark:text-neutral-300 max-w-lg text-center mx-auto">
          桐生トアのプロジェクト概要ページです。このリストは、制作,貢献
          したプロジェクトが必ず含まれるとは限りません。
        </p>
      </div>
    </div>
  );
}

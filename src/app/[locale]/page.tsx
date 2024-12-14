import TopContents from "@/components/pages/topcontents";
import TopFooterContents from "@/components/pages/topfootercontents";

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <TopContents />
    </div>
  );
}

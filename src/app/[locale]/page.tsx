import { HeroContentParallax } from "@/components/pages/hero/parallax";
import HerpInfo from "@/components/pages/hero/info";

export default async function Home() {
  return (
    <div>
      <HeroContentParallax />
      <HerpInfo />
    </div>
  );
}

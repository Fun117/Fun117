import UserStatus from "@/components/pages/hero/UserStatus";
import Hero from "@/components/pages/hero/hero";
import HeroProjects from "@/components/pages/hero/heroProjects";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-between items-center p-2 md:p-8 lg:p-24 xl:p-36">
      <Hero />

      <UserStatus />

      <HeroProjects />
    </div>
  );
}

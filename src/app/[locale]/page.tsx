// import NavContent from "@/components/nav/nav-content";
// import HeroDescription from "@/components/pages/hero/description";
// import HeroProjects from "@/components/pages/hero/projects";
// import HeroFAQ from "@/components/pages/hero/faq";

import HeroUserCard from "@/components/pages/hero/userCard";
import HeroJobStatus from "@/components/pages/hero/jobStatus";
import HeroTopContents from "@/components/pages/hero/top-contents";
import Footer from "@/components/nav/footer-content";

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* <NavContent nowPath="/" /> */}
      <div
        className="w-full min-h-dvh bg-bottom bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(/image/upload/miami-3840x2160-skyscrapers-night-cityscapes-tourism-travel-5400.jpg)",
        }}
      >
        <div className="relative flex flex-col justify-center items-center w-full min-h-dvh">
          <HeroUserCard />
        </div>
        <HeroJobStatus />
        <HeroTopContents />
      </div>
      {/* <HeroDescription />
      <HeroProjects />
      <HeroFAQ /> */}
      <Footer />
    </div>
  );
}

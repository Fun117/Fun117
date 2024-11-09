import { useTranslations } from "next-intl";
import NavContent from "@/components/nav/nav-content";
import HeroDescription from "@/components/pages/hero/description";
import HeroFAQ from "@/components/pages/hero/faq";
import HeroJobStatus from "@/components/pages/hero/job-status";
import HeroTopContents from "@/components/pages/hero/top-contents";
import Footer from "@/components/nav/footer-content";
import HeroProjects from "@/components/pages/hero/projects";

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <NavContent nowPath="/" />
      <HeroTopContents />
      <section
        id="job-status"
        className="flex justify-center items-center w-full mt-5 sm:!pt-10"
      >
        <HeroJobStatus />
      </section>
      <section
        id="description"
        className="flex justify-center items-center w-full mt-5 sm:!pt-10"
      >
        <HeroDescription />
      </section>
      <section
        id="projects"
        className="flex justify-center items-center w-full mt-5 sm:!pt-10"
      >
        <HeroProjects />
      </section>
      <section
        id="faq"
        className="flex justify-center items-center w-full mt-5 sm:!pt-10"
      >
        <HeroFAQ />
      </section>
      <Footer />
    </div>
  );
}

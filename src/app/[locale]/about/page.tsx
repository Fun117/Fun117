
import HeroDescription from "@/components/pages/hero/description";
import HeroProjects from "@/components/pages/hero/projects";
import HeroFAQ from "@/components/pages/hero/faq";
import Footer from "@/components/nav/footer-content";

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <HeroDescription />
      <HeroProjects />
      <HeroFAQ />
      <Footer />
    </div>
  );
}

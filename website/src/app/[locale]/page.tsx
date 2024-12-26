import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "../../../config";
import HeroAboutMeContent from "@/components/hero/aboutMe";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Image } from "@nextui-org/react";
import ServerWorldMap from "@/components/hero/ServerWorldMap";
import HeroTimelineContent from "@/components/hero/timelineContent";

export default function Home() {
  return (
    <div>
      <HeroParallax products={products} />
      <HeroAboutMeContent />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Toa Kiryu
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  FullStack Developer
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/wp-content/toakiryu/3ae6f47b-fdff-45b6-976d-4b33addd1cf5.jpeg`}
            alt="Toa Kiryu Hero Image"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <HeroTimelineContent />
      <ServerWorldMap />
    </div>
  );
}

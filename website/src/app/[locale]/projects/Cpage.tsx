import Projects from "@/components/pages/projects";

export default function PageProjects() {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-between items-center p-2 md:p-6 lg:p-24 xl:p-32">
      <div className="flex flex-wrap flex-col justify-center items-stretch gap-6 sm:flex-row sm:gap-8 md:gap-10 w-full p-2">
        <Projects />
      </div>
    </div>
  );
}

"use client";

import { Link } from "@/i18n/routing";

export default function NotFound({ title }: { title: string }) {
  console.log(title);
  return (
    <>
      <div className="pt-[134px]">
        <h1 className="text-6xl text-center font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#071827] to-[#1464ae]">
          404
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-[clamp(100px,90%,1200px)] mt-[138px] mx-auto">
        <h1 className="text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#071827] to-[#1464ae]">
          page not found
        </h1>
        <Link
          href="/"
          className="flex justify-center items-center w-[62.5vw] h-[13.54167vw] lg:!w-[480px] lg:!h-[80px] border border-[#2c3d4e] rounded-full mt-[10.41667vw] lg:!mt-[60px] mx-auto font-bold text-[3.90625vw] lg:!text-xl uppercase text-[#2c3d4e] hover:!bg-[#071828] hover:!text-[#fff] active:scale-95 transition-all duration-300 ease-in-out"
        >
          home
        </Link>
      </div>
    </>
  );
}

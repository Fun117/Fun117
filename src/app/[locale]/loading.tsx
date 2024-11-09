import React from "react";
import LoaderRo13 from "@/components/ui/loaderro13";
import { LoaderRound } from "@/components/ui/loading";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <LoaderRound/>
    </div>
  );
}

export default Loading;

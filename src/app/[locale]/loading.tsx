import React from "react";
import { LoaderRound } from "@/components/ui/loading";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <LoaderRound/>
    </div>
  );
}

export default Loading;

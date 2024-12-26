"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LoaderDiv({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed h-screen top-0 left-0 w-full flex justify-center items-center z-10">
      <div className="p-4 rounded-md">
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}

export function LoaderRound() {
  return (
    <LoaderDiv>
      <DotLottieReact
        src="/wp-content/lottiefiles/loading.lottie"
        loop
        autoplay
      />
    </LoaderDiv>
  );
}

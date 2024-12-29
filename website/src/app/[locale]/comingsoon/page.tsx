"use server";

import React from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "COMING SOON",
  };
}

function ComingSoon() {
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <h1 className="font-bold text-8xl">COMING SOON</h1>
    </div>
  );
}

export default ComingSoon;

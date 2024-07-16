"use client";

import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useRouter } from "next/navigation";
import Features from "@/components/Features";

const Page = () => {
  const router = useRouter();

  return (
    <div className="main overflow-x-hidden flex flex-col items-center justify-start">
      <div className="fixed w-[100%] h-[4rem] navbar-bg ">
        <Navbar />
      </div>
      <div className="mt-[4rem] px-4 w-[100vw] h-[calc(100vh-4rem)] flex flex-col items-center pt-20 text-">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold md:text-5xl text-4xl">Short Links With</h1>
          <h1 className="gradient-one font-bold text-4xl">Big Impact</h1>
          <p className="md:w-[30vw] w-[75vw] text-sm text-center mt-5">
            Minimerge is a feature-rich link management tool. facilitating
            seamless short link creation, sharing, and tracking
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button asChild style={{ borderRadius: "12px" }}>
            <Link href="/sign-up" className="text-sm">
              Start For Free
            </Link>
          </Button>
          <Link
            href={"https://github.com/Avik-creator/Minimerge"}
            className="flex py-[.2rem] items-center justify-between px-2 bg-white hover:bg-white border border-black"
            style={{ borderRadius: "12px" }}
          >
            <img
              src="https://img.icons8.com/fluency/48/github.png"
              width="32px"
            />
            <span className="text-black text-sm">Star on GitHub</span>
          </Link>
        </div>

        <Features />
      </div>
    </div>
  );
};

export default Page;

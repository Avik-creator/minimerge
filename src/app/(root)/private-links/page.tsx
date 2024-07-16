"use client";

import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="main overflow-x-hidden flex flex-col items-center justify-start">
      <div className="fixed w-[100%] h-[4rem] navbar-bg ">
        <Navbar />
      </div>
      <div className="mt-[4rem] px-4 w-[100vw] h-[calc(100vh-4rem)] flex flex-col items-center pt-20 text-">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold md:text-5xl text-4xl">
            Create Private Links
          </h1>
          <h1 className="font-bold text-4xl">with Password</h1>
          <p className="md:w-[30vw] w-[75vw] text-sm text-center mt-5">
            QR codes and short links are like peas in a pod. Minimerge offers
            free QR codes for every short link you create.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button asChild style={{ borderRadius: "12px" }}>
            <Link href="/sign-up" className="text-sm">
              Start For Free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;

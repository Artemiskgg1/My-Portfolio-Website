"use client";
import { juliusSansOne } from "@/app/components/font";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";

export default function BottomNav() {
  return (
    <div className="w-screen h-[10rem] flex justify-between items-end align-bottom bg-black-200/1 text-white">
      <div className="ml-5">
        <Link
          href="https://linkedin.com/in/abha-ghildiyal-6ba119223"
          className="left-0"
        >
          <IoLogoLinkedin className="cursor-pointer w-8 h-8 m-5" />
        </Link>
        <Link href="https://github.com/iynes">
          <AiFillGithub className="cursor-pointer w-8 h-8 m-5" />
        </Link>
      </div>
      <div className={`text-slate-400 mb-12`}>Created By Abha Ghildiyal</div>
      <div className=" rotate-90 pb-16 mb-10">
        <span
          className={`${juliusSansOne.className} text-slate-400 w-36 pb-16 mb-24`}
        >
          ARTEMIS GARTH
        </span>
      </div>
    </div>
  );
}

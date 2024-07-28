"use client";
import Image from "next/image";
import { juliusSansOne } from "@/app/components/font";

function LeftSection() {
  return (
    <div>
      <div className="hidden md:block bg-black-100 w-full md:w-80 h-fit sticky top-5 ml-7">
        <div className="md:w-80 w-full p-3 rounded-2xl h-full bg-black-200 shadow-md">
          <div className="flex">
            <div className="w-full relative">
              <h1
                className={` ${juliusSansOne.className} font-bold text-sky-500 text-3xl mt-3`}
              >
                Abha Ghildiyal
              </h1>
              <div className="flex w-full">
                <div className="flex gap-x-1 text-xs my-4">
                  <p className="bg-black-100 text-slate-200 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    NextJS
                  </p>
                  <p className="bg-black-100 text-slate-200 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    Tensorflow
                  </p>
                  <p className="bg-black-100 text-slate-200 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                    NodeJS
                  </p>
                  <p className="bg-black-100 text-slate-200 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0">
                    Drizzle
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-slate-200">
            <h2 className="my-2 font-bold">Bio</h2>
            <p className="text-[12px] my-3">
              A Passionate Software Developer from India 🇮🇳
              <br /> Lost in the mystique of a piano&apos;s melody 🎹
            </p>
            <div className="border border-[#282828] text-slate-200" />
            <div>
              <h1 className="font-bold">Work History</h1>
              <div className="mt-5 flex justify-between">
                <div className="flex gap-x-3">
                  <Image src="/winnio-ab.png" alt="" width={45} height={45} />
                  <div className="-mt-1">
                    <h3>AI Intern</h3>
                    <p className="text-[10px]">WINNIIO AB</p>
                  </div>
                </div>
                <small className="text-[9px] text-slate-200">
                  MAY 2024 - JULY 2024
                </small>
              </div>
              <div className="my-3 flex justify-between">
                <div className="flex gap-x-3">
                  <Image src="/csir-npl.png" alt="" width={45} height={45} />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">SWE Intern</h3>
                    <p className="text-[10px]">
                      National Physical
                      <br /> Laboratory | CSIR
                    </p>
                  </div>
                </div>
                <small className="text-[9px] text-slate-200">
                  MAY 2024 - JULY 2024
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

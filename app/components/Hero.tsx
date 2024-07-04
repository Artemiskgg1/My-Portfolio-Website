import { MainText } from "@/components/main-text";
import { Spotlight } from "@/components/ui/spotlight";
import React from "react";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className="h-screen w-full bg-black-100  bg-grid-white/[0.03]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center reletive my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 z-10">
            Quiet the mind and the soul will speak
          </h2>
          <div>
            <MainText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

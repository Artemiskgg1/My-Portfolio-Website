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
      <div className="h-screen w-full bg-black-100  bg-grid-white/[0.3]  relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </div>
  );
};

export default Hero;

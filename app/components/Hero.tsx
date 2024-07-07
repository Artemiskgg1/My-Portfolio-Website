import { MainText } from "@/components/main-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

const Hero = () => {
  return (
    <div className=" pb-24 relative z-10">
      <div className="flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest md:text-xs text-[10px] text-center text-blue-100 max-w-80 z-10">
            Quiet the mind and the soul will speak
          </h2>
          <div>
            <MainText />
          </div>
          <TextGenerateEffect
            className="text-center text-[30px] md:text-5xl lg:text-6xl"
            words="Bridging Imagination into Seamless Experiences"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { MainText } from "@/components/main-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" pb-24 relative   ">
      <div className="flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest md:text-xs text-[10px] text-center text-blue-100 max-w-80 z-10">
            THE IMPISH ME AND THE ABSOLUTE ME
          </h2>
          <div>
            <MainText />
          </div>
          <TextGenerateEffect
            className="text-center text-[30px] md:text-5xl lg:text-6xl"
            words="Bridging Imagination into Seamless Experiences"
          />
          <div className="mt-8">
            <Image
              src="/down-arrow.gif"
              alt="Your GIF"
              width={40}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

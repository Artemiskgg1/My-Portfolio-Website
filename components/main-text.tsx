"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function MainText() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" mb-24 text-2xl md:text-xl lg:text-5xl font-boldtext-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <span className=" text-7xl">
          <br /> I am{" "}
          <Highlight className="text-white-200">Abha Ghildiyal</Highlight>.
        </span>
      </motion.h1>
    </HeroHighlight>
  );
}

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Github from "../components/Github";
import { projects } from "@/data/projects";
import {
  buttonVariants,
  contentVariants,
  glowVariants,
  imageVariants,
  overlayVariants,
  stripVariants,
  titleVariants,
} from "@/animations/projectAnimations";

const numberVariants = {
  initial: {
    opacity: 0.7,
    scale: 1,
    y: 0,
  },
  hover: {
    opacity: 1,
    scale: 1.3,
    y: -10,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

export default function ProjectStrips() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="px-4 sm:px-8 md:px-16 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-unigeo mb-10 text-white"
      >
        Things I Have Built
      </motion.h1>

      {/* Project Strips */}
      <div className="flex flex-col md:flex-row md:h-[500px] gap-[2px]">
        {projects.map((project, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <motion.div
              key={i}
              custom={i}
              variants={stripVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className={`relative group overflow-hidden cursor-pointer transition-all duration-500 ${
                isExpanded ? "flex-[2]" : "flex-[0.7]"
              } ${isExpanded ? "min-h-[300px]" : "min-h-[200px]"} md:min-h-0`}
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate={isExpanded ? "animate" : "initial"}
                className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-blue-500/20 to-transparent z-0"
              />

              <motion.div
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
                animate={isExpanded ? "expanded" : "initial"}
                className="absolute inset-0"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                variants={overlayVariants}
                initial="initial"
                whileHover={!isExpanded ? "hover" : "expanded"}
                animate={isExpanded ? "expanded" : "initial"}
                className="absolute inset-0 bg-black transition-all duration-500"
              />

              <motion.h2
                custom={isExpanded}
                variants={titleVariants}
                initial="initial"
                animate="animate"
                whileHover={!isExpanded ? "hover" : "expanded"}
                className={`absolute font-unigeo text-white text-lg sm:text-xl font-semibold left-1/2 -translate-x-1/2 z-10 ${
                  isExpanded ? "top-8" : "top-1/2 -translate-y-1/2"
                }`}
              >
                {project.title}
              </motion.h2>

              <AnimatePresence>
                {!isExpanded && (
                  <motion.span
                    variants={numberVariants}
                    initial="initial"
                    whileHover="hover"
                    exit="exit"
                    className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white text-5xl sm:text-8xl font-bold z-0 pointer-events-none transition-all duration-300"
                  >
                    {i + 1}
                  </motion.span>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-white z-10"
                  >
                    <div className="text-center max-w-xs">
                      <motion.p
                        className="mb-6 text-xs sm:text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {project.description}
                      </motion.p>

                      {project.link && project.link !== "#" && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap="tap"
                          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/30 transition-colors duration-300 border border-white/30"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                          >
                            View Project
                          </motion.span>
                          <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 45 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExternalLink size={14} />
                          </motion.div>
                        </motion.a>
                      )}

                      {project.link === "#" && (
                        <motion.div
                          className="inline-flex items-center gap-2 bg-gray-500/40 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm border border-gray-400/30 cursor-not-allowed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          Coming Soon
                          <motion.div
                            className="w-3 h-3 rounded-full bg-yellow-400"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.7, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Gradient Shine */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  isExpanded ? "opacity-100" : ""
                }`}
                initial={{
                  background:
                    "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                }}
                whileHover={{
                  background: [
                    "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    "linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)",
                    "linear-gradient(225deg, transparent, rgba(255,255,255,0.1), transparent)",
                    "linear-gradient(315deg, transparent, rgba(255,255,255,0.1), transparent)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
              </motion.div>

              {/* Floating Particles */}
              <AnimatePresence>
                {isExpanded && (
                  <>
                    {[...Array(6)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: Math.random() * 100 + "%",
                          y: Math.random() * 100 + "%",
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: particleIndex * 0.5,
                          ease: "easeInOut",
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full pointer-events-none z-5"
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Github Section */}
      <motion.div
        className="max-w-6xl mt-16 mx-auto px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Github />
      </motion.div>
    </motion.div>
  );
}

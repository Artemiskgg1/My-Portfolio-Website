import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
  return (
    <motion.div
      className="md:flex flex-col items-center justify-center pb-10 hidden mt-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="pb-5 text-3xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Days I <strong className="text-blue-400">Code</strong>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <GitHubCalendar
          username="iynes"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={{
            light: ["#1F2937", "#374151", "#4B5563", "#9CA3AF", "#D1D5DB"], // Dark to light blueish-gray shades
            dark: ["#1F2937", "#374151", "#4B5563", "#9CA3AF", "#D1D5DB"],
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Github;

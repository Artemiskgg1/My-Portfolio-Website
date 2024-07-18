import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
  const explicitTheme = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"], // Ensure 5 colors for maxLevel 4
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"], // Ensure 5 colors for maxLevel 4
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center pb-10"
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
        Days I <strong className="text-blue-500">Code</strong>
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
            light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
            dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Github;

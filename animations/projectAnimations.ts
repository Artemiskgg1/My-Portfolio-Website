export const stripVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const imageVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  expanded: {
    scale: 1.15,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const overlayVariants = {
  initial: { opacity: 0.3 },
  hover: { opacity: 0.5 },
  expanded: { opacity: 0.6 },
};

export const titleVariants = {
  initial: (isExpanded: boolean) => ({
    y: isExpanded ? 0 : "50vh",
    x: "-50%",
  }),
  animate: (isExpanded: boolean) => ({
    y: isExpanded ? 0 : "50vh",
    x: "-50%",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  hover: (isExpanded: boolean) => ({
    y: isExpanded ? 0 : "25vh",
    x: "-50%",
    scale: isExpanded ? 1 : 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  }),
  expanded: {
    y: 0,
    x: "-50%",
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const numberVariants = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.8,
  },
  hover: {
    y: -32,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

export const contentVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

export const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
  tap: { scale: 0.95 },
};

export const glowVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 0.3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

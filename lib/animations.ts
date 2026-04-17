export const SPRING_TRANSITION = { type: "spring" as const, stiffness: 120, damping: 20 };

export const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
};

export const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

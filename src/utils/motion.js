const springSmooth = { type: "spring", stiffness: 80, damping: 18 };

export const textVariant = (delay = 0) => ({
  hidden: { y: -28, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ...springSmooth, delay },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 48 : direction === "right" ? -48 : 0,
    y: direction === "up" ? 48 : direction === "down" ? -48 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type || "tween",
      delay: delay ?? 0,
      duration: duration ?? 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: { scale: 0.92, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay: delay ?? 0,
      duration: duration ?? 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type || "tween",
      delay: delay ?? 0,
      duration: duration ?? 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

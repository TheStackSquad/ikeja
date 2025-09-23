//src/animations/carouselAnimate.js

// Variants for the main hero content overlay, animating its entrance.
export const overlayVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variants for the hero text elements (headline, subheadline, description).
// These animate into view with a subtle upward motion.
export const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Variants for the container that wraps the text elements.
// This enables a staggered animation effect for its children.
export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for the carousel slides, controlling their entry and exit.
// The `custom` prop is used to determine the direction of the slide animation.
export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

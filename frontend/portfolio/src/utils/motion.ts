import type { Variants } from 'framer-motion';

const EASE = [0.23, 1, 0.32, 1] as const;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: EASE
    }
  }
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: EASE
    }
  }
};

export function staggerContainer(staggerChildren = 0.06): Variants {
  return {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: 0.04
      }
    }
  };
}

export const viewportOnce = {
  once: true,
  margin: '-80px'
} as const;
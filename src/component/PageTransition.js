import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '100%',
    scale: 0.98
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '-100%',
    scale: 0.98
  }
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth easing
  duration: 0.8, // Increased duration for smoother transitions
  when: 'beforeChildren',
  staggerChildren: 0.1
};



function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100%',
        willChange: 'transform, opacity',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
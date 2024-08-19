import React from 'react'
import { motion } from 'framer-motion'
import { rotateLeft } from '@/lib/animations';

const RotateLeft = ({ className, children, delay }) => {
  return (
    <motion.div
      variants={rotateLeft(delay)}
      initial="initial"
      whileInView="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RotateLeft
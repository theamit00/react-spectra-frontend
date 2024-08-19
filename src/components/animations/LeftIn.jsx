import React from 'react'
import { motion } from 'framer-motion';
import { leftIn } from '@/lib/animations';

const LeftIn = ({ className, children, delay, inital, duration }) => {
  return (
    <motion.div
      variants={leftIn(delay, inital, duration)}
      initial="initial"
      whileInView="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LeftIn
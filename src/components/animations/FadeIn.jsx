import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const FadeIn = ({className, children, delay}) => {
  return (
    <motion.div
      variants={fadeIn(delay)}
      initial="initial"
      whileInView="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn
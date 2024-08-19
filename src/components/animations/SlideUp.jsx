import React from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '@/lib/animations'

const SlideUp = ({className, children, delay, initial, duration , ...props }) => {
  return (
    <motion.div
      variants={slideUp(delay, initial, duration)}
      initial="initial"
      whileInView="animate"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default SlideUp
import React from "react";
import { motion } from "framer-motion";
import { zoomIn } from "@/lib/animations";

const ZoomIn = ({ className, children, delay, inital, duration, ...props }) => {
  return (
    <motion.div
      variants={zoomIn(delay, inital, duration)}
      initial="initial"
      whileInView="animate"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;

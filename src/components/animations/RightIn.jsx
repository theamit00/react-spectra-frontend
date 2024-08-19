import React from "react";
import { motion } from "framer-motion";
import { rightIn } from "@/lib/animations";

const RightIn = ({ className, children, delay, inital, duration, ...props }) => {
  return (
    <motion.div
      variants={rightIn(delay, inital, duration)}
      initial="initial"
      whileInView="animate"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default RightIn;

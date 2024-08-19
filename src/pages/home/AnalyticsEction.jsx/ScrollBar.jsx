import { transform } from "framer-motion";
import React from "react";

const ScrollBar = ({left='0', value}) => {
  left = `${Number(value) * 100}%`

  return (
    <div className="scroll-bar h-1 w-full bg-[#e8e3d7] relative">
      <div
        className={`scroller w-1/3 h-full transition-all duration-300 bg-orange-100 absolute `}
        style={{ transform: `translate(${left})` }}
      ></div>
    </div>
  );
};

export default ScrollBar;

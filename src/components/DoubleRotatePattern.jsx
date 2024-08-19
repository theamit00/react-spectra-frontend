import React from "react";
import RotatePattern from "./RotatePattern";
import FadeIn from "./animations/FadeIn";

const DoubleRotatePattern = ({className}) => {
  return (
    <FadeIn delay={1} className={`${className}`} >
      <div className={`hidden justify-between xl:flex `}>
        <RotatePattern />
        <RotatePattern />
      </div>
    </FadeIn>
  );
};

export default DoubleRotatePattern;

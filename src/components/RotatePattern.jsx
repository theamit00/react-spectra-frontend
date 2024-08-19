import React from "react";
import ImageComponent from "./ImageComponent";

const RotatePattern = ({className}) => {
  return (
    <ImageComponent
      className={`rotate w-[64px] h-[64px] shadow-none border-none ${className}`}
      src={`https://framerusercontent.com/images/Pu72o1s2wwKYc0yvQSHUX41XQ9U.svg`}
    />
  );
};

export default RotatePattern;

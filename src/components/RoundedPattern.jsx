import React from "react";
import ImageWrapper from "./ImageWrapper";
import Image from "./Image";

const RoundedPattern = ({src, alt, className = "", imageClassname="",children,...props }) => {
  return (
    <>
      <ImageWrapper
        className={`border-[1.5px] border-black sm-box-shadow rounded-full ${className}`}
        {...props}
      >
        <Image src={src} alt={alt} className={`${imageClassname}`} />
        {children}
      </ImageWrapper>
    </>
  );
};

export default RoundedPattern;

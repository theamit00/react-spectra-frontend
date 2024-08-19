import React from "react";
import ImageWrapper from "./ImageWrapper";
import Image from "./Image";

const ImageComponent = ({ src, alt, className = "", imageClassname="",children,...props }) => {
  return (
    <>
      <ImageWrapper className={`border-[1.5px] border-black md-box-shadow rounded-[28px] ${className}`} {...props}>
        <Image src={src} alt={alt} className={imageClassname} />
        {children}
      </ImageWrapper>
    </>
  );
};

export default ImageComponent;

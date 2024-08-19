import ImageComponent from "@/components/ImageComponent";
import React from "react";

const AnalyticsImageComponent = ({ src, className = "", value = "0",...props }) => {
  return (
    <ImageComponent
      src={src}
      className={`w-[304px] h-[256px] rounded-[20px_!important] ${className}`}
      {...props}
    />
  );
};

const images = [
  {
    src: "https://framerusercontent.com/images/EhfEOtBpWH3BoBCkZwDcTJM5NM.svg",
  },
  {
    src: "https://framerusercontent.com/images/PjuD43Vob83WfT2h4xPvtxZnEk.svg",
  },
];



const ImageContainer = ({value}) => {

  const position = (index) => {

    let left;

    if(index >= value-1){
      left = (32 * (Number(index) + 1) + 302 * (Number(index) + 1)) - (value*302);
      return left;
    }

  };


  return (
    <div className="image-container relative md:ps-16 w-[min-content] h-[min-content] ">
      <div className="relative">
        <AnalyticsImageComponent
          src={`https://framerusercontent.com/images/W85AZJTIwhCwzTCSOgMIAFFHc.svg`}
          className={`relative`}
        />

        {images.map((image, index) => (
          <AnalyticsImageComponent
            key={index}
            src={image.src}
            className={`absolute top-[0] transition-all duration-300 `}
            style={{
              zIndex: `${index + 1}`,
              left: `${position(index)}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;

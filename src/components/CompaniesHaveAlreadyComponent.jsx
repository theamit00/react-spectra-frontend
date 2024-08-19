import React from 'react'
import CustomHeading from './CustomHeading';
import Marquee from 'react-fast-marquee';
import ImageComponent from './ImageComponent';
import LeftIn from './animations/LeftIn';
import RightIn from './animations/RightIn';

const images = [
  {
    src: "https://framerusercontent.com/images/AZ2giOXhN0NUvf5pwzOQ0ZOpCl8.svg",
  },
  {
    src: "https://framerusercontent.com/images/mt4pgIeXewwOhjxqcamfXf4itIQ.svg",
  },
  {
    src: "https://framerusercontent.com/images/WbeqHmQsqim3qLrPBQEnU9o4OJM.svg",
  },
  {
    src: "https://framerusercontent.com/images/5to7TFV0hEYrDwRnBt4AwzOAc.svg",
  },
  {
    src: "https://framerusercontent.com/images/XCtAKzczBaDnEe6Odvm06DYev4.svg",
  },
];

const CompaniesHaveAlreadyComponent = ({className}) => {
  return (
    <div className={`flex flex-col gap-6 2md:flex-row ${className}`}>
      <LeftIn className="max-w-[280px] w-full">
        <CustomHeading Tag="h6" className="title ">
          72,000 companles have already built apps with Spectra.
        </CustomHeading>
      </LeftIn>

      <Marquee className="gap-16 mask " speed={50}>
        <RightIn delay={1}>
          <div className="relative flex gap-16 ">
            {images.map((image, index) => (
              <div key={index} className=" flex justify-center items-center ">
                <ImageComponent
                  src={image.src}
                  className="border-none shadow-none w-max h-max"
                />
              </div>
            ))}
          </div>
        </RightIn>
      </Marquee>
    </div>
  );
}

export default CompaniesHaveAlreadyComponent
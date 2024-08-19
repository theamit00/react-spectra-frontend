import Image from '@/components/Image'
import ImageComponent from '@/components/ImageComponent'
import ImageWrapper from '@/components/ImageWrapper'
import React from 'react'

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
  {
    src: "https://framerusercontent.com/images/cFl8IPqdT45qwwv7EjPeEQi3xrE.svg",
  },
];

const ImageContainer = () => {
  return (
    <div className="relative grid grid-cols-2 xl:flex xl:gap-6  ">
          {images.map((image,index)=>(
            <div key={index} className="h-[80px] w-[148px] mx-auto flex justify-center items-center" >
                  <ImageWrapper  >
                      <Image src={image.src} className={`w-[max-content] h-[max-content]`} />
            </ImageWrapper>
            
          </div>
          ))}
        </div>
  )
}

export default ImageContainer
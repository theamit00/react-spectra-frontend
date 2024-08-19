import SlideUp from '@/components/animations/SlideUp';
import CustomHeading from '@/components/CustomHeading'
import Description from '@/components/Description';
import ImageComponent from '@/components/ImageComponent';
import Section from '@/components/Section'
import React from 'react'

const images = [
  {
    src: "https://framerusercontent.com/images/OVPciccnyGgH8Q1oGBMWwu1Ao.svg",
  },
  {
    src: "https://framerusercontent.com/images/DfCOjJ5WQNqRPjdIZRIXmz095fQ.svg",
  },
  {
    src: "https://framerusercontent.com/images/uzHpKMFkxQLacDPTZae5ugOe03s.svg",
  },
];

const CompaniesSolveProblemsSection = () => {
  return (
    <Section className={`companiesSolveProblemsSection p-[64px_24px] xl:p-[80px_24px]`}>
      <div className="max-w-[1008px] flex flex-col m-auto gap-10 ">
        <SlideUp delay={1} initial={{y:"30%"}}>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
            <CustomHeading Tag="h3" className="max-w-[60%] xl:text-[40px] ">
              Companies solve problems faster with our technology
            </CustomHeading>
            <div className="imageContainer flex gap-6 ">
              {images.map((image, index) => (
                <ImageComponent
                  key={index}
                  src={image.src}
                  className="w-5 h-5 border-none shadow-none "
                />
              ))}
            </div>
          </div>
        </SlideUp>
        <SlideUp delay={1.5} > 
          <div className="flex flex-col md:flex-row gap-14 justify-between">
            <div className="user flex flex-col justify-between gap-10 md:h-[320px] ">
              <div className="flex flex-col gap-8">
                <ImageComponent
                  className="avatar rounded-full w-[88px] h-[88px] "
                  src={`https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png`}
                />
                <div className="user-detail flex flex-col gap-1 ">
                  <h5>James Brown</h5>
                  <p className="text-grey">Product Designer @Flowbase</p>
                </div>
              </div>
              <ImageComponent
                className="w-[216px] border-none shadow-none "
                src={`https://framerusercontent.com/images/QBbqEIG4wUrFJu0EhczLUiYtfQ.svg`}
              />
            </div>
            <div className="md:max-w-[58%] w-full ">
              <p className="text-[20px] -tracking-[0.33px] leading-10">
                Welcome to Spectra, the ultimate website template that empowers
                designers and developers to push the boundaries of their craft.
                Whether you're a seasoned professional or just starting your
                creative journey, Spectra is here to make the process of
                building stunning websites seamless and inspiring. Embrace a
                world of endless possibilities as you immerse yourself in the
                spectrum of tools, features, and design elements that Spectra
                has to offer.
              </p>
            </div>
          </div>
        </SlideUp>
      </div>
    </Section>
  );
}

export default CompaniesSolveProblemsSection
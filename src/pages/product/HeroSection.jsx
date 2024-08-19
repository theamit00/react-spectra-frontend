import SlideUp from "@/components/animations/SlideUp";
import ZoomIn from "@/components/animations/ZoomIn";
import Decor from "@/components/Decor";
import DoubleRotatePattern from "@/components/DoubleRotatePattern";
import ImageComponent from "@/components/ImageComponent";
import RotatePattern from "@/components/RotatePattern";
import RoundedPattern from "@/components/RoundedPattern";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import React from "react";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "our history",
  },
  heading: {
    tag: "h1",
    text: "We’re On a Mission to Power Customers",
    className: "relative xl:text-[64px]",
  },
  description: {
    text: "Empowering customers drives change. Join us for a transformative journey.",
    className: "w-full max-w-[416px]",
  },
};

const background = {
  src: `https://framerusercontent.com/images/8fnmX9fncLbfajA8PZtK5gC9ImI.svg`,
  className:
    "max-w-[1440px] border-none shadow-none -z-10 absolute w-full left-[50%] -translate-x-[50%] top-0",
};

const HeroSection = () => {
  return (
    <Section
      className={`hero-section p-[144px_24px_72px] xl:p-[192px_24px_80px]`}
      background={background}
    >
      <div className="flex flex-col gap-14">
        <SlideUp delay={1} initial={{y:"30%"}} >
          <TitleSubtitleDescriptionComponent
            className="flex flex-col gap-4 w-full items-center max-w-[656px] m-auto text-center "
            {...titleSubtitleDescriptionComponentProps}
          />
        </SlideUp>
        <DoubleRotatePattern className={`absolute w-full top-[248px]`} />
        <ZoomIn delay={1} >
          <div className="w-full max-w-[864px] relative m-auto">
            <Decor className={`-left-[48px] rotate-[4deg] `}>
              <ImageComponent
                src={`	https://framerusercontent.com/images/qkxNza5xJ6AftcsemV9q5abTG4.svg`}
                className="w-[46px] absolute -left-[49px] border-none shadow-none -rotate-[4deg] -bottom-[30px]"
              />
            </Decor>
            <ImageComponent
              className=""
              src={`https://framerusercontent.com/images/bC9rR8MXl5MYPE8MBPVpWSynnZQ.svg`}
            />
            <Decor className={`-right-[48px] -rotate-[4deg] `} />
          </div>
        </ZoomIn>
      </div>
    </Section>
  );
};

export default HeroSection;

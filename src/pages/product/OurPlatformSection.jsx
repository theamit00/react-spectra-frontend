import DoubleRotatePattern from '@/components/DoubleRotatePattern'
import Features from '@/components/Features'
import Section from '@/components/Section'
import TitleSubtitleDescriptionComponent from '@/components/TitleSubtitleDescriptionComponent'
import { SlBadge } from "react-icons/sl";
import React from 'react'
import ImageComponent from '@/components/ImageComponent';
import SlideUp from '@/components/animations/SlideUp';
import ZoomIn from '@/components/animations/ZoomIn';

const titleSubtitleDescriptionComponentProps = {
  subtitle : {
    text : "content section",
  },
  heading : {
    tag : "h2",
    text : "Our platform is built to save hours of development",
    className : "xl:text-[56px]"
  }
}

const details = [
  {
    icon: SlBadge,
    title: "Work-Life Balance",
    description:
      "We are focused on achieving results and driving measurable impact",
  },
  {
    icon: SlBadge,
    title: "Work-Life Balance",
    description:
      "We are focused on achieving results and driving measurable impact",
  },
  {
    icon: SlBadge,
    title: "Work-Life Balance",
    description:
      "We are focused on achieving results and driving measurable impact",
  },
];

const featureClassNames = {
  featureContainer: "p-2 items-center border-[1.5px] border-black md-box-shadow rounded-[16px] p-[32px_40px] bg-white z-10 ",
  iconWrapper: " w-[64px] h-[64px] border-[1px] border-black sm-box-shadow rounded-full bg-white text-orange-100",
  icon: "w-[20px] h-[20px]",
};

const OurPlatformSection = () => {
  return (
    <Section className={`p-[64px_24px] xl:p-[96px_24px]`}>
      <div className="flex flex-col items-center relative gap-[40px] 2md:gap-[80px] ">
        <SlideUp delay={1} initial={{ y: "30%" }}>
          <TitleSubtitleDescriptionComponent
            className={`flex flex-col gap-4 w-full max-w-[800px] text-center`}
            {...titleSubtitleDescriptionComponentProps}
          />
        </SlideUp>
        <DoubleRotatePattern className={`absolute w-[1072px] top-[60px] `} />
        <div className="relative">
          <Features
            className={`text-center gap-8`}
            details={details}
            featureClassNames={featureClassNames}
            Animation={ZoomIn}
          />
          <ZoomIn
            delay={1}
            className="backgroundContainer -top-[50px] absolute -z-10 w-full flex justify-center"
          >
            <div className="hidden w-[70%] max-w-[fit-content] rounded-[10px] bg-cream lg:flex ">
              <ImageComponent
                src={
                  "https://framerusercontent.com/images/a1Ka7eH3A42WXFnSSJATRBOjvk.svg"
                }
                className="w-[416px] border-none shadow-none "
              />
              <ImageComponent
                src={
                  "https://framerusercontent.com/images/aLfIeREuserR0qBuRQPggSc5TE.svg"
                }
                className="w-[416px] border-none shadow-none "
              />
            </div>
          </ZoomIn>
        </div>
      </div>
    </Section>
  );
}

export default OurPlatformSection
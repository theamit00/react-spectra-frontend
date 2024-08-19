import SlideUp from "@/components/animations/SlideUp";
import ZoomIn from "@/components/animations/ZoomIn";
import CustomHeading from "@/components/CustomHeading";
import Description from "@/components/Description";
import DoubleRotatePattern from "@/components/DoubleRotatePattern";
import ImageComponent from "@/components/ImageComponent";
import RotatePattern from "@/components/RotatePattern";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import React from "react";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "content section",
  },
};

const background = {
  src: `https://framerusercontent.com/images/8fnmX9fncLbfajA8PZtK5gC9ImI.svg`,
  className:
    "max-w-[1440px] border-none shadow-none -z-10 absolute w-full left-[50%] -translate-x-[50%] top-0",
};

const PowerfulSolutionSection = () => {
  return (
    <Section className={`relative p-[64px_24px] xl:p-[96px_24px]`} background={background}>
      <div className="flex flex-col items-center gap-12">
        <SlideUp delay={1} initial={{y:"30%"}} >
          <TitleSubtitleDescriptionComponent
            className="text-center flex flex-col gap-4  "
            {...titleSubtitleDescriptionComponentProps}
          >
            <CustomHeading Tag="h2" className="xl:text-[56px]">
              Provide powerful <br /> solutions at all times.
            </CustomHeading>
          </TitleSubtitleDescriptionComponent>
        </SlideUp>
        <DoubleRotatePattern
          className={`absolute max-w-[864px] w-full top-[80px]`}
        />
        <ZoomIn delay={1.3}>
          <ImageComponent
            src={`https://framerusercontent.com/images/xgC1BI0ZizVksEaFCHX8QaZiYM.png?scale-down-to=2048`}
            className="border-none shadow-none w-full"
          />
        </ZoomIn>
        <SlideUp delay={1} initial={{y:"30%"}} >
          <Description className="max-w-[592px] text-center w-full">
            Our commenting feature is a firm favorite among our customers,
            eliminating the need for endless email threads and multiple
            messaging apps.
          </Description>
        </SlideUp>
      </div>
    </Section>
  );
};

export default PowerfulSolutionSection;

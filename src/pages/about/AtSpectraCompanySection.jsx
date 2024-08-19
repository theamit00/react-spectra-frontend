import SlideUp from "@/components/animations/SlideUp";
import Button from "@/components/Button";
import CustomHeading from "@/components/CustomHeading";
import Description from "@/components/Description";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import Line from "@/components/Line";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

const titleSubtitleDescriptionComponent = {
  heading: {
    tag: "h3",
    className: "relative xl:text-[40px] xl:max-w-[60%] w-full",
    text: "At Spectra Company, we aim to provide our customers with the highest quality software solutions.",
  },
};

const details = [
  {
    subtitle: "TOTAL WORKERS",
    stats: "348",
    highlightStates: "%",
    text: `With Spectra's responsive design, your creations will shine on any device.`,
  },
  {
    subtitle: "YEARS EXPERIENCE",
    stats: "12.8",
    highlightStates: "+",
    text: `Spectra is here to make the process of building stunning websites.`,
  },
  {
    subtitle: "CURRENT PROJECT",
    stats: "124",
    highlightStates: "+",
    text: `Spectra is here to make the process of building stunning websites.`,
  },
];

const AtSpectraCompanySection = () => {
  return (
    <Section className={`AtSpectraCompanySection p-[64px_24px] xl:p-[80px_24px]`}>
      <div className="flex flex-col gap-10">
        <SlideUp delay={1}>
          <TitleSubtitleDescriptionComponent
            className="flex justify-between flex-col xl:flex-row gap-4"
            {...titleSubtitleDescriptionComponent}
          >
            <div className="flex flex-col gap-6 xl:max-w-[384px] w-full">
              <Description>
                For designers, the template offers a vast array of visually
                captivating elements.
              </Description>
              <Button className="w-max">
                <Link
                  to={`#`}
                  className="flex items-center bg-white justify-center gap-1 "
                >
                  <span>Our Work</span>
                  <IconWrapper className="w-6 h-6">
                    <Icon>
                      <FaArrowRight />
                    </Icon>
                  </IconWrapper>
                </Link>
              </Button>
            </div>
          </TitleSubtitleDescriptionComponent>
        </SlideUp>
        <SlideUp delay={1}>
          <Line />
        </SlideUp>
        <div className="details  grid 2md:grid-cols-2 xl:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <SlideUp delay={1+(Number(index)/4)} >
              <div
                key={index}
                className="detail flex flex-col md-box-shadow p-[32px] bg-cream w-full border-[1.5px] border-black gap-2 rounded-[12px]"
              >
                <Subtitle className="text-black">{detail.subtitle}</Subtitle>
                <div className="flex gap-4">
                  <CustomHeading Tag="h1" className="xl:text-[64px]">
                    {detail.stats}
                    <span className="text-orange-100">
                      {detail.highlightStates}
                    </span>
                  </CustomHeading>
                </div>
                <Description>{detail.text}</Description>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AtSpectraCompanySection;

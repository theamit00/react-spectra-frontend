import CustomHeading from "@/components/CustomHeading";
import Description from "@/components/Description";
import Icon from "@/components/Icon";
import RoundedPattern from "@/components/RoundedPattern";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import { RiSpyFill } from "react-icons/ri";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import IconWrapper from "@/components/IconWrapper";
import ImageContainer from "./ImageContainer";
import ScrollBar from "./ScrollBar";
import FeatureDetails from "./FeatureDetails";
import SlideUp from "@/components/animations/SlideUp";
import { useState } from "react";

const props = {
  subtitle: {
    text: "spectra analytics",
  },
  heading: {
    tag: "h2",
    className: "relative xl:text-[56px]",
    text: `The only saas template you’ll ever need.`,
  },
};

const cardDetails = [
  {
    icon: RiSpyFill,
    title: "Data driven analytics",
    description:
      "Where ingenuity meets simplicity. Our mission is to revolutionize the way designers and developers collaborate",
    keyPoints: ["Responsive Components", "Over 50+ Sections"],
  },
];

const AnalyticsSection = () => {

  const [value, setValue] = useState(0);

  return (
    <Section
      className={`analytics-section p-[96px_24px] xl:p-[144px_24px_96px] `}
    >
      <div className="flex flex-col gap-12">
        <div className="flex justify-center">
          <SlideUp delay={1}>
            <TitleSubtitleDescriptionComponent
              className={`flex flex-col gap-4 max-w-[656px] w-full text-center`}
              {...props}
            />
          </SlideUp>
        </div>
        <div className="flex justify-center">
          <SlideUp delay={1}>
            <div className="relative 2md:max-w-[1072px] flex flex-col min-h-[max-content] w-full gap-14 ">
              <div className="overflow-hidden flex flex-col gap-1 ">
                <div className="grid 2md:grid-cols-2 p-[40px_24px_24px] md:p-[72px] gap-8 bg-cream border-[1.5px] rounded-[24px] border-black shadow-[0px_3px_0px_0px_#050505]">
                  {cardDetails.map((detail, index) => (
                    <Card
                      className={`bg-cream flex flex-col items-center text-center mx-auto 2md:items-start 2md:text-left 2md:mx-[unset] border-none shadow-none max-w-[488px] gap-8`}
                      key={index}
                    >
                      <CardHeader className={`p-0`}>
                        <RoundedPattern className="w-[64px] h-[64px] text-orange-100 flex justify-center items-center bg-white">
                          <detail.icon className="w-[19px] h-[19px]" />
                        </RoundedPattern>
                      </CardHeader>
                      <CardContent className={`p-0 flex flex-col gap-4 `}>
                        <CustomHeading Tag="h3" className={`xl:text-[40px]`}>
                          {detail.title}
                        </CustomHeading>
                        <Description> {detail.description} </Description>
                        <div className="points flex gap-6 flex-col items-center 2md:flex-row  ">
                          {detail.keyPoints.map((point, index) => (
                            <div className="flex gap-[6px]" key={index}>
                              <Icon className="w-4 h-4">
                                <AiFillCheckCircle className="w-4 h-4 text-orange-100" />
                              </Icon>
                              <p className="sm-p">{point}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter
                        className={`flex flex-row justify-center 2md:justify-start w-full gap-4 p-0`}
                      >
                        <Button className="w-full sm:max-w-[max-content] bg-white ">
                          <Link
                            to={`#`}
                            className="flex items-center justify-center gap-1"
                          >
                            <span>Contact Sales</span>
                            <IconWrapper className="w-6 h-6">
                              <Icon>
                                <FaArrowRight />
                              </Icon>
                            </IconWrapper>
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}

                  <div className="flex items-center">
                    <ImageContainer value={value} />
                  </div>
                </div>
                <div></div>
              </div>

              <div className="flex flex-col gap-10">
                <ScrollBar value={value} />
                <FeatureDetails setValue={setValue} />
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </Section>
  );
};

export default AnalyticsSection;

import CustomHeading from "@/components/CustomHeading";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import RoundedPattern from "@/components/RoundedPattern";
import Description from "@/components/Description";
import Icon from "@/components/Icon";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import ImageComponent from "@/components/ImageComponent";
import SlideUp from "@/components/animations/SlideUp";

const cardDetails = [
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
  },
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
  },
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
  },
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
  },
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
  },
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
  },
];

const background = {
    src : 'https://framerusercontent.com/images/r6r3yoEjmRyyyPwqyY74q75I.svg',
    className  :"absolute w-full top-0 left-0 border-none -z-10 shadow-none rounded-none"
}


const CompanyValueSection = () => {
  return (
    <Section
      className={`companyValueSection p-[64px_24px] xl:p-[80px_24px] relative `}
      background={background}
    >
      <div className="flex flex-col items-center gap-16">
        <SlideUp delay={1}>
          <div className="max-w-[570px] flex flex-col items-center text-center gap-3">
            <Subtitle>CONTENT SECTION</Subtitle>
            <CustomHeading Tag="h2" className="xl:text-[56px]">
              Our Company's Values
            </CustomHeading>
          </div>
        </SlideUp>
        <div>
          <div className="grid  md:grid-cols-2 xl:grid-cols-3  gap-8">
            {cardDetails.map((detail, index) => {

              let delay;

              if(index === 0 || index === 3) delay = 1+(0/4)
              if(index === 1 || index === 4) delay = 1+(1/4)
              if(index === 2 || index === 5) delay = 1+(2/4)

              return (
              <SlideUp delay={delay} >
                <Card
                  key={index}
                  className={`p-8 flex flex-col gap-8 border-none shadow-none items-center `}
                >
                  <CardHeader className={`p-0`}>
                    <RoundedPattern className="w-[64px] h-[64px] text-orange-100 flex justify-center items-center bg-white">
                      <detail.icon className="w-[19px] h-[19px]" />
                    </RoundedPattern>
                  </CardHeader>
                  <CardContent
                    className={`p-0 flex flex-col gap-3 text-center `}
                  >
                    <CustomHeading Tag="h5">{detail.title}</CustomHeading>
                    <Description> {detail.description} </Description>
                  </CardContent>
                </Card>
              </SlideUp>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CompanyValueSection;

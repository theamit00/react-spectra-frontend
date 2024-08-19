import LeftIn from "@/components/animations/LeftIn";
import RightIn from "@/components/animations/RightIn";
import SlideUp from "@/components/animations/SlideUp";
import BulletPoints from "@/components/BulletPoints";
import CustomHeading from "@/components/CustomHeading";
import Description from "@/components/Description";
import Icon from "@/components/Icon";
import RoundedPattern from "@/components/RoundedPattern";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { slideUp } from "@/lib/animations";
import { FaStar } from "react-icons/fa6";

const cardDetails = [
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
    keyPoints: ["Add a descriptive feature here", "Add a feature point here"],
  },
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
    keyPoints: ["Add a descriptive feature here", "Add a feature point here"],
  },
  {
    icon: FaStar,
    title: "Quality First",
    description:
      "Whether you're a seasoned professional or just starting your creative journey",
    keyPoints: ["Add a descriptive feature here", "Add a feature point here"],
  },
];

const CoreFeatureSection = () => {
  return (
    <Section className={`hero-section p-[144px_24px_96px] xl:p-[96px_24px] `}>
      <div className="flex flex-col gap-10">
        <TitleSubtitleDescriptionComponent
          className={`flex flex-col w-full lg:flex-row lg:justify-between gap-4 `}
        >
          <LeftIn delay={1} duration={0.5}>
            <CustomHeading
              Tag="h3"
              className="relative xl:text-[40px] w-full max-w-[516px] -order-1 "
            >
              Learn about our product <br />
              and core features
            </CustomHeading>
          </LeftIn>

          <RightIn delay={1} duration={0.5}>
            <Description className={`sm:max-w-[80%] lg:max-w-[488px] w-full `}>
              We believe in pushing boundaries and setting new standards.
              Spectra embodies this philosophy, providing a comprehensive suite
              of tools that inspire you to think.
            </Description>
          </RightIn>
        </TitleSubtitleDescriptionComponent>
        <div className="relative flex">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardDetails.map((detail, index) => (
              <SlideUp delay={1 + Number(index) / 2} duration={0.5} key={index}>
                <Card
                  className={`p-[48px_40px] border-[1.5px] rounded-[20px] border-black shadow-[0px_3px_0px_0px_#050505] flex flex-col gap-8 bg-cream`}
                >
                  <CardHeader className={`p-0`}>
                    <RoundedPattern className="w-[64px] h-[64px] text-orange-100 flex justify-center items-center bg-white">
                      <detail.icon className="w-[19px] h-[19px]" />
                    </RoundedPattern>
                  </CardHeader>
                  <CardContent className={`p-0 flex flex-col gap-4 `}>
                    <CustomHeading Tag="h5">{detail.title}</CustomHeading>
                    <Description> {detail.description} </Description>
                  </CardContent>
                  <CardFooter className={`flex flex-col items-start gap-4 p-0`}>
                    {detail.keyPoints.map((point, index) => (
                      <BulletPoints key={index}>{point}</BulletPoints>
                    ))}
                  </CardFooter>
                </Card>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoreFeatureSection;

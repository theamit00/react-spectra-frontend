import CustomHeading from "@/components/CustomHeading";
import Icon from "@/components/Icon";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import { FaDatabase } from "react-icons/fa6";

import { FaClock } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Description from "@/components/Description";
import BulletPoints from "@/components/BulletPoints";
import SlideUp from "@/components/animations/SlideUp";
import LeftIn from "@/components/animations/LeftIn";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "SPECTRA PRODUCT OVERVIEW",
    className: "-order-2",
  },
  description: {
    text: "Whether you're a seasoned professional or just starting your creative journey, Spectra is here to make the process of building faster.",
  },
};

const details = [
  {
    icon: FaDatabase,
    title: "API Integrations",
    description:
      "Quality first. All projects are backed by our fanatic support & 100% satisfaction guarantee.",
  },
  {
    icon: FaClock,
    title: "API Integrations",
    description:
      "Quality first. All projects are backed by our fanatic support & 100% satisfaction guarantee.",
  },
];

const BuildYourSiteSection = () => {
  return (
    <Section
      className={`build-your-site-section p-[96px_24px_72px] xl:p-[144px_24px_96px] `}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className=" relative flex flex-col w-full justify-between gap-[72px] xl:flex-col 2md:flex-row xl:max-w-[488px]">
          {details.map((detail) => (
            <LeftIn delay={1}>
              <Card className="border-[1.5px] rounded-[20px] bg-cream border-black md-box-shadow p-[64px_40px_40px] relative">
                <CardHeader
                  className="p-0  w-16 h-16 border-[1.2px] border-black sm-box-shadow rounded-full 
                flex justify-center items-center absolute top-0 -translate-y-[50%] text-orange-100 bg-white"
                >
                  <Icon className="w-8 h-8 flex justify-center items-center">
                    <detail.icon />
                  </Icon>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-3 ">
                  <CustomHeading Tag="h5">{detail.title}</CustomHeading>
                  <Description>{detail.description}</Description>
                </CardContent>
              </Card>
            </LeftIn>
          ))}
        </div>
        <div className="flex  flex-col justify-center gap-16">
          <SlideUp delay={1}>
            <div className="flex flex-col w-full xl:max-w-[550px] gap-8">
              <TitleSubtitleDescriptionComponent
                className={`flex w-full xl:max-w-[550px] flex-col gap-4`}
                {...titleSubtitleDescriptionComponentProps}
              >
                <CustomHeading
                  Tag="h3"
                  className="relative xl:text-[40px] -order-1"
                >
                  Build your site{" "}
                  <br className="hidden xl:block" />
                  faster with Spectra
                </CustomHeading>
                <Description>
                  Whether you're a seasoned pro or just starting your journey,
                  Spectra's inclusive environment welcomes everyone
                </Description>
              </TitleSubtitleDescriptionComponent>
              <div className="flex flex-col sm:flex-row gap-6">
                <BulletPoints className="flex-1">
                  Small feature description here
                </BulletPoints>
                <BulletPoints className="flex-1">
                  Small feature description here
                </BulletPoints>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </Section>
  );
};

export default BuildYourSiteSection;

import CustomHeading from "@/components/CustomHeading";
import PricingCards from "@/components/PricingCards";
import Section from "@/components/Section";
import Tabs from "@/components/Tabs";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import React, { useState } from "react";
import { PiDatabase } from "react-icons/pi";
import { WiStars } from "react-icons/wi";

import { cardDetails } from "./cardDetails";
import { SlideUp } from "@/components/animations";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "our history",
  },
};

const tabs = [
  {
    icon: WiStars,
    text: "Bill Annually",
    value: "annually",
  },
  {
    icon: PiDatabase,
    text: "Bill Monthly",
    value: "monthly",
  },
];

const background = {
  src: `https://framerusercontent.com/images/r6r3yoEjmRyyyPwqyY74q75I.svg`,
  className:
    "max-w-[1440px] border-none shadow-none -z-10 absolute w-full left-[50%] -translate-x-[50%] top-0",
};


const HeroSection = () => {
  const [value, setValue] = useState(tabs[0].value);
  console.log(value)

  return (
    <Section
      className={`heroSecton p-[144px_24px_72px] xl:p-[192px_24px_96px] `}
      background={background}
    >
      <div className="flex flex-col items-center gap-6">
        <SlideUp delay={0.5} initial={{ y: "20%" }}>
          <TitleSubtitleDescriptionComponent
            className=" max-w-[656px] text-center flex flex-col gap-4"
            {...titleSubtitleDescriptionComponentProps}
          >
            <CustomHeading Tag="h1" className="xl:text-[64px]">
              Our Plans Scale With <br /> Your Business
            </CustomHeading>
          </TitleSubtitleDescriptionComponent>
        </SlideUp>

        <SlideUp delay={1} className={`w-full`}>
          <div className="footer flex flex-col gap-6 w-full ">
            <div className="tabs flex w-full justify-center ">
              <Tabs
                tabs={tabs}
                value={value}
                setValue={setValue}
                className={`w-max`}
              />
            </div>
            <PricingCards details={cardDetails} value={value} />
          </div>
        </SlideUp>
      </div>
    </Section>
  );
};

export default HeroSection;

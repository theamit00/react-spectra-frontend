import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import React, { useState } from "react";
import Tabs from "../Tabs";
import CustomAccordian from "./CustomAccordian";
import { WiStars } from "react-icons/wi";
import { PiDatabase } from "react-icons/pi";
import SlideUp from "../animations/SlideUp";


const titleSubtitleDescriptionComponent = {
  subtitle: {
    text: "SPECTRA FAQS",
  },
  heading: {
    tag: "h2",
    text: "Frequently Asked Questions",
    className: "relative xl:text-[56px]",
  },
  description: {
    text: "Explore solutions in our FAQ section",
  },
};

const background = {
  src: "https://framerusercontent.com/images/r6r3yoEjmRyyyPwqyY74q75I.svg",
  className:
    "absolute w-full top-0 left-0 border-none -z-10 shadow-none rounded-none",
};

const tabs = [
  {
    icon: WiStars,
    text: "Tab One",
    value: "tab-one",
  },
  {
    icon: PiDatabase,
    text: "Tab Two",
    value: "tab-two",
  },
];

const FaqSection = () => {

  const [value, setValue] = useState(tabs[0].value);

  return (
    <Section
      className={`companyValueSection p-[64px_24px] xl:p-[80px_24px] relative overflow-hidden `}
      background={background}
    >
      <SlideUp delay={1}>
        <div className="flex flex-col items-center gap-10">
          <TitleSubtitleDescriptionComponent
            className="max-w-[800px] w-full flex flex-col gap-[14px] text-center "
            {...titleSubtitleDescriptionComponent}
          />

          <Tabs tabs={tabs} value={value} setValue={setValue} />
          <CustomAccordian value={value} />
        </div>
      </SlideUp>
    </Section>
  );
};

export default FaqSection;

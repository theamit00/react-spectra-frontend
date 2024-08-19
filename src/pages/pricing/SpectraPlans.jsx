import DoubleRotatePattern from "@/components/DoubleRotatePattern";
import Section from "@/components/Section";
import Tabs from "@/components/Tabs";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import React, { useState } from "react";
import { PiDatabase } from "react-icons/pi";
import { WiStars } from "react-icons/wi";
import { cardDetails } from "./cardDetails";
import Icon from "@/components/Icon";
import Line from "@/components/Line";
import BulletPoints from "@/components/BulletPoints";
import ButtonWithArrow from "@/components/ButtonWithArrow";
import Subtitle from "@/components/Subtitle";
import { IoIosInformationCircle } from "react-icons/io";
import { SlideUp } from "@/components/animations";
import Tables from "./Tables";

const titleSubtitleDescriptionComponentProps = {
  heading: {
    tag: "h2",
    text: "Spectra Plans",
    className: "xl:text-[56px]",
  },
  description: {
    text: "Our commenting feature is a firm favorite among our customers, eliminating the need for endless email threads and multiple messaging apps.",
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

const SpectraPlans = () => {
  const [value, setValue] = useState(tabs[0].value);
  return (
    <Section className={`p-[72px_24px] 2md:p-[96px_24px] relative`}>
      <div className="flex flex-col items-center gap-12">
        <div className="header  ">
          <SlideUp delay={1}>
            <TitleSubtitleDescriptionComponent
              className="text-center max-w-[480px] w-full flex flex-col gap-4 "
              {...titleSubtitleDescriptionComponentProps}
            />
          </SlideUp>
        </div>
        <DoubleRotatePattern
          className={`absolute top-[56px] max-w-[976px] w-full`}
        />

        <SlideUp delay={1} className={`w-full`}>
          <div className="middle flex gap-6 w-full flex-col xl:flex-row">
            <div className="flex flex-col gap-[10px] justify-end">
              <Subtitle className="text-black capitalize">
                Spectra Billing:
              </Subtitle>
              <Tabs
                tabs={tabs}
                value={value}
                setValue={setValue}
                className={`flex-col rounded-[8px_!important] h-max w-max`}
                tabClassName={`rounded-[6px_!important]`}
              />
            </div>
            <div className="grid  gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
              {cardDetails.map((detail) => (
                <div
                  className={`cardContainer p-6 flex flex-col gap-4 border-[1.5px] border-black rounded-[20px] md-box-shadow ${
                    detail.type === "pro" ? "bg-cream" : "bg-white"
                  } `}
                >
                  <div className="priceDetails flex flex-col gap-1 ">
                    <h6 className="type capitalize">{detail.type}</h6>
                    <div className={`${value}Price flex gap-[6px] `}>
                      <p className="sm-p">${detail.price[value]}</p>
                      <p className="sm-p">
                        user/<span className="capitalize">{value}</span>
                      </p>
                    </div>
                  </div>
                  <Line />
                  <ButtonWithArrow
                    className={`w-full`}
                    isOrange={detail.type === "pro"}
                    text={`Get Started`}
                  />
                </div>
              ))}
            </div>
          </div>
        </SlideUp>

        <SlideUp delay={1} className={`w-full`}>
          <Line />
        </SlideUp>

        <Tables />
      </div>
    </Section>
  );
};

export default SpectraPlans;

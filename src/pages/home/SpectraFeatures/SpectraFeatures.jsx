import Button from "@/components/Button";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import Features from "../../../components/Features";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "SPECTRA PRODUCT OVERVIEW",
    className: "-order-2",
  },
  heading: {
    tag: "h2",
    text: "A new Social Media Models.",
    className: "relative xl:text-[56px]",
  },
  description: {
    text: "This all-in-one platform is tailored to elevate your projects to new heights, providing you with the freedom to experiment.",
  },
};

import { FaRegChartBar } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import SlideUp from "@/components/animations/SlideUp";

const details = [
  {
    icon: FaRegChartBar,
    title: "Real-Time Data Insights",
    description:
      "Leave mediocrity behind and embark on a journey of exploration",
  },
  {
    icon: FaRegChartBar,
    title: "Customizable Alerts",
    description:
      "Say goodbye to unnecessary complexities and embrace the simplicity of Spectra.",
  },
  {
    icon: LuCalendarClock,
    title: "Automated Financial Report",
    description:
      "We  keep our promises, provide upfront timelines and bring predictability.",
  },
];

const featureClassNames = {
  featureContainer: " 2md:items-start 2md:text-left items-center text-center",
};

const SpectraFeatures = () => {
  return (
    <Section
      className={`spectraFeatures  xl:p-[144px_24px_96px] p-[96px_24px] `}
    >
      <div className="flex flex-col gap-[140px] ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <SlideUp delay={1}>
            <div className="flex flex-col max-w-[488px] gap-8">
              <TitleSubtitleDescriptionComponent
                className={`flex max-w-[550px] w-full flex-col gap-4`}
                {...titleSubtitleDescriptionComponentProps}
              />

              <Button className="w-full sm:max-w-[max-content] bg-white ">
                <Link
                  to={`#`}
                  className="flex items-center justify-center gap-1"
                >
                  <span>Learn More</span>
                  <IconWrapper className="w-6 h-6">
                    <Icon>
                      <FaArrowRight />
                    </Icon>
                  </IconWrapper>
                </Link>
              </Button>
            </div>
          </SlideUp>
          <Stats />
        </div>
        <Features
          className={`gap-10 2md:gap-[128px]`}
          featureClassNames={featureClassNames}
          details={details}
        />
      </div>
    </Section>
  );
};

export default SpectraFeatures;

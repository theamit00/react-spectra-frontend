import Description from "@/components/Description";
import Icon from "@/components/Icon";
import ImageComponent from "@/components/ImageComponent";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import { IoIosPeople } from "react-icons/io";
import { BsLightningFill } from "react-icons/bs";
import CustomHeading from "@/components/CustomHeading";
import RoundedPattern from "@/components/RoundedPattern";
import SlideUp from "@/components/animations/SlideUp";
import ZoomIn from "@/components/animations/ZoomIn";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "content section",
    className: "",
  },
  heading: {
    tag: "h2",
    className: "relative xl:text-[56px]",
    text: "Provide powerful solutions at all times.",
  },
};

const details = [
  {
    icon: IoIosPeople,
    stats: "98",
    highlightStates: "%",
    text: `With Spectra's responsive design, your creations will shine on any device.`,
  },
  {
    icon: BsLightningFill,
    stats: "24K",
    highlightStates: "+",
    text: `Spectra is here to make the process of building stunning websites.`,
  },
];

const PowerfulSolutionSection = () => {
  return (
    <Section
      className={`powerful-solution-section p-[80px_24px] xl:p-[112px_24px] `}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-8 ">
        <SlideUp delay={1}>
          <div className="max-w-[550px] flex flex-col gap-14">
            <TitleSubtitleDescriptionComponent
              className={`flex  w-full flex-col gap-4`}
              {...titleSubtitleDescriptionComponentProps}
            >
              <Description>
                Embrace a world of endless possibilities as you immerse yourself
                <span className="flex gap-[6px]">
                  in powerful solutions.
                  <span className="px-2 bg-cream rounded-full">
                    build powerful marketing sites.
                  </span>
                </span>
              </Description>
            </TitleSubtitleDescriptionComponent>
            <div className="details flex gap-8 ">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="detail flex flex-col flex-[1_0_0px] max-w-[fit-content] gap-3 "
                >
                  <div className="flex gap-4">
                    <Icon className="w-[40px] h-[40px] text-orange-100 ">
                      <detail.icon className="w-[40px] h-[40px]" />
                    </Icon>
                    <CustomHeading Tag="h3">
                      {detail.stats}
                      <span className="text-orange-100">
                        {detail.highlightStates}
                      </span>
                    </CustomHeading>
                  </div>
                  <Description className="sm-p">{detail.text}</Description>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>
        <div className="  relative flex justify-center ">
          <div className="image-container flex justify-center xl:justify-end relative w-[min-content] sm:min-h-[408px]">
            <SlideUp
              delay={1.5}
              duration={0.5}
              className={`absolute right-[16px] sm:right-[32px] -top-[32px] z-30`}
            >
              <ImageComponent
                src={`https://framerusercontent.com/images/VdRz3qZwsSFCUnHdskJqMoRUg.png?scale-down-to=512`}
                className="w-[203px] sm:w-[260px] sm:max-h-[308px] sm:h-[fit-content] "
              />
            </SlideUp>
            <SlideUp
              delay={1.8}
              duration={0.4}
              className={`absolute left-[16px] -bottom-[32px] top-[unset] sm:left-[32px] sm:bottom-[unset] sm:top-[166px] z-40 `}
            >
              <ImageComponent
                src={`https://framerusercontent.com/images/O1JkJUFpNelOoODKNvE5w8kt9b8.png?scale-down-to=512`}
                className=" w-[194px] sm:w-[260px] max-h-[242px] h-[fit-content] "
              />
            </SlideUp>
            <ZoomIn
              delay={1.1}
              duration={0.5}
              className={`absolute left-[16px] top-[24px] sm:left-[72px] sm:top-[46px] z-20 `}
            >
              <RoundedPattern
                src={`https://framerusercontent.com/images/EtnJslTrWSwMZWAXZ8YSf477Q.svg`}
                className="bg-white w-[72px] h-[72px] flex justify-center items-center "
                imageClassname="w-[40px] h-[40px] "
              />
            </ZoomIn>
            <ZoomIn delay={1}>
              <div className=" w-[342px] sm:w-[510px] h-[308px] rounded-[20px] z-10 bg-cream"></div>
            </ZoomIn>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PowerfulSolutionSection;

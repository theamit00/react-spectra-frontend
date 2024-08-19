import Button from "@/components/Button";
import CustomHeading from "@/components/CustomHeading";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import { IoLayersSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import VideoComponent from "@/components/VideoComponent";
import ZoomIn from "@/components/animations/ZoomIn";
import SlideUp from "@/components/animations/SlideUp";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "SPECTRA PRODUCT OVERVIEW",
    className: "-order-2",
  },
  description: {
    text: "Whether you're a seasoned professional or just starting your creative journey, Spectra is here to make the process of building faster.",
  },
};

const BuildYourSiteSection = () => {
  return (
    <Section
      className={`build-your-site-section p-[80px_24px] xl:p-[144px_24px_96px] `}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8">
        <div className=" relative flex justify-center ">
          <ZoomIn delay={1}>
            <div className=" flex flex-col justify-center xl:justify-end relative max-w-[592px] gap-4">
              <VideoComponent>
                <Button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                  <Link
                    to={`#`}
                    className="flex items-center justify-center gap-[6px]"
                  >
                    <Icon className="w-10 h-10 flex items-center justify-center">
                      <IoIosPlayCircle className="w-[26px] h-[26px] text-orange-100" />
                    </Icon>
                    <p className="sm-p font-spaceGrotesk font-medium">
                      Watch Video (2:36)
                    </p>
                  </Link>
                </Button>
              </VideoComponent>
              <div className="flex items-center gap-1">
                <Icon className="w-6 h-6">
                  <IoIosInformationCircle className="text-grey" />
                </Icon>
                <p className="sm-p text-grey">
                  Elevate your projects to new heights with Spectra
                </p>
              </div>
            </div>
          </ZoomIn>
        </div>
        <div className="flex justify-start xl:justify-end gap-16">
          <SlideUp delay={1}>
            <div className="flex flex-col max-w-[550px] gap-14">
              <TitleSubtitleDescriptionComponent
                className={`flex max-w-[550px] w-full flex-col gap-4`}
                {...titleSubtitleDescriptionComponentProps}
              >
                <CustomHeading
                  Tag="h2"
                  className="relative xl:text-[56px] -order-1"
                >
                  Build your site
                  <br />
                  faster with Spectra
                </CustomHeading>
              </TitleSubtitleDescriptionComponent>
              <div className="detail flex flex-col gap-6 max-w-[384px]">
                <Icon className="w-[40px] h-[40px] text-orange-100 ">
                  <IoLayersSharp className="w-[24px] h-[27px]" />
                </Icon>
                <CustomHeading Tag="h6">
                  Say goodbye to unnecessary complexities and embrace the
                  simplicity of Spectra.
                </CustomHeading>
                <Button className="max-w-[max-content] bg-white ">
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
            </div>
          </SlideUp>
        </div>
      </div>
    </Section>
  );
};

export default BuildYourSiteSection;

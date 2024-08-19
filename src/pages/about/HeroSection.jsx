import Button from "@/components/Button";
import CustomHeading from "@/components/CustomHeading";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import ImageComponent from "@/components/ImageComponent";
import RotatePattern from "@/components/RotatePattern";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";
import { RiMouseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import VideoComponent from "@/components/VideoComponent";
import SlideUp from "@/components/animations/SlideUp";
import ZoomIn from "@/components/animations/ZoomIn";

const HeroSection = () => {
  const props = {
    subtitle: {
      text: "SPECTRA PRODUCT OVERVIEW",
      className: " -order-2 ",
    },
    description: {
      text: "At the heart of Spectra lies a powerful yet intuitive interface that caters to both designers and developers",
      className: "max-w-[416px] w-full",
    },
  };

  return (
    <Section
      className={`hero-section p-[144px_24px_96px] xl:p-[192px_24px_80px] `}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <SlideUp delay={0.5}>
          <div className="flex flex-col gap-8">
            <TitleSubtitleDescriptionComponent
              className={`flex w-full flex-col gap-4`}
              {...props}
            >
              <CustomHeading
                Tag="h1"
                className="relative xl:text-[64px] -order-1 "
              >
                <span className="inline-block relative">
                  We’re On a{" "}
                  <RotatePattern
                    className={`absolute xl:hidden top-[2%] -right-16 xl:top-[unset] xl:bottom-0 xl:left-[326px]`}
                  />{" "}
                </span>
                <br /> Mission to Power Customers
                <RotatePattern
                  className={`absolute hidden xl:block xl:top-[unset] xl:bottom-0 xl:right-6 xl:left-[326px]`}
                />
              </CustomHeading>
            </TitleSubtitleDescriptionComponent>
            <div className="button-groups flex gap-4 ">
              <Button>
                <Link
                  to={`#`}
                  className="flex items-center bg-white justify-center gap-1"
                >
                  <span>Sign up for free</span>
                  <IconWrapper className="w-6 h-6">
                    <Icon>
                      <FaArrowRight />
                    </Icon>
                  </IconWrapper>
                </Link>
              </Button>
              <Button isOrange={true}>
                <Link
                  to={`#`}
                  className="flex items-center justify-center gap-1"
                >
                  <IconWrapper className="w-6 h-6">
                    <Icon>
                      <IoIosPlayCircle />
                    </Icon>
                  </IconWrapper>
                  <span>Watch Video (1:24)</span>
                </Link>
              </Button>
            </div>
          </div>
        </SlideUp>
        <div className="relative flex justify-center ">
          <ZoomIn delay={0.5}>
            <VideoComponent className={`max-h-[428px] md:h-max overflow-hidden`} >
              <Button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[72px] h-[72px] ">
                <Link
                  to={`#`}
                  className="flex items-center justify-center gap-[6px]"
                >
                  <Icon className="w-10 h-10 flex items-center justify-center">
                    <IoIosPlayCircle className="w-[26px] h-[26px] text-orange-100" />
                  </Icon>
                </Link>
              </Button>
            </VideoComponent>
          </ZoomIn>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

import FadeIn from "@/components/animations/FadeIn";
import RotateLeft from "@/components/animations/RotateLeft";
import SlideUp from "@/components/animations/SlideUp";
import ZoomIn from "@/components/animations/ZoomIn";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import ImageComponent from "@/components/ImageComponent";
import RotatePattern from "@/components/RotatePattern";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";
import { RiMouseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const titleSubtitleDescriptionComponentProps = {
    subtitle: {
      text: "SPECTRA PRODUCT OVERVIEW",
      className: "",
    },
    heading: {
      tag: "h1",
      className: "relative xl:text-[64px]",
      text: "The Future of Decision - Making Made Simple",
      children: (
        <RotatePattern
          className={`absolute bottom-0 right-6 xl:left-[388px]`}
        />
      ),
    },
    description: {
      text: "Crafted for designers and developers alike, Spectra offers an unrivaled innovative platform",
      className: "max-w-[416px] w-full",
    },
  };

  return (
    <Section
      className={`hero-section p-[144px_24px_96px] xl:p-[192px_24px_112px] `}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <SlideUp delay={0.5}>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <TitleSubtitleDescriptionComponent
                className={`flex max-w-[592px] w-full flex-col gap-4`}
                {...titleSubtitleDescriptionComponentProps}
              />
              <div className="button-groups flex gap-4 ">
                <Button>
                  <Link
                    to={`#`}
                    className="flex items-center bg-white justify-center gap-1"
                  >
                    <span>See all reviews</span>
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
            <div className="flex gap-1">
              <IconWrapper className="w-6 h-6">
                <Icon className="w-6 h-6">
                  <RiMouseFill className="text-grey" />
                </Icon>
              </IconWrapper>
              <p className="sm-p font-spaceGrotesk text-grey font-medium ">
                Scroll down for new section
              </p>
            </div>
          </div>
        </SlideUp>
        <div className="min-h-[414px] sm:min-h-[544px]  relative flex justify-center ">
          <div className="image-container flex justify-center xl:justify-end relative max-w-[592px] w-full h-full">
            <ZoomIn delay={1}>
              <ImageComponent
                src={`https://framerusercontent.com/images/EDnGwSW85QvFiX5QkrMo3rIv8.png`}
                className="border-[1.5px] border-black rounded-[28px] w-full sm:w-[556px] h-[fit-content] md-box-shadow"
              />
            </ZoomIn>
            <RotateLeft
              className={`-rotate-[8deg] top-[120px] right-6 sm:right-[unset] left-[unset] flex sm:block justify-end sm:left-[136px] absolute bottom-0 h-min`}
              delay={1.3}
            >
              <ImageComponent
                src={`https://framerusercontent.com/images/a9SPJ9yjKD1CAgixaYidiiUQSZk.png`}
                className="border-[1.5px] border-black rounded-[28px] w-[75%] sm:w-[376px] h-[fit-content] md-box-shadow"
              >
                <FadeIn
                  className="absolute hidden sm:block -left-[48px] -bottom-[32px]"
                  delay={2}
                >
                  <ImageComponent
                    src={`https://framerusercontent.com/images/qkxNza5xJ6AftcsemV9q5abTG4.svg`}
                    className="bg-white border-none shadow-none w-[46px] h-[32px]"
                  />
                </FadeIn>
              </ImageComponent>
            </RotateLeft>
            <ZoomIn className={`absolute hidden sm:block -left-[36px] bottom-[80px] `} delay={1} >
              <ImageComponent
                className="w-[96px] h-[96px] sm-box-shadow border-[1.5px] bg-white border-black flex justify-center items-center rounded-full "
                src={`https://framerusercontent.com/images/KYSnlUgQs8Eje0RPBHlLcq27Po.svg`}
                imageClassname="w-[52px] h-[52px]"
              />
            </ZoomIn>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

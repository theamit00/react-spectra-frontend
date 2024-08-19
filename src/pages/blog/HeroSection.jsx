import CustomHeading from "@/components/CustomHeading";
import Decor from "@/components/Decor";
import DoubleRotatePattern from "@/components/DoubleRotatePattern";
import ImageComponent from "@/components/ImageComponent";
import Section from "@/components/Section";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";
import React from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { SlideUp, ZoomIn } from "@/components/animations";

const titleSubtitleDescriptionComponentProps = {
  subtitle: {
    text: "content section",
    className : "-order-2"
  },
  description: {
    text: "Empowering customers drives change. Join us for a transformative journey.",
    className : "max-w-[416px]"
  },
};

const background = {
  src: `https://framerusercontent.com/images/8fnmX9fncLbfajA8PZtK5gC9ImI.svg`,
  className:
    "max-w-[1440px] border-none shadow-none -z-30 absolute w-full left-[50%] -translate-x-[50%] top-0",
};

const images = [
  {
    src: "https://framerusercontent.com/images/AZ2giOXhN0NUvf5pwzOQ0ZOpCl8.svg",
  },
  {
    src: "https://framerusercontent.com/images/mt4pgIeXewwOhjxqcamfXf4itIQ.svg",
  },
  {
    src: "https://framerusercontent.com/images/WbeqHmQsqim3qLrPBQEnU9o4OJM.svg",
  },
  {
    src: "https://framerusercontent.com/images/5to7TFV0hEYrDwRnBt4AwzOAc.svg",
  },
];

const HeroSection = () => {
  return (
    <Section
      className={`relative p-[144px_24px_72px] xl:p-[192px_24px_96px]`}
      background={background}
    >
      <div className="flex flex-col items-center gap-12">
        <SlideUp delay={0.5} initial={{ y: "30%" }}>
          <TitleSubtitleDescriptionComponent
            className="text-center flex flex-col items-center max-w-[656px] gap-4  "
            {...titleSubtitleDescriptionComponentProps}
          >
            <CustomHeading Tag="h1" className="xl:text-[64px] -order-1">
              Insights and advice <br /> from our expert team.
            </CustomHeading>
          </TitleSubtitleDescriptionComponent>
        </SlideUp>
        <DoubleRotatePattern
          className={`absolute max-w-[982px] w-full top-[80px]`}
        />
        <ZoomIn delay={1}>
          <div className=" max-w-[1060px] 2md:w-[90%] xl:w-full bg-white border-[1.5px] sm-box-shadow border-black rounded-[24px] relative m-auto">
            <Decor className={`-left-[48px] rotate-[4deg] `}>
              <ImageComponent
                src={`	https://framerusercontent.com/images/qkxNza5xJ6AftcsemV9q5abTG4.svg`}
                className="w-[46px] absolute -left-[49px] border-none shadow-none -rotate-[4deg] -bottom-[30px]"
              />
            </Decor>
            <div className="grid xl:grid-cols-2 xl:gap-[10px] border-b-0 xl:border-b-[1.2px] border-lightGrey ">
              <div className="blogContainer flex flex-col  gap-8 p-[40px_32px]  border-b-[1.2px] xl:p-10 xl:border-b-0 border-r-0 xl:border-r-[1.2px] border-lightGrey">
                <div className="header flex flex-col gap-4 ">
                  <div className="flex gap-6">
                    <div className="postDate flex gap-2">
                      <Icon className="text-orange-100 w-6 h-6 ">
                        <AiOutlineCalendar className="w-4 h-4" />
                      </Icon>
                      <span className="sm-p">July 21,2024</span>
                    </div>
                    <div className="readingTime flex gap-2">
                      <Icon className="text-orange-100 w-6 h-6 ">
                        <LuClock3 className="w-4 h-4" />
                      </Icon>
                      <span className="sm-p"> 12 min read</span>
                    </div>
                  </div>
                  <h3 className="title xl:text-[40px]">
                    Learn from Other Designers Mistakes
                  </h3>
                  <p className="description">
                    Euismod aliquet odio cursus lacus, ut sit suspendisse
                    ultrices. Etiam enim risus faucibus feugiat ut enim in sed
                    tincidunt.
                  </p>
                </div>
                <div className="footer">
                  <Button className="max-w-[max-content] group px-0 py-0 border-none shadow-none bg-white hover:bg-white hover:text-orange-100 ">
                    <Link
                      to={`#`}
                      className="flex items-center justify-center gap-4"
                    >
                      <span>Learn More</span>
                      <IconWrapper className="w-8 h-8 text-white group-hover:translate-x-2 transition-all duration-500 bg-orange-100 rounded-full">
                        <Icon>
                          <FaArrowRight />
                        </Icon>
                      </IconWrapper>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 xl:flex flex-col gap-6 p-8 border-b-[1.2px] xl:border-b-0 border-lightGrey ">
                <div className="flex flex-col justify-center gap-2">
                  <h5 className="xl:text-[24px]">Popular Blog:</h5>
                  <p className="sm-p">
                    Euismod aliquet odio cursus lacus, ut sit suspendisse
                    ultrices. Etiam enim risus faucibus feugiat ut enim in sed
                    tincidunt.
                  </p>
                </div>
                <ImageComponent
                  src={`https://framerusercontent.com/images/EhxjpBWxbdlX5RuKjzKzfSGGtA.svg`}
                  className="xl:h-[212px] w-full border-none block shadow-none rounded-none"
                />
              </div>
            </div>
            <div className="relative flex flex-col gap-6 p-8 xl:p-12">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="border-[1px] border-black rounded-[12px] sm-box-shadow h-[56px] p-[16px_24px] flex flex-[1_0_0px] justify-center items-center bg-cream"
                >
                  <ImageComponent
                    src={image.src}
                    className="w-max border-none shadow-none "
                  />
                </div>
              ))}
            </div>
            <Decor className={`-right-[48px] -rotate-[4deg] `} />
          </div>
        </ZoomIn>
      </div>
    </Section>
  );
};

export default HeroSection;

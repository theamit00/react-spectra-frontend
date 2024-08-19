import Button from "@/components/Button";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import ImageComponent from "@/components/ImageComponent";
import Section from "@/components/Section";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import MarqueeComponent from "./MarqueeComponent";
import SlideUp from "../animations/SlideUp";

const stars = [
  "https://framerusercontent.com/images/rsIwLQYyZyRVAB1meW8phPfyAJU.svg",
  "https://framerusercontent.com/images/rsIwLQYyZyRVAB1meW8phPfyAJU.svg",
  "https://framerusercontent.com/images/rsIwLQYyZyRVAB1meW8phPfyAJU.svg",
  "https://framerusercontent.com/images/rsIwLQYyZyRVAB1meW8phPfyAJU.svg",
  "https://framerusercontent.com/images/rsIwLQYyZyRVAB1meW8phPfyAJU.svg",
];

const ReviewSection = () => {
  return (
    <section
      className={`build-your-site-section p-[72px_0px] xl:p-[96px_96px] bg-cream `}
    >
      <SlideUp delay={1} className={`flex flex-col gap-12`}>
        <div className="container max-w-[1056px] w-full flex flex-col gap-8 px-6 ">
          <div className="head flex flex-col items-start gap-8 2md:flex-row 2md:justify-between 2md:items-end ">
            <div className="heading flex flex-col gap-6 2md:flex-row 2md:items-end 2md:gap-10">
              <div className="logo flex flex-col gap-2">
                <div className="text">
                  <p className="m-0 text-grey">Reviewed on</p>
                </div>
                <ImageComponent
                  src="https://framerusercontent.com/images/m5lUJySMW4fBB9Vz4Yw1vQM1YSI.svg"
                  className="w-[168px] h-[min-content] border-none shadow-none "
                />
              </div>
              <div className="reviews d-flex flex-column ">
                <div className="stars flex ">
                  {stars.map((src, index) => (
                    <ImageComponent
                      key={index}
                      src={src}
                      className="border-none shadow-none w-6 h-6"
                    />
                  ))}
                </div>
                <div className="text">
                  <p className="m-0">(48+ Reviews)</p>
                </div>
              </div>
            </div>
            <Button className="max-w-[max-content] bg-white ">
              <Link to={`#`} className="flex items-center justify-center gap-1">
                <span>See all Reviews</span>
                <IconWrapper className="w-6 h-6">
                  <Icon>
                    <FaArrowRight />
                  </Icon>
                </IconWrapper>
              </Link>
            </Button>
          </div>
          <ImageContainer />
        </div>

        <MarqueeComponent />
      </SlideUp>
    </section>
  );
};

export default ReviewSection;

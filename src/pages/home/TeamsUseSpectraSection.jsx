import LeftIn from "@/components/animations/LeftIn";
import SlideUp from "@/components/animations/SlideUp";
import Button from "@/components/Button";
import CustomHeading from "@/components/CustomHeading";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";
import ImageComponent from "@/components/ImageComponent";
import Section from "@/components/Section";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
  {
    src: "https://framerusercontent.com/images/XCtAKzczBaDnEe6Odvm06DYev4.svg",
  },
];

const TeamsUseSpectraSection = () => {
  return (
    <Section
      className={`teams-use-spectra-section p-[64px_24px] xl:p-[72px_24px] bg-cream`}
    >
      <div className="flex flex-col gap-8">
        <LeftIn delay={1.2}>
          <div className="flex flex-col gao-4 2md:gap-6 2md:flex-row ">
            <CustomHeading Tag="h4">
              More than <span className="text-orange-100">25,000</span> teams
              use Spectra
            </CustomHeading>
            <Button className="max-w-[max-content] border-none shadow-none bg-cream hover:bg-none hover:text-orange-100 ">
              <Link to={`#`} className="flex items-center justify-center gap-1">
                <span>Learn More</span>
                <IconWrapper className="w-6 h-6">
                  <Icon>
                    <FaArrowRight />
                  </Icon>
                </IconWrapper>
              </Link>
            </Button>
          </div>
        </LeftIn>
        <div className="relative flex gap-6 flex-col 2md:flex-row ">
          {images.map((image, index) => (
            <SlideUp
              delay={`${1.8 + Number(index) / 4}`}
              initial={{ y: "100%" }}
              duration={0.8}
              key={index}
              className={`flex-[1_0_0px]`}
            >
              <div className="border-[1px] border-black rounded-[12px] sm-box-shadow h-[80px] p-[12px_32px] flex justify-center items-center bg-white sm:w-[50%] sm:mx-auto 2md:w-full ">
                <ImageComponent
                  src={image.src}
                  className="w-[96px] h-[20px] border-none shadow-none "
                />
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TeamsUseSpectraSection;

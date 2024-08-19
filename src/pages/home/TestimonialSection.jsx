import SlideUp from "@/components/animations/SlideUp";
import CustomCarousel from "@/components/CustomCarousel";
import ImageComponent from "@/components/ImageComponent";
import TitleSubtitleDescriptionComponent from "@/components/TitleSubtitleDescriptionComponent";

const titleSubtitleDescriptionComponent = {
  subtitle: {
    text: "Testimonials",
    className: "",
  },
  heading: {
    tag: "h2",
    className: "relative xl:text-[56px]",
    text: "What Our Users Say !",
  },
  description: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    className: "",
  },
};

const TestimonialSection = () => {

  return (
    <section
      className={`testimonialSection p-[72px_24px] xl:p-[144px_24px_96px] relative overflow-hidden `}
    >
      <div className="container">
        <div className="flex flex-col max-w-[900px] gap-12 m-auto ">
          <SlideUp delay={1}>
            <TitleSubtitleDescriptionComponent
              className={`flex w-full flex-col gap-4`}
              {...titleSubtitleDescriptionComponent}
            />
          </SlideUp>
          <SlideUp delay={1}>
            <CustomCarousel />
          </SlideUp>
        </div>
      </div>
      <ImageComponent
        className="absolute top-0 bottom-0 left-0 right-0 -z-10 border-none shadow-none rounded-none hidden xl:block "
        src={`https://framerusercontent.com/images/vstJKiswXYTQqjYwAUXPVhc6ayI.png`}
      />
    </section>
  );
};

export default TestimonialSection;

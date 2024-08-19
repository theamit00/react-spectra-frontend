import RightIn from '@/components/animations/RightIn';
import SlideUp from '@/components/animations/SlideUp';
import ZoomIn from '@/components/animations/ZoomIn';
import Button from '@/components/Button';
import CustomHeading from '@/components/CustomHeading';
import Description from '@/components/Description';
import Icon from '@/components/Icon';
import Section from '@/components/Section'
import TitleSubtitleDescriptionComponent from '@/components/TitleSubtitleDescriptionComponent'
import VideoComponent from '@/components/VideoComponent';
import React from 'react'
import { IoIosPlayCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const titleSubtitleDescriptionComponent = {
  subtitle: {
    text: "our culture",
  },
  heading: {
    tag : 'h4',
    text: "Collaboration is at our core.",
  },
};

const details = [
  {
    stats: "48",
    highlightStates: "+",
    text: `They say that there's no shame in failing, the shame is in not trying.`,
  },
  {
    stats: "100",
    highlightStates: "+",
    text: `Step into the world of Spectra, where creativity knows no bounds`,
  },
];

const OurCultureSection = () => {
  return (
    <Section className={`p-[64px_24px] xl:p-[80px_24px]`}>
      <div className="max-w-[1074px] m-auto ">
        <div className="flex justify-between flex-col-reverse xl:flex-row gap-16 ">
          <SlideUp delay={1} className={`xl:max-w-[30%] w-full `}>
            <div className="flex flex-col gap-12 ">
              <h5>Celebrate diversity, focus on inclusion</h5>
              <div className="details flex flex-col md:flex-row xl:flex-col justify-between flex-1 gap-8 ">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="detail flex flex-col max-w-[fit-content] gap-4 "
                  >
                    <div className="flex flex-col gap-4">
                      <CustomHeading Tag="h1" className="xl:text-[64px]">
                        {detail.stats}
                        <span className="text-orange-100">
                          {detail.highlightStates}
                        </span>
                      </CustomHeading>
                    </div>
                    <Description className="">{detail.text}</Description>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>
          <div className="xl:max-w-[60%] w-full flex flex-col gap-10 ">
            <RightIn delay={1}>
              <TitleSubtitleDescriptionComponent
                {...titleSubtitleDescriptionComponent}
              />
            </RightIn>
            <div className="relative flex justify-center xl:max-w-[592px] w-full">
              <ZoomIn delay={1}>
                <VideoComponent className="overflow-hidden max-h-[428px] ">
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
              </ZoomIn>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default OurCultureSection
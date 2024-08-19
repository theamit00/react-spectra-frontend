import Section from '@/components/Section';
import TitleSubtitleDescriptionComponent from '@/components/TitleSubtitleDescriptionComponent'
import React from 'react'
import TeamCards from './TeamCards';
import SlideUp from '../animations/SlideUp';

const titleSubtitleDescriptionComponent = {
  subtitle: {
    text: "our team",
  },
  heading: {
    tag: "h2",
    text: "Meet our expert developers",
    className: "relative xl:text-[56px]",
  },
  description : {
    text : "Embrace a world of endless possibilities as you immerse yourself"
  }
};

const background = {
  src: "https://framerusercontent.com/images/vstJKiswXYTQqjYwAUXPVhc6ayI.png",
  className:'border-none w-full hidden xl:block absolute top-0 -z-10 left-0 right-0 bottom-0 shadow-none h-max rounded-[0px]'
};

const OurTeamSection = () => {
  return (
    <Section
      className={`OurTeamSection p-[64px_24px] xl:p-[80px_24px] relative overflow-hidden `}
      background={background}
    >
      <div className="flex flex-col items-center gap-20">
        <SlideUp delay={1} initial={{y:"50%"}} className={`max-w-[800px] w-full`}>
          <TitleSubtitleDescriptionComponent
            className="flex flex-col gap-[14px] text-center "
            {...titleSubtitleDescriptionComponent}
          />
        </SlideUp>
        <TeamCards />
      </div>
    </Section>
  );
}

export default OurTeamSection
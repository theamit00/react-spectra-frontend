import { RightIn, ZoomIn } from '@/components/animations';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import CompaniesHaveAlreadyComponent from '@/components/CompaniesHaveAlreadyComponent'
import Icon from '@/components/Icon';
import Section from '@/components/Section'
import React from 'react'
import { AiFillFire } from "react-icons/ai";

const details = [
  {
    icon: AiFillFire,
    text: "10 Million rows of data",
  },
  {
    icon: AiFillFire,
    text: "10 Million rows of data",
  },
  {
    icon: AiFillFire,
    text: "10 Million rows of data",
  },
];

const GlideForEnterprise = () => {
  return (
    <Section className={`p-[72px_24px] 2md:p-[96px_24px]`}>
      <div className="max-w-[1008px] flex flex-col m-auto gap-8 ">
        <CompaniesHaveAlreadyComponent className={`2md:gap-[120px]`} />
        <ZoomIn delay={1}>
          <div className="w-full p-[48px_24px] border-[1.5px] border-black rounded-3xl bg-cream flex flex-col gap-10 items-center 2md:p-16 2md:flex-row 2md:justify-between ">
            <div className="leftContainer max-w-[440px] w-full flex flex-col items-center gap-8 text-center 2md:text-left 2md:items-start ">
              <div className="header flex flex-col gap-4 ">
                <h3 className="xl:text-[40px]">Glide for Enterprise</h3>
                <p>
                  Elevate enterprise efficiency with Glide. Our robust solution
                  ensures peak performance and seamless collaboration.
                </p>
              </div>
              <div className="footer w-max ">
                <ButtonWithArrow
                  className={`w-max`}
                  isOrange={true}
                  text={`Contact Sale`}
                />
              </div>
            </div>
            <div className="rightContianer flex flex-col gap-8 ">
              {details.map((detail, index) => (
                <RightIn
                  delay={1 + Number(index) / 4}
                  inital={{ x: "10%" }}
                  key={index}
                >
                  <div className="badge w-max flex gap-2 border-[1.5px] border-black rounded-[8px] md-box-shadow p-[12px_16px]">
                    <Icon className="text-orange-100 w-6 h-6 flex justify-center items-center ">
                      <detail.icon className="w-[14px] h-[16px]" />
                    </Icon>
                    <p>{detail.text}</p>
                  </div>
                </RightIn>
              ))}
            </div>
          </div>
        </ZoomIn>
      </div>
    </Section>
  );
}

export default GlideForEnterprise
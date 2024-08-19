import React from "react";
import Image from "../Image";
import Description from "../Description";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import Icon from "../Icon";
import Line from "../Line";
import Links from "./Links";
import Subtitle from "../Subtitle";
import Button from "../Button";
import LeadForm from "../LeadForm";
import SlideUp from "../animations/SlideUp";

const icons = [
  { icon: FaTwitter },
  { icon: RiInstagramFill },
  { icon: FaFacebook },
];

const links1 = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Home",
  },
];
const links2 = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Home",
  },
];
const links3 = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Home",
  },
];

const Footer = () => {

  return (
    <footer className=" p-[80px_24px_64px] xl:p-[112px_24px_64px]">
      <div className="container gap-10 flex flex-col ">
        <SlideUp delay={1} initial={{ y: "30%" }}>
          <div className="flex flex-col gap-6 justify-between 2md:flex-row 2md:items-end ">
            <div className="flex flex-col gap-4 max-w-[384px] w-full ">
              <Image
                src="https://framerusercontent.com/images/G2UyL3nSfNqcBL7IW9MCbkRmP4.svg"
                alt=""
                className="w-[max-content]"
              />
              <Description className="sm-p">
                Leave mediocrity behind and embark on a journey of exploration
                with Spectra as your trusted companion.
              </Description>
            </div>

            <div className="flex gap-3 ">
              {icons.map((item,index) => (
                <Icon key={index} className="text-orange-100 w-10 h-10 border-black border-[1px] sm-box-shadow rounded-[8px] flex justify-center items-center ">
                  <item.icon className="w-4 h-4" />
                </Icon>
              ))}
            </div>
          </div>
        </SlideUp>

        <Line />

        <SlideUp delay={1} initial={{ y: "30%" }}>
          <div className="flex flex-col gap-8 xl:flex-row xl:gap-0 ">
            <div className="grid grid-cols-3 gap-8 flex-1 ">
              <Links links={links1} />
              <Links links={links2} />
              <Links links={links3} />
            </div>
            <div className="max-w-[416px] w-full flex flex-col gap-4 ">
              <Subtitle className="text-black">Newsletter</Subtitle>
              <LeadForm
                buttonClassName={`absolute top-1 right-1 bottom-1 shadow-[none_!important] border-none py-0`}
              />
            </div>
          </div>
        </SlideUp>

        <Line />

        <SlideUp delay={1} initial={{ y: "100%" }}>
          <div>
            <p className="sm-p">
              ©Made by <span className="text-black font-medium ">Amit</span> &
              powered by{" "}
              <span className="text-black font-medium">CodingBlocks</span>.
            </p>
          </div>
        </SlideUp>
      </div>
    </footer>
  );
};

export default Footer;

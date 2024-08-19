import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import Button from "../Button";
import ImageComponent from "../ImageComponent";
import Menus from "./Menus";
import FadeIn from "../animations/FadeIn";

const Navbar = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  const handleSetIsMenuBarOpen = ()=>{
    setIsMenuBarOpen(false);
  }

  return (
    <nav
      className={`navbar-section w-full fixed bg-white flex flex-col items-center justify-center p-6 z-[9999] top-0
      2md:absolute 2md:top-2 2md:flex-row
      ${isMenuBarOpen ? "gap-6" : ""}
      `}
    >
      <FadeIn delay={0.5} className={`w-full`}>
        <div className="container max-w-[1200px]">
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <ImageComponent
                src={
                  "https://framerusercontent.com/images/m5lUJySMW4fBB9Vz4Yw1vQM1YSI.svg"
                }
                alt={"logo"}
                className="border-none shadow-none"
              />
            </Link>
            <Menus className={`hidden 2md:flex`} />
            <Link to={"/signup"} className="hidden 2md:block">
              <Button isOrange={true}>Sign up for free</Button>
            </Link>
            <Icon
              className="w-[24px] h-[24px] block 2md:hidden "
              onClick={() => setIsMenuBarOpen(!isMenuBarOpen)}
            >
              {isMenuBarOpen ? (
                <FaXmark className="w-full h-full" />
              ) : (
                <FaBars className="w-full h-full" />
              )}
            </Icon>
          </div>
        </div>
      </FadeIn>
      <div
        className={`mobileView relative flex transition-all duration-300 ease-linear flex-col gap-6 origin-[50%_50%_0] 2md:hidden w-full ${
          isMenuBarOpen ? "translate-y-0 h-full" : "translate-y-[-150%] h-0"
        } `}
      >
        <Menus
          className={`flex flex-col relative transition-all duration-300 ${
            isMenuBarOpen ? "flex" : "hidden"
          }`}
          handleSetIsMenuBarOpen={handleSetIsMenuBarOpen}
        />
        <Link
          to={"/signup"}
          className={`flex relative justify-center transition-all duration-300 ${
            isMenuBarOpen ? "flex" : "hidden"
          } `}
        >
          <Button isOrange={true} className={`w-full`}>
            Sign up for free
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

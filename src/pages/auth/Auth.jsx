import CompaniesHaveAlreadyComponent from "@/components/CompaniesHaveAlreadyComponent";
import ImageComponent from "@/components/ImageComponent";
import Section from "@/components/Section";
import React from "react";
import SignUp from "./SignUp";
import { Link, useLocation } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import Seperator from "./Seperator";
import Subtitle from "@/components/Subtitle";
import { Login } from "..";
import { SlideUp, ZoomIn } from "@/components/animations";

const Auth = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Section className={`p-[144px_24px_72px] 2md:p-[128px_24px_96px]`}>
      <div className="flex flex-col items-center gap-14 xl:flex-row xl:justify-between xl:gap-0">
        <SlideUp delay={1} className="max-w-[384px] w-full ">
          <div className="formContainer flex flex-col gap-10 justify-center h-full">
            <div className="header flex flex-col gap-2 ">
              <Subtitle>
                {location.pathname === "/signup" ? "Register" : "Login"}
              </Subtitle>
              <h4>Get Started Now!</h4>
            </div>
            <div className="footer flex flex-col gap-16 ">
              <div className="formContainer flex flex-col gap-6 ">
                {location.pathname === "/signup" ? <SignUp /> : <Login />}

                <Seperator />

                <GoogleButton />
              </div>
              <p className="alreadyhaveAccount sm-p">
                {location.pathname === "/signup" ? (
                  <>
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="text-orange-100 hover:underline "
                    >
                      Login
                    </Link>{" "}
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <Link
                      to={"/signup"}
                      className="text-orange-100 hover:underline "
                    >
                      Register
                    </Link>
                  </>
                )}
              </p>
            </div>
          </div>
        </SlideUp>
        <ZoomIn delay={1.4} className={`w-full max-w-[100%] 2md:max-w-[75%] xl:max-w-[60%] `}>
          <div className="rightContainer flex flex-col gap-[94px] p-14 xl:p-[80px_64px] bg-cream rounded-[20px] ">
            <div className="header flex flex-col gap-8 ">
              <div className="flex flex-col gap-2">
                <h6>
                  Spectra{" "}
                  {location.pathname === "/signup" ? "Register" : "Login"}:
                </h6>
                <p className="sm-p">
                  Securely access your account. Welcome back to a seamless
                  experience with us.
                </p>
              </div>
              <ImageComponent
                src={`https://framerusercontent.com/images/heQWza4pf7FDCiZlOciQNhnUZA.png`}
                className="w-full h-[max-content]"
              />
            </div>
            <CompaniesHaveAlreadyComponent
              className={`footer flex flex-col gap-6 `}
            />
          </div>
        </ZoomIn>
      </div>
    </Section>
  );
};

export default Auth;

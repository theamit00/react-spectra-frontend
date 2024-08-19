import CustomHeading from "@/components/CustomHeading";
import Description from "@/components/Description";
import Icon from "@/components/Icon";
import React from "react";

const Feature = ({ detail, className }) => {
  return (
    <div
      className={`flex flex-col gap-8 ${
        className ? className.featureContainer : ""
      } `}
    >
      <Icon
        className={`w-[40px] h-[40px] text-grey ${
          className ? className.iconWrapper : ""
        } `}
      >
        <detail.icon
          className={`w-[40px] h-[40px] ${
            className ? className.icon : ""
          }`}
        />
      </Icon>
      <div className="flex flex-col gap-2">
        <CustomHeading Tag="h6">{detail.title}</CustomHeading>
        <Description className="sm-p">{detail.description}</Description>
      </div>
    </div>
  );
};

export default Feature;

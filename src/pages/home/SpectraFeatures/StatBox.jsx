import CustomHeading from "@/components/CustomHeading";
import Description from "@/components/Description";
import React from "react";

const StatBox = ({ detail }) => {
  return (
    <div className="detail flex flex-col items-center justify-center md-box-shadow p-[36px] bg-cream w-full border-[1.5px] border-black gap-2 rounded-[12px]">
      <div className="flex gap-4">
        <CustomHeading Tag="h3" className="text-[40px]" >
          {detail.stats}
          <span className="text-orange-100">{detail.highlightStates}</span>
        </CustomHeading>
      </div>
      <Description className="sm-p">{detail.text}</Description>
    </div>
  );
};

export default StatBox;

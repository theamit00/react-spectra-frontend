import Line from "@/components/Line";
import React from "react";

const MarqueeContent = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 border-[1.5px] border-black md-box-shadow rounded-[16px] p-6 w-[312px] bg-white ">
      <p className="sm-p">{data.review}</p>
      <Line />
      <div className="user-detail">
        <p className="sm-p font-medium ">{data.name}</p>
        <p className="sm-p text-grey">{`${data.designation} @${data.company}`}</p>
      </div>
    </div>
  );
};

export default MarqueeContent;

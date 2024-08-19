import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeContent from "./MarqueeContent";

const reviews = [
  {
    name: "Dianne Ameter",
    company: "flowbase",
    designation: "Product Designer",
    review:
      "Significant cost savings and improved efficiency since implementing this SaaS product.",
  },
  {
    name: "Dianne Ameter",
    company: "flowbase",
    designation: "Product Designer",
    review:
      "Significant cost savings and improved efficiency since implementing this SaaS product.",
  },
  {
    name: "Dianne Ameter",
    company: "flowbase",
    designation: "Product Designer",
    review:
      "Significant cost savings and improved efficiency since implementing this SaaS product.",
  },
  {
    name: "Dianne Ameter",
    company: "flowbase",
    designation: "Product Designer",
    review:
      "Significant cost savings and improved efficiency since implementing this SaaS product.",
  },
  {
    name: "Dianne Ameter",
    company: "flowbase",
    designation: "Product Designer",
    review:
      "Significant cost savings and improved efficiency since implementing this SaaS product.",
  },
  {
    name: "Dianne Ameter",
    company: "flowbase",
    designation: "Product Designer",
    review:
      "Significant cost savings and improved efficiency since implementing this SaaS product.",
  },
];

const MarqueeComponent = () => {
  return (
    <Marquee className="gap-8" speed={120} >
      <div className="flex flex-col">
        <div className="flex gap-8">
          {reviews.map((review,index) => (
            <MarqueeContent data={review} key={index} />
          ))}
        </div>
        <div className="empty-to-show-shadow h-1 "></div>
      </div>
    </Marquee>
  );
};

export default MarqueeComponent;

import React from "react";
import StatBox from "./StatBox";
import ZoomIn from "@/components/animations/ZoomIn";

const statDetails = [
  {
    stats: "96",
    highlightStates: "%",
    text: `TOTAL TRANSACTIONS`,
  },
  {
    stats: "124",
    highlightStates: "+",
    text: `CUSTOMERS`,
  },
  {
    stats: "124M",
    highlightStates: "+",
    text: `IMPRESSIONS`,
  },
  {
    stats: "10",
    highlightStates: "x",
    text: `SUCCESSFULL SPECTRA`,
  },
];

const Stats = () => {
  return (
    <div className="details grid grid-cols-1 sm:grid-cols-2 gap-8 ">
      {statDetails.map((detail, index) => (
        <ZoomIn delay={1 + Number(index) / 4} key={index}>
          <StatBox detail={detail} />
        </ZoomIn>
      ))}
    </div>
  );
};

export default Stats;

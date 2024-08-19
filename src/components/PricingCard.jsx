import React from "react";
import Icon from "./Icon";
import Line from "./Line";
import BulletPoints from "./BulletPoints";
import Button from "./Button";
import { Link } from "react-router-dom";
import IconWrapper from "./IconWrapper";
import { FaArrowRight } from "react-icons/fa";
import ButtonWithArrow from "./ButtonWithArrow";

const PricingCard = ({ detail, value }) => {
  return (
    <div
      className={`cardContainer p-6 flex flex-col gap-[26px] border-[1.5px] border-black rounded-[20px] md-box-shadow ${
        detail.type === "pro" ? "bg-cream" : "bg-white"
      } `}
    >
      <Icon className="w-max">
        <detail.icon className="w-[50px] h-[50px]" />
      </Icon>
      <div className="priceDetails flex flex-col gap-2 ">
        <h6 className="type capitalize">{detail.type}</h6>
        <div className={`${value}Price flex flex-col gap-1 `}>
          <h3 className="xl:text[40px]">${detail.price[value]}</h3>
          <p className="sm-p">
            Per User <span className="capitalize">{value}</span>
          </p>
        </div>
      </div>
      <Line />
      <div className="keyPointsContainer flex flex-col gap-4 ">
        <p className="sm-p text-grey capitalize font-medium ">
          for small teams
        </p>
        {detail.points.map((point) => (
          <BulletPoints>{point}</BulletPoints>
        ))}
      </div>
      <Line />
      <ButtonWithArrow
        className={`w-full`}
        isOrange={detail.type === "pro"}
        text={`Get Started`}
      />
    </div>
  );
};

export default PricingCard;

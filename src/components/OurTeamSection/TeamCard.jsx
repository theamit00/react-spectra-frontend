import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import Icon from '@/components/Icon';
import ImageComponent from '@/components/ImageComponent';
import { Link } from 'react-router-dom';

const icons = [
  { icon: FaTwitter, name : "twitter" },
  { icon: RiInstagramFill, name : "instagram" },
  { icon: FaFacebook, name : "facebook" },
];

const TeamCard = ({detail}) => {
  return (
    <div className="relative pb-10 ">
      <Card className="flex flex-col gap-6 border-[1.5px] border-black rounded-[16px] shadow-[0px_3px_0px_0px_#050505] p-6">
        <ImageComponent
          className="avatar absolute top-0 rounded-full w-[72px] h-[72px] -translate-y-[50%] bg-white "
          src={detail.avatar}
        />
        <CardHeader className="p-0 flex flex-col gap-3 ">
          <div className="socialLinks flex justify-end ">
            <div className="flex gap-4 ">
              {icons.map((item) => (
                <Link to={detail[item.name]}>
                  <Icon className="w-6 h-6 flex justify-center items-center ">
                    <item.icon className="w-4 h-4" />
                  </Icon>
                </Link>
              ))}
            </div>
          </div>
          <div className="userInfo flex flex-col">
            <h6 className="userName">{detail.name}</h6>
            <p className="userWorkingProfile">
              {detail.designation}{" "}
              <span className="text-orange-100">@Flowbase</span>
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <p>
            “Creative visionary with a passion for design, transforms ideas into
            stunning.”
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default TeamCard
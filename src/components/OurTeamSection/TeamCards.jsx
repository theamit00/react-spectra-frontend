import React from 'react'
import TeamCard from './TeamCard'
import SlideUp from '../animations/SlideUp';

const teamDetails = [
  {
    avatar:
      "https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png",
    name: "Amit",
    designation: "Frontend Developer",
    description:
      "Creative visionary with a passion for design, transforms ideas into stunning.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    avatar:
      "https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png",
    name: "Amit",
    designation: "Frontend Developer",
    description:
      "Creative visionary with a passion for design, transforms ideas into stunning.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    avatar:
      "https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png",
    name: "Amit",
    designation: "Frontend Developer",
    description:
      "Creative visionary with a passion for design, transforms ideas into stunning.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    avatar:
      "https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png",
    name: "Amit",
    designation: "Frontend Developer",
    description:
      "Creative visionary with a passion for design, transforms ideas into stunning.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    avatar:
      "https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png",
    name: "Amit",
    designation: "Frontend Developer",
    description:
      "Creative visionary with a passion for design, transforms ideas into stunning.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    avatar:
      "https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png",
    name: "Amit",
    designation: "Frontend Developer",
    description:
      "Creative visionary with a passion for design, transforms ideas into stunning.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
];

const TeamCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full ">
      {teamDetails.map((teamDetail) => (
        <SlideUp delay={1} >
          <TeamCard detail={teamDetail} />
        </SlideUp>
      ))}
    </div>
  );
}

export default TeamCards
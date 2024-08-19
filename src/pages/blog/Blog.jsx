import Button from '@/components/Button';
import Icon from '@/components/Icon';
import IconWrapper from '@/components/IconWrapper';
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { LuClock3 } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from 'react-icons/ri';

const icons = [
  { icon: FaTwitter, name: "twitter" },
  { icon: RiInstagramFill, name: "instagram" },
  { icon: FaFacebook, name: "facebook" },
];

const Blog = ({detail}) => {
  return (
    <div className="blogContainer flex flex-col gap-8 p-[16px_16px_32px] xl:p-12 border-b-[1.2px] border-lightGrey">
      <div className="flex flex-col gap-6 2md:flex-row justify-between">
        <div className='flex gap-6' >
          <div className="postDate flex gap-2">
            <Icon className="text-orange-100 w-6 h-6 ">
              <AiOutlineCalendar className="w-4 h-4" />
            </Icon>
            <span className="sm-p">July 21,2024</span>
          </div>
          <div className="readingTime flex gap-2">
            <Icon className="text-orange-100 w-6 h-6 ">
              <LuClock3 className="w-4 h-4" />
            </Icon>
            <span className="sm-p"> 12 min read</span>
          </div>
        </div>
        <div className="socialLinks flex justify-start 2md:justify-end ">
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
      </div>
      <div className="header flex flex-col max-w-[520px] gap-4 ">
        <h5 className="title ">Learn from Other Designers Mistakes</h5>
        <p className="description">
          Euismod aliquet odio cursus lacus, ut sit suspendisse ultrices. Etiam
          enim risus faucibus feugiat ut enim in sed tincidunt.
        </p>
      </div>
      <div className="footer">
        <Button className="max-w-[max-content] group p-[0px_!important] border-none shadow-none bg-white hover:bg-white hover:text-orange-100 ">
          <Link to={`#`} className="flex items-center justify-center gap-4">
            <span>Learn More</span>
            <IconWrapper className="w-8 h-8 text-white group-hover:translate-x-2 transition-all duration-500 bg-orange-100 rounded-full">
              <Icon>
                <FaArrowRight />
              </Icon>
            </IconWrapper>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Blog
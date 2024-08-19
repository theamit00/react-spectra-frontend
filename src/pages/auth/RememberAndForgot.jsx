import Icon from '@/components/Icon';
import React from 'react'
import { FaCheck } from 'react-icons/fa6';

const RememberAndForgot = ({isSelected, setIsSelected}) => {
  return (
    <div className="rememberMeForgotpassword flex justify-between ">
      <div className="rememberMe flex gap-2 ">
        <div className="checkbox w-6 h-6 flex justify-center items-center cursor-pointer" onClick={()=>setIsSelected(!isSelected)} >
          <Icon
            className={`w-[18px] h-[18px] p-1 border-[1px] transition-all duration-300 rounded-sm flex justify-center items-center 
          ${
            isSelected ? "bg-orange-100 border-orange-100" : "border-[#dfe1e7]"
          } `}
          >
            <FaCheck className="w-[14px] h-[14px] text-white " />
          </Icon>
        </div>
        <p className="sm-p">Remember me</p>
      </div>
      <p className="forgotPassword sm-p text-orange-100 ">Forgot Password</p>
    </div>
  );
}

export default RememberAndForgot
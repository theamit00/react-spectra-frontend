import React from 'react'

const Line = () => {
  return (
    <div className="h-[1px] w-full flex gap-[10px] items-center">
      <div className="left bg-[#eaeaeb] h-full flex-1"></div>
      <div className="dot bg-[#eaeaeb] w-1 h-1 rounded-full "></div>
      <div className="right bg-[#eaeaeb] h-full flex-1"></div>
    </div>
  );
}

export default Line
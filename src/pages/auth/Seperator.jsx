import Line from '@/components/Line';
import React from 'react'

const Seperator = () => {
  return (
    <div className="seperator flex gap-6 items-center ">
      <Line />
      <p className="inline-block text-[#8c8e92] text-[12px] leading-5">or</p>
      <Line />
    </div>
  );
}

export default Seperator
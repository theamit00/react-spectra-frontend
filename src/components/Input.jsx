import React from 'react'

const Input = ({ type, placeholder="", value="", name="", className=""}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className={` sm-p w-full p-[12px_16px] rounded-full inline-block bg-[#f7f7f7] ${className}`}
    />
  );
};

export default Input
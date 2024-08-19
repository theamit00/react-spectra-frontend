import React from 'react'

const Decor = ({className, children}) => {
  return (
    <div
      className={`decor w-[140px] h-[90%] absolute border-[1.5px] rounded-[20px] top-[32px] -z-10 border-black sm-box-shadow hidden 2md:block ${className}`}
    >
      {children}
    </div>
  );
}

export default Decor
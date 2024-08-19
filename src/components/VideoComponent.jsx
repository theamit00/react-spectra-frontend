import React from "react";

const VideoComponent = ({children, className,...props}) => {
  return (
    <div
      className={`video-container relative border-[1.5px] border-black md-box-shadow rounded-[16px] ${className}`}
    >
      <video
        src="https://www.youtube.com/watch?v=T4Thq_T3NgI"
        className="rounded-[inherit] w-full h-full block"
        loop=""
        autoPlay
        poster="https://framerusercontent.com/images/1r8r7iTwfEWVf0QMHDybOqtgxI.png"
        muted=""
        playsInline=""
      ></video>
      {children}
    </div>
  );
};

export default VideoComponent;

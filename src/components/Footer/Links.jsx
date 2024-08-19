import React from "react";
import { Link } from "react-router-dom";

const Links = ({ links }) => {
  return (
    <div className="flex flex-col gap-4" >
      <p className="text-black font-spaceGrotesk uppercase font-medium ">Pages</p>
      {links.map((link,index) => (
        <Link to={link.path} key={index} className="text-grey" >{link.name}</Link>
      ))}
    </div>
  );
};

export default Links;

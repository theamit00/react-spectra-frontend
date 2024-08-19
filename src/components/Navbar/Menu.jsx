import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ menu, handleSetIsMenuBarOpen = null }) => {
  const { path, name } = menu;
  return (
    <li className="" onClick={handleSetIsMenuBarOpen}>
      <NavLink
        to={path}
        className={({ isActive }) => `
            flex justify-center px-4 py-1 border-[1.2px] rounded-full transition-all duration-300 
            ${
              isActive
                ? "border-[1.2px] border-black sm-box-shadow"
                : "hover:shadow-[0px_2px_0px_0px_#eaeaeb] hover:bg-[#f7f7f7] border-transparent"
            }
        `}
      >
        <p>{name}</p>
      </NavLink>
    </li>
  );
};

export default Menu;

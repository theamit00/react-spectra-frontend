import React from "react";
import Menu from "./Menu";

const menus = [
    {
      id : new Date().getTime(),
      path : '/',
      name : 'Home',
    },
    {
      id : new Date().getTime(),
      path : '/about',
      name : 'About',
    },
    {
      id : new Date().getTime(),
      path : '/product',
      name : 'Product',
    },
    {
      id : new Date().getTime(),
      path : '/blog',
      name : 'Blog',
    },
    {
      id : new Date().getTime(),
      path : '/pricing',
      name : 'Pricing',
    },
  ]

const Menus = ({ className = "", handleSetIsMenuBarOpen }) => {
  return (
    <ul className={`gap-3 ${className} `}>
      {menus.map((menu, index) => (
        <Menu
          menu={menu}
          key={index}
          handleSetIsMenuBarOpen={handleSetIsMenuBarOpen}
        />
      ))}
    </ul>
  );
};

export default Menus;

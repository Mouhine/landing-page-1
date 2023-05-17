import React from "react";
import LinkList from "./linkList";
import RightContent from "./rightContent";

const NavBar = () => {
  return (
    <nav className="max-w-6xl mx-auto h-20 flex items-center justify-between ">
      <div>
        <img src="/Logo.svg" className=" h-[40px] " alt="" />
      </div>
      <LinkList />
      <RightContent />
    </nav>
  );
};

export default NavBar;

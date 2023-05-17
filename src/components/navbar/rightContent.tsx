import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
const RightContent = () => {
  return (
    <div className="flex items-center  space-x-2 ">
      <div className="relative  hidden md:block ">
        <input
          type="text"
          className="py-1 bg-[#F9F8F8] outline-none rounded-full border "
        />
        <div className=" absolute right-1 top-1 p-1 rounded-full text-white bg-[#7EB693]">
          <CiSearch size={18} />
        </div>
      </div>
      <div>{/* icon */}</div>
      <div className="py-1 flex items-center border space-x-3 px-1 rounded-full">
        <div className="p-1 rounded-full text-white bg-[#274C5B]">
          <AiOutlineShoppingCart size={18} />
        </div>
        <span className="text-[12px] font-thin">Cart (0)</span>
      </div>
    </div>
  );
};

export default RightContent;

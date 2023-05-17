import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
const CompanyInfo = () => {
  return (
    <div className="flex flex-col items-center space-y-6 py-4  ">
      <img src="/Logo.svg" alt="" />
      <p className="text-center text-[12px] w-[60%] text-[#D4D4D4] ">
        Simply dummy text of the printing and typesetting industry lorem ipuns
        simply a dummy text for printing
      </p>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full text-[#274C5B] bg-[#EFF6F1] ">
          <AiOutlineInstagram />
        </button>
        <button className="p-2 rounded-full text-[#274C5B] bg-[#EFF6F1] ">
          <AiOutlineFacebook />
        </button>
        <button className="p-2 rounded-full text-[#274C5B] bg-[#EFF6F1] ">
          {" "}
          <AiFillTwitterCircle />{" "}
        </button>
        <button className="p-2 rounded-full text-[#274C5B] bg-[#EFF6F1] ">
          <GrPinterest />
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;

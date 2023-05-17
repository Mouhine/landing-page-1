import React from "react";
import { BiUserCircle } from "react-icons/bi";
interface Props {
  title: string;
  username: string;
  imgUrl: string;
  desc: string;
}
const Card: React.FC<Props> = ({ title, username, imgUrl, desc }) => {
  return (
    <div className="relative">
      <div className="relative rounded-xl  overflow-hidden m-3 h-[40vh] ">
        <div className="absolute inset-0">
          <img src={`${imgUrl}`} alt="" />
          <div className="flex flex-col text-[10px] items-center justify-center absolute left-4 top-4 rounded-full w-[40px] h-[40px] border bg-white ">
            <span className="font-bold">25</span>
            <span>Nov</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl space-y-2 z-50 absolute w-[80%] left-1/2 -translate-x-1/2 top-[4rem] md:top-[10rem] shadow-md ">
        <div className="flex space-x-2">
          <BiUserCircle />
          <span className="text-[10px] text-[#D4D4D4] "> By {username} </span>
        </div>
        <h2 className="text-xl text-[#274C5B] font-bold">{title}</h2>
        <p className="text-[10px] text-[#D4D4D4]  ">{desc}</p>

        <button className="text-[10px]  bg-yellow-500 font-bold rounded-xl p-3 text-[#274C5B] ">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;

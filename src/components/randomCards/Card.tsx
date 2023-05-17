import React from "react";

interface Props {
  title: string;
  imgUrl: string;
}
const Card: React.FC<Props> = ({ title, imgUrl }) => {
  return (
    <div className="w-[100%] h-[300px] relative ">
      <img src={`${imgUrl}`} className="w-full h-full object-fill" alt="" />
      <button className="bg-white outline-none px-8 py-2 rounded-lg text-[#274C5B] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {" "}
        {title}
      </button>
    </div>
  );
};

export default Card;

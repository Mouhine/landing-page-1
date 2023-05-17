import React from "react";
import { AiFillStar } from "react-icons/ai";
interface Props {
  imgUrl: string;
  title: string;
  price: string;
}
const Product: React.FC<Props> = ({ imgUrl, title, price }) => {
  return (
    <div className="border bg-[#F9F8F8] px-2 w-[200px]  rounded-lg ">
      <button className="bg-[#274C5B] text-white p-1 rounded text-[10px] my-2 ">
        fresh
      </button>
      <img
        src={`${imgUrl}`}
        className="w-full h-[60%] object-fill rounded-xl"
        alt=""
      />
      <h3 className="text-[#274C5B] ml-6 my-1 text-[12px] font-bold ">
        {title}
      </h3>
      <hr />
      <div className="flex items-center justify-between pt-2 px-3 ">
        <span className="text-[10px] text-[#274C5B] font-bold ">
          {price + ",00 $"}
        </span>
        <div className="flex items-center text-orange-500 ">
          {new Array(5).fill(null).map((_, i) => {
            return <AiFillStar key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

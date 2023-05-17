import React from "react";

const Banner = () => {
  return (
    <div className="max-w-5xl p-2 mx-auto flex md:flex-row flex-col items-center justify-around lg:px-16 bg-[url('/Photo.jpg')]  min-h-[200px] rounded-xl border">
      <div>
        <h1 className=" text-2xl lg:text-5xl text-white w-[30%] font-bold">
          Subscribe to our Newsletter
        </h1>
      </div>
      <div className=" flex  flex-col  md:flex-row items-center md:space-x-4">
        <input
          type="text"
          placeholder="Your Email Address"
          className="py-1 md:py-3 mb-2 text-sm pl-3 rounded-lg "
        />
        <button className=" py-1 md:py-3 rounded-lg text-white px-6 bg-[#274C5B]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Banner;

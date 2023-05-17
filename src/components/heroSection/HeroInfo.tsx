import React from "react";

const HeroInfo = () => {
  return (
    <div className="flex items-center justify-center py-6 ">
      <section className="md:ml-[200px]  flex items-start flex-col space-y-4  ">
        <span className="slug">100% Natural Food</span>
        <h1 className="text-4xl text-[#274C5B] font-extrabold ">
          Choose the best healthier way of life
        </h1>
        <button className="text-[10px]  bg-yellow-500 rounded-lg p-3 text-[#274C5B] ">
          View All Products
        </button>
      </section>
    </div>
  );
};

export default HeroInfo;

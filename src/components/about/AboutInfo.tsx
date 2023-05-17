import React from "react";

const AboutInfo = () => {
  return (
    <div className="flex flex-col pt-8 pl-8 space-y-4 items-start lg:absolute left-[50%] max-w-[400px] ">
      <span className="slug text-[#7EB693]  font-thin ">About Us</span>
      <h2 className="text-[#274C5B] text-3xl font-bold ">
        We Believe in in Working Accredited Farmers
      </h2>
      <p className="text-[#D4D4D4] text-[12px] ">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry s standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <section className="space-y-4">
        <section className="flex items start space-x-5">
          <button className=" p-4 rounded-lg bg-white border">
            <img src="/Group 1.svg" alt="" />
          </button>
          <div>
            <h3 className="text-[#274C5B]">Organic Food Only</h3>
            <span className="text-[#D4D4D4] text-[12px] ">
              imply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry s
            </span>
          </div>
        </section>
        <section className="flex items start space-x-5">
          <button className="p-4 rounded-lg bg-white border">
            <img src="/Group 2.svg" alt="" />
          </button>
          <div>
            <h3 className="text-[#274C5B]">Quality Standards</h3>
            <span className="text-[#D4D4D4] text-[12px] ">
              imply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry s
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutInfo;

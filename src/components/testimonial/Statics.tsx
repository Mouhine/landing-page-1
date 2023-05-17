const Statics = () => {
  const STATICS = [
    {
      title: "100%",
      slug: "Organic",
    },
    {
      title: "285+",
      slug: "Active Product",
    },
    {
      title: "350+",
      slug: "Organic Orchad",
    },
    {
      title: "25",
      slug: "Years of Farming",
    },
  ];
  return (
    <div className="flex items-center flex-wrap justify-center lg:space-x-4 mt-8 ">
      {STATICS.map((s, i) => {
        return (
          <div className="w-[120px] m-1 h-[120px] rounded-full border flex text-center bg-[#EFF6F1] p-2 flex-col items-center justify-center border-[#7EB693] ">
            <h2 className="text-2xl font-bold text-[#274C5B]">{s.title}</h2>
            <span className="text-[#274C5B] text-[10px]">{s.slug}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Statics;

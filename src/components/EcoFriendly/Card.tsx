const Card = () => {
  return (
    <div className="w-[350px] h-[400px] absolute top-10 left-1 md:left-[40%] px-8 py-8 bg-white rounded-lg">
      <span className="slug text-[#7EB693] ">Eco Friendlly</span>
      <h2 className="text-[#274C5B] text-3xl font-bold ">
        Econis is a Friendly Organic Store
      </h2>
      <ul className="space-y-4 mt-4">
        <li>
          <h4 className="text-[#274C5B] text-sm ">
            Start with our company first
          </h4>
          <p className="text-[10px] text-[#D4D4D4] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem et
            provident accusantium dignissimos dolor nisi praesentium recusandae
            officiis numquam nesciunt.
          </p>
        </li>
        <li>
          {" "}
          <h4 className="text-[#274C5B] text-sm ">
            Start with our company first
          </h4>
          <p className="text-[10px] text-[#D4D4D4] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem et
            officiis numquam nesciunt.
          </p>
        </li>
        <li>
          <h4 className="text-[#274C5B] text-sm ">
            Start with our company first
          </h4>
          <p className="text-[10px] text-[#D4D4D4] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem et
            provident accusantium dignissimos dolor nisi praesentium recusandae
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Card;

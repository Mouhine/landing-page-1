import { AiOutlineStar } from "react-icons/ai";
import Statics from "./Statics";
const Testimonial = () => {
  return (
    <div className='bg-[url("/Image.jpg")] mt-8 bg-cover bg-center mx-auto lg:min-h-[100vh]  '>
      <section className="container pt-[80px] mx-auto flex flex-col items-center justify-center">
        <span className="slug text-[#274C5B]">Testimonial</span>
        <h2 className="text-[#274C5B] text-3xl text-center lg:text-left font-bold my-2 ">
          What our customer saying
        </h2>
        <div className=" ">
          <div className="w-[100px] h-[100px] rounded-full">
            <img
              src="/Photo-5.jpg"
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
          <div className="flex items-center text-orange-400 space-x-1">
            {new Array(5).fill(null).map((_, i) => {
              return <AiOutlineStar key={i} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-[50%] text-center">
          <p className="text-[12px] text-[#D4D4D4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, provident illum error corporis consequuntur voluptas,
            suscipit quis, expedita eligendi molestiae tempora dolorem
            temporibus nihil quos exercitationem natus iure dolor eos!
          </p>
          <span className="text-[#274C5B]">Sara Taylor</span>
          <span className="text-[12px] text-[#D4D4D4]">Consumer</span>
        </div>
        <hr className="w-[60%] my-4 " />
        <Statics />
      </section>
    </div>
  );
};

export default Testimonial;

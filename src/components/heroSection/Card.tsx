import React from "react";
interface Props {
  imgUrl: string;
  slug: string;
  title: string;
  fontColor: string;
}
const Card: React.FC<Props> = ({ imgUrl, slug, title, fontColor }) => {
  return (
    <div className=" rounded-2xl h-[200px] max-w-[400px] relative ">
      <img src={imgUrl} alt="" className="rounded-2xl h-full w-full" />
      <div className="absolute top-16 px-4 ">
        <span className="slug text-[#7EB693] ">{slug}</span>
        <h2
          className={`text-2xl text-[${
            fontColor || "#FFFFFF"
          }] w-[70%] font-bold`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;

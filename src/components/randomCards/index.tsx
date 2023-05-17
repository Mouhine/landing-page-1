import React from "react";
import Card from "./Card";

const FoodCards = () => {
  const RANDOMCARDS = [
    {
      title: "Organic Juice",
      imgUrl: "/Photo-1.jpg",
    },
    {
      title: "Organic Juice",
      imgUrl: "/Photo-2.jpg",
    },
    {
      title: "Organic Juice",
      imgUrl: "/Photo-3.jpg",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3  bg-[#7EB693] py-8    my-8 mx-auto lg:space-x-4">
      {RANDOMCARDS.map((r, i) => {
        return <Card title={r.title} imgUrl={r.imgUrl} key={i} />;
      })}
    </div>
  );
};

export default FoodCards;

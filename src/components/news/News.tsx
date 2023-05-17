import React from "react";
import Card from "./Card";

const News = () => {
  const NEWS = [
    {
      userName: "Rachi Card",
      title: "The benifits of Vitamin D & How to get it",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel quo, aliquid eligendi suscipit deleniti!",
      imgUrl: "/bg-1.jpg",
    },
    {
      userName: "Rachi Card",
      title: "The benifits of Vitamin D & How to get it",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel quo, aliquid eligendi suscipit deleniti!",
      imgUrl: "/bg-2.jpg",
    },
  ];
  return (
    <div className="max-w-4xl min-h-screen mx-auto">
      <div className="max-w-4xl pt-8  mx-auto flex-col md:flex md:flex-row items-center justify-between">
        <section>
          <span className="slug">News</span>
          <h2 className="text-2xl text-[#274C5B] w-[60%] font-bold">
            Discover Weekly content about organic food and, more
          </h2>
        </section>
        <button className="text-[10px]  bg-yellow-500 rounded-xl p-3 text-[#274C5B] ">
          View All Products
        </button>
      </div>

      <section className="grid lg:grid-cols-2">
        {NEWS.map((n, i) => {
          return (
            <Card
              key={i}
              title={n.title}
              imgUrl={n.imgUrl}
              username={n.userName}
              desc={n.desc}
            />
          );
        })}
      </section>
    </div>
  );
};

export default News;

import Card from "./Card";

const Cards = () => {
  const CARDS = [
    {
      imgUrl: "/Photo-7.jpg",
      slug: "Offer!!",
      title: "Get 10% off on Vegetables",
      fontColor: "#274C5B",
    },
    {
      imgUrl: "/Photo-6.jpg",
      slug: "Natural!!",
      title: "Get Garden Fresh Fruits",
      fontColor: "#FFFFFF",
    },
  ];
  return (
    <div className="max-w-5xl  flex flex-col items-center md:flex md:flex-row justify-center my-12 space-y-4 md:space-y-0 md:space-x-6 mx-auto">
      {CARDS.map((card, i) => {
        return (
          <Card
            title={card.title}
            imgUrl={card.imgUrl}
            slug={card.slug}
            fontColor={card.fontColor}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Cards;

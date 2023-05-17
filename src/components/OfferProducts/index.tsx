import Product from "../products/Product";

const OfferProducts = () => {
  const Products = [
    {
      imgUrl: "/Photo-24.jpg",
      title: "product 1",
      price: "13",
    },
    {
      imgUrl: "/Photo-27.jpg",
      title: "product 2",
      price: "18",
    },
    {
      imgUrl: "/Photo-29.jpg",
      title: "product 3",
      price: "17",
    },
    {
      imgUrl: "/Photo-30.jpg",
      title: "product 4",
      price: "15",
    },
  ];
  return (
    <div className="bg-[#274C5B] lg:min-h-[100vh] ">
      <div className="max-w-4xl pt-8  mx-auto flex-col md:flex md:flex-row items-center justify-between">
        <section>
          <span className="slug">Offer</span>
          <h2 className="text-3xl text-white w-[80%]  font-bold">
            We Offer Organic For You
          </h2>
        </section>
        <button className="text-[10px]  bg-yellow-500 rounded-xl p-3 text-[#274C5B] ">
          View All Products
        </button>
      </div>

      <section className="max-w-4xl mx-auto place-content-center pb-2 grid md:grid-cols-4 lg:grid-cols-4 grid-rows-1 gap-2 lg:min-h-[50vh] mt-8 ">
        {Products.map((p, i) => {
          return (
            <Product
              title={p.title}
              key={i}
              imgUrl={p.imgUrl}
              price={p.price}
            />
          );
        })}
      </section>
    </div>
  );
};

export default OfferProducts;

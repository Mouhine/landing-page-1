import Product from "./Product";

const Products = () => {
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
    {
      imgUrl: "/Photo-28.jpg",
      title: "product 1",
      price: "13",
    },
    {
      imgUrl: "/Photo-30.jpg",
      title: "product 6",
      price: "16",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <span className="slug">Categories</span>
        <h2 className="text-[#274C5B] text-3xl my-3 font-bold">Our Products</h2>
      </div>
      <section className="grid  place-content-center md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 lg:min-h-[90vh] max-w-2xl mx-auto gap-4">
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

export default Products;

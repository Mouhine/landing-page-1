import Cards from "./Cards";
import HeroInfo from "./HeroInfo";

const Hero = () => {
  return (
    <div className="mb-8">
      <section className="bg-[#F9F8F8] p-2  flex flex-col md:flex-row justify-between ">
        <HeroInfo />
        <img
          src="/Banner.jpg"
          className="md:w-1/2 md:block hidden object-fill "
          alt=""
        />
      </section>
      <Cards />
    </div>
  );
};

export default Hero;

import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <div className="max-h-[100vh] pb-2 my-8 bg-[#F9F8F8] relative ">
      <section className="container flex items-center  mx-auto ">
        <img
          src="/Photo.png"
          className=" ml-[50px] w-[600px] h-[500px] hidden lg:block "
          alt=""
        />
        <AboutInfo />
      </section>
    </div>
  );
};

export default About;

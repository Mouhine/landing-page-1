import Banner from "./Banner";
import ContactUs from "./ContactUs";
import CompanyInfo from "./CompanyInfo";
import PagesList from "./PagesList";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <Banner />
      <div className=" flex-col md:flex md:flex-row items-start h-full  max-w-4xl space-x-4 mx-auto">
        <ContactUs />
        <div className="md:w-[1px] bg-gray-300 w-full md:h-[200px] mt-8 "></div>
        <CompanyInfo />
        <div className="md:w-[1px] bg-gray-300 md:h-[200px] mt-8 "></div>
        <PagesList />
      </div>
    </div>
  );
};

export default Footer;

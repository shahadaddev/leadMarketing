import Navbar from "../../SharedComponents/Navbar/Navbar";
import ServicePageTitle from "./ServicePageTitle";
import serviceImg from "../../../assets/images/servicesImg.jpg";
import ServicePageContent from "./ServicePageContent";
import ContactForm from "../../ContactComponents/ContactHome/ContactForm";

const ServicePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl lg:mx-auto xl:pt-24 xl:py-0 mx-4 lg:mt-8">
        <div className="bg-gray-100 lg:px-10 px-5 lg:py-10 py-8 rounded-3xl flex lg:flex-row flex-col justify-between items-center space-y-8 lg:space-y-0">
          <ServicePageTitle></ServicePageTitle>
          <div>
            <img className="rounded-2xl" src={serviceImg} alt="" />
          </div>
        </div>{" "}
      </div>
      <div className="service-banner h-fit lg:my-20 my-14 text-gray-700">
        <div className="max-w-7xl mx-auto">
          <ServicePageContent></ServicePageContent>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ServicePage;

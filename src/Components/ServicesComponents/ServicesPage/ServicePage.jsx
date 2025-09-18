import Navbar from "../../SharedComponents/Navbar/Navbar";
import ServicePageTitle from "./ServicePageTitle";
import serviceImg from "../../../assets/images/servicesImg.jpg";
import ServicePageContent from "./ServicePageContent";
import ContactForm from "../../ContactComponents/ContactHome/ContactForm";

const ServicePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl lg:mx-auto xl:pt-24 xl:py-0 py-14 mx-4 mt-8">
        <div className="bg-gray-100 px-10 py-10 rounded-3xl flex justify-between items-center">
          <ServicePageTitle></ServicePageTitle>
          <div>
            <img className="rounded-2xl" src={serviceImg} alt="" />
          </div>
        </div>{" "}
      </div>
      <div className="service-banner h-fit my-20">
        <div className="max-w-7xl mx-auto">
          <ServicePageContent></ServicePageContent>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ServicePage;
